t.d(n, {
    v: function () {
        return x;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    s = t(399606),
    a = t(89057),
    r = t(597688),
    o = t(987209),
    d = t(563132),
    c = t(409813),
    u = t(48931),
    h = t(456251),
    f = t(981631);
function x(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { blockedPayments: x, hasFetchedSkus: C, paymentSources: m, hasFetchedPaymentSources: g, application: p, skusById: S, selectedSkuId: j } = (0, d.usePaymentContext)(),
        { isGift: E } = (0, o.wD)(),
        [v, I] = l.useState(!0),
        [T, N] = (0, s.Wu)([r.Z], () => [r.Z.isFetchingCategories, r.Z.error]);
    if (
        (l.useEffect(() => {
            let e = null != p;
            if (!!C && !!g && !!e) I(T);
        }, [C, g, p, T]),
        l.useEffect(() => {
            if (v || x || null == j) return;
            let e = S[j];
            if (E && (null == e ? void 0 : e.productLine) === f.POd.COLLECTIBLES) {
                n(c.h8.GIFT_CUSTOMIZATION);
                return;
            }
            if (0 === Object.keys(m).length) {
                n(c.h8.ADD_PAYMENT_STEPS);
                return;
            }
            n(c.h8.REVIEW);
        }, [v, x, n, m, E, S, j]),
        v)
    )
        return (0, i.jsx)(h.Z, {});
    if (x) return (0, i.jsx)(a.Vq, { onClose: t });
    if (null != N) return (0, i.jsx)(u.Z, { onClose: t });
    return null;
}
