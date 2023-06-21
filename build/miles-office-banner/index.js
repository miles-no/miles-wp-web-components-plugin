/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/miles-office-banner/edit.js":
/*!*****************************************!*\
  !*** ./src/miles-office-banner/edit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var miles_wc_public_miles_wc_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! miles-wc/public/miles-wc.es */ "./node_modules/miles-wc/public/miles-wc.es.js");

const {
  InspectorControls,
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
  useInnerBlocksProps
} = wp.blockEditor;
const {
  Button,
  PanelBody,
  PanelRow,
  ResponsiveWrapper,
  TextControl
} = wp.components;
const {
  Fragment
} = wp.element;
const {
  compose
} = wp.compose;
const {
  withSelect
} = wp.data;
const {
  __
} = wp.i18n;

const BlockEdit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const changeHeading = heading => {
    setAttributes({
      bannerHeading: heading
    });
  };
  const onSelectMedia = media => {
    props.setAttributes({
      mediaId: media.id,
      mediaUrl: media.url
    });
  };
  const removeMedia = () => {
    props.setAttributes({
      mediaId: 0,
      mediaUrl: ''
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Select banner image', 'miles-office-banner'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Banner heading",
    onChange: changeHeading,
    value: attributes.bannerHeading
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, {
    className: "editor-post-featured-image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    onSelect: onSelectMedia,
    value: attributes.mediaId,
    allowedTypes: ['image'],
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: open
    }, attributes.mediaId == 0 && __('Choose a banner image', 'miles-blocks'), props.media != undefined && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: props.media.media_details.sizes.thumbnail.source_url
    }))
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    title: __('Replace image', 'miles-blocks'),
    value: attributes.mediaId,
    onSelect: onSelectMedia,
    allowedTypes: ['image'],
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: open,
      isDefault: true,
      isLarge: true
    }, __('Replace image', 'miles-blocks'))
  })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    onClick: removeMedia,
    isLink: true,
    isDestructive: true
  }, __('Remove banner image', 'miles-blocks')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-miles-blocks-miles-office-banner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, useBlockProps(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useInnerBlocksProps()))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSelect((select, props) => {
  return {
    media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined
  };
})(BlockEdit));

/***/ }),

/***/ "./src/miles-office-banner/index.js":
/*!******************************************!*\
  !*** ./src/miles-office-banner/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/miles-office-banner/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/miles-office-banner/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/miles-office-banner/block.json");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/miles-office-banner/style.scss":
/*!********************************************!*\
  !*** ./src/miles-office-banner/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/miles-wc/public/miles-wc.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/miles-wc/public/miles-wc.es.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MilesArrow: () => (/* binding */ oe),
/* harmony export */   MilesArrowNav: () => (/* binding */ zt),
/* harmony export */   MilesAudioPlayer: () => (/* binding */ fe),
/* harmony export */   MilesAudioSeek: () => (/* binding */ Zt),
/* harmony export */   MilesAuthorCard: () => (/* binding */ ae),
/* harmony export */   MilesBanner: () => (/* binding */ ve),
/* harmony export */   MilesBlogCard: () => (/* binding */ Wt),
/* harmony export */   MilesBulb: () => (/* binding */ Ht),
/* harmony export */   MilesBusinessCard: () => (/* binding */ gt),
/* harmony export */   MilesButtonAnchor: () => (/* binding */ Bt),
/* harmony export */   MilesCloud: () => (/* binding */ kt),
/* harmony export */   MilesContactCard: () => (/* binding */ ce),
/* harmony export */   MilesCup: () => (/* binding */ St),
/* harmony export */   MilesCurve: () => (/* binding */ Lt),
/* harmony export */   MilesEmail: () => (/* binding */ Pt),
/* harmony export */   MilesFagbloggTeaser: () => (/* binding */ Gt),
/* harmony export */   MilesImageSlider: () => (/* binding */ Kt),
/* harmony export */   MilesInfo: () => (/* binding */ jt),
/* harmony export */   MilesInfoBlock: () => (/* binding */ ne),
/* harmony export */   MilesLogo: () => (/* binding */ Rt),
/* harmony export */   MilesOfficeBanner: () => (/* binding */ se),
/* harmony export */   MilesOverlapBlock: () => (/* binding */ te),
/* harmony export */   MilesPause: () => (/* binding */ Nt),
/* harmony export */   MilesPhone: () => (/* binding */ qt),
/* harmony export */   MilesPlay: () => (/* binding */ $t),
/* harmony export */   MilesPodcastCard: () => (/* binding */ pe),
/* harmony export */   MilesPodcastTeaser: () => (/* binding */ Ot),
/* harmony export */   MilesPodd: () => (/* binding */ Tt),
/* harmony export */   MilesProfileCard: () => (/* binding */ It),
/* harmony export */   MilesZoom: () => (/* binding */ At),
/* harmony export */   SiteMenu: () => (/* binding */ me)
/* harmony export */ });
var wt = Object.defineProperty;
var Mt = (o, t, s) => t in o ? wt(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[t] = s;
var a = (o, t, s) => (Mt(o, typeof t != "symbol" ? t + "" : t, s), s);
const l = "", U = document.createElement("template");
U.innerHTML = `
  <style>
    ${l}


    :host {
      display: inline-block;
      width: inherit;
      box-sizing: border-box;
    }
  </style>
  <div class="cloud">
    <svg fill="#b72a26" width="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 386 200.89">
      <defs>
        <clipPath id="clippath">
          <rect width="386" height="200.89"/>
        </clipPath>
      </defs>
      <g>
        <polygon points="325.22 180.9 193.99 180.95 60.79 180.89 60.79 200.88 120.37 200.88 193.15 200.88 194.82 200.88 251.59 200.88 325.44 200.88 325.22 180.9"/>
        <g>
          <path d="m60.79,100.96v-19.99C24.82,80.97,0,107.79,0,140.93s24.82,59.95,60.79,59.95v-19.99c-21.98,0-38.31-17.98-38.31-39.97s16.33-39.97,38.31-39.97"/>
          <path d="m178.63,60.78h19.99c0-35.97-26.82-60.78-59.96-60.78s-59.96,24.81-59.96,60.78h19.99c0-21.98,17.98-38.3,39.97-38.3s39.97,16.32,39.97,38.3"/>
          <path d="m319.55,100.97h19.99c0-35.97-26.82-60.78-59.96-60.78s-59.96,24.81-59.96,60.78h19.99c0-21.98,17.98-38.3,39.97-38.3s39.97,16.32,39.97,38.3"/>
          <path d="m178.65,61c21.98,0,38.3,17.99,38.3,39.97h22.48c0-33.14-24.81-59.95-60.78-59.95v19.99Z"/>
          <path d="m98.8,61c-21.98,0-38.3,17.99-38.3,39.97h-22.48c0-33.14,24.81-59.95,60.78-59.95v19.99Z"/>
          <path d="m325.14,100.96c21.97,0,38.3,17.99,38.3,39.97h22.48c0-33.14-24.81-59.96-60.78-59.96v19.99Z"/>
          <path d="m325.22,180.9c21.98,0,38.3-17.99,38.3-39.97h22.48c0,33.14-24.81,59.95-60.78,59.95v-19.99Z"/>
        </g>
      </g>
    </svg>
  </div>  
  `;
class kt extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(U.content.cloneNode(!0)), this.svg = t.querySelector("svg");
  }
  static get observedAttributes() {
    return ["width", "height", "color"];
  }
  attributeChangedCallback(t, s, e) {
    t === "width" && this.svg.setAttribute("width", e), t === "height" && this.svg.setAttribute("height", e), t === "color" && this.svg.setAttribute("fill", e);
  }
}
const p = "miles-cloud";
customElements.get(p) || customElements.define(p, kt);
const K = document.createElement("template");
K.innerHTML = ` 
  <style>
    ${l}

    :host {
      display: inline-block;
    }
  </style>
  <div class="heart">
    <svg fill="#b8261c" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 259.85 207.9">
      <defs>
        <clipPath id="clippath"><rect y="0" width="259.85" height="207.9"/></clipPath>
      </defs>
      <g>
        <path d="m242.73,95.09l-112.28,112.28-19.75-19.75,110.84-110.84c13.31-13.31,12.88-27.76,1.15-39.49-12.02-12.02-26.33-12.3-39.64,1l-53.12,53.12-19.75-19.75,54.55-54.55c24.89-24.9,55.51-20.89,77.26.86,21.6,21.6,25.61,52.22.72,77.12"/>
        <path d="m17.12,95.09l112.81,112.81,19.74-19.75L38.3,76.78c-13.31-13.31-12.88-27.76-1.15-39.49,12.02-12.02,26.33-12.3,39.64,1l53.16,53.16,19.75-19.75-54.59-54.59c-24.89-24.9-55.51-20.89-77.26.86-21.6,21.6-25.61,52.22-.72,77.12"/>
      </g>
    </svg>
  </div>
    `;
class xt extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(K.content.cloneNode(!0)), this.svg = t.querySelector("svg");
  }
  static get observedAttributes() {
    return ["width", "height", "color"];
  }
  attributeChangedCallback(t, s, e) {
    t === "width" && this.svg.setAttribute("width", e), t === "height" && this.svg.setAttribute("height", e), t === "color" && this.svg.setAttribute("fill", e);
  }
}
const g = "miles-heart";
customElements.get(g) || customElements.define(g, xt);
const X = document.createElement("template");
X.innerHTML = `
    <style>
      ${l}

        :host {
          display: inline-block;
        } 
    </style>
    <div class="curve">
      <svg fill="#b8261c" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 171.16 85.58">
        <defs>
          <clipPath id="clippath">
            <rect class="cls-1" width="171.16" height="85.58"/>
          </clipPath>
          </defs>
            <g>
              <path d="m85.58,85.58c22.86,0,44.35-8.9,60.52-25.07,16.16-16.16,25.07-37.66,25.07-60.52h-28.74c0,31.34-25.5,56.84-56.84,56.84S28.74,31.34,28.74,0H0C0,22.86,8.9,44.35,25.07,60.52c16.16,16.16,37.66,25.07,60.52,25.07"/>
            </g>
          </svg>
    </div>
      `;
