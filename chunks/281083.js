t.d(n, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var r = t(553813),
    i = t.n(r),
    l = t(358085);
let u = { [l.PlatformTypes.WINDOWS]: { nvidia: '<=537.58.0 || >=546.31' } };
function o(e) {
    let n = u[(0, l.getPlatform)()];
    if (null == n) return !1;
    for (let t of Object.keys(e)) {
        let r = e[t],
            l = n[t];
        if (null == r || null == l || null != r.error) continue;
        let u = (function (e) {
            var n, t;
            return ''.concat(null !== (n = e.major) && void 0 !== n ? n : 0, '.').concat(null !== (t = e.minor) && void 0 !== t ? t : 0, '.0');
        })(r);
        if (!i().satisfies(u, l)) return !0;
    }
    return !1;
}
