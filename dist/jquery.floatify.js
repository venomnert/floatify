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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(1);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * Floatify - A light-weight floating form label plugin for jQuery
 *
 * Copyright 2018, Mehdi Dehghani
 *
 * @author   Mehdi Dehghani (http://www.github.com/dehghani-mehdi)
 * @license  Licensed under MIT (https://github.com/dehghani-mehdi/floatify/blob/master/LICENSE)
 *
 */

(function ($, window, document, undefined) {
    var pluginName = 'floatify',
        p = {},
        defaults = {
        position: 'left',
        hGap: 10
    };

    p[pluginName] = function () {
        function _class(el, config) {
            _classCallCheck(this, _class);

            this.el = el;
            this.$el = $(el);

            if (/submit|checkbox|radio|hidden/.test(this.$el.attr('type'))) return;

            this.config = $.extend({}, defaults, config);

            this._defaults = defaults;

            this.init();
        }

        _createClass(_class, [{
            key: 'init',
            value: function init() {
                this.updateHTML();
                this.wireEvents();

                this.toggle(this.el);
            }
        }, {
            key: 'updateHTML',
            value: function updateHTML() {
                var ph = this.$el.attr('placeholder');

                if (typeof ph === 'undefined') return;

                // add id to input, if not exists
                if (typeof this.$el.attr('id') === 'undefined') this.$el.attr('id', ph.toLowerCase().replace(/ /g, '-'));

                // add floatify class to element parent
                this.$el.parent().addClass('floatify');
                this.$el.parent().addClass('floatify__' + this.config.position);

                // add float label
                var $label = $('<label />', {
                    class: 'floatify__label',
                    text: ph,
                    for: this.$el.attr('id'),
                    css: _defineProperty({}, 'margin-' + this.config.position, this.config.hGap || 0)
                }).insertBefore(this.$el);

                // remove placeholder attribute from element and add floatify__input class
                this.$el.addClass('floatify__input');
            }
        }, {
            key: 'toggle',
            value: function toggle(el) {
                var $this = $(el);

                if ($this.val().length) $this.parent().addClass('floatify__active');else $this.parent().removeClass('floatify__active');
            }
        }, {
            key: 'wireEvents',
            value: function wireEvents() {
                var _this = this;

                this.$el.on('input paste', function (e) {
                    return _this.toggle(e.currentTarget);
                });
            }
        }]);

        return _class;
    }();

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new p[pluginName](this, options));
            }
        });
    };
})(jQuery, window, document);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);