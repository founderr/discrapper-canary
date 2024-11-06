t.d(n, {
    v: function () {
        return _;
    }
}),
    t(47120);
var o = t(200651),
    r = t(192379),
    i = t(512722),
    a = t.n(i),
    c = t(399606),
    d = t(89057),
    l = t(597688),
    s = t(987209),
    u = t(563132),
    p = t(409813),
    f = t(456251),
    b = t(981631);
function _(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { blockedPayments: i, hasFetchedSkus: _, paymentSources: h, hasFetchedPaymentSources: g, application: x, skusById: m, selectedSkuId: v } = (0, u.usePaymentContext)(),
        { isGift: C } = (0, s.wD)(),
        [k, S] = r.useState(!0),
        B = (0, c.e7)([l.Z], () => l.Z.isFetchingCategories);
    return (r.useEffect(() => {
        let e = null != x;
        if (!!_ && !!g && !!e) S(B);
    }, [_, g, x, B]),
    r.useEffect(() => {
        if (k || i) return;
        a()(null != v, 'Expected selectedSkuId');
        let e = m[v];
        if (C && (null == e ? void 0 : e.productLine) === b.POd.COLLECTIBLES) {
            n(p.h8.GIFT_CUSTOMIZATION);
            return;
        }
        if (0 === Object.keys(h).length) {
            n(p.h8.ADD_PAYMENT_STEPS);
            return;
        }
        n(p.h8.REVIEW);
    }, [k, i, n, h, C, m, v]),
    k)
        ? (0, o.jsx)(f.Z, {})
        : i
          ? (0, o.jsx)(d.Vq, { onClose: t })
          : null;
}
