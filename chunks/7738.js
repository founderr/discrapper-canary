"use strict";
l.r(t), l.d(t, {
  default: function() {
    return a
  }
}), l("222007");
var n = l("773356"),
  s = l("686298");

function a(e, t, l) {
  let a = s.ApplicationStreamPresetValues[e];
  for (let s of a)
    if ((0, n.default)(e, s.resolution, s.fps, t, l)) return [s.resolution, s.fps];
  return null
}