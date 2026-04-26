import { c as createComponent } from './astro-component_BSekfyeL.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CiE__XY9.mjs';
import { $ as $$BaseLayout, a as $$Window } from './Window_NEPDAS8o.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About", "description": "About Mia Collins — CS student, AI/ML, alignment", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="about-grid" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Window", $$Window, { "title": "about.txt ♡", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="prose" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Hi, I'm Mia — a CS student at Columbia interested in AI/ML, and specifically
          in safety, security, and alignment research. My dream is to work on alignment
          at a place like Anthropic someday, which means I spend a lot of time thinking
          about how to make AI systems that are actually trustworthy.
</p> <p data-astro-cid-kh7btl4r>
I learn best by building things. This site is a living log of that process —
          projects, papers, reflections, and the messy in-between. I document my use of
          AI tools like Claude as part of the work itself, because I think how we interact
          with AI is its own kind of skill worth developing in public.
</p> <p data-astro-cid-kh7btl4r>
Right now I'm researching deception in agentic AI systems and building a
          Constitutional AI demo to understand that framework from the inside.
          Previously I built EcoPulse, a full-stack ML app that tracks energy consumption
          of the AI training lifecycle — the image preprocessing is still not great and
          I am choosing to live with that.
</p> </div> ` })} <div class="right-col" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Window", $$Window, { "title": "links/ ✦", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <p class="section-label" data-astro-cid-kh7btl4r>► find me</p> <div class="links-list" data-astro-cid-kh7btl4r> <a href="https://github.com/miacollins" class="ext-link" target="_blank" rel="noopener" data-astro-cid-kh7btl4r>github →</a> <a href="https://linkedin.com/in/miacollins" class="ext-link" target="_blank" rel="noopener" data-astro-cid-kh7btl4r>linkedin →</a> <a href="mailto:mc@columbia.edu" class="ext-link" data-astro-cid-kh7btl4r>email →</a> </div> ` })} ${renderComponent($$result2, "Window", $$Window, { "title": "stack.log", "alt": true, "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <p class="section-label" data-astro-cid-kh7btl4r>► tools i use</p> <div class="terminal" data-astro-cid-kh7btl4r> <div class="term-line" data-astro-cid-kh7btl4r><span class="term-prompt" data-astro-cid-kh7btl4r>languages</span> = <span class="term-value" data-astro-cid-kh7btl4r>["python", "typescript", "js"]</span></div> <div class="term-line" data-astro-cid-kh7btl4r><span class="term-prompt" data-astro-cid-kh7btl4r>ml</span> = <span class="term-value" data-astro-cid-kh7btl4r>["pytorch", "numpy", "sklearn"]</span></div> <div class="term-line" data-astro-cid-kh7btl4r><span class="term-prompt" data-astro-cid-kh7btl4r>web</span> = <span class="term-value" data-astro-cid-kh7btl4r>["astro", "next.js", "fastapi"]</span></div> <div class="term-line" data-astro-cid-kh7btl4r><span class="term-prompt" data-astro-cid-kh7btl4r>tools</span> = <span class="term-value" data-astro-cid-kh7btl4r>["claude", "vscode", "vercel"]</span></div> <div class="term-line" data-astro-cid-kh7btl4r><span class="term-prompt" data-astro-cid-kh7btl4r>reading</span> = <span class="term-value" data-astro-cid-kh7btl4r>["alignment forum", "arxiv"]</span></div> </div> ` })} </div> </div> ` })}`;
}, "/Users/miacollins/personal_website/astro/src/pages/about.astro", void 0);

const $$file = "/Users/miacollins/personal_website/astro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
