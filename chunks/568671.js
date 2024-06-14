"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  l = s("626135"),
  i = s("503899"),
  r = s("292352"),
  o = s("981631"),
  u = s("689938"),
  d = s("277886");

function c() {
  return (0, n.jsxs)(a.Button, {
    innerClassName: d.qrCodeButtonContent,
    size: a.Button.Sizes.LARGE,
    onClick: () => {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("49237"), s.e("99387"), s.e("49368"), s.e("90688")]).then(s.bind(s, "978305"));
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