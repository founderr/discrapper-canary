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
  h = n(363915),
  E = n(359380),
  I = n(207796),
  m = n(689938),
  g = n(270590);
let p = {
  mass: 1,
  tension: 600,
  friction: 60
};

function T() {
  let e = (0, I.GN)(e => e.selectedGames, r.Z),
t = s.useMemo(() => new Set(e), [e]),
n = s.useCallback(e => I.GN.getState().setSelectedGames(Array.from(e)), []);
  return (0, i.jsx)(d.Z, {
title: m.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
description: m.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
handleUpdate: n,
gameApplicationIds: t
  });
}

function f() {
  let e = (0, I.GN)(e => e.selectedPlaystyle, r.Z),
t = s.useCallback(e => I.GN.getState().setSelectedPlaystyle(e), []);
  return (0, i.jsx)(u.Z, {
title: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
description: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
handleUpdate: t,
playstyle: e
  });
}

function S() {
  let e = (0, I.GN)(e => e.selectedTraits, r.Z),
t = s.useMemo(() => new Set(e), [e]),
n = s.useCallback(e => I.GN.getState().setSelectedTraits([...e]), []);
  return (0, i.jsx)(E.Z, {
title: m.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
description: m.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
handleUpdate: n,
interests: t,
hidePreview: !0
  });
}

function C(e) {
  return e.toString();
}
t.Z = s.memo(function(e) {
  let {
setScreen: t
  } = e, n = s.useRef(null), d = s.useRef(null), u = s.useRef(null), E = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), [N, A] = s.useState(0), [v, Z] = s.useState(0), L = (0, I.GN)(e => e.selectedPlaystyle, r.Z), O = (0, I.GN)(e => e.previousMode, r.Z), R = s.useCallback(e => {
A(e), v < e && Z(e);
  }, [v]), x = s.useCallback(() => {
0 === N ? (t(I.o2.USER_UPSELL), (0, I.fH)(O)) : R(N - 1);
  }, [
N,
O,
t,
R
  ]), b = s.useCallback(() => {
2 === N ? (0, I.fH)(I.v0.DISCOVERY) : R(N + 1);
  }, [
N,
R
  ]), P = s.useMemo(() => 1 === N && null == L, [
L,
N
  ]), M = s.useMemo(() => [{
  index: 0,
  name: m.Z.Messages.CLAN_SETUP_GAMES_STEP
},
{
  index: 1,
  name: m.Z.Messages.CLAN_SETUP_PLAYSTYLE_STEP
},
{
  index: 2,
  name: m.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
}
  ], []), D = (0, o.useSpring)({
ref: n,
from: {
  opacity: 0
},
to: {
  opacity: 1
},
config: p
  }, 'animate-always'), y = (0, o.useSpring)({
ref: d,
from: {
  opacity: 0,
  transform: E ? 'translateY(0px)' : 'translateY(40px)'
},
to: {
  opacity: 1,
  transform: 'translateY(0px)'
},
config: p
  }, 'animate-always'), j = (0, o.useSpring)({
ref: u,
from: {
  opacity: 0,
  transform: E ? 'translateY(0px)' : 'translateY(40px)'
},
to: {
  opacity: 1,
  transform: 'translateY(0px)'
},
config: p
  }, 'animate-always');
  (0, a.useChain)([
n,
d,
u
  ], [
0,
0.2,
0.5
  ]);
  let U = s.useMemo(() => [N], [N]),
G = s.useCallback(e => {
  switch (e) {
    case 0:
      return (0, i.jsx)(T, {});
    case 1:
      return (0, i.jsx)(f, {});
    case 2:
      return (0, i.jsx)(S, {});
  }
}, []);
  return (0, i.jsxs)(a.animated.div, {
className: g.container,
style: D,
children: [
  (0, i.jsx)(a.animated.div, {
    className: g.sequencer,
    style: y,
    children: (0, i.jsx)(h.Z, {
      currentStep: N,
      items: U,
      renderItem: G,
      getItemKey: C
    })
  }),
  (0, i.jsxs)(a.animated.div, {
    className: g.footer,
    style: j,
    children: [
      (0, i.jsx)(_.T, {
        currentStepIndex: N,
        steps: M,
        furthestStepIndex: v,
        onStepClick: R
      }),
      (0, i.jsx)(_.i, {
        className: g.footerButtons,
        isBackDisabled: !1,
        isNextDisabled: P,
        onNextClick: b,
        onBackClick: x
      })
    ]
  })
]
  });
});