"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var l = n("884691"),
  a = n("446674"),
  s = n("271938"),
  i = n("244480"),
  r = n("808422");

function u(e) {
  let t = (0, a.useStateFromStores)([s.default], () => s.default.getId()),
    n = (0, r.default)(t, e.id),
    u = n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK || n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
    [o, d] = l.useState(u);
  return l.useEffect(() => {
    d(u)
  }, [u]), [o, function() {
    n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, i.audienceAckRequestToSpeak)(e, !0) : (0, i.toggleRequestToSpeak)(e, !o), d(!o)
  }]
}