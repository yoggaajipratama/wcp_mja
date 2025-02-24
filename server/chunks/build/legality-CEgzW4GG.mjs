import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';

const _sfc_main = {
  __name: "legality",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cookies } = useNuxtApp();
    const dataLang = ref(null);
    const lang = ref("");
    const values = ref([
      {
        image: "/img/icons/garuda.png",
        name: "AKTE PERUSAHAAN",
        description: `
        Nomor : 641. 25 September 2023<br>
        Notaris : Rima Nurwidianingsih, S.H., M.Kn
        `
      },
      {
        image: "/img/icons/pengayoman.png",
        name: "AKTE PERUSAHAAN",
        description: `
        Nomor : AHU-0058602.AH.01.02 <br>
        Tahun : 2023
        `
      },
      {
        image: "/img/icons/bkpm.png",
        name: "NOMOR INDUK BERUSAHA (NIB) PERUSAHAAN",
        description: `
        Nomor : 2806220051172
        `
      },
      {
        image: "/img/icons/ndr.png",
        name: "NOMOR POKOK WAJIB PAJAK (NPWP) PERUSAHAAN",
        description: `
        Nomor : 65.955.389.5-421.000
        `
      },
      {
        image: "/img/icons/bandung_barat.png",
        name: "SURAT KETERANGAN DOMISILI PERUSAHAAN",
        description: `
        Nomor : 271/2004/DS/V/2023
        `
      },
      {
        image: "/img/icons/kehutani.png",
        name: `
        SK REKOMENDASI PENGANGKUTAN LB3
        KEMENTERIAN LINGKUNGAN HIDUP DAN
        KEHUTANAN REPUBLIK INDONESIA`,
        description: `
        Nomor : S.1054/PSLB3-PLB3/PK/PLB.3/03/2024
        `
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f8f9c0eb>`);
      if (dataLang.value) {
        _push(`<section id="values" class="lagality-section" data-v-f8f9c0eb><h1 class="text-center" data-v-f8f9c0eb>${ssrInterpolate(dataLang.value[lang.value].legality.title)}</h1><div class="grid" data-v-f8f9c0eb><!--[-->`);
        ssrRenderList(values.value, (lagality, index) => {
          var _a;
          _push(`<div class="card" data-v-f8f9c0eb><div class="image-wrapper" data-v-f8f9c0eb><img${ssrRenderAttr("src", lagality.image)} alt="General Trading, Konstruksi, Transporter Limbah B3 | Legalitas PT Marier Jaya Abadi Bandung" class="lagality-image" data-v-f8f9c0eb></div><h4 class="lagality-title" data-v-f8f9c0eb>${ssrInterpolate(lagality.name)}</h4><p class="text-center lagality-description" data-v-f8f9c0eb>${(_a = lagality.description) != null ? _a : ""}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/informations/legality.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Legality = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f8f9c0eb"]]);

export { Legality as L };
//# sourceMappingURL=legality-CEgzW4GG.mjs.map
