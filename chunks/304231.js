n(47120);
var i = n(735250),
  s = n(470079),
  l = n(920906),
  a = n(143927),
  r = n(442837),
  o = n(607070),
  c = n(950279),
  u = n(741595),
  d = n(754961),
  E = n(363915),
  h = n(359380),
  _ = n(207796),
  I = n(316553),
  m = n(689938),
  g = n(843198);
let p = {
  mass: 1,
  tension: 600,
  friction: 60
};

function N(e) {
  let {
    selectedGame: t
  } = e, n = (0, _.GN)(e => e.selectedGames, a.Z), l = s.useMemo(() => new Set(n), [n]), r = (0, I.J)({
    selectedGame: t
  }), o = s.useCallback(e => _.GN.getState().setSelectedGames(Array.from(e)), []);
  return (0, i.jsx)(c.Z, {
    title: m.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
    description: m.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
    requiredGameId: r,
    handleUpdate: o,
    gameApplicationIds: l
  })
}

function T() {
  let e = (0, _.GN)(e => e.selectedPlaystyle, a.Z),
    t = s.useCallback(e => _.GN.getState().setSelectedPlaystyle(e), []);
  return (0, i.jsx)(u.Z, {
    title: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
    description: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
    handleUpdate: t,
    playstyle: e
  })
}

function C(e) {
  let {
    selectedGame: t
  } = e, n = (0, I.J)({
    selectedGame: t
  }), l = (0, _.GN)(e => e.selectedTraits, a.Z), r = s.useMemo(() => new Set(l), [l]), o = s.useCallback(e => _.GN.getState().setSelectedTraits([...e]), []);
  return (0, i.jsx)(h.Z, {
    title: m.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
    description: m.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
    handleUpdate: o,
    interests: r,
    requiredGameId: n,
    hidePreview: !0
  })
}

function S(e) {
  return e.toString()
}
t.Z = s.memo(function(e) {
  let {
    selectedGame: t,
    setScreen: n
  } = e, c = s.useRef(null), u = s.useRef(null), h = s.useRef(null), I = (0, r.e7)([o.Z], () => o.Z.useReducedMotion), [A, f] = s.useState(0), [Z, v] = s.useState(0), L = (0, _.GN)(e => e.selectedPlaystyle, a.Z), O = (0, _.GN)(e => e.previousMode, a.Z), R = s.useCallback(e => {
    f(e), Z < e && v(e)
  }, [Z]), x = s.useCallback(() => {
    0 === A ? (n(_.o2.USER_UPSELL), (0, _.fH)(O)) : R(A - 1)
  }, [A, O, n, R]), M = s.useCallback(() => {
    2 === A ? (0, _.fH)(_.v0.DISCOVERY) : R(A + 1)
  }, [A, R]), P = s.useMemo(() => 1 === A && null == L, [L, A]), D = s.useMemo(() => [{
    index: 0,
    name: m.Z.Messages.CLAN_SETUP_GAMES_STEP
  }, {
    index: 1,
    name: m.Z.Messages.CLAN_SETUP_PLAYSTYLE_STEP
  }, {
    index: 2,
    name: m.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
  }], []), b = (0, l.useSpring)({
    ref: c,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: p
  }), y = (0, l.useSpring)({
    ref: u,
    from: {
      opacity: 0,
      transform: I ? "translateY(0px)" : "translateY(40px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: p
  }), j = (0, l.useSpring)({
    ref: h,
    from: {
      opacity: 0,
      transform: I ? "translateY(0px)" : "translateY(40px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: p
  });
  (0, l.useChain)([c, u, h], [0, .2, .5]);
  let U = s.useMemo(() => [A], [A]),
    G = s.useCallback(e => {
      switch (e) {
        case 0:
          return (0, i.jsx)(N, {
            selectedGame: t
          });
        case 1:
          return (0, i.jsx)(T, {});
        case 2:
          return (0, i.jsx)(C, {
            selectedGame: t
          })
      }
    }, [t]);
  return (0, i.jsxs)(l.animated.div, {
    className: g.container,
    style: b,
    children: [(0, i.jsx)(l.animated.div, {
      className: g.sequencer,
      style: y,
      children: (0, i.jsx)(E.Z, {
        currentStep: A,
        items: U,
        renderItem: G,
        getItemKey: S
      })
    }), (0, i.jsxs)(l.animated.div, {
      className: g.footer,
      style: j,
      children: [(0, i.jsx)(d.T, {
        currentStepIndex: A,
        steps: D,
        furthestStepIndex: Z,
        onStepClick: R
      }), (0, i.jsx)(d.i, {
        className: g.footerButtons,
        isBackDisabled: !1,
        isNextDisabled: P,
        onNextClick: M,
        onBackClick: x
      })]
    })]
  })
})