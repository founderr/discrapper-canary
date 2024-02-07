"use strict";
n.r(t), n.d(t, {
  PaymentModalConfirmStep: function() {
    return E
  }
});
var r = n("37983");
n("884691");
var u = n("627445"),
  a = n.n(u),
  i = n("77078"),
  l = n("642906"),
  s = n("367767"),
  o = n("650484"),
  c = n("782340"),
  d = n("966425");

function E(e) {
  let {
    handleClose: t
  } = e, {
    skusById: n,
    selectedSkuId: u,
    application: E
  } = (0, l.usePaymentContext)();
  a(null != u, "Expected selectedSkuId"), a(null != E, "Expected application");
  let S = n[u];
  a(null != S, "Expected sku");
  let f = c.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: E.name,
    itemName: S.name
  });
  return (0, r.jsxs)(o.PaymentPortalBody, {
    children: [(0, r.jsx)(s.default, {}), (0, r.jsxs)("div", {
      className: d.confirmation,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-xxl/bold",
        className: d.confirmationHeader,
        children: "Success!"
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        children: f
      }), (0, r.jsx)("div", {
        className: d.divider
      }), (0, r.jsx)(i.Button, {
        onClick: t,
        children: c.default.Messages.CLOSE
      })]
    })]
  })
}