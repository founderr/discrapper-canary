n.d(t, {
    $0: function () {
        return r;
    },
    Tm: function () {
        return h;
    },
    oT: function () {
        return p;
    }
});
var r,
    i = n(47120);
var a = n(724458);
var o = n(653041);
var s = n(470079),
    l = n(399606),
    u = n(597688),
    c = n(1870),
    d = n(884697),
    _ = n(594174),
    E = n(74538),
    f = n(689938);
!(function (e) {
    (e.PURCHASE = 'purchase'), (e.PREMIUM_PURCHASE = 'premium_purchase'), (e.PREVIEW = 'preview'), (e.PREMIUM_PREVIEW = 'premium_preview');
})(r || (r = {}));
let h = { id: 'None' },
    p = { id: 'Shop' },
    m = () => {
        let e = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
            t = E.ZP.canUseCollectibles(e),
            n = (0, l.e7)([c.Z], () => c.Z.purchases),
            [r, i] = (0, l.Wu)([u.Z], () => [u.Z.categories, u.Z.products]);
        return (0, s.useMemo)(() => {
            let e = (0, d.iC)(n, r).reduce(
                (e, r) => {
                    let a = n.get(r.skuId),
                        o = (0, d.qS)(a);
                    return (o && 0 === e.premium_purchase.length && ((e.premium_purchase = e.premium_preview), (e.premium_preview = [])), o) ? (e.premium_purchase.push(r), e) : null != a ? (e.purchase.push(r), e) : !t && (0, d.G1)(i.get(r.skuId)) ? ((e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(r), e) : (e.preview.push(r), e);
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
                    items: [h, p, ...e.purchase],
                    height: 12,
                    header: f.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                },
                {
                    section: e.premium_purchase.length > 0 ? 'premium_purchase' : 'premium_preview',
                    items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
                    height: 12,
                    header: f.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                },
                {
                    section: 'preview',
                    items: e.preview,
                    height: 12,
                    header: f.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                }
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [r, i, n, t]);
    };
t.ZP = m;
