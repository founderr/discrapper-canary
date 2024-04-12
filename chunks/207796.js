"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryGame: function() {
    return s
  },
  ClanDiscoveryMode: function() {
    return a
  },
  buildSearchCriteriaFromUIState: function() {
    return d
  },
  useClanDiscoveryUIStore: function() {
    return u
  }
}), n("47120");
var a, s, l, i, r = n("652874"),
  o = n("308083");
(l = a || (a = {})).DISCOVERY = "discovery", l.PLAYSTYLE = "playstyle", l.PRIMETIME = "primetime", l.TRAITS = "traits", (i = s || (s = {})).VALORANT = "valorant", i.GENSHIN = "genshin";
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
  let n = e.selectedGames.map(e => e.applicationId),
    a = null === (t = e.selectedPlaystyle) || void 0 === t ? void 0 : t.id,
    s = e.selectedTraits;
  return {
    games: n,
    playstyle: a,
    traits: s,
    primetimes: e.selectedPrimetimes
  }
}