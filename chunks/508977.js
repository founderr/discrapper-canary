"use strict";
n.r(t);
var r = n("854441"),
  i = n("917430");
t.default = function(e) {
  for (var t = (0, i.default)(e), n = t.length; n--;) {
    var a = t[n],
      o = e[a];
    t[n] = [a, o, (0, r.default)(o)]
  }
  return t
}