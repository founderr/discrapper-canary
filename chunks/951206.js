"use strict";
n.r(t), n.d(t, {
  handoffRemote: function() {
    return o
  }
});
var l = n("512722"),
  a = n.n(l),
  i = n("846027"),
  u = n("287734"),
  s = n("131951"),
  r = n("254238"),
  d = n("893387");

function o(e, t) {
  var n;
  let l = null !== (n = e.sessionId) && void 0 !== n ? n : "";
  (0, r.remoteDisconnect)(l), (0, r.disconnectRemote)();
  let o = null != t ? t : e.channelId;
  a()(null != o, "attempted to transfer to unknown channel"), e.selfMute !== s.default.isSelfMute() && i.default.toggleSelfMute(), e.selfDeaf !== s.default.isSelfDeaf() && i.default.toggleSelfDeaf(), (0, d.default)(o, "discord_client", l), u.default.selectVoiceChannel(o, !1)
}