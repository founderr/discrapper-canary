"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  l = s("308069"),
  i = s("613087"),
  r = s("457153"),
  o = s("254197"),
  u = s("321025"),
  d = s("685689");
t.default = function(e) {
  var t;
  let {
    expandedContentRef: s,
    expansionSpring: c,
    isExpanded: E,
    isExpansionAnimationComplete: f,
    onCtxMenuOpened: _,
    onCtxMenuClosed: h,
    onCtxMenuSelection: C,
    onContentHeightChange: m,
    quest: T,
    useReducedMotion: g
  } = e, p = a.useRef(null), A = (null === (t = T.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  return (0, n.jsxs)(i.QuestBarV2AnimationContextProvider, {
    expandedContentRef: s,
    collapsedContentRef: p,
    expansionSpring: c,
    isExpansionAnimationComplete: f,
    children: [!A && (0, n.jsx)(l.default, {
      quest: T,
      expansionSpring: c,
      useReducedMotion: g,
      isExpanded: E,
      isExpansionAnimationComplete: f,
      onCtxMenuOpen: _,
      onCtxMenuClose: h,
      onCtxMenuSelect: C
    }), (0, n.jsx)(r.default, {
      ref: p,
      className: d.content,
      expansionSpring: c,
      isExpanded: E,
      isExpansionAnimationComplete: f,
      quest: T,
      useReducedMotion: g
    }), (0, n.jsx)(o.default, {
      expansionSpring: c,
      className: d.content,
      onCtxMenuOpen: _,
      onCtxMenuClose: h,
      onCtxMenuSelect: C,
      onContentHeightChange: m,
      isExpanded: E,
      isExpansionAnimationComplete: f,
      quest: T,
      useReducedMotion: g,
      ref: s
    }), (0, n.jsx)(u.default, {
      expansionSpring: c,
      isExpanded: E
    })]
  })
}