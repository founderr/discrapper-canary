!(function () {
    var n = {}.hasOwnProperty;
    function r() {
        for (var e = '', n = 0; n < arguments.length; n++) {
            var r = arguments[n];
            r && (e = a(e, i(r)));
        }
        return e;
    }
    function i(e) {
        if ('string' == typeof e || 'number' == typeof e) return e;
        if ('object' != typeof e) return '';
        if (Array.isArray(e)) return r.apply(null, e);
        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes('[native code]')) return e.toString();
        var i = '';
        for (var s in e) n.call(e, s) && e[s] && (i = a(i, s));
        return i;
    }
    function a(e, n) {
        return n ? (e ? e + ' ' + n : e + n) : e;
    }
    e.exports
        ? ((r.default = r), (e.exports = r))
        : 'function' == typeof define && 'object' == typeof define.amd && define.amd
          ? define('classnames', [], function () {
                return r;
            })
          : (window.classNames = r);
})();
