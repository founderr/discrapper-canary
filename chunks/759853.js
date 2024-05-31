"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("887024"),
  i = n("920906"),
  r = n("442837"),
  o = n("110924"),
  u = n("607070"),
  d = n("819640"),
  c = n("569379"),
  f = n("675654"),
  E = n("977524"),
  h = n("197857");
let _ = ["#51BC9D"];
t.default = e => {
  var t;
  let {
    quest: n,
    progressBarRef: C,
    isExpanded: m
  } = e, {
    completionSpring: S,
    startCompletionAnimation: p
  } = (0, c.useQuestBarCompletionAnimation)(), I = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, g = s.useRef(!1), T = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), A = s.useRef(null), N = (0, r.useStateFromStores)([d.default], () => d.default.hasLayers()), v = (0, o.default)(N), [R, O] = s.useState(null), [L, M] = s.useState(null), x = s.useRef(new l.Environment({
    gravity: 0,
    wind: 0
  })), P = (0, l.useConfettiCannon)(R, L), y = s.useCallback(() => {
    if (T) return;
    let e = C.current,
      t = A.current;
    if (null != t && null != e && P.isReady) {
      var n, a, s, l;
      let {
        x: i,
        y: r
      } = e.getBoundingClientRect(), {
        x: o,
        y: u
      } = t.getBoundingClientRect();
      P.createMultipleConfetti((n = i - o, a = r - u, s = e.clientHeight, l = e.clientWidth, {
        ...f.COMMON_CONFETTI_BASE_CONFIG,
        position: {
          type: "static-random",
          minValue: {
            x: n,
            y: a
          },
          maxValue: {
            x: n + s,
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
  }, [C, A, P, T]), D = (0, o.default)(m);
  return (s.useEffect(() => {
    I && m && !D && (p(), y())
  }, [m, I, p, y, D]), s.useEffect(() => {
    I && !N && v && setTimeout(() => {
      p(), y()
    }, 200)
  }, [I, v, N, p, y]), s.useEffect(() => {
    P.isReady && (!g.current && I && (p(), y()), g.current = I)
  }, [I, g, y, p, P]), T) ? null : (0, a.jsxs)("div", {
    className: E.wrapper,
    "aria-hidden": "true",
    ref: A,
    children: [(0, a.jsx)(i.animated.div, {
      className: E.background,
      style: {
        opacity: S
      }
    }), (0, a.jsx)(l.ConfettiCanvas, {
      ref: O,
      className: E.confetti,
      environment: x.current
    }), (0, a.jsx)(l.SpriteCanvas, {
      ref: M,
      sprites: [h],
      colors: _,
      spriteWidth: f.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: f.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })]
  })
}