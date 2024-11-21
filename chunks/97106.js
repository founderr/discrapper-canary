var r = n(347941),
    i = Object.prototype.hasOwnProperty;
t.Z = function (e, t, n, a, s, o) {
    var l = 1 & n,
        u = (0, r.Z)(e),
        c = u.length;
    if (c != (0, r.Z)(t).length && !l) return !1;
    for (var d = c; d--; ) {
        var f = u[d];
        if (!(l ? f in t : i.call(t, f))) return !1;
    }
    var _ = o.get(e),
        p = o.get(t);
    if (_ && p) return _ == t && p == e;
    var h = !0;
    o.set(e, t), o.set(t, e);
    for (var m = l; ++d < c; ) {
        var g = e[(f = u[d])],
            E = t[f];
        if (a) var v = l ? a(E, g, f, t, e, o) : a(g, E, f, e, t, o);
        if (!(void 0 === v ? g === E || s(g, E, n, a, o) : v)) {
            h = !1;
            break;
        }
        m || (m = 'constructor' == f);
    }
    if (h && !m) {
        var b = e.constructor,
            I = t.constructor;
        b != I && 'constructor' in e && 'constructor' in t && !('function' == typeof b && b instanceof b && 'function' == typeof I && I instanceof I) && (h = !1);
    }
    return o.delete(e), o.delete(t), h;
};
