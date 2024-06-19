n.d(t, {
  X: function() {
    return d
  },
  j: function() {
    return E
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(108131),
  s = n.n(i),
  l = n(544891),
  a = n(570140),
  r = n(10473),
  o = n(976757),
  c = n(981631);
let u = new Worker(new URL(n.p + n.u("59546"), n.b));

function d() {
  return a.Z.dispatch({
    type: "FETCH_STATIC_CLAN_LIST_START"
  }), l.tn.get({
    url: c.ANM.DISCOVERY_ALL_GAMES
  }).then(e => {
    let t = e.body.clans.map(o.Gh);
    a.Z.dispatch({
      type: "FETCH_STATIC_CLAN_LIST_SUCCESS",
      clans: function(e) {
        let t = new Set;
        return e.filter(e => !t.has(e.id) && (t.add(e.id), !0))
      }(t)
    })
  }).catch(e => {
    a.Z.dispatch({
      type: "FETCH_STATIC_CLAN_LIST_FAILURE",
      error: e
    })
  })
}
async function E(e) {
  var t, n, i;
  if ("loaded" === r.Z.getSearchResult(e).status) return;
  let l = s().v3(JSON.stringify(e)),
    o = r.Z.getStaticClans();
  let c = await (t = o, n = l, i = e, new Promise(e => {
      let s = t => {
        let {
          data: {
            id: i,
            sortedClans: l
          }
        } = t;
        n === i && e(l), null == u || u.removeEventListener("message", s)
      };
      null == u || u.addEventListener("message", s);
      null == u || u.postMessage({
        id: n,
        unsortedClans: t,
        criteria: i
      })
    })),
    d = {
      status: "loaded",
      loadedAt: Date.now(),
      items: c
    };
  a.Z.dispatch({
    type: "FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS",
    criteriaHash: l,
    searchResult: d
  })
}