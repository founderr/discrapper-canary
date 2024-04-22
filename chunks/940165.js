"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  r = n.n(a),
  i = n("960524"),
  o = n("793030"),
  u = n("481060"),
  l = n("471113"),
  _ = n("552958"),
  c = n("169776");

function S(e) {
  let {
    showGradient: t,
    className: n
  } = e, {
    playSound: a,
    isPlaying: S
  } = (0, _.default)(), d = t ? l.default : o.Text;
  return (0, s.jsxs)(u.Clickable, {
    className: r()(c.container, {
      [c.containerActive]: S
    }, n),
    onClick: () => a(),
    children: [(0, s.jsx)(i.CirclePlayIcon, {
      className: c.playButton,
      color: S ? u.tokens.colors.INTERACTIVE_ACTIVE : u.tokens.colors.INTERACTIVE_NORMAL
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(d, {
        variant: "text-md/medium",
        children: "Dicord default"
      }), (0, s.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: "Lo-Fi"
      })]
    })]
  })
}