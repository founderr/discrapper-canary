e.d(t, {
    k: function () {
        return c;
    }
});
var r = e(385956),
    i = e(15701),
    u = e(359119),
    l = e(897769),
    a = e(403485),
    o = e(88101),
    d = e(276060);
function c(n, t) {
    var e;
    let c = (0, i.G)(n),
        s = (0, r.v)(n),
        f = (0, d.t)({ location: t }),
        E = (0, l.S)(n, u.pj.LIKELY_ATO),
        _ = (0, a.h)(n).length > 0,
        p = null != (0, o.P)(n),
        m = ((e = (null == E ? void 0 : E.expiry) != null && Date.parse(E.expiry) < Date.now()), e);
    if (!!f && !c && !s && !m && !_ && !p) return E;
}
