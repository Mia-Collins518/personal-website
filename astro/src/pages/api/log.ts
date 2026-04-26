// src/pages/api/log.ts
// Vercel serverless function — runs on the server, never in the browser.
//
// SECURITY MODEL:
//   - LOG_PASSKEY is a Vercel environment variable. It never touches client JS.
//   - GITHUB_TOKEN is a fine-grained PAT with only Contents: write on this repo.
//   - Both are set in the Vercel dashboard, not in any file you commit.
//
// HASH ARCHITECTURE (relevant to your data structures class):
//   GitHub's storage is a content-addressable store — every object (blob, tree,
//   commit) is keyed by SHA-1(content). When we call the Contents API, GitHub
//   computes SHA-1 of the file blob and uses that as the object key. The commit
//   SHA links to the tree SHA, which links to blob SHAs — a DAG where every
//   node address IS its hash. This is why git is O(1) lookup by hash.

import type { APIRoute } from 'astro';

// ── Slug generator ──
// Turns "My Cool Entry" → "2026-04-18-my-cool-entry"
function makeSlug(title: string, date: string): string {
  const safe = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60);
  return `${date}-${safe}`;
}

// ── Markdown formatter ──
function buildMarkdown(title: string, body: string, tags: string[], date: string): string {
  const tagList = tags.map(t => `"${t}"`).join(', ');
  return `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
tags: [${tagList}]
---

${body}
`;
}

// ── GitHub Contents API ──
async function commitToGitHub(
  filename: string,
  content: string,
  token: string,
  owner: string,
  repo: string,
  branch: string,
): Promise<{ sha: string }> {
  const path    = `src/content/log/${filename}.md`;
  const encoded = btoa(unescape(encodeURIComponent(content))); // utf-8 safe base64
  const url     = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  // Check if file already exists (needed to provide its SHA for updates)
  let existingSha: string | undefined;
  const check = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (check.ok) {
    const existing = await check.json();
    existingSha = existing.sha;
  }

  const body: Record<string, string> = {
    message: `log: ${filename}`,
    content: encoded,
    branch,
  };
  if (existingSha) body.sha = existingSha;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub API ${res.status}: ${err}`);
  }

  const data = await res.json();
  return { sha: data.commit?.sha ?? '' };
}

// ── Rate limiting (simple in-memory, resets per cold start) ──
// Stores attempt timestamps in a Map keyed by IP — O(1) lookup.
// Not a substitute for real rate limiting but adds friction to brute force.
const attempts = new Map<string, number[]>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS    = 15 * 60 * 1000; // 15 min

function isRateLimited(ip: string): boolean {
  const now  = Date.now();
  const prev = (attempts.get(ip) ?? []).filter(t => now - t < WINDOW_MS);
  attempts.set(ip, [...prev, now]);
  return prev.length >= MAX_ATTEMPTS;
}

// ── Handler ──
export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };

  // Rate limit by IP
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ ok: false, error: 'too many attempts — try again in 15 minutes' }),
      { status: 429, headers },
    );
  }

  // Parse body
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'invalid JSON' }), { status: 400, headers });
  }

  const { action, passkey } = payload;

  // ── Validate passkey (constant-time compare to avoid timing attacks) ──
  const PASSKEY = import.meta.env.LOG_PASSKEY;
  if (!PASSKEY) {
    return new Response(
      JSON.stringify({ ok: false, error: 'server misconfigured — LOG_PASSKEY not set' }),
      { status: 500, headers },
    );
  }

  // Constant-time string comparison
  function safeCompare(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return diff === 0;
  }

  if (typeof passkey !== 'string' || !safeCompare(passkey, PASSKEY)) {
    return new Response(
      JSON.stringify({ ok: false, error: 'incorrect passkey' }),
      { status: 401, headers },
    );
  }

  // ── AUTH action: just validate the key ──
  if (action === 'auth') {
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }

  // ── COMMIT action: write the entry to GitHub ──
  if (action === 'commit') {
    const title  = typeof payload.title === 'string' ? payload.title.trim() : '';
    const body   = typeof payload.body  === 'string' ? payload.body.trim()  : '';
    const tags   = Array.isArray(payload.tags) ? (payload.tags as string[]).map(String) : [];
    const date   = typeof payload.date  === 'string' ? payload.date : new Date().toISOString().split('T')[0];

    if (!title) return new Response(JSON.stringify({ ok: false, error: 'title required' }), { status: 400, headers });
    if (!body)  return new Response(JSON.stringify({ ok: false, error: 'body required' }),  { status: 400, headers });

    const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
    const GITHUB_OWNER = import.meta.env.GITHUB_OWNER; // your GitHub username
    const GITHUB_REPO  = import.meta.env.GITHUB_REPO;  // e.g. "personal-website"
    const GITHUB_BRANCH = import.meta.env.GITHUB_BRANCH ?? 'main';

    if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
      return new Response(
        JSON.stringify({ ok: false, error: 'server misconfigured — GitHub env vars not set' }),
        { status: 500, headers },
      );
    }

    const slug    = makeSlug(title, date);
    const content = buildMarkdown(title, body, tags, date);

    try {
      const { sha } = await commitToGitHub(slug, content, GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH);
      return new Response(JSON.stringify({ ok: true, filename: `${slug}.md`, sha }), { status: 200, headers });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[log api] github error:', msg);
      return new Response(JSON.stringify({ ok: false, error: msg }), { status: 500, headers });
    }
  }

  return new Response(JSON.stringify({ ok: false, error: 'unknown action' }), { status: 400, headers });
};

// Block GET requests to this endpoint
export const GET: APIRoute = async () =>
  new Response(JSON.stringify({ ok: false, error: 'method not allowed' }), { status: 405 });