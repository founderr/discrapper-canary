"use strict";
t.r(a), t.d(a, {
  default: function() {
    return s
  }
});
var l = t("735250");
t("470079");
var i = t("447452"),
  r = t("962746"),
  n = t("25373");

function s(e) {
  let {
    location: a,
    ...t
  } = e, {
    updatedOnAllSurfaces: s
  } = (0, i.useSimplifiedProfileExperiment)({
    location: a
  });
  return s ? (0, l.jsx)(n.default, {
    ...t
  }) : (0, l.jsx)(r.default, {
    ...t
  })
}