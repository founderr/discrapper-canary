"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  i = n("255397"),
  d = n("191145"),
  r = n("782340");

function s(e) {
  let t = (0, l.useStateFromStores)([d.default], () => d.default.getVoiceParticipantsHidden(e));
  return (0, a.jsx)(u.MenuCheckboxItem, {
    id: "no-video-hide",
    label: r.default.Messages.STREAM_SHOW_NON_VIDEO,
    checked: !t,
    action: () => i.default.toggleVoiceParticipantsHidden(e, !t)
  })
}