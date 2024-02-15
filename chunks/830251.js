"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("446674"), n("271938"), n("42887");
var l = n("99795");

function a(e) {
  var t, n;
  return e.type !== l.ParticipantTypes.ACTIVITY && ((0, l.isStreamParticipant)(e) ? null != e.streamId : null !== (n = null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) && void 0 !== n && n)
}