n.d(t, {
    Z: function () {
        return p;
    }
});
var a = n(200651),
    r = n(192379),
    l = n(481060),
    i = n(881052),
    o = n(128069),
    s = n(63063),
    c = n(563132),
    u = n(409813),
    d = n(981631),
    m = n(388032);
function p(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: p } = e,
        { currencies: h, paymentError: A, purchaseError: E, purchasePreviewError: N, setSelectedPlanNotification: f } = (0, c.usePaymentContext)(),
        y = null;
    null != N ? (y = N) : null != A && null == (0, u.ly)(A) ? (y = A) : null != E ? (y = E) : null != t && (y = t);
    let _ = h.length > 1,
        P = null != y ? y.message : '';
    if (null != y && y instanceof i.HF && (y.code === o.SM.CARD_DECLINED && _ && (P += ' '.concat(m.intl.string(m.t.iWvwQU))), y.code === o.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (P = m.intl.string(m.t.ypuSd3)), y.code === d.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (P = m.intl.string(m.t.mXMmWF)), y.code === o.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (P = m.intl.string(m.t.mC1Fj4)), y.code === o.SM.INVALID_BILLING_ADDRESS)) {
        let e = m.intl.format(m.t.BPDKoK, { helpdeskArticle: s.Z.getArticleURL(d.BhN.BILLING).concat(d.Bjg.INVALID_BILLING_ADDRESS) });
        P = (0, a.jsxs)(a.Fragment, {
            children: [m.intl.string(m.t['yVIm/P']), ' ', e]
        });
    }
    return (r.useEffect(() => {
        null != y && f(null);
    }, [y, f]),
    null == y)
        ? null
        : (0, a.jsx)('div', {
              className: p,
              children: (0, a.jsx)(l.FormErrorBlock, {
                  ref: n,
                  children: P
              })
          });
}
