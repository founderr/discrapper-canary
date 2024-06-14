"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
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
    progressBarRef: C,
    isExpanded: m
  } = e, {
    completionSpring: T,
    startCompletionAnimation: g
  } = (0, c.useQuestBarCompletionAnimation)(), A = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, p = a.useRef(!1), N = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), S = a.useRef(null), I = (0, r.useStateFromStores)([d.default], () => d.default.hasLayers()), x = (0, o.default)(I), [R, v] = a.useState(null), [O, M] = a.useState(null), L = a.useRef(new l.Environment({
    gravity: 0,
    wind: 0
  })), y = (0, l.useConfettiCannon)(R, O), b = a.useCallback(() => {
    if (N) return;
    let e = C.current,
      t = S.current;
    if (null != t && null != e && y.isReady) {
      var s, n, a, l;
      let {
        x: i,
        y: r
      } = e.getBoundingClientRect(), {
        x: o,
        y: u
      } = t.getBoundingClientRect();
      y.createMultipleConfetti((s = i - o, n = r - u, a = e.clientHeight, l = e.clientWidth, {
        ...E.COMMON_CONFETTI_BASE_CONFIG,
        position: {
          type: "static-random",
          minValue: {
            x: s,
            y: n
          },
          maxValue: {
            x: s + a,
            y: n + l
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
  }, [C, S, y, N]), D = (0, o.default)(m);
  return (a.useEffect(() => {
    A && m && !D && (g(), b())
  }, [m, A, g, b, D]), a.useEffect(() => {
    A && !I && x && setTimeout(() => {
      g(), b()
    }, 200)
  }, [A, x, I, g, b]), a.useEffect(() => {
    y.isReady && (!p.current && A && (g(), b()), p.current = A)
  }, [A, p, b, g, y]), N) ? null : (0, n.jsxs)("div", {
    className: _.wrapper,
    "aria-hidden": "true",
    ref: S,
    children: [(0, n.jsx)(i.animated.div, {
      className: _.background,
      style: {
        opacity: T
      }
    }), (0, n.jsx)(l.ConfettiCanvas, {
      ref: v,
      className: _.confetti,
      environment: L.current
    }), (0, n.jsx)(l.SpriteCanvas, {
      ref: M,
      sprites: [f],
      colors: h,
      spriteWidth: E.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: E.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })]
  })
}