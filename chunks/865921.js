t.d(n, {
    v: function () {
        return h;
    }
}),
    t(47120);
var i = t(200651),
    r = t(192379),
    o = t(512722),
    a = t.n(o),
    l = t(399606),
    c = t(89057),
    s = t(597688),
    d = t(987209),
    u = t(563132),
    p = t(409813),
    f = t(48931),
    m = t(456251),
    b = t(981631);
function h(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { blockedPayments: o, hasFetchedSkus: h, paymentSources: g, hasFetchedPaymentSources: x, application: _, skusById: v, selectedSkuId: C } = (0, u.usePaymentContext)(),
        { isGift: S } = (0, d.wD)(),
        [k, j] = r.useState(!0),
        [y, T] = (0, l.Wu)([s.Z], () => [s.Z.isFetchingCategories, s.Z.error]);
    if (
        (r.useEffect(() => {
            let e = null != _;
            if (!!h && !!x && !!e) j(y);
        }, [h, x, _, y]),
        r.useEffect(() => {
            if (k || o || y || null != T) return;
            a()(null != C, 'Expected selectedSkuId');
            let e = v[C];
            if (S && (null == e ? void 0 : e.productLine) === b.POd.COLLECTIBLES) {
                n(p.h8.GIFT_CUSTOMIZATION);
                return;
            }
            if (0 === Object.keys(g).length) {
                n(p.h8.ADD_PAYMENT_STEPS);
                return;
            }
            n(p.h8.REVIEW);
        }, [k, o, n, g, S, v, C, T, y]),
        k)
    )
        return (0, i.jsx)(m.Z, {});
    if (o) return (0, i.jsx)(c.Vq, { onClose: t });
    if (null != T) return (0, i.jsx)(f.Z, { onClose: t });
    return null;
}
