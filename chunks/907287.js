var n = r(990393),
    a = Object.prototype.hasOwnProperty;
e.exports = function (e, t, r, _, o, i) {
    var E = 1 & r,
        c = n(e),
        s = c.length;
    if (s != n(t).length && !E) return !1;
    for (var I = s; I--; ) {
        var u = c[I];
        if (!(E ? u in t : a.call(t, u))) return !1;
    }
    var l = i.get(e),
        R = i.get(t);
    if (l && R) return l == t && R == e;
    var A = !0;
    i.set(e, t), i.set(t, e);
    for (var T = E; ++I < s; ) {
        var N = e[(u = c[I])],
            d = t[u];
        if (_) var O = E ? _(d, N, u, t, e, i) : _(N, d, u, e, t, i);
        if (!(void 0 === O ? N === d || o(N, d, r, _, i) : O)) {
            A = !1;
            break;
        }
        T || (T = 'constructor' == u);
    }
    if (A && !T) {
        var p = e.constructor,
            f = t.constructor;
        p != f && 'constructor' in e && 'constructor' in t && !('function' == typeof p && p instanceof p && 'function' == typeof f && f instanceof f) && (A = !1);
    }
    return i.delete(e), i.delete(t), A;
};
