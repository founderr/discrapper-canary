n.d(t, {
    v: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    o = n(399606),
    a = n(89057),
    l = n(597688),
    c = n(987209),
    s = n(563132),
    d = n(409813),
    u = n(48931),
    f = n(456251),
    p = n(981631);
function m(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { blockedPayments: m, hasFetchedSkus: b, paymentSources: h, hasFetchedPaymentSources: g, application: x, skusById: _, selectedSkuId: v } = (0, s.usePaymentContext)(),
        { isGift: C } = (0, c.wD)(),
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
            if (C && (null == e ? void 0 : e.productLine) === p.POd.COLLECTIBLES) {
                t(d.h8.GIFT_CUSTOMIZATION);
                return;
            }
            if (0 === Object.keys(h).length) {
                t(d.h8.ADD_PAYMENT_STEPS);
                return;
            }
            t(d.h8.REVIEW);
        }, [S, m, t, h, C, _, v]),
        S)
    )
        return (0, i.jsx)(f.Z, {});
    if (m) return (0, i.jsx)(a.Vq, { onClose: n });
    if (null != y) return (0, i.jsx)(u.Z, { onClose: n });
    return null;
}
