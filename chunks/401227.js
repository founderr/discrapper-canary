"use strict";
n.d(t, {
  u: function() {
    return I
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(481060),
  u = n(130402),
  _ = n(153066),
  c = n(185923),
  d = n(689938),
  E = n(595958);
let I = {
  tension: 800,
  friction: 24
};
t.Z = function(e) {
  var t;
  let {
    tabIndex: n,
    className: s,
    renderButtonContents: T,
    active: h,
    onClick: f,
    "aria-controls": S,
    focusProps: A
  } = e, [N, m] = r.useState(!1), [O, R] = r.useState(50), p = N || h, g = (0, _.l)(E, "emojiButton", p ? "Hovered" : "Normal");
  let C = (t = O, {
      "--custom-emoji-sprite-size": "".concat(24, "px"),
      "--custom-emoji-sprite-row": Math.floor(t / 20),
      "--custom-emoji-sprite-col": t % 20
    }),
    v = r.useCallback(() => {
      if (p) return;
      let e = Math.floor(77 * Math.random());
      m(!0), R(e), (0, u.x)(c.qR.EmojiButtonMouseEntered)
    }, [p, m, R]),
    L = r.useCallback(() => {
      m(!1)
    }, [m]),
    D = r.useCallback(() => (0, u.x)(c.qR.EmojiButtonFocused), []);
  return (0, i.jsx)(l.Button, {
    look: l.Button.Looks.BLANK,
    size: l.Button.Sizes.NONE,
    tabIndex: n,
    className: o()(g, s),
    onMouseEnter: v,
    onMouseOver: v,
    onMouseLeave: L,
    onFocus: D,
    onClick: f,
    "aria-label": d.Z.Messages.SELECT_EMOJI,
    "aria-controls": S,
    "aria-expanded": h,
    "aria-haspopup": "dialog",
    focusProps: A,
    children: null != T ? T() : (0, i.jsx)(a.Spring, {
      config: I,
      to: {
        value: p ? 1 : 0
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, i.jsxs)(a.animated.div, {
          className: E.spriteContainer,
          style: {
            ...C,
            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
          },
          children: [(0, i.jsx)("div", {
            className: o()(E.sprite, E.spriteColored, p ? E.active : E.inactive)
          }), (0, i.jsx)("div", {
            className: o()(E.sprite, E.spriteGreyscale, p ? E.inactive : E.active)
          })]
        })
      }
    })
  })
}