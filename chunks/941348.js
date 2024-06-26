var o = n(735250),
  s = n(470079),
  r = n(308069),
  a = n(613087),
  i = n(457153),
  l = n(254197),
  c = n(321025),
  d = n(11281);
t.Z = function(e) {
  var t;
  let {
    expandedContentRef: n,
    expansionSpring: u,
    isExpanded: p,
    isExpansionAnimationComplete: m,
    onCtxMenuOpened: x,
    onCtxMenuClosed: g,
    onCtxMenuSelection: C,
    quest: f,
    useReducedMotion: h
  } = e, _ = s.useRef(null), E = (null === (t = f.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  return (0, o.jsxs)(a.p, {
    expandedContentRef: n,
    collapsedContentRef: _,
    expansionSpring: u,
    isExpansionAnimationComplete: m,
    children: [!E && (0, o.jsx)(r.Z, {
      quest: f,
      expansionSpring: u,
      useReducedMotion: h,
      isExpanded: p,
      isExpansionAnimationComplete: m,
      onCtxMenuOpen: x,
      onCtxMenuClose: g,
      onCtxMenuSelect: C
    }), (0, o.jsx)(i.Z, {
      ref: _,
      className: d.content,
      expansionSpring: u,
      isExpanded: p,
      isExpansionAnimationComplete: m,
      quest: f,
      useReducedMotion: h
    }), (0, o.jsx)(l.Z, {
      expansionSpring: u,
      className: d.content,
      onCtxMenuOpen: x,
      onCtxMenuClose: g,
      onCtxMenuSelect: C,
      isExpanded: p,
      isExpansionAnimationComplete: m,
      quest: f,
      useReducedMotion: h,
      ref: n
    }), (0, o.jsx)(c.Z, {
      expansionSpring: u,
      isExpanded: p
    })]
  })
}