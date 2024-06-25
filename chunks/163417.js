n.d(t, {
  Z: function() {
    return r
  }
});
var s = n(735250);
n(470079);
var i = n(145641),
  l = n(322701),
  a = n(617015);

function r(e) {
  let {
    relationshipCount: t,
    statusSections: n,
    renderRow: r,
    searchQuery: o,
    sectionFilter: c,
    useReducedMotion: u
  } = e;
  return t >= a.nG ? (0, s.jsx)(i.Z, {
    statusSections: n,
    renderRow: r,
    searchQuery: o
  }) : (0, s.jsx)(l.Z, {
    statusSections: n,
    renderRow: r,
    sectionFilter: c,
    searchQuery: o,
    useReducedMotion: u
  })
}