class Lt extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(X.content.cloneNode(!0)), this.svg = t.querySelector("svg");
  }
  static get observedAttributes() {
    return ["width", "height", "color"];
  }
  attributeChangedCallback(t, s, e) {
    t === "width" && this.svg.setAttribute("width", e), t === "height" && this.svg.setAttribute("height", e), t === "color" && this.svg.setAttribute("fill", e);
  }
}
const v = "miles-curve";
customElements.get(v) || customElements.define(v, Lt);
const G = document.createElement("template");
G.innerHTML = `
    <style>
        ${l}

    </style>
    <div class="bulb">
      <svg fill="#b8261c" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 386 360.88">
        <defs>
          <clipPath>
            <rect width="386" height="360.88"/>
          </clipPath>
          </defs>
            <g>
              <path d="m228.15,270.25h-70.3v-16.81h70.3v16.81Zm0,32.09h-70.3v-16.81h70.3v16.81Z"/>
              <polygon points="182.72 0 182.72 47.22 182.72 106.64 203.28 106.64 203.28 0 182.72 0"/>
              <polygon points="350.47 72.39 365.01 86.93 289.61 162.33 275.07 147.79 317.08 105.78 350.47 72.39"/>
              <polygon points="338.78 207.95 279.37 207.95 279.37 228.52 386 228.52 386 207.95 338.78 207.95"/>
              <polygon points="59.41 207.95 0 207.95 0 228.52 106.64 228.52 106.64 207.95 59.41 207.95"/>
              <polygon points="120.6 147.79 106.06 162.33 30.66 86.93 45.2 72.39 87.21 114.4 120.6 147.79"/>
            <g>
              <path d="m192.47,360.88c22.01,0,36.06-18.03,36.06-38.67,0-1.67-.09-3.3-.26-4.89h-70.34c-.31,1.68-.46,3.67-.46,5.66,0,20.63,14.52,37.9,35,37.9m15.89-29.04c-.92,6.72-7.64,12.99-15.89,12.99s-14.06-6.42-14.67-12.99h30.57Z"/>
              <path d="m218.93,170.13c14.26,14.26,13.19,36.53-1.08,50.79l14.59,14.59c21.51-21.51,22.8-55.01-.54-78.35l-12.97,12.97Z"/>
              <path d="m167.07,222c-14.26-14.26-13.19-36.53,1.08-50.79l-14.59-14.59c-21.51,21.51-22.8,55.01.54,78.35l12.97-12.97Z"/>
              <path d="m218.93,170.13c-14.26-14.26-36.53-13.19-50.79,1.08l-14.59-14.59c21.51-21.51,55.01-22.8,78.35.54l-12.97,12.97Z"/>
            </g>
          </g>
        </svg>
    </div>  
    `;
class Ht extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(G.content.cloneNode(!0)), this.svg = t.querySelector("svg");
  }
  static get observedAttributes() {
    return ["width", "height", "color"];
  }
  attributeChangedCallback(t, s, e) {
    t === "width" && this.svg.setAttribute("width", e), t === "height" && this.svg.setAttribute("height", e), t === "color" && this.svg.setAttribute("fill", e);
  }
}
const C = "miles-bulb";
customElements.get(C) || customElements.define(C, Ht);
const J = document.createElement("template");
J.innerHTML = `
    <style>
      ${l}

      :host {
        display: inline-block;
      }
    </style>
    <div class="cup">
      <svg fill="#b8261c" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 205.08 385.35">
        <defs>
          <clipPath id="clippath">
            <rect width="205.08" height="385.35"/>
          </clipPath>
        </defs>
          <g><rect x="182.4" y="182.17" width="22.68" height="134.2"/>
          <rect x="68.99" y="182.17" width="22.68" height="134.2"/>
            <g>
              <path d="m155.26,58.11h-31.76c-11.91,0-20.6,6.8-23.81,18.9h0s0,21.17,0,21.17h10.58c0-10.77,4.73-19.1,17.58-19.1h26.84c24.76,0,36.48-13.98,36.48-36.47v-5.86h-19.09v5.48c0,9.45-4.35,15.88-16.82,15.88"/>
              <path d="m131.7,21.36h-31.75c-11.91,0-20.6,6.81-23.81,18.9h0s0,21.17,0,21.17h10.58c0-10.77,4.73-19.1,17.58-19.1h26.84c24.76,0,36.48-13.98,36.48-36.47V0h-19.09v5.48c0,9.45-4.35,15.88-16.82,15.88"/>
              <path d="m205.08,316.36h-22.68c0,24.95-20.41,43.47-45.36,43.47s-45.36-18.52-45.36-43.47h-22.68c0,40.83,30.43,68.99,68.04,68.99s68.05-28.16,68.05-68.99"/>
              <path d="m205.08,182.17h-22.68c0,24.95-20.41,43.47-45.36,43.47s-45.36-18.52-45.36-43.47h-22.68c0,40.83,30.43,68.99,68.04,68.99s68.05-28.16,68.05-68.99"/>
              <path d="m68.99,182.17h22.68c0-24.95,20.41-43.47,45.36-43.47s45.36,18.52,45.36,43.47h22.68c0-40.83-30.43-68.99-68.05-68.99s-68.04,28.16-68.04,68.99"/>
              <path d="m68.99,325.05v-22.68c-24.95,0-43.47-20.41-43.47-45.36s18.52-45.36,43.47-45.36v-22.68C28.16,188.97,0,219.4,0,257.01s28.16,68.04,68.99,68.04"/>
            </g>
          </g>
          </svg>
    </div>
      `;
class St extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(J.content.cloneNode(!0)), this.svg = t.querySelector("svg");
  }
  static get observedAttributes() {
    return ["width", "height", "color"];
  }
  attributeChangedCallback(t, s, e) {
    t === "width" && this.svg.setAttribute("width", e), t === "height" && this.svg.setAttribute("height", e), t === "color" && this.svg.setAttribute("fill", e);
  }
}
const f = "miles-cup";
customElements.get(f) || customElements.define(f, St);
class At extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.innerHTML = `
        <style>
          ${l}

          :host {
            display: inline-block;
          }
        </style>
        <div class="icon">
        <svg width="54" height="49" viewBox="0 0 54 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6008 21.6C27.5655 21.6 32.4008 16.7647 32.4008 10.8C32.4008 4.83532 27.5655 0 21.6008 0C15.6361 0 10.8008 4.83532 10.8008 10.8C10.8008 16.7647 15.6361 21.6 21.6008 21.6Z" fill="currentColor"/>
        <path d="M22.545 27.0276C15.174 26.7576 0 30.4296 0 37.8006V43.2006H25.758C19.089 35.7486 22.437 27.2976 22.545 27.0276Z" fill="currentColor"/>
        <path d="M47.061 37.8536C48.033 36.2606 48.6 34.3976 48.6 32.3996C48.6 26.4326 43.767 21.5996 37.8 21.5996C31.833 21.5996 27 26.4326 27 32.3996C27 38.3666 31.833 43.1996 37.8 43.1996C39.798 43.1996 41.661 42.6056 43.254 41.6606L50.193 48.5996L54 44.7926L47.061 37.8536ZM37.8 37.7996C34.83 37.7996 32.4 35.3696 32.4 32.3996C32.4 29.4296 34.83 26.9996 37.8 26.9996C40.77 26.9996 43.2 29.4296 43.2 32.3996C43.2 35.3696 40.77 37.7996 37.8 37.7996Z" fill="currentColor"/>
        </svg>
        </div>
      `;
  }
}
const b = "miles-zoom";
customElements.get(b) || customElements.define(b, At);
const W = document.createElement("template");
W.innerHTML = `
          <style>
            ${l}

            :host {
              display: inline-block;
              color: var(--miles_primary_light, #fbf0e5);
              
            }

            path {
              transition: all 1s cubic-bezier(0.42, 0.16, 0.07, 0.96);
            }
          </style>
          <div class="icon">
          <svg width="37" height="74" viewBox="0 0 37 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_193_1597)">
          <path d="M18.5954 39.2082C15.9429 39.2082 13.7222 38.3469 11.9333 36.6243C10.1444 34.9018 9.25 32.8101 9.25 30.3493V9.3721C9.25 7.05057 10.158 5.07729 11.9741 3.45227C13.7902 1.82719 15.9955 1.01465 18.59 1.01465C21.1844 1.01465 23.3915 1.82719 25.2112 3.45227C27.031 5.07729 27.9408 7.05057 27.9408 9.3721V30.3493C27.9408 32.8101 27.0464 34.9018 25.2575 36.6243C23.4686 38.3469 21.2479 39.2082 18.5954 39.2082ZM19.4911 60.8711V64.8399C21.8256 65.0539 23.7857 65.9196 25.3714 67.4371C26.9571 68.9545 27.75 70.7444 27.75 72.8066H25.7679C25.7679 71.0362 25.0599 69.5479 23.6441 68.3417C22.2282 67.1355 20.5158 66.5324 18.507 66.5324C16.4982 66.5324 14.7835 67.1355 13.3629 68.3417C11.9424 69.5479 11.2321 71.0362 11.2321 72.8066H9.25C9.25 70.7444 10.0429 68.9545 11.6286 67.4371C13.2143 65.9196 15.1744 65.0539 17.5089 64.8399V60.8711H19.4911ZM16.5179 65.6453V49.1743C11.8488 48.7367 7.92857 46.9663 4.75714 43.863C1.58571 40.7598 0 37.0996 0 32.8824H3.96429C3.96429 36.5028 5.38015 39.5464 8.21189 42.013C11.0436 44.4797 14.4683 45.713 18.486 45.713C22.5037 45.713 25.933 44.4797 28.7741 42.013C31.6152 39.5464 33.0357 36.5028 33.0357 32.8824H37C37 37.0996 35.4143 40.7598 32.2429 43.863C29.0714 46.9663 25.1512 48.7367 20.4821 49.1743V65.6453H16.5179ZM18.3294 33.9534C19.4397 33.9534 20.3496 33.5774 21.059 32.8252C21.7684 32.073 22.1231 31.1676 22.1231 30.109V9.13182C22.1231 8.18464 21.7595 7.39069 21.0324 6.74995C20.3053 6.10921 19.4043 5.78884 18.3294 5.78884C17.2545 5.78884 16.3535 6.10921 15.6264 6.74995C14.8993 7.39069 14.5357 8.18464 14.5357 9.13182V30.109C14.5357 31.1676 14.8904 32.073 15.5998 32.8252C16.3092 33.5774 17.2191 33.9534 18.3294 33.9534Z" fill="currentColor"/>
          </g>
          <defs>
          <clipPath id="clip0_193_1597">
          <rect width="37" height="74" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          </div>
        `;
