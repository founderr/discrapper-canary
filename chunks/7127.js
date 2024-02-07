"use strict";
n.r(e), n.d(e, {
  PaymentModalConfirmStep: function() {
    return d
  }
});
var r = n("37983");
n("884691");
var i = n("627445"),
  o = n.n(i),
  u = n("77078"),
  a = n("642906"),
  c = n("367767"),
  l = n("650484"),
  s = n("782340"),
  f = n("966425");

function d(t) {
  let {
    handleClose: e
  } = t, {
    skusById: n,
    selectedSkuId: i,
    application: d
  } = (0, a.usePaymentContext)();
  o(null != i, "Expected selectedSkuId"), o(null != d, "Expected application");
  let p = n[i];
  o(null != p, "Expected sku");
  let E = s.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: d.name,
    itemName: p.name
  });
  return (0, r.jsxs)(l.PaymentPortalBody, {
    children: [(0, r.jsx)(c.default, {}), (0, r.jsxs)("div", {
      className: f.confirmation,
      children: [(0, r.jsx)(u.Heading, {
        variant: "heading-xxl/bold",
        className: f.confirmationHeader,
        children: "Success!"
      }), (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        children: E
      }), (0, r.jsx)("div", {
        className: f.divider
      }), (0, r.jsx)(u.Button, {
        onClick: e,
        children: s.default.Messages.CLOSE
      })]
    })]
  })
}