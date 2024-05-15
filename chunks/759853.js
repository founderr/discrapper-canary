"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("887024"),
  l = n("685626"),
  r = n("569379"),
  o = n("675654"),
  u = n("977524"),
  d = n("197857");
let c = ["#51BC9D"];
t.default = e => {
  let {
    quest: t,
    progressBarRef: n
  } = e, {
    completionSpring: f,
    startCompletionAnimation: E
  } = (0, r.useQuestBarCompletionAnimation)(), h = s.useRef(!1), [_, C] = s.useState(null), [m, p] = s.useState(null), S = s.useRef(new i.Environment({
    gravity: 0,
    wind: 0
  })), g = (0, i.useConfettiCannon)(_, m), I = s.useCallback(() => {
    let e = n.current;
    if (null != e && g.isReady) {
      var t, a, s, i;
      g.createMultipleConfetti((t = e.offsetLeft, a = e.offsetTop, s = e.clientHeight, i = e.clientWidth, {
        ...o.COMMON_CONFETTI_BASE_CONFIG,
        position: {
          type: "static-random",
          minValue: {
            x: t + 12,
            y: a + 12
          },
          maxValue: {
            x: t + 12 + s,
            y: a + 12 + i
          }
        },
        velocity: {
          type: "static-random",
          minValue: {
            x: -30,
            y: -30
          },
          maxValue: {
            x: 30,
            y: 30
          }
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
      }), 50)
    }
  }, [n, g]);
  return s.useEffect(() => {
    var e;
    let n = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    !h.current && n && (E(), I()), h.current = n
  }, [t, I, E]), (0, a.jsxs)("div", {
    className: u.wrapper,
    children: [(0, a.jsx)(l.animated.div, {
      className: u.background,
      style: {
        opacity: f
      }
    }), (0, a.jsx)(i.ConfettiCanvas, {
      ref: C,
      className: u.confetti,
      environment: S.current
    }), (0, a.jsx)(i.SpriteCanvas, {
      ref: p,
      sprites: [d],
      colors: c,
      spriteWidth: o.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: o.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })]
  })
}