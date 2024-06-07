"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var r = n("314354"),
  s = n("481060"),
  i = n("689938"),
  l = n("514514");

function o(e) {
  let {
    onClick: t
  } = e;
  return (0, a.jsxs)(s.Button, {
    className: l.randomizeButton,
    innerClassName: l.randomizeButtonInner,
    look: s.Button.Looks.OUTLINED,
    size: s.Button.Sizes.MEDIUM,
    color: s.Button.Colors.PRIMARY,
    onClick: t,
    grow: !1,
    children: [(0, a.jsx)(r.RetryIcon, {
      width: 16,
      height: 16
    }), i.default.Messages.CLAN_SETUP_RANDOMIZE_LOOK]
  })
}