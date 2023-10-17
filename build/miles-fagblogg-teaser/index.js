(()=>{"use strict";var e={n:t=>{var l=t&&t.__esModule?()=>t.default:()=>t;return e.d(l,{a:l}),l},d:(t,l)=>{for(var n in l)e.o(l,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:l[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,l=window.wp.element,n=window.wp.i18n,o=window.wp.blockEditor,a=window.wp.serverSideRender;var r=e.n(a);const s=window.wp.components,i=JSON.parse('{"u2":"miles-blocks/miles-fagblogg-teaser"}');(0,t.registerBlockType)(i.u2,{edit:function(e){let{attributes:t,setAttributes:a}=e;return(0,l.createElement)("section",(0,o.useBlockProps)(),(0,l.createElement)(o.InspectorControls,null,(0,l.createElement)(s.Panel,{header:(0,n.__)("Miles Fagblogg Teaser Settings","miles-fagblogg-teaser")},(0,l.createElement)(s.PanelBody,{title:(0,n.__)("Miles Fagblogg Teaser Settings","miles-fagblogg-teaser")},(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.TextControl,{label:(0,n.__)("Link","miles-fagblogg-teaser"),onChange:function(e){a({link:e})},value:t.link})),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.TextControl,{label:(0,n.__)("Number of Posts","miles-fagblogg-teaser"),onChange:function(e){a({numberOfPosts:parseInt(e,10)})},value:t.numberOfPosts,type:"number"})),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(ToggleControl,{label:"Display Author",checked:t.displayAuthor,onChange:function(e){a({displayAuthor:e})}})),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(ToggleControl,{label:"Display Post Date",checked:t.displayPostDate,onChange:function(e){a({displayPostDate:e})}})),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(ToggleControl,{label:"Display Image",checked:t.displayFeaturedImage,onChange:function(e){a({displayFeaturedImage:e})}}))))),(0,l.createElement)(r(),{skipBlockSupportAttributes:!0,block:i.u2,attributes:t}))}})})();