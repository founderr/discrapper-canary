"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  i = s("357841"),
  l = s("231338"),
  r = s("689938"),
  o = s("486158");

function u(e) {
  let {
    payment: t
  } = e, s = null != t.paymentSource && t.status === l.PaymentStatusTypes.COMPLETED;
  return null == t.downloadableInvoice || "" === t.downloadableInvoice ? s ? (0, a.jsx)("div", {
    className: o.downloadInvoice,
    children: (0, a.jsx)(n.Anchor, {
      onClick: () => {
        var e, s;
        e = t, s = t.paymentSource, i.default.open(e, s)
      },
      children: r.default.Messages.BILLING_DOWNLOAD_INVOICE
    })
  }) : null : (0, a.jsxs)("div", {
    className: o.downloadInvoice,
    children: [(0, a.jsx)(n.Anchor, {
      href: t.downloadableInvoice,
      children: r.default.Messages.BILLING_DOWNLOAD_INVOICE_VAT
    }), null != t.downloadableRefundInvoices ? t.downloadableRefundInvoices.map((e, t) => (0, a.jsx)(n.Anchor, {
      className: o.downloadRefundInvoice,
      href: e,
      children: r.default.Messages.BILLING_DOWNLOAD_REFUND_INVOICE
    }, t)) : null]
  })
}