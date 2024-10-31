import { a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderComponent, c as createAstro, f as renderSlot, g as renderTransition, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, u as unescapeHTML } from './astro/server_B4sksaN4.mjs';
import 'kleur/colors';
import { a as $$ThemeSwitcher, b as $$LenguageSwitcher, g as getLangFromUrl, u as useTranslations, c as $$Head, d as $$Footer } from './Head_C7okWsa1.mjs';
import 'clsx';
/* empty css                         */
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_XoVqVOaB.mjs';
import * as devalue from 'devalue';

const $$HeaderMd = createComponent(($$result, $$props, $$slots) => {
  const navItems = [{ title: "TypeDecoration", url: "/" }];
  return renderTemplate`${maybeRenderHead()}<header id="page-header" class="border-default/95 w-full border-b py-0"> <div class="container flex items-center justify-between"> <nav> <ul class="flex items-center gap-6 text-default"> ${navItems.map(({ title, url }) => renderTemplate`<li> <a class="text-sm"${addAttribute(url, "href")}> ${title} </a> </li>`)} </ul> </nav> <div class="flex items-center gap-4"> ${renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, { "showbyDefault": true })} ${renderComponent($$result, "LanguageSwitcher", $$LenguageSwitcher, {})} </div> </div> </header>`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/components/header-md.astro", void 0);

const $$Astro$1 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Prose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Prose;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`prose text-default mx-auto max-w-none
  prose-headings:text-default
  prose-headings:mb-2 prose-headings:text-base prose-headings:text-content
  ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/components/Prose.astro", void 0);

const $$Astro = createAstro("https://astro-moon-landing.netlify.app/");
const $$LayoutMd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutMd;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const { metadata, title, lastModified } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")} class="h-full motion-safe:scroll-smooth" data-theme="dark"> ${renderComponent($$result, "Head", $$Head, { "metadata": metadata })}${maybeRenderHead()}<body class="flex h-full flex-col overflow-x-hidden bg-default text-default text-base selection:bg-secondary selection:text-white"> ${renderComponent($$result, "HeaderMd", $$HeaderMd, {})} <main class="container my-10 max-w-3xl text-default"${addAttribute(renderTransition($$result, "vkcwnfvn"), "data-astro-transition-scope")}> <div class="mb-10 space-y-4"> <h1 class="font-bold text-xl">${title}</h1> <span class="text-slate-600/80 text-sm">${t("last-updated")} ${lastModified.toLocaleDateString()}</span> </div> ${renderComponent($$result, "Prose", $$Prose, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/michi/dev/web/fiver/pixelthinkers/src/layouts/LayoutMd.astro", "self");

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://astro-moon-landing.netlify.app/", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/privacy/en.md": () => import('./en_1sAnBkDJ.mjs'),"/src/content/privacy/es.md": () => import('./es_BHTez4LO.mjs'),"/src/content/privacy/fr.md": () => import('./fr_BU44SXJ0.mjs'),"/src/content/terms/en.md": () => import('./en_Bv53KsiA.mjs'),"/src/content/terms/es.md": () => import('./es_BhkXPvHm.mjs'),"/src/content/terms/fr.md": () => import('./fr_BF5Lc40v.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"privacy":{"type":"content","entries":{"en":"/src/content/privacy/en.md","es":"/src/content/privacy/es.md","fr":"/src/content/privacy/fr.md"}},"terms":{"type":"content","entries":{"en":"/src/content/terms/en.md","es":"/src/content/terms/es.md","fr":"/src/content/terms/fr.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/privacy/en.md": () => import('./en_Pf2vtQWk.mjs'),"/src/content/privacy/es.md": () => import('./es_COdSBf89.mjs'),"/src/content/privacy/fr.md": () => import('./fr_BRpMrhb3.mjs'),"/src/content/terms/en.md": () => import('./en_D6AP_9FJ.mjs'),"/src/content/terms/es.md": () => import('./es_BXDMA8k6.mjs'),"/src/content/terms/fr.md": () => import('./fr_Db-4PKvA.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { $$LayoutMd as $, getCollection as g };
