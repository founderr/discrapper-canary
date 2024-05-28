"use strict";
n.r(t), n.d(t, {
  PaymentModalConfirmStep: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var r = n("512722"),
  s = n.n(r),
  l = n("481060"),
  u = n("598"),
  i = n("698708"),
  c = n("614277"),
  o = n("689938"),
  d = n("802302");

function f(e) {
  let {
    handleClose: t
  } = e, {
    skusById: n,
    selectedSkuId: r,
    application: f
  } = (0, u.usePaymentContext)();
  s()(null != r, "Expected selectedSkuId"), s()(null != f, "Expected application");
  let E = n[r];
  s()(null != E, "Expected sku");
  let m = o.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: f.name,
    itemName: E.name
  });
  return (0, a.jsxs)(c.PaymentPortalBody, {
    children: [(0, a.jsx)(i.default, {}), (0, a.jsxs)("div", {
      className: d.confirmation,
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-xxl/bold",
        className: d.confirmationHeader,
        children: "Success!"
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        children: m
      }), (0, a.jsx)("div", {
        className: d.divider
      }), (0, a.jsx)(l.Button, {
        onClick: t,
        children: o.default.Messages.CLOSE
      })]
    })]
  })
}