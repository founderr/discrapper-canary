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
  h = a("308083"),
  _ = a("689938"),
  C = a("297344");

function m(e) {
  let {
    currentStep: t,
    selectedGame: a
  } = e, u = (0, f.useDiscoveryGameApplicationId)({
    selectedGame: a
  }), E = (0, c.useClanDiscoveryUIStore)(e => e.selectedGames, l.default), m = (0, c.useClanDiscoveryUIStore)(e => e.setSelectedGames, l.default), p = s.useMemo(() => new Set(E), [E]), I = (0, c.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, l.default), T = (0, c.useClanDiscoveryUIStore)(e => e.setSelectedPlaystyle, l.default), g = (0, c.useClanDiscoveryUIStore)(e => e.selectedTraits, l.default), A = (0, c.useClanDiscoveryUIStore)(e => e.setSelectedTraits, l.default), N = s.useMemo(() => new Set(g), [g]), v = s.useCallback(e => m(Array.from(e)), [m]), R = s.useCallback(e => T(e), [T]), L = s.useCallback(e => A([...e]), [A]), O = s.useCallback(() => {
    switch (t) {
      case 0:
        return (0, n.jsx)(r.default, {
          title: _.default.Messages.CLAN_DISCOVERY_GAME_TITLE,
          description: _.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
          requiredGameId: u,
          handleUpdate: v,
          gameApplicationIds: p
        });
      case 1:
        return (0, n.jsx)(o.default, {
          title: _.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
          description: _.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
          handleUpdate: R,
          playstyle: null != I ? I : h.ClanPlaystyles.CASUAL
        });
      case 2:
        return (0, n.jsx)(d.default, {
          title: _.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
          description: _.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
          handleUpdate: L,
          interests: N,
          requiredGameId: u
        })
    }
  }, [t, u, v, p, R, I, L, N]);
  return (0, n.jsx)(i.Sequencer, {
    step: t,
    steps: S,
    sideMargin: 24,
    verticalMargin: 24,
    className: C.sequencer,
    innerClassName: C.sequencer,
    animatedNodeClassName: C.sequencer,
    children: (0, n.jsx)(i.ScrollerThin, {
      className: C.scroller,
      fade: !0,
      children: (0, n.jsx)("div", {
        className: C.stepsContainer,
        children: O()
      })
    })
  })
}
let S = [0, 1, 2],
  p = [
    [0],
    [1],
    [2]
  ];
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    setScreen: a
  } = e, [i, r] = s.useState(0), [o, d] = s.useState(0), f = (0, c.useClanDiscoveryUIStore)(e => e.setMode, l.default), h = (0, c.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, l.default), _ = s.useCallback(e => {
    r(e), o < e && d(e)
  }, [o]), S = s.useCallback(() => {
    0 === i ? a(E.ClanDiscoveryUpsellScreens.USER_UPSELL) : _(i - 1)
  }, [i, a, _]), I = s.useCallback(() => {
    2 === i ? f(c.ClanDiscoveryMode.DISCOVERY) : _(i + 1)
  }, [f, i, _]), T = s.useMemo(() => 1 === i && null == h, [h, i]);
  return (0, n.jsxs)("div", {
    className: C.container,
    children: [(0, n.jsx)(m, {
      currentStep: i,
      selectedGame: t
    }), (0, n.jsxs)("div", {
      className: C.footer,
      children: [(0, n.jsx)(u.ClanSetupProgress, {
        sections: p,
        furthestStep: o,
        onStepClick: _
      }), (0, n.jsx)(u.ClanSetupProgressButtons, {
        className: C.footerButtons,
        isBackDisabled: !1,
        isNextDisabled: T,
        onNextClick: I,
        onBackClick: S
      })]
    })]
  })
})