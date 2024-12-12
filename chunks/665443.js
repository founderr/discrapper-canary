!(function () {
    var n = {}.hasOwnProperty;
    function r() {
        for (var e = [], i = 0; i < arguments.length; i++) {
            var a = arguments[i];
            if (a) {
                var s = typeof a;
                if ('string' === s || 'number' === s) e.push(a);
                else if (Array.isArray(a)) {
                    if (a.length) {
                        var o = r.apply(null, a);
                        o && e.push(o);
                    }
                } else if ('object' === s) {
                    if (a.toString === Object.prototype.toString) for (var l in a) n.call(a, l) && a[l] && e.push(l);
                    else e.push(a.toString());
                }
            }
        }
        return e.join(' ');
    }
    e.exports
        ? ((r.default = r), (e.exports = r))
        : 'function' == typeof define && 'object' == typeof define.amd && define.amd
          ? define('classnames', [], function () {
                return r;
            })
          : (window.classNames = r);
})();
