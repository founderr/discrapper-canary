"use strict";
n.r(t), n.d(t, {
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
var a, s, l, i, r = n("652874"),
  o = n("308083");
(a = l || (l = {})).DISCOVERY = "discovery", a.PLAYSTYLE = "playstyle", (s = i || (i = {})).VALORANT = "valorant", s.GENSHIN = "genshin";
let u = (0, r.default)(e => ({
  mode: "discovery",
  game: "valorant",
  selectedGames: [{
    applicationId: "valorant",
    name: "Valorant"
  }],
  selectedPlaystyle: {
    id: o.ClanPlaystyles.SOCIAL,
    name: "Very Casual"
  },
  selectedTraits: [],
  selectedPrimetime: null,
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
    selectedPrimetime: t
  })
}));

function d(e) {
  var t;
  let n = e.selectedGames.map(e => e.applicationId),
    a = null === (t = e.selectedPlaystyle) || void 0 === t ? void 0 : t.id,
    s = e.selectedTraits,
    l = e.selectedPrimetime;
  return {
    games: n,
    playstyle: a,
    traits: s,
    primetime: null != l ? l : void 0
  }
}