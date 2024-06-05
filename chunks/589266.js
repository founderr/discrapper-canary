"use strict";
l.r(a), l.d(a, {
  default: function() {
    return s
  }
});
var t = l("735250");
l("470079");
var i = l("447452"),
  r = l("962746"),
  n = l("25373");

function s(e) {
  let {
    location: a,
    ...l
  } = e, {
    updatedOnAllSurfaces: s
  } = (0, i.useSimplifiedProfileExperiment)({
    location: a
  });
  return s ? (0, t.jsx)(n.default, {
    ...l
  }) : (0, t.jsx)(r.default, {
    ...l
  })
}