"use strict";
s.r(t);
var n = s("735250");
s("470079");
var a = s("35148"),
  l = s("266685"),
  i = s("213595");
t.default = function(e) {
  let {
    expandedContentRef: t,
    expansionSpring: s,
    isExpanded: r,
    isExpansionAnimationComplete: o,
    onCtxMenuOpened: u,
    onCtxMenuClosed: d,
    onCtxMenuSelection: c,
    quest: E,
    useReducedMotion: f
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(a.default, {
      className: i.content,
      expansionSpring: s,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: E,
      useReducedMotion: f
    }), (0, n.jsx)(l.default, {
      className: i.content,
      onCtxMenuOpen: u,
      onCtxMenuClose: d,
      onCtxMenuSelect: c,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: E,
      useReducedMotion: f,
      ref: t
    })]
  })
}