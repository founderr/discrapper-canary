n(47120);
var i = n(735250),
  s = n(470079),
  a = n(338545),
  r = n(481060),
  l = n(950279),
  o = n(741595),
  c = n(359380),
  d = n(480222),
  u = n(207796),
  _ = n(689938);
let E = {
mass: 1,
tension: 280,
friction: 20,
clamp: !0
  },
  h = {
[u.v0.PLAYSTYLE]: function() {
  let [e, t] = s.useState(u.GN.getState().selectedPlaystyle), n = s.useCallback(() => {
    null != e && u.GN.getState().setSelectedPlaystyle(e);
  }, [e]);
  return (0, i.jsx)(d.Z, {
    onClose: n,
    children: (0, i.jsx)(o.Z, {
      title: _.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
      description: _.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
      handleUpdate: t,
      playstyle: e
    })
  });
},
[u.v0.TRAITS]: function() {
  let [e, t] = s.useState(new Set(u.GN.getState().selectedTraits)), n = s.useCallback(() => {
    u.GN.getState().setSelectedTraits(Array.from(e));
  }, [e]);
  return (0, i.jsx)(d.Z, {
    onClose: n,
    children: (0, i.jsx)(c.Z, {
      title: _.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
      description: _.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
      handleUpdate: t,
      interests: e,
      hidePreview: !0
    })
  });
},
[u.v0.GAMES]: function() {
  let [e, t] = s.useState(new Set(u.GN.getState().selectedGames)), n = s.useCallback(() => {
    u.GN.getState().setSelectedGames(Array.from(e));
  }, [e]);
  return (0, i.jsx)(d.Z, {
    onClose: n,
    children: (0, i.jsx)(l.Z, {
      title: _.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
      description: _.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
      handleUpdate: t,
      gameApplicationIds: e
    })
  });
}
  };

function I(e) {
  let {
item: t,
state: n,
cleanUp: l
  } = e, o = s.useMemo(() => {
let e = h[t];
return null == e ? null : (0, i.jsx)(e, {});
  }, [t]), c = (0, r.useSpring)({
from: {
  opacity: 0
},
to: {
  opacity: n === r.TransitionStates.YEETED ? 0 : 1
},
config: E,
onRest: () => {
  n === r.TransitionStates.YEETED && l();
}
  });
  return (0, i.jsx)(a.animated.div, {
style: c,
children: o
  });
}

function m(e) {
  return e;
}

function g(e, t, n, s) {
  return (0, i.jsx)(I, {
item: t,
state: n,
cleanUp: s
  }, e);
}
t.Z = s.memo(function(e) {
  let {
mode: t
  } = e, n = s.useMemo(() => null != h[t] ? [t] : [], [t]);
  return (0, i.jsx)(r.TransitionGroup, {
items: n,
renderItem: g,
getItemKey: m
  });
});