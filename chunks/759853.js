n(47120);
var o = n(735250),
  s = n(470079),
  r = n(887024),
  a = n(920906),
  i = n(442837),
  l = n(110924),
  c = n(607070),
  d = n(819640),
  u = n(569379),
  p = n(675654),
  m = n(251217),
  x = n(197857);
let g = ["#51BC9D"];
t.Z = e => {
  var t;
  let {
    quest: n,
    progressBarRef: C,
    isExpanded: f
  } = e, {
    completionSpring: h,
    startCompletionAnimation: _
  } = (0, u.GX)(), E = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, S = s.useRef(!1), T = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), N = s.useRef(null), v = (0, i.e7)([d.Z], () => d.Z.hasLayers()), A = (0, l.Z)(v), [j, B] = s.useState(null), [b, R] = s.useState(null), O = s.useRef(new r.qA({
    gravity: 0,
    wind: 0
  })), y = (0, r.uR)(j, b), I = s.useCallback(() => {
    if (T) return;
    let e = C.current,
      t = N.current;
    if (null != t && null != e && y.isReady) {
      var n, o, s, r;
      let {
        x: a,
        y: i
      } = e.getBoundingClientRect(), {
        x: l,
        y: c
      } = t.getBoundingClientRect();
      y.createMultipleConfetti((n = a - l, o = i - c, s = e.clientHeight, r = e.clientWidth, {
        ...p.We,
        position: {
          type: "static-random",
          minValue: {
            x: n,
            y: o
          },
          maxValue: {
            x: n + s,
            y: o + r
          }
        },
        velocity: {
          type: "static-random",
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
          type: "linear",
          value: 2,
          addValue: -.1
        },
        dragCoefficient: {
          type: "static",
          value: 1e-4
        },
        size: {
          type: "static-random",
          minValue: 2,
          maxValue: 3
        }
      }), 100)
    }
  }, [C, N, y, T]), U = (0, l.Z)(f);
  return (s.useEffect(() => {
    E && f && !U && (_(), I())
  }, [f, E, _, I, U]), s.useEffect(() => {
    E && !v && A && setTimeout(() => {
      _(), I()
    }, 200)
  }, [E, A, v, _, I]), s.useEffect(() => {
    if (!!y.isReady) !S.current && E && (_(), I()), S.current = E
  }, [E, S, I, _, y]), T) ? null : (0, o.jsxs)("div", {
    className: m.wrapper,
    "aria-hidden": "true",
    ref: N,
    children: [(0, o.jsx)(a.animated.div, {
      className: m.background,
      style: {
        opacity: h
      }
    }), (0, o.jsx)(r.O_, {
      ref: B,
      className: m.confetti,
      environment: O.current
    }), (0, o.jsx)(r.Ji, {
      ref: R,
      sprites: [x],
      colors: g,
      spriteWidth: p.Ko,
      spriteHeight: p.Ko
    })]
  })
}