const attempts = /* @__PURE__ */ new Map();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1e3;
function isRateLimited(ip) {
  const now = Date.now();
  const prev = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  attempts.set(ip, [...prev, now]);
  return prev.length >= MAX_ATTEMPTS;
}
const POST = async ({ request }) => {
  const headers = { "Content-Type": "application/json" };
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ ok: false, error: "too many attempts — try again in 15 minutes" }),
      { status: 429, headers }
    );
  }
  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "invalid JSON" }), { status: 400, headers });
  }
  const { action, passkey } = payload;
  {
    return new Response(
      JSON.stringify({ ok: false, error: "server misconfigured — LOG_PASSKEY not set" }),
      { status: 500, headers }
    );
  }
};
const GET = async () => new Response(JSON.stringify({ ok: false, error: "method not allowed" }), { status: 405 });

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
