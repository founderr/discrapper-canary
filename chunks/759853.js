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
  f = s("977524"),
  _ = s("197857");
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
  } = (0, c.useQuestBarCompletionAnimation)(), p = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, A = a.useRef(!1), N = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), S = a.useRef(null), I = (0, r.useStateFromStores)([d.default], () => d.default.hasLayers()), x = (0, o.default)(I), [R, v] = a.useState(null), [M, O] = a.useState(null), L = a.useRef(new l.Environment({
    gravity: 0,
    wind: 0
  })), y = (0, l.useConfettiCannon)(R, M), b = a.useCallback(() => {
    if (N) return;
    let e = m.current,
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
  }, [m, S, y, N]), D = (0, o.default)(C);
  return (a.useEffect(() => {
    p && C && !D && (g(), b())
  }, [C, p, g, b, D]), a.useEffect(() => {
    p && !I && x && setTimeout(() => {
      g(), b()
    }, 200)
  }, [p, x, I, g, b]), a.useEffect(() => {
    y.isReady && (!A.current && p && (g(), b()), A.current = p)
  }, [p, A, b, g, y]), N) ? null : (0, n.jsxs)("div", {
    className: f.wrapper,
    "aria-hidden": "true",
    ref: S,
    children: [(0, n.jsx)(i.animated.div, {
      className: f.background,
      style: {
        opacity: T
      }
    }), (0, n.jsx)(l.ConfettiCanvas, {
      ref: v,
      className: f.confetti,
      environment: L.current
    }), (0, n.jsx)(l.SpriteCanvas, {
      ref: O,
      sprites: [_],
      colors: h,
      spriteWidth: E.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: E.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })]
  })
}