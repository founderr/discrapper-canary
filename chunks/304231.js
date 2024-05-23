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
  h = n("207796"),
  _ = n("316553"),
  C = n("689938"),
  m = n("297344");
let S = {
  mass: 1,
  tension: 600,
  friction: 60
};

function p(e) {
  let {
    selectedGame: t
  } = e, n = (0, h.useClanDiscoveryUIStore)(e => e.selectedGames, i.default), l = s.useMemo(() => new Set(n), [n]), r = (0, _.useDiscoveryGameApplicationId)({
    selectedGame: t
  }), o = s.useCallback(e => h.useClanDiscoveryUIStore.getState().setSelectedGames(Array.from(e)), []);
  return (0, a.jsx)(u.default, {
    title: C.default.Messages.CLAN_DISCOVERY_GAME_TITLE,
    description: C.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
    requiredGameId: r,
    handleUpdate: o,
    gameApplicationIds: l
  })
}

function g() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, i.default),
    t = s.useCallback(e => h.useClanDiscoveryUIStore.getState().setSelectedPlaystyle(e), []);
  return (0, a.jsx)(d.default, {
    title: C.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
    description: C.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
    handleUpdate: t,
    playstyle: e
  })
}

function I(e) {
  let {
    selectedGame: t
  } = e, n = (0, _.useDiscoveryGameApplicationId)({
    selectedGame: t
  }), l = (0, h.useClanDiscoveryUIStore)(e => e.selectedTraits, i.default), r = s.useMemo(() => new Set(l), [l]), o = s.useCallback(e => h.useClanDiscoveryUIStore.getState().setSelectedTraits([...e]), []);
  return (0, a.jsx)(E.default, {
    title: C.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
    description: C.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
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
  } = e, u = s.useRef(null), d = s.useRef(null), E = (0, r.useStateFromStores)([o.default], () => o.default.useReducedMotion), [_, A] = s.useState(0), [N, v] = s.useState(0), R = (0, h.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, i.default), O = (0, h.useClanDiscoveryUIStore)(e => e.previousMode, i.default), L = s.useCallback(e => {
    A(e), N < e && v(e)
  }, [N]), M = s.useCallback(() => {
    0 === _ ? (n(h.ClanDiscoveryUserScreens.USER_UPSELL), (0, h.setClanDiscoveryMode)(O)) : L(_ - 1)
  }, [_, O, n, L]), y = s.useCallback(() => {
    2 === _ ? (0, h.setClanDiscoveryMode)(h.ClanDiscoveryMode.DISCOVERY) : L(_ + 1)
  }, [_, L]), P = s.useMemo(() => 1 === _ && null == R, [R, _]), x = s.useMemo(() => [{
    index: 0,
    name: C.default.Messages.CLAN_SETUP_GAMES_STEP
  }, {
    index: 1,
    name: C.default.Messages.CLAN_SETUP_PLAYSTYLE_STEP
  }, {
    index: 2,
    name: C.default.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
  }], []), D = (0, l.useSpring)({
    ref: u,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: S
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
    config: S
  });
  (0, l.useChain)([u, d], [0, .2]);
  let U = s.useMemo(() => [_], [_]),
    j = s.useCallback(e => {
      switch (e) {
        case 0:
          return (0, a.jsx)(p, {
            selectedGame: t
          });
        case 1:
          return (0, a.jsx)(g, {});
        case 2:
          return (0, a.jsx)(I, {
            selectedGame: t
          })
      }
    }, [t]);
  return (0, a.jsxs)(l.animated.div, {
    className: m.container,
    style: D,
    children: [(0, a.jsx)(l.animated.div, {
      className: m.sequencer,
      style: b,
      children: (0, a.jsx)(f.default, {
        currentStep: _,
        items: U,
        renderItem: j,
        getItemKey: T
      })
    }), (0, a.jsxs)(l.animated.div, {
      className: m.footer,
      children: [(0, a.jsx)(c.ClanSetupProgress, {
        currentStepIndex: _,
        steps: x,
        furthestStepIndex: N,
        onStepClick: L
      }), (0, a.jsx)(c.ClanSetupProgressButtons, {
        className: m.footerButtons,
        isBackDisabled: !1,
        isNextDisabled: P,
        onNextClick: y,
        onBackClick: M
      })]
    })]
  })
})