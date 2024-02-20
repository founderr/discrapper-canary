"use strict";
r.r(t), r.d(t, {
  broadcastActiveObservations: function() {
    return a
  }
}), r("424973");
var n = r("514825"),
  i = r("261423"),
  o = r("627545"),
  s = r("572462"),
  a = function() {
    var e = 1 / 0,
      t = [];
    n.resizeObservers.forEach(function(r) {
      if (0 !== r.activeTargets.length) {
        var n = [];
        r.activeTargets.forEach(function(t) {
          var r = new i.ResizeObserverEntry(t.target),
            a = (0, o.calculateDepthForNode)(t.target);
          n.push(r), t.lastReportedSize = (0, s.calculateBoxSize)(t.target, t.observedBox), a < e && (e = a)
        }), t.push(function() {
          r.callback.call(r.observer, n, r.observer)
        }), r.activeTargets.splice(0, r.activeTargets.length)
      }
    });
    for (var r = 0; r < t.length; r++)(0, t[r])();
    return e
  }