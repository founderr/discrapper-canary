var r = n(821164),
    i = 1,
    a = Object.prototype.hasOwnProperty;
function o(e, t, n, o, s, l) {
    var u = n & i,
        c = r(e),
        d = c.length;
    if (d != r(t).length && !u) return !1;
    for (var _ = d; _--; ) {
        var E = c[_];
        if (!(u ? E in t : a.call(t, E))) return !1;
    }
    var f = l.get(e);
    if (f && l.get(t)) return f == t;
    var h = !0;
    l.set(e, t), l.set(t, e);
    for (var p = u; ++_ < d; ) {
        var m = e[(E = c[_])],
            I = t[E];
        if (o) var T = u ? o(I, m, E, t, e, l) : o(m, I, E, e, t, l);
        if (!(void 0 === T ? m === I || s(m, I, n, o, l) : T)) {
            h = !1;
            break;
        }
        p || (p = 'constructor' == E);
    }
    if (h && !p) {
        var g = e.constructor,
            S = t.constructor;
        g != S && 'constructor' in e && 'constructor' in t && !('function' == typeof g && g instanceof g && 'function' == typeof S && S instanceof S) && (h = !1);
    }
    return l.delete(e), l.delete(t), h;
}
e.exports = o;
