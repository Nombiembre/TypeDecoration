/* empty css                                    */
import { a as createComponent, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_B4sksaN4.mjs';
import 'kleur/colors';
import { $ as $$TermsContent } from '../../chunks/terms-content_Cslk4wZ1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "TermsContent", $$TermsContent, {})}`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/pages/[lang]/terms.astro", void 0);

const $$file = "/home/michi/dev/web/fiver/pixelthinkers/src/pages/[lang]/terms.astro";
const $$url = "/[lang]/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Terms,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
