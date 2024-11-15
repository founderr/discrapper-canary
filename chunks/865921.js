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
    s = t(987209),
    c = t(563132),
    d = t(409813),
    u = t(48931),
    p = t(456251),
    f = t(981631);
function m(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { blockedPayments: m, hasFetchedSkus: b, paymentSources: h, hasFetchedPaymentSources: g, application: x, skusById: _, selectedSkuId: v } = (0, c.usePaymentContext)(),
        { isGift: C } = (0, s.wD)(),
        [S, j] = r.useState(!0),
        [k, y] = (0, o.Wu)([l.Z], () => [l.Z.isFetchingCategories, l.Z.error]);
    if (
        (r.useEffect(() => {
            let e = null != x;
            if (!!b && !!g && !!e) j(k);
        }, [b, g, x, k]),
        r.useEffect(() => {
            if (S || m || null == v) return;
            let e = _[v];
            if (C && (null == e ? void 0 : e.productLine) === f.POd.COLLECTIBLES) {
                n(d.h8.GIFT_CUSTOMIZATION);
                return;
            }
            if (0 === Object.keys(h).length) {
                n(d.h8.ADD_PAYMENT_STEPS);
                return;
            }
            n(d.h8.REVIEW);
        }, [S, m, n, h, C, _, v]),
        S)
    )
        return (0, i.jsx)(p.Z, {});
    if (m) return (0, i.jsx)(a.Vq, { onClose: t });
    if (null != y) return (0, i.jsx)(u.Z, { onClose: t });
    return null;
}
