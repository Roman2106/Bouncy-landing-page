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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(1);

var _fade = __webpack_require__(14);

__webpack_require__(2);

var bouncy = document.getElementsByClassName("this-bouncy")[0];
var navBar = document.getElementsByClassName("nav-bar")[0];
var navButton = document.getElementsByClassName("nav-btn")[0];
var menu = document.getElementsByClassName("top-nav")[0];
var headerButtonToTop = document.getElementsByClassName("header-button-to-top")[0];
var btnThisBouncyReadMore = document.getElementsByClassName("this-bouncy-readMore")[0];
var readMoreText = document.getElementsByClassName("read-more-text")[0];
var imgIPad = document.getElementsByClassName("iPad")[0];
var firstDetailsLink = document.getElementsByClassName("firstDetailsLink")[0];
var creativeIdeasOne = document.getElementsByClassName("creativeIdeasOne")[0];
var secondDetailsLink = document.getElementsByClassName("secondDetailsLink")[0];
var creativeIdeasTwo = document.getElementsByClassName("creativeIdeasTwo")[0];
var thirdDetailsLink = document.getElementsByClassName("thirdDetailsLink")[0];
var creativeIdeasThree = document.getElementsByClassName("creativeIdeasThree")[0];

var closeCreativeIdeasOne = document.getElementsByClassName("closeCreativeIdeasOne")[0];
var closeCreativeIdeasTwo = document.getElementsByClassName("closeCreativeIdeasTwo")[0];
var closeCreativeIdeasThree = document.getElementsByClassName("closeCreativeIdeasThree")[0];

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;
  var sfScroll = document.body.scrollTop;
  (0, _menu.menuScroll)(scroll, sfScroll, bouncy, menu, headerButtonToTop);
};

navButton.onclick = function (e) {
  e.preventDefault();
  (0, _menu.menuShow)(navBar);
};

btnThisBouncyReadMore.onclick = function (e) {
  e.preventDefault();
  imgIPad.classList.toggle("margin");
  readMoreText.classList.toggle("collapsed");
};

firstDetailsLink.onclick = function (e) {
  e.preventDefault();
  (0, _fade.fadeIn)(creativeIdeasOne);
};

secondDetailsLink.onclick = function (e) {
  e.preventDefault();
  (0, _fade.fadeIn)(creativeIdeasTwo);
};

thirdDetailsLink.onclick = function (e) {
  e.preventDefault();
  (0, _fade.fadeIn)(creativeIdeasThree);
};

closeCreativeIdeasOne.onclick = function () {
  (0, _fade.fadeOut)(creativeIdeasOne);
};

closeCreativeIdeasTwo.onclick = function () {
  (0, _fade.fadeOut)(creativeIdeasTwo);
};

closeCreativeIdeasThree.onclick = function () {
  (0, _fade.fadeOut)(creativeIdeasThree);
};

/***/ }),

/***/ 1:
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
    navBar.style.top = "0";
  }
};

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var fadeIn = exports.fadeIn = function fadeIn(elem) {
  elem.style.opacity = 0;
  elem.style.display = "block";
  var tick = function tick() {
    elem.style.opacity = +elem.style.opacity + 0.05;
    if (+elem.style.opacity < 1) {
      window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 700);
    }
  };
  tick();
};

var fadeOut = exports.fadeOut = function fadeOut(elem) {
  elem.style.opacity = 1;
  elem.style.display = "block";
  var tick = function tick() {
    elem.style.opacity = +elem.style.opacity - 0.05;
    if (+elem.style.opacity > 0) {
      window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 700);
    } else {
      elem.style.display = "none";
    }
  };
  tick();
};

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });