"use strict";
n.r(t), n.d(t, {
  loadStaticClanDiscovery: function() {
    return c
  },
  searchClanDiscovery: function() {
    return f
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var a = n("108131"),
  s = n.n(a),
  i = n("544891"),
  l = n("570140"),
  r = n("10473"),
  o = n("976757"),
  u = n("981631");
let d = new Worker(new URL(n.p + n.u("59546"), n.b));

function c(e) {
  return i.HTTP.get({
    url: u.Endpoints.DISCOVERY_GAME(e)
  }).then(t => {
    let n = t.body.clans.map(o.buildClanFromServer);
    l.default.dispatch({
      type: "FETCH_STATIC_CLAN_LIST_SUCCESS",
      game: e,
      clans: function(e) {
        let t = new Set;
        return e.filter(e => !t.has(e.id) && (t.add(e.id), !0))
      }(n)
    })
  })
}
async function f(e, t) {
  var n, a, i;
  let o = s().v3(JSON.stringify(t)),
    u = r.default.getStaticClans(e);
  let c = await (n = u, a = o, i = t, new Promise(e => {
      let t = n => {
        let {
          data: {
            id: s,
            sortedClans: i
          }
        } = n;
        a === s && e(i), null == d || d.removeEventListener("message", t)
      };
      null == d || d.addEventListener("message", t);
      null == d || d.postMessage({
        id: a,
        unsortedClans: n,
        criteria: i
      })
    })),
    f = {
      status: "loaded",
      loadedAt: Date.now(),
      items: c
    };
  l.default.dispatch({
    type: "FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS",
    criteriaHash: o,
    searchResult: f
  })
}