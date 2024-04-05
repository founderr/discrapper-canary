"use strict";
n.r(t), n.d(t, {
  getMergedExperimentConfigs: function() {
    return r
  }
}), n("470079");
var i = n("392711");

function r(e, t, n, r) {
  var a, l;
  let u = e.getCurrentConfig(n, r),
    o = t.getCurrentConfig(n, r);
  return a = u, l = o, (0, i.mergeWith)({}, a, l, (e, t) => e || t)
}