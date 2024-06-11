"use strict";
n.r(t);
var r = Date.now;
t.default = function(e) {
  var t = 0,
    n = 0;
  return function() {
    var i = r(),
      a = 16 - (i - n);
    if (n = i, a > 0) {
      if (++t >= 800) return arguments[0]
    } else t = 0;
    return e.apply(void 0, arguments)
  }
}