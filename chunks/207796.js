"use strict";
a.r(t), a.d(t, {
  ClanDiscoveryGame: function() {
    return i
  },
  ClanDiscoveryMode: function() {
    return l
  },
  GENSHIN_BACKGROUND_URL: function() {
    return u
  },
  VALORANT_BACKGROUND_URL: function() {
    return d
  },
  buildSearchCriteriaFromUIState: function() {
    return f
  },
  useClanDiscoveryUIStore: function() {
    return c
  }
});
var n, s, l, i, r = a("652874"),
  o = a("868888");
(n = l || (l = {})).GET_STARTED = "get_started", n.DISCOVERY = "discovery", n.PLAYSTYLE = "playstyle", n.TRAITS = "traits", n.GAMES = "games", (s = i || (i = {})).VALORANT = "valorant", s.GENSHIN = "genshin";
let u = "https://cdn.discordapp.com/assets/clans/Genshin_GetStarted_Background.png",
  d = "https://cdn.discordapp.com/assets/clans/Valorant_GetStarted_Background.png",
  c = (0, r.default)((0, o.persist)(e => ({
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
    partialize: e => ({
      mode: e.mode,
      game: e.game,
      selectedGames: e.selectedGames,
      selectedPlaystyle: e.selectedPlaystyle,
      selectedTraits: e.selectedTraits
    })
  }));

function f(e) {
  var t;
  let a = e.selectedGames,
    n = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
  return {
    games: a,
    playstyle: n,
    traits: e.selectedTraits
  }
}