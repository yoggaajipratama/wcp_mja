import{_ as B,a as R,r as s,o as L,t as a,v as n,C as m,x as l,y as k,E as T,K as j,F as D,D as G,H as C,J as y}from"./Ckj89h4T.js";const A={key:0},K={id:"gallery",class:"text-center sub-title"},V={class:"category-filter"},$=["src","onClick"],J={class:"text-center"},N={class:"modal-content"},H=["src"],O={__name:"gallery",setup(P){const{$cookies:f}=R(),r=s(null),d=s(""),F=s(!1),o=s(0),p=s(!1),i=s([]),v=s(""),u=s("all"),h=e=>{v.value=e,F.value=!0},x=e=>e?`/api/image/${e}`:"/default-image.jpg",_=()=>{(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()),F.value=!1},w=()=>{o.value>0&&(o.value--,v.value=i.value[o.value].image)},E=()=>{o.value<i.value.length-1&&(o.value++,v.value=i.value[o.value].image)},S=()=>{if(p.value=!p.value,p.value){const e=document.querySelector(".modal-content");e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}else document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()};L(async()=>{try{f.get("lang")||f.set("lang","id");const e=await fetch("/languages.json");r.value=await e.json(),d.value=f.get("lang");const t=await fetch("/api/gallery/");i.value=await t.json()}catch(e){throw e}});const c=s(!1),b=()=>{let e=i.value;return u.value!=="all"&&(e=e.filter(t=>t.category===u.value)),c.value?e:e.slice(0,6)},q=()=>{c.value=!0},z=()=>{c.value=!1},I=()=>{b()};return(e,t)=>(n(),a("div",null,[r.value?(n(),a("div",A,[l("h1",K,k(r.value[d.value].gallery.title),1),l("div",V,[T(l("select",{name:"category","onUpdate:modelValue":t[0]||(t[0]=g=>u.value=g),onChange:I},t[1]||(t[1]=[l("option",{value:"all",class:"form-option"},"All",-1),l("option",{value:"general trading"},"General Trading",-1),l("option",{value:"konstruksi"},"Konstruksi",-1),l("option",{value:"transporter"},"Transporter",-1)]),544),[[j,u.value]])]),l("div",{class:C(["gallery",{"show-more":c.value}])},[(n(!0),a(D,null,G(b(),(g,M)=>(n(),a("div",{key:M,class:"gallery-item"},[l("img",{loading:"lazy",src:x(g.image),alt:"General Trading, Konstruksi, Transporter Limbah B3 | PT Marier Jaya Abadi Bandung",onClick:U=>h(g.image)},null,8,$)]))),128))],2),l("div",J,[c.value?m("",!0):(n(),a("button",{key:0,class:"hero-button",onClick:q},k(r.value[d.value].gallery.more),1)),c.value?(n(),a("button",{key:1,class:"hero-button",onClick:z},k(r.value[d.value].gallery.less),1)):m("",!0)])])):m("",!0),l("div",{class:C(["modal-overlay",{hidden:!F.value}]),onClick:y(_,["self"])},[l("div",N,[l("span",{class:"text-center modal-close",onClick:_}," × "),u.value=="all"?(n(),a("button",{key:0,class:"modal-nav left",onClick:y(w,["stop"])},"❮")):m("",!0),l("img",{src:x(v.value),alt:"Full Image",class:"modal-image"},null,8,H),u.value=="all"?(n(),a("button",{key:1,class:"modal-nav right",onClick:y(E,["stop"])},"❯")):m("",!0),l("button",{class:"fullscreen-btn",onClick:S},t[2]||(t[2]=[l("i",{class:"fa fa-expand"},null,-1)]))])],2)]))}},W=B(O,[["__scopeId","data-v-a3f15977"]]);export{W as G};
