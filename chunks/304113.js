"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var l = s("735250");
s("470079");
var a = s("447452"),
  i = s("910364"),
  r = s("107889");

function n(e) {
  let {
    location: t,
    user: s,
    ...n
  } = e, {
    basicsEnabled: o
  } = (0, a.useSimplifiedProfileExperiment)({
    location: t
  });
  return !o || s.bot || s.isNonUserBot() || s.isClyde() ? (0, l.jsx)(i.default, {
    ...n,
    user: s
  }) : (0, l.jsx)(r.default, {
    ...n,
    user: s
  })
}