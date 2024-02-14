"use strict";
E.r(_), E.d(_, {
  default: function() {
    return s
  }
}), E("222007");
var t = E("689988"),
  o = E("191152"),
  n = E("713810"),
  a = E("435123"),
  i = E("558130"),
  r = E("677315"),
  I = E("724210");
class T extends t.default {
  handleChannelPreload(e) {
    let {
      guildId: _,
      channelId: E
    } = e;
    if (null == _ || E !== I.StaticChannelRoute.GUILD_HOME || !(0, r.canSeeGuildHome)(_)) return !1;
    (0, a.shouldFetchGuildFeed)(_, !1) && (0, n.fetchGuildFeed)({
      guildId: _,
      refresh: !0
    }), i.default.shouldFetch(_) && (0, o.fetchActiveChannels)(_)
  }
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_PRELOAD: this.handleChannelPreload
    }
  }
}
var s = new T