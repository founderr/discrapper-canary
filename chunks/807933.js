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
  h = n("207796"),
  _ = n("316553"),
  C = n("689938");
let m = {
    mass: 1,
    tension: 280,
    friction: 20,
    clamp: !0
  },
  S = {
    [h.ClanDiscoveryMode.PLAYSTYLE]: function() {
      let [e, t] = s.useState(h.useClanDiscoveryUIStore.getState().selectedPlaystyle), n = s.useCallback(() => {
        null != e && h.useClanDiscoveryUIStore.getState().setSelectedPlaystyle(e)
      }, [e]);
      return (0, a.jsx)(E.default, {
        onClose: n,
        children: (0, a.jsx)(c.default, {
          title: C.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
          description: C.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
          handleUpdate: t,
          playstyle: e
        })
      })
    },
    [h.ClanDiscoveryMode.TRAITS]: function() {
      let e = (0, h.useClanDiscoveryUIStore)(e => e.game, i.default),
        t = (0, _.useDiscoveryGameApplicationId)({
          selectedGame: e
        }),
        [n, l] = s.useState(new Set(h.useClanDiscoveryUIStore.getState().selectedTraits)),
        r = s.useCallback(() => {
          h.useClanDiscoveryUIStore.getState().setSelectedTraits(Array.from(n))
        }, [n]);
      return (0, a.jsx)(E.default, {
        onClose: r,
        children: (0, a.jsx)(f.default, {
          title: C.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
          description: C.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
          handleUpdate: l,
          interests: n,
          requiredGameId: t,
          hidePreview: !0
        })
      })
    },
    [h.ClanDiscoveryMode.GAMES]: function() {
      let e = (0, h.useClanDiscoveryUIStore)(e => e.game, i.default),
        t = (0, _.useDiscoveryGameApplicationId)({
          selectedGame: e
        }),
        [n, l] = s.useState(new Set(h.useClanDiscoveryUIStore.getState().selectedGames)),
        r = s.useCallback(() => {
          h.useClanDiscoveryUIStore.getState().setSelectedGames(Array.from(n))
        }, [n]);
      return (0, a.jsx)(E.default, {
        onClose: r,
        children: (0, a.jsx)(d.default, {
          title: C.default.Messages.CLAN_DISCOVERY_GAME_TITLE,
          description: C.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
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
    let e = S[t];
    return null == e ? null : (0, a.jsx)(e, {})
  }, [t]), f = (0, l.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: n === o.TransitionStates.YEETED ? 0 : 1
    },
    config: m,
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
  } = e, n = s.useMemo(() => null != S[t] ? [t] : [], [t]);
  return (0, a.jsx)(o.TransitionGroup, {
    items: n,
    renderItem: g,
    getItemKey: I
  })
})