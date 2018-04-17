/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/NumbersToWords/NumberToWord.ts":
/*!*************************************************!*\
  !*** ./src/main/NumbersToWords/NumberToWord.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Tens_1 = __webpack_require__(/*! ./Tens */ \"./src/main/NumbersToWords/Tens.ts\");\r\nvar Units_1 = __webpack_require__(/*! ./Units */ \"./src/main/NumbersToWords/Units.ts\");\r\nvar NumberToWord = /** @class */ (function () {\r\n    function NumberToWord() {\r\n    }\r\n    NumberToWord.NumberConvert = function (count) {\r\n        var output = \"\";\r\n        //convert the number into thounsands hundreds tens and units \r\n        var thousands = +count.toString().split(\"\").reverse().join(\"\")[3]; //\r\n        var hundreds = +count.toString().split(\"\").reverse().join(\"\")[2];\r\n        var tens = +count.toString().split(\"\").reverse().join(\"\")[1];\r\n        var units = +count.toString().split(\"\").reverse().join(\"\")[0];\r\n        var tens_and_units = (tens * 10) + units;\r\n        //  console.log(\"thousands =\" + thousands);\r\n        //  console.log(\"hundreds =\" + hundreds);\r\n        //  console.log(\"tens =\" + tens);\r\n        //  console.log(\"units =\" + units);\r\n        // handle the tens and units\r\n        var tens_and_units_text = \"\";\r\n        if (tens_and_units >= 11 && tens_and_units <= 19) {\r\n            // 11 through to 19\r\n            switch (tens_and_units) {\r\n                case 11:\r\n                    tens_and_units_text = \"eleven\";\r\n                    break;\r\n                case 12:\r\n                    tens_and_units_text = \"twelve\";\r\n                    break;\r\n                case 13:\r\n                    tens_and_units_text = \"thirteen\";\r\n                    break;\r\n                case 14:\r\n                    tens_and_units_text = \"fourteen\";\r\n                    break;\r\n                case 15:\r\n                    tens_and_units_text = \"fifteen\";\r\n                    break;\r\n                case 16:\r\n                    tens_and_units_text = \"sixteen\";\r\n                    break;\r\n                case 17:\r\n                    tens_and_units_text = \"seventeen\";\r\n                    break;\r\n                case 18:\r\n                    tens_and_units_text = \"eighteen\";\r\n                    break;\r\n                case 19:\r\n                    tens_and_units_text = \"nineteen\";\r\n                    break;\r\n            }\r\n        }\r\n        else {\r\n            // all the rest in tens and units\r\n            tens_and_units_text = Tens_1.Tens.tens(tens) + \" \" + Units_1.Units.units(units);\r\n        }\r\n        //handling the hundreds\r\n        var hundreds_text = \"\";\r\n        if (hundreds >= 1) {\r\n            hundreds_text = Units_1.Units.units(hundreds) + \" hundred\";\r\n        }\r\n        //handling the 'and'\r\n        if (hundreds > 0) {\r\n            if (tens > 0 || units > 0) {\r\n                output = hundreds_text + \" and \" + tens_and_units_text;\r\n            }\r\n            else {\r\n                output = hundreds_text;\r\n            }\r\n        }\r\n        else {\r\n            output = tens_and_units_text;\r\n        }\r\n        //handling the thousands\r\n        var thousands_text = \"\";\r\n        if (thousands >= 1) {\r\n            thousands_text = Units_1.Units.units(hundreds) + \" thousand\";\r\n        }\r\n        //handling the comma\r\n        if (thousands >= 1 && hundreds >= 1) {\r\n            //add the comma\r\n            output = thousands_text + \", \" + output;\r\n        }\r\n        return output;\r\n    };\r\n    return NumberToWord;\r\n}());\r\nexports.NumberToWord = NumberToWord;\r\n\n\n//# sourceURL=webpack:///./src/main/NumbersToWords/NumberToWord.ts?");

/***/ }),

