"use strict";
n.r(t), n.d(t, {
  PaymentModalConfirmStep: function() {
    return E
  }
});
var r = n("37983");
n("884691");
var a = n("627445"),
  u = n.n(a),
  i = n("77078"),
  l = n("642906"),
  s = n("367767"),
  o = n("650484"),
  d = n("782340"),
  c = n("348550");

function E(e) {
  let {
    handleClose: t
  } = e, {
    skusById: n,
    selectedSkuId: a,
    application: E
  } = (0, l.usePaymentContext)();
  u(null != a, "Expected selectedSkuId"), u(null != E, "Expected application");
  let S = n[a];
  u(null != S, "Expected sku");
  let f = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: E.name,
    itemName: S.name
  });
  return (0, r.jsxs)(o.PaymentPortalBody, {
    children: [(0, r.jsx)(s.default, {}), (0, r.jsxs)("div", {
      className: c.confirmation,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-xxl/bold",
        className: c.confirmationHeader,
        children: "Success!"
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        children: f
      }), (0, r.jsx)("div", {
        className: c.divider
      }), (0, r.jsx)(i.Button, {
        onClick: t,
        children: d.default.Messages.CLOSE
      })]
    })]
  })
}