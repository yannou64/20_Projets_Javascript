/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/fonctions.js":
      /*!**************************!*\
  !*** ./src/fonctions.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ calculIMC: () => /* binding */ calculIMC,
          /* harmony export */ initialisation: () =>
            /* binding */ initialisation,
          /* harmony export */
        });
        // fonction d'initialisation des paramètres
        const initialisation = (poids, taille) => {
          poids.value = 0;
          taille.value = 0;
        };
        // fonction pour calculer l'imc
        const calculIMC = (poids, taille) => {
          return (
            (parseInt(poids.value) / parseInt(taille.value) ** 2) *
            10000
          ).toFixed(1);
        };

        /***/
      },

    /***/ "./src/variables.js":
      /*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ imcTableau: () => /* binding */ imcTableau,
          /* harmony export */
        });
        const imcTableau = [
          {
            imc: [0, 18.5],
            remarque: "Maigreur",
            color: "midnightBlue",
          },
          {
            imc: [18.5, 25],
            remarque: "Bonne santé",
            color: "green",
          },
          {
            imc: [25, 30],
            remarque: "Surpoid",
            color: "lightCoral",
          },
          {
            imc: [30, 35],
            remarque: "Obésité modéré",
            color: "orange",
          },
          {
            imc: [35, 40],
            remarque: "Obésité sévère",
            color: "red",
          },
          {
            imc: [40, 100],
            remarque: "Obésité morbide",
            color: "purple",
          },
        ];

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
  (() => {
    /*!***************************!*\
  !*** ./src/javascript.js ***!
  \***************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./variables */ "./src/variables.js");
    /* harmony import */ var _fonctions__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./fonctions */ "./src/fonctions.js");

    let form = document.getElementById("formulaire");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // On récupère nos éléments à consulter et modifier dans le dom
      const poids = document.getElementById("poids");
      const taille = document.getElementById("taille");
      const imcIntitule = document.getElementById("imcIntitule");
      const afficheImc = document.getElementById("imc");
      // controle des inputs
      if (
        poids.value <= 0 ||
        !Number.isInteger(parseInt(poids.value)) ||
        taille.value <= 0 ||
        !Number.isInteger(parseInt(taille.value))
      ) {
        alert("Erreur d'entrées");
        (0, _fonctions__WEBPACK_IMPORTED_MODULE_1__.initialisation)(
          poids,
          taille
        );
      }
      // Calcul de l'imc
      let imc = (0, _fonctions__WEBPACK_IMPORTED_MODULE_1__.calculIMC)(
        poids,
        taille
      );
      // Comparaison avec tableau imc
      for (let indicateur of _variables__WEBPACK_IMPORTED_MODULE_0__.imcTableau) {
        if (imc > indicateur.imc[0] && imc < indicateur.imc[1]) {
          // Afficher l'imc
          afficheImc.textContent = imc;
          // Afficher la remarque
          imcIntitule.textContent = indicateur.remarque;
          imcIntitule.style.color = indicateur.color;
        }
      }
    });
  })();

  /******/
})();
//# sourceMappingURL=bundle.js.map
