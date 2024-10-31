import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CnwMbQ6p.mjs';
import { manifest } from './manifest_BikeScvR.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/privacy.astro.mjs');
const _page2 = () => import('./pages/support.astro.mjs');
const _page3 = () => import('./pages/terms.astro.mjs');
const _page4 = () => import('./pages/_lang_/privacy-policy.astro.mjs');
const _page5 = () => import('./pages/_lang_/support.astro.mjs');
const _page6 = () => import('./pages/_lang_/terms.astro.mjs');
const _page7 = () => import('./pages/_lang_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/privacy.astro", _page1],
    ["src/pages/support.astro", _page2],
    ["src/pages/terms.astro", _page3],
    ["src/pages/[lang]/privacy-policy.astro", _page4],
    ["src/pages/[lang]/support.astro", _page5],
    ["src/pages/[lang]/terms.astro", _page6],
    ["src/pages/[lang]/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2eae8644-6d83-4e39-8978-5e16a63768c9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
