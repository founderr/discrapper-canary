var i = r(345114),
    a = r(806159),
    s = r(738562),
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
        v = r & l ? new i.Z() : void 0;
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
                !(0, a.Z)(n, function (e, n) {
                    if (!(0, s.Z)(v, n) && (I === e || c(I, e, r, u, d))) return v.push(n);
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
n.Z = u;
