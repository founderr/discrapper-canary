"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
});
var a = l("442837"),
  u = l("314897"),
  n = l("944486"),
  d = l("590415");

function s() {
  let e = (0, a.useStateFromStores)([n.default], () => n.default.getVoiceChannelId()),
    t = (0, a.useStateFromStores)([u.default], () => u.default.getId());
  return (0, d.default)(t, e) === d.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}