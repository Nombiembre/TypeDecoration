/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_B4sksaN4.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$IndexContent } from '../chunks/IndexContent_Bwo6Kagk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-moon-landing.netlify.app/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const preferedLang = Astro2.preferredLocale;
  console.warn("PREFERED LANG: ", preferedLang);
  if (preferedLang !== "en") {
    return Astro2.redirect(`/${preferedLang}/`, 301);
  }
  return renderTemplate`${renderComponent($$result, "IndexContent", $$IndexContent, {})}`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/pages/index.astro", void 0);

const $$file = "/home/michi/dev/web/fiver/pixelthinkers/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
