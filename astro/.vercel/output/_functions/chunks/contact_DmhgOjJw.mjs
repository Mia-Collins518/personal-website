import { c as createComponent } from './astro-component_BSekfyeL.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CiE__XY9.mjs';
import { $ as $$BaseLayout, a as $$Window } from './Window_NEPDAS8o.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact", "description": "Get in touch with Mia Collins", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="padding: 20px 18px; max-width: 540px;" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Window", $$Window, { "title": "contact.txt ♡", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result3) => renderTemplate` <p class="section-label" data-astro-cid-uw5kdbxl>► get in touch</p> <div class="prose" style="margin-bottom: 16px;" data-astro-cid-uw5kdbxl> <p data-astro-cid-uw5kdbxl>I'm always happy to chat about alignment research, cool projects, or vibe coding disasters. Best way to reach me is email.</p> </div> <div class="contact-links" data-astro-cid-uw5kdbxl> <a href="mailto:msc2256@columbia.edu" class="contact-item" data-astro-cid-uw5kdbxl> <span class="contact-label" data-astro-cid-uw5kdbxl>email</span> <span class="contact-value" data-astro-cid-uw5kdbxl>mc@columbia.edu →</span> </a> <a href="https://github.com/Mia-Collins518" class="contact-item" target="_blank" rel="noopener" data-astro-cid-uw5kdbxl> <span class="contact-label" data-astro-cid-uw5kdbxl>github</span> <span class="contact-value" data-astro-cid-uw5kdbxl>github.com/miacollins →</span> </a> <a href="https://linkedin.com/in/miacollins" class="contact-item" target="_blank" rel="noopener" data-astro-cid-uw5kdbxl> <span class="contact-label" data-astro-cid-uw5kdbxl>linkedin</span> <span class="contact-value" data-astro-cid-uw5kdbxl>linkedin.com/in/miacollins →</span> </a> </div> ` })} </div> ` })}`;
}, "/Users/miacollins/personal_website/astro/src/pages/contact.astro", void 0);

const $$file = "/Users/miacollins/personal_website/astro/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
