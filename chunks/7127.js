"use strict";
n.r(t), n.d(t, {
  PaymentModalConfirmStep: function() {
    return f
  }
});
var s = n("37983");
n("884691");
var i = n("627445"),
  a = n.n(i),
  r = n("77078"),
  l = n("642906"),
  o = n("367767"),
  u = n("650484"),
  d = n("782340"),
  c = n("348550");

function f(e) {
  let {
    handleClose: t
  } = e, {
    skusById: n,
    selectedSkuId: i,
    application: f
  } = (0, l.usePaymentContext)();
  a(null != i, "Expected selectedSkuId"), a(null != f, "Expected application");
  let E = n[i];
  a(null != E, "Expected sku");
  let p = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: f.name,
    itemName: E.name
  });
  return (0, s.jsxs)(u.PaymentPortalBody, {
    children: [(0, s.jsx)(o.default, {}), (0, s.jsxs)("div", {
      className: c.confirmation,
      children: [(0, s.jsx)(r.Heading, {
        variant: "heading-xxl/bold",
        className: c.confirmationHeader,
        children: "Success!"
      }), (0, s.jsx)(r.Text, {
        variant: "text-md/normal",
        children: p
      }), (0, s.jsx)("div", {
        className: c.divider
      }), (0, s.jsx)(r.Button, {
        onClick: t,
        children: d.default.Messages.CLOSE
      })]
    })]
  })
}