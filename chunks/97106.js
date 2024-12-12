var i = r(347941),
    a = 1,
    s = Object.prototype.hasOwnProperty;
function o(e, n, r, o, l, u) {
    var c = r & a,
        d = (0, i.Z)(e),
        f = d.length;
    if (f != (0, i.Z)(n).length && !c) return !1;
    for (var _ = f; _--; ) {
        var h = d[_];
        if (!(c ? h in n : s.call(n, h))) return !1;
    }
    var p = u.get(e),
        m = u.get(n);
    if (p && m) return p == n && m == e;
    var g = !0;
    u.set(e, n), u.set(n, e);
    for (var E = c; ++_ < f; ) {
        var v = e[(h = d[_])],
            I = n[h];
        if (o) var T = c ? o(I, v, h, n, e, u) : o(v, I, h, e, n, u);
        if (!(void 0 === T ? v === I || l(v, I, r, o, u) : T)) {
            g = !1;
            break;
        }
        E || (E = 'constructor' == h);
    }
    if (g && !E) {
        var b = e.constructor,
            y = n.constructor;
        b != y && 'constructor' in e && 'constructor' in n && !('function' == typeof b && b instanceof b && 'function' == typeof y && y instanceof y) && (g = !1);
    }
    return u.delete(e), u.delete(n), g;
}
n.Z = o;
