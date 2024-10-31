import { a as createComponent, r as renderTemplate, b as renderComponent, c as createAstro, m as maybeRenderHead, e as addAttribute, f as renderSlot } from './astro/server_B4sksaN4.mjs';
import 'kleur/colors';
/* empty css                         */
import { $ as $$Image } from './_astro_assets_DXnrLPFx.mjs';
import { g as getLangFromUrl, u as useTranslations, $ as $$Icon, a as $$ThemeSwitcher, b as $$LenguageSwitcher, c as $$Head, d as $$Footer } from './Head_C7okWsa1.mjs';
/* empty css                         */
import 'clsx';

const moonImage = new Proxy({"src":"/_astro/moon.CJT1Acwy.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/michi/dev/web/fiver/pixelthinkers/src/assets/moon.jpg";
							}
							
							return target[name];
						}
					});

const $$HeroImage = createComponent(($$result, $$props, $$slots) => {
  const widths = [450, 800, 1200];
  const sizes = "100vw";
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover", "src": moonImage, "widths": widths, "sizes": sizes, "alt": "The ridged surface of the moon" })}`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/components/hero-image.astro", void 0);

const $$Astro$3 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Splash = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Splash;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="relative h-full bg-default" data-astro-cid-3egmgwtg> <!-- <Starfield /> --> <div class="container h-full" data-astro-cid-3egmgwtg> <div id="splash-bg-fallback" class="absolute inset-0 hidden opacity-40" data-astro-cid-3egmgwtg> ${renderComponent($$result, "HeroImage", $$HeroImage, { "data-astro-cid-3egmgwtg": true })} </div> <div class="relative grid h-full place-items-center sm:grid-cols-[2fr,1fr]" data-astro-cid-3egmgwtg> <h2 class="flex flex-col items-center gap-2 self-center sm:gap-4 sm:self-auto sm:justify-self-end" data-astro-cid-3egmgwtg> <span class="gradient-text text-center font-extrabold tracking-tighter text-6xl md:text-8xl" data-astro-cid-3egmgwtg> ${t("index.title")} </span> </h2> </div> </div> </section> <noscript> <style>
    #splash-bg-fallback {
      display: block;
    }
  </style> </noscript> `;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/components/splash.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { title: "TypeDecoration", url: "#TypeDecoration" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="page-header" class="absolute bottom-0 z-20 w-full" data-astro-cid-hpnw4vwy> <div class="container flex items-center" data-astro-cid-hpnw4vwy> <div class="flex w-full items-center justify-end gap-6" data-astro-cid-hpnw4vwy> <nav class="hidden sm:block" data-astro-cid-hpnw4vwy> <ul class="flex items-center gap-6 text-default" data-astro-cid-hpnw4vwy> ${navItems.map(({ title, url }) => renderTemplate`<li data-astro-cid-hpnw4vwy> <a class="text-sm"${addAttribute(url, "href")} data-astro-cid-hpnw4vwy> ${title} </a> </li>`)} </ul> </nav> <button id="open-nav-button" type="button" class="btn mr-auto sm:hidden" aria-label="Navigation" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:menu", "class": "size-8", "data-astro-cid-hpnw4vwy": true })} </button> ${renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, { "data-astro-cid-hpnw4vwy": true })} ${renderComponent($$result, "LanguageSwitcher", $$LenguageSwitcher, { "data-astro-cid-hpnw4vwy": true })} </div> <div id="menu-modal" class="modal hidden" aria-hidden="true" data-astro-cid-hpnw4vwy> <div class="fixed inset-0 bg-default px-8 py-4 text-default" data-astro-cid-hpnw4vwy> <div class="space-y-4" role="dialog" aria-modal="true" data-astro-cid-hpnw4vwy> <header class="text-right" data-astro-cid-hpnw4vwy> <button id="close-nav-button" type="button" class="btn" aria-label="Close navigation" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:close", "class": "size-8", "data-astro-cid-hpnw4vwy": true })} </button> </header> <div class="flex justify-center" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "logomark", "class": "size-16", "data-astro-cid-hpnw4vwy": true })} </div> <nav data-astro-cid-hpnw4vwy> <ul class="flex flex-col" data-astro-cid-hpnw4vwy> ${navItems.map(({ title, url }) => renderTemplate`<li data-astro-cid-hpnw4vwy> <a class="block py-4 text-center text-xl"${addAttribute(url, "href")} data-astro-cid-hpnw4vwy> ${title} </a> </li>`)} </ul> </nav> </div> </div> </div> </div> </header>  <noscript> <style>
    #open-nav-button {
      display: none;
    }
  </style> </noscript> `;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/components/header.astro", void 0);

const $$Astro$2 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const lang = getLangFromUrl(Astro2.url);
  const { metadata, absoluteHeader } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")} class="h-full motion-safe:scroll-smooth" data-theme="dark"> ${renderComponent($$result, "Head", $$Head, { "metadata": metadata })}${maybeRenderHead()}<body class="h-full overflow-x-hidden bg-default text-default text-base selection:bg-secondary selection:text-white"> ${renderComponent($$result, "Header", $$Header, { "absolute": absoluteHeader })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/layouts/Layout.astro", "self");

const $$Astro$1 = createAstro("https://astro-moon-landing.netlify.app/");
const $$TypeDecoration = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TypeDecoration;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section id="TypeDecoration" class="bg-accent py-32"> <div class="container flex flex-col-reverse gap-14 md:flex-row md:gap-8"> <div class="space-y-6 md:space-y-10"> <img src="/images/TypeDecoration-Icon.png" alt="Canva logo" class="mx-auto aspect-square w-full max-w-28 rounded-xl border border-purple-700"> <h2 class="text-center font-bold md:text-2xl">TypeDecoration</h2> <button class="btn-primary block"> ${t("canva.tryonapp")} </button> <img src="/images/canvaOptions.avif" class="mx-auto rounded-xl" alt="Canva options"> </div> <div> <div class="sticky top-40 block max-w-3xl"> <img class="shadow-elevation-high absolute top-8 z-10 scale-90 border border-purple-600 md:top-24 md:scale-100" src="/images/canvaShowcase.avif" alt="Canva showcase"> <img class="relative -z-10 md:-right-10" src="/images/canvaShowcaseBg.avif" alt=""> <img class="absolute top-[31.5%] hidden md:block" src="/images/canvaShowcaseShadow.avif" alt=""> </div> </div> </div> </section>`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/components/type-decoration.astro", void 0);

const $$Astro = createAstro("https://astro-moon-landing.netlify.app/");
const $$IndexContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IndexContent;
  const metadata = {
    title: "Astro Landing Page",
    description: "Build fast websites, faster. Astro is a new kind of site builder for the modern web. Lightning-fast performance meets powerful developer experience."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "absoluteHeader": true, "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Splash", $$Splash, {})} ${maybeRenderHead()}<div class="space-y-24"> ${renderComponent($$result2, "TypeDecoration", $$TypeDecoration, {})} </div> ` })}`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/components/IndexContent.astro", void 0);

export { $$IndexContent as $ };
