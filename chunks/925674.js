"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("255397"),
  s = n("407691"),
  i = n("981913"),
  r = n("782340");

function u(e) {
  let {
    channelId: t,
    ...n
  } = e;
  return (0, l.jsx)(i.default, {
    onClick: function() {
      a.default.selectParticipant(t, null)
    },
    label: r.default.Messages.VIDEO_CALL_RETURN_TO_GRID,
    iconComponent: s.default,
    tooltipPosition: "bottom",
    ...n
  })
}