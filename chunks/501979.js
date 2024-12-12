var i = r(425561),
    a = r(393531),
    s = r(208529),
    o = 1,
    l = 2;
function u(e, n, r, u, c, d) {
    var f = r & o,
        _ = e.length,
        h = n.length;
    if (_ != h && !(f && h > _)) return !1;
    var p = d.get(e),
        m = d.get(n);
    if (p && m) return p == n && m == e;
    var g = -1,
        E = !0,
        v = r & l ? new i() : void 0;
    for (d.set(e, n), d.set(n, e); ++g < _; ) {
        var I = e[g],
            T = n[g];
        if (u) var b = f ? u(T, I, g, n, e, d) : u(I, T, g, e, n, d);
        if (void 0 !== b) {
            if (b) continue;
            E = !1;
            break;
        }
        if (v) {
            if (
                !a(n, function (e, n) {
                    if (!s(v, n) && (I === e || c(I, e, r, u, d))) return v.push(n);
                })
            ) {
                E = !1;
                break;
            }
        } else if (!(I === T || c(I, T, r, u, d))) {
            E = !1;
            break;
        }
    }
    return d.delete(e), d.delete(n), E;
}
e.exports = u;
