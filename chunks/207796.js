n.d(t, {
  GN: function() {
return _;
  },
  PJ: function() {
return h;
  },
  fH: function() {
return E;
  },
  hz: function() {
return i;
  },
  o2: function() {
return a;
  },
  qQ: function() {
return f;
  },
  t1: function() {
return p;
  },
  v0: function() {
return r;
  }
}), n(47120);
var r, i, a, s, o, l, u = n(652874),
  c = n(868888),
  d = n(433517);
(s = r || (r = {})).ADMIN_UPSELL = 'admin_upsell', s.GET_STARTED = 'get_started', s.DISCOVERY = 'discovery', s.PLAYSTYLE = 'playstyle', s.TRAITS = 'traits', s.GAMES = 'games', s.SAVED_GUILDS = 'saved_guilds', (o = i || (i = {})).VALORANT = 'valorant', o.GENSHIN = 'genshin', (l = a || (a = {})).USER_UPSELL = 'user_upsell', l.USER_ONBOARDING = 'user_onboarding';
let _ = (0, u.Z)((0, c.tJ)(e => ({
  mode: 'admin_upsell',
  previousMode: 'admin_upsell',
  game: 'valorant',
  started: !1,
  userUpsellScreen: 'user_upsell',
  savedGuildIds: [],
  selectedGames: [],
  selectedPlaystyle: null,
  selectedTraits: [],
  setSavedGuildIds: t => e({
savedGuildIds: t
  }),
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
  name: 'clan-discovery',
  getStorage: () => ({
getItem: e => {
  var t;
  return null !== (t = d.K.get(e)) && void 0 !== t ? t : null;
},
setItem: (e, t) => d.K.set(e, t),
removeItem: e => d.K.remove(e)
  }),
  partialize: e => ({
mode: e.mode,
game: e.game,
started: e.started,
savedGuildIds: e.savedGuildIds,
selectedGames: e.selectedGames,
selectedPlaystyle: e.selectedPlaystyle,
selectedTraits: e.selectedTraits
  })
}));

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = _.getState().mode,
r = _.getState().started;
  _.setState({
mode: e,
previousMode: n,
started: t || r
  });
}

function f(e, t) {
  let n = _.getState().savedGuildIds,
r = t ? [
  ...n,
  e
] : n.filter(t => t !== e);
  _.setState({
savedGuildIds: r
  });
}

function h() {
  _.setState({
started: !1,
mode: 'admin_upsell',
previousMode: 'admin_upsell',
game: 'valorant',
userUpsellScreen: 'user_upsell',
savedGuildIds: [],
selectedGames: [],
selectedPlaystyle: null,
selectedTraits: []
  });
}

function p(e) {
  var t;
  let n = e.selectedGames,
r = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
  return {
games: n,
playstyle: r,
traits: e.selectedTraits
  };
}