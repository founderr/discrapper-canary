n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(553813),
    r = n.n(i),
    l = n(358085);
let a = { [l.PlatformTypes.WINDOWS]: { nvidia: '<=537.58.0 || >=546.31' } };
function s(e) {
    let t = a[(0, l.getPlatform)()];
    if (null == t) return !1;
    for (let n of Object.keys(e)) {
        let i = e[n],
            l = t[n];
        if (null == i || null == l || null != i.error) continue;
        let a = (function (e) {
            var t, n;
            return ''.concat(null !== (t = e.major) && void 0 !== t ? t : 0, '.').concat(null !== (n = e.minor) && void 0 !== n ? n : 0, '.0');
        })(i);
        if (!r().satisfies(a, l)) return !0;
    }
    return !1;
}
