var i, s = n(108131),
  l = n.n(s),
  a = n(442837),
  r = n(570140),
  o = n(70956);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = [],
  d = !1,
  E = !1,
  h = {
    status: "unloaded"
  },
  _ = {};
class I extends(i = a.ZP.Store) {
  getSearchResult(e) {
    let t = _[l().v3(JSON.stringify(e))];
    return null == t || t.loadedAt < Date.now() - o.Z.Millis.HOUR ? h : t
  }
  hasLoadedStaticClanDiscovery() {
    return d
  }
  getStaticClans() {
    return u
  }
  isLoading() {
    return E
  }
}
c(I, "displayName", "ClanDiscoveryStore"), c(I, "persistKey", "ClanDiscoveryStore"), t.Z = new I(r.Z, {
  FETCH_STATIC_CLAN_LIST_START: function() {
    E = !0
  },
  FETCH_STATIC_CLAN_LIST_SUCCESS: function(e) {
    u = e.clans, d = !0, E = !1
  },
  FETCH_STATIC_CLAN_LIST_FAILURE: function() {
    E = !1
  },
  FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS: function(e) {
    _[e.criteriaHash] = e.searchResult
  }
})