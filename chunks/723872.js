"use strict";
n.r(t), n.d(t, {
  isRTCConnectedInHub: function() {
    return u
  },
  useConnectedInCurrentHub: function() {
    return o
  }
});
var a = n("446674"),
  r = n("42203"),
  i = n("305961"),
  s = n("18494"),
  l = n("49111");
let u = () => {
    let e = s.default.getVoiceChannelId();
    if (null == e) return !1;
    let t = r.default.getChannel(e);
    if (null == t) return !1;
    let n = i.default.getGuild(t.getGuildId());
    return null != n && n.hasFeature(l.GuildFeatures.HUB)
  },
  o = e => (0, a.useStateFromStores)([s.default, r.default, i.default], () => {
    let t = s.default.getVoiceChannelId();
    if (null == t) return !1;
    let n = r.default.getChannel(t);
    if (null == n) return !1;
    let a = i.default.getGuild(n.getGuildId());
    return null != a && a.id === e
  })