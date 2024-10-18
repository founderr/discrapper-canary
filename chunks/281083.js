n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var r = n(553813),
    i = n.n(r),
    u = n(358085);
let l = { [u.PlatformTypes.WINDOWS]: { nvidia: '<=537.58.0 || >=546.31' } };
function o(e) {
    let t = l[(0, u.getPlatform)()];
    if (null == t) return !1;
    for (let n of Object.keys(e)) {
        let r = e[n],
            u = t[n];
        if (null == r || null == u || null != r.error) continue;
        let l = (function (e) {
            var t, n;
            return ''.concat(null !== (t = e.major) && void 0 !== t ? t : 0, '.').concat(null !== (n = e.minor) && void 0 !== n ? n : 0, '.0');
        })(r);
        if (!i().satisfies(l, u)) return !0;
    }
    return !1;
}
