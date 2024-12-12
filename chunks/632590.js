r.d(n, {
    $p: function () {
        return a;
    },
    DL: function () {
        return s;
    },
    LI: function () {
        return u;
    },
    k$: function () {
        return o;
    },
    sq: function () {
        return l;
    }
});
var i = r(192379),
    a = function (e) {
        return Array.isArray(e) ? e[0] : e;
    },
    s = function (e) {
        if ('function' == typeof e) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            return e.apply(void 0, r);
        }
    },
    o = function (e, n) {
        if ('function' == typeof e) return s(e, n);
        null != e && (e.current = n);
    },
    l = function (e) {
        return e.reduce(function (e, n) {
            var r = n[0],
                i = n[1];
            return (e[r] = i), e;
        }, {});
    },
    u = 'undefined' != typeof window && window.document && window.document.createElement ? i.useLayoutEffect : i.useEffect;
