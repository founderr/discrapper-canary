var r = n(347941),
    i = 1,
    a = Object.prototype.hasOwnProperty;
function o(e, t, n, o, s, l) {
    var u = n & i,
        c = (0, r.Z)(e),
        d = c.length;
    if (d != (0, r.Z)(t).length && !u) return !1;
    for (var _ = d; _--; ) {
        var E = c[_];
        if (!(u ? E in t : a.call(t, E))) return !1;
    }
    var f = l.get(e),
        h = l.get(t);
    if (f && h) return f == t && h == e;
    var p = !0;
    l.set(e, t), l.set(t, e);
    for (var m = u; ++_ < d; ) {
        var I = e[(E = c[_])],
            T = t[E];
        if (o) var g = u ? o(T, I, E, t, e, l) : o(I, T, E, e, t, l);
        if (!(void 0 === g ? I === T || s(I, T, n, o, l) : g)) {
            p = !1;
            break;
        }
        m || (m = 'constructor' == E);
    }
    if (p && !m) {
        var S = e.constructor,
            A = t.constructor;
        S != A && 'constructor' in e && 'constructor' in t && !('function' == typeof S && S instanceof S && 'function' == typeof A && A instanceof A) && (p = !1);
    }
    return l.delete(e), l.delete(t), p;
}
t.Z = o;
