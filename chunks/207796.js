n.d(t, {
  GN: function() {
    return E
  },
  PJ: function() {
    return h
  },
  fH: function() {
    return _
  },
  hz: function() {
    return r
  },
  o2: function() {
    return c
  },
  t1: function() {
    return T
  },
  v0: function() {
    return l
  }
});
var s, a, i, l, r, c, o = n(652874),
  d = n(868888),
  u = n(433517);
(s = l || (l = {})).ADMIN_UPSELL = "admin_upsell", s.GET_STARTED = "get_started", s.DISCOVERY = "discovery", s.PLAYSTYLE = "playstyle", s.TRAITS = "traits", s.GAMES = "games", (a = r || (r = {})).VALORANT = "valorant", a.GENSHIN = "genshin", (i = c || (c = {})).USER_UPSELL = "user_upsell", i.USER_ONBOARDING = "user_onboarding";
let E = (0, o.Z)((0, d.tJ)(e => ({
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
      return null !== (t = u.K.get(e)) && void 0 !== t ? t : null
    },
    setItem: (e, t) => u.K.set(e, t),
    removeItem: e => u.K.remove(e)
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
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = E.getState().mode,
    s = E.getState().started;
  E.setState({
    mode: e,
    previousMode: n,
    started: t || s
  })
}

function h() {
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

function T(e) {
  var t;
  let n = e.selectedGames,
    s = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
  return {
    games: n,
    playstyle: s,
    traits: e.selectedTraits
  }
}