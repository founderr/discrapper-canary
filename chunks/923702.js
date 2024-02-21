"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("516555"),
  i = n("172858"),
  r = function(e) {
    let {
      confettiTarget: t,
      confettiCanvas: n,
      confettiVelocityMultiplier: r,
      sprites: u,
      colors: o
    } = e, [c, d] = a.useState(null), _ = (0, l.useConfettiCannon)(n, c), [f, m] = a.useState(!1);
    return a.useEffect(() => {
      let e = Array(10).fill(0);
      return null != t && _.isReady && !f && (e = e.map((n, s) => setTimeout(() => {
        var n, a;
        s === e.length - 1 && m(!0), _.createMultipleConfetti((n = t.getBoundingClientRect(), a = null != (a = r) ? a : 1, {
          ...i.COMMON_CONFETTI_BASE_CONFIG,
          position: {
            type: "static-random",
            minValue: {
              x: n.x,
              y: n.y
            },
            maxValue: {
              x: n.x + n.width,
              y: n.y + n.height / 2
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
      }, 100 * s))), () => {
        for (let t of e) clearTimeout(t)
      }
    }, [_, t, f, r]), (0, s.jsx)(l.SpriteCanvas, {
      ref: d,
      sprites: null != u ? u : i.COMMON_CONFETTI_SPRITES,
      colors: null != o ? o : i.COMMON_CONFETTI_COLORS,
      spriteWidth: i.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: i.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })
  }