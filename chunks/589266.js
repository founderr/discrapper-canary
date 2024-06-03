"use strict";
l.r(a), l.d(a, {
  default: function() {
    return o
  }
});
var t = l("735250");
l("470079");
var i = l("447452"),
  n = l("962746"),
  r = l("25373");

function o(e) {
  let {
    location: a,
    ...l
  } = e, {
    updatedOnAllSurfaces: o
  } = (0, i.useSimplifiedProfileExperiment)({
    location: a
  });
  return o ? (0, t.jsx)(r.default, {
    ...l
  }) : (0, t.jsx)(n.default, {
    ...l
  })
}