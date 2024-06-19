let i;
var s, l, a, r, o = n(442837),
  c = n(570140),
  u = n(900849);
let d = null,
  E = !1,
  h = !1;
class _ extends(r = o.ZP.Store) {
  getRecommendedGuilds() {
    return d
  }
  getLoadId() {
    return i
  }
  isFetching() {
    return E
  }
  failed() {
    return h
  }
}
a = "GuildRecommendationsStore", (l = "displayName") in(s = _) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, t.Z = new _(c.Z, {
  GUILD_RECOMMENDATION_FETCH: function() {
    E = !0
  },
  GUILD_RECOMMENDATION_FETCH_SUCCESS: function(e) {
    d = e.recommendedGuilds.map(u.PP), i = e.loadId, E = !1
  },
  GUILD_RECOMMENDATION_FETCH_FAILURE: function() {
    h = !0, E = !1
  }
})