(()=>{"use strict";var e,t={892:(e,t,r)=>{const o=window.wp.blocks,n=window.wp.element,l=(window.wp.i18n,window.wp.blockEditor),a=window.wp.serverSideRender;var s=r.n(a);const i=window.wp.components,c=JSON.parse('{"u2":"miles-blocks/miles-podcast-feed"}');(0,o.registerBlockType)(c.u2,{edit:function(e){let{attributes:t,setAttributes:r}=e;const{start:o,end:a}=t;return(0,n.createElement)("section",(0,l.useBlockProps)(),(0,n.createElement)(l.InspectorControls,null,(0,n.createElement)(i.Panel,{header:"Podcast Feed"},(0,n.createElement)(i.PanelBody,{title:"Podcast Feed Settings"},(0,n.createElement)(i.PanelRow,null,(0,n.createElement)(i.__experimentalNumberControl,{label:"Start",onChange:e=>{r({start:e})},value:o})),(0,n.createElement)(i.PanelRow,null,(0,n.createElement)(i.__experimentalNumberControl,{label:"Stop",onChange:e=>{r({stop:e})},value:a}))))),(0,n.createElement)(s(),{skipBlockSupportAttributes:!0,block:c.u2,attributes:t}))}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,r,n,l)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,n,l]=e[u],s=!0,i=0;i<r.length;i++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(s=!1,l<a&&(a=l));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,n,l]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={666:0,291:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,l,[a,s,i]=r,c=0;if(a.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(i)var u=i(o)}for(t&&t(r);c<a.length;c++)l=a[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},r=globalThis.webpackChunkmiles_editor_blocks=globalThis.webpackChunkmiles_editor_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[291],(()=>o(892)));n=o.O(n)})();