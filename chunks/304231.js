"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("143927"),
  i = a("481060"),
  r = a("950279"),
  o = a("741595"),
  u = a("754961"),
  d = a("359380"),
  c = a("207796"),
  f = a("316553"),
  E = a("559469"),
  h = a("689938"),
  _ = a("713125");

function C(e) {
  let {
    currentStep: t,
    selectedGame: a
  } = e, u = (0, f.useDiscoveryGameApplicationId)({
    selectedGame: a
  }), E = (0, c.useClanDiscoveryUIStore)(e => e.selectedGames, l.default), C = (0, c.useClanDiscoveryUIStore)(e => e.setSelectedGames, l.default), S = s.useMemo(() => new Set(E), [E]), p = (0, c.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, l.default), I = (0, c.useClanDiscoveryUIStore)(e => e.setSelectedPlaystyle, l.default), g = (0, c.useClanDiscoveryUIStore)(e => e.selectedTraits, l.default), T = (0, c.useClanDiscoveryUIStore)(e => e.setSelectedTraits, l.default), A = s.useMemo(() => new Set(g), [g]), N = s.useCallback(e => C(Array.from(e)), [C]), v = s.useCallback(e => I(e), [I]), L = s.useCallback(e => T([...e]), [T]), R = s.useCallback(() => {
    switch (t) {
      case 0:
        return (0, n.jsx)(r.default, {
          title: h.default.Messages.CLAN_DISCOVERY_GAME_TITLE,
          description: h.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
          requiredGameId: u,
          handleUpdate: N,
          gameApplicationIds: S
        });
      case 1:
        return (0, n.jsx)(o.default, {
          title: h.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
          description: h.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
          handleUpdate: v,
          playstyle: p
        });
      case 2:
        return (0, n.jsx)(d.default, {
          title: h.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
          description: h.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
          handleUpdate: L,
          interests: A,
          requiredGameId: u
        })
    }
  }, [t, u, N, S, v, p, L, A]);
  return (0, n.jsx)(i.Sequencer, {
    step: t,
    steps: m,
    sideMargin: 24,
    verticalMargin: 24,
    className: _.sequencer,
    innerClassName: _.sequencer,
    animatedNodeClassName: _.sequencer,
    children: (0, n.jsx)(i.ScrollerThin, {
      className: _.scroller,
      fade: !0,
      children: (0, n.jsx)("div", {
        className: _.stepsContainer,
        children: R()
      })
    })
  })
}
let m = [0, 1, 2];
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    setScreen: a
  } = e, [i, r] = s.useState(0), [o, d] = s.useState(0), f = (0, c.useClanDiscoveryUIStore)(e => e.setMode, l.default), m = (0, c.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, l.default), S = s.useCallback(e => {
    r(e), o < e && d(e)
  }, [o]), p = s.useCallback(() => {
    0 === i ? a(E.ClanDiscoveryUserScreens.USER_UPSELL) : S(i - 1)
  }, [i, a, S]), I = s.useCallback(() => {
    2 === i ? f(c.ClanDiscoveryMode.DISCOVERY) : S(i + 1)
  }, [f, i, S]), g = s.useMemo(() => 1 === i && null == m, [m, i]), T = s.useMemo(() => [{
    index: 0,
    name: h.default.Messages.CLAN_SETUP_GAMES_STEP
  }, {
    index: 1,
    name: h.default.Messages.CLAN_SETUP_PLAYSTYLE_STEP
  }, {
    index: 2,
    name: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
  }], []);
  return (0, n.jsxs)("div", {
    className: _.container,
    children: [(0, n.jsx)(C, {
      currentStep: i,
      selectedGame: t
    }), (0, n.jsxs)("div", {
      className: _.footer,
      children: [(0, n.jsx)(u.ClanSetupProgress, {
        currentStepIndex: i,
        steps: T,
        furthestStepIndex: o,
        onStepClick: S
      }), (0, n.jsx)(u.ClanSetupProgressButtons, {
        className: _.footerButtons,
        isBackDisabled: !1,
        isNextDisabled: g,
        onNextClick: I,
        onBackClick: p
      })]
    })]
  })
})