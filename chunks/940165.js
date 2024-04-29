"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  o = s("960524"),
  i = s("793030"),
  c = s("481060"),
  r = s("759198"),
  u = s("552958"),
  d = s("689938"),
  C = s("866723");

function O(e) {
  let {
    label: t,
    className: s,
    description: n,
    soundpack: O,
    key: I
  } = e, {
    playSound: _,
    isPlaying: T
  } = (0, u.default)();
  return (0, a.jsxs)(c.Clickable, {
    "aria-label": d.default.Messages.PLAY,
    className: l()(C.container, s, {
      [C.containerActive]: T
    }),
    onClick: () => _(O),
    children: [(0, a.jsx)(o.CirclePlayIcon, {
      className: C.playButton,
      color: T ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_NORMAL
    }), (0, a.jsxs)("div", {
      className: C.textContainer,
      children: [(0, a.jsx)(r.default, {
        variant: "text-md/medium",
        children: t
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  }, I)
}