"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var s = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  a = n("960524"),
  o = n("793030"),
  u = n("481060"),
  l = n("471113"),
  c = n("552958"),
  d = n("169776");

function S(e) {
  let {
    showGradient: t,
    className: n
  } = e, {
    playSound: i,
    isPlaying: S
  } = (0, c.default)(), _ = t ? l.default : o.Text;
  return (0, s.jsxs)(u.Clickable, {
    className: r()(d.container, {
      [d.containerActive]: S
    }, n),
    onClick: () => i(),
    children: [(0, s.jsx)(a.CirclePlayIcon, {
      className: d.playButton,
      color: S ? u.tokens.colors.INTERACTIVE_ACTIVE : u.tokens.colors.INTERACTIVE_NORMAL
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(_, {
        variant: "text-md/medium",
        children: "Dicord default"
      }), (0, s.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: "Lo-Fi"
      })]
    })]
  })
}