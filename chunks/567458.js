"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("921944"),
  i = a("689938"),
  r = a("957701");

function o(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, n.jsxs)("div", {
    className: r.container,
    children: [(0, n.jsx)("div", {
      className: r.pointer
    }), (0, n.jsx)(s.Text, {
      variant: "text-sm/normal",
      className: r.content,
      children: i.default.Messages.HUB_PRIVACY_SETTINGS_TOOLTIP
    }), (0, n.jsx)(s.Button, {
      look: s.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        t(l.ContentDismissActionType.AUTO)
      },
      children: i.default.Messages.GOT_IT
    })]
  })
}