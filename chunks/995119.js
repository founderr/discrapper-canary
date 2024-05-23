"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var r = a("314354"),
  s = a("481060"),
  i = a("689938"),
  l = a("514514");

function o(e) {
  let {
    onClick: t
  } = e;
  return (0, n.jsxs)(s.Button, {
    className: l.randomizeButton,
    innerClassName: l.randomizeButtonInner,
    look: s.Button.Looks.OUTLINED,
    size: s.Button.Sizes.MEDIUM,
    color: s.Button.Colors.PRIMARY,
    onClick: t,
    grow: !1,
    children: [(0, n.jsx)(r.RetryIcon, {
      width: 16,
      height: 16
    }), i.default.Messages.CLAN_SETUP_RANDOMIZE_LOOK]
  })
}