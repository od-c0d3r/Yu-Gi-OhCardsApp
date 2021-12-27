/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/popup.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/popup.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/commentBg.jpg */ "./src/images/commentBg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popup {\n  display: none;\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.popup h2 {\n  width: auto;\n  background-color: #d3d3d375;\n  border: 15px solid #fafad2a8;\n  padding: 5px;\n  border-radius: 21px;\n}\n\n.highlight {\n  background-color: #d3d3d375;\n  border: 15px solid #fafad2a8;\n  padding: 5px;\n  border-radius: 21px;\n}\n\n.popup-content {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  overflow: auto;\n  margin: 5% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  border-radius: 10px;\n  width: 700px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#popup-body {\n  width: 421px;\n  padding-top: 10px;\n  display: grid;\n  justify-items: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr auto auto auto auto auto;\n}\n\n#cardComments {\n  width: 100%;\n  text-align: center;\n}\n\n#addComment {\n  width: 100%;\n}\n\n#commentForm {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n#inputComment {\n  padding-top: 0;\n  height: 100px;\n}\n\n.desc > * {\n  padding-bottom: 10px;\n  flex: 50%;\n  align-self: center;\n}\n\n#commentForm > * {\n  padding-bottom: 10px;\n}\n\n#commentsDisplay {\n  width: 100%;\n  text-align: left;\n}\n\n#commentsDisplay > * {\n  padding-bottom: 3px;\n  padding-top: 3px;\n  border-bottom: 1px solid lightgray;\n}\n\n#close {\n  color: black;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n#close:hover,\n#close:focus {\n  color: red;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.desc {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 5px;\n  background-color: #d3d3d375;\n  border: 15px solid #fafad2a8;\n  padding: 5px;\n  border-radius: 21px;\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n#ring {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 150px;\n  height: 150px;\n  background: transparent;\n  border: 3px solid #3c3c3c;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 150px;\n  font-family: sans-serif;\n  font-size: 20px;\n  color: #fff000;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  text-shadow: 0 0 10px #fff000;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n}\n\n#ring::before {\n  content: \"\";\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top: 3px solid #fff000;\n  border-right: 3px solid #fff000;\n  border-radius: 50%;\n  animation: animateC 2s linear infinite;\n}\n\n#ring span {\n  display: block;\n  position: absolute;\n  top: calc(50% - 2px);\n  left: 50%;\n  width: 50%;\n  height: 4px;\n  background: transparent;\n  transform-origin: left;\n  animation: animate 2s linear infinite;\n}\n\n#ring span::before {\n  content: \"\";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff000;\n  top: -6px;\n  right: -8px;\n  box-shadow: 0 0 20px #fff000;\n}\n\n@keyframes animateC {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes animate {\n  0% {\n    transform: rotate(45deg);\n  }\n  100% {\n    transform: rotate(405deg);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/popup.css"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,eAAA;EACA,aAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,uBAAA;EACA,oCAAA;AACF;;AAEA;EACE,WAAA;EACA,2BAAA;EACA,4BAAA;EACA,YAAA;EACA,mBAAA;AACF;;AAEA;EACE,2BAAA;EACA,4BAAA;EACA,YAAA;EACA,mBAAA;AACF;;AAEA;EACE,yDAAA;EACA,2BAAA;EACA,sBAAA;EACA,4BAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,4EAAA;EACA,0BAAA;EACA,wBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,iBAAA;EACA,aAAA;EACA,qBAAA;EACA,0BAAA;EACA,gDAAA;AACF;;AAEA;EACE,WAAA;EACA,kBAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;AACF;;AAEA;EACE,cAAA;EACA,aAAA;AACF;;AAEA;EACE,oBAAA;EACA,SAAA;EACA,kBAAA;AACF;;AAEA;EACE,oBAAA;AACF;;AAEA;EACE,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,mBAAA;EACA,gBAAA;EACA,kCAAA;AACF;;AAEA;EACE,YAAA;EACA,eAAA;EACA,iBAAA;AACF;;AAEA;;EAEE,UAAA;EACA,qBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,kBAAA;EACA,2BAAA;EACA,4BAAA;EACA,YAAA;EACA,mBAAA;AACF;;AAEA;EACE;IACE,WAAA;IACA,UAAA;EACF;EAEA;IACE,MAAA;IACA,UAAA;EAAF;AACF;AAGA;EACE,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,yBAAA;EACA,6BAAA;EACA,uCAAA;AADF;;AAIA;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,6BAAA;EACA,6BAAA;EACA,+BAAA;EACA,kBAAA;EACA,sCAAA;AADF;;AAIA;EACE,cAAA;EACA,kBAAA;EACA,oBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,uBAAA;EACA,sBAAA;EACA,qCAAA;AADF;;AAIA;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,SAAA;EACA,WAAA;EACA,4BAAA;AADF;;AAIA;EACE;IACE,uBAAA;EADF;EAIA;IACE,yBAAA;EAFF;AACF;AAKA;EACE;IACE,wBAAA;EAHF;EAMA;IACE,yBAAA;EAJF;AACF","sourcesContent":[".popup {\n  display: none;\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.popup h2 {\n  width: auto;\n  background-color: #d3d3d375;\n  border: 15px solid #fafad2a8;\n  padding: 5px;\n  border-radius: 21px;\n}\n\n.highlight {\n  background-color: #d3d3d375;\n  border: 15px solid #fafad2a8;\n  padding: 5px;\n  border-radius: 21px;\n}\n\n.popup-content {\n  background-image: url(../images/commentBg.jpg);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  overflow: auto;\n  margin: 5% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  border-radius: 10px;\n  width: 700px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#popup-body {\n  width: 421px;\n  padding-top: 10px;\n  display: grid;\n  justify-items: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr auto auto auto auto auto;\n}\n\n#cardComments {\n  width: 100%;\n  text-align: center;\n}\n\n#addComment {\n  width: 100%;\n}\n\n#commentForm {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n#inputComment {\n  padding-top: 0;\n  height: 100px;\n}\n\n.desc > * {\n  padding-bottom: 10px;\n  flex: 50%;\n  align-self: center;\n}\n\n#commentForm > * {\n  padding-bottom: 10px;\n}\n\n#commentsDisplay {\n  width: 100%;\n  text-align: left;\n}\n\n#commentsDisplay > * {\n  padding-bottom: 3px;\n  padding-top: 3px;\n  border-bottom: 1px solid lightgray;\n}\n\n#close {\n  color: black;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n#close:hover,\n#close:focus {\n  color: red;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.desc {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 5px;\n  background-color: #d3d3d375;\n  border: 15px solid #fafad2a8;\n  padding: 5px;\n  border-radius: 21px;\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n#ring {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 150px;\n  height: 150px;\n  background: transparent;\n  border: 3px solid #3c3c3c;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 150px;\n  font-family: sans-serif;\n  font-size: 20px;\n  color: #fff000;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  text-shadow: 0 0 10px #fff000;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n}\n\n#ring::before {\n  content: '';\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top: 3px solid #fff000;\n  border-right: 3px solid #fff000;\n  border-radius: 50%;\n  animation: animateC 2s linear infinite;\n}\n\n#ring span {\n  display: block;\n  position: absolute;\n  top: calc(50% - 2px);\n  left: 50%;\n  width: 50%;\n  height: 4px;\n  background: transparent;\n  transform-origin: left;\n  animation: animate 2s linear infinite;\n}\n\n#ring span::before {\n  content: '';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff000;\n  top: -6px;\n  right: -8px;\n  box-shadow: 0 0 20px #fff000;\n}\n\n@keyframes animateC {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes animate {\n  0% {\n    transform: rotate(45deg);\n  }\n\n  100% {\n    transform: rotate(405deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/backy.jpg */ "./src/images/backy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/backy2.jpg */ "./src/images/backy2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody,\nheader,\nfooter {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nul {\n  list-style-type: none;\n  display: flex;\n}\n\nnav {\n  margin-right: 5%;\n}\n\n.links {\n  margin: 0.5rem;\n  white-space: nowrap;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 20;\n  background-color: whitesmoke;\n  width: 100vw;\n  top: -2px;\n  padding-left: 2%;\n}\n\nfooter {\n  position: fixed;\n  z-index: 20;\n  background-color: whitesmoke;\n  width: 100vw;\n  top: 92vh;\n  height: 8vh;\n  text-align: center;\n  padding-top: 1.5rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: red;\n}\n\nmain {\n  position: relative;\n  top: 95px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 6rem;\n}\n\nmain ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  font-size: 0.5rem;\n  gap: 1.5rem;\n  margin-left: 10%;\n}\n\nh2 {\n  margin-left: 3%;\n  font-weight: 700;\n}\n\nmain li {\n  display: flex;\n  flex-direction: column;\n  width: 12rem;\n  height: 20rem;\n  background-image: url(\"https://vignette.wikia.nocookie.net/yugioh/images/9/95/SlifertheSkyDragon-GBI-AE-Back.png/revision/latest/scale-to-width-down/328?cb=2010072608370\");\n  border-radius: 0% 0% 0% 0%/0% 0% 0% 0%;\n  color: white;\n  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);\n  transition: all 0.4s ease;\n  align-content: center;\n  margin-bottom: 3rem;\n}\n\nmain li:hover {\n  border-radius: 0% 0% 50% 50%/0% 0% 5% 5%;\n  box-shadow: 10px 10px rgba(0, 0, 0, 0.25);\n}\n\n.image_holder {\n  align-self: center;\n  width: 100%;\n  height: 80%;\n}\n\n.card_image {\n  width: 100%;\n  height: 100%;\n}\n\n.card_details {\n  display: flex;\n  justify-content: space-between;\n}\n\n.likes-section {\n  width: 3rem;\n  font-size: 0.8rem;\n  margin: 0.5rem;\n}\n\n.fa-heart {\n  padding-left: 0.5rem;\n  cursor: pointer;\n}\n\n.open {\n  animation: popup 0.6s linear;\n  color: red;\n  transform: scale(1.5);\n}\n\n.card_comments {\n  text-decoration: none;\n  border: 3px solid yellow;\n  color: transparent;\n  padding: 0.5rem 0.8rem;\n  font-size: 0.8rem;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 0.5s;\n  position: relative;\n  cursor: pointer;\n}\n\n.card_comments::before {\n  content: \"Comments\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: yellow;\n  background: #222222;\n  font-size: 28px;\n  top: 0;\n  left: 100%;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 1s;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(0) rotateY(0);\n  opacity: 0;\n}\n\n.card_comments:hover::before {\n  transform: scale(1) rotateY(360deg);\n  left: 0;\n  opacity: 1;\n}\n\n.card_comments::after {\n  content: \"Comments\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: yellow;\n  background: #222222;\n  font-size: 28px;\n  top: 0;\n  left: 0;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 1s;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(1) rotateY(0);\n  opacity: 1;\n}\n\n.card_comments:hover::after {\n  transform: scale(0) rotateY(360deg);\n  left: -100%;\n  opacity: 0;\n}\n\nheader,\nfooter {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  left: -2px;\n  color: white;\n}\n\n.counter {\n  font-size: 0.8rem;\n  color: yellow;\n  font-weight: 1000;\n  margin-left: 0.2rem;\n}\n\n@keyframes popup {\n  100% {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n}\n.double_tap {\n  position: fixed;\n  top: 92vh;\n  width: 100vw;\n  height: 2vh;\n  background-color: black;\n  color: white;\n  z-index: 1000;\n}\n\n.marquee {\n  margin: 0 auto;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.marquee span {\n  display: inline-block;\n  padding-left: 100%;\n  text-indent: 0;\n  animation: marquee 15s linear infinite;\n}\n\n.marquee span:hover {\n  animation-play-state: paused;\n}\n\n@keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n@media only screen and (max-width: 1200px) {\n  main ul {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n@media only screen and (max-width: 800px) {\n  main ul {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media only screen and (max-width: 600px) {\n  main ul {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,yDAAA;AACF;;AAEA;;;EAGE,4BAAA;EACA,sBAAA;EACA,4BAAA;AACF;;AAEA;EACE,qBAAA;EACA,aAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,cAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,WAAA;EACA,4BAAA;EACA,YAAA;EACA,SAAA;EACA,gBAAA;AACF;;AAEA;EACE,eAAA;EACA,WAAA;EACA,4BAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AACF;;AAEA;EACE,qBAAA;EACA,YAAA;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,kBAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;AACF;;AAEA;EACE,aAAA;EACA,sCAAA;EACA,iBAAA;EACA,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,2KAAA;EACA,sCAAA;EACA,YAAA;EACA,yCAAA;EACA,yBAAA;EACA,qBAAA;EACA,mBAAA;AACF;;AAEA;EACE,wCAAA;EACA,yCAAA;AACF;;AAEA;EACE,kBAAA;EACA,WAAA;EACA,WAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;AACF;;AAEA;EACE,WAAA;EACA,iBAAA;EACA,cAAA;AACF;;AAEA;EACE,oBAAA;EACA,eAAA;AACF;;AAEA;EACE,4BAAA;EACA,UAAA;EACA,qBAAA;AACF;;AAEA;EACE,qBAAA;EACA,wBAAA;EACA,kBAAA;EACA,sBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,eAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,UAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,8BAAA;EACA,UAAA;AACF;;AAEA;EACE,mCAAA;EACA,OAAA;EACA,UAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,8BAAA;EACA,UAAA;AACF;;AAEA;EACE,mCAAA;EACA,WAAA;EACA,UAAA;AACF;;AAEA;;EAEE,yDAAA;EACA,UAAA;EACA,YAAA;AACF;;AAEA;EACE,iBAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE;IACE,qBAAA;IACA,UAAA;EACF;AACF;AAEA;EACE,eAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;AAAF;;AAGA;EACE,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,sBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,kBAAA;EACA,cAAA;EACA,sCAAA;AAAF;;AAGA;EACE,4BAAA;AAAF;;AAGA;EACE;IAAK,0BAAA;EACL;EAAA;IAAO,8BAAA;EAGP;AACF;AADA;EACE;IACE,aAAA;IACA,kCAAA;EAGF;AACF;AAAA;EACE;IACE,aAAA;IACA,8BAAA;EAEF;AACF;AACA;EACE;IACE,aAAA;IACA,0BAAA;EACF;AACF","sourcesContent":["body {\n  background-image: url(../images/backy.jpg);\n}\n\nbody,\nheader,\nfooter {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nul {\n  list-style-type: none;\n  display: flex;\n}\n\nnav {\n  margin-right: 5%;\n}\n\n.links {\n  margin: 0.5rem;\n  white-space: nowrap;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 20;\n  background-color: whitesmoke;\n  width: 100vw;\n  top: -2px;\n  padding-left: 2%;\n}\n\nfooter {\n  position: fixed;\n  z-index: 20;\n  background-color: whitesmoke;\n  width: 100vw;\n  top: 92vh;\n  height: 8vh;\n  text-align: center;\n  padding-top: 1.5rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: red;\n}\n\nmain {\n  position: relative;\n  top: 95px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 6rem;\n}\n\nmain ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  font-size: 0.5rem;\n  gap: 1.5rem;\n  margin-left: 10%;\n}\n\nh2 {\n  margin-left: 3%;\n  font-weight: 700;\n}\n\nmain li {\n  display: flex;\n  flex-direction: column;\n  width: 12rem;\n  height: 20rem;\n  background-image: url('https://vignette.wikia.nocookie.net/yugioh/images/9/95/SlifertheSkyDragon-GBI-AE-Back.png/revision/latest/scale-to-width-down/328?cb=2010072608370');\n  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;\n  color: white;\n  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);\n  transition: all 0.4s ease;\n  align-content: center;\n  margin-bottom: 3rem;\n}\n\nmain li:hover {\n  border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;\n  box-shadow: 10px 10px rgba(0, 0, 0, 0.25);\n}\n\n.image_holder {\n  align-self: center;\n  width: 100%;\n  height: 80%;\n}\n\n.card_image {\n  width: 100%;\n  height: 100%;\n}\n\n.card_details {\n  display: flex;\n  justify-content: space-between;\n}\n\n.likes-section {\n  width: 3rem;\n  font-size: 0.8rem;\n  margin: 0.5rem;\n}\n\n.fa-heart {\n  padding-left: 0.5rem;\n  cursor: pointer;\n}\n\n.open {\n  animation: popup 0.6s linear;\n  color: red;\n  transform: scale(1.5);\n}\n\n.card_comments {\n  text-decoration: none;\n  border: 3px solid yellow;\n  color: transparent;\n  padding: 0.5rem 0.8rem;\n  font-size: 0.8rem;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 0.5s;\n  position: relative;\n  cursor: pointer;\n}\n\n.card_comments::before {\n  content: \"Comments\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: yellow;\n  background: rgb(34, 34, 34);\n  font-size: 28px;\n  top: 0;\n  left: 100%;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 1s;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(0) rotateY(0);\n  opacity: 0;\n}\n\n.card_comments:hover::before {\n  transform: scale(1) rotateY(360deg);\n  left: 0;\n  opacity: 1;\n}\n\n.card_comments::after {\n  content: \"Comments\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: yellow;\n  background: rgb(34, 34, 34);\n  font-size: 28px;\n  top: 0;\n  left: 0;\n  font-family: sans-serif;\n  letter-spacing: 5px;\n  transition: all 1s;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform: scale(1) rotateY(0);\n  opacity: 1;\n}\n\n.card_comments:hover::after {\n  transform: scale(0) rotateY(360deg);\n  left: -100%;\n  opacity: 0;\n}\n\nheader,\nfooter {\n  background-image: url(../images/backy2.jpg);\n  left: -2px;\n  color: white;\n}\n\n.counter {\n  font-size: 0.8rem;\n  color: yellow;\n  font-weight: 1000;\n  margin-left: 0.2rem;\n}\n\n@keyframes popup {\n  100% {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n}\n\n.double_tap {\n  position: fixed;\n  top: 92vh;\n  width: 100vw;\n  height: 2vh;\n  background-color: black;\n  color: white;\n  z-index: 1000;\n}\n\n.marquee {\n  margin: 0 auto;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.marquee span {\n  display: inline-block;\n  padding-left: 100%;\n  text-indent: 0;\n  animation: marquee 15s linear infinite;\n}\n\n.marquee span:hover {\n  animation-play-state: paused;\n}\n\n@keyframes marquee {\n  0% { transform: translate(0, 0); }\n  100% { transform: translate(-100%, 0); }\n}\n\n@media only screen and (max-width: 1200px) {\n  main ul {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  main ul {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  main ul {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/popup.css":
/*!******************************!*\
  !*** ./src/styles/popup.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/BlueEyesPage.js":
/*!*************************************!*\
  !*** ./src/modules/BlueEyesPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardsList": () => (/* binding */ cardsList),
/* harmony export */   "clearElement": () => (/* binding */ clearElement),
/* harmony export */   "save": () => (/* binding */ save),
/* harmony export */   "displayElements": () => (/* binding */ displayElements)
/* harmony export */ });
/* harmony import */ var _PopupController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupController.js */ "./src/modules/PopupController.js");
/* harmony import */ var _Yu_gi_ohAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Yu-gi-ohAPI.js */ "./src/modules/Yu-gi-ohAPI.js");



