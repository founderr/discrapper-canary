"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var s = l("735250");
l("470079");
var a = l("447452"),
  i = l("910364"),
  n = l("107889");

function r(e) {
  let {
    location: t,
    user: l,
    ...r
  } = e, {
    basicsEnabled: o
  } = (0, a.useSimplifiedProfileExperiment)({
    location: t
  });
  return !o || l.bot || l.isNonUserBot() || l.isClyde() ? (0, s.jsx)(i.default, {
    ...r,
    user: l
  }) : (0, s.jsx)(n.default, {
    ...r,
    user: l
  })
}