"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var a = n("294707"),
  r = n("686298");

function i(e, t, n, i, s) {
  for (let l of r.ApplicationStreamSettingRequirements)
    if ((null == l.preset || e === l.preset) && t === l.resolution && n === l.fps && (0, a.default)(l, i, s)) return !0;
  return !1
}