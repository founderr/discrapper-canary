t.d(n, {
    v: function () {
        return _;
    }
}),
    t(47120);
var r = t(735250),
    i = t(470079),
    a = t(512722),
    s = t.n(a),
    o = t(89057),
    l = t(987209),
    c = t(598),
    u = t(409813),
    d = t(456251),
    I = t(981631);
function _(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { blockedPayments: a, hasFetchedSkus: _, paymentSources: m, hasFetchedPaymentSources: f, application: p, skusById: T, selectedSkuId: h } = (0, c.usePaymentContext)(),
        { isGift: N } = (0, l.wD)(),
        [E, C] = i.useState(!0);
    return (i.useEffect(() => {
        let e = null != p;
        if (!!_ && !!f && !!e) C(!1);
    }, [_, f, p]),
    i.useEffect(() => {
        if (E || a) return;
        s()(null != h, 'Expected selectedSkuId');
        let e = T[h];
        if (N && (null == e ? void 0 : e.productLine) === I.POd.COLLECTIBLES) {
            n(u.h8.GIFT_CUSTOMIZATION);
            return;
        }
        if (0 === Object.keys(m).length) {
            n(u.h8.ADD_PAYMENT_STEPS);
            return;
        }
        n(u.h8.REVIEW);
    }, [E, a, n, m, N, T, h]),
    E)
        ? (0, r.jsx)(d.Z, {})
        : a
          ? (0, r.jsx)(o.Vq, { onClose: t })
          : null;
}
