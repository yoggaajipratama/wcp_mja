import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';

const _sfc_main = {
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cookies } = useNuxtApp();
    const dataLang = ref(null);
    const lang = ref("");
    const image = (imageName) => {
      return imageName ? `/api/image/${imageName}` : "/default-image.jpg";
    };
    const portfolio = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ccf8270c>`);
      if (dataLang.value) {
        _push(`<section id="portfolio" class="portfolio-section" data-v-ccf8270c><h1 class="text-center" data-v-ccf8270c>${ssrInterpolate(dataLang.value[lang.value].portfolio.title)}</h1><div class="grid" data-v-ccf8270c><!--[-->`);
        ssrRenderList(portfolio.value, (portfolio2, index) => {
          _push(`<div class="card" data-v-ccf8270c><div class="image-wrapper" data-v-ccf8270c><img loading="lazy"${ssrRenderAttr("src", image(portfolio2.image))} alt="General Trading, Konstruksi, Transporter Limbah B3 | PT Marier Jaya Abadi Bandung" class="portfolio-image" data-v-ccf8270c></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ccf8270c"]]);

export { Portfolio as P };
//# sourceMappingURL=portfolio-C8kniqDJ.mjs.map
