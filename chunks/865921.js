t.d(n, {
    v: function () {
        return x;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(399606),
    a = t(89057),
    s = t(597688),
    o = t(987209),
    d = t(563132),
    c = t(409813),
    u = t(48931),
    h = t(456251),
    m = t(981631);
function x(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { blockedPayments: x, hasFetchedSkus: f, paymentSources: v, hasFetchedPaymentSources: p, application: g, skusById: C, selectedSkuId: j } = (0, d.usePaymentContext)(),
        { isGift: I } = (0, o.wD)(),
        [T, E] = l.useState(!0),
        [N, S] = (0, r.Wu)([s.Z], () => [s.Z.isFetchingCategories, s.Z.error]);
    if (
        (l.useEffect(() => {
            let e = null != g;
            if (!!f && !!p && !!e) E(N);
        }, [f, p, g, N]),
        l.useEffect(() => {
            if (T || x || null == j) return;
            let e = C[j];
            if (I && (null == e ? void 0 : e.productLine) === m.POd.COLLECTIBLES) {
                n(c.h8.GIFT_CUSTOMIZATION);
                return;
            }
            if (0 === Object.keys(v).length) {
                n(c.h8.ADD_PAYMENT_STEPS);
                return;
            }
            n(c.h8.REVIEW);
        }, [T, x, n, v, I, C, j]),
        T)
    )
        return (0, i.jsx)(h.Z, {});
    if (x) return (0, i.jsx)(a.Vq, { onClose: t });
    if (null != S) return (0, i.jsx)(u.Z, { onClose: t });
    return null;
}
