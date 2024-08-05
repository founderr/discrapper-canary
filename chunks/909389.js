var s = n(735250);
n(470079);
var o = n(35148),
  a = n(266685),
  r = n(432237);
t.Z = function(e) {
  let {
collapsedHeight: t,
expandedContentRef: n,
expansionSpring: l,
isExpanded: i,
isExpansionAnimationComplete: c,
onCtxMenuOpened: d,
onCtxMenuClosed: u,
onCtxMenuSelection: p,
quest: m,
useReducedMotion: x
  } = e;
  return (0, s.jsx)(a.Z, {
expansionSpring: l,
className: r.content,
collapsedHeight: t,
onCtxMenuOpen: d,
onCtxMenuClose: u,
onCtxMenuSelect: p,
isExpanded: i,
isExpansionAnimationComplete: c,
quest: m,
useReducedMotion: x,
ref: n,
children: (0, s.jsx)(o.Z, {
  className: r.content,
  expansionSpring: l,
  isExpanded: i,
  isExpansionAnimationComplete: c,
  quest: m,
  useReducedMotion: x
})
  });
};