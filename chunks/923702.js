"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
}), r("222007");
var n = r("37983"),
  o = r("884691"),
  a = r("516555"),
  l = r("172858"),
  s = function(e) {
    let {
      confettiTarget: t,
      confettiCanvas: r,
      sprites: s,
      colors: i
    } = e, [c, u] = o.useState(null), d = (0, a.useConfettiCannon)(r, c), [f, C] = o.useState(!1);
    return o.useEffect(() => {
      let e = Array(10).fill(0);
      return null != t && d.isReady && !f && (e = e.map((r, n) => setTimeout(() => {
        var r;
        n === e.length - 1 && C(!0), d.createMultipleConfetti((r = t.getBoundingClientRect(), {
          ...l.COMMON_CONFETTI_BASE_CONFIG,
          position: {
            type: "static-random",
            minValue: {
              x: r.x,
              y: r.y
            },
            maxValue: {
              x: r.x + r.width,
              y: r.y + r.height / 2
            }
          },
          velocity: {
            type: "static-random",
            minValue: {
              x: -100,
              y: -50
            },
            maxValue: {
              x: 100,
              y: -300
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
    }, [d, t, f]), (0, n.jsx)(a.SpriteCanvas, {
      ref: u,
      sprites: null != s ? s : l.COMMON_CONFETTI_SPRITES,
      colors: null != i ? i : l.COMMON_CONFETTI_COLORS,
      spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })
  }