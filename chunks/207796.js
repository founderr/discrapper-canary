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
(a = l || (l = {})).DISCOVERY = "discovery", a.PLAYSTYLE = "playstyle", a.TRAITS = "traits", a.GAMES = "games", (s = i || (i = {})).VALORANT = "valorant", s.GENSHIN = "genshin";
let u = (0, r.default)(e => ({
  mode: "discovery",
  game: "valorant",
  selectedGames: [],
  selectedPlaystyle: {
    id: o.ClanPlaystyles.SOCIAL,
    name: "Very Casual"
  },
  selectedTraits: [],
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
  })
}));

function d(e) {
  var t;
  let n = e.selectedGames,
    a = null === (t = e.selectedPlaystyle) || void 0 === t ? void 0 : t.id;
  return {
    games: n,
    playstyle: a,
    traits: e.selectedTraits
  }
}