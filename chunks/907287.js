var n = r(990393),
    a = Object.prototype.hasOwnProperty;
e.exports = function (e, t, r, _, o, i) {
    var E = 1 & r,
        c = n(e),
        s = c.length;
    if (s != n(t).length && !E) return !1;
    for (var l = s; l--; ) {
        var u = c[l];
        if (!(E ? u in t : a.call(t, u))) return !1;
    }
    var I = i.get(e),
        R = i.get(t);
    if (I && R) return I == t && R == e;
    var A = !0;
    i.set(e, t), i.set(t, e);
    for (var N = E; ++l < s; ) {
        var T = e[(u = c[l])],
            d = t[u];
        if (_) var L = E ? _(d, T, u, t, e, i) : _(T, d, u, e, t, i);
        if (!(void 0 === L ? T === d || o(T, d, r, _, i) : L)) {
            A = !1;
            break;
        }
        N || (N = 'constructor' == u);
    }
    if (A && !N) {
        var f = e.constructor,
            O = t.constructor;
        f != O && 'constructor' in e && 'constructor' in t && !('function' == typeof f && f instanceof f && 'function' == typeof O && O instanceof O) && (A = !1);
    }
    return i.delete(e), i.delete(t), A;
};
