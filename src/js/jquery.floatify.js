(function ($, window, document, undefined) {
    const pluginName = 'floatify',
        p = {},
        // -- Globals (shared across all plugin instances)
        defaults = {
            position: 'left',
            hGap: null
        };

    p[pluginName] = class {
        constructor(el, config) {
            this.el = el;
            this.$el = $(el);

            if (/submit|checkbox|radio|hidden/.test(this.$el.attr('type'))) return;

            this.config = $.extend({}, defaults, config);

            this._defaults = defaults;

            this.init();
        }

        init() {
            this.updateHTML();
            this.wireEvents();

            this.toggle(this.el);
        }

        updateHTML() {
            let ph = this.$el.attr('placeholder');

            // add id to input, if not exists
            if (typeof this.$el.attr('id') === 'undefined') this.$el.attr('id', ph.toLowerCase().replace(/ /g, '-'));

            // add floatify class to element parent
            this.$el.parent().addClass('floatify');
            this.$el.parent().addClass('floatify__' + this.config.position);

            // add float label
            let $label = $('<label />', {
                class: 'floatify__label',
                text: ph,
                for: this.$el.attr('id'),
                css: {
                    ['margin-' + this.config.position]: this.config.hGap || 0
                }
            }).insertBefore(this.$el);

            // remove placeholder attribute from element and add floatify__input class
            this.$el.addClass('floatify__input');
        }

        toggle(el) {
            let $this = $(el);

            if ($this.val().length) $this.parent().addClass('floatify__active');
            else $this.parent().removeClass('floatify__active');
        }

        wireEvents() {
            this.$el.on('input paste', (e) => this.toggle(e.currentTarget));
        }
    }

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new p[pluginName](this, options));
            }
        });
    };
})(jQuery, window, document);