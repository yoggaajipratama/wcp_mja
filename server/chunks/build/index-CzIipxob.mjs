import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { ref, mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';
import { G as Gallery } from './gallery-CUEacPvN.mjs';
import { P as Portfolio } from './portfolio-C8kniqDJ.mjs';
import { _ as _sfc_main$3 } from './registration-k5nvoTia.mjs';
import { H as History, S as Services, V as Values } from './values-DNTQzjXl.mjs';
import { u as useHead } from './index-C2merokO.mjs';
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
import 'vue-router';
import 'universal-cookie';
import './virtual_public-D7Hw8tkl.mjs';

const _sfc_main$2 = {
  name: "Footer"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-1e6a71bf><div class="footer-container" data-v-1e6a71bf><div class="footer-section" data-v-1e6a71bf><h3 data-v-1e6a71bf>Contact Us</h3><ul class="contact-list" data-v-1e6a71bf><li data-v-1e6a71bf><span class="icon" data-v-1e6a71bf>\u{1F4CD}</span><span class="text" data-v-1e6a71bf>Jl. Galanggang No 109 Batujajar- Bandung Barat 40561</span></li><li data-v-1e6a71bf><span class="icon" data-v-1e6a71bf>\u2709</span><span class="text" data-v-1e6a71bf>mja@marierjayaabadi.com</span></li><li data-v-1e6a71bf><span class="icon" data-v-1e6a71bf>\u{1F4DE}</span><span class="text" data-v-1e6a71bf>+62 822-1192-8800</span></li></ul></div><div class="footer-section" data-v-1e6a71bf></div><div class="footer-section" data-v-1e6a71bf><h3 data-v-1e6a71bf>Follow Us</h3><ul class="social-icons" data-v-1e6a71bf><li data-v-1e6a71bf><a target="_blank" href="https://www.facebook.com/share/16CLFKuHLg/" data-v-1e6a71bf><i class="fab fa-facebook" data-v-1e6a71bf></i> Facebook</a></li><li data-v-1e6a71bf><a target="_blank" href="https://www.instagram.com/marierjayaabadi?igsh=MXhidzlnNTBlZXo0ZQ== " data-v-1e6a71bf><i class="fab fa-instagram" data-v-1e6a71bf></i> Instagram</a></li><li data-v-1e6a71bf><a target="_blank" href="https://www.linkedin.com/in/marier-jaya-abadi-1641102a8?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app" data-v-1e6a71bf><i class="fab fa-linkedin" data-v-1e6a71bf></i> LinkedIn</a></li><li data-v-1e6a71bf><a target="_blank" href="https://www.tiktok.com/@marierjayaabadi?_t=ZS-8ti8gWdyU23&amp;_r=1" data-v-1e6a71bf><i class="fab fa-tiktok" data-v-1e6a71bf></i> Tiktok</a></li></ul></div></div><div class="footer-bottom" data-v-1e6a71bf><p data-v-1e6a71bf>\xA9 2025 PT. Marier Jaya Abadi. All Rights Reserved.</p></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1e6a71bf"]]);
const _sfc_main$1 = {
  __name: "Jumbotron",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cookies } = useNuxtApp();
    const dataLang = ref(null);
    const lang = ref("");
    const backgroundImages = ref([
      { url: "/img/truck_1.webp" },
      { url: "/img/truck_2.webp" },
      { url: "/img/news_1.webp" }
    ]);
    const currentImageIndex = ref(0);
    ref(true);
    const scaleValue = ref(1);
    const texts = {
      jumbotron: {
        title: "Connecting is Everything",
        prev: "Previous",
        next: "Next"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (dataLang.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          id: "jumbotronCarousel",
          class: "carousel slide custom-carousel-class"
        }, _attrs))} data-v-34d5a22e><div class="carousel-inner position-relative" data-v-34d5a22e><div class="carousel-item active" data-v-34d5a22e><div class="jumbotron d-flex align-items-center justify-content-center" data-v-34d5a22e><div class="background-image animate-fade" style="${ssrRenderStyle({
          backgroundImage: "url(" + backgroundImages.value[currentImageIndex.value].url + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(" + scaleValue.value + ")"
        })}" data-v-34d5a22e></div><div class="text-overlay" data-v-34d5a22e><h1 class="display-1 fw-bold text-uppercase text-shadow animate-title gradient-text" data-v-34d5a22e>${ssrInterpolate(texts.jumbotron.title)}</h1><p class="quote-text animate-quote" data-v-34d5a22e>${ssrInterpolate(dataLang.value[lang.value].hero.description)}</p><div class="call" data-v-34d5a22e><a href="https://wa.me/+6282211928800" target="_blank" class="btn btn-primary mt-3 animate-button" data-v-34d5a22e><i class="fa fa-phone" data-v-34d5a22e></i>\xA0${ssrInterpolate(dataLang.value[lang.value].hero.button)}</a></div></div></div></div></div><div class="slide-button" data-v-34d5a22e><button class="carousel-control-prev" type="button" data-v-34d5a22e><span class="carousel-control-prev-icon" aria-hidden="true" data-v-34d5a22e></span><span class="visually-hidden" data-v-34d5a22e>${ssrInterpolate(texts.jumbotron.prev)}</span></button><button class="carousel-control-next" type="button" data-v-34d5a22e><span class="carousel-control-next-icon" aria-hidden="true" data-v-34d5a22e></span><span class="visually-hidden" data-v-34d5a22e>${ssrInterpolate(texts.jumbotron.next)}</span></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/Jumbotron.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Jumbotron = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-34d5a22e"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "General Trading, Konstruksi, Transporter Limbah B3 | PT Marier Jaya Abadi Bandung",
      meta: [
        {
          name: "description",
          content: "PT Marier Jaya Abadi adalah perusahaan terpercaya di Bandung Barat yang bergerak di bidang General Trading, Konstruksi, dan Transporter Limbah B3."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Jumbotron, null, null, _parent));
      _push(ssrRenderComponent(History, null, null, _parent));
      _push(ssrRenderComponent(Services, null, null, _parent));
      _push(ssrRenderComponent(Values, null, null, _parent));
      _push(ssrRenderComponent(Gallery, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(Portfolio, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CzIipxob.mjs.map
