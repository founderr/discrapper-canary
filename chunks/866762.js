    "use strict";
    r.r(t), r("312677");
    var n = r("945124");
    self.addEventListener("message", e => {
      var t, r;
      let {
        data: {
          unsortedClans: i,
          id: o,
          criteria: u
        }
      } = e;
      let f = (t = i, r = u, t.sort((e, t) => (0, n.getClanDiscoveryAffinity)(t, r) - (0, n.getClanDiscoveryAffinity)(e, r)));
      self.postMessage({
        sortedClans: f,
        id: o
      })
    })