"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
}), l("47120");
var a = l("451467"),
  n = l("37113");

function s(e, t, l) {
  for (let s of n.ApplicationStreamPresetValues[e])
    if ((0, a.default)(e, s.resolution, s.fps, t, l)) return [s.resolution, s.fps];
  return null
}