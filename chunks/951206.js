"use strict";
n.r(t), n.d(t, {
  handoffRemote: function() {
    return o
  }
});
var l = n("512722"),
  a = n.n(l),
  u = n("846027"),
  i = n("287734"),
  s = n("131951"),
  r = n("254238"),
  d = n("893387");

function o(e, t) {
  var n;
  let l = null !== (n = e.sessionId) && void 0 !== n ? n : "";
  (0, r.remoteDisconnect)(l), (0, r.disconnectRemote)();
  let o = null != t ? t : e.channelId;
  a()(null != o, "attempted to transfer to unknown channel"), e.selfMute !== s.default.isSelfMute() && u.default.toggleSelfMute(), e.selfDeaf !== s.default.isSelfDeaf() && u.default.toggleSelfDeaf(), (0, d.default)(o, "discord_client", l), i.default.selectVoiceChannel(o, !1)
}