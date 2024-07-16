n(47120);
var i = n(735250),
  a = n(470079),
  s = n(338545),
  r = n(143927),
  l = n(442837),
  o = n(481060),
  c = n(607070),
  d = n(950279),
  u = n(741595),
  _ = n(359380),
  E = n(480222),
  h = n(207796),
  I = n(316553),
  m = n(689938);
let g = {
mass: 1,
tension: 280,
friction: 20,
clamp: !0
  },
  p = {
[h.v0.PLAYSTYLE]: function() {
  let [e, t] = a.useState(h.GN.getState().selectedPlaystyle), n = a.useCallback(() => {
    null != e && h.GN.getState().setSelectedPlaystyle(e);
  }, [e]);
  return (0, i.jsx)(E.Z, {
    onClose: n,
    children: (0, i.jsx)(u.Z, {
      title: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
      description: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
      handleUpdate: t,
      playstyle: e
    })
  });
},
[h.v0.TRAITS]: function() {
  let e = (0, h.GN)(e => e.game, r.Z),
    t = (0, I.J)({
      selectedGame: e
    }),
    [n, s] = a.useState(new Set(h.GN.getState().selectedTraits)),
    l = a.useCallback(() => {
      h.GN.getState().setSelectedTraits(Array.from(n));
    }, [n]);
  return (0, i.jsx)(E.Z, {
    onClose: l,
    children: (0, i.jsx)(_.Z, {
      title: m.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
      description: m.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
      handleUpdate: s,
      interests: n,
      requiredGameId: t,
      hidePreview: !0
    })
  });
},
[h.v0.GAMES]: function() {
  let e = (0, h.GN)(e => e.game, r.Z),
    t = (0, I.J)({
      selectedGame: e
    }),
    [n, s] = a.useState(new Set(h.GN.getState().selectedGames)),
    l = a.useCallback(() => {
      h.GN.getState().setSelectedGames(Array.from(n));
    }, [n]);
  return (0, i.jsx)(E.Z, {
    onClose: l,
    children: (0, i.jsx)(d.Z, {
      title: m.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
      description: m.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
      requiredGameId: t,
      handleUpdate: s,
      gameApplicationIds: n
    })
  });
}
  };

function T(e) {
  let {
item: t,
state: n,
cleanUp: r
  } = e, d = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), u = a.useMemo(() => {
let e = p[t];
return null == e ? null : (0, i.jsx)(e, {});
  }, [t]), _ = (0, s.useSpring)({
from: {
  opacity: 0
},
to: {
  opacity: n === o.TransitionStates.YEETED ? 0 : 1
},
config: g,
immediate: d,
onRest: () => {
  n === o.TransitionStates.YEETED && r();
}
  });
  return (0, i.jsx)(s.animated.div, {
style: _,
children: u
  });
}

function S(e) {
  return e;
}

function f(e, t, n, a) {
  return (0, i.jsx)(T, {
item: t,
state: n,
cleanUp: a
  }, e);
}
t.Z = a.memo(function(e) {
  let {
mode: t
  } = e, n = a.useMemo(() => null != p[t] ? [t] : [], [t]);
  return (0, i.jsx)(o.TransitionGroup, {
items: n,
renderItem: f,
getItemKey: S
  });
});