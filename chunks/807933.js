n(47120);
var i = n(735250),
  s = n(470079),
  a = n(338545),
  r = n(143927),
  l = n(481060),
  o = n(950279),
  c = n(741595),
  d = n(359380),
  u = n(480222),
  _ = n(207796),
  h = n(316553),
  E = n(689938);
let I = {
mass: 1,
tension: 280,
friction: 20,
clamp: !0
  },
  m = {
[_.v0.PLAYSTYLE]: function() {
  let [e, t] = s.useState(_.GN.getState().selectedPlaystyle), n = s.useCallback(() => {
    null != e && _.GN.getState().setSelectedPlaystyle(e);
  }, [e]);
  return (0, i.jsx)(u.Z, {
    onClose: n,
    children: (0, i.jsx)(c.Z, {
      title: E.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
      description: E.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
      handleUpdate: t,
      playstyle: e
    })
  });
},
[_.v0.TRAITS]: function() {
  let e = (0, _.GN)(e => e.game, r.Z),
    t = (0, h.J)({
      selectedGame: e
    }),
    [n, a] = s.useState(new Set(_.GN.getState().selectedTraits)),
    l = s.useCallback(() => {
      _.GN.getState().setSelectedTraits(Array.from(n));
    }, [n]);
  return (0, i.jsx)(u.Z, {
    onClose: l,
    children: (0, i.jsx)(d.Z, {
      title: E.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
      description: E.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
      handleUpdate: a,
      interests: n,
      requiredGameId: t,
      hidePreview: !0
    })
  });
},
[_.v0.GAMES]: function() {
  let e = (0, _.GN)(e => e.game, r.Z),
    t = (0, h.J)({
      selectedGame: e
    }),
    [n, a] = s.useState(new Set(_.GN.getState().selectedGames)),
    l = s.useCallback(() => {
      _.GN.getState().setSelectedGames(Array.from(n));
    }, [n]);
  return (0, i.jsx)(u.Z, {
    onClose: l,
    children: (0, i.jsx)(o.Z, {
      title: E.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
      description: E.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
      requiredGameId: t,
      handleUpdate: a,
      gameApplicationIds: n
    })
  });
}
  };

function g(e) {
  let {
item: t,
state: n,
cleanUp: r
  } = e, o = s.useMemo(() => {
let e = m[t];
return null == e ? null : (0, i.jsx)(e, {});
  }, [t]), c = (0, l.useSpring)({
from: {
  opacity: 0
},
to: {
  opacity: n === l.TransitionStates.YEETED ? 0 : 1
},
config: I,
onRest: () => {
  n === l.TransitionStates.YEETED && r();
}
  });
  return (0, i.jsx)(a.animated.div, {
style: c,
children: o
  });
}

function p(e) {
  return e;
}

function T(e, t, n, s) {
  return (0, i.jsx)(g, {
item: t,
state: n,
cleanUp: s
  }, e);
}
t.Z = s.memo(function(e) {
  let {
mode: t
  } = e, n = s.useMemo(() => null != m[t] ? [t] : [], [t]);
  return (0, i.jsx)(l.TransitionGroup, {
items: n,
renderItem: T,
getItemKey: p
  });
});