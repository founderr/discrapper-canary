n.d(t, {
    $0: function () {
        return r;
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
var r,
    i,
    l = n(192379),
    s = n(392711),
    o = n(399606),
    c = n(597688),
    a = n(1870),
    d = n(884697),
    u = n(594174),
    f = n(74538),
    m = n(388032);
((i = r || (r = {})).PURCHASE = 'purchase'), (i.PREMIUM_PURCHASE = 'premium_purchase'), (i.PREVIEW = 'preview');
let p = { id: 'None' },
    h = { id: 'Shop' };
t.ZP = () => {
    let e = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        t = f.ZP.canUseCollectibles(e),
        n = (0, o.e7)([a.Z], () => a.Z.purchases),
        [r, i] = (0, o.Wu)([c.Z], () => [c.Z.categories, c.Z.products]);
    return (0, l.useMemo)(() => {
        let e = (0, s.uniqBy)([...(0, d.aj)(n), ...(0, d.XS)(r)], 'id').reduce(
            (e, r) => {
                let l = n.get(r.skuId);
                return (0, d.qS)(l) ? (e.premium_purchase.push(r), e) : null != l ? (e.purchase.push(r), e) : !t && (0, d.G1)(i.get(r.skuId)) ? (e.premium_purchase.push(r), e) : (e.preview.push(r), e);
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
    }, [r, i, n, t]);
};
