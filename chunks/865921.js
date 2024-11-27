t.d(n, {
    v: function () {
        return m;
    }
}),
    t(47120);
var i = t(200651),
    r = t(192379),
    o = t(399606),
    a = t(89057),
    l = t(597688),
    c = t(987209),
    d = t(563132),
    s = t(409813),
    u = t(48931),
    f = t(456251),
    p = t(981631);
function m(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { blockedPayments: m, hasFetchedSkus: b, paymentSources: _, hasFetchedPaymentSources: x, application: g, skusById: h, selectedSkuId: C } = (0, d.usePaymentContext)(),
        { isGift: v } = (0, c.wD)(),
        [S, j] = r.useState(!0),
        [k, T] = (0, o.Wu)([l.Z], () => [l.Z.isFetchingCategories, l.Z.error]);
    if (
        (r.useEffect(() => {
            let e = null != g;
            if (!!b && !!x && !!e) j(k);
        }, [b, x, g, k]),
        r.useEffect(() => {
            if (S || m || null == C) return;
            let e = h[C];
            if (v && (null == e ? void 0 : e.productLine) === p.POd.COLLECTIBLES) {
                n(s.h8.GIFT_CUSTOMIZATION);
                return;
            }
            if (0 === Object.keys(_).length) {
                n(s.h8.ADD_PAYMENT_STEPS);
                return;
            }
            n(s.h8.REVIEW);
        }, [S, m, n, _, v, h, C]),
        S)
    )
        return (0, i.jsx)(f.Z, {});
    if (m) return (0, i.jsx)(a.Vq, { onClose: t });
    if (null != T) return (0, i.jsx)(u.Z, { onClose: t });
    return null;
}
