var n = r(425561),
    a = r(393531),
    _ = r(208529);
e.exports = function (e, t, r, o, i, E) {
    var c = 1 & r,
        s = e.length,
        I = t.length;
    if (s != I && !(c && I > s)) return !1;
    var u = E.get(e),
        l = E.get(t);
    if (u && l) return u == t && l == e;
    var R = -1,
        A = !0,
        T = 2 & r ? new n() : void 0;
    for (E.set(e, t), E.set(t, e); ++R < s; ) {
        var N = e[R],
            d = t[R];
        if (o) var O = c ? o(d, N, R, t, e, E) : o(N, d, R, e, t, E);
        if (void 0 !== O) {
            if (O) continue;
            A = !1;
            break;
        }
        if (T) {
            if (
                !a(t, function (e, t) {
                    if (!_(T, t) && (N === e || i(N, e, r, o, E))) return T.push(t);
                })
            ) {
                A = !1;
                break;
            }
        } else if (!(N === d || i(N, d, r, o, E))) {
            A = !1;
            break;
        }
    }
    return E.delete(e), E.delete(t), A;
};