/***/ "./src/main/NumbersToWords/NumbersToWords.ts":
/*!***************************************************!*\
  !*** ./src/main/NumbersToWords/NumbersToWords.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar NumberToWord_1 = __webpack_require__(/*! ./NumberToWord */ \"./src/main/NumbersToWords/NumberToWord.ts\");\r\nvar NumbersToWords = /** @class */ (function () {\r\n    function NumbersToWords(from, to) {\r\n        this.from = from;\r\n        this.to = to;\r\n    }\r\n    NumbersToWords.prototype.printCount = function () {\r\n        //loop through numbers in the range given\r\n        for (var currentNumber = this.from; currentNumber <= this.to; currentNumber++) {\r\n            console.log(currentNumber + \":= \" + NumberToWord_1.NumberToWord.NumberConvert(currentNumber));\r\n        }\r\n    };\r\n    return NumbersToWords;\r\n}());\r\nexports.NumbersToWords = NumbersToWords;\r\n\n\n//# sourceURL=webpack:///./src/main/NumbersToWords/NumbersToWords.ts?");

/***/ }),

/***/ "./src/main/NumbersToWords/Tens.ts":
/*!*****************************************!*\
  !*** ./src/main/NumbersToWords/Tens.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Tens = /** @class */ (function () {\r\n    function Tens() {\r\n    }\r\n    Tens.tens = function (count) {\r\n        var tens_text = \"\";\r\n        switch (count) {\r\n            case 1:\r\n                tens_text = \"ten\";\r\n                break;\r\n            case 2:\r\n                tens_text = \"twenty\";\r\n                break;\r\n            case 3:\r\n                tens_text = \"thirty\";\r\n                break;\r\n            case 4:\r\n                tens_text = \"forty\";\r\n                break;\r\n            case 5:\r\n                tens_text = \"fifty\";\r\n                break;\r\n            case 6:\r\n                tens_text = \"sixty\";\r\n                break;\r\n            case 7:\r\n                tens_text = \"seventy\";\r\n                break;\r\n            case 8:\r\n                tens_text = \"eighty\";\r\n                break;\r\n            case 9:\r\n                tens_text = \"ninety\";\r\n                break;\r\n            case 0:\r\n                tens_text = \"\";\r\n                break;\r\n        }\r\n        return tens_text;\r\n    };\r\n    return Tens;\r\n}());\r\nexports.Tens = Tens;\r\n\n\n//# sourceURL=webpack:///./src/main/NumbersToWords/Tens.ts?");

/***/ }),

/***/ "./src/main/NumbersToWords/Units.ts":
/*!******************************************!*\
  !*** ./src/main/NumbersToWords/Units.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Units = /** @class */ (function () {\r\n    function Units() {\r\n    }\r\n    Units.units = function (count) {\r\n        var units_text = \"\";\r\n        switch (count) {\r\n            case 1:\r\n                units_text = \"one\";\r\n                break;\r\n            case 2:\r\n                units_text = \"two\";\r\n                break;\r\n            case 3:\r\n                units_text = \"three\";\r\n                break;\r\n            case 4:\r\n                units_text = \"four\";\r\n                break;\r\n            case 5:\r\n                units_text = \"five\";\r\n                break;\r\n            case 6:\r\n                units_text = \"six\";\r\n                break;\r\n            case 7:\r\n                units_text = \"seven\";\r\n                break;\r\n            case 8:\r\n                units_text = \"eight\";\r\n                break;\r\n            case 9:\r\n                units_text = \"nine\";\r\n                break;\r\n        }\r\n        return units_text;\r\n    };\r\n    return Units;\r\n}());\r\nexports.Units = Units;\r\n\n\n//# sourceURL=webpack:///./src/main/NumbersToWords/Units.ts?");

/***/ }),

/***/ "./src/main/main.ts":
/*!**************************!*\
  !*** ./src/main/main.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar NumbersToWords_1 = __webpack_require__(/*! ./NumbersToWords/NumbersToWords */ \"./src/main/NumbersToWords/NumbersToWords.ts\");\r\nvar numbersToWords = new NumbersToWords_1.NumbersToWords(1, 10000);\r\nnumbersToWords.printCount();\r\n\n\n//# sourceURL=webpack:///./src/main/main.ts?");

/***/ })

/******/ });