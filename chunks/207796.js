"use strict";
a.r(t), a.d(t, {
  ClanDiscoveryGame: function() {
    return s
  },
  ClanDiscoveryMode: function() {
    return n
  },
  buildSearchCriteriaFromUIState: function() {
    return d
  },
  useClanDiscoveryUIStore: function() {
    return u
  }
}), a("47120");
var n, s, l, i, r = a("652874"),
  o = a("308083");
(l = n || (n = {})).DISCOVERY = "discovery", l.PLAYSTYLE = "playstyle", l.PRIMETIME = "primetime", l.TRAITS = "traits", l.GAMES = "games", (i = s || (s = {})).VALORANT = "valorant", i.GENSHIN = "genshin";
let u = (0, r.default)(e => ({
  mode: "discovery",
  game: "valorant",
  selectedGames: [{
    applicationId: o.VALORANT_ID,
    name: "Valorant"
  }],
  selectedPlaystyle: {
    id: o.ClanPlaystyles.SOCIAL,
    name: "Very Casual"
  },
  selectedTraits: new Set,
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