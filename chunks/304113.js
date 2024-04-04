"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var l = s("447452"),
  i = s("910364"),
  r = s("107889");

function o(e) {
  let {
    location: t,
    ...s
  } = e, {
    basicsEnabled: o
  } = (0, l.useSimplifiedProfileExperiment)({
    location: t
  });
  return o ? (0, a.jsx)(r.default, {
    ...s
  }) : (0, a.jsx)(i.default, {
    ...s
  })
}