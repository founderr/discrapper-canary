t.d(n, {
    v: function () {
        return g;
    }
}),
    t(47120);
var o = t(200651),
    i = t(192379),
    r = t(512722),
    a = t.n(r),
    c = t(399606),
    d = t(89057),
    l = t(597688),
    s = t(987209),
    u = t(563132),
    f = t(409813),
    p = t(48931),
    b = t(456251),
    _ = t(981631);
function g(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { blockedPayments: r, hasFetchedSkus: g, paymentSources: h, hasFetchedPaymentSources: x, application: m, skusById: v, selectedSkuId: C } = (0, u.usePaymentContext)(),
        { isGift: k } = (0, s.wD)(),
        [S, B] = i.useState(!0),
        [O, y] = (0, c.Wu)([l.Z], () => [l.Z.isFetchingCategories, l.Z.error]);
    if (
        (i.useEffect(() => {
            let e = null != m;
            if (!!g && !!x && !!e) B(O);
        }, [g, x, m, O]),
        i.useEffect(() => {
            if (S || r || O || null != y) return;
            a()(null != C, 'Expected selectedSkuId');
            let e = v[C];
            if (k && (null == e ? void 0 : e.productLine) === _.POd.COLLECTIBLES) {
                n(f.h8.GIFT_CUSTOMIZATION);
                return;
            }
            if (0 === Object.keys(h).length) {
                n(f.h8.ADD_PAYMENT_STEPS);
                return;
            }
            n(f.h8.REVIEW);
        }, [S, r, n, h, k, v, C, y, O]),
        S)
    )
        return (0, o.jsx)(b.Z, {});
    if (r) return (0, o.jsx)(d.Vq, { onClose: t });
    if (null != y) return (0, o.jsx)(p.Z, { onClose: t });
    return null;
}
