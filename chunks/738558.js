"use strict";
r.r(t), r.d(t, {
  process: function() {
    return u
  }
});
var n = r("885376"),
  i = r("896874"),
  o = r("341455"),
  s = r("47837"),
  a = r("819839"),
  u = function() {
    var e = 0;
    for ((0, a.gatherActiveObservationsAtDepth)(e);
      (0, n.hasActiveObservations)();) e = (0, s.broadcastActiveObservations)(), (0, a.gatherActiveObservationsAtDepth)(e);
    return (0, i.hasSkippedObservations)() && (0, o.deliverResizeLoopError)(), e > 0
  }