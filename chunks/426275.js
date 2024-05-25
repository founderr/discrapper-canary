"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("735250"),
  s = n("692547"),
  a = n("138270"),
  l = n("836946"),
  o = n("689938");

function r(e) {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(l.default, {
    tooltip: o.default.Messages.MESSAGE_ACTION_FORWARD,
    color: l.CircleIconButtonColors.SECONDARY,
    icon: (0, i.jsx)(a.ArrowAngleRightUpIcon, {
      width: 16,
      height: 16,
      color: s.default.colors.INTERACTIVE_NORMAL
    }),
    onClick: t
  })
}