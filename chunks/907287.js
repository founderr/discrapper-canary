var n = r(990393),
    a = Object.prototype.hasOwnProperty;
e.exports = function (e, t, r, _, o, E) {
    var i = 1 & r,
        c = n(e),
        s = c.length;
    if (s != n(t).length && !i) return !1;
    for (var l = s; l--; ) {
        var u = c[l];
        if (!(i ? u in t : a.call(t, u))) return !1;
    }
    var I = E.get(e),
        R = E.get(t);
    if (I && R) return I == t && R == e;
    var N = !0;
    E.set(e, t), E.set(t, e);
    for (var A = i; ++l < s; ) {
        var T = e[(u = c[l])],
            d = t[u];
        if (_) var L = i ? _(d, T, u, t, e, E) : _(T, d, u, e, t, E);
        if (!(void 0 === L ? T === d || o(T, d, r, _, E) : L)) {
            N = !1;
            break;
        }
        A || (A = 'constructor' == u);
    }
    if (N && !A) {
        var f = e.constructor,
            O = t.constructor;
        f != O && 'constructor' in e && 'constructor' in t && !('function' == typeof f && f instanceof f && 'function' == typeof O && O instanceof O) && (N = !1);
    }
    return E.delete(e), E.delete(t), N;
};
