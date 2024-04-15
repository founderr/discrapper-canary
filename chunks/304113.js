"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var l = s("735250");
s("470079");
var a = s("447452"),
  i = s("910364"),
  n = s("107889");

function o(e) {
  let {
    location: t,
    ...s
  } = e, {
    basicsEnabled: o
  } = (0, a.useSimplifiedProfileExperiment)({
    location: t
  });
  return o ? (0, l.jsx)(n.default, {
    ...s
  }) : (0, l.jsx)(i.default, {
    ...s
  })
}