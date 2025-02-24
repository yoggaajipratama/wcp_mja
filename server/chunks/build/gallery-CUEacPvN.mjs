import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';

const _sfc_main = {
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cookies } = useNuxtApp();
    const dataLang = ref(null);
    const lang = ref("");
    const isModalOpen = ref(false);
    ref(0);
    ref(false);
    const items = ref([]);
    const modalImage = ref("");
    const selectedCategory = ref("all");
    const image = (imageName) => {
      return imageName ? `/api/image/${imageName}` : "/default-image.jpg";
    };
    const showMore = ref(false);
    const visibleItems = () => {
      let filteredItems = items.value;
      if (selectedCategory.value !== "all") {
        filteredItems = filteredItems.filter((item) => item.category === selectedCategory.value);
      }
      return showMore.value ? filteredItems : filteredItems.slice(0, 6);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a3f15977>`);
      if (dataLang.value) {
        _push(`<div data-v-a3f15977><h1 id="gallery" class="text-center sub-title" data-v-a3f15977>${ssrInterpolate(dataLang.value[lang.value].gallery.title)}</h1><div class="category-filter" data-v-a3f15977><select name="category" data-v-a3f15977><option value="all" class="form-option" data-v-a3f15977${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "all") : ssrLooseEqual(selectedCategory.value, "all")) ? " selected" : ""}>All</option><option value="general trading" data-v-a3f15977${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "general trading") : ssrLooseEqual(selectedCategory.value, "general trading")) ? " selected" : ""}>General Trading</option><option value="konstruksi" data-v-a3f15977${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "konstruksi") : ssrLooseEqual(selectedCategory.value, "konstruksi")) ? " selected" : ""}>Konstruksi</option><option value="transporter" data-v-a3f15977${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "transporter") : ssrLooseEqual(selectedCategory.value, "transporter")) ? " selected" : ""}>Transporter</option></select></div><div class="${ssrRenderClass(["gallery", { "show-more": showMore.value }])}" data-v-a3f15977><!--[-->`);
        ssrRenderList(visibleItems(), (item, index) => {
          _push(`<div class="gallery-item" data-v-a3f15977><img loading="lazy"${ssrRenderAttr("src", image(item.image))} alt="General Trading, Konstruksi, Transporter Limbah B3 | PT Marier Jaya Abadi Bandung" data-v-a3f15977></div>`);
        });
        _push(`<!--]--></div><div class="text-center" data-v-a3f15977>`);
        if (!showMore.value) {
          _push(`<button class="hero-button" data-v-a3f15977>${ssrInterpolate(dataLang.value[lang.value].gallery.more)}</button>`);
        } else {
          _push(`<!---->`);
        }
        if (showMore.value) {
          _push(`<button class="hero-button" data-v-a3f15977>${ssrInterpolate(dataLang.value[lang.value].gallery.less)}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(["modal-overlay", { hidden: !isModalOpen.value }])}" data-v-a3f15977><div class="modal-content" data-v-a3f15977><span class="text-center modal-close" data-v-a3f15977> \xD7 </span>`);
      if (selectedCategory.value == "all") {
        _push(`<button class="modal-nav left" data-v-a3f15977>\u276E</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img${ssrRenderAttr("src", image(modalImage.value))} alt="Full Image" class="modal-image" data-v-a3f15977>`);
      if (selectedCategory.value == "all") {
        _push(`<button class="modal-nav right" data-v-a3f15977>\u276F</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="fullscreen-btn" data-v-a3f15977><i class="fa fa-expand" data-v-a3f15977></i></button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a3f15977"]]);

export { Gallery as G };
//# sourceMappingURL=gallery-CUEacPvN.mjs.map
