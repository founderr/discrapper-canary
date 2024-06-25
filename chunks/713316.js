t.d(n, {
  w: function() {
    return I
  }
});
var r = t(735250);
t(470079);
var s = t(512722),
  a = t.n(s),
  l = t(481060),
  i = t(598),
  o = t(698708),
  u = t(614277),
  c = t(689938),
  d = t(474411);

function I(e) {
  let {
    handleClose: n
  } = e, {
    skusById: t,
    selectedSkuId: s,
    application: I
  } = (0, i.usePaymentContext)();
  a()(null != s, "Expected selectedSkuId"), a()(null != I, "Expected application");
  let _ = t[s];
  a()(null != _, "Expected sku");
  let T = c.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: I.name,
    itemName: _.name
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
        children: T
      }), (0, r.jsx)("div", {
        className: d.divider
      }), (0, r.jsx)(l.Button, {
        onClick: n,
        children: c.Z.Messages.CLOSE
      })]
    })]
  })
}