"use strict";
a.r(t), a.d(t, {
  ClanDiscoveryGame: function() {
    return i
  },
  ClanDiscoveryMode: function() {
    return l
  },
  buildSearchCriteriaFromUIState: function() {
    return d
  },
  useClanDiscoveryUIStore: function() {
    return u
  }
});
var n, s, l, i, r = a("652874"),
  o = a("308083");
(n = l || (l = {})).DISCOVERY = "discovery", n.PLAYSTYLE = "playstyle", n.PRIMETIME = "primetime", n.TRAITS = "traits", n.GAMES = "games", (s = i || (i = {})).VALORANT = "valorant", s.GENSHIN = "genshin";
let u = (0, r.default)(e => ({
  mode: "discovery",
  game: "valorant",
  selectedGames: [],
  selectedPlaystyle: {
    id: o.ClanPlaystyles.SOCIAL,
    name: "Very Casual"
  },
  selectedTraits: [],
  selectedPrimetimes: [],
  setMode: t => e({
    mode: t
  }),
  setGame: t => e({
    game: t
  }),
  setSelectedGames: t => e({
    selectedGames: t
  }),
  setSelectedPlaystyle: t => e({
    selectedPlaystyle: t
  }),
  setSelectedTraits: t => e({
    selectedTraits: t
  }),
  setSelectedPrimetime: t => e({
    selectedPrimetimes: t
  })
}));

function d(e) {
  var t;
  let a = e.selectedGames.map(e => e.applicationId),
    n = null === (t = e.selectedPlaystyle) || void 0 === t ? void 0 : t.id,
    s = e.selectedTraits;
  return {
    games: a,
    playstyle: n,
    traits: s,
    primetimes: e.selectedPrimetimes
  }
}