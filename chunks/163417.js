"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("735250");
a("470079");
var s = a("145641"),
  l = a("322701"),
  i = a("617015");

function r(e) {
  let {
    relationshipCount: t,
    statusSections: a,
    renderRow: r,
    searchQuery: o,
    sectionFilter: u,
    useReducedMotion: d
  } = e;
  return t >= i.RELATIONSHIP_COUNT_ANIMATION_THRESHOLD ? (0, n.jsx)(s.default, {
    statusSections: a,
    renderRow: r,
    searchQuery: o
  }) : (0, n.jsx)(l.default, {
    statusSections: a,
    renderRow: r,
    sectionFilter: u,
    searchQuery: o,
    useReducedMotion: d
  })
}