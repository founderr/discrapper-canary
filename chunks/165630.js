"use strict";
s.r(t), s("653041");
var a, n = s("442837"),
  l = s("570140"),
  i = s("381496"),
  r = s("430824");

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let o = {},
  d = () => {
    o = {
      guildAffinitiesByGuildId: {},
      guildAffinities: [],
      lastFetched: 0
    }
  };
d();
class c extends(a = n.default.PersistedStore) {
  initialize(e) {
    null != e && (o = e), this.waitFor(r.default)
  }
  getState() {
    return o
  }
  getGuildAffinity(e) {
    return o.guildAffinitiesByGuildId[e]
  }
  get affinities() {
    return o.guildAffinities
  }
  get hasRequestResolved() {
    return 0 !== o.lastFetched
  }
}
u(c, "displayName", "GuildAffinitiesStore"), u(c, "persistKey", "GuildAffinitiesStore"), t.default = new c(l.default, {
  CONNECTION_OPEN: function() {
    return Date.now() - o.lastFetched > 864e5 && (0, i.fetchGuildAffinities)(), !1
  },
  LOAD_GUILD_AFFINITIES_SUCCESS: function(e) {
    let {
      guildAffinities: t
    } = e;
    o.guildAffinities = [], o.guildAffinitiesByGuildId = {}, o.lastFetched = Date.now(), t.forEach((e, t) => {
      let {
        affinity: s,
        guild_id: a
      } = e, n = {
        score: s,
        guildId: a,
        index: t
      };
      o.guildAffinitiesByGuildId[a] = n, o.guildAffinities.push(n)
    })
  },
  LOGOUT: function() {
    d()
  }
})