"use strict";
r.r(t), r.d(t, {
  ClanDiscoveryGame: function() {
    return o
  },
  ClanDiscoveryMode: function() {
    return l
  },
  ClanDiscoveryUserScreens: function() {
    return s
  },
  buildSearchCriteriaFromUIState: function() {
    return g
  },
  resetClanDiscovery: function() {
    return m
  },
  setClanDiscoveryMode: function() {
    return p
  },
  useClanDiscoveryUIStore: function() {
    return h
  }
});
var a, n, i, l, o, s, c = r("652874"),
  d = r("868888"),
  u = r("433517");
(a = l || (l = {})).ADMIN_UPSELL = "admin_upsell", a.GET_STARTED = "get_started", a.DISCOVERY = "discovery", a.PLAYSTYLE = "playstyle", a.TRAITS = "traits", a.GAMES = "games", (n = o || (o = {})).VALORANT = "valorant", n.GENSHIN = "genshin", (i = s || (s = {})).USER_UPSELL = "user_upsell", i.USER_ONBOARDING = "user_onboarding";
let h = (0, c.default)((0, d.persist)(e => ({
  mode: "admin_upsell",
  previousMode: "admin_upsell",
  game: "valorant",
  started: !1,
  userUpsellScreen: "user_upsell",
  selectedGames: [],
  selectedPlaystyle: null,
  selectedTraits: [],
  setGame: t => e({
    game: t
  }),
  setSelectedGames: t => e({
    selectedGames: t
  }),
  setSelectedPlaystyle: t => e({
    selectedPlaystyle: t,
    started: !0
  }),
  setSelectedTraits: t => e({
    selectedTraits: t,
    started: !0
  }),
  setUserUpsellScreen: t => e({
    userUpsellScreen: t
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
    started: e.started,
    selectedGames: e.selectedGames,
    selectedPlaystyle: e.selectedPlaystyle,
    selectedTraits: e.selectedTraits
  })
}));

function p(e) {
  let t = h.getState().mode;
  h.setState({
    mode: e,
    previousMode: t
  })
}

function m() {
  h.setState({
    started: !1,
    mode: "admin_upsell",
    previousMode: "admin_upsell",
    game: "valorant",
    userUpsellScreen: "user_upsell",
    selectedGames: [],
    selectedPlaystyle: null,
    selectedTraits: []
  })
}

function g(e) {
  var t;
  let r = e.selectedGames,
    a = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
  return {
    games: r,
    playstyle: a,
    traits: e.selectedTraits
  }
}