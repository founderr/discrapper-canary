"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("442837"),
  n = a("314897"),
  u = a("944486"),
  s = a("590415");

function d() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.getVoiceChannelId()),
    t = (0, l.useStateFromStores)([n.default], () => n.default.getId());
  return (0, s.default)(t, e) === s.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}