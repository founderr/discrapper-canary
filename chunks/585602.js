"use strict";
i.r(n), i.d(n, {
  default: function() {
    return s
  }
});
var t = i("735250");
i("470079");
var r = i("937615"),
  a = i("653798"),
  l = i("689938");

function s(e) {
  let {
    invoice: n
  } = e;
  return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(a.PremiumInvoiceTableRow, {
    label: l.default.Messages.TAX_LABEL,
    value: (0, r.formatPrice)(n.tax, n.currency)
  })
}