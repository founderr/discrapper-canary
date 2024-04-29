"use strict";
n.r(t), n.d(t, {
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
var a, s, l, i, r = n("652874"),
  o = n("868888"),
  u = n("433517");
(a = l || (l = {})).GET_STARTED = "get_started", a.DISCOVERY = "discovery", a.PLAYSTYLE = "playstyle", a.TRAITS = "traits", a.GAMES = "games", (s = i || (i = {})).VALORANT = "valorant", s.GENSHIN = "genshin";
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
  let n = e.selectedGames,
    a = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
  return {
    games: n,
    playstyle: a,
    traits: e.selectedTraits
  }
}