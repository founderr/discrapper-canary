n(47120);
var s = n(735250),
  o = n(470079),
  a = n(887024),
  r = n(920906),
  l = n(442837),
  i = n(110924),
  c = n(607070),
  u = n(819640),
  d = n(569379),
  p = n(675654),
  x = n(251217),
  m = n(197857);
let g = ["#51BC9D"];
t.Z = e => {
  var t;
  let {
    quest: n,
    progressBarRef: C,
    isExpanded: h
  } = e, {
    completionSpring: S,
    startCompletionAnimation: E
  } = (0, d.GX)(), f = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, v = o.useRef(!1), T = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), N = o.useRef(null), j = (0, l.e7)([u.Z], () => u.Z.hasLayers()), _ = (0, i.Z)(j), [A, B] = o.useState(null), [R, M] = o.useState(null), y = o.useRef(new a.qA({
    gravity: 0,
    wind: 0
  })), O = (0, a.uR)(A, R), U = o.useCallback(() => {
    if (T) return;
    let e = C.current,
      t = N.current;
    if (null != t && null != e && O.isReady) {
      var n, s, o, a;
      let {
        x: r,
        y: l
      } = e.getBoundingClientRect(), {
        x: i,
        y: c
      } = t.getBoundingClientRect();
      O.createMultipleConfetti((n = r - i, s = l - c, o = e.clientHeight, a = e.clientWidth, {
        ...p.We,
        position: {
          type: "static-random",
          minValue: {
            x: n,
            y: s
          },
          maxValue: {
            x: n + o,
            y: s + a
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
  }, [C, N, O, T]), b = (0, i.Z)(h);
  return (o.useEffect(() => {
    f && h && !b && (E(), U())
  }, [h, f, E, U, b]), o.useEffect(() => {
    f && !j && _ && setTimeout(() => {
      E(), U()
    }, 200)
  }, [f, _, j, E, U]), o.useEffect(() => {
    if (!!O.isReady) !v.current && f && (E(), U()), v.current = f
  }, [f, v, U, E, O]), T) ? null : (0, s.jsxs)("div", {
    className: x.wrapper,
    "aria-hidden": "true",
    ref: N,
    children: [(0, s.jsx)(r.animated.div, {
      className: x.background,
      style: {
        opacity: S
      }
    }), (0, s.jsx)(a.O_, {
      ref: B,
      className: x.confetti,
      environment: y.current
    }), (0, s.jsx)(a.Ji, {
      ref: M,
      sprites: [m],
      colors: g,
      spriteWidth: p.Ko,
      spriteHeight: p.Ko
    })]
  })
}