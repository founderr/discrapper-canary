"use strict";
var n = r("638839")(),
  o = r("911718"),
  i = n && o("%Object.defineProperty%", !0);
if (i) try {
  i({}, "a", {
    value: 1
  })
} catch (t) {
  i = !1
}
var a = o("%SyntaxError%"),
  u = o("%TypeError%"),
  l = r("293471");
t.exports = function(t, e, r) {
  if (!t || "object" != typeof t && "function" != typeof t) throw new u("`obj` must be an object or a function`");
  if ("string" != typeof e && "symbol" != typeof e) throw new u("`property` must be a string or a symbol`");
  if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new u("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new u("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new u("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new u("`loose`, if provided, must be a boolean");
  var n = arguments.length > 3 ? arguments[3] : null,
    o = arguments.length > 4 ? arguments[4] : null,
    s = arguments.length > 5 ? arguments[5] : null,
    c = arguments.length > 6 && arguments[6],
    p = !!l && l(t, e);
  if (i) i(t, e, {
    configurable: null === s && p ? p.configurable : !s,
    enumerable: null === n && p ? p.enumerable : !n,
    value: r,
    writable: null === o && p ? p.writable : !o
  });
  else if (!c && (n || o || s)) throw new a("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  else t[e] = r
}