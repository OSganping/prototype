(function (window) {

    var zepto = {}

    function Z(dom, selector) {
        var i, len = dom ? dom.length : 0
        for (i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }

    zepto.Z = function (dom, selector) {
        return new Z(dom, selector)
    }


    zepto.init = function (selector) {
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))
        // 使用es6语法将类数组转换为数组， 作用与上面一致
        var es6dom = Array.from(document.querySelectorAll(selector))
        return zepto.Z(dom, selector)
    }

    var $ = function (selector) {
        return zepto.init(selector)
    }

    var fn ={
            css: function (key, value) {
                alert('css')
            },
            html: function (value) {
                return '这是一个模拟的 html 函数'
            }
    }

    $.fn = {
        css: function (key, value) {
            alert('css')
        },
        html: function (value) {
            return '这是一个模拟的 html 函数'
        }
    }


    Z.prototype =fn

    window.$ = $
})(window)
