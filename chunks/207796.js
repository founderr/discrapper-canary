n.d(t, {
  GN: function() {
    return E
  },
  PJ: function() {
    return _
  },
  fH: function() {
    return h
  },
  hz: function() {
    return r
  },
  o2: function() {
    return o
  },
  t1: function() {
    return I
  },
  v0: function() {
    return a
  }
});
var i, s, l, a, r, o, c = n(652874),
  u = n(868888),
  d = n(433517);
(i = a || (a = {})).ADMIN_UPSELL = "admin_upsell", i.GET_STARTED = "get_started", i.DISCOVERY = "discovery", i.PLAYSTYLE = "playstyle", i.TRAITS = "traits", i.GAMES = "games", (s = r || (r = {})).VALORANT = "valorant", s.GENSHIN = "genshin", (l = o || (o = {})).USER_UPSELL = "user_upsell", l.USER_ONBOARDING = "user_onboarding";
let E = (0, c.Z)((0, u.tJ)(e => ({
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
      return null !== (t = d.K.get(e)) && void 0 !== t ? t : null
    },
    setItem: (e, t) => d.K.set(e, t),
    removeItem: e => d.K.remove(e)
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

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = E.getState().mode,
    i = E.getState().started;
  E.setState({
    mode: e,
    previousMode: n,
    started: t || i
  })
}

function _() {
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

function I(e) {
  var t;
  let n = e.selectedGames,
    i = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
  return {
    games: n,
    playstyle: i,
    traits: e.selectedTraits
  }
}