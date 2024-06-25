var s = n(735250),
  o = n(470079),
  a = n(308069),
  r = n(613087),
  l = n(457153),
  i = n(254197),
  c = n(321025),
  u = n(11281);
t.Z = function(e) {
  var t;
  let {
    expandedContentRef: n,
    expansionSpring: d,
    isExpanded: p,
    isExpansionAnimationComplete: x,
    onCtxMenuOpened: m,
    onCtxMenuClosed: g,
    onCtxMenuSelection: C,
    onContentHeightChange: h,
    quest: S,
    useReducedMotion: E
  } = e, f = o.useRef(null), v = (null === (t = S.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  return (0, s.jsxs)(r.p, {
    expandedContentRef: n,
    collapsedContentRef: f,
    expansionSpring: d,
    isExpansionAnimationComplete: x,
    children: [!v && (0, s.jsx)(a.Z, {
      quest: S,
      expansionSpring: d,
      useReducedMotion: E,
      isExpanded: p,
      isExpansionAnimationComplete: x,
      onCtxMenuOpen: m,
      onCtxMenuClose: g,
      onCtxMenuSelect: C
    }), (0, s.jsx)(l.Z, {
      ref: f,
      className: u.content,
      expansionSpring: d,
      isExpanded: p,
      isExpansionAnimationComplete: x,
      quest: S,
      useReducedMotion: E
    }), (0, s.jsx)(i.Z, {
      expansionSpring: d,
      className: u.content,
      onCtxMenuOpen: m,
      onCtxMenuClose: g,
      onCtxMenuSelect: C,
      onContentHeightChange: h,
      isExpanded: p,
      isExpansionAnimationComplete: x,
      quest: S,
      useReducedMotion: E,
      ref: n
    }), (0, s.jsx)(c.Z, {
      expansionSpring: d,
      isExpanded: p
    })]
  })
}