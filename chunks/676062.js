r.d(n, {
    f: function () {
        return _;
    }
});
var i = r(192379),
    a = r(181034),
    s = r(668193);
function o(e, n) {
    return f(e) || d(e, n) || u(e, n) || l();
}
function l() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function u(e, n) {
    if (e) {
        if ('string' == typeof e) return c(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, n);
    }
}
function c(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
function d(e, n) {
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
function f(e) {
    if (Array.isArray(e)) return e;
}
function _(e) {
    var n = (0, a.N)().getMonitor(),
        r = o((0, s.r)(n, e), 2),
        l = r[0],
        u = r[1];
    return (
        (0, i.useEffect)(function () {
            return n.subscribeToOffsetChange(u);
        }),
        (0, i.useEffect)(function () {
            return n.subscribeToStateChange(u);
        }),
        l
    );
}
