n.d(t, {
    $0: function () {
        return i;
    },
    Tm: function () {
        return p;
    },
    oT: function () {
        return h;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var i,
    r,
    l = n(192379),
    o = n(392711),
    s = n(399606),
    a = n(597688),
    c = n(1870),
    d = n(884697),
    u = n(594174),
    f = n(74538),
    m = n(388032);
((r = i || (i = {})).PURCHASE = 'purchase'), (r.PREMIUM_PURCHASE = 'premium_purchase'), (r.PREVIEW = 'preview');
let p = { id: 'None' },
    h = { id: 'Shop' };
t.ZP = () => {
    let e = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        t = f.ZP.canUseCollectibles(e),
        n = (0, s.e7)([c.Z], () => c.Z.purchases),
        [i, r] = (0, s.Wu)([a.Z], () => [a.Z.categories, a.Z.products]);
    return (0, l.useMemo)(() => {
        let e = (0, o.uniqBy)([...(0, d.aj)(n), ...(0, d.XS)(i)], 'id').reduce(
            (e, i) => {
                let l = n.get(i.skuId);
                return (0, d.qS)(l) ? (e.premium_purchase.push(i), e) : null != l ? (e.purchase.push(i), e) : !t && (0, d.G1)(r.get(i.skuId)) ? (e.premium_purchase.push(i), e) : (e.preview.push(i), e);
            },
            {
                purchase: [],
                premium_purchase: [],
                preview: []
            }
        );
        return [
            {
                section: 'purchase',
                items: [p, h, ...e.purchase],
                height: 12,
                header: m.intl.string(m.t.JEimX1)
            },
            {
                section: 'premium_purchase',
                items: e.premium_purchase,
                height: 12,
                header: m.intl.string(m.t.DIJLzM)
            },
            {
                section: 'preview',
                items: e.preview,
                height: 12,
                header: m.intl.string(m.t.fmIfaG)
            }
        ].filter((e) => {
            let { items: t } = e;
            return t.length > 0;
        });
    }, [i, r, n, t]);
};
