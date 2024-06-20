n(47120);
var s = n(735250),
  o = n(470079),
  r = n(887024),
  a = n(920906),
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
  } = (0, d.GX)(), f = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, N = o.useRef(!1), T = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), v = o.useRef(null), j = (0, l.e7)([u.Z], () => u.Z.hasLayers()), _ = (0, i.Z)(j), [A, B] = o.useState(null), [R, M] = o.useState(null), y = o.useRef(new r.qA({
    gravity: 0,
    wind: 0
  })), O = (0, r.uR)(A, R), U = o.useCallback(() => {
    if (T) return;
    let e = C.current,
      t = v.current;
    if (null != t && null != e && O.isReady) {
      var n, s, o, r;
      let {
        x: a,
        y: l
      } = e.getBoundingClientRect(), {
        x: i,
        y: c
      } = t.getBoundingClientRect();
      O.createMultipleConfetti((n = a - i, s = l - c, o = e.clientHeight, r = e.clientWidth, {
        ...p.We,
        position: {
          type: "static-random",
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
  }, [C, v, O, T]), Z = (0, i.Z)(h);
  return (o.useEffect(() => {
    f && h && !Z && (E(), U())
  }, [h, f, E, U, Z]), o.useEffect(() => {
    f && !j && _ && setTimeout(() => {
      E(), U()
    }, 200)
  }, [f, _, j, E, U]), o.useEffect(() => {
    if (!!O.isReady) !N.current && f && (E(), U()), N.current = f
  }, [f, N, U, E, O]), T) ? null : (0, s.jsxs)("div", {
    className: x.wrapper,
    "aria-hidden": "true",
    ref: v,
    children: [(0, s.jsx)(a.animated.div, {
      className: x.background,
      style: {
        opacity: S
      }
    }), (0, s.jsx)(r.O_, {
      ref: B,
      className: x.confetti,
      environment: y.current
    }), (0, s.jsx)(r.Ji, {
      ref: M,
      sprites: [m],
      colors: g,
      spriteWidth: p.Ko,
      spriteHeight: p.Ko
    })]
  })
}