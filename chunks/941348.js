"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("457153"),
  l = a("254197"),
  i = a("192919");
t.default = function(e) {
  let {
    expandedContentRef: t,
    expansionSpring: a,
    isExpanded: r,
    isExpansionAnimationComplete: o,
    onCtxMenuOpened: u,
    onCtxMenuClosed: d,
    onCtxMenuSelection: c,
    quest: f,
    useReducedMotion: E
  } = e;
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(s.default, {
      className: i.content,
      expansionSpring: a,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: f,
      useReducedMotion: E
    }), (0, n.jsx)(l.default, {
      className: i.content,
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