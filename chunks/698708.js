n.d(t, {
    Z: function () {
        return d;
    }
});
var a = n(200651);
n(192379);
var r = n(481060),
    l = n(881052),
    i = n(128069),
    s = n(563132),
    o = n(409813),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: d } = e,
        { currencies: m, paymentError: p, purchaseError: h, purchasePreviewError: A } = (0, s.usePaymentContext)(),
        E = null;
    null != A ? (E = A) : null != p && null == (0, o.ly)(p) ? (E = p) : null != h ? (E = h) : null != t && (E = t);
    let f = m.length > 1,
        N = null != E ? E.message : '';
    return (null != E && E instanceof l.HF && (E.code === i.SM.CARD_DECLINED && f && (N += ' '.concat(u.intl.string(u.t.iWvwQU))), E.code === i.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (N = u.intl.string(u.t.ypuSd3)), E.code === c.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (N = u.intl.string(u.t.mXMmWF))), null == E)
        ? null
        : (0, a.jsx)('div', {
              className: d,
              children: (0, a.jsx)(r.FormErrorBlock, {
                  ref: n,
                  children: N
              })
          });
}
