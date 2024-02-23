"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("830251"),
  a = n("99795");

function s(e, t) {
  var n, s;
  let i = null,
    r = null,
    u = null,
    o = !1,
    d = !1;
  switch (e.type) {
    case a.ParticipantTypes.ACTIVITY:
      break;
    case a.ParticipantTypes.USER:
      i = e.streamId, u = e.voiceState, o = e.speaking, d = e.ringing;
      break;
    case a.ParticipantTypes.STREAM:
      i = e.streamId, r = e.stream
  }
  return {
    streamId: i,
    stream: r,
    speaking: o,
    ringing: d,
    muted: null !== (n = null == u ? void 0 : u.isVoiceMuted()) && void 0 !== n && n,
    deafen: null !== (s = null == u ? void 0 : u.isVoiceDeafened()) && void 0 !== s && s,
    mirror: e.type === a.ParticipantTypes.USER && e.user.id === t,
    hasVideo: (0, l.default)(e)
  }
}