"use strict";
s.r(t), s.d(t, {
  ClanDiscoveryGame: function() {
    return r
  },
  ClanDiscoveryMode: function() {
    return i
  },
  ClanDiscoveryUserScreens: function() {
    return u
  },
  buildSearchCriteriaFromUIState: function() {
    return h
  },
  resetClanDiscovery: function() {
    return f
  },
  setClanDiscoveryMode: function() {
    return _
  },
  useClanDiscoveryUIStore: function() {
    return E
  }
});
var a, n, l, i, r, u, o = s("652874"),
  d = s("868888"),
  c = s("433517");
(a = i || (i = {})).ADMIN_UPSELL = "admin_upsell", a.GET_STARTED = "get_started", a.DISCOVERY = "discovery", a.PLAYSTYLE = "playstyle", a.TRAITS = "traits", a.GAMES = "games", (n = r || (r = {})).VALORANT = "valorant", n.GENSHIN = "genshin", (l = u || (u = {})).USER_UPSELL = "user_upsell", l.USER_ONBOARDING = "user_onboarding";
let E = (0, o.default)((0, d.persist)(e => ({
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
      return null !== (t = c.Storage.get(e)) && void 0 !== t ? t : null
    },
    setItem: (e, t) => c.Storage.set(e, t),
    removeItem: e => c.Storage.remove(e)
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

function _(e) {
  let t = E.getState().mode;
  E.setState({
    mode: e,
    previousMode: t
  })
}

function f() {
  E.setState({
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

function h(e) {
  var t;
  let s = e.selectedGames,
    a = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
  return {
    games: s,
    playstyle: a,
    traits: e.selectedTraits
  }
}