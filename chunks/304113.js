"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var s = l("735250");
l("470079");
var i = l("447452"),
  a = l("877485"),
  n = l("910364"),
  o = l("107889");

function r(e) {
  let {
    location: t,
    user: l,
    ...r
  } = e, {
    basicsEnabled: u
  } = (0, i.useSimplifiedProfileExperiment)({
    location: t
  }), {
    originalFriendingEnabled: d,
    improvedFriendingEnabled: c
  } = (0, a.useSimplifiedProfileFriendingExperiment)({
    location: t
  });
  return (u || d || c) && !l.bot && !l.isNonUserBot() && !l.isClyde() ? (0, s.jsx)(o.default, {
    ...r,
    user: l
  }) : (0, s.jsx)(n.default, {
    ...r,
    user: l
  })
}