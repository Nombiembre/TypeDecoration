/* empty css                                 */
import { a as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_B4sksaN4.mjs';
import 'kleur/colors';
import { $ as $$IndexContent } from '../chunks/IndexContent_Bwo6Kagk.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "IndexContent", $$IndexContent, {})}`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/pages/[lang]/index.astro", void 0);

const $$file = "/home/michi/dev/web/fiver/pixelthinkers/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
