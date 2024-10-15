n.d(t, {
    v: function () {
        return I;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    i = n(512722),
    l = n.n(i),
    s = n(89057),
    o = n(987209),
    u = n(598),
    c = n(409813),
    d = n(456251),
    h = n(981631);
function I(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { blockedPayments: i, hasFetchedSkus: I, paymentSources: _, hasFetchedPaymentSources: f, application: m, skusById: E, selectedSkuId: S } = (0, u.usePaymentContext)(),
        { isGift: p } = (0, o.wD)(),
        [T, C] = a.useState(!0);
    return (a.useEffect(() => {
        let e = null != m;
        if (!!I && !!f && !!e) C(!1);
    }, [I, f, m]),
    a.useEffect(() => {
        if (T || i) return;
        l()(null != S, 'Expected selectedSkuId');
        let e = E[S];
        if (p && (null == e ? void 0 : e.productLine) === h.POd.COLLECTIBLES) {
            t(c.h8.GIFT_CUSTOMIZATION);
            return;
        }
        if (0 === Object.keys(_).length) {
            t(c.h8.ADD_PAYMENT_STEPS);
            return;
        }
        t(c.h8.REVIEW);
    }, [T, i, t, _, p, E, S]),
    T)
        ? (0, r.jsx)(d.Z, {})
        : i
          ? (0, r.jsx)(s.Vq, { onClose: n })
          : null;
}
