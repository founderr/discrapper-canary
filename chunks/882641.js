"use strict";
n.r(t), n.d(t, {
  EMOJI_BUTTON_SPRING_CONFIG: function() {
    return f
  },
  default: function() {
    return v
  }
}), n("222007");
var r = n("37983"),
  s = n("884691"),
  i = n("414456"),
  a = n.n(i),
  o = n("907002"),
  l = n("77078"),
  c = n("913144"),
  u = n("474293"),
  d = n("958706"),
  p = n("782340"),
  h = n("505436");
let f = {
  tension: 800,
  friction: 24
};
var v = function(e) {
  var t;
  let {
    tabIndex: n,
    className: i,
    renderButtonContents: v,
    active: g,
    onClick: m,
    "aria-controls": O,
    focusProps: D
  } = e, [E, L] = s.useState(!1), [x, T] = s.useState(50), I = E || g, N = (0, u.getClass)(h, "emojiButton", I ? "Hovered" : "Normal");
  let b = (t = x, {
      "--custom-emoji-sprite-size": "".concat(24, "px"),
      "--custom-emoji-sprite-row": Math.floor(t / 20),
      "--custom-emoji-sprite-col": t % 20
    }),
    A = s.useCallback(() => {
      if (!I) L(!0), T(Math.floor(77 * Math.random())), c.default.dispatch({
        type: "EMOJI_INTERACTION_INITIATED",
        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
      })
    }, [I, L, T]),
    R = s.useCallback(() => {
      L(!1)
    }, [L]),
    j = s.useCallback(() => {
      c.default.dispatch({
        type: "EMOJI_INTERACTION_INITIATED",
        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
      })
    }, []);
  return (0, r.jsx)(l.Button, {
    look: l.Button.Looks.BLANK,
    size: l.Button.Sizes.NONE,
    tabIndex: n,
    className: a(N, i),
    onMouseEnter: A,
    onMouseOver: A,
    onMouseLeave: R,
    onFocus: j,
    onClick: m,
    "aria-label": p.default.Messages.SELECT_EMOJI,
    "aria-controls": O,
    "aria-expanded": g,
    "aria-haspopup": "dialog",
    focusProps: D,
    children: null != v ? v() : (0, r.jsx)(o.Spring, {
      config: f,
      to: {
        value: I ? 1 : 0
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, r.jsxs)(o.animated.div, {
          className: h.spriteContainer,
          style: {
            ...b,
            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
          },
          children: [(0, r.jsx)("div", {
            className: a(h.sprite, h.spriteColored, I ? h.active : h.inactive)
          }), (0, r.jsx)("div", {
            className: a(h.sprite, h.spriteGreyscale, I ? h.inactive : h.active)
          })]
        })
      }
    })
  })
}