import { ref, mergeProps, watch, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';
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

const _sfc_main$4 = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cookies } = useNuxtApp();
    const data = ref({});
    const username = ref(null);
    const oldPassword = ref(null);
    const password = ref(null);
    const stats = [
      { title: "Total Kontak", key: "total_contact", icon: "fas fa-address-book" },
      { title: "Total Foto Galeri", key: "total_gallery_image", icon: "fas fa-images" },
      { title: "Total Portfolio", key: "total_portfolio_image", icon: "fas fa-briefcase" }
    ];
    const showModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (data.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-container" }, _attrs))} data-v-ca7dfa02><div class="header" data-v-ca7dfa02><h1 class="fade-in" data-v-ca7dfa02>Selamat datang kembali, Admin!</h1></div><div class="grid" data-v-ca7dfa02><!--[-->`);
        ssrRenderList(stats, (item) => {
          _push(`<div class="card fade-in" data-v-ca7dfa02><div class="card-header" data-v-ca7dfa02><p data-v-ca7dfa02>${ssrInterpolate(item.title)}</p><i class="${ssrRenderClass([item.icon, "icon"])}" data-v-ca7dfa02></i></div><p class="subtext" data-v-ca7dfa02>Per hari ini</p><h1 class="count" data-v-ca7dfa02>${ssrInterpolate(data.value[item.key])}</h1></div>`);
        });
        _push(`<!--]--><div class="card fade-in password-card" data-v-ca7dfa02><div class="card-header" data-v-ca7dfa02><p data-v-ca7dfa02>Ubah Password</p><i class="fas fa-lock icon" data-v-ca7dfa02></i></div><p class="subtext" data-v-ca7dfa02>Keamanan akun Anda sangat penting</p><button class="btn-change-password" data-v-ca7dfa02>Ubah Sekarang</button></div></div>`);
        if (showModal.value) {
          _push(`<div class="modal" data-v-ca7dfa02><div class="modal-content" data-v-ca7dfa02><span class="close-btn" data-v-ca7dfa02>\xD7</span><h3 data-v-ca7dfa02>Ubah data admin</h3><div class="form-group" data-v-ca7dfa02><label for="username" class="form-label" data-v-ca7dfa02>Username</label><input type="text" name="username" id="username"${ssrRenderAttr("value", username.value)} placeholder="username" class="form-control" data-v-ca7dfa02><label for="oldPassword" class="form-label" data-v-ca7dfa02>Old password</label><input type="password" name="oldPassword"${ssrRenderAttr("value", oldPassword.value)} placeholder="old password" class="form-control" maxlength="8" data-v-ca7dfa02><label for="password" class="form-label" data-v-ca7dfa02>Password</label><input type="password" name="password"${ssrRenderAttr("value", password.value)} placeholder="password" class="form-control" maxlength="8" data-v-ca7dfa02><button class="btn btn-primary" data-v-ca7dfa02>Simpan</button></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/dashboard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ca7dfa02"]]);
const itemsPerPage$1 = 3;
const _sfc_main$3 = {
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const companies = ref([]);
    const showModal = ref(false);
    const isEditMode = ref(false);
    const currentCompany = ref({ portfolio_id: null, name: "", image: "" });
    const searchQuery = ref("");
    const currentPage = ref(1);
    ref("name");
    ref(true);
    watch(searchQuery, () => {
      currentPage.value = 1;
    });
    const filteredCompanies = computed(() => {
      return companies.value.filter(
        (company) => company.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    const paginatedCompanies = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage$1;
      return filteredCompanies.value.slice(start, start + itemsPerPage$1);
    });
    const totalPages = computed(() => {
      return Math.max(1, Math.ceil(filteredCompanies.value.length / itemsPerPage$1));
    });
    const image = (imageName) => {
      return imageName ? `/api/image/${imageName}` : "/default-image.jpg";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "table-container" }, _attrs))} data-v-3f9257d5><h2 class="title" data-v-3f9257d5>Daftar Perusahaan</h2><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Cari perusahaan..." class="search-input" data-v-3f9257d5><button class="add-btn" data-v-3f9257d5><i class="fa fa-plus" data-v-3f9257d5></i> Tambah Perusahaan </button><table class="custom-table" data-v-3f9257d5><thead data-v-3f9257d5><tr data-v-3f9257d5><th data-v-3f9257d5>No</th><th data-v-3f9257d5>Gambar</th><th data-v-3f9257d5>Nama Perusahaan</th><th data-v-3f9257d5>Aksi</th></tr></thead><tbody data-v-3f9257d5><!--[-->`);
      ssrRenderList(paginatedCompanies.value, (company, index) => {
        _push(`<tr data-v-3f9257d5><td data-v-3f9257d5>${ssrInterpolate(index + 1 + (currentPage.value - 1) * itemsPerPage$1)}</td><td data-v-3f9257d5><img${ssrRenderAttr("src", image(company.image))} alt="Gambar" class="logo-img" data-v-3f9257d5></td><td data-v-3f9257d5>${ssrInterpolate(company.name)}</td><td data-v-3f9257d5><button class="edit-btn" data-v-3f9257d5><i class="fa fa-pencil" data-v-3f9257d5></i></button><button class="delete-btn" data-v-3f9257d5><i class="fa fa-trash" data-v-3f9257d5></i></button></td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="pagination" data-v-3f9257d5><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} data-v-3f9257d5>Previous</button><span data-v-3f9257d5>Page ${ssrInterpolate(currentPage.value)} of ${ssrInterpolate(totalPages.value)}</span><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} data-v-3f9257d5>Next</button></div>`);
      if (showModal.value) {
        _push(`<div class="modal" data-v-3f9257d5><div class="modal-content" data-v-3f9257d5><span class="close-btn" data-v-3f9257d5>\xD7</span><h3 data-v-3f9257d5>${ssrInterpolate(isEditMode.value ? "Edit Perusahaan" : "Tambah Perusahaan")}</h3><form data-v-3f9257d5><div class="form-group" data-v-3f9257d5><label class="form-label" for="name" data-v-3f9257d5>Nama Perusahaan:</label><input class="form-control"${ssrRenderAttr("value", currentCompany.value.name)} type="text" id="name" required data-v-3f9257d5></div><div class="form-group" data-v-3f9257d5><label class="form-label" for="image" data-v-3f9257d5>Gambar:</label>`);
        if (currentCompany.value.portfolio_id == null) {
          _push(`<input class="form form-control" type="file" accept="image/*" data-v-3f9257d5>`);
        } else {
          _push(`<!---->`);
        }
        if (currentCompany.value.portfolio_id != null) {
          _push(`<div class="text-center" data-v-3f9257d5><input class="form form-control" type="file" accept="image/*" data-v-3f9257d5></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button type="submit" class="save-btn" data-v-3f9257d5>${ssrInterpolate(isEditMode.value ? "Simpan" : "Tambah")}</button></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/portfolio.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3f9257d5"]]);
const itemsPerPage = 3;
const _sfc_main$2 = {
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const gallery = ref([]);
    const showModal = ref(false);
    const isEditMode = ref(false);
    const currentGallery = ref({ gallery_id: null, image: "", category: "" });
    const searchQuery = ref("");
    const currentPage = ref(1);
    const image = (imageName) => {
      return imageName ? `/api/image/${imageName}` : "/default-image.jpg";
    };
    watch(searchQuery, () => {
      currentPage.value = 1;
    });
    const filteredGallery = computed(() => {
      return gallery.value.filter(
        (item) => item.category.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    const paginatedGallery = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      return filteredGallery.value.slice(start, start + itemsPerPage);
    });
    const totalPages = computed(() => {
      return Math.max(1, Math.ceil(filteredGallery.value.length / itemsPerPage));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "table-container" }, _attrs))} data-v-6256d560><h2 class="title" data-v-6256d560>Daftar Gambar</h2><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Tulis kategori..." class="search-input" data-v-6256d560><button class="add-btn" data-v-6256d560><i class="fa fa-plus" data-v-6256d560></i> Tambah Gambar </button><table class="custom-table" data-v-6256d560><thead data-v-6256d560><tr data-v-6256d560><th data-v-6256d560>No</th><th data-v-6256d560>Gambar</th><th data-v-6256d560>Category</th><th data-v-6256d560>Aksi</th></tr></thead><tbody data-v-6256d560><!--[-->`);
      ssrRenderList(paginatedGallery.value, (gallery2, index) => {
        _push(`<tr data-v-6256d560><td data-v-6256d560>${ssrInterpolate(index + 1 + (currentPage.value - 1) * itemsPerPage)}</td><td data-v-6256d560><img${ssrRenderAttr("src", image(gallery2.image))} alt="Gambar" class="logo-img" data-v-6256d560></td><td data-v-6256d560>${ssrInterpolate(gallery2.category)}</td><td data-v-6256d560><button class="edit-btn" data-v-6256d560><i class="fa fa-pencil" data-v-6256d560></i></button><button class="delete-btn" data-v-6256d560><i class="fa fa-trash" data-v-6256d560></i></button></td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="pagination" data-v-6256d560><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} data-v-6256d560>Previous</button><span data-v-6256d560>Page ${ssrInterpolate(currentPage.value)} of ${ssrInterpolate(totalPages.value)}</span><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} data-v-6256d560>Next</button></div>`);
      if (showModal.value) {
        _push(`<div class="modal" data-v-6256d560><div class="modal-content" data-v-6256d560><span class="close-btn" data-v-6256d560>\xD7</span><h3 data-v-6256d560>${ssrInterpolate(isEditMode.value ? "Edit Gambar" : "Tambah Gambar")}</h3><form data-v-6256d560><div class="form-group" data-v-6256d560><label for="category" data-v-6256d560>Category:</label><select name="category" id="category" class="form-select" data-v-6256d560><option value="general trading" data-v-6256d560${ssrIncludeBooleanAttr(Array.isArray(currentGallery.value.category) ? ssrLooseContain(currentGallery.value.category, "general trading") : ssrLooseEqual(currentGallery.value.category, "general trading")) ? " selected" : ""}>general trading</option><option value="konstruksi" data-v-6256d560${ssrIncludeBooleanAttr(Array.isArray(currentGallery.value.category) ? ssrLooseContain(currentGallery.value.category, "konstruksi") : ssrLooseEqual(currentGallery.value.category, "konstruksi")) ? " selected" : ""}>konstruksi</option><option value="transporter" data-v-6256d560${ssrIncludeBooleanAttr(Array.isArray(currentGallery.value.category) ? ssrLooseContain(currentGallery.value.category, "transporter") : ssrLooseEqual(currentGallery.value.category, "transporter")) ? " selected" : ""}>transporter</option></select></div><div class="form-group" data-v-6256d560><label for="image" data-v-6256d560>Gambar:</label><input class="form-control" type="file" accept="image/*" data-v-6256d560></div><button type="submit" class="save-btn" data-v-6256d560>${ssrInterpolate(isEditMode.value ? "Simpan" : "Tambah")}</button></form></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/gallery.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6256d560"]]);
const contactsPerPage = 3;
const _sfc_main$1 = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const contacts = ref([]);
    const searchQuery = ref("");
    const currentPage = ref(1);
    const totalPages = computed(() => Math.ceil(filteredContacts.value.length / contactsPerPage));
    const filteredContacts = computed(() => {
      return contacts.value.filter(
        (contact) => contact.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    const paginatedContacts = computed(() => {
      const start = (currentPage.value - 1) * contactsPerPage;
      const end = start + contactsPerPage;
      return filteredContacts.value.slice(start, end);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-list-container" }, _attrs))} data-v-e1ed501f><h1 class="header" data-v-e1ed501f>Daftar Kontak</h1><div class="search-wrapper" data-v-e1ed501f><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Cari berdasarkan nama" class="search-input" data-v-e1ed501f><i class="fas fa-search search-icon" data-v-e1ed501f></i></div><div class="table-container" data-v-e1ed501f><table class="contact-table" data-v-e1ed501f><thead data-v-e1ed501f><tr data-v-e1ed501f><th data-v-e1ed501f><i class="fa fa-refresh pointer" data-v-e1ed501f></i></th><th data-v-e1ed501f>Nama</th><th data-v-e1ed501f>Telepon</th><th data-v-e1ed501f>Email</th><th data-v-e1ed501f>Aksi</th></tr></thead><tbody data-v-e1ed501f><!--[-->`);
      ssrRenderList(paginatedContacts.value, (contact, index) => {
        _push(`<tr data-v-e1ed501f><td data-v-e1ed501f></td><td data-v-e1ed501f>${ssrInterpolate(contact.name)}</td><td data-v-e1ed501f>${ssrInterpolate(contact.phone)}</td><td data-v-e1ed501f>${ssrInterpolate(contact.email)}</td><td data-v-e1ed501f><button class="btn-delete" data-v-e1ed501f>Hapus</button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="pagination-controls" data-v-e1ed501f><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="pagination-btn" data-v-e1ed501f>Sebelumnya</button><span class="page-indicator" data-v-e1ed501f>${ssrInterpolate(currentPage.value)} / ${ssrInterpolate(totalPages.value)}</span><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="pagination-btn" data-v-e1ed501f>Berikutnya</button></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e1ed501f"]]);
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cookies } = useNuxtApp();
    const activeMenu = ref("dashboard");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-container" }, _attrs))} data-v-eefca7cb><aside class="sidebar" data-v-eefca7cb><ul data-v-eefca7cb><li class="${ssrRenderClass({ "active": activeMenu.value === "dashboard" })}" data-v-eefca7cb><i class="fas fa-tachometer-alt" data-v-eefca7cb></i> Dasbor </li><li class="${ssrRenderClass({ "active": activeMenu.value === "portfolio" })}" data-v-eefca7cb><i class="fas fa-briefcase" data-v-eefca7cb></i> Portofolio </li><li class="${ssrRenderClass({ "active": activeMenu.value === "gallery" })}" data-v-eefca7cb><i class="fas fa-images" data-v-eefca7cb></i> Galeri </li><li class="${ssrRenderClass({ "active": activeMenu.value === "contact" })}" data-v-eefca7cb><i class="fas fa-address-book" data-v-eefca7cb></i> Kontak </li><li data-v-eefca7cb><button class="btn form-control p-2 btn-danger" data-v-eefca7cb><i class="fas fa-sign-out-alt" data-v-eefca7cb></i> Logout </button></li></ul></aside><main class="main-content" data-v-eefca7cb>`);
      _push(ssrRenderComponent(Dashboard, {
        style: activeMenu.value === "dashboard" ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Portfolio, {
        style: activeMenu.value === "portfolio" ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Gallery, {
        style: activeMenu.value === "gallery" ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Contact, {
        style: activeMenu.value === "contact" ? null : { display: "none" }
      }, null, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eefca7cb"]]);

export { dashboard as default };
//# sourceMappingURL=dashboard-BnrTw2fh.mjs.map
