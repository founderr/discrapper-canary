n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(887024),
  l = n(920906),
  o = n(748780),
  r = n(596454),
  u = n(745510),
  c = n(912893),
  d = n(153850),
  h = n(768581),
  m = n(176354),
  p = n(675654),
  g = n(883021);
let T = [];

function f(e) {
  let {
    messageId: t,
    emoji: n,
    startPosition: f,
    targetPosition: v
  } = e, [E, I] = s.useState(0), [N, x] = s.useState(0), [S, C] = s.useState(null), {
    confettiCanvas: R
  } = s.useContext(u.h), Z = (0, a.uR)(R, S), _ = s.useMemo(() => [{
    src: null == n.id ? m.ZP.getURL(n.name) : h.ZP.getEmojiURL({
      id: n.id,
      animated: !1,
      size: 22
    }),
    colorize: !1
  }], [n.name, n.id]), O = v.x - v.width / 2 * .5, j = v.y - v.height / 2 * .5, A = (0, l.useSpring)({
    from: {
      y: f.y
    },
    to: {
      y: j
    },
    config: {
      duration: 450,
      easing: o.Z.Easing.in(o.Z.Easing.exp)
    },
    onChange: e => {
      let {
        y: t
      } = e;
      x(t)
    }
  }), M = (0, l.useSpring)({
    from: {
      x: f.x,
      scale: 1,
      opacity: 1
    },
    to: {
      x: O,
      scale: .5,
      opacity: .4
    },
    config: {
      duration: 450,
      easing: o.Z.Easing.in(o.Z.Easing.ease)
    },
    onRest: () => {
      (0, c.G)(t, n.name, n.id)
    },
    onChange: e => {
      let {
        x: t
      } = e;
      I(t)
    }
  });
  return s.useEffect(() => {
    E > 0 && N > 0 && Z.createConfetti({
      ...p.We,
      position: {
        type: "static",
        value: {
          x: E,
          y: N
        }
      }
    })
  }, [Z, E, N]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.Ji, {
      ref: C,
      sprites: _,
      colors: T,
      spriteWidth: p.Ko,
      spriteHeight: p.Ko
    }), (0, i.jsx)(d.ZP, {
      children: (0, i.jsx)(l.animated.div, {
        style: {
          ...A
        },
        className: g.emojiContainer,
        children: (0, i.jsx)(l.animated.div, {
          style: {
            ...M,
            opacity: M.opacity
          },
          children: (0, i.jsx)(r.Z, {
            className: g.emoji,
            emojiId: n.id,
            emojiName: n.name,
            animated: n.animated,
            size: "jumbo"
          })
        })
      })
    })]
  })
}