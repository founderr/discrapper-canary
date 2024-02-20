"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var i = n("689988"),
  a = n("191152"),
  l = n("713810"),
  s = n("435123"),
  r = n("558130"),
  o = n("677315"),
  u = n("724210");
class d extends i.default {
  handleChannelPreload(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t || n !== u.StaticChannelRoute.GUILD_HOME || !(0, o.canSeeGuildHome)(t)) return !1;
    (0, s.shouldFetchGuildFeed)(t, !1) && (0, l.fetchGuildFeed)({
      guildId: t,
      refresh: !0
    }), r.default.shouldFetch(t) && (0, a.fetchActiveChannels)(t)
  }
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_PRELOAD: this.handleChannelPreload
    }
  }
}
var c = new d