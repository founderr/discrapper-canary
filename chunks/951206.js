"use strict";
n.r(t), n.d(t, {
  handoffRemote: function() {
    return o
  }
});
var l = n("512722"),
  u = n.n(l),
  a = n("846027"),
  i = n("287734"),
  r = n("131951"),
  d = n("254238"),
  s = n("893387");

function o(e, t) {
  var n;
  let l = null !== (n = e.sessionId) && void 0 !== n ? n : "";
  (0, d.remoteDisconnect)(l), (0, d.disconnectRemote)();
  let o = null != t ? t : e.channelId;
  u()(null != o, "attempted to transfer to unknown channel"), e.selfMute !== r.default.isSelfMute() && a.default.toggleSelfMute(), e.selfDeaf !== r.default.isSelfDeaf() && a.default.toggleSelfDeaf(), (0, s.default)(o, "discord_client", l), i.default.selectVoiceChannel(o, !1)
}