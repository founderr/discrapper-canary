t.d(r, {
  GN: function() {
return h;
  },
  PJ: function() {
return g;
  },
  fH: function() {
return m;
  },
  hz: function() {
return l;
  },
  o2: function() {
return c;
  },
  t1: function() {
return p;
  },
  v0: function() {
return o;
  }
});
var a, n, i, o, l, c, s = t(652874),
  d = t(868888),
  u = t(433517);
(a = o || (o = {})).ADMIN_UPSELL = 'admin_upsell', a.GET_STARTED = 'get_started', a.DISCOVERY = 'discovery', a.PLAYSTYLE = 'playstyle', a.TRAITS = 'traits', a.GAMES = 'games', (n = l || (l = {})).VALORANT = 'valorant', n.GENSHIN = 'genshin', (i = c || (c = {})).USER_UPSELL = 'user_upsell', i.USER_ONBOARDING = 'user_onboarding';
let h = (0, s.Z)((0, d.tJ)(e => ({
  mode: 'admin_upsell',
  previousMode: 'admin_upsell',
  game: 'valorant',
  started: !1,
  userUpsellScreen: 'user_upsell',
  selectedGames: [],
  selectedPlaystyle: null,
  selectedTraits: [],
  setGame: r => e({
game: r
  }),
  setSelectedGames: r => e({
selectedGames: r
  }),
  setSelectedPlaystyle: r => e({
selectedPlaystyle: r,
started: !0
  }),
  setSelectedTraits: r => e({
selectedTraits: r,
started: !0
  }),
  setUserUpsellScreen: r => e({
userUpsellScreen: r
  })
}), {
  name: 'clan-discovery',
  getStorage: () => ({
getItem: e => {
  var r;
  return null !== (r = u.K.get(e)) && void 0 !== r ? r : null;
},
setItem: (e, r) => u.K.set(e, r),
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

function m(e) {
  let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
t = h.getState().mode,
a = h.getState().started;
  h.setState({
mode: e,
previousMode: t,
started: r || a
  });
}

function g() {
  h.setState({
started: !1,
mode: 'admin_upsell',
previousMode: 'admin_upsell',
game: 'valorant',
userUpsellScreen: 'user_upsell',
selectedGames: [],
selectedPlaystyle: null,
selectedTraits: []
  });
}

function p(e) {
  var r;
  let t = e.selectedGames,
a = null !== (r = e.selectedPlaystyle) && void 0 !== r ? r : void 0;
  return {
games: t,
playstyle: a,
traits: e.selectedTraits
  };
}