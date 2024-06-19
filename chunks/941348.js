var s = n(735250),
  a = n(470079),
  i = n(308069),
  l = n(613087),
  r = n(457153),
  o = n(254197),
  c = n(321025),
  d = n(11281);
t.Z = function(e) {
  var t;
  let {
    expandedContentRef: n,
    expansionSpring: u,
    isExpanded: E,
    isExpansionAnimationComplete: _,
    onCtxMenuOpened: h,
    onCtxMenuClosed: m,
    onCtxMenuSelection: T,
    onContentHeightChange: C,
    quest: g,
    useReducedMotion: p
  } = e, N = a.useRef(null), I = (null === (t = g.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  return (0, s.jsxs)(l.p, {
    expandedContentRef: n,
    collapsedContentRef: N,
    expansionSpring: u,
    isExpansionAnimationComplete: _,
    children: [!I && (0, s.jsx)(i.Z, {
      quest: g,
      expansionSpring: u,
      useReducedMotion: p,
      isExpanded: E,
      isExpansionAnimationComplete: _,
      onCtxMenuOpen: h,
      onCtxMenuClose: m,
      onCtxMenuSelect: T
    }), (0, s.jsx)(r.Z, {
      ref: N,
      className: d.content,
      expansionSpring: u,
      isExpanded: E,
      isExpansionAnimationComplete: _,
      quest: g,
      useReducedMotion: p
    }), (0, s.jsx)(o.Z, {
      expansionSpring: u,
      className: d.content,
      onCtxMenuOpen: h,
      onCtxMenuClose: m,
      onCtxMenuSelect: T,
      onContentHeightChange: C,
      isExpanded: E,
      isExpansionAnimationComplete: _,
      quest: g,
      useReducedMotion: p,
      ref: n
    }), (0, s.jsx)(c.Z, {
      expansionSpring: u,
      isExpanded: E
    })]
  })
}