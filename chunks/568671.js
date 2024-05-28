"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("626135"),
  i = s("503899"),
  r = s("292352"),
  u = s("981631"),
  o = s("689938"),
  d = s("277886");

function c() {
  return (0, a.jsxs)(n.Button, {
    innerClassName: d.qrCodeButtonContent,
    size: n.Button.Sizes.LARGE,
    onClick: () => {
      (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("49237"), s.e("99387"), s.e("49368"), s.e("90688")]).then(s.bind(s, "978305"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }), l.default.track(u.AnalyticEvents.FAMILY_CENTER_ACTION, {
        action: r.FamilyCenterAction.ShowQRCodeModal
      })
    },
    children: [(0, a.jsx)(i.default, {}), o.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_BUTTON]
  })
}