"use strict";
i.r(n), i.d(n, {
  default: function() {
    return s
  }
});
var t = i("735250");
i("470079");
var a = i("937615"),
  l = i("653798"),
  r = i("689938");

function s(e) {
  let {
    invoice: n
  } = e;
  return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(l.PremiumInvoiceTableRow, {
    label: r.default.Messages.TAX_LABEL,
    value: (0, a.formatPrice)(n.tax, n.currency)
  })
}