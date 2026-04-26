import { c as createComponent } from './astro-component_BSekfyeL.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_CiE__XY9.mjs';
import { $ as $$BaseLayout, a as $$Window } from './Window_NEPDAS8o.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const projects = [
    {
      slug: "ecopulse",
      title: "EcoPulse",
      desc: "CNN digit classifier with FLOPs tracking & full-stack deployment",
      stack: ["PyTorch", "FastAPI", "Next.js"],
      status: "ongoing",
      year: "2024",
      github: "https://github.com/miacollins/ecopulse"
    },
    {
      slug: "cai-demo",
      title: "Constitutional AI Demo",
      desc: "Interactive critique-revision cycle visualizer from the CAI paper",
      stack: ["Claude API"],
      status: "in progress",
      year: "2026",
      github: ""
    },
    {
      slug: "this-site",
      title: "this website",
      desc: "Astro + retro OS aesthetic, vibe coded & documented as I go",
      stack: ["Astro", "Vercel"],
      status: "ongoing",
      year: "2026",
      github: "https://github.com/miacollins/personal-website"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects", "description": "Mia's coding projects", "data-astro-cid-2hwget37": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="padding: 20px 18px;" data-astro-cid-2hwget37> ${renderComponent($$result2, "Window", $$Window, { "title": "projects/ ✦", "data-astro-cid-2hwget37": true }, { "default": ($$result3) => renderTemplate` <p class="section-label" data-astro-cid-2hwget37>► all work</p> ${projects.map((p) => renderTemplate`<div class="proj-card" data-astro-cid-2hwget37> <div class="proj-header" data-astro-cid-2hwget37> <span class="proj-title" data-astro-cid-2hwget37>${p.title}</span> <span${addAttribute(`proj-status ${p.status === "ongoing" || p.status === "in progress" ? "wip" : "done"}`, "class")} data-astro-cid-2hwget37> ${p.status} </span> </div> <p class="proj-desc" data-astro-cid-2hwget37>${p.desc}</p> <div class="proj-footer" data-astro-cid-2hwget37> <span class="proj-meta" data-astro-cid-2hwget37>${p.stack.join(" · ")} ── ${p.year}</span> ${p.github && renderTemplate`<a${addAttribute(p.github, "href")} class="proj-link" target="_blank" rel="noopener" data-astro-cid-2hwget37>
github →
</a>`} </div> </div>`)}` })} </div> ` })}`;
}, "/Users/miacollins/personal_website/astro/src/pages/projects/index.astro", void 0);

const $$file = "/Users/miacollins/personal_website/astro/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
