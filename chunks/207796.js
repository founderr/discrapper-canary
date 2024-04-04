"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryGame: function() {
    return s
  },
  buildSearchCriteriaFromUIState: function() {
    return r
  },
  useClanDiscoveryUIStore: function() {
    return i
  }
});
var a, s, l = n("652874");
(a = s || (s = {})).VALORANT = "valorant", a.GENSHIN = "genshin";
let i = (0, l.default)(e => ({
  game: "valorant",
  selectedGames: [{
    applicationId: "valorant",
    name: "Valorant"
  }],
  selectedPlaystyle: null,
  selectedTraits: [],
  selectedPrimetime: null,
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

function r(e) {
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