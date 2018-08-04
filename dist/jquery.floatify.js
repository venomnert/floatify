'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($, window, document, undefined) {
    var pluginName = 'floatify',
        p = {},

    // -- Globals (shared across all plugin instances)
    defaults = {
        position: 'left',
        hGap: null
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

//# sourceMappingURL=jquery.floatify.js.map