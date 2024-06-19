t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var a = t(481060),
  i = t(357841),
  l = t(231338),
  r = t(689938),
  o = t(69630);

function c(e) {
  let {
    payment: s
  } = e, t = null != s.paymentSource && s.status === l.Py.COMPLETED;
  return null == s.downloadableInvoice || "" === s.downloadableInvoice ? t ? (0, n.jsx)("div", {
    className: o.downloadInvoice,
    children: (0, n.jsx)(a.Anchor, {
      onClick: () => {
        var e, t;
        e = s, t = s.paymentSource, i.Z.open(e, t)
      },
      children: r.Z.Messages.BILLING_DOWNLOAD_INVOICE
    })
  }) : null : (0, n.jsxs)("div", {
    className: o.downloadInvoice,
    children: [(0, n.jsx)(a.Anchor, {
      href: s.downloadableInvoice,
      children: r.Z.Messages.BILLING_DOWNLOAD_INVOICE_VAT
    }), null != s.downloadableRefundInvoices ? s.downloadableRefundInvoices.map((e, s) => (0, n.jsx)(a.Anchor, {
      className: o.downloadRefundInvoice,
      href: e,
      children: r.Z.Messages.BILLING_DOWNLOAD_REFUND_INVOICE
    }, s)) : null]
  })
}