const cardsList = JSON.parse(localStorage.getItem('cardsList')) || [];

const clearElement = ((element) => {
  element.innerHTML = '';
});

const save = (list) => {
  localStorage.setItem('cardsList', JSON.stringify(list));
  return list
};

const displayElements = (cardsList) => {
  const cardsListNode = document.getElementById('card_list');
  clearElement(cardsListNode);
  for (let i = 0; i < cardsList.length; i++) {
    cardsListNode.innerHTML += `
        <li>
          <div class="image_holder"><img class="card_image" src="${cardsList[i].card_images[0].image_url_small}" alt=""></div>
          <div class="card_details">
            <h2 class"card_title">${cardsList[i].name}</h2>
            <div class="likes-section">
              <i class="far fa-heart" data-id="${cardsList[i].id}">
              </i><br><span id="${cardsList[i].id}" class="likes"></span> likes
            </div>
          </div>
            <button id="commentBtn" class="card_comments" data-id="${cardsList[i].id}" >Comments</button>
        </li>`;
  }
};

function displayBlueEyes() {
  (0,_Yu_gi_ohAPI_js__WEBPACK_IMPORTED_MODULE_1__["default"])().then( blueEyesData => {
    displayElements(save(blueEyesData));
  })
}

document.addEventListener('click', (e) => {
  const popup = document.getElementById('appPopup');
  if (e.target === popup || e.target.id === 'close') popup.style.display = 'none';
  if (e.target.id === 'commentBtn') (0,_PopupController_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target.getAttribute('data-id'));
});

