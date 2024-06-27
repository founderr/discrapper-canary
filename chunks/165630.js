n(653041);
var s, a = n(442837),
  i = n(570140),
  r = n(381496),
  l = n(430824);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {},
  d = () => {
    c = {
      guildAffinitiesByGuildId: {},
      guildAffinities: [],
      lastFetched: 0
    }
  };
d();
class _ extends(s = a.ZP.PersistedStore) {
  initialize(e) {
    null != e && (c = e), this.waitFor(l.Z)
  }
  getState() {
    return c
  }
  getGuildAffinity(e) {
    return c.guildAffinitiesByGuildId[e]
  }
  get affinities() {
    return c.guildAffinities
  }
  get hasRequestResolved() {
    return 0 !== c.lastFetched
  }
}
o(_, "displayName", "GuildAffinitiesStore"), o(_, "persistKey", "GuildAffinitiesStore"), t.Z = new _(i.Z, {
  CONNECTION_OPEN: function() {
    return Date.now() - c.lastFetched > 864e5 && (0, r.j)(), !1
  },
  LOAD_GUILD_AFFINITIES_SUCCESS: function(e) {
    let {
      guildAffinities: t
    } = e;
    c.guildAffinities = [], c.guildAffinitiesByGuildId = {}, c.lastFetched = Date.now(), t.forEach((e, t) => {
      let {
        affinity: n,
        guild_id: s
      } = e, a = {
        score: n,
        guildId: s,
        index: t
      };
      c.guildAffinitiesByGuildId[s] = a, c.guildAffinities.push(a)
    })
  },
  LOGOUT: function() {
    d()
  }
})