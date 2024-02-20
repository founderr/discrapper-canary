"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var r = n("550766"),
  s = n("893011"),
  i = n("981913"),
  l = n("782340");

function o(e) {
  let {
    channelId: t,
    applicationId: n,
    centerButton: o = !1,
    ...u
  } = e, d = o ? i.CenterControlButton : i.default;
  return (0, a.jsx)(d, {
    ...u,
    onClick: () => {
      (0, r.stopEmbeddedActivity)({
        channelId: t,
        applicationId: n
      })
    },
    iconComponent: s.default,
    label: l.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
  })
}