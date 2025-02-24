import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-D7Hw8tkl.mjs';
import { ref, useSSRContext } from 'vue';
import { a as useNuxtApp } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'compression';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'universal-cookie';

const _sfc_main$1 = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cookies } = useNuxtApp();
    const dataLang = ref(null);
    ref("");
    const username = ref("");
    const password = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (dataLang.value) {
        _push(`<section id="registration" class="registration-section"><div class="registration-container"><div class="d-flex justify-content-center align-items-center logo-container"><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="logo-img me-3 rounded-circle"></div><div class="form-container"><h2 class="">Login</h2><div class="registration-form"><div class="input-group"><label for="name">Username</label><input type="text" id="name"${ssrRenderAttr("value", username.value)} placeholder="Username" minlength="1"></div><div class="input-group"><label for="password">Password</label><input type="password" id="password"${ssrRenderAttr("value", password.value)} placeholder="Password" maxlength="12" minlength="8"></div><button class="text-center hero-button">Login</button></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/login.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CanfIDQF.mjs.map
