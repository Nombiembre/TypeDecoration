import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from './astro/server_B4sksaN4.mjs';
import 'kleur/colors';
/* empty css                                  */
import { g as getCollection, $ as $$LayoutMd } from './_astro_content_uvI5Qkp0.mjs';
import { g as getLangFromUrl } from './Head_C7okWsa1.mjs';

const $$Astro = createAstro("https://astro-moon-landing.netlify.app/");
const $$PrivacyContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PrivacyContent;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getCollection("privacy", ({ slug }) => {
    return slug === lang;
  });
  const { Content } = await data[0].render();
  const { title, description, date } = data[0].data;
  const metadata = {
    title,
    description
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutMd, { "metadata": metadata, "title": title, "lastModified": date }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/components/content/privacy-content.astro", void 0);

export { $$PrivacyContent as $ };