class Tt extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(W.content.cloneNode(!0)), this.svgEl = t.querySelector("path");
  }
  static get observedAttributes() {
    return ["color"];
  }
  attributeChangedCallback(t, s, e) {
    t === "color" && (e && e.length > 0 ? (this.svgEl.setAttribute("fill", e), this.svgEl.style.transform = "scale(1.03)") : (this.svgEl.setAttribute("fill", "currentColor"), this.svgEl.style.transform = "scale(1)"));
  }
}
const E = "miles-pod";
customElements.get(E) || customElements.define(E, Tt);
const Y = document.createElement("template");
Y.innerHTML = `
      <style> 
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 22C1.1 22 0.75 21.85 0.45 21.55C0.15 21.25 0 20.9 0 20.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H12.5C12.9 0 13.25 0.15 13.55 0.45C13.85 0.75 14 1.1 14 1.5V20.5C14 20.9 13.85 21.25 13.55 21.55C13.25 21.85 12.9 22 12.5 22H1.5ZM1.5 19.75V20.5H12.5V19.75H1.5ZM1.5 18.25H12.5V3.75H1.5V18.25ZM1.5 2.25H12.5V1.5H1.5V2.25Z" fill="currentColor"/>
      </svg>
`;
class qt extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(Y.content.cloneNode(!0)), this.svgEl = t.querySelector("path");
  }
  static get observedAttributes() {
    return ["color"];
  }
  attributeChangedCallback(t, s, e) {
    t === "color" && (e && e.length > 0 ? this.svgEl.setAttribute("fill", e) : this.svgEl.setAttribute("fill", "currentColor"));
  }
}
const y = "miles-phone";
customElements.get(y) || customElements.define(y, qt);
const tt = document.createElement("template");
tt.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 16C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H18.5C18.9 0 19.25 0.15 19.55 0.45C19.85 0.75 20 1.1 20 1.5V14.5C20 14.9 19.85 15.25 19.55 15.55C19.25 15.85 18.9 16 18.5 16H1.5ZM18.5 2.875L10.4 8.175C10.3333 8.20833 10.2708 8.2375 10.2125 8.2625C10.1542 8.2875 10.0833 8.3 10 8.3C9.91667 8.3 9.84583 8.2875 9.7875 8.2625C9.72917 8.2375 9.66667 8.20833 9.6 8.175L1.5 2.875V14.5H18.5V2.875ZM10 6.95L18.4 1.5H1.625L10 6.95ZM1.5 3.05V2.06708V2.08538V1.5V2.075V2.0522V3.05Z" fill="currentColor"/>
</svg>

`;
class Pt extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(tt.content.cloneNode(!0)), this.svgEl = t.querySelector("path");
  }
  static get observedAttributes() {
    return ["color"];
  }
  attributeChangedCallback(t, s, e) {
    t === "color" && (e && e.length > 0 ? this.svgEl.setAttribute("fill", e) : this.svgEl.setAttribute("fill", "currentColor"));
  }
}
const w = "miles-email";
customElements.get(w) || customElements.define(w, Pt);
const et = document.createElement("template");
et.innerHTML = `
      <style></style>
      <svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 -960 960 960" width="64">
        <path fill="#EB4645" d="m418-332 202-129q11-7 11-19t-11-19L418-628q-11-8-23-1.5T383-609v258q0 14 12 20.5t23-1.5Zm62 252q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/>
      </svg>

  `;
class $t extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }).appendChild(et.content.cloneNode(!0));
  }
}
const M = "miles-play";
customElements.get(M) || customElements.define(M, $t);
const st = document.createElement("template");
st.innerHTML = `
      <style></style>
<svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 -960 960 960" width="64">
  <path fill="#EB4645" d="M400.175-320q12.825 0 21.325-8.625T430-350v-260q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T370-610v260q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625Zm160 0q12.825 0 21.325-8.625T590-350v-260q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T530-610v260q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625ZM480.266-80q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/>
</svg>   
  `;
class Nt extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }).appendChild(st.content.cloneNode(!0));
  }
}
const k = "miles-pause";
customElements.get(k) || customElements.define(k, Nt);
class Zt extends HTMLElement {
  constructor() {
    super(), this.shadow = this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["direction"];
  }
  attributeChangedCallback(t, s, e) {
    t === "direction" && (e === "forward" ? this.shadow.innerHTML = `
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_908_340)">
            <path d="M16.6728 32C20.8803 32 24.4877 30.5852 27.4952 27.7556C30.5027 24.9259 32.1694 21.437 32.4953 17.2889C32.525 16.9333 32.4138 16.6222 32.162 16.3556C31.9101 16.0889 31.5916 15.9556 31.2064 15.9556C30.8508 15.9556 30.5471 16.0815 30.2953 16.3333C30.0434 16.5852 29.8879 16.9037 29.8286 17.2889C29.5027 20.6963 28.0952 23.5556 25.6063 25.8667C23.1173 28.1778 20.1395 29.3333 16.6728 29.3333C12.9097 29.3333 9.72445 28.0148 7.11699 25.3778C4.50952 22.7407 3.20579 19.5407 3.20579 15.7778C3.20579 12.1037 4.52434 9 7.16143 6.46667C9.79853 3.93333 12.969 2.66667 16.6728 2.66667C18.6876 2.66667 20.5765 3.12593 22.3395 4.04444C24.1025 4.96296 25.6359 6.17778 26.9396 7.68889L23.6062 7.68889C23.221 7.68889 22.9025 7.81481 22.6507 8.06667C22.3988 8.31852 22.2729 8.63704 22.2729 9.02222C22.2729 9.40741 22.3988 9.72593 22.6507 9.97778C22.9025 10.2296 23.221 10.3556 23.6062 10.3556H30.2286C30.6138 10.3556 30.9323 10.2296 31.1842 9.97778C31.436 9.72593 31.562 9.40741 31.562 9.02222V2.44444C31.562 2.05926 31.436 1.74074 31.1842 1.48889C30.9323 1.23704 30.6138 1.11111 30.2286 1.11111C29.8434 1.11111 29.5249 1.23704 29.273 1.48889C29.0212 1.74074 28.8952 2.05926 28.8952 2.44444V5.82222C27.3545 4.01481 25.5248 2.59259 23.4062 1.55556C21.2877 0.518519 19.0432 0 16.6728 0C14.4505 0 12.3615 0.414815 10.4059 1.24444C8.45035 2.07407 6.7392 3.20741 5.2725 4.64444C3.8058 6.08148 2.65022 7.76296 1.80576 9.68889C0.961298 11.6148 0.539062 13.6889 0.539062 15.9111C0.539062 18.1333 0.961298 20.2222 1.80576 22.1778C2.65022 24.1333 3.8058 25.837 5.2725 27.2889C6.7392 28.7407 8.45035 29.8889 10.4059 30.7333C12.3615 31.5778 14.4505 32 16.6728 32Z" fill="#EB4645"/>
            <path d="M10.4964 22.4348V13.9594L8.53711 15.1652V13.171L10.4964 12H12.3398V22.4348H10.4964Z" fill="#EB4645"/>
            <path d="M19.661 22.6667C18.8649 22.6667 18.1577 22.4271 17.5394 21.9478C16.9211 21.4686 16.4999 20.8464 16.2757 20.0812L18.0147 19.6174C18.1152 20.0271 18.3316 20.3517 18.664 20.5913C18.9963 20.8232 19.3557 20.9391 19.7422 20.9391C20.2291 20.9391 20.6464 20.7652 20.9942 20.4174C21.3421 20.0696 21.516 19.6522 21.516 19.1652C21.516 18.8328 21.4348 18.5314 21.2725 18.2609C21.1179 17.9826 20.9015 17.7662 20.6233 17.6116C20.3527 17.4493 20.059 17.3681 19.7422 17.3681C19.348 17.3681 19.0195 17.4415 18.7567 17.5884C18.5017 17.7275 18.3084 17.8744 18.177 18.029L16.6351 17.542L16.9597 12H22.6405V13.6812H17.9336L18.5828 13.0783L18.3625 16.9159L18.0147 16.4754C18.2853 16.228 18.5983 16.0464 18.9538 15.9304C19.3093 15.8068 19.6533 15.7449 19.9856 15.7449C20.6349 15.7449 21.2107 15.8918 21.713 16.1855C22.2232 16.4792 22.6212 16.885 22.9072 17.4029C23.1931 17.9208 23.3361 18.5082 23.3361 19.1652C23.3361 19.8145 23.1661 20.4058 22.826 20.9391C22.4937 21.4647 22.0454 21.886 21.4812 22.2029C20.9247 22.5121 20.318 22.6667 19.661 22.6667Z" fill="#EB4645"/>
            </g>
            <defs>
            <clipPath id="clip0_908_340">
            <rect width="31.9609" height="32" fill="white" transform="matrix(-1 0 0 1 32.5 0)"/>
            </clipPath>
            </defs>
          </svg>
        ` : this.shadow.innerHTML = `
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_908_346)">
            <path d="M16.339 32C12.1315 32 8.52398 30.5852 5.51651 27.7556C2.50903 24.9259 0.84233 21.437 0.516397 17.2889C0.486767 16.9333 0.59788 16.6222 0.849738 16.3556C1.1016 16.0889 1.42012 15.9556 1.80531 15.9556C2.16088 15.9556 2.46459 16.0815 2.71645 16.3333C2.9683 16.5852 3.12386 16.9037 3.18312 17.2889C3.50906 20.6963 4.91649 23.5556 7.40544 25.8667C9.89438 28.1778 12.8722 29.3333 16.339 29.3333C20.102 29.3333 23.2873 28.0148 25.8947 25.3778C28.5022 22.7407 29.8059 19.5407 29.8059 15.7778C29.8059 12.1037 28.4874 9 25.8503 6.46667C23.2132 3.93333 20.0428 2.66667 16.339 2.66667C14.3241 2.66667 12.4352 3.12593 10.6722 4.04444C8.90917 4.96296 7.37581 6.17778 6.07207 7.68889H9.40548C9.79067 7.68889 10.1092 7.81481 10.3611 8.06667C10.6129 8.31852 10.7388 8.63704 10.7388 9.02222C10.7388 9.40741 10.6129 9.72593 10.3611 9.97778C10.1092 10.2296 9.79067 10.3556 9.40548 10.3556H2.78311C2.39792 10.3556 2.07939 10.2296 1.82754 9.97778C1.57568 9.72593 1.44975 9.40741 1.44975 9.02222V2.44444C1.44975 2.05926 1.57568 1.74074 1.82754 1.48889C2.07939 1.23704 2.39792 1.11111 2.78311 1.11111C3.16831 1.11111 3.48683 1.23704 3.73869 1.48889C3.99055 1.74074 4.11648 2.05926 4.11648 2.44444V5.82222C5.65725 4.01482 7.48692 2.59259 9.60549 1.55556C11.724 0.518519 13.9685 0 16.339 0C18.5612 0 20.6502 0.414815 22.6058 1.24444C24.5614 2.07407 26.2725 3.20741 27.7392 4.64444C29.2059 6.08148 30.3615 7.76296 31.206 9.68889C32.0504 11.6148 32.4727 13.6889 32.4727 15.9111C32.4727 18.1333 32.0504 20.2222 31.206 22.1778C30.3615 24.1333 29.2059 25.837 27.7392 27.2889C26.2725 28.7407 24.5614 29.8889 22.6058 30.7333C20.6502 31.5778 18.5612 32 16.339 32Z" fill="#EB4645"/>
            <path d="M10.4709 22.4348V13.9594L8.51172 15.1652V13.171L10.4709 12H12.3141V22.4348H10.4709Z" fill="#EB4645"/>
            <path d="M19.6348 22.6667C18.8387 22.6667 18.1316 22.4271 17.5133 21.9478C16.8951 21.4686 16.4739 20.8464 16.2497 20.0812L17.9886 19.6174C18.0891 20.0271 18.3055 20.3517 18.6378 20.5913C18.9701 20.8232 19.3295 20.9391 19.7159 20.9391C20.2028 20.9391 20.6201 20.7652 20.9679 20.4174C21.3157 20.0696 21.4896 19.6522 21.4896 19.1652C21.4896 18.8328 21.4084 18.5314 21.2461 18.2609C21.0916 17.9826 20.8752 17.7662 20.5969 17.6116C20.3265 17.4493 20.0328 17.3681 19.7159 17.3681C19.3218 17.3681 18.9933 17.4415 18.7305 17.5884C18.4755 17.7275 18.2823 17.8744 18.1509 18.029L16.6091 17.542L16.9337 12H22.6141V13.6812H17.9075L18.5567 13.0783L18.3364 16.9159L17.9886 16.4754C18.2591 16.228 18.5721 16.0464 18.9276 15.9304C19.2831 15.8068 19.627 15.7449 19.9594 15.7449C20.6085 15.7449 21.1843 15.8918 21.6866 16.1855C22.1967 16.4792 22.5947 16.885 22.8807 17.4029C23.1666 17.9208 23.3096 18.5082 23.3096 19.1652C23.3096 19.8145 23.1396 20.4058 22.7995 20.9391C22.4672 21.4647 22.019 21.886 21.4548 22.2029C20.8984 22.5121 20.2917 22.6667 19.6348 22.6667Z" fill="#EB4645"/>
            </g>
            <defs>
            <clipPath id="clip0_908_346">
            <rect width="31.9609" height="32" fill="white" transform="translate(0.5)"/>
            </clipPath>
            </defs>
      </svg>
