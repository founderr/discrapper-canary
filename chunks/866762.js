    "use strict";
    r.r(e), r("312677");
    var n = r("945124");
    self.addEventListener("message", t => {
      var e, r;
      let {
        data: {
          unsortedClans: i,
          id: o,
          criteria: u
        }
      } = t;
      let f = (e = i, r = u, e.map(t => ({
        ...t,
        affinity: (0, n.getClanDiscoveryAffinity)(t, r)
      })).sort((t, e) => {
        var i, o;
        let u = null !== (i = e.affinity) && void 0 !== i ? i : (0, n.getClanDiscoveryAffinity)(e, r);
        return u - (null !== (o = t.affinity) && void 0 !== o ? o : (0, n.getClanDiscoveryAffinity)(t, r))
      }));
      self.postMessage({
        sortedClans: f,
        id: o
      })
    })