"use strict";
a.r(t), a.d(t, {
  loadStaticClanDiscovery: function() {
    return d
  },
  searchClanDiscovery: function() {
    return c
  }
});
var n = a("505578"),
  s = a.n(n),
  l = a("544891"),
  i = a("570140"),
  r = a("10473"),
  o = a("976757"),
  u = a("981631");

function d(e) {
  return l.HTTP.get({
    url: u.Endpoints.DISCOVERY_GAME(e)
  }).then(t => {
    let a = t.body.clans.map(o.buildClanFromServer);
    i.default.dispatch({
      type: "FETCH_STATIC_CLAN_LIST_SUCCESS",
      game: e,
      clans: a
    })
  })
}

function c(e, t) {
  let a = r.default.getStaticClans(e),
    n = s().v3(JSON.stringify(t)),
    l = {
      status: "loaded",
      loadedAt: Date.now(),
      items: a.sort((e, a) => (0, o.getClanDiscoveryAffinity)(a, t) - (0, o.getClanDiscoveryAffinity)(e, t))
    };
  i.default.dispatch({
    type: "FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS",
    criteriaHash: n,
    searchResult: l
  })
}