`);
  }
}
const x = "miles-seek";
customElements.get(x) || customElements.define(x, Zt);
const _t = "", it = document.createElement("template");
it.innerHTML = `
<style>
  	${_t}

  ${l}
</style>
  <div class="logo">
    <svg version="1.1" fill="#b8261c" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 96 32" xml:space="preserve" class="miles-logo">
    <g>
      <path  d="M86.2,16.5c0-1.1,1.3-1.6,2.8-1.6c1.4,0,2.8,0.5,3.9,1.4l2.6-4c-1.3-1-4.2-2-6.9-2c-4,0-7.8,2.4-7.8,6.3c0,6.5,9.8,5.4,9.8,8.5c0,1-1.1,1.7-2.6,1.7c-2,0-4-0.7-5.6-2l-2.6,3.9c2.4,1.8,5.2,2.7,8.2,2.8c4.3,0,8.1-2.4,8.1-6.3
  C96,18.1,86.2,19.2,86.2,16.5z"></path>
      <path  d="M14.7,10.8C14.7,10.8,14.7,10.8,14.7,10.8c-5,0-9.1-4.1-9-9.1c0,0,0,0,0,0H0V31h5.7V12.7
  c0.1,0.2,0.3,0.4,0.5,0.5c2.4,1.9,5.5,2.9,8.5,2.9c3.1,0,6.1-1,8.5-2.9c0.2-0.1,0.3-0.3,0.5-0.5V31h5.7V1.7h-5.7
  C23.7,6.7,19.7,10.8,14.7,10.8z"></path>
      <path  d="M38.5,0C38.5,0,38.4,0,38.5,0c-2,0-3.5,1.5-3.6,3.5c0,1.9,1.5,3.4,3.4,3.5c1.9,0,3.5-1.5,3.6-3.4
  C41.9,1.6,40.4,0,38.5,0z"></path>
      <rect x="35.8" y="10.7"  width="5.4" height="20.3"></rect>
      <path  d="M67.4,10.2c-6,0-9.9,4.9-9.9,10.6c0,6.4,4.6,10.5,10.6,10.5c3.1,0,6.4-1.3,8.3-3.6l-3.1-3.1
  c-1.3,1.4-3.1,2.3-5.1,2.3c-2.8,0.1-5.2-2-5.5-4.8h14c0.1-0.5,0.1-1,0.1-1.5C77,15,73,10.2,67.4,10.2z M63,18.2
  c0.4-2.1,2.2-3.6,4.4-3.6c2,0,3.8,1.5,4,3.6H63z"></path>
      <rect x="47.5" y="1.3"  width="5.4" height="29.7"></rect>
    </g>
  </svg>
  </div>
