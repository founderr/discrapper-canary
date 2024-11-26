n.d(t, {
    Z: function () {
        return m;
    }
});
var a = n(200651);
n(192379);
var r = n(481060),
    l = n(881052),
    i = n(128069),
    s = n(63063),
    o = n(563132),
    c = n(409813),
    u = n(981631),
    d = n(388032);
function m(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: m } = e,
        { currencies: p, paymentError: h, purchaseError: A, purchasePreviewError: E } = (0, o.usePaymentContext)(),
        N = null;
    null != E ? (N = E) : null != h && null == (0, c.ly)(h) ? (N = h) : null != A ? (N = A) : null != t && (N = t);
    let f = p.length > 1,
        _ = null != N ? N.message : '';
    if (null != N && N instanceof l.HF && (N.code === i.SM.CARD_DECLINED && f && (_ += ' '.concat(d.intl.string(d.t.iWvwQU))), N.code === i.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (_ = d.intl.string(d.t.ypuSd3)), N.code === u.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (_ = d.intl.string(d.t.mXMmWF)), N.code === i.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (_ = d.intl.string(d.t.mC1Fj4)), N.code === i.SM.INVALID_BILLING_ADDRESS)) {
        let e = d.intl.format(d.t.BPDKoK, { helpdeskArticle: s.Z.getArticleURL(u.BhN.BILLING).concat(u.Bjg.INVALID_BILLING_ADDRESS) });
        _ = (0, a.jsxs)(a.Fragment, {
            children: [d.intl.string(d.t['yVIm/P']), ' ', e]
        });
    }
    return null == N
        ? null
        : (0, a.jsx)('div', {
              className: m,
              children: (0, a.jsx)(r.FormErrorBlock, {
                  ref: n,
                  children: _
              })
          });
}
