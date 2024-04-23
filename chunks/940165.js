"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  o = n("960524"),
  i = n("793030"),
  c = n("481060"),
  r = n("759198"),
  u = n("552958"),
  d = n("169776");

function O(e) {
  let {
    label: t,
    className: n,
    description: a,
    soundpack: O,
    key: C
  } = e, {
    playSound: I,
    isPlaying: _
  } = (0, u.default)();
  return (0, s.jsxs)(c.Clickable, {
    className: l()(d.container, {
      [d.containerActive]: _
    }, n),
    onClick: () => I(O),
    children: [(0, s.jsx)(o.CirclePlayIcon, {
      className: d.playButton,
      color: _ ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_NORMAL
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(r.default, {
        variant: "text-md/medium",
        children: t
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: a
      })]
    })]
  }, C)
}