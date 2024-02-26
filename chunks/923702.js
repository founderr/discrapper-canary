"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  i = s("516555"),
  l = s("172858"),
  r = function(e) {
    let {
      confettiTarget: t,
      confettiCanvas: s,
      confettiVelocityMultiplier: r,
      sprites: u,
      colors: o
    } = e, [c, d] = a.useState(null), _ = (0, i.useConfettiCannon)(s, c), [f, m] = a.useState(!1);
    return a.useEffect(() => {
      let e = Array(10).fill(0);
      return null != t && _.isReady && !f && (e = e.map((s, n) => setTimeout(() => {
        var s, a;
        n === e.length - 1 && m(!0), _.createMultipleConfetti((s = t.getBoundingClientRect(), a = null != (a = r) ? a : 1, {
          ...l.COMMON_CONFETTI_BASE_CONFIG,
          position: {
            type: "static-random",
            minValue: {
              x: s.x,
              y: s.y
            },
            maxValue: {
              x: s.x + s.width,
              y: s.y + s.height / 2
            }
          },
          velocity: {
            type: "static-random",
            minValue: {
              x: -100 * a,
              y: -50 * a
            },
            maxValue: {
              x: 100 * a,
              y: -300 * a
            }
          },
          dragCoefficient: {
            type: "static",
            value: 1e-4
          }
        }), 50)
      }, 100 * n))), () => {
        for (let t of e) clearTimeout(t)
      }
    }, [_, t, f, r]), (0, n.jsx)(i.SpriteCanvas, {
      ref: d,
      sprites: null != u ? u : l.COMMON_CONFETTI_SPRITES,
      colors: null != o ? o : l.COMMON_CONFETTI_COLORS,
      spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })
  }