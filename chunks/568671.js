s.d(t, {
  Z: function() {
    return _
  }
});
var n = s(735250);
s(470079);
var a = s(481060),
  i = s(626135),
  r = s(503899),
  l = s(292352),
  o = s(981631),
  c = s(689938),
  E = s(87562);

function _() {
  return (0, n.jsxs)(a.Button, {
    innerClassName: E.qrCodeButtonContent,
    size: a.Button.Sizes.LARGE,
    onClick: () => {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("49237"), s.e("99387"), s.e("49368"), s.e("90688")]).then(s.bind(s, 978305));
        return t => (0, n.jsx)(e, {
          ...t
        })
      }), i.default.track(o.rMx.FAMILY_CENTER_ACTION, {
        action: l.YC.ShowQRCodeModal
      })
    },
    children: [(0, n.jsx)(r.Z, {}), c.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_BUTTON]
  })
}