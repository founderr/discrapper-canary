"use strict";
let i, r, l, u;
n.r(e), n.d(e, {
  default: function() {
    return T
  }
});
var s = n("748820"),
  a = n("446674"),
  o = n("913144"),
  c = n("724210"),
  d = n("515631");
let E = {};

function f(t) {
  return {
    guildId: t,
    sessionId: (0, s.v4)()
  }
}

function _(t) {
  null != l && l.guildId === t ? (r = l, l = void 0) : r = f(t)
}
class I extends a.default.Store {
  getSavedScrollPosition(t) {
    return E[t]
  }
  getHomeSessionId(t) {
    return null != r && r.guildId === t ? r.sessionId : null != l && l.guildId === t ? l.sessionId : void 0
  }
  getHomeSessionSource(t) {
    return null != u && u.guildId === t ? u.source : d.GuildHomeLandingSource.ORGANIC
  }
}
I.displayName = "GuildHomeStore";
var T = new I(o.default, {
  CONNECTION_OPEN: function() {
    E = {}
  },
  GUILD_FEED_FETCH_FRESH_START: function(t) {
    let {
      guildId: e
    } = t;
    delete E[e]
  },
  GUILD_HOME_SET_SCROLL_POSITION: function(t) {
    let {
      guildId: e,
      scrollPosition: n
    } = t;
    E[e] = n
  },
  CHANNEL_SELECT: function(t) {
    let {
      guildId: e,
      channelId: n
    } = t;
    if (null == e || null == n || !(0, c.isStaticChannelRoute)(n) || !(0, c.isGuildHomeChannel)(n)) {
      i = void 0, r = void 0, l = void 0, u = void 0;
      return
    }
    let s = (0, c.buildGuildStaticChannelId)(n, e);
    if (i === s || null != r && r.guildId === e) return !1;
    _(e), i = s, null != u && u.guildId !== e && (u = void 0)
  },
  CHANNEL_PRELOAD: function(t) {
    let {
      guildId: e,
      channelId: n
    } = t;
    if (null == e || null == n || !(0, c.isStaticChannelRoute)(n) || !(0, c.isGuildHomeChannel)(n)) {
      l = void 0;
      return
    }
    if (null != l && l.guildId === e) return !1;
    l = f(e)
  },
  GUILD_HOME_SET_SOURCE: function(t) {
    let {
      source: e,
      guildId: n
    } = t;
    u = {
      guildId: n,
      source: e
    }
  },
  GUILD_HOME_ENSURE_HOME_SESSION: function(t) {
    let {
      guildId: e
    } = t;
    if (null != r && r.guildId === e) return !1;
    _(e)
  },
  LOGOUT: function() {
    r = void 0, l = void 0, u = void 0
  }
})