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
    progressBarRef: h,
    isExpanded: C
  } = e, {
    completionSpring: f,
    startCompletionAnimation: E
  } = (0, d.GX)(), S = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, v = o.useRef(!1), T = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), j = o.useRef(null), N = (0, l.e7)([u.Z], () => u.Z.hasLayers()), _ = (0, i.Z)(N), [A, B] = o.useState(null), [R, y] = o.useState(null), M = o.useRef(new r.qA({
    gravity: 0,
    wind: 0
  })), O = (0, r.uR)(A, R), U = o.useCallback(() => {
    if (T) return;
    let e = h.current,
      t = j.current;
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
  }, [h, j, O, T]), Z = (0, i.Z)(C);
  return (o.useEffect(() => {
    S && C && !Z && (E(), U())
  }, [C, S, E, U, Z]), o.useEffect(() => {
    S && !N && _ && setTimeout(() => {
      E(), U()
    }, 200)
  }, [S, _, N, E, U]), o.useEffect(() => {
    if (!!O.isReady) !v.current && S && (E(), U()), v.current = S
  }, [S, v, U, E, O]), T) ? null : (0, s.jsxs)("div", {
    className: x.wrapper,
    "aria-hidden": "true",
    ref: j,
    children: [(0, s.jsx)(a.animated.div, {
      className: x.background,
      style: {
        opacity: f
      }
    }), (0, s.jsx)(r.O_, {
      ref: B,
      className: x.confetti,
      environment: M.current
    }), (0, s.jsx)(r.Ji, {
      ref: y,
      sprites: [m],
      colors: g,
      spriteWidth: p.Ko,
      spriteHeight: p.Ko
    })]
  })
}