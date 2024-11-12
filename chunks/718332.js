var r = n(102074),
    i = n(153027),
    a = n(803607);
e.exports = function (e, t, n, s, o, l) {
    var u = 1 & n,
        c = e.length,
        d = t.length;
    if (c != d && !(u && d > c)) return !1;
    var f = l.get(e);
    if (f && l.get(t)) return f == t;
    var _ = -1,
        p = !0,
        h = 2 & n ? new r() : void 0;
    for (l.set(e, t), l.set(t, e); ++_ < c; ) {
        var m = e[_],
            g = t[_];
        if (s) var E = u ? s(g, m, _, t, e, l) : s(m, g, _, e, t, l);
        if (void 0 !== E) {
            if (E) continue;
            p = !1;
            break;
        }
        if (h) {
            if (
                !i(t, function (e, t) {
                    if (!a(h, t) && (m === e || o(m, e, n, s, l))) return h.push(t);
                })
            ) {
                p = !1;
                break;
            }
        } else if (!(m === g || o(m, g, n, s, l))) {
            p = !1;
            break;
        }
    }
    return l.delete(e), l.delete(t), p;
};
