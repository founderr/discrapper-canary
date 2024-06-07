"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var r = a("314354"),
  i = a("481060"),
  s = a("689938"),
  l = a("514514");

function o(e) {
  let {
    onClick: t
  } = e;
  return (0, n.jsxs)(i.Button, {
    className: l.randomizeButton,
    innerClassName: l.randomizeButtonInner,
    look: i.Button.Looks.OUTLINED,
    size: i.Button.Sizes.MEDIUM,
    color: i.Button.Colors.PRIMARY,
    onClick: t,
    grow: !1,
    children: [(0, n.jsx)(r.RetryIcon, {
      width: 16,
      height: 16
    }), s.default.Messages.CLAN_SETUP_RANDOMIZE_LOOK]
  })
}