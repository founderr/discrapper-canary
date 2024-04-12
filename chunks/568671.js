"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("626135"),
  i = a("503899"),
  r = a("292352"),
  o = a("981631"),
  u = a("689938"),
  d = a("430642");

function c() {
  return (0, n.jsxs)(s.Button, {
    innerClassName: d.qrCodeButtonContent,
    size: s.Button.Sizes.LARGE,
    onClick: () => {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("73422"), a.e("90688")]).then(a.bind(a, "978305"));
        return t => (0, n.jsx)(e, {
          ...t
        })
      }), l.default.track(o.AnalyticEvents.FAMILY_CENTER_ACTION, {
        action: r.FamilyCenterAction.ShowQRCodeModal
      })
    },
    children: [(0, n.jsx)(i.default, {}), u.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_BUTTON]
  })
}