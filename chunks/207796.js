"use strict";
a.r(t), a.d(t, {
  ClanDiscoveryGame: function() {
    return i
  },
  ClanDiscoveryMode: function() {
    return l
  },
  buildSearchCriteriaFromUIState: function() {
    return c
  },
  useClanDiscoveryUIStore: function() {
    return d
  }
});
var n, s, l, i, r = a("652874"),
  o = a("868888"),
  u = a("433517");
(n = l || (l = {})).GET_STARTED = "get_started", n.DISCOVERY = "discovery", n.PLAYSTYLE = "playstyle", n.TRAITS = "traits", n.GAMES = "games", (s = i || (i = {})).VALORANT = "valorant", s.GENSHIN = "genshin";
let d = (0, r.default)((0, o.persist)(e => ({
  mode: "get_started",
  game: "valorant",
  selectedGames: [],
  selectedPlaystyle: null,
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
}), {
  name: "clan-discovery",
  getStorage: () => ({
    getItem: e => {
      var t;
      return null !== (t = u.Storage.get(e)) && void 0 !== t ? t : null
    },
    setItem: (e, t) => u.Storage.set(e, t),
    removeItem: e => u.Storage.remove(e)
  }),
  partialize: e => ({
    mode: e.mode,
    game: e.game,
    selectedGames: e.selectedGames,
    selectedPlaystyle: e.selectedPlaystyle,
    selectedTraits: e.selectedTraits
  })
}));

function c(e) {
  var t;
  let a = e.selectedGames,
    n = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
  return {
    games: a,
    playstyle: n,
    traits: e.selectedTraits
  }
}