/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/cookies/Cookie.js":
/*!******************************************!*\
  !*** ./src/components/cookies/Cookie.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cookie: () => (/* binding */ Cookie)\n/* harmony export */ });\nclass Cookie {\n  constructor(name, value) {\n    this.name = name;\n    this.value = value;\n    this.delay = \"Thu, 18 Mar 2025 12:00:00 UTC\";\n    this.path = \"/\";\n  }\n\n  createCookie() {}\n\n  setCookie() {\n    const cookie = `${this.name}=${this.value}; expires=${this.delay}; path=${this.path};`\n    document.cookie = cookie\n  }\n\n static getCookies() {\n    let cookies = decodeURIComponent(document.cookie)\n    cookies = cookies.split(\";\")\n    return cookies\n  }\n\n  checkCookie() {}\n\n  static suppCookie(name) {\n    const cookie = `${name}=; expires=01 Janv 1970 00:00:00 UTC; path=/;`\n    document.cookie = cookie\n  }\n}\n\n\n\n\n\n//# sourceURL=webpack://cookies/./src/components/cookies/Cookie.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_cookies_Cookie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/cookies/Cookie.js */ \"./src/components/cookies/Cookie.js\");\n/////////////\n//  import \n////////////    \n\n\n/////////////\n//  preventDefaut \n////////////\n\nconst form = document.querySelector(\"form\")\nform.addEventListener('submit', (event) => {\n    event.preventDefault()\n})\n\n/////////////\n//  Action button .Create\n////////////\nconst buttonCreate = document.querySelector(\".create\")\nbuttonCreate.addEventListener('click', createCookie)\n\nfunction createCookie(){\n    const name = document.querySelector(\"#name\").value\n    const value = document.querySelector('#value').value\n    const cookie = new _components_cookies_Cookie_js__WEBPACK_IMPORTED_MODULE_0__.Cookie(name, value)\n    cookie.setCookie()\n}\n\n/////////////\n//  Action button .Display \n////////////\nconst buttonDisplay = document.querySelector(\".display\")\nbuttonDisplay.addEventListener(\"click\", displayCookies)\n\nfunction displayCookies() {\n    const cookies = _components_cookies_Cookie_js__WEBPACK_IMPORTED_MODULE_0__.Cookie.getCookies()\n    display(cookies)\n}\n\nfunction display(cookies){\n    initCookiesBoard()\n    const cookiesBoard = document.querySelector(\".cookiesBoard\")\n    for (let cookie of cookies){\n        let nameCookie = cookie.split(\"=\")[0]\n        nameCookie = eraseSpace(nameCookie)\n        const valueCookie = cookie.split(\"=\")[1]\n        const element = document.createElement(\"div\")\n        element.classList.add(\"displayBloc\")\n        element.innerHTML = `\n            <div>Nom : ${nameCookie}</div>\n            <div>Valeur : ${valueCookie}</div>\n            <div class=\"supp\" id=\"${nameCookie}\">supp</div>\n        `\n        cookiesBoard.appendChild(element)\n    }\n    const elementsSupp = document.querySelectorAll(\".supp\")\n    for (let element of elementsSupp){\n        element.addEventListener('click', suppCookie)\n    }\n}\n\nfunction eraseSpace(element){\n    while (element.charAt(0) == \" \"){\n        element = element.substring(1)\n    }\n    return element\n}\n\n/////////////\n//  Action element .supp \n////////////\nfunction suppCookie(event){\n    _components_cookies_Cookie_js__WEBPACK_IMPORTED_MODULE_0__.Cookie.suppCookie(event.target.id)\n    suppCookieDisplay(event.target.id)\n}\n\nfunction suppCookieDisplay(id){\n    const element = document.getElementById(id).parentElement\n    element.remove()\n}\n\nfunction initCookiesBoard(){\n    const cookiesBoard = document.querySelector(\".cookiesBoard\")\n    if (cookiesBoard.innerHTML != null){\n        cookiesBoard.innerHTML = \"\"\n    }\n}\n\n\n//# sourceURL=webpack://cookies/./src/index.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;