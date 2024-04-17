"use strict";
a.r(t), a.d(t, {
  CreditCardInformationBody: function() {
    return c
  },
  CreditCardInformationFooter: function() {
    return E
  }
});
var n = a("735250"),
  l = a("470079"),
  s = a("481060"),
  r = a("462566"),
  o = a("285952"),
  u = a("603421"),
  i = a("689938"),
  d = a("551249");
let c = e => {
    let {
      billingError: t,
      onCardInfoChange: a
    } = e, o = null != t && (null == t.code || (0, u.errorToStep)(t) === u.Steps.CREDIT_CARD_INFORMATION);
    return (0, n.jsxs)(l.Fragment, {
      children: [o ? (0, n.jsx)(s.FormErrorBlock, {
        className: d.errorBlock,
        children: i.default.Messages.BILLING_ERROR_SECTION_CARD
      }) : null, (0, n.jsx)(r.default, {
        onCardInfoChange: a,
        error: t
      })]
    })
  },
  E = e => {
    let {
      isCardInfoValid: t,
      submitting: a,
      renderBackButton: l,
      onCreditCardContinue: r
    } = e;
    return (0, n.jsxs)(s.ModalFooter, {
      justify: o.default.Justify.BETWEEN,
      direction: o.default.Direction.HORIZONTAL,
      children: [l(), (0, n.jsx)(s.Button, {
        type: "submit",
        disabled: !t,
        submitting: a,
        onClick: r,
        children: i.default.Messages.NEXT
      })]
    })
  }