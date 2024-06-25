s(653041);
var n, a = s(442837),
  i = s(570140),
  r = s(381496),
  l = s(430824);

function o(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let c = {},
  E = () => {
    c = {
      guildAffinitiesByGuildId: {},
      guildAffinities: [],
      lastFetched: 0
    }
  };
E();
class _ extends(n = a.ZP.PersistedStore) {
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
        affinity: s,
        guild_id: n
      } = e, a = {
        score: s,
        guildId: n,
        index: t
      };
      c.guildAffinitiesByGuildId[n] = a, c.guildAffinities.push(a)
    })
  },
  LOGOUT: function() {
    E()
  }
})