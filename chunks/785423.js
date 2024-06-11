"use strict";
n.r(t);
var r = /\s/;
t.default = function(e) {
  for (var t = e.length; t-- && r.test(e.charAt(t)););
  return t
}