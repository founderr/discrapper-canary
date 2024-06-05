"use strict";
n.r(t);
var l, a, s, i, d, u, r = n("442837"),
  o = n("570140"),
  c = n("314897"),
  h = n("900849");
(l = d || (d = {})).UNSET = "unset", l.FETCHING = "fetching", l.FAILED = "failed", l.SUCCEEDED = "succeeded";
let f = {
  guilds: {}
};
class g extends(u = r.default.Store) {
  initialize() {
    this.waitFor(c.default)
  }
  isFetchingGuild(e) {
    let t = f.guilds[e];
    return null != t && "fetching" === t.fetchState
  }
  getGuild(e) {
    let t = f.guilds[e];
    return null != t ? t.guild : null
  }
  hasFetchFailed(e) {
    let t = f.guilds[e];
    return null != t && "failed" === t.fetchState
  }
}
i = "GuildPopoutStore", (s = "displayName") in(a = g) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new g(o.default, {
  GUILD_POPOUT_FETCH_START: function(e) {
    let {
      guildId: t
    } = e;
    f.guilds[t] = {
      ...f.guilds[t],
      fetchState: "fetching"
    }
  },
  GUILD_POPOUT_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      guild: n
    } = e, l = (0, h.makeDiscoverableGuild)(n);
    f.guilds[t] = {
      ...f.guilds[t],
      guild: l,
      fetchState: "succeeded"
    }
  },
  GUILD_POPOUT_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    f.guilds[t] = {
      ...f.guilds[t],
      fetchState: "failed"
    }
  }
})