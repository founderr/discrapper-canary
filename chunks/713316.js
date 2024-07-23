n.d(t, {
  w: function() {
return f;
  }
});
var r = n(735250);
n(470079);
var a = n(512722),
  i = n.n(a),
  o = n(481060),
  s = n(598),
  l = n(698708),
  c = n(614277),
  d = n(689938),
  u = n(642852);

function f(e) {
  let {
handleClose: t
  } = e, {
skusById: n,
selectedSkuId: a,
application: f
  } = (0, s.usePaymentContext)();
  i()(null != a, 'Expected selectedSkuId'), i()(null != f, 'Expected application');
  let h = n[a];
  i()(null != h, 'Expected sku');
  let p = d.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
applicationName: f.name,
itemName: h.name
  });
  return (0, r.jsxs)(c.C3, {
children: [
  (0, r.jsx)(l.Z, {}),
  (0, r.jsxs)('div', {
    className: u.confirmation,
    children: [
      (0, r.jsx)(o.Heading, {
        variant: 'heading-xxl/bold',
        className: u.confirmationHeader,
        children: 'Success!'
      }),
      (0, r.jsx)(o.Text, {
        variant: 'text-md/normal',
        children: p
      }),
      (0, r.jsx)('div', {
        className: u.divider
      }),
      (0, r.jsx)(o.Button, {
        onClick: t,
        children: d.Z.Messages.CLOSE
      })
    ]
  })
]
  });
}