var r = n(102074),
    i = n(153027),
    a = n(803607),
    o = 1,
    s = 2;
function l(e, t, n, l, u, c) {
    var d = n & o,
        _ = e.length,
        E = t.length;
    if (_ != E && !(d && E > _)) return !1;
    var f = c.get(e);
    if (f && c.get(t)) return f == t;
    var h = -1,
        p = !0,
        m = n & s ? new r() : void 0;
    for (c.set(e, t), c.set(t, e); ++h < _; ) {
        var I = e[h],
            T = t[h];
        if (l) var g = d ? l(T, I, h, t, e, c) : l(I, T, h, e, t, c);
        if (void 0 !== g) {
            if (g) continue;
            p = !1;
            break;
        }
        if (m) {
            if (
                !i(t, function (e, t) {
                    if (!a(m, t) && (I === e || u(I, e, n, l, c))) return m.push(t);
                })
            ) {
                p = !1;
                break;
            }
        } else if (!(I === T || u(I, T, n, l, c))) {
            p = !1;
            break;
        }
    }
    return c.delete(e), c.delete(t), p;
}
e.exports = l;
