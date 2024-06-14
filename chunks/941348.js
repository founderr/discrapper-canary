"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  l = s("613087"),
  i = s("457153"),
  r = s("254197"),
  o = s("321025"),
  u = s("685689");
t.default = function(e) {
  let {
    expandedContentRef: t,
    expansionSpring: s,
    isExpanded: d,
    isExpansionAnimationComplete: c,
    onCtxMenuOpened: E,
    onCtxMenuClosed: _,
    onCtxMenuSelection: f,
    onContentHeightChange: h,
    quest: C,
    useReducedMotion: m
  } = e, T = a.useRef(null);
  return (0, n.jsxs)(l.QuestBarV2AnimationContextProvider, {
    expandedContentRef: t,
    collapsedContentRef: T,
    expansionSpring: s,
    isExpansionAnimationComplete: c,
    children: [(0, n.jsx)(i.default, {
      ref: T,
      className: u.content,
      expansionSpring: s,
      isExpanded: d,
      isExpansionAnimationComplete: c,
      quest: C,
      useReducedMotion: m
    }), (0, n.jsx)(r.default, {
      className: u.content,
      onCtxMenuOpen: E,
      onCtxMenuClose: _,
      onCtxMenuSelect: f,
      onContentHeightChange: h,
      isExpanded: d,
      isExpansionAnimationComplete: c,
      quest: C,
      useReducedMotion: m,
      ref: t
    }), (0, n.jsx)(o.default, {
      expansionSpring: s,
      isExpanded: d
    })]
  })
}