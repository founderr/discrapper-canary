n(653041);
var s, i = n(442837),
  a = n(570140),
  l = n(381496),
  r = n(430824);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
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
class u extends(s = i.ZP.PersistedStore) {
  initialize(e) {
    null != e && (o = e), this.waitFor(r.Z)
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
c(u, "displayName", "GuildAffinitiesStore"), c(u, "persistKey", "GuildAffinitiesStore"), t.Z = new u(a.Z, {
  CONNECTION_OPEN: function() {
    return Date.now() - o.lastFetched > 864e5 && (0, l.j)(), !1
  },
  LOAD_GUILD_AFFINITIES_SUCCESS: function(e) {
    let {
      guildAffinities: t
    } = e;
    o.guildAffinities = [], o.guildAffinitiesByGuildId = {}, o.lastFetched = Date.now(), t.forEach((e, t) => {
      let {
        affinity: n,
        guild_id: s
      } = e, i = {
        score: n,
        guildId: s,
        index: t
      };
      o.guildAffinitiesByGuildId[s] = i, o.guildAffinities.push(i)
    })
  },
  LOGOUT: function() {
    d()
  }
})