"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("255397"),
  s = n("229997"),
  i = n("763984"),
  r = n("981913"),
  o = n("99795"),
  u = n("782340");

function d(e) {
  let {
    channelId: t,
    isHorizontal: n,
    ...d
  } = e;
  return (0, l.jsx)(r.default, {
    onClick: function() {
      a.default.selectParticipant(t, o.ParticipantSelectionTypes.AUTO)
    },
    label: u.default.Messages.VIDEO_CALL_AUTO_SELECT,
    iconComponent: n ? s.default : i.default,
    tooltipPosition: "bottom",
    ...d
  })
}