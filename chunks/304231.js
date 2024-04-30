"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("143927"),
  i = n("481060"),
  r = n("950279"),
  o = n("741595"),
  u = n("754961"),
  d = n("359380"),
  c = n("207796"),
  f = n("316553"),
  E = n("559469"),
  h = n("689938"),
  _ = n("713125");

function C(e) {
  let {
    currentStep: t,
    selectedGame: n
  } = e, u = (0, f.useDiscoveryGameApplicationId)({
    selectedGame: n
  }), E = (0, c.useClanDiscoveryUIStore)(e => e.selectedGames, l.default), C = (0, c.useClanDiscoveryUIStore)(e => e.setSelectedGames, l.default), S = s.useMemo(() => new Set(E), [E]), p = (0, c.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, l.default), I = (0, c.useClanDiscoveryUIStore)(e => e.setSelectedPlaystyle, l.default), g = (0, c.useClanDiscoveryUIStore)(e => e.selectedTraits, l.default), T = (0, c.useClanDiscoveryUIStore)(e => e.setSelectedTraits, l.default), A = s.useMemo(() => new Set(g), [g]), N = s.useCallback(e => C(Array.from(e)), [C]), v = s.useCallback(e => I(e), [I]), L = s.useCallback(e => T([...e]), [T]), R = s.useCallback(() => {
    switch (t) {
      case 0:
        return (0, a.jsx)(r.default, {
          title: h.default.Messages.CLAN_DISCOVERY_GAME_TITLE,
          description: h.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
          requiredGameId: u,
          handleUpdate: N,
          gameApplicationIds: S
        });
      case 1:
        return (0, a.jsx)(o.default, {
          title: h.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
          description: h.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
          handleUpdate: v,
          playstyle: p
        });
      case 2:
        return (0, a.jsx)(d.default, {
          title: h.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
          description: h.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
          handleUpdate: L,
          interests: A,
          requiredGameId: u
        })
    }
  }, [t, u, N, S, v, p, L, A]);
  return (0, a.jsx)(i.Sequencer, {
    step: t,
    steps: m,
    sideMargin: 24,
    verticalMargin: 24,
    className: _.sequencer,
    innerClassName: _.sequencer,
    animatedNodeClassName: _.sequencer,
    children: (0, a.jsx)(i.ScrollerThin, {
      className: _.scroller,
      fade: !0,
      children: (0, a.jsx)("div", {
        className: _.stepsContainer,
        children: R()
      })
    })
  })
}
let m = [0, 1, 2],
  S = [
    [0],
    [1],
    [2]
  ];
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    setScreen: n
  } = e, [i, r] = s.useState(0), [o, d] = s.useState(0), f = (0, c.useClanDiscoveryUIStore)(e => e.setMode, l.default), h = (0, c.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, l.default), m = s.useCallback(e => {
    r(e), o < e && d(e)
  }, [o]), p = s.useCallback(() => {
    0 === i ? n(E.ClanDiscoveryUpsellScreens.USER_UPSELL) : m(i - 1)
  }, [i, n, m]), I = s.useCallback(() => {
    2 === i ? f(c.ClanDiscoveryMode.DISCOVERY) : m(i + 1)
  }, [f, i, m]), g = s.useMemo(() => 1 === i && null == h, [h, i]);
  return (0, a.jsxs)("div", {
    className: _.container,
    children: [(0, a.jsx)(C, {
      currentStep: i,
      selectedGame: t
    }), (0, a.jsxs)("div", {
      className: _.footer,
      children: [(0, a.jsx)(u.ClanSetupProgress, {
        sections: S,
        furthestStep: o,
        onStepClick: m
      }), (0, a.jsx)(u.ClanSetupProgressButtons, {
        className: _.footerButtons,
        isBackDisabled: !1,
        isNextDisabled: g,
        onNextClick: I,
        onBackClick: p
      })]
    })]
  })
})