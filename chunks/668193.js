r.d(n, {
    r: function () {
        return h;
    }
});
var i = r(595490),
    a = r.n(i),
    s = r(192379),
    o = r(89540);
function l(e, n) {
    return _(e) || f(e, n) || c(e, n) || u();
}
function u() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function c(e, n) {
    if (e) {
        if ('string' == typeof e) return d(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, n);
    }
}
function d(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
function f(e, n) {
    var r,
        i,
        a = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (null != a) {
        var s = [],
            o = !0,
            l = !1;
        try {
            for (a = a.call(e); !(o = (r = a.next()).done) && (s.push(r.value), !n || s.length !== n); o = !0);
        } catch (e) {
            (l = !0), (i = e);
        } finally {
            try {
                !o && null != a.return && a.return();
            } finally {
                if (l) throw i;
            }
        }
        return s;
    }
}
function _(e) {
    if (Array.isArray(e)) return e;
}
function h(e, n, r) {
    var i = l(
            (0, s.useState)(function () {
                return n(e);
            }),
            2
        ),
        u = i[0],
        c = i[1],
        d = (0, s.useCallback)(
            function () {
                var i = n(e);
                !a()(u, i) && (c(i), r && r());
            },
            [u, e, r]
        );
    return (0, o.L)(d), [u, d];
}
