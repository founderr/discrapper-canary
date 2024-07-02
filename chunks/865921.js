t.d(n, {
    v: function () {
        return p;
    }
}), t(47120);
var i = t(735250), a = t(470079), r = t(512722), o = t.n(r), s = t(89057), l = t(987209), c = t(598), d = t(409813), u = t(456251), f = t(981631);
function p(e) {
    let {
            handleStepChange: n,
            handleClose: t
        } = e, {
            blockedPayments: r,
            hasFetchedSkus: p,
            paymentSources: _,
            hasFetchedPaymentSources: m,
            application: C,
            skusById: b,
            selectedSkuId: g
        } = (0, c.usePaymentContext)(), {isGift: v} = (0, l.wD)(), [x, h] = a.useState(!0);
    return (a.useEffect(() => {
        let e = null != C;
        if (!!p && !!m && !!e)
            h(!1);
    }, [
        p,
        m,
        C
    ]), a.useEffect(() => {
        if (x || r)
            return;
        o()(null != g, 'Expected selectedSkuId');
        let e = b[g];
        if (v && (null == e ? void 0 : e.productLine) === f.POd.COLLECTIBLES) {
            n(d.h8.GIFT_CUSTOMIZATION);
            return;
        }
        if (0 === Object.keys(_).length) {
            n(d.h8.ADD_PAYMENT_STEPS);
            return;
        }
        n(d.h8.REVIEW);
    }, [
        x,
        r,
        n,
        _,
        v,
        b,
        g
    ]), x) ? (0, i.jsx)(u.Z, {}) : r ? (0, i.jsx)(s.Vq, { onClose: t }) : null;
}
