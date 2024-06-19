n(47120);
var i = n(735250),
  s = n(470079),
  l = n(920906),
  a = n(143927),
  r = n(442837),
  o = n(481060),
  c = n(607070),
  u = n(950279),
  d = n(741595),
  E = n(359380),
  h = n(480222),
  _ = n(207796),
  I = n(316553),
  m = n(689938);
let g = {
    mass: 1,
    tension: 280,
    friction: 20,
    clamp: !0
  },
  p = {
    [_.v0.PLAYSTYLE]: function() {
      let [e, t] = s.useState(_.GN.getState().selectedPlaystyle), n = s.useCallback(() => {
        null != e && _.GN.getState().setSelectedPlaystyle(e)
      }, [e]);
      return (0, i.jsx)(h.Z, {
        onClose: n,
        children: (0, i.jsx)(d.Z, {
          title: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
          description: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
          handleUpdate: t,
          playstyle: e
        })
      })
    },
    [_.v0.TRAITS]: function() {
      let e = (0, _.GN)(e => e.game, a.Z),
        t = (0, I.J)({
          selectedGame: e
        }),
        [n, l] = s.useState(new Set(_.GN.getState().selectedTraits)),
        r = s.useCallback(() => {
          _.GN.getState().setSelectedTraits(Array.from(n))
        }, [n]);
      return (0, i.jsx)(h.Z, {
        onClose: r,
        children: (0, i.jsx)(E.Z, {
          title: m.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
          description: m.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
          handleUpdate: l,
          interests: n,
          requiredGameId: t,
          hidePreview: !0
        })
      })
    },
    [_.v0.GAMES]: function() {
      let e = (0, _.GN)(e => e.game, a.Z),
        t = (0, I.J)({
          selectedGame: e
        }),
        [n, l] = s.useState(new Set(_.GN.getState().selectedGames)),
        r = s.useCallback(() => {
          _.GN.getState().setSelectedGames(Array.from(n))
        }, [n]);
      return (0, i.jsx)(h.Z, {
        onClose: r,
        children: (0, i.jsx)(u.Z, {
          title: m.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
          description: m.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
          requiredGameId: t,
          handleUpdate: l,
          gameApplicationIds: n
        })
      })
    }
  };

function T(e) {
  let {
    item: t,
    state: n,
    cleanUp: a
  } = e, u = (0, r.e7)([c.Z], () => c.Z.useReducedMotion), d = s.useMemo(() => {
    let e = p[t];
    return null == e ? null : (0, i.jsx)(e, {})
  }, [t]), E = (0, l.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: n === o.TransitionStates.YEETED ? 0 : 1
    },
    config: g,
    immediate: u,
    onRest: () => {
      n === o.TransitionStates.YEETED && a()
    }
  });
  return (0, i.jsx)(l.animated.div, {
    style: E,
    children: d
  })
}

function N(e) {
  return e
}

function S(e, t, n, s) {
  return (0, i.jsx)(T, {
    item: t,
    state: n,
    cleanUp: s
  }, e)
}
t.Z = s.memo(function(e) {
  let {
    mode: t
  } = e, n = s.useMemo(() => null != p[t] ? [t] : [], [t]);
  return (0, i.jsx)(o.TransitionGroup, {
    items: n,
    renderItem: S,
    getItemKey: N
  })
})