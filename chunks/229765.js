"use strict";
n.r(t), n.d(t, {
  loadStaticClanDiscovery: function() {
    return d
  },
  searchClanDiscovery: function() {
    return c
  }
});
var a = n("108131"),
  s = n.n(a),
  i = n("544891"),
  l = n("570140"),
  r = n("10473"),
  o = n("976757"),
  u = n("981631");

function d(e) {
  return i.HTTP.get({
    url: u.Endpoints.DISCOVERY_GAME(e)
  }).then(t => {
    let n = t.body.clans.map(o.buildClanFromServer);
    l.default.dispatch({
      type: "FETCH_STATIC_CLAN_LIST_SUCCESS",
      game: e,
      clans: n
    })
  })
}

function c(e, t) {
  let n = r.default.getStaticClans(e),
    a = s().v3(JSON.stringify(t)),
    i = {
      status: "loaded",
      loadedAt: Date.now(),
      items: n.sort((e, n) => (0, o.getClanDiscoveryAffinity)(n, t) - (0, o.getClanDiscoveryAffinity)(e, t))
    };
  l.default.dispatch({
    type: "FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS",
    criteriaHash: a,
    searchResult: i
  })
}