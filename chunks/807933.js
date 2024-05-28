"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("920906"),
  i = n("143927"),
  r = n("442837"),
  o = n("481060"),
  u = n("607070"),
  d = n("950279"),
  c = n("741595"),
  f = n("359380"),
  E = n("480222"),
  C = n("207796"),
  h = n("316553"),
  _ = n("689938");
let S = {
    mass: 1,
    tension: 280,
    friction: 20,
    clamp: !0
  },
  m = {
    [C.ClanDiscoveryMode.PLAYSTYLE]: function() {
      let [e, t] = s.useState(C.useClanDiscoveryUIStore.getState().selectedPlaystyle), n = s.useCallback(() => {
        null != e && C.useClanDiscoveryUIStore.getState().setSelectedPlaystyle(e)
      }, [e]);
      return (0, a.jsx)(E.default, {
        onClose: n,
        children: (0, a.jsx)(c.default, {
          title: _.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
          description: _.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
          handleUpdate: t,
          playstyle: e
        })
      })
    },
    [C.ClanDiscoveryMode.TRAITS]: function() {
      let e = (0, C.useClanDiscoveryUIStore)(e => e.game, i.default),
        t = (0, h.useDiscoveryGameApplicationId)({
          selectedGame: e
        }),
        [n, l] = s.useState(new Set(C.useClanDiscoveryUIStore.getState().selectedTraits)),
        r = s.useCallback(() => {
          C.useClanDiscoveryUIStore.getState().setSelectedTraits(Array.from(n))
        }, [n]);
      return (0, a.jsx)(E.default, {
        onClose: r,
        children: (0, a.jsx)(f.default, {
          title: _.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
          description: _.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
          handleUpdate: l,
          interests: n,
          requiredGameId: t,
          hidePreview: !0
        })
      })
    },
    [C.ClanDiscoveryMode.GAMES]: function() {
      let e = (0, C.useClanDiscoveryUIStore)(e => e.game, i.default),
        t = (0, h.useDiscoveryGameApplicationId)({
          selectedGame: e
        }),
        [n, l] = s.useState(new Set(C.useClanDiscoveryUIStore.getState().selectedGames)),
        r = s.useCallback(() => {
          C.useClanDiscoveryUIStore.getState().setSelectedGames(Array.from(n))
        }, [n]);
      return (0, a.jsx)(E.default, {
        onClose: r,
        children: (0, a.jsx)(d.default, {
          title: _.default.Messages.CLAN_DISCOVERY_GAME_TITLE,
          description: _.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
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
    cleanUp: i
  } = e, d = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), c = s.useMemo(() => {
    let e = m[t];
    return null == e ? null : (0, a.jsx)(e, {})
  }, [t]), f = (0, l.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: n === o.TransitionStates.YEETED ? 0 : 1
    },
    config: S,
    immediate: d,
    onRest: () => {
      n === o.TransitionStates.YEETED && i()
    }
  });
  return (0, a.jsx)(l.animated.div, {
    style: f,
    children: c
  })
}

function I(e) {
  return e
}

function g(e, t, n, s) {
  return (0, a.jsx)(p, {
    item: t,
    state: n,
    cleanUp: s
  }, e)
}
t.default = s.memo(function(e) {
  let {
    mode: t
  } = e, n = s.useMemo(() => null != m[t] ? [t] : [], [t]);
  return (0, a.jsx)(o.TransitionGroup, {
    items: n,
    renderItem: g,
    getItemKey: I
  })
})