import { c as createComponent } from './astro-component_BSekfyeL.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_CiE__XY9.mjs';
import { $ as $$BaseLayout, a as $$Window } from './Window_NEPDAS8o.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pieces = [
    {
      slug: "constitutional-ai",
      title: "On Constitutional AI and Scalable Oversight",
      type: "research paper",
      date: "2025",
      status: "published",
      summary: "An analysis of Anthropic's Constitutional AI framework and its implications for scalable oversight of large language models."
    },
    {
      slug: "ai-deception",
      title: "Deception in Agentic AI Systems",
      type: "research paper",
      date: "spring 2026",
      status: "in progress",
      summary: "Examining opportunistic deception behaviors in agentic AI, inspired by findings in the June 2025 Agentic AI paper."
    },
    {
      slug: "ecopulse-reflections",
      title: "What EcoPulse taught me about ML deployment",
      type: "project reflection",
      date: "2024",
      status: "published",
      summary: "Lessons from building and deploying a full-stack ML app — including the training-serving skew problem I still think about."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Writing", "description": "Essays, papers, and reflections by Mia Collins", "data-astro-cid-cp3zdscb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="padding: 20px 18px;" data-astro-cid-cp3zdscb> ${renderComponent($$result2, "Window", $$Window, { "title": "writing/ ♡", "data-astro-cid-cp3zdscb": true }, { "default": ($$result3) => renderTemplate` <p class="section-label" data-astro-cid-cp3zdscb>► essays &amp; papers</p> ${pieces.map((p) => renderTemplate`<a${addAttribute(`/writing/${p.slug}`, "href")} class="write-card" data-astro-cid-cp3zdscb> <div class="write-header" data-astro-cid-cp3zdscb> <span class="write-type" data-astro-cid-cp3zdscb>${p.type}</span> <span class="write-date" data-astro-cid-cp3zdscb>${p.date}</span> </div> <p class="write-title" data-astro-cid-cp3zdscb>${p.title}</p> <p class="write-summary" data-astro-cid-cp3zdscb>${p.summary}</p> ${p.status === "in progress" && renderTemplate`<span class="wip-badge" data-astro-cid-cp3zdscb>in progress ✿</span>`} </a>`)}` })} </div> ` })}`;
}, "/Users/miacollins/personal_website/astro/src/pages/writing/index.astro", void 0);

const $$file = "/Users/miacollins/personal_website/astro/src/pages/writing/index.astro";
const $$url = "/writing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
