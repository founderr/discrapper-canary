n(47120);
var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(887024),
  i = n(699581),
  c = n(338545),
  d = n(442837),
  u = n(110924),
  p = n(607070),
  m = n(819640),
  x = n(569379),
  f = n(675654),
  g = n(301095),
  C = n(197857);
let _ = ['#51BC9D'];
t.Z = e => {
  var t;
  let {
expansionSpring: n,
overlayRef: r,
quest: h,
progressBarRef: E,
isExpanded: S
  } = e, {
completionSpring: T,
startCompletionAnimation: v
  } = (0, x.GX)(), N = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, A = o.useRef(!1), j = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), B = o.useRef(null), b = (0, d.e7)([m.Z], () => m.Z.hasLayers()), R = (0, u.Z)(b), [y, I] = o.useState(null), [q, O] = o.useState(null), M = o.useRef(new l.qA({
gravity: 0,
wind: 0
  })), U = (0, l.uR)(y, q), k = o.useCallback(() => {
if (j)
  return;
let e = E.current,
  t = B.current;
if (null != t && null != e && U.isReady) {
  var n, s, o, r;
  let {
    x: a,
    y: l
  } = e.getBoundingClientRect(), {
    x: i,
    y: c
  } = t.getBoundingClientRect();
  U.createMultipleConfetti((n = a - i, s = l - c, o = e.clientHeight, r = e.clientWidth, {
    ...f.We,
    position: {
      type: 'static-random',
      minValue: {
        x: n,
        y: s
      },
      maxValue: {
        x: n + o,
        y: s + r
      }
    },
    velocity: {
      type: 'static-random',
      minValue: {
        x: -20,
        y: -20
      },
      maxValue: {
        x: 20,
        y: 20
      }
    },
    opacity: {
      type: 'linear',
      value: 2,
      addValue: -0.1
    },
    dragCoefficient: {
      type: 'static',
      value: 0.0001
    },
    size: {
      type: 'static-random',
      minValue: 2,
      maxValue: 3
    }
  }), 100);
}
  }, [
E,
B,
U,
j
  ]), P = (0, u.Z)(S);
  return (o.useEffect(() => {
N && S && !P && (v(), k());
  }, [
S,
N,
v,
k,
P
  ]), o.useEffect(() => {
N && !b && R && setTimeout(() => {
  v(), k();
}, 200);
  }, [
N,
R,
b,
v,
k
  ]), o.useEffect(() => {
if (!!U.isReady)
  !A.current && N && (v(), k()), A.current = N;
  }, [
N,
A,
k,
v,
U
  ]), j) ? null : (0, s.jsxs)('div', {
className: g.wrapper,
'aria-hidden': 'true',
ref: B,
children: [
  (0, s.jsx)(c.animated.div, {
    className: g.background,
    style: {
      opacity: T
    }
  }),
  (0, s.jsx)(c.animated.div, {
    className: a()(g.borders, g.bordersTopLeft),
    style: {
      opacity: T
    }
  }),
  (0, s.jsxs)(c.animated.div, {
    className: g.confettiWrapper,
    style: {
      transform: n.to({
        range: [
          0,
          1
        ],
        output: [
          -35,
          0
        ]
      }).to(e => 'translateY('.concat(e, 'px)'))
    },
    children: [
      (0, s.jsx)(l.O_, {
        ref: I,
        className: g.confetti,
        environment: M.current
      }),
      (0, s.jsx)(l.Ji, {
        ref: O,
        sprites: [C],
        colors: _,
        spriteWidth: f.Ko,
        spriteHeight: f.Ko
      }),
      null != r.current && (0, i.createPortal)((0, s.jsx)(c.animated.div, {
        className: a()(g.borders, g.bordersBottom),
        style: {
          opacity: T
        }
      }), r.current)
    ]
  })
]
  });
};