var i = r(821164),
    a = 1,
    s = Object.prototype.hasOwnProperty;
function o(e, n, r, o, l, u) {
    var c = r & a,
        d = i(e),
        f = d.length;
    if (f != i(n).length && !c) return !1;
    for (var _ = f; _--; ) {
        var h = d[_];
        if (!(c ? h in n : s.call(n, h))) return !1;
    }
    var p = u.get(e);
    if (p && u.get(n)) return p == n;
    var m = !0;
    u.set(e, n), u.set(n, e);
    for (var g = c; ++_ < f; ) {
        var E = e[(h = d[_])],
            v = n[h];
        if (o) var I = c ? o(v, E, h, n, e, u) : o(E, v, h, e, n, u);
        if (!(void 0 === I ? E === v || l(E, v, r, o, u) : I)) {
            m = !1;
            break;
        }
        g || (g = 'constructor' == h);
    }
    if (m && !g) {
        var T = e.constructor,
            b = n.constructor;
        T != b && 'constructor' in e && 'constructor' in n && !('function' == typeof T && T instanceof T && 'function' == typeof b && b instanceof b) && (m = !1);
    }
    return u.delete(e), u.delete(n), m;
}
e.exports = o;
