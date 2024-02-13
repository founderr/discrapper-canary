    "use strict";

    function r(t, e) {
      if (t.score === e.score) {
        var n, r, o, i, u, c;
        let a = null !== (i = null !== (o = t.sortable) && void 0 !== o ? o : null === (n = t.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== i ? i : "",
          l = null !== (c = null !== (u = t.sortable) && void 0 !== u ? u : null === (r = e.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== c ? c : "";
        if (a < l) return -1;
        if (a > l) return 1
      }
      return e.score - t.score
    }
    n.r(e), n.d(e, {
      default: function() {
        return r
      }
    })