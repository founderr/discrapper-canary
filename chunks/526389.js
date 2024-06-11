"use strict";
n.r(t);
var r = Function.prototype.toString;
t.default = function(e) {
  if (null != e) {
    try {
      return r.call(e)
    } catch (e) {}
    try {
      return e + ""
    } catch (e) {}
  }
  return ""
}