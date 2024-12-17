n.d(t, {
    Z: function () {
        return m;
    }
});
var a = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(881052),
    i = n(128069),
    o = n(63063),
    c = n(563132),
    u = n(409813),
    d = n(981631),
    p = n(388032);
function m(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: m } = e,
        { currencies: h, paymentError: A, purchaseError: E, purchasePreviewError: N, setSelectedPlanNotification: y } = (0, c.usePaymentContext)(),
        f = null;
    null != N ? (f = N) : null != A && null == (0, u.ly)(A) ? (f = A) : null != E ? (f = E) : null != t && (f = t);
    let P = h.length > 1,
        _ = null != f ? f.message : '';
    if (null != f && f instanceof s.HF && (f.code === i.SM.CARD_DECLINED && P && (_ += ' '.concat(p.intl.string(p.t.iWvwQU))), f.code === i.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (_ = p.intl.string(p.t.ypuSd3)), f.code === d.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (_ = p.intl.string(p.t.mXMmWF)), f.code === i.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (_ = p.intl.string(p.t.mC1Fj4)), f.code === i.SM.INVALID_BILLING_ADDRESS)) {
        let e = p.intl.format(p.t.BPDKoK, { helpdeskArticle: o.Z.getArticleURL(d.BhN.BILLING).concat(d.Bjg.INVALID_BILLING_ADDRESS) });
        _ = (0, a.jsxs)(a.Fragment, {
            children: [p.intl.string(p.t['yVIm/P']), ' ', e]
        });
    }
    return (r.useEffect(() => {
        null != f && y(null);
    }, [f, y]),
    null == f)
        ? null
        : (0, a.jsx)('div', {
              className: m,
              children: (0, a.jsx)(l.FormErrorBlock, {
                  ref: n,
                  children: _
              })
          });
}
