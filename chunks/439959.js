r.d(n, {
    $0: function () {
        return i;
    },
    Tm: function () {
        return m;
    },
    oT: function () {
        return g;
    }
});
var i,
    a = r(47120);
var s = r(724458);
var o = r(653041);
var l = r(192379),
    u = r(399606),
    c = r(597688),
    d = r(1870),
    f = r(884697),
    _ = r(594174),
    h = r(74538),
    p = r(388032);
!(function (e) {
    (e.PURCHASE = 'purchase'), (e.PREMIUM_PURCHASE = 'premium_purchase'), (e.PREVIEW = 'preview'), (e.PREMIUM_PREVIEW = 'premium_preview');
})(i || (i = {}));
let m = { id: 'None' },
    g = { id: 'Shop' },
    E = () => {
        let e = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
            n = h.ZP.canUseCollectibles(e),
            r = (0, u.e7)([d.Z], () => d.Z.purchases),
            [i, a] = (0, u.Wu)([c.Z], () => [c.Z.categories, c.Z.products]);
        return (0, l.useMemo)(() => {
            let e = (0, f.iC)(r, i).reduce(
                (e, i) => {
                    let s = r.get(i.skuId),
                        o = (0, f.qS)(s);
                    return (o && 0 === e.premium_purchase.length && ((e.premium_purchase = e.premium_preview), (e.premium_preview = [])), o) ? (e.premium_purchase.push(i), e) : null != s ? (e.purchase.push(i), e) : !n && (0, f.G1)(a.get(i.skuId)) ? ((e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(i), e) : (e.preview.push(i), e);
                },
                {
                    purchase: [],
                    premium_purchase: [],
                    preview: [],
                    premium_preview: []
                }
            );
            return [
                {
                    section: 'purchase',
                    items: [m, g, ...e.purchase],
                    height: 12,
                    header: p.intl.string(p.t.JEimX1)
                },
                {
                    section: e.premium_purchase.length > 0 ? 'premium_purchase' : 'premium_preview',
                    items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
                    height: 12,
                    header: p.intl.string(p.t.DIJLzM)
                },
                {
                    section: 'preview',
                    items: e.preview,
                    height: 12,
                    header: p.intl.string(p.t.fmIfaG)
                }
            ].filter((e) => {
                let { items: n } = e;
                return n.length > 0;
            });
        }, [i, a, r, n]);
    };
n.ZP = E;
