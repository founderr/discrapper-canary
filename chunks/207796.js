"use strict";
r.r(t), r.d(t, {
  ClanDiscoveryGame: function() {
    return o
  },
  ClanDiscoveryMode: function() {
    return n
  },
  ClanDiscoveryUserScreens: function() {
    return s
  },
  buildSearchCriteriaFromUIState: function() {
    return g
  },
  resetClanDiscovery: function() {
    return p
  },
  setClanDiscoveryMode: function() {
    return m
  },
  useClanDiscoveryUIStore: function() {
    return h
  }
});
var a, i, l, n, o, s, c = r("652874"),
  d = r("868888"),
  u = r("433517");
(a = n || (n = {})).ADMIN_UPSELL = "admin_upsell", a.GET_STARTED = "get_started", a.DISCOVERY = "discovery", a.PLAYSTYLE = "playstyle", a.TRAITS = "traits", a.GAMES = "games", (i = o || (o = {})).VALORANT = "valorant", i.GENSHIN = "genshin", (l = s || (s = {})).USER_UPSELL = "user_upsell", l.USER_ONBOARDING = "user_onboarding";
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

function m(e) {
  let t = h.getState().mode;
  h.setState({
    mode: e,
    previousMode: t
  })
}

function p() {
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