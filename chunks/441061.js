"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
  s = n("475179"),
  u = n("358221"),
  d = n("689938");

function r(e) {
  let t = (0, a.useStateFromStores)([u.default], () => u.default.getVoiceParticipantsHidden(e));
  return (0, i.jsx)(l.MenuCheckboxItem, {
    id: "no-video-hide",
    label: d.default.Messages.STREAM_SHOW_NON_VIDEO,
    checked: !t,
    action: () => s.default.toggleVoiceParticipantsHidden(e, !t)
  })
}