/* empty css                                 */
import { a as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_B4sksaN4.mjs';
import 'kleur/colors';
import { $ as $$PrivacyContent } from '../chunks/privacy-content_j8ilmqy9.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PrivacyContent", $$PrivacyContent, {})}`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/pages/privacy.astro", void 0);

const $$file = "/home/michi/dev/web/fiver/pixelthinkers/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Privacy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
