var s = n(735250);
n(470079);
var o = n(35148),
  r = n(266685),
  a = n(874263);
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
      className: a.content,
      expansionSpring: n,
      isExpanded: l,
      isExpansionAnimationComplete: i,
      quest: p,
      useReducedMotion: x
    }), (0, s.jsx)(r.Z, {
      className: a.content,
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