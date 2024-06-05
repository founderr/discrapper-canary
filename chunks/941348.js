"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("457153"),
  l = n("254197"),
  i = n("685689");
t.default = function(e) {
  let {
    expandedContentRef: t,
    expansionSpring: n,
    isExpanded: r,
    isExpansionAnimationComplete: o,
    onCtxMenuOpened: u,
    onCtxMenuClosed: d,
    onCtxMenuSelection: c,
    onContentHeightChange: f,
    quest: E,
    useReducedMotion: h
  } = e;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(s.default, {
      className: i.content,
      expansionSpring: n,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: E,
      useReducedMotion: h
    }), (0, a.jsx)(l.default, {
      className: i.content,
      onCtxMenuOpen: u,
      onCtxMenuClose: d,
      onCtxMenuSelect: c,
      onContentHeightChange: f,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: E,
      useReducedMotion: h,
      ref: t
    })]
  })
}