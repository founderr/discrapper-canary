n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var r = n(553813),
    i = n.n(r),
    o = n(358085);
let a = { [o.PlatformTypes.WINDOWS]: { nvidia: '<=537.58.0 || >=546.31' } };
function s(e) {
    let t = a[(0, o.getPlatform)()];
    if (null == t) return !1;
    for (let n of Object.keys(e)) {
        let r = e[n],
            o = t[n];
        if (null == r || null == o || null != r.error) continue;
        let a = (function (e) {
            var t, n;
            return ''.concat(null !== (t = e.major) && void 0 !== t ? t : 0, '.').concat(null !== (n = e.minor) && void 0 !== n ? n : 0, '.0');
        })(r);
        if (!i().satisfies(a, o)) return !0;
    }
    return !1;
}
