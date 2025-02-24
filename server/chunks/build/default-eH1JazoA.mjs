import { _ as __nuxt_component_0 } from './page-67jBJSbF.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';
import 'vue-router';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'compression';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'universal-cookie';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cookies } = useNuxtApp();
    const dataLang = ref(null);
    const lang = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<!--[--><div class="bg-white py-2 shadow-sm d-none d-lg-flex" id="topbar" data-v-15b8595b><div class="container-fluid d-flex justify-content-between align-items-center" data-v-15b8595b><div class="d-flex align-items-center" data-v-15b8595b><img${ssrRenderAttr("src", `/img/logo/logo-2.jpeg`)} alt="General Trading, Konstruksi, Transporter Limbah B3 | Logo PT Marier Jaya Abadi Bandung" class="logo-img me-3" style="${ssrRenderStyle({ "height": "50px", "width": "50px", "object-fit": "cover" })}" data-v-15b8595b><h1 class="fw-bold m-0 fw-lato-bold text-logo" data-v-15b8595b><a href="/" style="${ssrRenderStyle({ "text-decoration": "none", "color": "black" })}" data-v-15b8595b>PT MARIER <span class="text-primary" data-v-15b8595b>JAYA ABADI</span></a></h1></div><div class="d-flex align-items-center text-end" data-v-15b8595b><span class="me-3 small" data-v-15b8595b>\u{1F4CD} Jl. Galanggang No 109 Batujajar- Bandung Barat 40561</span><span class="me-3 small" data-v-15b8595b>\u{1F4DE} +62 822-1192-8800</span><span class="small" data-v-15b8595b>\u2709\uFE0F mja@marierjayaabadi.com</span></div></div></div>`);
      if (dataLang.value) {
        _push(`<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top" id="navbar" data-v-15b8595b><div class="container-fluid" data-v-15b8595b><a class="navbar-brand d-lg-none" href="/" data-v-15b8595b><img${ssrRenderAttr("src", `/img/logo/logo-2.jpeg`)} alt="Logo" class="logo-img me-3" data-v-15b8595b><span class="fw-bold" data-v-15b8595b>Marier Jaya Abadi</span></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-15b8595b><span class="navbar-toggler-icon" data-v-15b8595b></span></button><div class="collapse navbar-collapse" id="navbarNav" data-v-15b8595b><ul class="navbar-nav mx-auto flex-row flex-wrap" data-v-15b8595b><li class="nav-item" data-v-15b8595b><a class="nav-link text-center" href="/" data-v-15b8595b><img${ssrRenderAttr("src", `/img/icons/home.svg`)} alt="" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" data-v-15b8595b><p class="small mb-0" data-v-15b8595b>${ssrInterpolate(dataLang.value[lang.value].nav.home)}</p></a></li><li class="nav-item" data-v-15b8595b><a class="nav-link text-center" href="/gallery" data-v-15b8595b><img${ssrRenderAttr("src", `/img/icons/gallery.svg`)} alt="" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" data-v-15b8595b><p class="small mb-0" data-v-15b8595b>${ssrInterpolate(dataLang.value[lang.value].nav.gallery)}</p></a></li><li class="nav-item" data-v-15b8595b><a class="nav-link text-center" href="/portfolio" data-v-15b8595b><img${ssrRenderAttr("src", `/img/icons/office_bag.svg`)} alt="" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" data-v-15b8595b><p class="small mb-0" data-v-15b8595b>${ssrInterpolate(dataLang.value[lang.value].nav.portfolio)}</p></a></li><li class="nav-item" data-v-15b8595b><a class="nav-link text-center" href="/registration" data-v-15b8595b><img${ssrRenderAttr("src", `/img/icons/add.svg`)} alt="" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" data-v-15b8595b><p class="small mb-0" data-v-15b8595b>${ssrInterpolate(dataLang.value[lang.value].nav.registration)}</p></a></li><li class="nav-item" data-v-15b8595b><a class="nav-link text-center" href="https://wa.me/+6282211928800" target="_blank" data-v-15b8595b><img${ssrRenderAttr("src", `/img/icons/chat.svg`)} alt="" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" data-v-15b8595b><p class="small mb-0" data-v-15b8595b>${ssrInterpolate(dataLang.value[lang.value].login.title)}</p></a></li><li class="nav-item dropdown" data-v-15b8595b><a class="nav-link text-center dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" data-v-15b8595b><img${ssrRenderAttr("src", `/img/icons/globe.svg`)} alt="" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" data-v-15b8595b><p class="small mb-0" data-v-15b8595b>${ssrInterpolate(dataLang.value[lang.value].nav.language)}</p></a><ul class="dropdown-menu dropdown-menu-end" data-v-15b8595b><li data-v-15b8595b><a class="dropdown-item" href="#" data-v-15b8595b>Indonesia</a></li><li data-v-15b8595b><a class="dropdown-item" href="#" data-v-15b8595b>English</a></li><li data-v-15b8595b><a class="dropdown-item" href="#" data-v-15b8595b>\u65E5\u672C\u8A9E</a></li></ul></li><li class="nav-item dropdown" data-v-15b8595b><a class="nav-link text-center dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" data-v-15b8595b><img${ssrRenderAttr("src", `/img/icons/building.svg`)} alt="" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" data-v-15b8595b><p class="small mb-0" data-v-15b8595b>${ssrInterpolate(dataLang.value[lang.value].nav.profile)}</p></a><ul class="dropdown-menu dropdown-menu-end" data-v-15b8595b><li data-v-15b8595b><a class="dropdown-item" href="/profile" data-v-15b8595b>${ssrInterpolate(dataLang.value[lang.value].nav.company_profile)}</a></li><li data-v-15b8595b><a class="dropdown-item" href="/legality" data-v-15b8595b>${ssrInterpolate(dataLang.value[lang.value].nav.legality)}</a></li></ul></li></ul></div></div></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15b8595b"]]);

export { _default as default };
//# sourceMappingURL=default-eH1JazoA.mjs.map
