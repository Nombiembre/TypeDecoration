import { a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, c as createAstro, s as spreadAttributes, b as renderComponent, u as unescapeHTML, F as Fragment, k as renderHead } from './astro/server_B4sksaN4.mjs';
import 'kleur/colors';
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                                  */
/* empty css                                  */
/* empty css                         */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const links = [
    {
      title: "Support",
      url: "/support"
    },
    {
      title: "Privacy Policy",
      url: "/privacy"
    },
    {
      title: "Terms and conditions",
      url: "/terms"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative border-t border-default/80 z-50 bg-default text-default mt-auto"> <div class="container text-sm flex items-center justify-between"> <div> <span>© ${(/* @__PURE__ */ new Date()).getFullYear()} TypeDecoration</span> </div> <ul class="flex items-center gap-6 "> ${links.map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")}>${link.title}</a> </li>`)} </ul> </div> </footer>`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/components/footer.astro", void 0);


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$4 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/home/michi/dev/web/fiver/pixelthinkers/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$3 = createAstro("https://astro-moon-landing.netlify.app/");
const $$ThemeSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ThemeSwitcher;
  const { showbyDefault } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="theme-switcher" type="button"${addAttribute(`-ml-12 origin-[right_center] scale-0 transition-all duration-500 ${showbyDefault && "scale-100 ml-0"}`, "class")} data-astro-cid-l4aeqea3> <div id="icon-theme-light" data-astro-cid-l4aeqea3> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:white-balance-sunny", "class": "size-6", "data-astro-cid-l4aeqea3": true })} <span class="sr-only" data-astro-cid-l4aeqea3>Use light theme</span> </div> <div id="icon-theme-dark" class="hidden" data-astro-cid-l4aeqea3> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:weather-night", "class": "size-6", "data-astro-cid-l4aeqea3": true })} <span class="sr-only" data-astro-cid-l4aeqea3>Use dark theme</span> </div> </button>  `;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/components/theme-switcher.astro", void 0);

const languages = {
  en: "🇺🇸 English",
  es: "🇪🇸 Español",
  fr: "🇫🇷 Français"
};
const defaultLang = "en";
const ui = {
  en: {
    "index.title": "Create sleek geometric patterns.",
    "canva.tryonapp": "Try App on Canva",
    "last-updated": "Last updated:"
  },
  es: {
    "index.title": "Crea patrones geométricos elegantes.",
    "canva.tryonapp": "Probar app en Canva",
    "last-updated": "Última actualización:"
  },
  fr: {
    "index.title": "Créer des motifs géométriques élégants.",
    "canva.tryonapp": "Essayer l'App sur Canva",
    "last-updated": "Dernière mise à jour:"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

function getPathname(path, lang) {
  const pathArray = path.split('/');
  const position = pathArray.indexOf(lang) + 1;
  const pathname = pathArray.slice(position, pathArray.length).join('/');
  if (pathArray[position]) return pathname;
  return '';
}

const $$Astro$2 = createAstro("https://astro-moon-landing.netlify.app/");
const $$LenguageSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LenguageSwitcher;
  let pathnameRaw = Astro2.url.pathname;
  const lang = getLangFromUrl(Astro2.url);
  const pathname = getPathname(pathnameRaw, lang);
  return renderTemplate`${maybeRenderHead()}<li id="change-lenguage-svg" class="relative flex list-none items-center gap-4 py-2" data-astro-cid-p5i6ufqi> <svg width="40" height="40" viewBox="0 0 40 40" fill="none" class="size-6" xmlns="http://www.w3.org/2000/svg" data-astro-cid-p5i6ufqi> <rect width="40" height="40" data-astro-cid-p5i6ufqi></rect> <path class="default" fill="currentColor" d="M37.3695 33.875L30.3382 16.8438C30.2084 16.5292 29.9881 16.2603 29.7053 16.0711C29.4225 15.8819 29.0898 15.7809 28.7496 15.7809C28.4093 15.7809 28.0767 15.8819 27.7939 16.0711C27.511 16.2603 27.2908 16.5292 27.1609 16.8438L20.1296 33.875C20.0422 34.0839 19.9969 34.3079 19.9963 34.5344C19.9958 34.7608 20.0399 34.9851 20.1263 35.1944C20.2127 35.4037 20.3396 35.5938 20.4997 35.754C20.6598 35.9141 20.8499 36.041 21.0592 36.1274C21.2685 36.2138 21.4928 36.258 21.7192 36.2574C21.9456 36.2569 22.1697 36.2116 22.3786 36.1242C22.5875 36.0368 22.777 35.909 22.9363 35.7481C23.0957 35.5872 23.2216 35.3964 23.307 35.1867L24.739 31.7188H32.7601L34.1921 35.1867C34.322 35.5014 34.5423 35.7704 34.8252 35.9597C35.1081 36.149 35.4408 36.25 35.7812 36.25C36.0636 36.2498 36.3417 36.1801 36.5907 36.0469C36.8398 35.9137 37.0522 35.7212 37.2091 35.4864C37.3661 35.2516 37.4627 34.9817 37.4906 34.7007C37.5184 34.4196 37.4765 34.136 37.3687 33.875H37.3695ZM26.1586 28.2812L28.75 22.0039L31.3414 28.2812H26.1586Z" data-astro-cid-p5i6ufqi></path> <path class="default" fill="currentColor" d="M20.925 26.7906C21.192 26.4218 21.3018 25.9621 21.2301 25.5124C21.1585 25.0627 20.9114 24.6598 20.543 24.3922C20.5273 24.3805 19.3711 23.5227 17.6922 21.6789C20.7898 17.4852 22.5445 12.7141 23.2602 10.4687H25.7812C26.2371 10.4687 26.6743 10.2877 26.9966 9.96534C27.3189 9.64301 27.5 9.20584 27.5 8.75C27.5 8.29416 27.3189 7.85699 26.9966 7.53466C26.6743 7.21233 26.2371 7.03125 25.7812 7.03125H16.7188V5.46875C16.7188 5.01291 16.5377 4.57574 16.2153 4.25341C15.893 3.93108 15.4558 3.75 15 3.75C14.5442 3.75 14.107 3.93108 13.7847 4.25341C13.4623 4.57574 13.2812 5.01291 13.2812 5.46875V7.03125H4.21875C3.76291 7.03125 3.32574 7.21233 3.00341 7.53466C2.68108 7.85699 2.5 8.29416 2.5 8.75C2.5 9.20584 2.68108 9.64301 3.00341 9.96534C3.32574 10.2877 3.76291 10.4687 4.21875 10.4687H19.6289C18.8852 12.5742 17.5156 15.8984 15.4266 18.9344C12.9727 15.6781 12.0609 13.5711 12.0539 13.5539C11.8743 13.1387 11.5382 12.8111 11.1186 12.6421C10.6989 12.4732 10.2296 12.4764 9.81239 12.6512C9.39516 12.826 9.06365 13.1582 8.88978 13.5758C8.71591 13.9935 8.71368 14.4628 8.88359 14.882C8.92891 14.9898 10.0203 17.5562 13.0133 21.4391C13.0852 21.532 13.1562 21.6227 13.2273 21.7133C10.1617 25.1781 7.15391 27.3273 5.89531 28.0211C5.4951 28.2394 5.198 28.6077 5.06936 29.045C4.94073 29.4824 4.99109 29.9529 5.20937 30.3531C5.42766 30.7533 5.79599 31.0504 6.23333 31.1791C6.67067 31.3077 7.1412 31.2573 7.54141 31.0391C7.71016 30.9469 11.3383 28.9383 15.4813 24.3523C17.2406 26.2336 18.45 27.1211 18.5227 27.1727C18.7055 27.3054 18.9127 27.4009 19.1324 27.4535C19.3521 27.5061 19.5801 27.5149 19.8032 27.4794C20.0263 27.4438 20.2403 27.3646 20.4328 27.2463C20.6252 27.128 20.7925 26.9729 20.925 26.7898V26.7906Z" data-astro-cid-p5i6ufqi></path> </svg> <ul class="dropdown-menu || -left-20 rounded border border-default bg-default text-sm" data-astro-cid-p5i6ufqi> ${Object.entries(languages).map(([langPrefix, label]) => {
    if (langPrefix === lang) return null;
    return renderTemplate`<li data-astro-cid-p5i6ufqi> <a${addAttribute(`/${langPrefix}/${pathname}`, "href")} data-astro-cid-p5i6ufqi>${label}</a> </li>`;
  })} </ul> </li> `;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/components/lenguage-switcher.astro", void 0);

const $$Astro$1 = createAstro("https://astro-moon-landing.netlify.app/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/michi/dev/web/fiver/pixelthinkers/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-moon-landing.netlify.app/");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Head;
  const { generator, site } = Astro2;
  const image = new URL("social.jpg", site);
  const { metadata } = Astro2.props;
  const { title, description } = metadata;
  return renderTemplate(_a || (_a = __template(['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><meta name="generator"', "><title>", '</title><meta name="description"', '><!-- social media --><meta property="og:title" content="Astro"><meta property="og:type" content="website"><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta name="twitter:card" content="summary_large_image">', '<!-- initialize theme --><script>\n    document.addEventListener("astro:page-load", () => {\n      const themeSaved = localStorage.getItem("theme");\n\n      if (themeSaved) {\n        document.documentElement.dataset.theme = themeSaved;\n      } else {\n        const prefersDark = window.matchMedia(\n          "(prefers-color-scheme: dark)",\n        ).matches;\n        document.documentElement.dataset.theme = prefersDark ? "dark" : "light";\n      }\n\n      window\n        .matchMedia("(prefers-color-scheme: dark)")\n        .addEventListener("change", (event) => {\n          if (!localStorage.getItem("theme")) {\n            document.documentElement.dataset.theme = event.matches\n              ? "dark"\n              : "light";\n          }\n        });\n    });\n  <\/script>', "</head>"])), addAttribute(generator, "content"), title, addAttribute(description, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(site, "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead());
}, "/home/michi/dev/web/fiver/pixelthinkers/src/components/meta/Head.astro", void 0);

export { $$Icon as $, $$ThemeSwitcher as a, $$LenguageSwitcher as b, $$Head as c, $$Footer as d, getLangFromUrl as g, useTranslations as u };