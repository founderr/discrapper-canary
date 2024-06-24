n.d(t, {
  w: function() {
    return E
  }
});
var r = n(735250);
n(470079);
var a = n(512722),
  s = n.n(a),
  l = n(481060),
  i = n(598),
  o = n(698708),
  u = n(614277),
  c = n(689938),
  d = n(474411);

function E(e) {
  let {
    handleClose: t
  } = e, {
    skusById: n,
    selectedSkuId: a,
    application: E
  } = (0, i.usePaymentContext)();
  s()(null != a, "Expected selectedSkuId"), s()(null != E, "Expected application");
  let h = n[a];
  s()(null != h, "Expected sku");
  let p = c.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: E.name,
    itemName: h.name
  });
  return (0, r.jsxs)(u.C3, {
    children: [(0, r.jsx)(o.Z, {}), (0, r.jsxs)("div", {
      className: d.confirmation,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xxl/bold",
        className: d.confirmationHeader,
        children: "Success!"
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: p
      }), (0, r.jsx)("div", {
        className: d.divider
      }), (0, r.jsx)(l.Button, {
        onClick: t,
        children: c.Z.Messages.CLOSE
      })]
    })]
  })
}