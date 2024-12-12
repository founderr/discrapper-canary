var i = r(102074),
    a = r(153027),
    s = r(803607),
    o = 1,
    l = 2;
function u(e, n, r, u, c, d) {
    var f = r & o,
        _ = e.length,
        h = n.length;
    if (_ != h && !(f && h > _)) return !1;
    var p = d.get(e);
    if (p && d.get(n)) return p == n;
    var m = -1,
        g = !0,
        E = r & l ? new i() : void 0;
    for (d.set(e, n), d.set(n, e); ++m < _; ) {
        var v = e[m],
            I = n[m];
        if (u) var T = f ? u(I, v, m, n, e, d) : u(v, I, m, e, n, d);
        if (void 0 !== T) {
            if (T) continue;
            g = !1;
            break;
        }
        if (E) {
            if (
                !a(n, function (e, n) {
                    if (!s(E, n) && (v === e || c(v, e, r, u, d))) return E.push(n);
                })
            ) {
                g = !1;
                break;
            }
        } else if (!(v === I || c(v, I, r, u, d))) {
            g = !1;
            break;
        }
    }
    return d.delete(e), d.delete(n), g;
}
e.exports = u;
