var s = n(735250);
n(470079);
var o = n(35148),
  a = n(266685),
  r = n(874263);
t.Z = function(e) {
  let {
    expandedContentRef: t,
    expansionSpring: n,
    isExpanded: l,
    isExpansionAnimationComplete: i,
    onCtxMenuOpened: c,
    onCtxMenuClosed: u,
    onCtxMenuSelection: d,
    quest: p,
    useReducedMotion: x
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o.Z, {
      className: r.content,
      expansionSpring: n,
      isExpanded: l,
      isExpansionAnimationComplete: i,
      quest: p,
      useReducedMotion: x
    }), (0, s.jsx)(a.Z, {
      className: r.content,
      onCtxMenuOpen: c,
      onCtxMenuClose: u,
      onCtxMenuSelect: d,
      isExpanded: l,
      isExpansionAnimationComplete: i,
      quest: p,
      useReducedMotion: x,
      ref: t
    })]
  })
}