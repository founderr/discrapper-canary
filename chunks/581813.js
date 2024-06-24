t.d(a, {
  k: function() {
    return u
  }
});
var n = t(735250);
t(470079);
var s = t(120356),
  l = t.n(s),
  r = t(481060),
  o = t(912454),
  i = t(689938),
  c = t(574984);
let u = e => {
  let {
    className: a,
    submitting: t,
    stripePaymentMethod: s
  } = e, {
    card: u
  } = null != s ? s : {}, E = null != u ? o.ZP.getType(u.brand) : o.ZP.Types.UNKNOWN;
  return (0, n.jsx)(r.FormSection, {
    className: a,
    title: i.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
    children: (0, n.jsxs)("div", {
      className: c.cardNumberWrapper,
      children: [(0, n.jsx)(o.ZP, {
        className: l()(c.cardIcon, {
          [c.submitting]: t
        }),
        type: E
      }), (0, n.jsx)(r.TextInput, {
        value: t && null != u ? i.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_CREATING.format(u) : void 0,
        editable: !1,
        readOnly: !0,
        placeholder: i.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_LOADING,
        inputClassName: c.cardNumberInput
      })]
    })
  })
}