/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(1);

__webpack_require__(2);

var bouncy = document.getElementsByClassName("this-bouncy")[0];
var navBar = document.getElementsByClassName("nav-bar")[0];
var navButton = document.getElementsByClassName("nav-btn")[0];
var menu = document.getElementsByClassName("top-nav")[0];
var headerButtonToTop = document.getElementsByClassName("header-button-to-top")[0];

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;
  var sfScroll = document.body.scrollTop;
  (0, _menu.menuScroll)(scroll, sfScroll, bouncy, menu, headerButtonToTop);
};

navButton.onclick = function (e) {
  e.preventDefault();
  (0, _menu.menuShow)(navBar);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var menuScroll = exports.menuScroll = function menuScroll(scroll, sfScroll, bouncy, menu, headerButtonToTop) {
  var offsetBouncy = bouncy.offsetTop;
  if (scroll > offsetBouncy || sfScroll > offsetBouncy) {
    menu.classList.add("fixed-menu");
    menu.style.height = "72px";
    headerButtonToTop.setAttribute("class", "anchor-to-top");
    headerButtonToTop.style.display = "block";
  } else if (scroll + 50 > offsetBouncy || sfScroll + 50 > offsetBouncy) {
    menu.style.height = "0px";
  } else {
    menu.classList.remove("fixed-menu");
    headerButtonToTop.classList.remove("anchor-to-top");
    headerButtonToTop.style.display = "none";
  }
};

var menuShow = exports.menuShow = function menuShow(navBar) {
  if (navBar.style.top === "0px") {
    navBar.style.top = "-400vh";
  } else {
    navBar.style.top = 0;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);