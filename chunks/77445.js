"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("446674"),
  l = n("271938"),
  u = n("18494"),
  i = n("808422");

function d() {
  let e = (0, a.useStateFromStores)([u.default], () => u.default.getVoiceChannelId()),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getId()),
    n = (0, i.default)(t, e);
  return n === i.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}