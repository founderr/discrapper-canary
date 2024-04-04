"use strict";
l.r(t), l.d(t, {
  ActivityActionOverlayButton: function() {
    return c
  }
});
var i = l("735250");
l("470079");
var a = l("481060"),
  n = l("542094"),
  s = l("689938"),
  r = l("893018");

function c(e) {
  let {
    action: t,
    onClick: l
  } = e, c = t === n.ActivityAction.JOIN ? s.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY : s.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY, d = t === n.ActivityAction.JOIN ? a.Button.Colors.PRIMARY : a.Button.Colors.RED;
  return (0, i.jsx)("div", {
    className: r.activityOverlay,
    children: (0, i.jsx)(a.Button, {
      className: r.actionButton,
      onClick: l,
      size: a.Button.Sizes.MEDIUM,
      color: d,
      children: c
    })
  })
}