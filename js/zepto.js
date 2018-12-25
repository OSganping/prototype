(function () {
    var zepto = {};
    var $ = function (selector) {
        return zepto.init(selector);
    };
    zepto.init = function (selector) {
        var slice = Array.prototype.slice;
        var dom = slice.call(document.querySelectorAll(selector));
        return new zepto.Z(dom, selector);
    };
    zepto.Z = function (dom, selector) {
        var i, len = dom.length ? dom.length : 0;
        for (i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.selector = selector || '';
        this.length = len || 0;
        this.dom = dom || '';
    };
    $.fn = {
        constructor: zepto.Z,
        css: function (val, key) {
            console.log('css')
            // do something
        }
    };
    zepto.Z.prototype = $.fn;
    window.$ = $;
})(window);
