var a = r(425561),
    n = r(393531),
    _ = r(208529);
e.exports = function (e, t, r, o, E, i) {
    var c = 1 & r,
        s = e.length,
        l = t.length;
    if (s != l && !(c && l > s)) return !1;
    var I = i.get(e),
        u = i.get(t);
    if (I && u) return I == t && u == e;
    var R = -1,
        A = !0,
        T = 2 & r ? new a() : void 0;
    for (i.set(e, t), i.set(t, e); ++R < s; ) {
        var N = e[R],
            d = t[R];
        if (o) var f = c ? o(d, N, R, t, e, i) : o(N, d, R, e, t, i);
        if (void 0 !== f) {
            if (f) continue;
            A = !1;
            break;
        }
        if (T) {
            if (
                !n(t, function (e, t) {
                    if (!_(T, t) && (N === e || E(N, e, r, o, i))) return T.push(t);
                })
            ) {
                A = !1;
                break;
            }
        } else if (!(N === d || E(N, d, r, o, i))) {
            A = !1;
            break;
        }
    }
    return i.delete(e), i.delete(t), A;
};
