n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(357841),
  o = n(231338),
  r = n(689938),
  l = n(69630);

function c(e) {
  let {
    payment: t
  } = e, n = null != t.paymentSource && t.status === o.Py.COMPLETED;
  return null == t.downloadableInvoice || "" === t.downloadableInvoice ? n ? (0, s.jsx)("div", {
    className: l.downloadInvoice,
    children: (0, s.jsx)(a.Anchor, {
      onClick: () => {
        var e, n;
        e = t, n = t.paymentSource, i.Z.open(e, n)
      },
      children: r.Z.Messages.BILLING_DOWNLOAD_INVOICE
    })
  }) : null : (0, s.jsxs)("div", {
    className: l.downloadInvoice,
    children: [(0, s.jsx)(a.Anchor, {
      href: t.downloadableInvoice,
      children: r.Z.Messages.BILLING_DOWNLOAD_INVOICE_VAT
    }), null != t.downloadableRefundInvoices ? t.downloadableRefundInvoices.map((e, t) => (0, s.jsx)(a.Anchor, {
      className: l.downloadRefundInvoice,
      href: e,
      children: r.Z.Messages.BILLING_DOWNLOAD_REFUND_INVOICE
    }, t)) : null]
  })
}