`;
class Rt extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(it.content.cloneNode(!0)), this.svg = t.querySelector("svg");
  }
  static get observedAttributes() {
    return ["width", "height", "color"];
  }
  attributeChangedCallback(t, s, e) {
    t === "width" && this.svg.setAttribute("width", e), t === "height" && this.svg.setAttribute("height", e), t === "color" && this.svg.setAttribute("fill", e);
  }
}
const L = "miles-logo";
customElements.get(L) || customElements.define(L, Rt);
const H = (o) => [null, "false"].includes(o) === !1, ot = document.createElement("template");
ot.innerHTML = `
        <style>
          ${l}

          :host {
            display: inline-block;
            color: var(--miles_primary_dark);
            background-color: inherit;
          }
          a {
            display: inline-block;
            color: var(--color);
            padding: 0.5rem 1rem;
            border-radius: 3rem;
            border: 2px solid var(--color);
            text-decoration: none;
            font-weight: bold;
            transition: all 0.5s ease;
            white-space: nowrap;
          }
          a:hover, a.selected {
            color: var(--miles_primary_light);
            background-color: var(--color);
          }
        </style>
        <a id="buttonTarget"">
          <slot></slot>
        </a>
      `;
class Bt extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.append(ot.content.cloneNode(!0)), this.buttontarget = t.querySelector("#buttonTarget");
  }
  static get observedAttributes() {
    return ["href", "color", "selected"];
  }
  attributeChangedCallback(t, s, e) {
    t === "href" && this.buttontarget.setAttribute("href", e), t === "color" && this.style.setProperty("--color", e), t === "selected" && (this.buttontarget.setAttribute(
      "aria-selected",
      H(e)
    ), this.buttontarget.classList.toggle(
      "selected",
      H(e)
    ));
  }
  connectedCallback() {
  }
}
const S = "miles-button-anchor";
customElements.get(S) || customElements.define(S, Bt);
const Vt = "", lt = document.createElement("template");
lt.innerHTML = `
        <style>
          	${Vt}

           ${l}
        </style>
       
        <div class="profile-card">
          <a href="">  
            <figure>
              <img class="profile-card__image" id="profileimage" /> 
            </figure>
          </a>
          <div class="profile-card__info">
            <h3 id="name"></h3>
            <div class="description jobtitle">
              <p id="jobtitle"></p>
            </div>
            <div class="description location">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6 6.61789V1.62965H11.2V4.07671L8 0.688477L0 9.15907H2.4V16.6885H6.4V11.0414H9.6V16.6885H13.6V9.15907H16L13.6 6.61789ZM6.4 7.27671C6.4 6.24142 7.12 5.39436 8 5.39436C8.88 5.39436 9.6 6.24142 9.6 7.27671H6.4Z" fill="#EB4645"/>
              </svg>
              <p id="location"></p>
            </div>
          </div>
        </div>  
      `;
class It extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }).append(lt.content.cloneNode(!0)), this.officeLocationEl = this.shadowRoot.querySelector("#location"), this.jobTitleEl = this.shadowRoot.querySelector("#jobtitle"), this.consultantNameEl = this.shadowRoot.querySelector("#name"), this.profileImageEl = this.shadowRoot.querySelector("#profileimage");
  }
  static get observedAttributes() {
    return ["image", "name", "jobtitle", "location"];
  }
  attributeChangedCallback(t, s, e) {
    if (t === "image")
      if (e === "" || e === null) {
        const i = "https://www.miles.no/newsite/wp-content/uploads/2019/06/miles_smile.png";
        this.profileImageEl.setAttribute("src", i), this.profileImageEl.setAttribute("alt", "Miles Profile Card Image");
      } else
        this.profileImageEl.setAttribute("src", e), this.profileImageEl.setAttribute("alt", "Miles Profile Card Image");
    t === "location" && (this.officeLocationEl.textContent = e), t === "jobtitle" && (this.jobTitleEl.textContent = e), t === "name" && (this.shadowRoot.querySelector("a").setAttribute("href", e.split(" ").join("-").toLowerCase()), this.consultantNameEl.textContent = e);
  }
  connectedCallback() {
  }
  disconnectedCallback() {
  }
}
const A = "miles-profile-card";
customElements.get(A) || customElements.define(A, It);
const Ft = "";
class jt extends HTMLElement {
  constructor() {
    super();
    a(this, "removeColor", () => {
      this.mic.removeAttribute("color");
    });
    a(this, "addColor", () => {
      this.mic.setAttribute("color", "#ff303b");
    });
    a(this, "goTo", () => {
      window.location.href = escape(this.link);
    });
    const s = this.attachShadow({ mode: "open" });
    this.link = null, s.innerHTML = `
        <style>
      	${Ft}

        ${l}
        </style>
        <div class="info">
          <span class="info__icon">
            <slot name="icon"></slot>
          </span>
          <span class="info__description">
            <slot></slot>
          </span>
        </div>
      `;
  }
  static get observedAttributes() {
    return ["link"];
  }
  attributeChangedCallback(s, e, i) {
    s === "link" && (this.link = i, this.shadowRoot.querySelector(".info").classList.add("info--link"), this.mic = this.shadowRoot.querySelector('slot[name="icon"]').assignedNodes()[0]);
  }
  connectedCallback() {
    this.link && (this.addEventListener("click", this.goTo), this.addEventListener("mouseenter", this.addColor), this.addEventListener("mouseleave", this.removeColor));
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.goTo), this.removeEventListener("mouseenter", this.addColor), this.removeEventListener("mouseleave", this.removeColor);
  }
}
const T = "miles-info";
customElements.get(T) || customElements.define(T, jt);
const Dt = "", at = document.createElement("template");
at.innerHTML = `
      <style>
      	${Dt}

        ${l}
        </style>
        <div class="podcast-teaser">
        <div class="bg">
          <div class="inner">
            <div class="left">
              <a href="/newsite/milespodden">
                <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="46" cy="46" r="46" fill="#EB4645"/>
                <path d="M32 27V65L70 46L32 27Z" fill="#FCF8F3"/>
              </svg>
              </a>
              <div class="text">
                <h3 id="title">UX - med brukeren i sentrum</h3>
                <p id="date">22. Mars - MilesPodden</p>
              </div>
            </div>
            <a class="more" href="/newsite/milespodden">Hør alle episodene</a>
          </div>
        </div>
          <miles-info link="/newsite/milespodden">
          <miles-pod slot="icon"></miles-pod>
             <div>Interessert i faglig påfyll?</div>
            <div>Sjekk ut podcasten vår! </div>
          </miles-info>
        </div>
        `;
class Ot extends HTMLElement {
  constructor() {
    super();
    a(this, "timeFormat", (s) => new Intl.DateTimeFormat("no", {
      month: "short",
      day: "numeric"
    }).format(s));
    this.attachShadow({ mode: "open" }).appendChild(at.content.cloneNode(!0)), this.titlEl = this.shadowRoot.querySelector("#title"), this.dateEl = this.shadowRoot.querySelector("#date");
  }
  static get observedAttributes() {
    return ["episode_title", "published_date", "link"];
  }
  attributeChangedCallback(s, e, i) {
    s === "episode_title" && (this.titlEl.textContent = i), s === "published_date" && (this.dateEl.textContent = `${this.timeFormat(
      new Date(i)
    )} - MilesPodden`);
  }
}
const q = "miles-podcast-teaser";
customElements.get(q) || customElements.define(q, Ot);
const Qt = "", rt = document.createElement("template");
rt.innerHTML = `
  <style>
	${Qt}

  ${l}
  </style>
  <div id="arrow-nav">
    <svg width="24" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.125 22.9234C12.5313 23.5171 11.5687 23.5171 10.975 22.9234L0 11.9484L10.975 0.973437C11.5687 0.379731 12.5313 0.379732 13.125 0.973438C13.7187 1.56714 13.7187 2.52973 13.125 3.12344L4.3 11.9484L13.125 20.7734C13.7187 21.3671 13.7187 22.3297 13.125 22.9234Z" fill="#3F1221"/>
    </svg>
  </div>
  `;
class zt extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(rt.content.cloneNode(!0)), this.nav = t.querySelector("#arrow-nav");
  }
  static get observedAttributes() {
    return ["width", "height", "color"];
  }
  attributeChangedCallback(t, s, e) {
    t === "width" && this.nav.setAttribute("width", e), t === "height" && this.nav.setAttribute("height", e), t === "color" && this.nav.setAttribute("color", e);
  }
}
const P = "miles-arrow-nav";
customElements.get(P) || customElements.define(P, zt);
const Ut = "", nt = document.createElement("template");
nt.innerHTML = `
  <style>
	${Ut}

  ${l}
  </style>
  <div id="slide-wrapper">
    <h2>Noen av våre kunder</h2>
    <section>
      <div id="leftnav">
        <div id="nav-overlay-left"></div>
        <miles-arrow-nav color="#3F1221"></miles-arrow-nav>
      </div>
      <div class="slides"></div>
      <div id="rightnav">
        <div id="nav-overlay-right"></div>
        <miles-arrow-nav color="#3F1221"></miles-arrow-nav>
      </div>
      <slot></slot>
      <nav class="controls"> </nav>
    </section>
  </div>
    `;
class Kt extends HTMLElement {
  constructor() {
    super();
    a(this, "goRight", () => {
      this.startAutoPlay(!1), Math.abs(this.index) !== 0 && (this.index++, this.setActiveDot(this.index), this.slides.style.setProperty("--slides-offset", this.index));
    });
    a(this, "goLeft", () => {
      this.startAutoPlay(!1), Math.abs(this.index) !== this.numberOfSlides - 1 && (this.index--, this.setActiveDot(this.index), this.slides.style.setProperty("--slides-offset", this.index));
    });
    a(this, "goToSlide", (s) => {
      let e = parseInt(s.target.dataset.slide) * -1;
      this.numberOfSlides - 1 === parseInt(s.target.dataset.slide) && (e = 0), this.startAutoPlay(!1), this.slides.style.setProperty("--slides-offset", e), this.setActiveDot(e);
    });
    a(this, "startAutoPlay", (s) => {
      s ? this.autoPlay = setInterval(() => {
        Math.abs(this.index) === this.numberOfSlides - 2 ? this.index = 0 : this.index--, this.setActiveDot(this.index), this.slides.style.setProperty("--slides-offset", this.index);
      }, 5e3) : clearInterval(this.autoPlay);
    });
    a(this, "setActiveDot", (s) => {
      const e = this.controls.querySelectorAll(".nav-dot");
      e.forEach((i) => {
        i.classList.remove("active");
      }), e.forEach((i) => {
        parseInt(i.getAttribute("data-slide")) === Math.abs(s) && i.classList.add("active");
      });
    });
    const s = this.attachShadow({ mode: "open" });
    s.appendChild(nt.content.cloneNode(!0)), this.slides = s.querySelector(".slides"), this.controls = s.querySelector(".controls"), this.wrapper = s.querySelector("#slide-wrapper"), this.numberOfSlides = 0, this.autoPlay = 0, this.index = 0, this.logos = ["equinor", "fjordkraft", "tv2", "cutters", "scaleaq"], this.rightNav = s.querySelector("#rightnav"), this.leftNav = s.querySelector("#leftnav");
  }
  connectedCallback() {
    let s = {
      root: null,
      rootMargin: "0px",
      threshold: 1
    };
    this.observer = new IntersectionObserver((i) => {
      i.forEach((r) => {
        r.isIntersecting ? this.startAutoPlay(!0) : this.startAutoPlay(!1);
      });
    }, s), this.observer.observe(this.wrapper), this.controls.addEventListener("click", this.goToSlide), this.rightNav.addEventListener("click", this.goLeft), this.leftNav.addEventListener("click", this.goRight);
    const e = this.shadowRoot.querySelector("slot");
    if (e) {
      let i = e.assignedElements().length === 1 ? e.assignedElements()[0].children : e.assignedElements();
      if (typeof i == "object")
        try {
          const r = Array.from(i);
          this.numberOfSlides = i.length, r.forEach((n, u) => {
            const c = document.createElement("figure"), h = document.createElement("div");
            if (h.setAttribute("class", "overlay"), n.classList.forEach((d) => {
              this.logos.includes(d) && h.classList.add(d);
            }), c.setAttribute("data-slide-image", u), c.appendChild(h), n.querySelector("img")) {
              const d = n.querySelector("img");
              d.setAttribute("draggable", !1), c.appendChild(d), this.slides.appendChild(c);
              const m = document.createElement("span");
              m.setAttribute("class", "nav-dot"), m.setAttribute("data-slide", u), this.controls.appendChild(m);
            }
          });
        } catch {
          console.log(i);
        }
    }
    this.setActiveDot(this.index);
  }
  disconnectedCallback() {
    this.controls.removeEventListener("click", this.goToSlide), this.observer.unobserve(this.wrapper), this.rightNav.removeEventListener("click", this.goLeft), this.leftNav.removeEventListener("click", this.goRight);
  }
  static get observedAttributes() {
    return ["inview", "autoplay"];
  }
  attributeChangedCallback(s, e, i) {
  }
}
const $ = "miles-image-slider";
customElements.get($) || customElements.define($, Kt);
const Xt = "", dt = document.createElement("template");
dt.innerHTML = `
  <style>
  ${l}
${Xt}
  </style>
  <div id="fagblogg-teaser">
    <div class="bg">
      <div id="header">
        <h2>Miles fagblogg</h2>
        <miles-info link="/newsite/milespodden">
        <miles-pod id="mic" slot="icon"></miles-pod>
          <div>Interessert i faglig påfyll?</div>
          <div>Sjekk ut podcasten vår! </div>
        </miles-info>
      </div>
      <div class="inner">
        <slot></slot>
      </div>
    </div>

  </div>
