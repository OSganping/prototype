(function () {
    var jquery = {}
    // 初始化$，并实例化
    var $ = function (selector) {
        return new jquery.init(selector)
    }
    jquery.init = function (selector) {
        // 将类数组转换为数组格式
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))
        var i, len = dom ? dom.length : 0
        for (i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.selector = selector || '';
        this.length = len || 0;
        this.dom = dom || '';
    }
    // 扩展对象（可以自定义的插件：这样写更易于维护，统一管理。并且暴露在$上面，减少window全局变量）
    $.fn = {
        constructor: jquery.init,
        css: function (val, key) {
            // do something
        }
    }
    // 将扩展的对象放到构造函数的原型中
    jquery.init.prototype = $.fn
    // 挂载到Window
    window.$ = $
})(window)
