t.d(a, {
  Z: function() {
    return E
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

function E(e) {
  let {
    planError: a,
    purchaseErrorBlockRef: t,
    className: E
  } = e, {
    currencies: d,
    paymentError: A,
    purchaseError: _,
    purchasePreviewError: N
  } = (0, o.usePaymentContext)(), m = null;
  null != N ? m = N : null != A && null == (0, i.ly)(A) ? m = A : null != _ ? m = _ : null != a && (m = a);
  let p = d.length > 1,
    h = null != m ? m.message : "";
  return (null != m && m instanceof l.HF && (m.code === r.SM.CARD_DECLINED && p && (h += " ".concat(u.Z.Messages.BILLING_ERROR_TRY_ANOTHER)), m.code === r.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (h = u.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), m.code === c.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (h = u.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)), null == m) ? null : (0, n.jsx)("div", {
    className: E,
    children: (0, n.jsx)(s.FormErrorBlock, {
      ref: t,
      children: h
    })
  })
}