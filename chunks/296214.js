"use strict";
a.r(t), a.d(t, {
  PaymentRequestStepBody: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  r = a("481060"),
  o = a("912454"),
  i = a("689938"),
  u = a("933082");
let c = e => {
  let {
    className: t,
    submitting: a,
    stripePaymentMethod: s
  } = e, {
    card: c
  } = null != s ? s : {}, d = null != c ? o.default.getType(c.brand) : o.default.Types.UNKNOWN;
  return (0, n.jsx)(r.FormSection, {
    className: t,
    title: i.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
    children: (0, n.jsxs)("div", {
      className: u.cardNumberWrapper,
      children: [(0, n.jsx)(o.default, {
        className: l()(u.cardIcon, {
          [u.submitting]: a
        }),
        type: d
      }), (0, n.jsx)(r.TextInput, {
        value: a && null != c ? i.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_CREATING.format(c) : void 0,
        editable: !1,
        readOnly: !0,
        placeholder: i.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_LOADING,
        inputClassName: u.cardNumberInput
      })]
    })
  })
}