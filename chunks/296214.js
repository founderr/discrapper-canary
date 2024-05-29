"use strict";
a.r(t), a.d(t, {
  PaymentRequestStepBody: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var l = a("120356"),
  s = a.n(l),
  r = a("481060"),
  o = a("912454"),
  i = a("689938"),
  u = a("933082");
let d = e => {
  let {
    className: t,
    submitting: a,
    stripePaymentMethod: l
  } = e, {
    card: d
  } = null != l ? l : {}, c = null != d ? o.default.getType(d.brand) : o.default.Types.UNKNOWN;
  return (0, n.jsx)(r.FormSection, {
    className: t,
    title: i.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
    children: (0, n.jsxs)("div", {
      className: u.cardNumberWrapper,
      children: [(0, n.jsx)(o.default, {
        className: s()(u.cardIcon, {
          [u.submitting]: a
        }),
        type: c
      }), (0, n.jsx)(r.TextInput, {
        value: a && null != d ? i.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_CREATING.format(d) : void 0,
        editable: !1,
        readOnly: !0,
        placeholder: i.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_LOADING,
        inputClassName: u.cardNumberInput
      })]
    })
  })
}