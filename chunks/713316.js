t.d(n, {
  w: function() {
    return E
  }
});
var s = t(735250);
t(470079);
var a = t(512722),
  l = t.n(a),
  i = t(481060),
  r = t(598),
  o = t(698708),
  d = t(614277),
  c = t(689938),
  u = t(474411);

function E(e) {
  let {
    handleClose: n
  } = e, {
    skusById: t,
    selectedSkuId: a,
    application: E
  } = (0, r.usePaymentContext)();
  l()(null != a, "Expected selectedSkuId"), l()(null != E, "Expected application");
  let C = t[a];
  l()(null != C, "Expected sku");
  let f = c.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: E.name,
    itemName: C.name
  });
  return (0, s.jsxs)(d.C3, {
    children: [(0, s.jsx)(o.Z, {}), (0, s.jsxs)("div", {
      className: u.confirmation,
      children: [(0, s.jsx)(i.Heading, {
        variant: "heading-xxl/bold",
        className: u.confirmationHeader,
        children: "Success!"
      }), (0, s.jsx)(i.Text, {
        variant: "text-md/normal",
        children: f
      }), (0, s.jsx)("div", {
        className: u.divider
      }), (0, s.jsx)(i.Button, {
        onClick: n,
        children: c.Z.Messages.CLOSE
      })]
    })]
  })
}