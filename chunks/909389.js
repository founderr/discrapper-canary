"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("35148"),
  l = s("266685"),
  i = s("213595");
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
  return (0, a.jsxs)(a.Fragment, {
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