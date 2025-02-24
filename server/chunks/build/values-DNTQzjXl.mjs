import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-D7Hw8tkl.mjs';
import { ref, useSSRContext } from 'vue';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';

const _sfc_main$2 = {
  __name: "history",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cookies } = useNuxtApp();
    const dataLang = ref(null);
    const lang = ref("");
    const isModalVisible = ref(false);
    const modalTitle = ref("");
    const modalContent = ref("");
    const close_button = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-cb65397b>`);
      if (dataLang.value) {
        _push(`<div data-v-cb65397b><section id="overview" class="registration-section" data-v-cb65397b><div class="registration-container" data-v-cb65397b><div class="d-flex justify-content-center align-items-center logo-container" data-v-cb65397b><img${ssrRenderAttr("src", _imports_0)} loading="lazy" alt="General Trading, Konstruksi, Transporter Limbah B3 | Logo PT Marier Jaya Abadi Bandung" class="logo-img me-3 rounded-circle logo-animate" data-v-cb65397b></div><div class="form-container" data-v-cb65397b><h1 class="sub-title" data-v-cb65397b>${ssrInterpolate(dataLang.value[lang.value].history.title)}</h1><div class="p-description" data-v-cb65397b>${(_a = dataLang.value[lang.value].history.description) != null ? _a : ""}</div><div class="vm" data-v-cb65397b><button class="hero-button vision-btn" data-v-cb65397b>${ssrInterpolate(dataLang.value[lang.value].vision.vision_button)}</button><button class="hero-button mission-btn" data-v-cb65397b>${ssrInterpolate(dataLang.value[lang.value].mission.mission_button)}</button></div></div></div></section>`);
        if (isModalVisible.value) {
          _push(`<div class="modal-overlay" data-v-cb65397b><div class="modal-content animate-modal bg-white rounded" data-v-cb65397b><h3 data-v-cb65397b>${ssrInterpolate(modalTitle.value)}</h3><div class="p-description" data-v-cb65397b>${(_b = modalContent.value) != null ? _b : ""}</div><button class="hero-button" data-v-cb65397b>${ssrInterpolate(close_button.value)}</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/informations/history.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const History = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cb65397b"]]);
const _sfc_main$1 = {
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cookies } = useNuxtApp();
    const dataLang = ref(null);
    const lang = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c1585869>`);
      if (dataLang.value) {
        _push(`<section id="services" class="service-section" data-v-c1585869><h1 class="text-center sub-title" data-v-c1585869>${ssrInterpolate(dataLang.value[lang.value].title_service)}</h1><div class="grid" data-v-c1585869><!--[-->`);
        ssrRenderList(dataLang.value[lang.value].service, (service, index) => {
          _push(`<div class="card" data-v-c1585869><div class="image-wrapper" data-v-c1585869><img loading="lazy"${ssrRenderAttr("src", service.image)} alt="General Trading, Konstruksi, Transporter Limbah B3 | PT Marier Jaya Abadi Bandung" class="service-image" data-v-c1585869></div><h2 class="service-title" data-v-c1585869><b data-v-c1585869>${ssrInterpolate(service.name)}</b></h2><p class="text-justify p-description" data-v-c1585869>${ssrInterpolate(service.description)}</p></div>`);
        });
        _push(`<!--]--></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/informations/services.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c1585869"]]);
const _sfc_main = {
  __name: "values",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cookies } = useNuxtApp();
    const dataLang = ref(null);
    const lang = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-702d33ba>`);
      if (dataLang.value) {
        _push(`<section id="values" class="value-section" data-v-702d33ba><h1 class="text-center sub-title" data-v-702d33ba>${ssrInterpolate(dataLang.value[lang.value].title_value)}</h1><div class="grid" data-v-702d33ba><!--[-->`);
        ssrRenderList(dataLang.value[lang.value].value, (value, index) => {
          _push(`<div class="card" data-v-702d33ba><div class="image-wrapper" data-v-702d33ba><img${ssrRenderAttr("src", value.image)} alt="Values Image" class="value-image" data-v-702d33ba></div><h3 class="value-title" data-v-702d33ba>${ssrInterpolate(value.name)}</h3><p class="text-center p-description" data-v-702d33ba>${ssrInterpolate(value.description)}</p></div>`);
        });
        _push(`<!--]--></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/informations/values.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Values = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-702d33ba"]]);

export { History as H, Services as S, Values as V };
//# sourceMappingURL=values-DNTQzjXl.mjs.map
