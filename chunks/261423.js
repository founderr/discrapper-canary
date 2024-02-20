"use strict";
r.r(t), r.d(t, {
  ResizeObserverEntry: function() {
    return ResizeObserverEntry
  }
});
var n = r("572462"),
  ResizeObserverEntry = function(e) {
    var t = (0, n.calculateBoxSizes)(e);
    this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = [t.borderBoxSize], this.contentBoxSize = [t.contentBoxSize], this.devicePixelContentBoxSize = [t.devicePixelContentBoxSize]
  }