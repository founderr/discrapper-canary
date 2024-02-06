"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var u = n("37983");
n("884691");
var a = n("446674"),
  i = n("77078"),
  l = n("255397"),
  r = n("191145"),
  d = n("782340");

function o(e) {
  let t = (0, a.useStateFromStores)([r.default], () => r.default.getVoiceParticipantsHidden(e));
  return (0, u.jsx)(i.MenuCheckboxItem, {
    id: "no-video-hide",
    label: d.default.Messages.STREAM_SHOW_NON_VIDEO,
    checked: !t,
    action: () => l.default.toggleVoiceParticipantsHidden(e, !t)
  })
}