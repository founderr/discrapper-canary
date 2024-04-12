"use strict";
n.r(t), n.d(t, {
  PaymentModalConfirmStep: function() {
    return p
  }
});
var a = n("735250");
n("470079");
var r = n("512722"),
  s = n.n(r),
  i = n("481060"),
  l = n("598"),
  o = n("698708"),
  u = n("614277"),
  d = n("689938"),
  c = n("822439");

function p(e) {
  let {
    handleClose: t
  } = e, {
    skusById: n,
    selectedSkuId: r,
    application: p
  } = (0, l.usePaymentContext)();
  s()(null != r, "Expected selectedSkuId"), s()(null != p, "Expected application");
  let m = n[r];
  s()(null != m, "Expected sku");
  let f = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: p.name,
    itemName: m.name
  });
  return (0, a.jsxs)(u.PaymentPortalBody, {
    children: [(0, a.jsx)(o.default, {}), (0, a.jsxs)("div", {
      className: c.confirmation,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-xxl/bold",
        className: c.confirmationHeader,
        children: "Success!"
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        children: f
      }), (0, a.jsx)("div", {
        className: c.divider
      }), (0, a.jsx)(i.Button, {
        onClick: t,
        children: d.default.Messages.CLOSE
      })]
    })]
  })
}