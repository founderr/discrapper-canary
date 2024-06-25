let s;
var i, l, a, r, o = n(442837),
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
    return s
  }
  isFetching() {
    return E
  }
  failed() {
    return h
  }
}
a = "GuildRecommendationsStore", (l = "displayName") in(i = _) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.Z = new _(c.Z, {
  GUILD_RECOMMENDATION_FETCH: function() {
    E = !0
  },
  GUILD_RECOMMENDATION_FETCH_SUCCESS: function(e) {
    d = e.recommendedGuilds.map(u.PP), s = e.loadId, E = !1
  },
  GUILD_RECOMMENDATION_FETCH_FAILURE: function() {
    h = !0, E = !1
  }
})