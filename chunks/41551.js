"use strict";
r.r(t), r.d(t, {
  queueResizeObserver: function() {
    return i
  }
});
var n = r("455369"),
  i = function(e) {
    (0, n.queueMicroTask)(function() {
      requestAnimationFrame(e)
    })
  }