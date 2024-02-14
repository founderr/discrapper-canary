"use strict";
i.r(t), i.d(t, {
  default: function() {
    return E
  }
}), i("222007");
var a = i("37983"),
  n = i("884691"),
  l = i("516555"),
  o = i("907002"),
  s = i("458960"),
  r = i("430568"),
  u = i("526887"),
  d = i("140708"),
  c = i("983782"),
  h = i("315102"),
  p = i("402671"),
  T = i("172858"),
  m = i("62688");
let f = [];

function E(e) {
  let {
    messageId: t,
    emoji: i,
    startPosition: E,
    targetPosition: R
  } = e, [I, g] = n.useState(0), [_, N] = n.useState(0), [C, v] = n.useState(null), {
    confettiCanvas: O
  } = n.useContext(u.ConfettiCannonContext), S = (0, l.useConfettiCannon)(O, C), j = n.useMemo(() => {
    let e = null == i.id ? p.default.getURL(i.name) : h.default.getEmojiURL({
      id: i.id,
      animated: !1,
      size: 22
    });
    return [{
      src: e,
      colorize: !1
    }]
  }, [i.name, i.id]), x = R.x - R.width / 2 * .5, A = R.y - R.height / 2 * .5, P = (0, o.useSpring)({
    from: {
      y: E.y
    },
    to: {
      y: A
    },
    config: {
      duration: 450,
      easing: s.default.Easing.in(s.default.Easing.exp)
    },
    onChange: e => {
      let {
        y: t
      } = e;
      N(t)
    }
  }), M = (0, o.useSpring)({
    from: {
      x: E.x,
      scale: 1,
      opacity: 1
    },
    to: {
      x: x,
      scale: .5,
      opacity: .4
    },
    config: {
      duration: 450,
      easing: s.default.Easing.in(s.default.Easing.ease)
    },
    onRest: () => {
      (0, d.clearReactionPickerAnimation)(t, i.name, i.id)
    },
    onChange: e => {
      let {
        x: t
      } = e;
      g(t)
    }
  });
  return n.useEffect(() => {
    I > 0 && _ > 0 && S.createConfetti({
      ...T.COMMON_CONFETTI_BASE_CONFIG,
      position: {
        type: "static",
        value: {
          x: I,
          y: _
        }
      }
    })
  }, [S, I, _]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.SpriteCanvas, {
      ref: v,
      sprites: j,
      colors: f,
      spriteWidth: T.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: T.COMMON_CONFETTI_MAX_SPRITE_SIZE
    }), (0, a.jsx)(c.default, {
      children: (0, a.jsx)(o.animated.div, {
        style: {
          ...P
        },
        className: m.emojiContainer,
        children: (0, a.jsx)(o.animated.div, {
          style: {
            ...M,
            opacity: M.opacity
          },
          children: (0, a.jsx)(r.default, {
            className: m.emoji,
            emojiId: i.id,
            emojiName: i.name,
            animated: i.animated,
            size: "jumbo"
          })
        })
      })
    })]
  })
}