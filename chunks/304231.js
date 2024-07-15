n(47120);
var i = n(735250),
  a = n(470079),
  s = n(338545),
  r = n(143927),
  l = n(442837),
  o = n(607070),
  c = n(950279),
  d = n(741595),
  u = n(754961),
  _ = n(363915),
  E = n(359380),
  h = n(207796),
  I = n(316553),
  m = n(689938),
  g = n(270590);
let p = {
  mass: 1,
  tension: 600,
  friction: 60
};

function T(e) {
  let {
selectedGame: t
  } = e, n = (0, h.GN)(e => e.selectedGames, r.Z), s = a.useMemo(() => new Set(n), [n]), l = (0, I.J)({
selectedGame: t
  }), o = a.useCallback(e => h.GN.getState().setSelectedGames(Array.from(e)), []);
  return (0, i.jsx)(c.Z, {
title: m.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
description: m.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
requiredGameId: l,
handleUpdate: o,
gameApplicationIds: s
  });
}

function f() {
  let e = (0, h.GN)(e => e.selectedPlaystyle, r.Z),
t = a.useCallback(e => h.GN.getState().setSelectedPlaystyle(e), []);
  return (0, i.jsx)(d.Z, {
title: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
description: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
handleUpdate: t,
playstyle: e
  });
}

function S(e) {
  let {
selectedGame: t
  } = e, n = (0, I.J)({
selectedGame: t
  }), s = (0, h.GN)(e => e.selectedTraits, r.Z), l = a.useMemo(() => new Set(s), [s]), o = a.useCallback(e => h.GN.getState().setSelectedTraits([...e]), []);
  return (0, i.jsx)(E.Z, {
title: m.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
description: m.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
handleUpdate: o,
interests: l,
requiredGameId: n,
hidePreview: !0
  });
}

function C(e) {
  return e.toString();
}
t.Z = a.memo(function(e) {
  let {
selectedGame: t,
setScreen: n
  } = e, c = a.useRef(null), d = a.useRef(null), E = a.useRef(null), I = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), [N, A] = a.useState(0), [v, Z] = a.useState(0), L = (0, h.GN)(e => e.selectedPlaystyle, r.Z), O = (0, h.GN)(e => e.previousMode, r.Z), R = a.useCallback(e => {
A(e), v < e && Z(e);
  }, [v]), x = a.useCallback(() => {
0 === N ? (n(h.o2.USER_UPSELL), (0, h.fH)(O)) : R(N - 1);
  }, [
N,
O,
n,
R
  ]), b = a.useCallback(() => {
2 === N ? (0, h.fH)(h.v0.DISCOVERY) : R(N + 1);
  }, [
N,
R
  ]), P = a.useMemo(() => 1 === N && null == L, [
L,
N
  ]), M = a.useMemo(() => [{
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
  ], []), D = (0, s.useSpring)({
ref: c,
from: {
  opacity: 0
},
to: {
  opacity: 1
},
config: p
  }), y = (0, s.useSpring)({
ref: d,
from: {
  opacity: 0,
  transform: I ? 'translateY(0px)' : 'translateY(40px)'
},
to: {
  opacity: 1,
  transform: 'translateY(0px)'
},
config: p
  }), j = (0, s.useSpring)({
ref: E,
from: {
  opacity: 0,
  transform: I ? 'translateY(0px)' : 'translateY(40px)'
},
to: {
  opacity: 1,
  transform: 'translateY(0px)'
},
config: p
  });
  (0, s.useChain)([
c,
d,
E
  ], [
0,
0.2,
0.5
  ]);
  let U = a.useMemo(() => [N], [N]),
G = a.useCallback(e => {
  switch (e) {
    case 0:
      return (0, i.jsx)(T, {
        selectedGame: t
      });
    case 1:
      return (0, i.jsx)(f, {});
    case 2:
      return (0, i.jsx)(S, {
        selectedGame: t
      });
  }
}, [t]);
  return (0, i.jsxs)(s.animated.div, {
className: g.container,
style: D,
children: [
  (0, i.jsx)(s.animated.div, {
    className: g.sequencer,
    style: y,
    children: (0, i.jsx)(_.Z, {
      currentStep: N,
      items: U,
      renderItem: G,
      getItemKey: C
    })
  }),
  (0, i.jsxs)(s.animated.div, {
    className: g.footer,
    style: j,
    children: [
      (0, i.jsx)(u.T, {
        currentStepIndex: N,
        steps: M,
        furthestStepIndex: v,
        onStepClick: R
      }),
      (0, i.jsx)(u.i, {
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