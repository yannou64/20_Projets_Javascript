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

/***/ "./src/fonctions.js":
/*!**************************!*\
  !*** ./src/fonctions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   afficheResult: () => (/* binding */ afficheResult),\n/* harmony export */   calculResult: () => (/* binding */ calculResult),\n/* harmony export */   createQuestionnaire: () => (/* binding */ createQuestionnaire)\n/* harmony export */ });\n/* harmony import */ var _questions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.js */ \"./src/questions.js\");\n\n\nconst createQuestionnaire = () => {\n  const question_group = document.querySelector(\".question_group\");\n  _questions_js__WEBPACK_IMPORTED_MODULE_0__.questions.forEach((question, index) => {\n    {\n      const conteneur = document.createElement(\"div\");\n      conteneur.innerHTML = `\n                <div class=\"bloc_question\">\n                    <div class=\"row bloc_question__question\"> \n                        <span>${question.question}</span>\n                    </div>\n                    <div class=\"propositions\">\n                        <div class=\"row proposition\">\n                            <label for=\"${question.propositions[0]}\" >${\n        question.propositions[0]\n      }</label>\n                            <input type=\"radio\" id=\"question${index}-${0}\" name=\"${index}\" value=\"${\n        question.propositions[0]\n      }\">\n                        </div>\n                        <div class=\"row proposition\">\n                            <label for=\"${question.propositions[1]}\" >${\n        question.propositions[1]\n      }</label>\n                            <input type=\"radio\" id=\"question${index}-${1}\" name=\"${index}\" value=\"${\n        question.propositions[1]\n      }\">\n                        </div>\n                        <div class=\"row proposition\">   \n                            <label for=\"${question.propositions[2]}\">${\n        question.propositions[2]\n      }</label>\n                            <input type=\"radio\" id=\"question${index}-${2}\" name=\"${index}\" value=\"${\n        question.propositions[2]\n      }\">\n                        </div>\n                    </div>\n                </div>\n            `;\n      question_group.appendChild(conteneur);\n    }\n  });\n};\n\nconst calculResult = () => {\n  let score = 0;\n  const questionnaire = document.querySelectorAll(\".bloc_question\");\n  questionnaire.forEach((question, index) => {\n    const reponse = document.querySelector(`input[name=\"${index}\"]:checked`);\n    if (reponse) {\n      if (reponse.value === _questions_js__WEBPACK_IMPORTED_MODULE_0__.questions[index].reponse) {\n        score = score + 1;\n        question.style = \"background-color: green;\";\n      } else {\n         question.style = \"background-color: red;\"\n      }\n    } else {\n        question.style = \"background-color: red;\"\n    }\n  });\n  return score;\n};\n\nconst afficheResult = (score) => {\n  const encouragement = document.querySelector(\".results__encouragement\");\n  encouragement.innerHTML = `${_questions_js__WEBPACK_IMPORTED_MODULE_0__.results[score].encouragement}`;\n\n  const afficheScore = document.querySelector(\".results__score\");\n  afficheScore.innerHTML = `Score : ${score}/${_questions_js__WEBPACK_IMPORTED_MODULE_0__.questions.length}`\n\n  const advice = document.querySelector(\".results__advice\");\n  advice.innerHTML = `${_questions_js__WEBPACK_IMPORTED_MODULE_0__.results[score].advice}`\n};\n\n\n\n//# sourceURL=webpack://quizz/./src/fonctions.js?");

/***/ }),

/***/ "./src/questions.js":
/*!**************************!*\
  !*** ./src/questions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   questions: () => (/* binding */ questions),\n/* harmony export */   results: () => (/* binding */ results)\n/* harmony export */ });\nconst questions = [\n  {\n    question: \"Qui est sacré empereur de france le 02 décembre 1804 ?\",\n    propositions: [\"Clovis\", \"Abraham Lincoln\", \"Napoléon Bonaparte\"],\n    reponse: \"Napoléon Bonaparte\",\n  },\n  {\n    question: \"Quand la déclaration d'indépendance des Etats-Unis a-t-elle été votée ?\",\n    propositions: [\"4 juillet 1776\", \"18 avril 1856\", \"30 juin 1925\"],\n    reponse: \"4 juillet 1776\",\n  },\n  {\n    question: \"Quand a eu lieu la chute de l'empire romain d'occident ?\",\n    propositions: [\"15 ap J-C\", \"476 ap J-C\", \"740 av J-C\"],\n    reponse: \"476 ap J-C\",\n  },\n  {\n    question: \"Quelle est la capitale de la Slovénie\",\n    propositions: [\"Ljubjana\", \"Belgrade\", \"Bratislava\"],\n    reponse: \"Ljubjana\",\n  },\n  {\n    question: \"Combien d'habitants compte l'Irlande en 2020 ?\",\n    propositions: [\"1,365 Million\", \"21 Millions\", \"4,9 Millions\"],\n    reponse: \"4,9 Millions\",\n  }\n];\n\nconst results = [\n  {\n    score: 0,\n    encouragement: \"Peut mieux faire\",\n    advice: \"Retentez une autre réponse dans la case rouge, puis revalidez !\"\n  },\n  {\n    score: 1,\n    encouragement: \"Peut mieux faire\",\n    advice: \"Retentez une autre réponse dans la case rouge, puis revalidez !\"\n  },\n  {\n    score: 2,\n    encouragement: \"Il reste quelques erreurs\",\n    advice: \"Retentez une autre réponse dans la case rouge, puis revalidez !\"\n  },\n  {\n    score: 3,\n    encouragement: \"Encore un effort\",\n    advice: \"Retentez une autre réponse dans la case rouge, puis revalidez !\"\n  },\n  {\n    score: 4,\n    encouragement: \"Vous y êtes presque\",\n    advice: \"Retentez une autre réponse dans la case rouge, puis revalidez !\"\n  },\n  {\n    score: 5,\n    encouragement: \"Quelle culuture !\",\n    advice: \"Bravo c'est un sans faute\"\n  },\n]\n\n\n\n\n//# sourceURL=webpack://quizz/./src/questions.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fonctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonctions */ \"./src/fonctions.js\");\n\n\n// Création du questionnaire\n(0,_fonctions__WEBPACK_IMPORTED_MODULE_0__.createQuestionnaire)();\n\n// validation des résultat\nconst form = document.querySelector(\"form\")\nform.addEventListener(\"submit\", (event) => {\n    event.preventDefault()\n    const score = (0,_fonctions__WEBPACK_IMPORTED_MODULE_0__.calculResult)()\n    ;(0,_fonctions__WEBPACK_IMPORTED_MODULE_0__.afficheResult)(score)\n})\n\n\n//# sourceURL=webpack://quizz/./src/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;