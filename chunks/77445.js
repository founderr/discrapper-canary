"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var u = n("446674"),
  a = n("271938"),
  i = n("18494"),
  l = n("808422");

function r() {
  let e = (0, u.useStateFromStores)([i.default], () => i.default.getVoiceChannelId()),
    t = (0, u.useStateFromStores)([a.default], () => a.default.getId()),
    n = (0, l.default)(t, e);
  return n === l.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}