`;
class Gt extends HTMLElement {
  constructor() {
    super();
    a(this, "goToPost", (s) => {
      window.location.href = escape(s.target.dataset.post);
    });
    this.attachShadow({ mode: "open" }), this.shadowRoot.append(dt.content.cloneNode(!0)), this.mic = this.shadowRoot.querySelector("#mic");
  }
  connectedCallback() {
    const s = this.shadowRoot.querySelector("slot").assignedElements()[0];
    if (s) {
      const e = s.querySelectorAll("img"), i = Array.from(s.querySelectorAll("a"));
      Array.from(e).forEach((r, n) => {
        r.setAttribute("style", "height: auto; cursor: pointer;"), r.setAttribute("data-post", i[n].href), r.addEventListener("click", this.goToPost);
      });
    }
  }
  disconnectedCallback() {
  }
}
const N = "miles-fagblogg-teaser";
customElements.get(N) || customElements.define(N, Gt);
const Jt = "", ct = document.createElement("template");
ct.innerHTML = `
  <style>
	${Jt}

  ${l}
  </style>
  <div id="blog-card">
    <a href="#">
      <slot name="image"></slot>
    </a>
    <div class="text">
    <a href="#">
      <slot name="title"></slot>
    </a>
    <slot name="meta"></slot>
    
    <div>Skrevet av <span id="author"></span></div>
    <div><span id="posted"></span></div>
    <span id="updated"></span>
    </div>
  </div>
`;
class Wt extends HTMLElement {
  constructor() {
    super();
    a(this, "timeFormat", (s) => new Intl.DateTimeFormat("no", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(s));
    this.attachShadow({ mode: "open" }), this.shadowRoot.append(ct.content.cloneNode(!0)), this.posted = this.shadowRoot.querySelector("#posted"), this.updated = this.shadowRoot.querySelector("#updated"), this.author = this.shadowRoot.querySelector("#author");
  }
  static get observedAttributes() {
    return ["url", "author", "posted", "updated"];
  }
  attributeChangedCallback(s, e, i) {
    s === "url" && this.shadowRoot.querySelectorAll("a").forEach((r) => {
      r.setAttribute("href", i);
    }), s === "author" && (this.author.textContent = i);
  }
  connectedCallback() {
    const s = this.shadowRoot.querySelector('slot[name="image"]').assignedElements();
    s[0]?.children && Array.from(s[0]?.children).forEach((i) => {
      i.style.objectFit = "cover", i.style.aspectRatio = "2/3", i.style.width = "100%";
    });
    const e = this.shadowRoot.querySelector('slot[name="meta"]').assignedElements();
    e[0]?.children && (Array.from(e[0]?.children).forEach((i) => {
      const r = Array.from(i.children[0].children);
      this.posted.textContent = `${this.timeFormat(
        new Date(r[0].dateTime)
      )}`, this.updated.textContent = `${this.timeFormat(
        new Date(r[1].dateTime)
      )}`;
    }), e[0].remove());
  }
  disconnectedCallback() {
  }
}
const Z = "miles-blog-card";
customElements.get(Z) || customElements.define(Z, Wt);
const Yt = "", ht = document.createElement("template");
ht.innerHTML = `
  <style>
	${Yt}

  ${l}
  </style>
  <div id="overlap-block">
    <div class="parent">
      <div class="div1"> </div>
      <div class="div2"> </div>
      <div class="inner">
        <div id="content_grid">
          <div id="feature-block">
          <slot></slot>
          </div>
          <div id="list"></div>
        </div>
      </div>
      <div class="div3"> </div>
      <div class="div4"> </div>
    </div>
   <!-- <miles-bulb color="var(--miles_secondary_two)" width="3rem"></miles-bulb> -->
  </div>
`;
class te extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.append(ht.content.cloneNode(!0)), this.list = this.shadowRoot.querySelector("#list");
  }
  connectedCallback() {
    const t = [
      "Systemutvikling",
      "Prosjektledelse",
      "Testledelse",
      "Smidig Coaching",
      "Design",
      "Arkitektur",
      "Rådgivning",
      "Team as a service"
    ], s = document.createElement("ul");
    t.forEach((e) => {
      const i = document.createElement("li");
      i.innerHTML = `<miles-curve color="currentColor" width="1em"></miles-curve><span>${e}</span>`, s.append(i);
    }), this.list.append(s);
  }
  disconnectedCallback() {
  }
}
const _ = "miles-overlap-block";
customElements.get(_) || customElements.define(_, te);
const ee = "", mt = document.createElement("template");
mt.innerHTML = `
	<style>
		${ee}
		${l}
	</style>
	<div id="banner" class="office-banner">
		<div class="office-banner__content">
		    <div class="office-banner__trigger js-banner-trigger">
		        <h2 class="office-banner__title">Oslo</h2>
		        <miles-arrow class="office-banner__trigger-arrow"></miles-arrow>
		    </div>
		    <div class="anim">
			    <div class="office-banner__details">
			        <div class="office-banner__office">
			            <slot name="office"></slot>
			        </div>
			        <div class="office-banner__people">
			            <slot></slot>
			        </div>
			    </div>
		    </div>
        </div>
		<div class="office-banner__background" id="bannerImage"></div>
	</div>
