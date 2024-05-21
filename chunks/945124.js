    "use strict";
    r.r(e), r.d(e, {
      getClanDiscoveryAffinity: function() {
        return i
      }
    });
    var n = r("137920");

    function i(t, e) {
      let r = 0;
      return null != e.games && (r += 2 * e.games.filter(e => t.games.includes(e)).length), null != e.playstyle && (e.playstyle === t.playstyle ? r += 2 : n.PLAYSTYLE_GROUPS[t.playstyle] === n.PLAYSTYLE_GROUPS[e.playstyle] && (r += 1)), null != e.traits && (r += 2 * Array.from(e.traits).filter(e => t.traits.includes(e)).length), r += Math.random()
    }