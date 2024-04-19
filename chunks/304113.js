"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var l = s("735250");
s("470079");
var a = s("447452"),
  i = s("910364"),
  o = s("107889");

function r(e) {
  let {
    location: t,
    user: s,
    ...r
  } = e, {
    basicsEnabled: n
  } = (0, a.useSimplifiedProfileExperiment)({
    location: t
  });
  return !n || s.bot || s.isNonUserBot() || s.isClyde() ? (0, l.jsx)(i.default, {
    ...r,
    user: s
  }) : (0, l.jsx)(o.default, {
    ...r,
    user: s
  })
}