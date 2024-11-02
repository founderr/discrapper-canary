var r = n(821164),
    i = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, a, s, o) {
    var l = 1 & n,
        u = r(e),
        c = u.length;
    if (c != r(t).length && !l) return !1;
    for (var d = c; d--; ) {
        var f = u[d];
        if (!(l ? f in t : i.call(t, f))) return !1;
    }
    var _ = o.get(e);
    if (_ && o.get(t)) return _ == t;
    var h = !0;
    o.set(e, t), o.set(t, e);
    for (var p = l; ++d < c; ) {
        var m = e[(f = u[d])],
            g = t[f];
        if (a) var E = l ? a(g, m, f, t, e, o) : a(m, g, f, e, t, o);
        if (!(void 0 === E ? m === g || s(m, g, n, a, o) : E)) {
            h = !1;
            break;
        }
        p || (p = 'constructor' == f);
    }
    if (h && !p) {
        var v = e.constructor,
            I = t.constructor;
        v != I && 'constructor' in e && 'constructor' in t && !('function' == typeof v && v instanceof v && 'function' == typeof I && I instanceof I) && (h = !1);
    }
    return o.delete(e), o.delete(t), h;
};
