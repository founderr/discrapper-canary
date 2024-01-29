"use strict";
s.r(t), s.d(t, {
  PaypalStepFooter: function() {
    return l
  }
});
var n = s("37983");
s("884691");
var r = s("77078"),
  a = s("145131"),
  i = s("782340");
let l = e => {
  let {
    submitting: t,
    braintreeNonce: s,
    braintreeEmail: l,
    onPaypalContinue: o,
    onReopenPaypal: u,
    renderBackButton: d
  } = e, c = 0 !== l.length && null != s;
  return (0, n.jsxs)(r.ModalFooter, {
    justify: a.default.Justify.BETWEEN,
    direction: a.default.Direction.HORIZONTAL,
    children: [d(), (0, n.jsx)(r.Button, {
      submitting: t,
      color: c ? r.Button.Colors.BRAND : r.Button.Colors.PRIMARY,
      onClick: c ? o : u,
      children: c ? i.default.Messages.NEXT : i.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
    })]
  })
}