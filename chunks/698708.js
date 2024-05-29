"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  r = a("481060"),
  o = a("881052"),
  i = a("128069"),
  u = a("598"),
  c = a("409813"),
  d = a("981631"),
  p = a("689938"),
  E = a("222107");

function m(e) {
  let {
    planError: t,
    purchaseErrorBlockRef: a,
    className: s
  } = e, {
    currencies: m,
    paymentError: S,
    purchaseError: A
  } = (0, u.usePaymentContext)(), f = null;
  null != S && null == (0, c.errorToStep)(S) ? f = S : null != A ? f = A : null != t && (f = t);
  let T = m.length > 1,
    _ = null != f ? f.message : "";
  return (null != f && f instanceof o.BillingError && (f.code === i.ErrorCodes.CARD_DECLINED && T && (_ += " ".concat(p.default.Messages.BILLING_ERROR_TRY_ANOTHER)), f.code === i.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (_ = p.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), f.code === d.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (_ = p.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)), null == f) ? null : (0, n.jsx)("div", {
    className: l()(E.errorBlockWrapper, s),
    children: (0, n.jsx)(r.FormErrorBlock, {
      ref: a,
      children: _
    })
  })
}