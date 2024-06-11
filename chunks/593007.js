"use strict";
n.r(t);
var r = n("176338"),
  i = n("675717");
t.default = function(e) {
  if (!(0, i.default)(e)) return !1;
  var t = (0, r.default)(e);
  return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
}