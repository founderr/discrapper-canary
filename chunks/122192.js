"use strict";
a.r(t), a.d(t, {
  CreditCardInformationBody: function() {
    return c
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  r = a("462566");
a("285952");
var o = a("603421"),
  i = a("689938"),
  u = a("868312");
let c = e => {
  let {
    billingError: t,
    onCardInfoChange: a
  } = e, c = null != t && (null == t.code || (0, o.errorToStep)(t) === o.Steps.CREDIT_CARD_INFORMATION);
  return (0, n.jsxs)(s.Fragment, {
    children: [c ? (0, n.jsx)(l.FormErrorBlock, {
      className: u.errorBlock,
      children: i.default.Messages.BILLING_ERROR_SECTION_CARD
    }) : null, (0, n.jsx)(r.default, {
      onCardInfoChange: a,
      error: t
    })]
  })
}