displayBlueEyes();


/***/ }),

/***/ "./src/modules/Counters.js":
/*!*********************************!*\
  !*** ./src/modules/Counters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ commentsCounter)
/* harmony export */ });
/* harmony import */ var _utl_funcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utl/funcs */ "./src/utl/funcs.js");


function arrayLength(a) {
  let length = 0;
  while (a[length] !== undefined) {
    length += 1;
  }
  return length
}

function plusPlus(counter) {
  counter += 1;
  return counter;
}

function commentsCounter(comments) {
  let counter = 0;
  if (comments.length === undefined) return undefined;
  comments.forEach(() => {
    counter = plusPlus(counter);
    return counter;
  });
  if (counter === 0) return undefined;
  return counter;
}

window.addEventListener('load', () => {
  const counterNode = document.getElementById('supy');
  counterNode.innerHTML = `(${arrayLength((0,_utl_funcs__WEBPACK_IMPORTED_MODULE_0__["default"])())})`;
});


/***/ }),

/***/ "./src/modules/InvolveAPI.js":
/*!***********************************!*\
  !*** ./src/modules/InvolveAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCommentsOf": () => (/* binding */ getCommentsOf),
/* harmony export */   "postCommentWith": () => (/* binding */ postCommentWith),
/* harmony export */   "postLikeWith": () => (/* binding */ postLikeWith)
/* harmony export */ });
const API_URI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = 'eVhYJo21vVPIv4GTCmdX';

