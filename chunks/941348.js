var s = n(735250),
  o = n(470079),
  r = n(308069),
  a = n(613087),
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
    onCtxMenuSelection: h,
    quest: C,
    useReducedMotion: f
  } = e, E = o.useRef(null), S = (null === (t = C.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  return (0, s.jsxs)(a.p, {
    expandedContentRef: n,
    collapsedContentRef: E,
    expansionSpring: d,
    isExpansionAnimationComplete: x,
    children: [!S && (0, s.jsx)(r.Z, {
      quest: C,
      expansionSpring: d,
      useReducedMotion: f,
      isExpanded: p,
      isExpansionAnimationComplete: x,
      onCtxMenuOpen: m,
      onCtxMenuClose: g,
      onCtxMenuSelect: h
    }), (0, s.jsx)(l.Z, {
      ref: E,
      className: u.content,
      expansionSpring: d,
      isExpanded: p,
      isExpansionAnimationComplete: x,
      quest: C,
      useReducedMotion: f
    }), (0, s.jsx)(i.Z, {
      expansionSpring: d,
      className: u.content,
      onCtxMenuOpen: m,
      onCtxMenuClose: g,
      onCtxMenuSelect: h,
      isExpanded: p,
      isExpansionAnimationComplete: x,
      quest: C,
      useReducedMotion: f,
      ref: n
    }), (0, s.jsx)(c.Z, {
      expansionSpring: d,
      isExpanded: p
    })]
  })
}