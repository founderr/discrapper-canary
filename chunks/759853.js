"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("887024"),
  i = s("920906"),
  r = s("442837"),
  o = s("110924"),
  u = s("607070"),
  d = s("819640"),
  c = s("569379"),
  E = s("675654"),
  _ = s("977524"),
  f = s("197857");
let h = ["#51BC9D"];
t.default = e => {
  var t;
  let {
    quest: s,
    progressBarRef: m,
    isExpanded: C
  } = e, {
    completionSpring: T,
    startCompletionAnimation: g
  } = (0, c.useQuestBarCompletionAnimation)(), A = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, p = n.useRef(!1), N = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), S = n.useRef(null), I = (0, r.useStateFromStores)([d.default], () => d.default.hasLayers()), x = (0, o.default)(I), [R, v] = n.useState(null), [M, L] = n.useState(null), O = n.useRef(new l.Environment({
    gravity: 0,
    wind: 0
  })), y = (0, l.useConfettiCannon)(R, M), D = n.useCallback(() => {
    if (N) return;
    let e = m.current,
      t = S.current;
    if (null != t && null != e && y.isReady) {
      var s, a, n, l;
      let {
        x: i,
        y: r
      } = e.getBoundingClientRect(), {
        x: o,
        y: u
      } = t.getBoundingClientRect();
      y.createMultipleConfetti((s = i - o, a = r - u, n = e.clientHeight, l = e.clientWidth, {
        ...E.COMMON_CONFETTI_BASE_CONFIG,
        position: {
          type: "static-random",
          minValue: {
            x: s,
            y: a
          },
          maxValue: {
            x: s + n,
            y: a + l
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
  }, [m, S, y, N]), b = (0, o.default)(C);
  return (n.useEffect(() => {
    A && C && !b && (g(), D())
  }, [C, A, g, D, b]), n.useEffect(() => {
    A && !I && x && setTimeout(() => {
      g(), D()
    }, 200)
  }, [A, x, I, g, D]), n.useEffect(() => {
    y.isReady && (!p.current && A && (g(), D()), p.current = A)
  }, [A, p, D, g, y]), N) ? null : (0, a.jsxs)("div", {
    className: _.wrapper,
    "aria-hidden": "true",
    ref: S,
    children: [(0, a.jsx)(i.animated.div, {
      className: _.background,
      style: {
        opacity: T
      }
    }), (0, a.jsx)(l.ConfettiCanvas, {
      ref: v,
      className: _.confetti,
      environment: O.current
    }), (0, a.jsx)(l.SpriteCanvas, {
      ref: L,
      sprites: [f],
      colors: h,
      spriteWidth: E.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: E.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })]
  })
}