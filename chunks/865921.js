t.d(n, {
    v: function () {
        return f;
    }
}),
    t(47120);
var o = t(735250),
    r = t(470079),
    i = t(512722),
    a = t.n(i),
    c = t(89057),
    d = t(987209),
    l = t(598),
    s = t(409813),
    u = t(456251),
    p = t(981631);
function f(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { blockedPayments: i, hasFetchedSkus: f, paymentSources: b, hasFetchedPaymentSources: _, application: h, skusById: g, selectedSkuId: x } = (0, l.usePaymentContext)(),
        { isGift: m } = (0, d.wD)(),
        [v, C] = r.useState(!0);
    return (r.useEffect(() => {
        let e = null != h;
        if (!!f && !!_ && !!e) C(!1);
    }, [f, _, h]),
    r.useEffect(() => {
        if (v || i) return;
        a()(null != x, 'Expected selectedSkuId');
        let e = g[x];
        if (m && (null == e ? void 0 : e.productLine) === p.POd.COLLECTIBLES) {
            n(s.h8.GIFT_CUSTOMIZATION);
            return;
        }
        if (0 === Object.keys(b).length) {
            n(s.h8.ADD_PAYMENT_STEPS);
            return;
        }
        n(s.h8.REVIEW);
    }, [v, i, n, b, m, g, x]),
    v)
        ? (0, o.jsx)(u.Z, {})
        : i
          ? (0, o.jsx)(c.Vq, { onClose: t })
          : null;
}
