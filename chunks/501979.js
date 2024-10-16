var n = r(425561),
    a = r(393531),
    _ = r(208529);
e.exports = function (e, t, r, o, E, i) {
    var c = 1 & r,
        s = e.length,
        l = t.length;
    if (s != l && !(c && l > s)) return !1;
    var u = i.get(e),
        I = i.get(t);
    if (u && I) return u == t && I == e;
    var R = -1,
        N = !0,
        A = 2 & r ? new n() : void 0;
    for (i.set(e, t), i.set(t, e); ++R < s; ) {
        var T = e[R],
            d = t[R];
        if (o) var L = c ? o(d, T, R, t, e, i) : o(T, d, R, e, t, i);
        if (void 0 !== L) {
            if (L) continue;
            N = !1;
            break;
        }
        if (A) {
            if (
                !a(t, function (e, t) {
                    if (!_(A, t) && (T === e || E(T, e, r, o, i))) return A.push(t);
                })
            ) {
                N = !1;
                break;
            }
        } else if (!(T === d || E(T, d, r, o, i))) {
            N = !1;
            break;
        }
    }
    return i.delete(e), i.delete(t), N;
};
