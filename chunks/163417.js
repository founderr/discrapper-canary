n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(735250);
n(470079);
var s = n(145641),
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
  return t >= a.nG ? (0, i.jsx)(s.Z, {
    statusSections: n,
    renderRow: r,
    searchQuery: o
  }) : (0, i.jsx)(l.Z, {
    statusSections: n,
    renderRow: r,
    sectionFilter: c,
    searchQuery: o,
    useReducedMotion: u
  })
}