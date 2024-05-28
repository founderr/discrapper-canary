"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("457153"),
  l = s("254197"),
  i = s("685689");
t.default = function(e) {
  let {
    expandedContentRef: t,
    expansionSpring: s,
    isExpanded: r,
    isExpansionAnimationComplete: u,
    onCtxMenuOpened: o,
    onCtxMenuClosed: d,
    onCtxMenuSelection: c,
    quest: E,
    useReducedMotion: _
  } = e;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(n.default, {
      className: i.content,
      expansionSpring: s,
      isExpanded: r,
      isExpansionAnimationComplete: u,
      quest: E,
      useReducedMotion: _
    }), (0, a.jsx)(l.default, {
      className: i.content,
      onCtxMenuOpen: o,
      onCtxMenuClose: d,
      onCtxMenuSelect: c,
      isExpanded: r,
      isExpansionAnimationComplete: u,
      quest: E,
      useReducedMotion: _,
      ref: t
    })]
  })
}