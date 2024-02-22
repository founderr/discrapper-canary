"use strict";
let i, r, s, l;
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("748820"),
  o = n("446674"),
  u = n("913144"),
  c = n("724210"),
  d = n("515631");
let f = {};

function h(e) {
  return {
    guildId: e,
    sessionId: (0, a.v4)()
  }
}

function E(e) {
  null != s && s.guildId === e ? (r = s, s = void 0) : r = h(e)
}
class p extends o.default.Store {
  getSavedScrollPosition(e) {
    return f[e]
  }
  getHomeSessionId(e) {
    return null != r && r.guildId === e ? r.sessionId : null != s && s.guildId === e ? s.sessionId : void 0
  }
  getHomeSessionSource(e) {
    return null != l && l.guildId === e ? l.source : d.GuildHomeLandingSource.ORGANIC
  }
}
p.displayName = "GuildHomeStore";
var C = new p(u.default, {
  CONNECTION_OPEN: function() {
    f = {}
  },
  GUILD_FEED_FETCH_FRESH_START: function(e) {
    let {
      guildId: t
    } = e;
    delete f[t]
  },
  GUILD_HOME_SET_SCROLL_POSITION: function(e) {
    let {
      guildId: t,
      scrollPosition: n
    } = e;
    f[t] = n
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t || null == n || !(0, c.isStaticChannelRoute)(n) || !(0, c.isGuildHomeChannel)(n)) {
      i = void 0, r = void 0, s = void 0, l = void 0;
      return
    }
    let a = (0, c.buildGuildStaticChannelId)(n, t);
    if (i === a || null != r && r.guildId === t) return !1;
    E(t), i = a, null != l && l.guildId !== t && (l = void 0)
  },
  CHANNEL_PRELOAD: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t || null == n || !(0, c.isStaticChannelRoute)(n) || !(0, c.isGuildHomeChannel)(n)) {
      s = void 0;
      return
    }
    if (null != s && s.guildId === t) return !1;
    s = h(t)
  },
  GUILD_HOME_SET_SOURCE: function(e) {
    let {
      source: t,
      guildId: n
    } = e;
    l = {
      guildId: n,
      source: t
    }
  },
  GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
    let {
      guildId: t
    } = e;
    if (null != r && r.guildId === t) return !1;
    E(t)
  },
  LOGOUT: function() {
    r = void 0, s = void 0, l = void 0
  }
})