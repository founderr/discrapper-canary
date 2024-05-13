"use strict";
n.r(t), n.d(t, {
  RETURN_TO_AUDIO_CHANNEL: function() {
    return s
  }
});
var i = n("925549"),
  l = n("475468"),
  o = n("19780"),
  a = n("944486"),
  u = n("981631");
let s = {
  binds: ["mod+alt+left"],
  comboKeysBindGlobal: !0,
  action() {
    var e;
    if (!o.default.isConnected()) return !1;
    let t = null !== (e = o.default.getGuildId()) && void 0 !== e ? e : u.ME,
      n = a.default.getChannelId(t);
    return (0, l.transitionToChannel)(t, n), i.default.channelListScrollTo(t, o.default.getChannelId()), !1
  }
}