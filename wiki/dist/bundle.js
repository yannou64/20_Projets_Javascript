/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiWiki.js":
/*!************************!*\
  !*** ./src/apiWiki.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchResults: () => (/* binding */ searchResults)
/* harmony export */ });
async function searchResults(toSearch){
  try {
    return resultatToSend(toSearch)
  } 
  catch (error) {
    console.log("erreur ! = " + error);
  }
};

async function resultatToSend(toSearch){
    const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${toSearch}`
    );
    const data = await response.json()
    return data.query.search
}




/***/ }),

/***/ "./src/logo.js":
/*!*********************!*\
  !*** ./src/logo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   img_logo: () => (/* binding */ img_logo)
/* harmony export */ });
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");


const img_logo = document.createElement("img");
img_logo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;
img_logo.alt = "logo"
img_logo.width = "100";
img_logo.height = "100";




/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a77c82699668181e61ef.png";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.js */ "./src/logo.js");
/* harmony import */ var _apiWiki_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiWiki.js */ "./src/apiWiki.js");



// exercise to insert an asset
const logo = document.querySelector(".logo");
logo.appendChild(_logo_js__WEBPACK_IMPORTED_MODULE_0__.img_logo);

// cancel refresh submit
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
})

// "Enter" action on input
const search = document.querySelector(".search")
search.addEventListener("keydown", async (event) => {
    if (event.key === "Enter"){
        const results = await (0,_apiWiki_js__WEBPACK_IMPORTED_MODULE_1__.searchResults)(event.target.value)
        console.log(results)
    }
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map