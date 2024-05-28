"use strict";
let a;
n.r(t);
var s, l, i, r, o = n("442837"),
  u = n("570140"),
  d = n("900849");
let c = null,
  f = !1,
  E = !1;
class C extends(r = o.default.Store) {
  getRecommendedGuilds() {
    return c
  }
  getLoadId() {
    return a
  }
  isFetching() {
    return f
  }
  failed() {
    return E
  }
}
i = "GuildRecommendationsStore", (l = "displayName") in(s = C) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new C(u.default, {
  GUILD_RECOMMENDATION_FETCH: function() {
    f = !0
  },
  GUILD_RECOMMENDATION_FETCH_SUCCESS: function(e) {
    c = e.recommendedGuilds.map(d.makeDiscoverableGuild), a = e.loadId, f = !1
  },
  GUILD_RECOMMENDATION_FETCH_FAILURE: function() {
    E = !0, f = !1
  }
})