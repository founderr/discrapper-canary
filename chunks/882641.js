"use strict";
n.r(t), n.d(t, {
  EMOJI_BUTTON_SPRING_CONFIG: function() {
    return _
  },
  default: function() {
    return I
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  o = n("414456"),
  l = n.n(o),
  a = n("907002"),
  u = n("77078"),
  s = n("913144"),
  c = n("474293"),
  d = n("958706"),
  f = n("782340"),
  E = n("505436");
let _ = {
  tension: 800,
  friction: 24
};
var I = function(e) {
  var t;
  let {
    tabIndex: n,
    className: o,
    renderButtonContents: I,
    active: T,
    onClick: p,
    "aria-controls": S,
    focusProps: N
  } = e, [h, C] = i.useState(!1), [v, R] = i.useState(50), A = h || T, g = (0, c.getClass)(E, "emojiButton", A ? "Hovered" : "Normal");
  let U = (t = v, {
      "--custom-emoji-sprite-size": "".concat(24, "px"),
      "--custom-emoji-sprite-row": Math.floor(t / 20),
      "--custom-emoji-sprite-col": t % 20
    }),
    m = i.useCallback(() => {
      if (!A) C(!0), R(Math.floor(77 * Math.random())), s.default.dispatch({
        type: "EMOJI_INTERACTION_INITIATED",
        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
      })
    }, [A, C, R]),
    P = i.useCallback(() => {
      C(!1)
    }, [C]),
    L = i.useCallback(() => {
      s.default.dispatch({
        type: "EMOJI_INTERACTION_INITIATED",
        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
      })
    }, []);
  return (0, r.jsx)(u.Button, {
    look: u.Button.Looks.BLANK,
    size: u.Button.Sizes.NONE,
    tabIndex: n,
    className: l(g, o),
    onMouseEnter: m,
    onMouseOver: m,
    onMouseLeave: P,
    onFocus: L,
    onClick: p,
    "aria-label": f.default.Messages.SELECT_EMOJI,
    "aria-controls": S,
    "aria-expanded": T,
    "aria-haspopup": "dialog",
    focusProps: N,
    children: null != I ? I() : (0, r.jsx)(a.Spring, {
      config: _,
      to: {
        value: A ? 1 : 0
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, r.jsxs)(a.animated.div, {
          className: E.spriteContainer,
          style: {
            ...U,
            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
          },
          children: [(0, r.jsx)("div", {
            className: l(E.sprite, E.spriteColored, A ? E.active : E.inactive)
          }), (0, r.jsx)("div", {
            className: l(E.sprite, E.spriteGreyscale, A ? E.inactive : E.active)
          })]
        })
      }
    })
  })
}