"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("887024"),
  i = n("920906"),
  r = n("442837"),
  o = n("607070"),
  u = n("569379"),
  d = n("675654"),
  c = n("977524"),
  f = n("197857");
let E = ["#51BC9D"];
t.default = e => {
  let {
    quest: t,
    progressBarRef: n
  } = e, {
    completionSpring: h,
    startCompletionAnimation: _
  } = (0, u.useQuestBarCompletionAnimation)(), C = s.useRef(!1), m = (0, r.useStateFromStores)([o.default], () => o.default.useReducedMotion), S = s.useRef(null), [p, I] = s.useState(null), [g, T] = s.useState(null), A = s.useRef(new l.Environment({
    gravity: 0,
    wind: 0
  })), N = (0, l.useConfettiCannon)(p, g), v = s.useCallback(() => {
    let e = n.current,
      t = S.current;
    if (null != t && null != e && N.isReady) {
      var a, s, l, i;
      let {
        x: n,
        y: r
      } = e.getBoundingClientRect(), {
        x: o,
        y: u
      } = t.getBoundingClientRect();
      N.createMultipleConfetti((a = n - o, s = r - u, l = e.clientHeight, i = e.clientWidth, {
        ...d.COMMON_CONFETTI_BASE_CONFIG,
        position: {
          type: "static-random",
          minValue: {
            x: a,
            y: s
          },
          maxValue: {
            x: a + l,
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
          addValue: -.05
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
  }, [n, N]);
  return (s.useEffect(() => {
    var e;
    let n = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    !C.current && n && (_(), setTimeout(() => v(), 50)), C.current = n
  }, [t, v, _]), m) ? null : (0, a.jsxs)("div", {
    className: c.wrapper,
    "aria-hidden": "true",
    ref: S,
    children: [(0, a.jsx)(i.animated.div, {
      className: c.background,
      style: {
        opacity: h
      }
    }), (0, a.jsx)(l.ConfettiCanvas, {
      ref: I,
      className: c.confetti,
      environment: A.current
    }), (0, a.jsx)(l.SpriteCanvas, {
      ref: T,
      sprites: [f],
      colors: E,
      spriteWidth: d.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: d.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })]
  })
}