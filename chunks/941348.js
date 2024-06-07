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
    isExpansionAnimationComplete: o,
    onCtxMenuOpened: u,
    onCtxMenuClosed: d,
    onCtxMenuSelection: c,
    onContentHeightChange: E,
    quest: _,
    useReducedMotion: f
  } = e;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(n.default, {
      className: i.content,
      expansionSpring: s,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: _,
      useReducedMotion: f
    }), (0, a.jsx)(l.default, {
      className: i.content,
      onCtxMenuOpen: u,
      onCtxMenuClose: d,
      onCtxMenuSelect: c,
      onContentHeightChange: E,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: _,
      useReducedMotion: f,
      ref: t
    })]
  })
}