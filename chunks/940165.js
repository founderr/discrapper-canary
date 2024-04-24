"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var n = s("735250");
s("470079");
var a = s("120356"),
  l = s.n(a),
  o = s("960524"),
  i = s("793030"),
  c = s("481060"),
  r = s("759198"),
  u = s("552958"),
  d = s("689938"),
  O = s("169776");

function C(e) {
  let {
    label: t,
    className: s,
    description: a,
    soundpack: C,
    key: I
  } = e, {
    playSound: _,
    isPlaying: T
  } = (0, u.default)();
  return (0, n.jsxs)(c.Clickable, {
    "aria-label": d.default.Messages.PLAY,
    className: l()(O.container, s, {
      [O.containerActive]: T
    }),
    onClick: () => _(C),
    children: [(0, n.jsx)(o.CirclePlayIcon, {
      className: O.playButton,
      color: T ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_NORMAL
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(r.default, {
        variant: "text-md/medium",
        children: t
      }), (0, n.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: a
      })]
    })]
  }, I)
}