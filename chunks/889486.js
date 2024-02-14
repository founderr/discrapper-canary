"use strict";
l.r(t), l.d(t, {
  handoffRemote: function() {
    return d
  }
});
var n = l("627445"),
  a = l.n(n),
  s = l("629109"),
  u = l("987317"),
  r = l("42887"),
  o = l("700507"),
  i = l("780338");

function d(e, t) {
  var l;
  let n = null !== (l = e.sessionId) && void 0 !== l ? l : "";
  (0, o.remoteDisconnect)(n), (0, o.disconnectRemote)();
  let d = null != t ? t : e.channelId;
  a(null != d, "attempted to transfer to unknown channel"), e.selfMute !== r.default.isSelfMute() && s.default.toggleSelfMute(), e.selfDeaf !== r.default.isSelfDeaf() && s.default.toggleSelfDeaf(), (0, i.default)(d, "discord_client", n), u.default.selectVoiceChannel(d, !1)
}