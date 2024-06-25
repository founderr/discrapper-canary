n(47120);
var s = n(735250),
  i = n(470079),
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
  T = n(843198);
let g = {
  mass: 1,
  tension: 600,
  friction: 60
};

function p(e) {
  let {
    selectedGame: t
  } = e, n = (0, _.GN)(e => e.selectedGames, a.Z), l = i.useMemo(() => new Set(n), [n]), r = (0, I.J)({
    selectedGame: t
  }), o = i.useCallback(e => _.GN.getState().setSelectedGames(Array.from(e)), []);
  return (0, s.jsx)(c.Z, {
    title: m.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
    description: m.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
    requiredGameId: r,
    handleUpdate: o,
    gameApplicationIds: l
  })
}

function N() {
  let e = (0, _.GN)(e => e.selectedPlaystyle, a.Z),
    t = i.useCallback(e => _.GN.getState().setSelectedPlaystyle(e), []);
  return (0, s.jsx)(u.Z, {
    title: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
    description: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
    handleUpdate: t,
    playstyle: e
  })
}

function S(e) {
  let {
    selectedGame: t
  } = e, n = (0, I.J)({
    selectedGame: t
  }), l = (0, _.GN)(e => e.selectedTraits, a.Z), r = i.useMemo(() => new Set(l), [l]), o = i.useCallback(e => _.GN.getState().setSelectedTraits([...e]), []);
  return (0, s.jsx)(h.Z, {
    title: m.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
    description: m.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
    handleUpdate: o,
    interests: r,
    requiredGameId: n,
    hidePreview: !0
  })
}

function C(e) {
  return e.toString()
}
t.Z = i.memo(function(e) {
  let {
    selectedGame: t,
    setScreen: n
  } = e, c = i.useRef(null), u = i.useRef(null), h = i.useRef(null), I = (0, r.e7)([o.Z], () => o.Z.useReducedMotion), [A, f] = i.useState(0), [Z, L] = i.useState(0), O = (0, _.GN)(e => e.selectedPlaystyle, a.Z), v = (0, _.GN)(e => e.previousMode, a.Z), R = i.useCallback(e => {
    f(e), Z < e && L(e)
  }, [Z]), P = i.useCallback(() => {
    0 === A ? (n(_.o2.USER_UPSELL), (0, _.fH)(v)) : R(A - 1)
  }, [A, v, n, R]), x = i.useCallback(() => {
    2 === A ? (0, _.fH)(_.v0.DISCOVERY) : R(A + 1)
  }, [A, R]), M = i.useMemo(() => 1 === A && null == O, [O, A]), D = i.useMemo(() => [{
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
    config: g
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
    config: g
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
    config: g
  });
  (0, l.useChain)([c, u, h], [0, .2, .5]);
  let U = i.useMemo(() => [A], [A]),
    G = i.useCallback(e => {
      switch (e) {
        case 0:
          return (0, s.jsx)(p, {
            selectedGame: t
          });
        case 1:
          return (0, s.jsx)(N, {});
        case 2:
          return (0, s.jsx)(S, {
            selectedGame: t
          })
      }
    }, [t]);
  return (0, s.jsxs)(l.animated.div, {
    className: T.container,
    style: b,
    children: [(0, s.jsx)(l.animated.div, {
      className: T.sequencer,
      style: y,
      children: (0, s.jsx)(E.Z, {
        currentStep: A,
        items: U,
        renderItem: G,
        getItemKey: C
      })
    }), (0, s.jsxs)(l.animated.div, {
      className: T.footer,
      style: j,
      children: [(0, s.jsx)(d.T, {
        currentStepIndex: A,
        steps: D,
        furthestStepIndex: Z,
        onStepClick: R
      }), (0, s.jsx)(d.i, {
        className: T.footerButtons,
        isBackDisabled: !1,
        isNextDisabled: M,
        onNextClick: x,
        onBackClick: P
      })]
    })]
  })
})