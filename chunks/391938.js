"use strict";
r("222007"), t.exports = function() {
  if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
  if ("symbol" == typeof Symbol.iterator) return !0;
  var t = {},
    e = Symbol("test"),
    r = Object(e);
  if ("string" == typeof e || "[object Symbol]" !== Object.prototype.toString.call(e) || "[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
  for (e in t[e] = 42, t) return !1;
  if ("function" == typeof Object.keys && 0 !== Object.keys(t).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
  var n = Object.getOwnPropertySymbols(t);
  if (1 !== n.length || n[0] !== e || !Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
  if ("function" == typeof Object.getOwnPropertyDescriptor) {
    var o = Object.getOwnPropertyDescriptor(t, e);
    if (42 !== o.value || !0 !== o.enumerable) return !1
  }
  return !0
}