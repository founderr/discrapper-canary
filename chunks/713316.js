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
  l = n("481060"),
  i = n("598"),
  u = n("698708"),
  o = n("614277"),
  d = n("689938"),
  c = n("802302");

function f(e) {
  let {
    handleClose: t
  } = e, {
    skusById: n,
    selectedSkuId: a,
    application: f
  } = (0, i.usePaymentContext)();
  s()(null != a, "Expected selectedSkuId"), s()(null != f, "Expected application");
  let _ = n[a];
  s()(null != _, "Expected sku");
  let I = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: f.name,
    itemName: _.name
  });
  return (0, r.jsxs)(o.PaymentPortalBody, {
    children: [(0, r.jsx)(u.default, {}), (0, r.jsxs)("div", {
      className: c.confirmation,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xxl/bold",
        className: c.confirmationHeader,
        children: "Success!"
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: I
      }), (0, r.jsx)("div", {
        className: c.divider
      }), (0, r.jsx)(l.Button, {
        onClick: t,
        children: d.default.Messages.CLOSE
      })]
    })]
  })
}