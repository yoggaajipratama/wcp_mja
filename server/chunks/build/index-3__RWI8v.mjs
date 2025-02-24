import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { L as Legality } from './legality-CEgzW4GG.mjs';
import { useSSRContext } from 'vue';
import { u as useHead } from './index-C2merokO.mjs';
import './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Legalitas & Perizinan Resmi PT Marier Jaya Abadi | Sertifikasi & Dokumen Hukum",
      meta: [
        {
          name: "description",
          content: "PT Marier Jaya Abadi adalah perusahaan terpercaya di Bandung Barat yang bergerak di bidang General Trading, Konstruksi, dan Transporter Limbah B3."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Legality, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legality/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3__RWI8v.mjs.map
