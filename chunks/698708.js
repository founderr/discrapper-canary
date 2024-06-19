t.d(a, {
  Z: function() {
    return d
  }
});
var n = t(735250);
t(470079);
var s = t(481060),
  l = t(881052),
  r = t(128069),
  o = t(598),
  i = t(409813),
  c = t(981631),
  u = t(689938);

function d(e) {
  let {
    planError: a,
    purchaseErrorBlockRef: t,
    className: d
  } = e, {
    currencies: E,
    paymentError: A,
    purchaseError: p,
    purchasePreviewError: _
  } = (0, o.usePaymentContext)(), N = null;
  null != _ ? N = _ : null != A && null == (0, i.ly)(A) ? N = A : null != p ? N = p : null != a && (N = a);
  let m = E.length > 1,
    h = null != N ? N.message : "";
  return (null != N && N instanceof l.HF && (N.code === r.SM.CARD_DECLINED && m && (h += " ".concat(u.Z.Messages.BILLING_ERROR_TRY_ANOTHER)), N.code === r.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (h = u.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), N.code === c.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (h = u.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)), null == N) ? null : (0, n.jsx)("div", {
    className: d,
    children: (0, n.jsx)(s.FormErrorBlock, {
      ref: t,
      children: h
    })
  })
}