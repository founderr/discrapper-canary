t.d(a, {
    Z: function () {
        return d;
    }
});
var n = t(200651);
t(192379);
var s = t(481060),
    r = t(881052),
    l = t(128069),
    o = t(598),
    i = t(409813),
    c = t(981631),
    u = t(689938);
function d(e) {
    let { planError: a, purchaseErrorBlockRef: t, className: d } = e,
        { currencies: E, paymentError: _, purchaseError: A, purchasePreviewError: m } = (0, o.usePaymentContext)(),
        N = null;
    null != m ? (N = m) : null != _ && null == (0, i.ly)(_) ? (N = _) : null != A ? (N = A) : null != a && (N = a);
    let p = E.length > 1,
        h = null != N ? N.message : '';
    return (null != N && N instanceof r.HF && (N.code === l.SM.CARD_DECLINED && p && (h += ' '.concat(u.Z.Messages.BILLING_ERROR_TRY_ANOTHER)), N.code === l.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (h = u.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), N.code === c.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (h = u.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)), null == N)
        ? null
        : (0, n.jsx)('div', {
              className: d,
              children: (0, n.jsx)(s.FormErrorBlock, {
                  ref: t,
                  children: h
              })
          });
}
