n(47120);
var i = n(735250),
  s = n(470079),
  a = n(338545),
  r = n(143927),
  l = n(442837),
  o = n(481060),
  c = n(607070),
  d = n(950279),
  u = n(741595),
  _ = n(754961),
  E = n(363915),
  h = n(359380),
  I = n(207796),
  m = n(316553),
  g = n(689938),
  p = n(270590);
let T = {
  mass: 1,
  tension: 600,
  friction: 60
};

function f(e) {
  let {
selectedGame: t
  } = e, n = (0, I.GN)(e => e.selectedGames, r.Z), a = s.useMemo(() => new Set(n), [n]), l = (0, m.J)({
selectedGame: t
  }), o = s.useCallback(e => I.GN.getState().setSelectedGames(Array.from(e)), []);
  return (0, i.jsx)(d.Z, {
title: g.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
description: g.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
requiredGameId: l,
handleUpdate: o,
gameApplicationIds: a
  });
}

function S() {
  let e = (0, I.GN)(e => e.selectedPlaystyle, r.Z),
t = s.useCallback(e => I.GN.getState().setSelectedPlaystyle(e), []);
  return (0, i.jsx)(u.Z, {
title: g.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
description: g.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
handleUpdate: t,
playstyle: e
  });
}

function C(e) {
  let {
selectedGame: t
  } = e, n = (0, m.J)({
selectedGame: t
  }), a = (0, I.GN)(e => e.selectedTraits, r.Z), l = s.useMemo(() => new Set(a), [a]), o = s.useCallback(e => I.GN.getState().setSelectedTraits([...e]), []);
  return (0, i.jsx)(h.Z, {
title: g.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
description: g.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
handleUpdate: o,
interests: l,
requiredGameId: n,
hidePreview: !0
  });
}

function N(e) {
  return e.toString();
}
t.Z = s.memo(function(e) {
  let {
selectedGame: t,
setScreen: n
  } = e, d = s.useRef(null), u = s.useRef(null), h = s.useRef(null), m = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), [A, v] = s.useState(0), [Z, L] = s.useState(0), O = (0, I.GN)(e => e.selectedPlaystyle, r.Z), R = (0, I.GN)(e => e.previousMode, r.Z), x = s.useCallback(e => {
v(e), Z < e && L(e);
  }, [Z]), b = s.useCallback(() => {
0 === A ? (n(I.o2.USER_UPSELL), (0, I.fH)(R)) : x(A - 1);
  }, [
A,
R,
n,
x
  ]), P = s.useCallback(() => {
2 === A ? (0, I.fH)(I.v0.DISCOVERY) : x(A + 1);
  }, [
A,
x
  ]), M = s.useMemo(() => 1 === A && null == O, [
O,
A
  ]), D = s.useMemo(() => [{
  index: 0,
  name: g.Z.Messages.CLAN_SETUP_GAMES_STEP
},
{
  index: 1,
  name: g.Z.Messages.CLAN_SETUP_PLAYSTYLE_STEP
},
{
  index: 2,
  name: g.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
}
  ], []), y = (0, o.useSpring)({
ref: d,
from: {
  opacity: 0
},
to: {
  opacity: 1
},
config: T
  }, 'animate-always'), j = (0, o.useSpring)({
ref: u,
from: {
  opacity: 0,
  transform: m ? 'translateY(0px)' : 'translateY(40px)'
},
to: {
  opacity: 1,
  transform: 'translateY(0px)'
},
config: T
  }, 'animate-always'), U = (0, o.useSpring)({
ref: h,
from: {
  opacity: 0,
  transform: m ? 'translateY(0px)' : 'translateY(40px)'
},
to: {
  opacity: 1,
  transform: 'translateY(0px)'
},
config: T
  }, 'animate-always');
  (0, a.useChain)([
d,
u,
h
  ], [
0,
0.2,
0.5
  ]);
  let G = s.useMemo(() => [A], [A]),
w = s.useCallback(e => {
  switch (e) {
    case 0:
      return (0, i.jsx)(f, {
        selectedGame: t
      });
    case 1:
      return (0, i.jsx)(S, {});
    case 2:
      return (0, i.jsx)(C, {
        selectedGame: t
      });
  }
}, [t]);
  return (0, i.jsxs)(a.animated.div, {
className: p.container,
style: y,
children: [
  (0, i.jsx)(a.animated.div, {
    className: p.sequencer,
    style: j,
    children: (0, i.jsx)(E.Z, {
      currentStep: A,
      items: G,
      renderItem: w,
      getItemKey: N
    })
  }),
  (0, i.jsxs)(a.animated.div, {
    className: p.footer,
    style: U,
    children: [
      (0, i.jsx)(_.T, {
        currentStepIndex: A,
        steps: D,
        furthestStepIndex: Z,
        onStepClick: x
      }),
      (0, i.jsx)(_.i, {
        className: p.footerButtons,
        isBackDisabled: !1,
        isNextDisabled: M,
        onNextClick: P,
        onBackClick: b
      })
    ]
  })
]
  });
});