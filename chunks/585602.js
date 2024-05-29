"use strict";
t.r(n), t.d(n, {
  default: function() {
    return s
  }
});
var a = t("735250");
t("470079");
var i = t("937615"),
  l = t("653798"),
  r = t("689938");

function s(e) {
  let {
    invoice: n
  } = e;
  return n.taxInclusive || n.tax <= 0 ? null : (0, a.jsx)(l.PremiumInvoiceTableRow, {
    label: r.default.Messages.TAX_LABEL,
    value: (0, i.formatPrice)(n.tax, n.currency)
  })
}