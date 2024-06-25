n(47120);
var s = n(735250),
  i = n(470079),
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
let T = {
    mass: 1,
    tension: 280,
    friction: 20,
    clamp: !0
  },
  g = {
    [_.v0.PLAYSTYLE]: function() {
      let [e, t] = i.useState(_.GN.getState().selectedPlaystyle), n = i.useCallback(() => {
        null != e && _.GN.getState().setSelectedPlaystyle(e)
      }, [e]);
      return (0, s.jsx)(h.Z, {
        onClose: n,
        children: (0, s.jsx)(d.Z, {
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
        [n, l] = i.useState(new Set(_.GN.getState().selectedTraits)),
        r = i.useCallback(() => {
          _.GN.getState().setSelectedTraits(Array.from(n))
        }, [n]);
      return (0, s.jsx)(h.Z, {
        onClose: r,
        children: (0, s.jsx)(E.Z, {
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
        [n, l] = i.useState(new Set(_.GN.getState().selectedGames)),
        r = i.useCallback(() => {
          _.GN.getState().setSelectedGames(Array.from(n))
        }, [n]);
      return (0, s.jsx)(h.Z, {
        onClose: r,
        children: (0, s.jsx)(u.Z, {
          title: m.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
          description: m.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
          requiredGameId: t,
          handleUpdate: l,
          gameApplicationIds: n
        })
      })
    }
  };

function p(e) {
  let {
    item: t,
    state: n,
    cleanUp: a
  } = e, u = (0, r.e7)([c.Z], () => c.Z.useReducedMotion), d = i.useMemo(() => {
    let e = g[t];
    return null == e ? null : (0, s.jsx)(e, {})
  }, [t]), E = (0, l.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: n === o.TransitionStates.YEETED ? 0 : 1
    },
    config: T,
    immediate: u,
    onRest: () => {
      n === o.TransitionStates.YEETED && a()
    }
  });
  return (0, s.jsx)(l.animated.div, {
    style: E,
    children: d
  })
}

function N(e) {
  return e
}

function S(e, t, n, i) {
  return (0, s.jsx)(p, {
    item: t,
    state: n,
    cleanUp: i
  }, e)
}
t.Z = i.memo(function(e) {
  let {
    mode: t
  } = e, n = i.useMemo(() => null != g[t] ? [t] : [], [t]);
  return (0, s.jsx)(o.TransitionGroup, {
    items: n,
    renderItem: S,
    getItemKey: N
  })
})