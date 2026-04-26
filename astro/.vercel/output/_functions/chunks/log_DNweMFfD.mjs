import { c as createComponent } from './astro-component_BSekfyeL.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CiE__XY9.mjs';
import { $ as $$BaseLayout, a as $$Window } from './Window_NEPDAS8o.mjs';

const $$Log = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Log;
  const entries = [
    {
      date: "apr 19 2026 1:36",
      title: "commit 2-8: the site exists (publically!) and pushed first log update",
      body: `Okay so it took a second to figure out the Vercel deployment. I had an issue with the Git because I initally launched Astro with the root folder as /astro
    but I wanted the git to be in the top level directory. Then I had some issues with the relative paths in my project and writing folders that was causing Vercel to
    fail deployment, but with some help from Gemini I was able to figure it out. Now the website is live! And it is past my bedtime...`,
      tags: ["astro", "vibe-coding", "design", "Gemini"]
    },
    {
      date: "apr 18 2026 11:30 PM",
      title: "commit 1: the site exists (locally)",
      body: `Built the homepage tonight with Claude. Chose Astro over Next.js because Claude recommended it for the content that I wanted to host on this site. 
    The aesthetic is retro user interface × space with cute pastel colors, stars, and some flowers. This site is in part inspired by Alex Turner's turntrout.com, he has 5,922 commits 
    and a beautiful site. I have 1 and a lot of work to do, but I am starting somewhere.`,
      tags: ["astro", "vibe-coding", "design", "Claude"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Process Log", "description": "Mia's build log — documenting the process, not just the product", "data-astro-cid-nr4kxecf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="padding: 20px 18px;" data-astro-cid-nr4kxecf> ${renderComponent($$result2, "Window", $$Window, { "title": "process.log ✦", "data-astro-cid-nr4kxecf": true }, { "default": ($$result3) => renderTemplate` <p class="section-label" data-astro-cid-nr4kxecf>► build log — documenting the process, not just the product</p> ${entries.map((e) => renderTemplate`<div class="log-entry" data-astro-cid-nr4kxecf> <div class="log-header" data-astro-cid-nr4kxecf> <span class="log-date" data-astro-cid-nr4kxecf>${e.date}</span> <div class="log-tags" data-astro-cid-nr4kxecf> ${e.tags.map((t) => renderTemplate`<span class="tag" data-astro-cid-nr4kxecf>#${t}</span>`)} </div> </div> <h2 class="log-title" data-astro-cid-nr4kxecf>${e.title}</h2> <p class="log-body" data-astro-cid-nr4kxecf>${e.body}</p> </div>`)}${entries.length === 0 && renderTemplate`<div class="terminal" style="margin-top: 8px;" data-astro-cid-nr4kxecf> <div class="term-line" data-astro-cid-nr4kxecf><span class="term-comment" data-astro-cid-nr4kxecf># nothing here yet — check back soon ✿</span></div> <div class="term-line" data-astro-cid-nr4kxecf><span class="term-prompt" data-astro-cid-nr4kxecf>status</span> = <span class="term-value" data-astro-cid-nr4kxecf>"starting soon"</span> <span class="term-cursor" data-astro-cid-nr4kxecf></span></div> </div>`}` })} </div> ` })}`;
}, "/Users/miacollins/personal_website/astro/src/pages/log.astro", void 0);

const $$file = "/Users/miacollins/personal_website/astro/src/pages/log.astro";
const $$url = "/log";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Log,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