function getCommentsOptions() {
  return {
    method: 'GET',
  };
}

function postCommentsOptions(cardId, username, comment) {
  return {
    method: 'POST',
    body: JSON.stringify({
      item_id: cardId,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };
}

function postLikes(cardId) {
  return {
    method: 'POST',
    body: JSON.stringify({
      item_id: cardId,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };
}

async function getCommentsOf(cardId) {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/comments?item_id=${cardId}`, getCommentsOptions());
  return response.json();
}

async function postCommentWith(cardId, username, comment) {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/comments`, postCommentsOptions(cardId, username, comment));
  return response.json();
}

async function postLikeWith(cardId) {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/likes`, postLikes(cardId));
  return response.json();
}


/***/ }),

/***/ "./src/modules/LikesController.js":
/*!****************************************!*\
  !*** ./src/modules/LikesController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvolveAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolveAPI.js */ "./src/modules/InvolveAPI.js");


let clicked = false;
const cardsListNode = document.getElementById('card_list');
const API_URI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = 'eVhYJo21vVPIv4GTCmdX';

async function showLikes() {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/likes`);
  const likesData = await response.json();
  const likeNodes = document.querySelectorAll('.likes');

  likeNodes.forEach((likeNode) => {
    likesData.forEach((likeObj) => {
      if (likeObj.item_id === Number(likeNode.id)) {
        likeNode.innerHTML = `${likeObj.likes}`;
      }
    });
  });
}

cardsListNode.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'i') {
    const cardId = Number(e.target.getAttribute('data-id'));
    e.target.classList.add('open');
    if (!clicked) {
      clicked = true;
      (0,_InvolveAPI_js__WEBPACK_IMPORTED_MODULE_0__.postLikeWith)(cardId);
    } else {
      clicked = false;
    }
    showLikes();
  }
});

showLikes();


/***/ }),

/***/ "./src/modules/PopupController.js":
/*!****************************************!*\
  !*** ./src/modules/PopupController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCard": () => (/* binding */ getCard),
/* harmony export */   "displayBlock": () => (/* binding */ displayBlock),
/* harmony export */   "textContentWith": () => (/* binding */ textContentWith),
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "default": () => (/* binding */ displayPopup)
/* harmony export */ });
/* harmony import */ var _utl_funcs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utl/funcs.js */ "./src/utl/funcs.js");
/* harmony import */ var _Counters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counters.js */ "./src/modules/Counters.js");
/* harmony import */ var _InvolveAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvolveAPI.js */ "./src/modules/InvolveAPI.js");




function getCard(id) {
  const cards = (0,_utl_funcs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return cards.find((card) => card.id === id);
}

function displayBlock(element) {
  element.style.display = 'block';
  return true;
}

function textContentWith(ele, value) {
  ele.textContent = value;
  return ele;
}

function getDate() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;
  return today;
}

function displayPopup(cardId) {
  const card = getCard(Number(cardId));
  const [popup, popupBody] = ['appPopup', 'popup-body'].map((id) => document.getElementById(id));
  const [cardImg, cardTitle, cardDesc, cardType, cardATK, cardDEF, cardAttr, cardInfo, cardComments,
    commentHead, commentsDisplay, addComment, addCommentHead, addCommentForm, inputUsername, inputComment, commentBtn] = ['img', 'h2', 'div', 'span', 'span', 'span', 'span', 'span', 'div', 'h4', 'div', 'div', 'h4', 'form', 'input', 'textarea', 'input'].map((tag) => document.createElement(tag));

  cardComments.id = 'cardComments';
  commentHead.id = 'commentHead';
  commentsDisplay.id = 'commentsDisplay';
  cardDesc.className = 'desc';
  cardInfo.className = 'highlight';
  cardImg.src = card.card_images[0].image_url;

  textContentWith(cardTitle, `${card.name}`);
  textContentWith(cardType, `Type : ${card.type}`);
  textContentWith(cardATK, `Attack : ${(card.type === 'Spell Card') ? '-' : card.atk}`);
  textContentWith(cardAttr, `Attribute : ${(card.type === 'Spell Card') ? '-' : card.attribute}`);
  textContentWith(cardDEF, `Defence : ${(card.type === 'Spell Card') ? '-' : card.def}`);
  textContentWith(cardInfo, `Description : ${card.desc}`);
  textContentWith(popupBody, '');

  (0,_InvolveAPI_js__WEBPACK_IMPORTED_MODULE_2__.getCommentsOf)(cardId).then((commentsArr) => {
    commentHead.textContent = (0,_Counters_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentsArr) === undefined ? 'No comments' : `Comments (${(0,_Counters_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentsArr)})`;
    commentsArr.forEach((comment) => {
      commentsDisplay.innerHTML
        += `<div>${comment.creation_date} (${comment.username}) : ${comment.comment}</div>`;
    });
  });

  addComment.id = 'addComment';
  inputUsername.id = 'inputUsername';
  addCommentForm.id = 'commentForm';
  inputComment.id = 'inputComment';
  commentBtn.id = 'commentBtn';
  inputUsername.type = 'text';
  commentBtn.type = 'submit';
  addCommentHead.textContent = 'Add a comment';
  inputUsername.placeholder = 'Your name';
  inputComment.placeholder = 'Your comment';
  inputUsername.required = true;
  inputComment.required = true;
  commentBtn.value = 'Post';
  addCommentForm.setAttribute('data-id', cardId);

  addCommentForm.append(inputUsername, inputComment, commentBtn);
  addComment.append(addCommentHead, addCommentForm);
  cardComments.append(commentHead, commentsDisplay);
  cardDesc.append(cardType, cardATK, cardAttr, cardDEF);
  popupBody.append(cardImg, cardTitle, cardDesc, cardInfo, cardComments, addComment);

  displayBlock(popup);

  return popup;
}

document.addEventListener('submit', (e) => {
  const [commentHead, commentsDisplay] = ['commentHead', 'commentsDisplay'].map((id) => document.getElementById(id));
  const [username, comment] = [e.target[0].value, e.target[1].value];
  const id = Number(e.target.getAttribute('data-id'));
  const today = getDate();

  (0,_InvolveAPI_js__WEBPACK_IMPORTED_MODULE_2__.postCommentWith)(id, username, comment);

  commentsDisplay.innerHTML += `<div>${today} (${username}) : ${comment}</div>`;
  commentHead.innerHTML = `Comments (${commentsDisplay.childElementCount})`;

  e.target.reset();
  e.preventDefault();
});


