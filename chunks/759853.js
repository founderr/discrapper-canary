n(47120);
var s = n(735250),
  a = n(470079),
  i = n(887024),
  l = n(920906),
  r = n(442837),
  o = n(110924),
  c = n(607070),
  d = n(819640),
  u = n(569379),
  E = n(675654),
  _ = n(251217),
  h = n(197857);
let m = ["#51BC9D"];
t.Z = e => {
  var t;
  let {
    quest: n,
    progressBarRef: T,
    isExpanded: C
  } = e, {
    completionSpring: g,
    startCompletionAnimation: p
  } = (0, u.GX)(), N = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, I = a.useRef(!1), A = (0, r.e7)([c.Z], () => c.Z.useReducedMotion), f = a.useRef(null), x = (0, r.e7)([d.Z], () => d.Z.hasLayers()), S = (0, o.Z)(x), [v, R] = a.useState(null), [M, O] = a.useState(null), L = a.useRef(new i.qA({
    gravity: 0,
    wind: 0
  })), Z = (0, i.uR)(v, M), j = a.useCallback(() => {
    if (A) return;
    let e = T.current,
      t = f.current;
    if (null != t && null != e && Z.isReady) {
      var n, s, a, i;
      let {
        x: l,
        y: r
      } = e.getBoundingClientRect(), {
        x: o,
        y: c
      } = t.getBoundingClientRect();
      Z.createMultipleConfetti((n = l - o, s = r - c, a = e.clientHeight, i = e.clientWidth, {
        ...E.We,
        position: {
          type: "static-random",
          minValue: {
            x: n,
            y: s
          },
          maxValue: {
            x: n + a,
            y: s + i
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
  }, [T, f, Z, A]), y = (0, o.Z)(C);
  return (a.useEffect(() => {
    N && C && !y && (p(), j())
  }, [C, N, p, j, y]), a.useEffect(() => {
    N && !x && S && setTimeout(() => {
      p(), j()
    }, 200)
  }, [N, S, x, p, j]), a.useEffect(() => {
    if (!!Z.isReady) !I.current && N && (p(), j()), I.current = N
  }, [N, I, j, p, Z]), A) ? null : (0, s.jsxs)("div", {
    className: _.wrapper,
    "aria-hidden": "true",
    ref: f,
    children: [(0, s.jsx)(l.animated.div, {
      className: _.background,
      style: {
        opacity: g
      }
    }), (0, s.jsx)(i.O_, {
      ref: R,
      className: _.confetti,
      environment: L.current
    }), (0, s.jsx)(i.Ji, {
      ref: O,
      sprites: [h],
      colors: m,
      spriteWidth: E.Ko,
      spriteHeight: E.Ko
    })]
  })
}