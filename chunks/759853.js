"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("887024"),
  i = s("920906"),
  r = s("442837"),
  u = s("607070"),
  o = s("569379"),
  d = s("675654"),
  c = s("977524"),
  E = s("197857");
let _ = ["#51BC9D"];
t.default = e => {
  let {
    quest: t,
    progressBarRef: s
  } = e, {
    completionSpring: f,
    startCompletionAnimation: h
  } = (0, o.useQuestBarCompletionAnimation)(), m = n.useRef(!1), T = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), C = n.useRef(null), [g, A] = n.useState(null), [N, p] = n.useState(null), S = n.useRef(new l.Environment({
    gravity: 0,
    wind: 0
  })), I = (0, l.useConfettiCannon)(g, N), v = n.useCallback(() => {
    let e = s.current,
      t = C.current;
    if (null != t && null != e && I.isReady) {
      var a, n, l, i;
      let {
        x: s,
        y: r
      } = e.getBoundingClientRect(), {
        x: u,
        y: o
      } = t.getBoundingClientRect();
      I.createMultipleConfetti((a = s - u, n = r - o, l = e.clientHeight, i = e.clientWidth, {
        ...d.COMMON_CONFETTI_BASE_CONFIG,
        position: {
          type: "static-random",
          minValue: {
            x: a,
            y: n
          },
          maxValue: {
            x: a + l,
            y: n + i
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
  }, [s, I]);
  return (n.useEffect(() => {
    var e;
    let s = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    !m.current && s && (h(), setTimeout(() => v(), 50)), m.current = s
  }, [t, v, h]), T) ? null : (0, a.jsxs)("div", {
    className: c.wrapper,
    "aria-hidden": "true",
    ref: C,
    children: [(0, a.jsx)(i.animated.div, {
      className: c.background,
      style: {
        opacity: f
      }
    }), (0, a.jsx)(l.ConfettiCanvas, {
      ref: A,
      className: c.confetti,
      environment: S.current
    }), (0, a.jsx)(l.SpriteCanvas, {
      ref: p,
      sprites: [E],
      colors: _,
      spriteWidth: d.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: d.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })]
  })
}