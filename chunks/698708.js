"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("881052"),
  r = a("128069"),
  o = a("598"),
  i = a("409813"),
  u = a("981631"),
  c = a("689938");

function d(e) {
  let {
    planError: t,
    purchaseErrorBlockRef: a,
    className: d
  } = e, {
    currencies: p,
    paymentError: E,
    purchaseError: m,
    purchasePreviewError: S
  } = (0, o.usePaymentContext)(), A = null;
  null != S ? A = S : null != E && null == (0, i.errorToStep)(E) ? A = E : null != m ? A = m : null != t && (A = t);
  let f = p.length > 1,
    T = null != A ? A.message : "";
  return (null != A && A instanceof l.BillingError && (A.code === r.ErrorCodes.CARD_DECLINED && f && (T += " ".concat(c.default.Messages.BILLING_ERROR_TRY_ANOTHER)), A.code === r.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (T = c.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), A.code === u.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (T = c.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)), null == A) ? null : (0, n.jsx)("div", {
    className: d,
    children: (0, n.jsx)(s.FormErrorBlock, {
      ref: a,
      children: T
    })
  })
}