/***/ }),

/***/ "./src/modules/Yu-gi-ohAPI.js":
/*!************************************!*\
  !*** ./src/modules/Yu-gi-ohAPI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBlueEyesCards)
/* harmony export */ });
async function getBlueEyesCards() {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes');
    const data = await response.json();
    return data.data
}


/***/ }),

/***/ "./src/utl/funcs.js":
/*!**************************!*\
  !*** ./src/utl/funcs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCardsFromLocalStorage)
/* harmony export */ });
function getCardsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('cardsList')) || [];
}


/***/ }),

/***/ "./src/images/backy.jpg":
/*!******************************!*\
  !*** ./src/images/backy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3dcbba831273fd0739f.jpg";

/***/ }),

/***/ "./src/images/backy2.jpg":
/*!*******************************!*\
  !*** ./src/images/backy2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef379af377f043865d47.jpg";

/***/ }),

/***/ "./src/images/commentBg.jpg":
/*!**********************************!*\
  !*** ./src/images/commentBg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bbb40358c26409e154c.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/popup.css */ "./src/styles/popup.css");
/* harmony import */ var _modules_BlueEyesPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/BlueEyesPage.js */ "./src/modules/BlueEyesPage.js");
/* harmony import */ var _modules_InvolveAPI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/InvolveAPI.js */ "./src/modules/InvolveAPI.js");
/* harmony import */ var _modules_LikesController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/LikesController.js */ "./src/modules/LikesController.js");
/* harmony import */ var _modules_Counters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Counters.js */ "./src/modules/Counters.js");







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFdB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCNEI7QUFDQTtBQUNPO0FBQ0Y7QUFDSztBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL3N0eWxlcy9wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy9zdHlsZXMvcG9wdXAuY3NzP2I5ZWQiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/NzljZCIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy9tb2R1bGVzL0JsdWVFeWVzUGFnZS5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9zcmMvbW9kdWxlcy9Db3VudGVycy5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9zcmMvbW9kdWxlcy9JbnZvbHZlQVBJLmpzIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC8uL3NyYy9tb2R1bGVzL0xpa2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9zcmMvbW9kdWxlcy9Qb3B1cENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL21vZHVsZXMvWXUtZ2ktb2hBUEkuanMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwLy4vc3JjL3V0bC9mdW5jcy5qcyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veXUtZ2ktb2hfQXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3l1LWdpLW9oX0FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly95dS1naS1vaF9BcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jb21tZW50QmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnBvcHVwIGgyIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMzc1O1xcbiAgYm9yZGVyOiAxNXB4IHNvbGlkICNmYWZhZDJhODtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMzc1O1xcbiAgYm9yZGVyOiAxNXB4IHNvbGlkICNmYWZhZDJhODtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XFxufVxcblxcbi5wb3B1cC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbWFyZ2luOiA1JSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDcwMHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwb3B1cC1ib2R5IHtcXG4gIHdpZHRoOiA0MjFweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbn1cXG5cXG4jY2FyZENvbW1lbnRzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYWRkQ29tbWVudCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2NvbW1lbnRGb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNpbnB1dENvbW1lbnQge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uZGVzYyA+ICoge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmbGV4OiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNjb21tZW50Rm9ybSA+ICoge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbiNjb21tZW50c0Rpc3BsYXkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jY29tbWVudHNEaXNwbGF5ID4gKiB7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcblxcbiNjbG9zZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Nsb3NlOmhvdmVyLFxcbiNjbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogcmVkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVzYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMzc1O1xcbiAgYm9yZGVyOiAxNXB4IHNvbGlkICNmYWZhZDJhODtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuI3Jpbmcge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjM2MzYzNjO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE1MHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjAwMDtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYwMDA7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbiNyaW5nOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0zcHg7XFxuICBsZWZ0OiAtM3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmZmMDAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2ZmZjAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZUMgMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4jcmluZyBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDJweCk7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICBhbmltYXRpb246IGFuaW1hdGUgMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4jcmluZyBzcGFuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmYwMDA7XFxuICB0b3A6IC02cHg7XFxuICByaWdodDogLThweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNmZmYwMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZUMge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9wb3B1cC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEVBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBOztFQUVFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VBQ0Y7RUFFQTtJQUNFLE1BQUE7SUFDQSxVQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLHVCQUFBO0VBREY7RUFJQTtJQUNFLHlCQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7SUFDRSx3QkFBQTtFQUhGO0VBTUE7SUFDRSx5QkFBQTtFQUpGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5wb3B1cCBoMiB7XFxuICB3aWR0aDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM3NTtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZmFmYWQyYTg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMXB4O1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM3NTtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZmFmYWQyYTg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMXB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2NvbW1lbnRCZy5qcGcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1hcmdpbjogNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcG9wdXAtYm9keSB7XFxuICB3aWR0aDogNDIxcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXG59XFxuXFxuI2NhcmRDb21tZW50cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2FkZENvbW1lbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNjb21tZW50Rm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jaW5wdXRDb21tZW50IHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmRlc2MgPiAqIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgZmxleDogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29tbWVudEZvcm0gPiAqIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jY29tbWVudHNEaXNwbGF5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2NvbW1lbnRzRGlzcGxheSA+ICoge1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNjbG9zZTpob3ZlcixcXG4jY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlc2Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM3NTtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZmFmYWQyYTg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMXB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbiNyaW5nIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzNjM2MzYztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNmZmYwMDA7XFxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmMDAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4jcmluZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtM3B4O1xcbiAgbGVmdDogLTNweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZjAwMDtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmYwMDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IGFuaW1hdGVDIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuI3Jpbmcgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYyg1MCUgLSAycHgpO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuI3Jpbmcgc3Bhbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmMDAwO1xcbiAgdG9wOiAtNnB4O1xcbiAgcmlnaHQ6IC04cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjZmZmMDAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGVDIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQwNWRlZyk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JhY2t5LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYWNreTIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuYm9keSxcXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxubmF2IHtcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxufVxcblxcbi5saW5rcyB7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgdG9wOiAtMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHRvcDogOTJ2aDtcXG4gIGhlaWdodDogOHZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDk1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xcbn1cXG5cXG5tYWluIHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW4tbGVmdDogMyU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5tYWluIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEycmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQveXVnaW9oL2ltYWdlcy85Lzk1L1NsaWZlcnRoZVNreURyYWdvbi1HQkktQUUtQmFjay5wbmcvcmV2aXNpb24vbGF0ZXN0L3NjYWxlLXRvLXdpZHRoLWRvd24vMzI4P2NiPTIwMTAwNzI2MDgzNzBcXFwiKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAlIDAlIDAlIDAlLzAlIDAlIDAlIDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxubWFpbiBsaTpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAwJSAwJSA1MCUgNTAlLzAlIDAlIDUlIDUlO1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi5pbWFnZV9ob2xkZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmNhcmRfaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJkX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxpa2VzLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDNyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG4uZmEtaGVhcnQge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVuIHtcXG4gIGFuaW1hdGlvbjogcG9wdXAgMC42cyBsaW5lYXI7XFxuICBjb2xvcjogcmVkO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uY2FyZF9jb21tZW50cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IDNweCBzb2xpZCB5ZWxsb3c7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcmRfY29tbWVudHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiQ29tbWVudHNcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGVZKDApO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNhcmRfY29tbWVudHM6aG92ZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVkoMzYwZGVnKTtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2FyZF9jb21tZW50czo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIkNvbW1lbnRzXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogeWVsbG93O1xcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgwKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jYXJkX2NvbW1lbnRzOmhvdmVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZVkoMzYwZGVnKTtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgbGVmdDogLTJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvdW50ZXIge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogeWVsbG93O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBvcHVwIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5kb3VibGVfdGFwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogOTJ2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMnZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4ubWFycXVlZSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1hcnF1ZWUgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMCU7XFxuICB0ZXh0LWluZGVudDogMDtcXG4gIGFuaW1hdGlvbjogbWFycXVlZSAxNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubWFycXVlZSBzcGFuOmhvdmVyIHtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcblxcbkBrZXlmcmFtZXMgbWFycXVlZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIG1haW4gdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICBtYWluIHVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBtYWluIHVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseURBQUE7QUFDRjs7QUFFQTs7O0VBR0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Es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SUFDQSwwQkFBQTtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2JhY2t5LmpwZyk7XFxufVxcblxcbmJvZHksXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm5hdiB7XFxuICBtYXJnaW4tcmlnaHQ6IDUlO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHRvcDogLTJweDtcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0b3A6IDkydmg7XFxuICBoZWlnaHQ6IDh2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA5NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcXG59XFxuXFxubWFpbiB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBmb250LXNpemU6IDAuNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubWFpbiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMnJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L3l1Z2lvaC9pbWFnZXMvOS85NS9TbGlmZXJ0aGVTa3lEcmFnb24tR0JJLUFFLUJhY2sucG5nL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0aC1kb3duLzMyOD9jYj0yMDEwMDcyNjA4MzcwJyk7XFxuICBib3JkZXItcmFkaXVzOiAwJSAwJSAwJSAwJSAvIDAlIDAlIDAlIDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxubWFpbiBsaTpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAwJSAwJSA1MCUgNTAlIC8gMCUgMCUgNSUgNSU7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLmltYWdlX2hvbGRlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG4uY2FyZF9pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNhcmRfZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGlrZXMtc2VjdGlvbiB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcblxcbi5mYS1oZWFydCB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm9wZW4ge1xcbiAgYW5pbWF0aW9uOiBwb3B1cCAwLjZzIGxpbmVhcjtcXG4gIGNvbG9yOiByZWQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5jYXJkX2NvbW1lbnRzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHllbGxvdztcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FyZF9jb21tZW50czo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJDb21tZW50c1xcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGJhY2tncm91bmQ6IHJnYigzNCwgMzQsIDM0KTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlWSgwKTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jYXJkX2NvbW1lbnRzOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVZKDM2MGRlZyk7XFxuICBsZWZ0OiAwO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNhcmRfY29tbWVudHM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJDb21tZW50c1xcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGJhY2tncm91bmQ6IHJnYigzNCwgMzQsIDM0KTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgwKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jYXJkX2NvbW1lbnRzOmhvdmVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZVkoMzYwZGVnKTtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2JhY2t5Mi5qcGcpO1xcbiAgbGVmdDogLTJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvdW50ZXIge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogeWVsbG93O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBvcHVwIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5kb3VibGVfdGFwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogOTJ2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMnZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4ubWFycXVlZSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1hcnF1ZWUgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMCU7XFxuICB0ZXh0LWluZGVudDogMDtcXG4gIGFuaW1hdGlvbjogbWFycXVlZSAxNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubWFycXVlZSBzcGFuOmhvdmVyIHtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcblxcbkBrZXlmcmFtZXMgbWFycXVlZSB7XFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApOyB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICBtYWluIHVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgbWFpbiB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgbWFpbiB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBkaXNwbGF5UG9wdXAgZnJvbSAnLi9Qb3B1cENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGdldEJsdWVFeWVzQ2FyZHMgZnJvbSAnLi9ZdS1naS1vaEFQSS5qcyc7XG5cbmV4cG9ydCBjb25zdCBjYXJkc0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkc0xpc3QnKSkgfHwgW107XG5cbmV4cG9ydCBjb25zdCBjbGVhckVsZW1lbnQgPSAoKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2F2ZSA9IChsaXN0KSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJkc0xpc3QnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XG4gIHJldHVybiBsaXN0XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheUVsZW1lbnRzID0gKGNhcmRzTGlzdCkgPT4ge1xuICBjb25zdCBjYXJkc0xpc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRfbGlzdCcpO1xuICBjbGVhckVsZW1lbnQoY2FyZHNMaXN0Tm9kZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY2FyZHNMaXN0Tm9kZS5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlX2hvbGRlclwiPjxpbWcgY2xhc3M9XCJjYXJkX2ltYWdlXCIgc3JjPVwiJHtjYXJkc0xpc3RbaV0uY2FyZF9pbWFnZXNbMF0uaW1hZ2VfdXJsX3NtYWxsfVwiIGFsdD1cIlwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX2RldGFpbHNcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc1wiY2FyZF90aXRsZVwiPiR7Y2FyZHNMaXN0W2ldLm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlcy1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWhlYXJ0XCIgZGF0YS1pZD1cIiR7Y2FyZHNMaXN0W2ldLmlkfVwiPlxuICAgICAgICAgICAgICA8L2k+PGJyPjxzcGFuIGlkPVwiJHtjYXJkc0xpc3RbaV0uaWR9XCIgY2xhc3M9XCJsaWtlc1wiPjwvc3Bhbj4gbGlrZXNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNvbW1lbnRCdG5cIiBjbGFzcz1cImNhcmRfY29tbWVudHNcIiBkYXRhLWlkPVwiJHtjYXJkc0xpc3RbaV0uaWR9XCIgPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgIDwvbGk+YDtcbiAgfVxufTtcblxuZnVuY3Rpb24gZGlzcGxheUJsdWVFeWVzKCkge1xuICBnZXRCbHVlRXllc0NhcmRzKCkudGhlbiggYmx1ZUV5ZXNEYXRhID0+IHtcbiAgICBkaXNwbGF5RWxlbWVudHMoc2F2ZShibHVlRXllc0RhdGEpKTtcbiAgfSlcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBQb3B1cCcpO1xuICBpZiAoZS50YXJnZXQgPT09IHBvcHVwIHx8IGUudGFyZ2V0LmlkID09PSAnY2xvc2UnKSBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBpZiAoZS50YXJnZXQuaWQgPT09ICdjb21tZW50QnRuJykgZGlzcGxheVBvcHVwKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbn0pO1xuXG5kaXNwbGF5Qmx1ZUV5ZXMoKTtcbiIsImltcG9ydCBnZXRDYXJkc0Zyb21Mb2NhbFN0b3JhZ2UgZnJvbSBcIi4uL3V0bC9mdW5jc1wiO1xuXG5mdW5jdGlvbiBhcnJheUxlbmd0aChhKSB7XG4gIGxldCBsZW5ndGggPSAwO1xuICB3aGlsZSAoYVtsZW5ndGhdICE9PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggKz0gMTtcbiAgfVxuICByZXR1cm4gbGVuZ3RoXG59XG5cbmZ1bmN0aW9uIHBsdXNQbHVzKGNvdW50ZXIpIHtcbiAgY291bnRlciArPSAxO1xuICByZXR1cm4gY291bnRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tbWVudHNDb3VudGVyKGNvbW1lbnRzKSB7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgaWYgKGNvbW1lbnRzLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb21tZW50cy5mb3JFYWNoKCgpID0+IHtcbiAgICBjb3VudGVyID0gcGx1c1BsdXMoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH0pO1xuICBpZiAoY291bnRlciA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgcmV0dXJuIGNvdW50ZXI7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBjb25zdCBjb3VudGVyTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdXB5Jyk7XG4gIGNvdW50ZXJOb2RlLmlubmVySFRNTCA9IGAoJHthcnJheUxlbmd0aChnZXRDYXJkc0Zyb21Mb2NhbFN0b3JhZ2UoKSl9KWA7XG59KTtcbiIsImNvbnN0IEFQSV9VUkkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcbmNvbnN0IEFQUF9JRCA9ICdlVmhZSm8yMXZWUEl2NEdUQ21kWCc7XG5cbmZ1bmN0aW9uIGdldENvbW1lbnRzT3B0aW9ucygpIHtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwb3N0Q29tbWVudHNPcHRpb25zKGNhcmRJZCwgdXNlcm5hbWUsIGNvbW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBjYXJkSWQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBwb3N0TGlrZXMoY2FyZElkKSB7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogY2FyZElkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbW1lbnRzT2YoY2FyZElkKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSSX0vYXBwcy8ke0FQUF9JRH0vY29tbWVudHM/aXRlbV9pZD0ke2NhcmRJZH1gLCBnZXRDb21tZW50c09wdGlvbnMoKSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0Q29tbWVudFdpdGgoY2FyZElkLCB1c2VybmFtZSwgY29tbWVudCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkl9L2FwcHMvJHtBUFBfSUR9L2NvbW1lbnRzYCwgcG9zdENvbW1lbnRzT3B0aW9ucyhjYXJkSWQsIHVzZXJuYW1lLCBjb21tZW50KSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0TGlrZVdpdGgoY2FyZElkKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSSX0vYXBwcy8ke0FQUF9JRH0vbGlrZXNgLCBwb3N0TGlrZXMoY2FyZElkKSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG4iLCJpbXBvcnQgeyBwb3N0TGlrZVdpdGggfSBmcm9tICcuL0ludm9sdmVBUEkuanMnO1xuXG5sZXQgY2xpY2tlZCA9IGZhbHNlO1xuY29uc3QgY2FyZHNMaXN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkX2xpc3QnKTtcbmNvbnN0IEFQSV9VUkkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcbmNvbnN0IEFQUF9JRCA9ICdlVmhZSm8yMXZWUEl2NEdUQ21kWCc7XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dMaWtlcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJJfS9hcHBzLyR7QVBQX0lEfS9saWtlc2ApO1xuICBjb25zdCBsaWtlc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGxpa2VOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcycpO1xuXG4gIGxpa2VOb2Rlcy5mb3JFYWNoKChsaWtlTm9kZSkgPT4ge1xuICAgIGxpa2VzRGF0YS5mb3JFYWNoKChsaWtlT2JqKSA9PiB7XG4gICAgICBpZiAobGlrZU9iai5pdGVtX2lkID09PSBOdW1iZXIobGlrZU5vZGUuaWQpKSB7XG4gICAgICAgIGxpa2VOb2RlLmlubmVySFRNTCA9IGAke2xpa2VPYmoubGlrZXN9YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmNhcmRzTGlzdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaScpIHtcbiAgICBjb25zdCBjYXJkSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICBpZiAoIWNsaWNrZWQpIHtcbiAgICAgIGNsaWNrZWQgPSB0cnVlO1xuICAgICAgcG9zdExpa2VXaXRoKGNhcmRJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsaWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgc2hvd0xpa2VzKCk7XG4gIH1cbn0pO1xuXG5zaG93TGlrZXMoKTtcbiIsImltcG9ydCBnZXRDYXJkc0Zyb21Mb2NhbFN0b3JhZ2UgZnJvbSAnLi4vdXRsL2Z1bmNzLmpzJztcbmltcG9ydCBjb21tZW50c0NvdW50ZXIgZnJvbSAnLi9Db3VudGVycy5qcyc7XG5pbXBvcnQgeyBnZXRDb21tZW50c09mLCBwb3N0Q29tbWVudFdpdGggfSBmcm9tICcuL0ludm9sdmVBUEkuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZChpZCkge1xuICBjb25zdCBjYXJkcyA9IGdldENhcmRzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICByZXR1cm4gY2FyZHMuZmluZCgoY2FyZCkgPT4gY2FyZC5pZCA9PT0gaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUJsb2NrKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29udGVudFdpdGgoZWxlLCB2YWx1ZSkge1xuICBlbGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgcmV0dXJuIGVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGUoKSB7XG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vIEphbnVhcnkgaXMgMCFcbiAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIHRvZGF5ID0gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xuICByZXR1cm4gdG9kYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlQb3B1cChjYXJkSWQpIHtcbiAgY29uc3QgY2FyZCA9IGdldENhcmQoTnVtYmVyKGNhcmRJZCkpO1xuICBjb25zdCBbcG9wdXAsIHBvcHVwQm9keV0gPSBbJ2FwcFBvcHVwJywgJ3BvcHVwLWJvZHknXS5tYXAoKGlkKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xuICBjb25zdCBbY2FyZEltZywgY2FyZFRpdGxlLCBjYXJkRGVzYywgY2FyZFR5cGUsIGNhcmRBVEssIGNhcmRERUYsIGNhcmRBdHRyLCBjYXJkSW5mbywgY2FyZENvbW1lbnRzLFxuICAgIGNvbW1lbnRIZWFkLCBjb21tZW50c0Rpc3BsYXksIGFkZENvbW1lbnQsIGFkZENvbW1lbnRIZWFkLCBhZGRDb21tZW50Rm9ybSwgaW5wdXRVc2VybmFtZSwgaW5wdXRDb21tZW50LCBjb21tZW50QnRuXSA9IFsnaW1nJywgJ2gyJywgJ2RpdicsICdzcGFuJywgJ3NwYW4nLCAnc3BhbicsICdzcGFuJywgJ3NwYW4nLCAnZGl2JywgJ2g0JywgJ2RpdicsICdkaXYnLCAnaDQnLCAnZm9ybScsICdpbnB1dCcsICd0ZXh0YXJlYScsICdpbnB1dCddLm1hcCgodGFnKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZykpO1xuXG4gIGNhcmRDb21tZW50cy5pZCA9ICdjYXJkQ29tbWVudHMnO1xuICBjb21tZW50SGVhZC5pZCA9ICdjb21tZW50SGVhZCc7XG4gIGNvbW1lbnRzRGlzcGxheS5pZCA9ICdjb21tZW50c0Rpc3BsYXknO1xuICBjYXJkRGVzYy5jbGFzc05hbWUgPSAnZGVzYyc7XG4gIGNhcmRJbmZvLmNsYXNzTmFtZSA9ICdoaWdobGlnaHQnO1xuICBjYXJkSW1nLnNyYyA9IGNhcmQuY2FyZF9pbWFnZXNbMF0uaW1hZ2VfdXJsO1xuXG4gIHRleHRDb250ZW50V2l0aChjYXJkVGl0bGUsIGAke2NhcmQubmFtZX1gKTtcbiAgdGV4dENvbnRlbnRXaXRoKGNhcmRUeXBlLCBgVHlwZSA6ICR7Y2FyZC50eXBlfWApO1xuICB0ZXh0Q29udGVudFdpdGgoY2FyZEFUSywgYEF0dGFjayA6ICR7KGNhcmQudHlwZSA9PT0gJ1NwZWxsIENhcmQnKSA/ICctJyA6IGNhcmQuYXRrfWApO1xuICB0ZXh0Q29udGVudFdpdGgoY2FyZEF0dHIsIGBBdHRyaWJ1dGUgOiAkeyhjYXJkLnR5cGUgPT09ICdTcGVsbCBDYXJkJykgPyAnLScgOiBjYXJkLmF0dHJpYnV0ZX1gKTtcbiAgdGV4dENvbnRlbnRXaXRoKGNhcmRERUYsIGBEZWZlbmNlIDogJHsoY2FyZC50eXBlID09PSAnU3BlbGwgQ2FyZCcpID8gJy0nIDogY2FyZC5kZWZ9YCk7XG4gIHRleHRDb250ZW50V2l0aChjYXJkSW5mbywgYERlc2NyaXB0aW9uIDogJHtjYXJkLmRlc2N9YCk7XG4gIHRleHRDb250ZW50V2l0aChwb3B1cEJvZHksICcnKTtcblxuICBnZXRDb21tZW50c09mKGNhcmRJZCkudGhlbigoY29tbWVudHNBcnIpID0+IHtcbiAgICBjb21tZW50SGVhZC50ZXh0Q29udGVudCA9IGNvbW1lbnRzQ291bnRlcihjb21tZW50c0FycikgPT09IHVuZGVmaW5lZCA/ICdObyBjb21tZW50cycgOiBgQ29tbWVudHMgKCR7Y29tbWVudHNDb3VudGVyKGNvbW1lbnRzQXJyKX0pYDtcbiAgICBjb21tZW50c0Fyci5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb21tZW50c0Rpc3BsYXkuaW5uZXJIVE1MXG4gICAgICAgICs9IGA8ZGl2PiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSAoJHtjb21tZW50LnVzZXJuYW1lfSkgOiAke2NvbW1lbnQuY29tbWVudH08L2Rpdj5gO1xuICAgIH0pO1xuICB9KTtcblxuICBhZGRDb21tZW50LmlkID0gJ2FkZENvbW1lbnQnO1xuICBpbnB1dFVzZXJuYW1lLmlkID0gJ2lucHV0VXNlcm5hbWUnO1xuICBhZGRDb21tZW50Rm9ybS5pZCA9ICdjb21tZW50Rm9ybSc7XG4gIGlucHV0Q29tbWVudC5pZCA9ICdpbnB1dENvbW1lbnQnO1xuICBjb21tZW50QnRuLmlkID0gJ2NvbW1lbnRCdG4nO1xuICBpbnB1dFVzZXJuYW1lLnR5cGUgPSAndGV4dCc7XG4gIGNvbW1lbnRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICBhZGRDb21tZW50SGVhZC50ZXh0Q29udGVudCA9ICdBZGQgYSBjb21tZW50JztcbiAgaW5wdXRVc2VybmFtZS5wbGFjZWhvbGRlciA9ICdZb3VyIG5hbWUnO1xuICBpbnB1dENvbW1lbnQucGxhY2Vob2xkZXIgPSAnWW91ciBjb21tZW50JztcbiAgaW5wdXRVc2VybmFtZS5yZXF1aXJlZCA9IHRydWU7XG4gIGlucHV0Q29tbWVudC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbW1lbnRCdG4udmFsdWUgPSAnUG9zdCc7XG4gIGFkZENvbW1lbnRGb3JtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGNhcmRJZCk7XG5cbiAgYWRkQ29tbWVudEZvcm0uYXBwZW5kKGlucHV0VXNlcm5hbWUsIGlucHV0Q29tbWVudCwgY29tbWVudEJ0bik7XG4gIGFkZENvbW1lbnQuYXBwZW5kKGFkZENvbW1lbnRIZWFkLCBhZGRDb21tZW50Rm9ybSk7XG4gIGNhcmRDb21tZW50cy5hcHBlbmQoY29tbWVudEhlYWQsIGNvbW1lbnRzRGlzcGxheSk7XG4gIGNhcmREZXNjLmFwcGVuZChjYXJkVHlwZSwgY2FyZEFUSywgY2FyZEF0dHIsIGNhcmRERUYpO1xuICBwb3B1cEJvZHkuYXBwZW5kKGNhcmRJbWcsIGNhcmRUaXRsZSwgY2FyZERlc2MsIGNhcmRJbmZvLCBjYXJkQ29tbWVudHMsIGFkZENvbW1lbnQpO1xuXG4gIGRpc3BsYXlCbG9jayhwb3B1cCk7XG5cbiAgcmV0dXJuIHBvcHVwO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBjb25zdCBbY29tbWVudEhlYWQsIGNvbW1lbnRzRGlzcGxheV0gPSBbJ2NvbW1lbnRIZWFkJywgJ2NvbW1lbnRzRGlzcGxheSddLm1hcCgoaWQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7XG4gIGNvbnN0IFt1c2VybmFtZSwgY29tbWVudF0gPSBbZS50YXJnZXRbMF0udmFsdWUsIGUudGFyZ2V0WzFdLnZhbHVlXTtcbiAgY29uc3QgaWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICBjb25zdCB0b2RheSA9IGdldERhdGUoKTtcblxuICBwb3N0Q29tbWVudFdpdGgoaWQsIHVzZXJuYW1lLCBjb21tZW50KTtcblxuICBjb21tZW50c0Rpc3BsYXkuaW5uZXJIVE1MICs9IGA8ZGl2PiR7dG9kYXl9ICgke3VzZXJuYW1lfSkgOiAke2NvbW1lbnR9PC9kaXY+YDtcbiAgY29tbWVudEhlYWQuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2NvbW1lbnRzRGlzcGxheS5jaGlsZEVsZW1lbnRDb3VudH0pYDtcblxuICBlLnRhcmdldC5yZXNldCgpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldEJsdWVFeWVzQ2FyZHMoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kYi55Z29wcm9kZWNrLmNvbS9hcGkvdjcvY2FyZGluZm8ucGhwP2FyY2hldHlwZT1CbHVlLUV5ZXMnKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhLmRhdGFcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENhcmRzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmRzTGlzdCcpKSB8fCBbXTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvcG9wdXAuY3NzJztcbmltcG9ydCAnLi9tb2R1bGVzL0JsdWVFeWVzUGFnZS5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9JbnZvbHZlQVBJLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL0xpa2VzQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9Db3VudGVycy5qcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=