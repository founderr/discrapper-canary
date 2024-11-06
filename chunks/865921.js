n.d(t, {
    v: function () {
        return _;
    }
}),
    n(47120);
var o = n(200651),
    i = n(192379),
    r = n(512722),
    a = n.n(r),
    c = n(399606),
    d = n(89057),
    l = n(597688),
    s = n(987209),
    u = n(563132),
    f = n(409813),
    p = n(456251),
    b = n(981631);
function _(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { blockedPayments: r, hasFetchedSkus: _, paymentSources: h, hasFetchedPaymentSources: g, application: x, skusById: m, selectedSkuId: v } = (0, u.usePaymentContext)(),
        { isGift: C } = (0, s.wD)(),
        [k, S] = i.useState(!0),
        B = (0, c.e7)([l.Z], () => l.Z.isFetchingCategories);
    return (i.useEffect(() => {
        let e = null != x;
        if (!!_ && !!g && !!e) S(B);
    }, [_, g, x, B]),
    i.useEffect(() => {
        if (k || r) return;
        a()(null != v, 'Expected selectedSkuId');
        let e = m[v];
        if (C && (null == e ? void 0 : e.productLine) === b.POd.COLLECTIBLES) {
            t(f.h8.GIFT_CUSTOMIZATION);
            return;
        }
        if (0 === Object.keys(h).length) {
            t(f.h8.ADD_PAYMENT_STEPS);
            return;
        }
        t(f.h8.REVIEW);
    }, [k, r, t, h, C, m, v]),
    k)
        ? (0, o.jsx)(p.Z, {})
        : r
          ? (0, o.jsx)(d.Vq, { onClose: n })
          : null;
}
