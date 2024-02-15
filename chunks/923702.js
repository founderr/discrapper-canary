"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
var r = n("37983"),
  a = n("884691"),
  o = n("516555"),
  l = n("172858"),
  s = function(e) {
    let {
      confettiTarget: t,
      confettiCanvas: n,
      sprites: s,
      colors: i
    } = e, [c, u] = a.useState(null), d = (0, o.useConfettiCannon)(n, c), [f, C] = a.useState(!1);
    return a.useEffect(() => {
      let e = Array(10).fill(0);
      return null != t && d.isReady && !f && (e = e.map((n, r) => setTimeout(() => {
        var n;
        r === e.length - 1 && C(!0), d.createMultipleConfetti((n = t.getBoundingClientRect(), {
          ...l.COMMON_CONFETTI_BASE_CONFIG,
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
      }, 100 * r))), () => {
        for (let t of e) clearTimeout(t)
      }
    }, [d, t, f]), (0, r.jsx)(o.SpriteCanvas, {
      ref: u,
      sprites: null != s ? s : l.COMMON_CONFETTI_SPRITES,
      colors: null != i ? i : l.COMMON_CONFETTI_COLORS,
      spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })
  }