`;
class se extends HTMLElement {
  constructor() {
    super();
    a(this, "toggleMenu", () => {
      this.banner.classList.toggle("office-banner--open");
    });
    this.attachShadow({ mode: "open" }), this.shadowRoot.append(mt.content.cloneNode(!0)), this.banner = this.shadowRoot.querySelector("#banner"), this.triggerEl = this.shadowRoot.querySelector(".js-banner-trigger"), this.backgroundEl = this.shadowRoot.querySelector(".office-banner__background"), this.titleEl = this.shadowRoot.querySelector(".office-banner__title"), this.header = null;
  }
  static get observedAttributes() {
    return ["background", "city"];
  }
  attributeChangedCallback(s, e, i) {
    s === "background" && (this.backgroundEl.style.backgroundImage = `url(${i})`), s === "city" && (this.titleEl.textContent = i);
  }
  connectedCallback() {
    this.triggerEl.addEventListener("click", this.toggleMenu);
  }
  disconnectedCallback() {
    this.triggerBg.removeEventListener("click", this.toggleMenu);
  }
}
const R = "miles-office-banner";
customElements.get(R) || customElements.define(R, se);
const ie = "", ut = document.createElement("template");
ut.innerHTML = `
  <style>
	${ie}
  ${l}
    </style>
    <div id="arrow">
      <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.69141 28.7704L21.1914 11.2266L38.6914 28.7704L36.1977 31.2266L21.1914 16.1827L6.18516 31.2266L3.69141 28.7704Z" fill="#FCF8F3"/>
      </svg>
    </div>
   `;
class oe extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.append(ut.content.cloneNode(!0));
  }
}
const B = "miles-arrow";
customElements.get(B) || customElements.define(B, oe);
const le = "", pt = document.createElement("template");
pt.innerHTML = `
  <style>
	${le}
    ${l}
    </style>
  <div id="card-wrapper">
      <div id="card">
      <figure>
        <slot name="image"></slot>
      </figure>
      <div id="group">
        <h3 id="name"></h3>
        <span id="title"></span>
        <span id="email_el">
          <miles-email class="icon"></miles-email>
          <span>Epost:</span>
          <a id="email"></a>
        </span>
        <span id="phone_el">
             <miles-phone class="icon"></miles-phone>
              <span>Telefon:</span>
              <a id="phone"></a>
          </span>
      </div>
    </div>
      <div id="extras">
        <slot></slot>
      </div>
    </div>
    `;
class gt extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.append(pt.content.cloneNode(!0)), this.emailEl = this.shadowRoot.querySelector("#email_el"), this.nameEl = this.shadowRoot.querySelector("#name"), this.phoneEl = this.shadowRoot.querySelector("#phone_el"), this.phoneAnchor = this.shadowRoot.querySelector("#phone"), this.mailAnchor = this.shadowRoot.querySelector("#email"), this.titleEl = this.shadowRoot.querySelector("#title"), this.firgureEl = this.shadowRoot.querySelector("figure"), this.card = this.shadowRoot.querySelector("#card");
  }
  static get observedAttributes() {
    return ["email", "name", "phone", "jobtitle", "image", "variant"];
  }
  attributeChangedCallback(t, s, e) {
    if (t === "email" && (this.mailAnchor.setAttribute("href", `mailto:${e}`), this.mailAnchor.textContent = e), t === "name" && (this.nameEl.textContent = e), t === "phone" && (this.phoneAnchor.setAttribute("href", `tel:${e}`), this.shadowRoot.querySelector("#phone").style.display = "block", this.phoneAnchor.textContent = e), t === "jobtitle" && (this.titleEl.textContent = e), t === "image") {
      const i = document.createElement("img");
      i.setAttribute("src", e), this.firgureEl.append(i);
    }
    t === "variant" && (e === "wide" && this.card.classList.add("wide"), e === "author" && this.card.classList.add("author"));
  }
}
const V = "miles-business-card";
customElements.get(V) || customElements.define(V, gt);
class ae extends gt {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("variant", "author");
  }
  attributeChangedCallback(t, s, e) {
    t !== "phone" && t !== "email" && super.attributeChangedCallback(t, s, e);
  }
}
const I = "miles-author-card";
customElements.get(I) || customElements.define(I, ae);
const re = "", vt = document.createElement("template");
vt.innerHTML = `
  <style>
	${re}

  ${l}
    </style>
    <div id="wrapper">
    <div id="heading">
      <h2><slot name="heading"></slot></h2>
    </div>
      <p><slot></slot></p>
    </div>
    `;
class ne extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.append(vt.content.cloneNode(!0)), this.headingEl = this.shadowRoot.querySelector("h2");
  }
  static get observedAttributes() {
    return ["heading"];
  }
  attributeChangedCallback(t, s, e) {
    t === "heading" && (this.headingEl.textContent = e);
  }
  connectedCallback() {
  }
  disconnectedCallback() {
  }
}
const F = "miles-info-block";
customElements.get(F) || customElements.define(F, ne);
const de = "", Ct = document.createElement("template");
Ct.innerHTML = `
  <style>
	${de}

  ${l}
    </style>
    <div id="wrapper">
      <h2></h2>
      <div id="address"></div>
      <a id="email"></a>
      <a id="phone"></a>
      <div id="orgnrlabel">Organisasjonsnummer:</div>
      <div aria-describedby="ordnrlabel" id="orgnr"></div>
    </div>
    `;
class ce extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.append(Ct.content.cloneNode(!0)), this.nameEl = this.shadowRoot.querySelector("h2"), this.adresseEl = this.shadowRoot.querySelector("#address"), this.emailEl = this.shadowRoot.querySelector("#email"), this.phoneEl = this.shadowRoot.querySelector("#phone"), this.orgnrEl = this.shadowRoot.querySelector("#orgnr");
  }
  static get observedAttributes() {
    return ["map", "name", "address", "email", "phone", "orgnr"];
  }
  attributeChangedCallback(t, s, e) {
    t === "name" && (this.nameEl.textContent = e), t === "map" && (this.adresseEl.dataset.mapurl = e), t === "address" && (this.adresseEl.textContent = e), t === "email" && (this.emailEl.setAttribute("href", `mailto:${e}`), this.emailEl.textContent = e), t === "phone" && (this.phoneEl.setAttribute("href", `tel:${e}`), this.phoneEl.textContent = e), t === "orgnr" && (this.orgnrEl.textContent = e);
  }
  connectedCallback() {
    this.adresseEl.dataset.mapurl && (this.adresseEl.innerHTML = `<a href="${this.adresseEl.dataset.mapurl}">${this.adresseEl.textContent}</a>`);
  }
  disconnectedCallback() {
  }
}
const j = "miles-contact-card";
customElements.get(j) || customElements.define(j, ce);
const he = "", ft = document.createElement("template");
ft.innerHTML = `
        <style>
          	${he}

           ${l}
        </style>
        <div id="menu">
  				<div id="nav-icon" class="menu-toggle-icon">
    					<span></span>
    					<span></span>
    					<span></span>
    					<span></span>
  			  </div>
          <div id="menu-content"></div>
    			<slot></slot>
        </div>  
      `;
class me extends HTMLElement {
  constructor() {
    super();
    a(this, "handleKeys", (s) => {
      s.keyCode === 13 && this.openmenu(s, !0);
    });
    a(this, "openmenu", (s, e) => {
      s.preventDefault();
      const i = this.burgerEl.getAttribute("aria-expanded") === "true" || !1;
      this.burgerEl.setAttribute("aria-expanded", !i), this.burgerEl.classList.toggle("open-menu"), this.menuContent.classList.toggle("open"), !i && e && this.menuContent.querySelector("a").focus();
    });
    a(this, "closemenu", (s) => {
      s.preventDefault(), (this.burgerEl.getAttribute("aria-expanded") === "true" || !1) && (this.burgerEl.setAttribute("aria-expanded", !1), this.burgerEl.classList.remove("open-menu"), this.menuContent.classList.remove("open"), this.burgerEl.focus());
    });
    const s = this.attachShadow({ mode: "open" });
    s.append(ft.content.cloneNode(!0)), this.burgerEl = s.querySelector("#nav-icon"), this.menuContent = s.querySelector("#menu-content"), this.burgerEl.setAttribute("tabindex", "0"), this.burgerEl.setAttribute("role", "button"), this.burgerEl.setAttribute("aria-haspopup", "true"), this.burgerEl.setAttribute("aria-expanded", "false"), this.burgerEl.setAttribute("aria-label", "Meny");
  }
  /*
    static get observedAttributes() {
      return [];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
  
    }
    */
  connectedCallback() {
    this.shadowRoot.querySelector("slot").assignedElements().forEach((e) => {
      e.tagName === "NAV" && (e.querySelector('a[href="#"]') && e.querySelector('a[href="#"]').remove(), this.menuContent.append(e));
    }), this.burgerEl.addEventListener("keydown", this.handleKeys), this.burgerEl.addEventListener("click", this.openmenu);
    function s(e) {
      e.key === "Escape" && this.closemenu(e);
    }
    window.addEventListener("keydown", s);
  }
  disconnectedCallback() {
    this.burgerEl.removeEventListener("click", this.openmenu);
  }
}
const D = "miles-site-menu";
customElements.get(D) || customElements.define(D, me);
const ue = "", bt = document.createElement("template");
bt.innerHTML = `
      <style>
      	${ue}

        ${l}
        </style>
        <div class="podcast-card">
        <div class="image">
          <svg width="140" height="52" viewBox="0 0 140 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80.406 0.914062H76.4551V22.4948H80.406V0.914062Z" fill="black"/>
          <path d="M101.833 17.9934C102.836 18.9052 104.386 19.4522 105.876 19.4522C106.94 19.4522 107.76 18.9351 107.76 18.2057C107.76 15.9867 100.618 16.7769 100.618 12.0349C100.618 9.20803 103.353 7.44531 106.271 7.44531C108.187 7.44531 110.283 8.17471 111.257 8.93495L109.402 11.7926C108.642 11.2456 107.639 10.7893 106.575 10.7893C105.481 10.7893 104.569 11.2148 104.569 11.975C104.569 13.8901 111.713 13.1299 111.713 18.2366C111.713 21.0634 108.947 22.7962 105.847 22.7962C103.81 22.7962 101.653 22.0976 99.9199 20.8203L101.833 17.9934Z" fill="black"/>
          <path d="M52.5941 7.87145C48.8933 7.87145 46.0629 4.84725 46.0629 1.21875H41.9551V22.4956H46.0584V9.23159C46.1184 9.38311 46.2945 9.53991 46.387 9.61214C48.0493 10.9265 50.1689 11.7043 52.5941 11.7043C55.0193 11.7043 57.1388 10.9265 58.8011 9.61214C58.8936 9.53903 59.0698 9.38311 59.1297 9.23159V22.4956H63.233V1.21875H59.1253C59.1253 4.84725 56.2948 7.87145 52.5941 7.87145Z" fill="black"/>
          <path d="M97.5209 20.1586C96.092 21.8606 93.7523 22.8031 91.4724 22.8031C87.0651 22.8031 83.752 19.764 83.752 15.1435C83.752 11.0402 86.548 7.45312 90.9254 7.45312C94.9988 7.45312 97.8856 10.8878 97.8856 14.9911C97.8856 15.3867 97.8556 15.7813 97.794 16.1161H87.5813C87.7945 18.1827 89.4657 19.6116 91.5632 19.6116C93.2352 19.6116 94.5724 18.669 95.2719 17.9096L97.5209 20.1586ZM93.843 13.2284C93.7214 11.922 92.5366 10.6447 90.9254 10.6447C89.2842 10.6447 87.9469 11.8912 87.7646 13.2284H93.843Z" fill="black"/>
          <path d="M69.9197 0C71.3486 0 72.5035 1.0941 72.5035 2.52295C72.5035 3.95092 71.3486 5.04502 69.9197 5.04502C68.4908 5.04502 67.3359 3.95092 67.3359 2.52295C67.3368 1.0941 68.4917 0 69.9197 0ZM71.8956 22.4925H67.9447V7.75032H71.8956V22.4925Z" fill="black"/>
          <path d="M123.609 48.6821C122.18 50.384 119.84 51.3266 117.56 51.3266C113.153 51.3266 109.84 48.2874 109.84 43.667C109.84 39.5637 112.636 35.9766 117.013 35.9766C121.087 35.9766 123.973 39.4113 123.973 43.5146C123.973 43.9101 123.944 44.3048 123.882 44.6395H113.669C113.882 46.7062 115.554 48.135 117.651 48.135C119.323 48.135 120.66 47.1924 121.36 46.4331L123.609 48.6821ZM119.931 41.7519C119.809 40.4455 118.624 39.1681 117.013 39.1681C115.372 39.1681 114.035 40.4146 113.852 41.7519H119.931Z" fill="black"/>
          <path d="M45.9615 43.1301V50.8822H41.9551V30.2969H49.6491C53.7137 30.2969 56.4138 32.9969 56.4138 36.7135C56.4138 40.4583 53.7137 43.1301 49.6491 43.1301H45.9615ZM49.1549 39.6751C51.1581 39.6751 52.3774 38.5141 52.3774 36.7426C52.3774 34.9138 51.1581 33.7809 49.1549 33.7809H45.9906V39.6743H49.1549V39.6751Z" fill="black"/>
          <path d="M72.2662 43.7495C72.2662 48.1339 69.0438 51.3272 64.7757 51.3272C60.5076 51.3272 57.2852 48.1339 57.2852 43.7495C57.2852 39.3361 60.5076 36.1719 64.7757 36.1719C69.0438 36.1719 72.2662 39.3361 72.2662 43.7495ZM68.4051 43.7495C68.4051 41.0495 66.6635 39.685 64.7757 39.685C62.8879 39.685 61.1463 41.0495 61.1463 43.7495C61.1463 46.4205 62.8879 47.8141 64.7757 47.8141C66.6635 47.8141 68.4051 46.4496 68.4051 43.7495Z" fill="black"/>
          <path d="M88.9334 48.3039C88.9334 49.2624 88.9916 50.3071 89.0497 50.8877H85.3622C85.304 50.597 85.2168 49.9002 85.2168 49.2324C84.5781 50.3644 83.1264 51.2356 81.2103 51.2356C77.1457 51.2356 74.2422 48.0423 74.2422 43.7161C74.2422 39.5353 77.0585 36.2547 81.0941 36.2547C83.5615 36.2547 84.7235 37.2713 85.1296 38.0254V29.8672H88.9326V48.3039H88.9334ZM81.6746 47.7816C83.6487 47.7816 85.1877 46.2717 85.1877 43.6879C85.1877 41.1333 83.6487 39.7106 81.6746 39.7106C79.7004 39.7106 78.1324 41.1623 78.1324 43.717C78.1332 46.2717 79.6423 47.7816 81.6746 47.7816Z" fill="black"/>
          <path d="M106.726 48.3039C106.726 49.2624 106.785 50.3071 106.843 50.8877H103.155C103.097 50.597 103.01 49.9002 103.01 49.2324C102.371 50.3644 100.919 51.2356 99.0033 51.2356C94.9387 51.2356 92.0352 48.0423 92.0352 43.7161C92.0352 39.5353 94.8515 36.2547 98.887 36.2547C101.355 36.2547 102.516 37.2713 102.923 38.0254V29.8672H106.726V48.3039H106.726ZM99.4676 47.7816C101.442 47.7816 102.981 46.2717 102.981 43.6879C102.981 41.1333 101.442 39.7106 99.4676 39.7106C97.4934 39.7106 95.9253 41.1623 95.9253 43.717C95.9253 46.2717 97.4353 47.7816 99.4676 47.7816Z" fill="black"/>
          <path d="M130.824 50.8886H126.963V36.6045H130.709V38.3751C131.58 36.8943 133.292 36.2266 134.831 36.2266C138.374 36.2266 139.999 38.7522 139.999 41.8882V50.8886H136.138V42.556C136.138 40.9589 135.354 39.7106 133.496 39.7106C131.812 39.7106 130.825 41.017 130.825 42.6722V50.8886H130.824Z" fill="black"/>
          <path d="M17.4573 39.8594H14.0508V47.8793H17.4573V39.8594Z" fill="#A83224"/>
          <path d="M24.698 47.4922H6.8125V50.8987H24.698V47.4922Z" fill="#A83224"/>
          <path d="M20.616 25.9249V22.5184H24.6445V19.6201H20.616V16.2136H24.6445V13.3198H20.616V9.9133H24.6445V9.78645C24.6445 5.05856 20.8116 1.22656 16.0845 1.22656H15.4291C10.7012 1.22656 6.86914 5.05944 6.86914 9.78645V26.2394C6.86914 30.9673 10.7021 34.7993 15.4291 34.7993H16.0845C20.8125 34.7993 24.6445 30.9664 24.6445 26.2394V25.924H20.616V25.9249Z" fill="#A83224"/>
          <path d="M15.7563 41.6771C7.0677 41.6771 0 34.6095 0 25.9219H3.40655C3.40655 32.7314 8.94672 38.2706 15.7554 38.2706C22.5641 38.2706 28.1043 32.7305 28.1043 25.9219H31.5108C31.5117 34.6095 24.444 41.6771 15.7563 41.6771Z" fill="#A83224"/>
          </svg>
        </div>
        <div class="bg">
          <div class="text">
            <h3 id="title" data-episode=""></h3>
            <p id="date"></p>
          </div>
		  <div id="summary">
	 		<p id="description"></p>	
		  	<slot></slot>
		  </div>
		  <div id="player">
        <slot name="player"></slot>
      </div>
        </div>
        </div>
        `;
class pe extends HTMLElement {
  constructor() {
    super();
    a(this, "timeFormat", (s) => new Intl.DateTimeFormat("no", {
      month: "short",
      day: "numeric"
    }).format(s));
    a(this, "createPlayer", (s) => {
      const e = document.createElement("miles-audio-player");
      return e.setAttribute("src", s), e;
    });
    this.attachShadow({ mode: "open" }).appendChild(bt.content.cloneNode(!0)), this.titlEl = this.shadowRoot.querySelector("#title"), this.dateEl = this.shadowRoot.querySelector("#date"), this.summaryEl = this.shadowRoot.querySelector("#summary"), this.descriptionEl = this.shadowRoot.querySelector("#description"), this.playerEl = this.shadowRoot.querySelector("#player");
  }
  static get observedAttributes() {
    return [
      "episode_number",
      "episode_title",
      "published_date",
      "link",
      "description",
      "url"
    ];
  }
  attributeChangedCallback(s, e, i) {
    s === "episode_number" && this.titlEl.setAttribute("data-episode", `#${i}`), s === "episode_title" && (this.titlEl.textContent = i), s === "published_date" && (this.dateEl.textContent = `${this.timeFormat(
      new Date(i)
    )} - MilesPodden`), s === "description" && (this.descriptionEl.textContent = i), s === "url" && this.playerEl.appendChild(this.createPlayer(i));
  }
}
const O = "miles-podcast-card";
customElements.get(O) || customElements.define(O, pe);
const ge = "", Et = document.createElement("template");
Et.innerHTML = `
	<style>
		${ge}
		${l}
	</style>
	<div class="banner">
		<div class="banner__content">
			<h1 id="title"></h1>
			<p id="slogan"></p>
		</div>
		<div class="banner__image"></div>
	</div>
