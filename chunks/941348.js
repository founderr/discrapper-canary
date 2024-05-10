"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("457153"),
  i = n("254197"),
  l = n("685689");
t.default = function(e) {
  let {
    expandedContentRef: t,
    expansionSpring: n,
    isExpanded: r,
    isExpansionAnimationComplete: o,
    onCtxMenuOpened: u,
    onCtxMenuClosed: d,
    onCtxMenuSelection: c,
    quest: f,
    useReducedMotion: E
  } = e;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(s.default, {
      className: l.content,
      expansionSpring: n,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: f,
      useReducedMotion: E
    }), (0, a.jsx)(i.default, {
      className: l.content,
      onCtxMenuOpen: u,
      onCtxMenuClose: d,
      onCtxMenuSelect: c,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: f,
      useReducedMotion: E,
      ref: t
    })]
  })
}