"use strict";
r.r(t), r.d(t, {
  hasSkippedObservations: function() {
    return i
  }
});
var n = r("514825"),
  i = function() {
    return n.resizeObservers.some(function(e) {
      return e.skippedTargets.length > 0
    })
  }