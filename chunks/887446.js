"use strict";
let i, l, r, o;
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var u = n("748820"),
  s = n("446674"),
  a = n("913144"),
  c = n("724210"),
  d = n("515631");
let f = {};

function E(e) {
  return {
    guildId: e,
    sessionId: (0, u.v4)()
  }
}

function _(e) {
  null != r && r.guildId === e ? (l = r, r = void 0) : l = E(e)
}
class I extends s.default.Store {
  getSavedScrollPosition(e) {
    return f[e]
  }
  getHomeSessionId(e) {
    return null != l && l.guildId === e ? l.sessionId : null != r && r.guildId === e ? r.sessionId : void 0
  }
  getHomeSessionSource(e) {
    return null != o && o.guildId === e ? o.source : d.GuildHomeLandingSource.ORGANIC
  }
}
I.displayName = "GuildHomeStore";
var p = new I(a.default, {
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
      i = void 0, l = void 0, r = void 0, o = void 0;
      return
    }
    let u = (0, c.buildGuildStaticChannelId)(n, t);
    if (i === u || null != l && l.guildId === t) return !1;
    _(t), i = u, null != o && o.guildId !== t && (o = void 0)
  },
  CHANNEL_PRELOAD: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t || null == n || !(0, c.isStaticChannelRoute)(n) || !(0, c.isGuildHomeChannel)(n)) {
      r = void 0;
      return
    }
    if (null != r && r.guildId === t) return !1;
    r = E(t)
  },
  GUILD_HOME_SET_SOURCE: function(e) {
    let {
      source: t,
      guildId: n
    } = e;
    o = {
      guildId: n,
      source: t
    }
  },
  GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
    let {
      guildId: t
    } = e;
    if (null != l && l.guildId === t) return !1;
    _(t)
  },
  LOGOUT: function() {
    l = void 0, r = void 0, o = void 0
  }
})