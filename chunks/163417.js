n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(145641),
    l = n(322701),
    a = n(617015);
function o(e) {
    let { relationshipCount: t, statusSections: n, renderRow: o, searchQuery: s, sectionFilter: c, useReducedMotion: d, footer: u } = e;
    return t >= a.nG
        ? (0, i.jsx)(r.Z, {
              statusSections: n,
              renderRow: o,
              searchQuery: s,
              footer: u
          })
        : (0, i.jsx)(l.Z, {
              statusSections: n,
              renderRow: o,
              sectionFilter: c,
              searchQuery: s,
              useReducedMotion: d,
              footer: u
          });
}
