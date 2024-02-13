"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
}), l("222007");
var a = l("773356"),
  n = l("686298");

function s(e, t, l) {
  let s = n.ApplicationStreamPresetValues[e];
  for (let n of s)
    if ((0, a.default)(e, n.resolution, n.fps, t, l)) return [n.resolution, n.fps];
  return null
}