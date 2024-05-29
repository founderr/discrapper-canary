"use strict";
s.r(t), s.d(t, {
  PaypalStepFooter: function() {
    return i
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  r = s("285952"),
  l = s("689938");
let i = e => {
  let {
    submitting: t,
    braintreeNonce: s,
    braintreeEmail: i,
    onPaypalContinue: o,
    onReopenPaypal: d,
    renderBackButton: u
  } = e, c = 0 !== i.length && null != s;
  return (0, n.jsxs)(a.ModalFooter, {
    justify: r.default.Justify.BETWEEN,
    direction: r.default.Direction.HORIZONTAL,
    children: [u(), (0, n.jsx)(a.Button, {
      submitting: t,
      color: c ? a.Button.Colors.BRAND : a.Button.Colors.PRIMARY,
      onClick: c ? o : d,
      children: c ? l.default.Messages.NEXT : l.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
    })]
  })
}