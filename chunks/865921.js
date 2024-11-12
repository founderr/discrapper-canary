n.d(t, {
    v: function () {
        return b;
    }
}),
    n(47120);
var o = n(200651),
    i = n(192379),
    r = n(399606),
    a = n(89057),
    c = n(597688),
    d = n(987209),
    l = n(563132),
    s = n(409813),
    u = n(48931),
    f = n(456251),
    p = n(981631);
function b(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { blockedPayments: b, hasFetchedSkus: _, paymentSources: g, hasFetchedPaymentSources: h, application: x, skusById: m, selectedSkuId: v } = (0, l.usePaymentContext)(),
        { isGift: C } = (0, d.wD)(),
        [k, S] = i.useState(!0),
        [B, O] = (0, r.Wu)([c.Z], () => [c.Z.isFetchingCategories, c.Z.error]);
    if (
        (i.useEffect(() => {
            let e = null != x;
            if (!!_ && !!h && !!e) S(B);
        }, [_, h, x, B]),
        i.useEffect(() => {
            if (k || b || null == v) return;
            let e = m[v];
            if (C && (null == e ? void 0 : e.productLine) === p.POd.COLLECTIBLES) {
                t(s.h8.GIFT_CUSTOMIZATION);
                return;
            }
            if (0 === Object.keys(g).length) {
                t(s.h8.ADD_PAYMENT_STEPS);
                return;
            }
            t(s.h8.REVIEW);
        }, [k, b, t, g, C, m, v]),
        k)
    )
        return (0, o.jsx)(f.Z, {});
    if (b) return (0, o.jsx)(a.Vq, { onClose: n });
    if (null != O) return (0, o.jsx)(u.Z, { onClose: n });
    return null;
}
