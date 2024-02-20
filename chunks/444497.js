"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("446674"),
  s = n("913144"),
  i = n("794818");
let r = null,
  u = !1,
  o = !1;
class d extends a.default.Store {
  getRecommendedGuilds() {
    return r
  }
  getLoadId() {
    return l
  }
  isFetching() {
    return u
  }
  failed() {
    return o
  }
}
d.displayName = "GuildRecommendationsStore";
var c = new d(s.default, {
  GUILD_RECOMMENDATION_FETCH: function() {
    u = !0
  },
  GUILD_RECOMMENDATION_FETCH_SUCCESS: function(e) {
    r = e.recommendedGuilds.map(i.makeDiscoverableGuild), l = e.loadId, u = !1
  },
  GUILD_RECOMMENDATION_FETCH_FAILURE: function() {
    o = !0, u = !1
  }
})