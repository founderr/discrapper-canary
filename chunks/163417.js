"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var s = n("145641"),
  i = n("322701"),
  l = n("617015");

function r(e) {
  let {
    relationshipCount: t,
    statusSections: n,
    renderRow: r,
    searchQuery: o,
    sectionFilter: u,
    useReducedMotion: d
  } = e;
  return t >= l.RELATIONSHIP_COUNT_ANIMATION_THRESHOLD ? (0, a.jsx)(s.default, {
    statusSections: n,
    renderRow: r,
    searchQuery: o
  }) : (0, a.jsx)(i.default, {
    statusSections: n,
    renderRow: r,
    sectionFilter: u,
    searchQuery: o,
    useReducedMotion: d
  })
}