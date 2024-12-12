r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(727785);
function a(e, n, r, s) {
    let { length: o } = r,
        l = s,
        u = n;
    if (0 === o) return 0;
    if (null == l) l = u;
    else if (l === u) return u;
    return (u += e === i.a8.UP ? -1 : 1) < 0 || u >= o ? a(e, u < 0 ? o : -1, r, l) : r[u].type === i.h8.HEADER ? a(e, u, r, l) : u;
}
