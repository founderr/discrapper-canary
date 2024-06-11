"use strict";
n.r(t), n.d(t, {
  PaymentModalConfirmStep: function() {
    return f
  }
});
var r = n("735250");
n("470079");
var a = n("512722"),
  s = n.n(a),
  u = n("481060"),
  i = n("598"),
  l = n("698708"),
  c = n("614277"),
  o = n("689938"),
  d = n("802302");

function f(e) {
  let {
    handleClose: t
  } = e, {
    skusById: n,
    selectedSkuId: a,
    application: f
  } = (0, i.usePaymentContext)();
  s()(null != a, "Expected selectedSkuId"), s()(null != f, "Expected application");
  let E = n[a];
  s()(null != E, "Expected sku");
  let A = o.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: f.name,
    itemName: E.name
  });
  return (0, r.jsxs)(c.PaymentPortalBody, {
    children: [(0, r.jsx)(l.default, {}), (0, r.jsxs)("div", {
      className: d.confirmation,
      children: [(0, r.jsx)(u.Heading, {
        variant: "heading-xxl/bold",
        className: d.confirmationHeader,
        children: "Success!"
      }), (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        children: A
      }), (0, r.jsx)("div", {
        className: d.divider
      }), (0, r.jsx)(u.Button, {
        onClick: t,
        children: o.default.Messages.CLOSE
      })]
    })]
  })
}