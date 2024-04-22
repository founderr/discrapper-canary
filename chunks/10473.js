"use strict";
a.r(t);
var n, s = a("505578"),
  l = a.n(s),
  i = a("442837"),
  r = a("570140"),
  o = a("70956");

function u(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let d = {},
  c = {
    status: "unloaded"
  },
  f = [],
  E = {};
class h extends(n = i.default.PersistedStore) {
  initialize(e) {
    null != e && (f = e.favoriteClans)
  }
  getState() {
    return {
      favoriteClans: f
    }
  }
  getFavoriteClans() {
    return f
  }
  getSearchResult(e) {
    let t = E[l().v3(JSON.stringify(e))];
    return null == t || t.loadedAt < Date.now() - o.default.Millis.HOUR ? c : t
  }
  hasLoadedStaticClanDiscovery(e) {
    return null != e && null != d[e]
  }
  getStaticClans(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : []
  }
}
u(h, "displayName", "ClanDiscoveryStore"), u(h, "persistKey", "ClanDiscoveryStore"), t.default = new h(r.default, {
  FETCH_STATIC_CLAN_LIST_SUCCESS: function(e) {
    d[e.game] = e.clans
  },
  FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS: function(e) {
    E[e.criteriaHash] = e.searchResult
  }
})