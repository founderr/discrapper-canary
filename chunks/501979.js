var n = r(425561),
    a = r(393531),
    _ = r(208529);
e.exports = function (e, t, r, o, i, E) {
    var c = 1 & r,
        s = e.length,
        l = t.length;
    if (s != l && !(c && l > s)) return !1;
    var u = E.get(e),
        I = E.get(t);
    if (u && I) return u == t && I == e;
    var R = -1,
        N = !0,
        A = 2 & r ? new n() : void 0;
    for (E.set(e, t), E.set(t, e); ++R < s; ) {
        var T = e[R],
            d = t[R];
        if (o) var f = c ? o(d, T, R, t, e, E) : o(T, d, R, e, t, E);
        if (void 0 !== f) {
            if (f) continue;
            N = !1;
            break;
        }
        if (A) {
            if (
                !a(t, function (e, t) {
                    if (!_(A, t) && (T === e || i(T, e, r, o, E))) return A.push(t);
                })
            ) {
                N = !1;
                break;
            }
        } else if (!(T === d || i(T, d, r, o, E))) {
            N = !1;
            break;
        }
    }
    return E.delete(e), E.delete(t), N;
};
