"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var s = n("447452"),
  l = n("331541"),
  i = n("543993");

function r(e) {
  let {
    location: t,
    ...n
  } = e, {
    updatedOnAllSurfaces: r
  } = (0, s.useSimplifiedProfileExperiment)({
    location: t
  });
  return r ? (0, a.jsx)(i.default, {
    ...n
  }) : (0, a.jsx)(l.default, {
    ...n
  })
}