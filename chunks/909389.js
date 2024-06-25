var o = n(735250);
n(470079);
var s = n(35148),
  r = n(266685),
  a = n(874263);
t.Z = function(e) {
  let {
    expandedContentRef: t,
    expansionSpring: n,
    isExpanded: i,
    isExpansionAnimationComplete: l,
    onCtxMenuOpened: c,
    onCtxMenuClosed: d,
    onCtxMenuSelection: u,
    quest: p,
    useReducedMotion: m
  } = e;
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(s.Z, {
      className: a.content,
      expansionSpring: n,
      isExpanded: i,
      isExpansionAnimationComplete: l,
      quest: p,
      useReducedMotion: m
    }), (0, o.jsx)(r.Z, {
      className: a.content,
      onCtxMenuOpen: c,
      onCtxMenuClose: d,
      onCtxMenuSelect: u,
      isExpanded: i,
      isExpansionAnimationComplete: l,
      quest: p,
      useReducedMotion: m,
      ref: t
    })]
  })
}