`;
class ve extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(Et.content.cloneNode(!0)), this.banner = t.querySelector(".banner"), this.bannerImage = t.querySelector(".banner__image"), this.titleEl = t.querySelector("#title"), this.sloganEl = t.querySelector("#slogan");
  }
  static get observedAttributes() {
    return ["image", "title", "slogan", "variant", "reverse"];
  }
  attributeChangedCallback(t, s, e) {
    t === "image" && (this.bannerImage.style.backgroundImage = `url(${e})`), t === "title" && (this.titleEl.textContent = e), t === "slogan" && (this.sloganEl.textContent = e), t === "reverse" && e === "true" && this.banner.classList.add("reverse"), t === "variant" && e === "split" && this.banner.classList.add("split");
  }
}
const Q = "miles-banner";
customElements.get(Q) || customElements.define(Q, ve);
const Ce = "", yt = document.createElement("template");
yt.innerHTML = `
  <style>
	${Ce}

  ${l}
    </style>
	<div id="milesplayer">
		<audio id="player" crossorigin controls></audio>
    <div class="start">
          <button id="backward" aria-label="seek" aria-description="seek 15 seconds backwards"><miles-seek direction="backward"></miles-seek></button>
        <div class="progress-indicator">
          <input type="range" max="100" value="0" id="progressbar">
        </div>
      <button id="forward" aria-label="seek" aria-description="seek 15 seconds forward"><miles-seek direction="forward"></miles-seek></button>
    </div>
    <div class="end">
      <div id="progresstime"></div>
		  <button id="play" aria-label="play" aria-description="Play and pause sound playback" data-playing="false"><miles-play></miles-play></button>
    </div>
	</div>
`;
class fe extends HTMLElement {
  constructor() {
    super();
    a(this, "forwardSeek", (s) => {
      this.audioPlayerEl.currentTime = this.audioPlayerEl.currentTime + s;
    });
    a(this, "backwardSeek", (s) => {
      this.audioPlayerEl.currentTime = this.audioPlayerEl.currentTime - s;
    });
    a(this, "timeUpdateHandler", () => {
      this.progresstimeEl.textContent = `${this.getTimeString(
        this.audioPlayerEl.currentTime
      )} / ${this.getTimeString(this.audioPlayerEl.duration)}`, this.progressbarEl.setAttribute("value", this.audioPlayerEl.currentTime), this.updateProgress();
    });
    a(this, "progressChangeHandler", () => {
      this.audioPlayerEl.currentTime = this.progressbarEl.value, this.updateProgress();
    });
    a(this, "loadMetadataHandler", () => {
      this.progressbarEl.max = this.audioPlayerEl.duration, this.progresstimeEl.textContent = `0:00 / ${this.getTimeString(
        this.audioPlayerEl.duration
      )}`, this.updateProgress();
    });
    a(this, "updateProgress", () => {
      console.log("progress");
      let s = this.progressbarEl;
      const e = 0, i = s.max || 100, r = this.audioPlayerEl.currentTime;
      s.style.backgroundSize = (r - e) * 100 / (i - e) + "% 100%";
    });
    a(this, "play", () => {
      this.audioContext.state === "suspended" && this.audioContext.resume(), this.playButtonEl.dataset.playing === "false" ? (this.audioPlayerEl.play(), this.playButtonEl.dataset.playing = "true", this.playButtonEl.innerHTML = "<miles-pause></miles-pause>", this.playButtonEl.setAttribute("aria-label", "pause")) : this.playButtonEl.dataset.playing === "true" && (this.audioPlayerEl.pause(), this.playButtonEl.dataset.playing = "false", this.playButtonEl.innerHTML = "<miles-play></miles-play>", this.playButtonEl.setAttribute("aria-label", "play"));
    });
    this.attachShadow({ mode: "open" }), this.shadowRoot.append(yt.content.cloneNode(!0)), this.audioEl = this.shadowRoot.querySelector("#milesplayer"), this.audioPlayerEl = this.shadowRoot.querySelector("#player"), this.playButtonEl = this.shadowRoot.querySelector("#play"), this.progresstimeEl = this.shadowRoot.querySelector("#progresstime"), this.progressbarEl = this.shadowRoot.querySelector("#progressbar"), this.backwardSeekEl = this.shadowRoot.querySelector("#backward"), this.forwardSeekEl = this.shadowRoot.querySelector("#forward"), this.audioContext;
  }
  static get observedAttributes() {
    return ["src"];
  }
  attributeChangedCallback(s, e, i) {
    s === "src" && (this.audioPlayerEl.src = i);
  }
  connectedCallback() {
    const s = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new s(), this.audioContext.createMediaElementSource(
      this.audioPlayerEl
    ).connect(this.audioContext.destination), this.playButtonEl.addEventListener("click", this.play), this.audioPlayerEl.addEventListener("timeupdate", this.timeUpdateHandler), this.audioPlayerEl.addEventListener(
      "loadedmetadata",
      this.loadMetadataHandler
    ), this.progressbarEl.addEventListener("change", this.progressChangeHandler), this.forwardSeekEl.addEventListener("click", () => this.forwardSeek(15)), this.backwardSeekEl.addEventListener("click", () => this.backwardSeek(15));
  }
  disconnectedCallback() {
    this.playButtonEl.removeEventListener("click", this.play), this.audioPlayerEl.removeEventListener(
      "loadedmetadata",
      this.loadMetadataHandler
    ), this.progressbarEl.removeEventListener(
      "change",
      this.progressChangeHandler
    );
  }
  getTimeString(s) {
    if (isNaN(s))
      return "00:00";
    const e = `${parseInt(`${s % 60}`, 10)}`.padStart(2, "0");
    return `${parseInt(`${s / 60 % 60}`, 10)}:${e}`;
  }
}
const z = "miles-audio-player";
customElements.get(z) || customElements.define(z, fe);

//# sourceMappingURL=miles-wc.es.js.map


/***/ }),

/***/ "./src/miles-office-banner/block.json":
/*!********************************************!*\
  !*** ./src/miles-office-banner/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"miles-blocks/miles-office-banner","version":"0.1.0","title":"Office Banner","category":"widgets","icon":"layout","description":"Banner block for Miles offices.","attributes":{"bannerHeading":{"type":"string"},"bannerImageId":{"type":"number","default":0},"mediaId":{"type":"number","default":0},"mediaUrl":{"type":"string","default":""}},"supports":{"html":false},"textdomain":"miles-office-banner","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"miles-office-banner/index": 0,
/******/ 			"miles-office-banner/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmiles_editor_blocks"] = globalThis["webpackChunkmiles_editor_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["miles-office-banner/style-index"], () => (__webpack_require__("./src/miles-office-banner/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map