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
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.js */ "./src/loader.js");



function searchResults(toSearch){
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

/***/ "./src/article.js":
/*!************************!*\
  !*** ./src/article.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Article: () => (/* binding */ Article)
/* harmony export */ });
class Article {
    constructor(src){
        this.title = src.title
        this.pageid = src.pageid
        this.size = src.size
        this.snippet = src.snippet
        this.timestamp = src.timestamp
        this.wordcount = src.wordcount 
        this.article_element = ""
        this.article_presentation_html()     
    }

    article_presentation_html(){
        this.article_element = document.createElement("article")
        this.article_element.classList.add("quicksand")
        this.article_element.innerHTML = `
            <span class="article__titre">${this.title}</span>
            <a class="article__link" href="https://en.wikipedia.org/?curid=${this.pageid}">https://en.wikipedia.org/?curid=${this.pageid}</a>
            <span class="article__resume">${this.snippet} </span>
        `
    }
}



/***/ }),

/***/ "./src/loader.js":
/*!***********************!*\
  !*** ./src/loader.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loader: () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var _assets_loader_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/loader.png */ "./src/assets/loader.png");


const image_load = document.createElement("img");
image_load.src = _assets_loader_png__WEBPACK_IMPORTED_MODULE_0__;
image_load.alt = "loader";
image_load.width = 25;
image_load.height = 25;
class Loader {
    image = image_load

    charge(){
        const form_loader = document.querySelector(".form__loader")
        form_loader.appendChild(this.image) 
    }
    uncharge() {
        const form_loader = document.querySelector(".form__loader");
        if (form_loader && form_loader.contains(this.image)) {
            setTimeout(() => {
                form_loader.removeChild(this.image);
            }, 250); // ⏳ Attente de 2 secondes avant suppression
        } else {
            console.error("L'image n'est pas présente dans .form__loader !");
        }
    }
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
img_logo.style = "width: clamp(20px, 100vw, 250px)"




/***/ }),

/***/ "./src/assets/loader.png":
/*!*******************************!*\
  !*** ./src/assets/loader.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98cb0071c3ddf12a5f2f.png";

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
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.js */ "./src/loader.js");
/* harmony import */ var _article_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.js */ "./src/article.js");





/////////////
//  code dynamique 
////////////

// cancel submit
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
})

// "Enter" action on input
const search = document.querySelector(".form__search")

search.addEventListener("keydown", async (event) => {
    if (event.key === "Enter" && event.value != ""){
        initialisationResults()
        const isWaiting = new _loader_js__WEBPACK_IMPORTED_MODULE_2__.Loader
        isWaiting.charge()
        showResults(event)
        isWaiting.uncharge()
    }
})

/////////////
//  fonctions 
////////////

async function showResults(event){
    const results = await (0,_apiWiki_js__WEBPACK_IMPORTED_MODULE_1__.searchResults)(event.target.value)
    const article_element = document.querySelector(".results")
    for (const result of results){
        const article = new _article_js__WEBPACK_IMPORTED_MODULE_3__.Article(result)
        article_element.appendChild(article.article_element)
        
    }
}

function initialisationResults(){
    const results = document.querySelector(".results")
    results.innerHTML = ""
}

/////////////
//  code statique 
////////////
const logo = document.querySelector(".logo");
logo.appendChild(_logo_js__WEBPACK_IMPORTED_MODULE_0__.img_logo);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map