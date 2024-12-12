var a = r(990393),
    n = Object.prototype.hasOwnProperty;
e.exports = function (e, t, r, _, o, E) {
    var i = 1 & r,
        c = a(e),
        s = c.length;
    if (s != a(t).length && !i) return !1;
    for (var l = s; l--; ) {
        var I = c[l];
        if (!(i ? I in t : n.call(t, I))) return !1;
    }
    var u = E.get(e),
        R = E.get(t);
    if (u && R) return u == t && R == e;
    var A = !0;
    E.set(e, t), E.set(t, e);
    for (var T = i; ++l < s; ) {
        var N = e[(I = c[l])],
            d = t[I];
        if (_) var f = i ? _(d, N, I, t, e, E) : _(N, d, I, e, t, E);
        if (!(void 0 === f ? N === d || o(N, d, r, _, E) : f)) {
            A = !1;
            break;
        }
        T || (T = 'constructor' == I);
    }
    if (A && !T) {
        var O = e.constructor,
            L = t.constructor;
        O != L && 'constructor' in e && 'constructor' in t && !('function' == typeof O && O instanceof O && 'function' == typeof L && L instanceof L) && (A = !1);
    }
    return E.delete(e), E.delete(t), A;
};
