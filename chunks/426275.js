"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("735250"),
  s = n("692547"),
  a = n("138270"),
  o = n("836946"),
  l = n("689938");

function r(e) {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(o.default, {
    tooltip: l.default.Messages.MESSAGE_ACTION_FORWARD,
    color: o.CircleIconButtonColors.SECONDARY,
    icon: (0, i.jsx)(a.ArrowAngleRightUpIcon, {
      width: 16,
      height: 16,
      color: s.default.colors.INTERACTIVE_NORMAL
    }),
    onClick: t
  })
}