n.d(t, {
    $0: function () {
        return r;
    },
    Tm: function () {
        return _;
    },
    oT: function () {
        return p;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var r,
    i,
    a = n(192379),
    s = n(399606),
    o = n(597688),
    l = n(1870),
    u = n(884697),
    c = n(594174),
    d = n(74538),
    f = n(388032);
((i = r || (r = {})).PURCHASE = 'purchase'), (i.PREMIUM_PURCHASE = 'premium_purchase'), (i.PREVIEW = 'preview'), (i.PREMIUM_PREVIEW = 'premium_preview');
let _ = { id: 'None' },
    p = { id: 'Shop' };
t.ZP = () => {
    let e = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        t = d.ZP.canUseCollectibles(e),
        n = (0, s.e7)([l.Z], () => l.Z.purchases),
        [r, i] = (0, s.Wu)([o.Z], () => [o.Z.categories, o.Z.products]);
    return (0, a.useMemo)(() => {
        let e = (0, u.iC)(n, r).reduce(
            (e, r) => {
                let a = n.get(r.skuId),
                    s = (0, u.qS)(a);
                return (s && 0 === e.premium_purchase.length && ((e.premium_purchase = e.premium_preview), (e.premium_preview = [])), s) ? (e.premium_purchase.push(r), e) : null != a ? (e.purchase.push(r), e) : !t && (0, u.G1)(i.get(r.skuId)) ? ((e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(r), e) : (e.preview.push(r), e);
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
                items: [_, p, ...e.purchase],
                height: 12,
                header: f.intl.string(f.t.JEimX1)
            },
            {
                section: e.premium_purchase.length > 0 ? 'premium_purchase' : 'premium_preview',
                items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
                height: 12,
                header: f.intl.string(f.t.DIJLzM)
            },
            {
                section: 'preview',
                items: e.preview,
                height: 12,
                header: f.intl.string(f.t.fmIfaG)
            }
        ].filter((e) => {
            let { items: t } = e;
            return t.length > 0;
        });
    }, [r, i, n, t]);
};
