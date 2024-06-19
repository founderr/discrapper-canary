n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(626135),
  l = n(503899),
  r = n(292352),
  o = n(981631),
  c = n(689938),
  d = n(87562);

function u() {
  return (0, s.jsxs)(a.Button, {
    innerClassName: d.qrCodeButtonContent,
    size: a.Button.Sizes.LARGE,
    onClick: () => {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("49368"), n.e("90688")]).then(n.bind(n, 978305));
        return t => (0, s.jsx)(e, {
          ...t
        })
      }), i.default.track(o.rMx.FAMILY_CENTER_ACTION, {
        action: r.YC.ShowQRCodeModal
      })
    },
    children: [(0, s.jsx)(l.Z, {}), c.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_BUTTON]
  })
}