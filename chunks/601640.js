n.d(t, {
    r: function () {
        return E;
    }
});
var r = n(595490),
    i = n.n(r),
    a = n(470079),
    o = n(175806);
function s(e, t) {
    return _(e) || d(e, t) || u(e, t) || l();
}
function l() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function u(e, t) {
    if (e) {
        if ('string' == typeof e) return c(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
    }
}
function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function d(e, t) {
    var n,
        r,
        i = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (null != i) {
        var a = [],
            o = !0,
            s = !1;
        try {
            for (i = i.call(e); !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); o = !0);
        } catch (e) {
            (s = !0), (r = e);
        } finally {
            try {
                !o && null != i.return && i.return();
            } finally {
                if (s) throw r;
            }
        }
        return a;
    }
}
function _(e) {
    if (Array.isArray(e)) return e;
}
function E(e, t, n) {
    var r = s(
            (0, a.useState)(function () {
                return t(e);
            }),
            2
        ),
        l = r[0],
        u = r[1],
        c = (0, a.useCallback)(
            function () {
                var r = t(e);
                !i()(l, r) && (u(r), n && n());
            },
            [l, e, n]
        );
    return (0, o.L)(c), [l, c];
}
