var s = n(735250);
n(470079);
var a = n(35148),
  i = n(266685),
  l = n(874263);
t.Z = function(e) {
  let {
    expandedContentRef: t,
    expansionSpring: n,
    isExpanded: r,
    isExpansionAnimationComplete: o,
    onCtxMenuOpened: c,
    onCtxMenuClosed: d,
    onCtxMenuSelection: u,
    quest: E,
    useReducedMotion: _
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(a.Z, {
      className: l.content,
      expansionSpring: n,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: E,
      useReducedMotion: _
    }), (0, s.jsx)(i.Z, {
      className: l.content,
      onCtxMenuOpen: c,
      onCtxMenuClose: d,
      onCtxMenuSelect: u,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: E,
      useReducedMotion: _,
      ref: t
    })]
  })
}