import { c as createComponent } from './astro-component_BSekfyeL.mjs';
import 'piccolore';
import { n as createRenderInstruction, h as addAttribute, o as renderHead, p as renderSlot, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CiE__XY9.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Mia Collins", description = "CS student · AI/ML · safety & alignment" } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title === "Mia Collins" ? title : `${title} — Mia Collins`}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body> <!-- Starfield (always visible, brightness shifts with theme) --> <div class="starfield" id="starfield" aria-hidden="true"></div> <!-- Floating planets --> <div class="planet" id="planet-main" style="width:90px;height:90px;top:-18px;right:80px;opacity:0.55;" aria-hidden="true"></div> <div class="planet" id="planet-small" style="width:22px;height:22px;top:18px;right:190px;opacity:0.6;" aria-hidden="true"></div> <div class="site-content"> <!-- Taskbar / Nav --> <nav class="taskbar" aria-label="Main navigation"> <a href="/" class="taskbar-logo">✦ miacollins.dev</a> <div class="taskbar-nav"> <a href="/about"${addAttribute(`nav-link ${currentPath.startsWith("/about") ? "active" : ""}`, "class")}>~/about</a> <a href="/projects"${addAttribute(`nav-link ${currentPath.startsWith("/projects") ? "active" : ""}`, "class")}>~/projects</a> <a href="/writing"${addAttribute(`nav-link ${currentPath.startsWith("/writing") ? "active" : ""}`, "class")}>~/writing</a> <!-- <a href="/research" class={\`nav-link \${currentPath.startsWith('/research') ? 'active' : ''}\`}>~/research</a> --> <a href="/log"${addAttribute(`nav-link ${currentPath.startsWith("/log") ? "active" : ""}`, "class")}>~/log</a> <a href="/contact"${addAttribute(`nav-link ${currentPath.startsWith("/contact") ? "active" : ""}`, "class")}>~/contact</a> </div> <span class="taskbar-clock" id="clock" aria-live="off">00:00:00</span> <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">☾ dark</button> </nav> <main> ${renderSlot($$result, $$slots["default"])} </main> <footer class="site-footer"> <span class="footer-text">🌸 made with curiosity + claude 🌸</span> <span class="footer-text">columbia cs · ai safety</span> </footer> </div> ${renderScript($$result, "/Users/miacollins/personal_website/astro/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} <!-- add SecretTerminal (invisible until triggered) -->
astro---
  import SecretTerminal from '../components/SecretTerminal.astro';
  ---
${renderComponent($$result, "SecretTerminal", SecretTerminal, {})} </body></html>`;
}, "/Users/miacollins/personal_website/astro/src/layouts/BaseLayout.astro", void 0);

const $$Window = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Window;
  const { title, alt = false, class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`win ${alt ? "alt-bg" : ""} ${className}`, "class")}> <div class="win-chrome"> <span class="win-dot r" aria-hidden="true"></span> <span class="win-dot y" aria-hidden="true"></span> <span class="win-dot g" aria-hidden="true"></span> <span class="win-title">${title}</span> </div> <div class="win-body"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/miacollins/personal_website/astro/src/components/Window.astro", void 0);

export { $$BaseLayout as $, $$Window as a };
