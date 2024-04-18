"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  r = s.n(n),
  _ = s("960524"),
  l = s("793030"),
  u = s("481060"),
  E = s("471113"),
  i = s("552958"),
  S = s("169776");

function o(e) {
  let {
    showGradient: t,
    className: s
  } = e, {
    playSound: n,
    isPlaying: o
  } = (0, i.default)(), M = t ? E.default : l.Text;
  return (0, a.jsxs)(u.Clickable, {
    className: r()(S.container, {
      [S.containerActive]: o
    }, s),
    onClick: () => n(),
    children: [(0, a.jsx)(_.CirclePlayIcon, {
      className: S.playButton,
      color: o ? u.tokens.colors.INTERACTIVE_ACTIVE : u.tokens.colors.INTERACTIVE_NORMAL
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(M, {
        variant: "text-md/medium",
        children: "Dicord default"
      }), (0, a.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: "Lo-Fi"
      })]
    })]
  })
}