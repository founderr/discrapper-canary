"use strict";
let i, r, l, u;
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("748820"),
  o = n("446674"),
  a = n("913144"),
  c = n("724210"),
  d = n("515631");
let f = {};

function E(e) {
  return {
    guildId: e,
    sessionId: (0, s.v4)()
  }
}

function _(e) {
  null != l && l.guildId === e ? (r = l, l = void 0) : r = E(e)
}
class I extends o.default.Store {
  getSavedScrollPosition(e) {
    return f[e]
  }
  getHomeSessionId(e) {
    return null != r && r.guildId === e ? r.sessionId : null != l && l.guildId === e ? l.sessionId : void 0
  }
  getHomeSessionSource(e) {
    return null != u && u.guildId === e ? u.source : d.GuildHomeLandingSource.ORGANIC
  }
}
I.displayName = "GuildHomeStore";
var h = new I(a.default, {
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
      i = void 0, r = void 0, l = void 0, u = void 0;
      return
    }
    let s = (0, c.buildGuildStaticChannelId)(n, t);
    if (i === s || null != r && r.guildId === t) return !1;
    _(t), i = s, null != u && u.guildId !== t && (u = void 0)
  },
  CHANNEL_PRELOAD: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t || null == n || !(0, c.isStaticChannelRoute)(n) || !(0, c.isGuildHomeChannel)(n)) {
      l = void 0;
      return
    }
    if (null != l && l.guildId === t) return !1;
    l = E(t)
  },
  GUILD_HOME_SET_SOURCE: function(e) {
    let {
      source: t,
      guildId: n
    } = e;
    u = {
      guildId: n,
      source: t
    }
  },
  GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
    let {
      guildId: t
    } = e;
    if (null != r && r.guildId === t) return !1;
    _(t)
  },
  LOGOUT: function() {
    r = void 0, l = void 0, u = void 0
  }
})