(()=>{"use strict";var e,r={625:()=>{const e=window.React,r=window.wp.blocks,t=window.wp.i18n,a=window.wp.blockEditor,n=JSON.parse('{"u2":"create-block/fand-gradient"}'),i=window.wp.richText,o=window.wp.components;(0,r.registerBlockType)(n.u2,{edit:function(){return(0,e.createElement)("p",{...(0,a.useBlockProps)()},(0,t.__)("Fand Gradient – hello from the editor!","fand-gradient"))},save:function(){return(0,e.createElement)("p",{...a.useBlockProps.save()},"Fand Gradient – hello from the saved content!")}}),(0,i.registerFormatType)("my-custom-format/linear-gradient",{title:"Linear Gradient",tagName:"mark",className:"linear-gradient",edit:({value:r,onChange:t})=>{const[n,l]=(0,e.useState)(null),d=e=>{t((0,i.applyFormat)(r,(e=>({type:"my-custom-format/linear-gradient",attributes:{class:"linear-gradient",style:`background: ${e||"none"};`}}))(e)))},g=!!(0,i.getActiveFormat)(r,"my-custom-format/linear-gradient");return(0,e.createElement)("div",{style:{position:"relative"}},(0,e.createElement)(a.RichTextToolbarButton,{icon:"admin-customizer",title:"Linear Gradient",onClick:d,isActive:g}),g&&(0,e.createElement)("div",{style:{width:"260px",padding:"16px",position:"absolute",top:"100%",left:"50%",backgroundColor:"white",zIndex:9999}},(0,e.createElement)(o.GradientPicker,{__nextHasNoMargin:!0,value:n,onChange:e=>{l(e),console.log(e),d(e)},gradients:[{name:"Rouge",gradient:"linear-gradient(-100deg, rgba(255, 20, 0, 0.2), rgba(255, 20, 0, 0.7) 95%, rgba(255, 20, 0, 0.1))",slug:"Rouge"},{name:"Vert",gradient:"linear-gradient(-100deg, rgba(0, 255, 20, 0.2), rgba(0, 255, 20, 0.7) 95%, rgba(0, 255, 20, 0.1))",slug:"Vert"},{name:"Bleu",gradient:"linear-gradient(-100deg, rgba(0, 20, 255, 0.2), rgba(0, 20, 255, 0.7) 95%, rgba(0, 20, 255, 0.1))",slug:"Bleu"},{name:"violet",gradient:"linear-gradient(-100deg, rgba(106, 24, 133, 0.2), rgba(106, 24, 133, 0.7) 95%, rgba(106, 24, 133, 0.1))",slug:"violet"}]})))}})}},t={};function a(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,a),i.exports}a.m=r,e=[],a.O=(r,t,n,i)=>{if(!t){var o=1/0;for(s=0;s<e.length;s++){for(var[t,n,i]=e[s],l=!0,d=0;d<t.length;d++)(!1&i||o>=i)&&Object.keys(a.O).every((e=>a.O[e](t[d])))?t.splice(d--,1):(l=!1,i<o&&(o=i));if(l){e.splice(s--,1);var g=n();void 0!==g&&(r=g)}}return r}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,n,i]},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={826:0,431:0};a.O.j=r=>0===e[r];var r=(r,t)=>{var n,i,[o,l,d]=t,g=0;if(o.some((r=>0!==e[r]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(d)var s=d(a)}for(r&&r(t);g<o.length;g++)i=o[g],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(s)},t=globalThis.webpackChunkfand_gradient=globalThis.webpackChunkfand_gradient||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=a.O(void 0,[431],(()=>a(625)));n=a.O(n)})();