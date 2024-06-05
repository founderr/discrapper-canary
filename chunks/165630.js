"use strict";
s.r(t), s("653041");
var a, n = s("442837"),
  l = s("570140"),
  i = s("381496"),
  r = s("430824");

function o(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let u = {},
  d = () => {
    u = {
      guildAffinitiesByGuildId: {},
      guildAffinities: [],
      lastFetched: 0
    }
  };
d();
class c extends(a = n.default.PersistedStore) {
  initialize(e) {
    null != e && (u = e), this.waitFor(r.default)
  }
  getState() {
    return u
  }
  getGuildAffinity(e) {
    return u.guildAffinitiesByGuildId[e]
  }
  get affinities() {
    return u.guildAffinities
  }
  get hasRequestResolved() {
    return 0 !== u.lastFetched
  }
}
o(c, "displayName", "GuildAffinitiesStore"), o(c, "persistKey", "GuildAffinitiesStore"), t.default = new c(l.default, {
  CONNECTION_OPEN: function() {
    return Date.now() - u.lastFetched > 864e5 && (0, i.fetchGuildAffinities)(), !1
  },
  LOAD_GUILD_AFFINITIES_SUCCESS: function(e) {
    let {
      guildAffinities: t
    } = e;
    u.guildAffinities = [], u.guildAffinitiesByGuildId = {}, u.lastFetched = Date.now(), t.forEach((e, t) => {
      let {
        affinity: s,
        guild_id: a
      } = e, n = {
        score: s,
        guildId: a,
        index: t
      };
      u.guildAffinitiesByGuildId[a] = n, u.guildAffinities.push(n)
    })
  },
  LOGOUT: function() {
    d()
  }
})