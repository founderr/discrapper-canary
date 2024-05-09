"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  i = n("921944"),
  l = n("689938"),
  r = n("299242");

function o(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, a.jsxs)("div", {
    className: r.container,
    children: [(0, a.jsx)("div", {
      className: r.pointer
    }), (0, a.jsx)(s.Text, {
      variant: "text-sm/normal",
      className: r.content,
      children: l.default.Messages.HUB_PRIVACY_SETTINGS_TOOLTIP
    }), (0, a.jsx)(s.Button, {
      look: s.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        t(i.ContentDismissActionType.AUTO)
      },
      children: l.default.Messages.GOT_IT
    })]
  })
}