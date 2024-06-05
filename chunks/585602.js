"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var n = a("735250");
a("470079");
var r = a("937615"),
  s = a("653798"),
  i = a("689938");

function l(e) {
  let {
    invoice: t
  } = e;
  return t.taxInclusive || t.tax <= 0 ? null : (0, n.jsx)(s.PremiumInvoiceTableRow, {
    label: i.default.Messages.TAX_LABEL,
    value: (0, r.formatPrice)(t.tax, t.currency)
  })
}