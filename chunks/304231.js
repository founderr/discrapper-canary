"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("920906"),
  i = n("143927"),
  r = n("442837"),
  o = n("607070"),
  u = n("950279"),
  d = n("741595"),
  c = n("754961"),
  f = n("363915"),
  E = n("359380"),
  C = n("207796"),
  h = n("316553"),
  _ = n("689938"),
  S = n("297344");
let m = {
  mass: 1,
  tension: 600,
  friction: 60
};

function p(e) {
  let {
    selectedGame: t
  } = e, n = (0, C.useClanDiscoveryUIStore)(e => e.selectedGames, i.default), l = s.useMemo(() => new Set(n), [n]), r = (0, h.useDiscoveryGameApplicationId)({
    selectedGame: t
  }), o = s.useCallback(e => C.useClanDiscoveryUIStore.getState().setSelectedGames(Array.from(e)), []);
  return (0, a.jsx)(u.default, {
    title: _.default.Messages.CLAN_DISCOVERY_GAME_TITLE,
    description: _.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
    requiredGameId: r,
    handleUpdate: o,
    gameApplicationIds: l
  })
}

function I() {
  let e = (0, C.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, i.default),
    t = s.useCallback(e => C.useClanDiscoveryUIStore.getState().setSelectedPlaystyle(e), []);
  return (0, a.jsx)(d.default, {
    title: _.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
    description: _.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
    handleUpdate: t,
    playstyle: e
  })
}

function g(e) {
  let {
    selectedGame: t
  } = e, n = (0, h.useDiscoveryGameApplicationId)({
    selectedGame: t
  }), l = (0, C.useClanDiscoveryUIStore)(e => e.selectedTraits, i.default), r = s.useMemo(() => new Set(l), [l]), o = s.useCallback(e => C.useClanDiscoveryUIStore.getState().setSelectedTraits([...e]), []);
  return (0, a.jsx)(E.default, {
    title: _.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
    description: _.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
    handleUpdate: o,
    interests: r,
    requiredGameId: n,
    hidePreview: !0
  })
}

function T(e) {
  return e.toString()
}
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    setScreen: n
  } = e, u = s.useRef(null), d = s.useRef(null), E = (0, r.useStateFromStores)([o.default], () => o.default.useReducedMotion), [h, A] = s.useState(0), [N, v] = s.useState(0), R = (0, C.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, i.default), O = (0, C.useClanDiscoveryUIStore)(e => e.previousMode, i.default), L = s.useCallback(e => {
    A(e), N < e && v(e)
  }, [N]), P = s.useCallback(() => {
    0 === h ? (n(C.ClanDiscoveryUserScreens.USER_UPSELL), (0, C.setClanDiscoveryMode)(O)) : L(h - 1)
  }, [h, O, n, L]), y = s.useCallback(() => {
    2 === h ? (0, C.setClanDiscoveryMode)(C.ClanDiscoveryMode.DISCOVERY) : L(h + 1)
  }, [h, L]), M = s.useMemo(() => 1 === h && null == R, [R, h]), D = s.useMemo(() => [{
    index: 0,
    name: _.default.Messages.CLAN_SETUP_GAMES_STEP
  }, {
    index: 1,
    name: _.default.Messages.CLAN_SETUP_PLAYSTYLE_STEP
  }, {
    index: 2,
    name: _.default.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
  }], []), x = (0, l.useSpring)({
    ref: u,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: m
  }), b = (0, l.useSpring)({
    ref: d,
    from: {
      opacity: 0,
      transform: E ? "translateY(0px)" : "translateY(40px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: m
  });
  (0, l.useChain)([u, d], [0, .2]);
  let U = s.useMemo(() => [h], [h]),
    j = s.useCallback(e => {
      switch (e) {
        case 0:
          return (0, a.jsx)(p, {
            selectedGame: t
          });
        case 1:
          return (0, a.jsx)(I, {});
        case 2:
          return (0, a.jsx)(g, {
            selectedGame: t
          })
      }
    }, [t]);
  return (0, a.jsxs)(l.animated.div, {
    className: S.container,
    style: x,
    children: [(0, a.jsx)(l.animated.div, {
      className: S.sequencer,
      style: b,
      children: (0, a.jsx)(f.default, {
        currentStep: h,
        items: U,
        renderItem: j,
        getItemKey: T
      })
    }), (0, a.jsxs)(l.animated.div, {
      className: S.footer,
      children: [(0, a.jsx)(c.ClanSetupProgress, {
        currentStepIndex: h,
        steps: D,
        furthestStepIndex: N,
        onStepClick: L
      }), (0, a.jsx)(c.ClanSetupProgressButtons, {
        className: S.footerButtons,
        isBackDisabled: !1,
        isNextDisabled: M,
        onNextClick: y,
        onBackClick: P
      })]
    })]
  })
})