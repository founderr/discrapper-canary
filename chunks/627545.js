"use strict";
r.r(t), r.d(t, {
  calculateDepthForNode: function() {
    return i
  }
});
var n = r("925691"),
  i = function(e) {
    if ((0, n.isHidden)(e)) return 1 / 0;
    for (var t = 0, r = e.parentNode; r;) t += 1, r = r.parentNode;
    return t
  }