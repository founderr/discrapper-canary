"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  r = s.n(n),
  u = s("960524"),
  i = s("793030"),
  l = s("481060"),
  E = s("471113"),
  _ = s("552958"),
  o = s("169776");

function S(e) {
  let {
    showGradient: t,
    className: s
  } = e, {
    playSound: n,
    isPlaying: S
  } = (0, _.default)(), M = t ? E.default : i.Text;
  return (0, a.jsxs)(l.Clickable, {
    className: r()(o.container, {
      [o.containerActive]: S
    }, s),
    onClick: () => n(),
    children: [(0, a.jsx)(u.CirclePlayIcon, {
      className: o.playButton,
      color: S ? l.tokens.colors.INTERACTIVE_ACTIVE : l.tokens.colors.INTERACTIVE_NORMAL
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(M, {
        variant: "text-md/medium",
        children: "Dicord default"
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: "Lo-Fi"
      })]
    })]
  })
}