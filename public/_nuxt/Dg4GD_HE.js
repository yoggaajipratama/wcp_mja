import{_ as d,a as A,r,o as N,t as n,v as s,C as p,x as a,y as l,F as u,D as _}from"./DVE9pVop.js";const E={key:0,id:"values",class:"lagality-section"},h={class:"text-center"},K={class:"grid"},P={class:"image-wrapper"},S=["src"],L={class:"lagality-title"},v=["innerHTML"],I={__name:"legality",setup(R){const{$cookies:t}=A(),i=r(null),c=r("");N(async()=>{try{t.get("lang")||t.set("lang","id");const e=await fetch("/languages.json");i.value=await e.json(),c.value=t.get("lang")}catch(e){throw e}});const g=r([{image:"/img/icons/garuda.png",name:"AKTE PERUSAHAAN",description:`
        Nomor : 641. 25 September 2023<br>
        Notaris : Rima Nurwidianingsih, S.H., M.Kn
        `},{image:"/img/icons/pengayoman.png",name:"AKTE PERUSAHAAN",description:`
        Nomor : AHU-0058602.AH.01.02 <br>
        Tahun : 2023
        `},{image:"/img/icons/bkpm.png",name:"NOMOR INDUK BERUSAHA (NIB) PERUSAHAAN",description:`
        Nomor : 2806220051172
        `},{image:"/img/icons/ndr.png",name:"NOMOR POKOK WAJIB PAJAK (NPWP) PERUSAHAAN",description:`
        Nomor : 65.955.389.5-421.000
        `},{image:"/img/icons/bandung_barat.png",name:"SURAT KETERANGAN DOMISILI PERUSAHAAN",description:`
        Nomor : 271/2004/DS/V/2023
        `},{image:"/img/icons/kehutani.png",name:`
        SK REKOMENDASI PENGANGKUTAN LB3
        KEMENTERIAN LINGKUNGAN HIDUP DAN
        KEHUTANAN REPUBLIK INDONESIA`,description:`
        Nomor : S.1054/PSLB3-PLB3/PK/PLB.3/03/2024
        `}]);return(e,U)=>(s(),n("div",null,[i.value?(s(),n("section",E,[a("h1",h,l(i.value[c.value].legality.title),1),a("div",K,[(s(!0),n(u,null,_(g.value,(o,m)=>(s(),n("div",{key:m,class:"card"},[a("div",P,[a("img",{src:o.image,alt:"General Trading, Konstruksi, Transporter Limbah B3 | Legalitas PT Marier Jaya Abadi Bandung",class:"lagality-image"},null,8,S)]),a("h4",L,l(o.name),1),a("p",{class:"text-center lagality-description",innerHTML:o.description},null,8,v)]))),128))])])):p("",!0)]))}},B=d(I,[["__scopeId","data-v-f8f9c0eb"]]);export{B as L};
