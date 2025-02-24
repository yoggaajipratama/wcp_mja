import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-D7Hw8tkl.mjs';
import { ref, useSSRContext } from 'vue';
import { a as useNuxtApp } from './server.mjs';

const _sfc_main = {
  __name: "registration",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cookies } = useNuxtApp();
    const dataLang = ref(null);
    const lang = ref("");
    const name = ref("");
    const email = ref("");
    const phone = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (dataLang.value) {
        _push(`<section id="registration" class="registration-section"><div class="registration-container"><div class="d-flex justify-content-center align-items-center logo-container"><img loading="lazy"${ssrRenderAttr("src", _imports_0)} alt="General Trading, Konstruksi, Transporter Limbah B3 | Logo PT Marier Jaya Abadi Bandung" class="logo-img me-3 rounded-circle"></div><div class="form-container"><h1 class="sub-title">${ssrInterpolate(dataLang.value[lang.value].registration.title)}</h1><div class="registration-form"><div class="input-group"><label for="name">${ssrInterpolate(dataLang.value[lang.value].registration.name)}</label><input type="text" id="name"${ssrRenderAttr("value", name.value)}${ssrRenderAttr("placeholder", dataLang.value[lang.value].registration.name)} autocomplete="off"></div><div class="input-group"><label for="email">${ssrInterpolate(dataLang.value[lang.value].registration.email)}</label><input type="email" id="email"${ssrRenderAttr("value", email.value)}${ssrRenderAttr("placeholder", dataLang.value[lang.value].registration.email)} autocomplete="off"></div><div class="input-group"><label for="phone">${ssrInterpolate(dataLang.value[lang.value].registration.phone)}</label><input type="text" id="phone"${ssrRenderAttr("value", phone.value)}${ssrRenderAttr("placeholder", dataLang.value[lang.value].registration.phone)} maxlength="12" autocomplete="off"></div><button class="hero-button">${ssrInterpolate(dataLang.value[lang.value].registration.register_button)}</button></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/registration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=registration-k5nvoTia.mjs.map
