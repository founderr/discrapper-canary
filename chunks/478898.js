"use strict";
var n, o = Object.prototype.toString,
  i = Function.prototype.toString,
  a = /^\s*(?:function)?\*/,
  u = r("149384")(),
  l = Object.getPrototypeOf,
  s = function() {
    if (!u) return !1;
    try {
      return Function("return function*() {}")()
    } catch (t) {}
  };
t.exports = function(t) {
  if ("function" != typeof t) return !1;
  if (a.test(i.call(t))) return !0;
  if (!u) return "[object GeneratorFunction]" === o.call(t);
  if (!l) return !1;
  if (void 0 === n) {
    var e = s();
    n = !!e && l(e)
  }
  return l(t) === n
}