"use strict";
var r = n("37549")("%TypeError%"),
  i = n("504187"),
  o = n("14328"),
  s = n("737891"),
  a = n("971043"),
  c = n("701222"),
  u = n("604050"),
  l = n("769142"),
  d = n("300344"),
  f = n("6943"),
  p = n("865435");
e.exports = function(e, t, n, h, v) {
  var g, b, m = p(e);
  if ("Undefined" !== m && "Object" !== m) throw new r("Assertion failed: O must be undefined or an Object");
  if (!d(t)) throw new r("Assertion failed: P must be a Property Key");
  if ("Boolean" !== p(n)) throw new r("Assertion failed: extensible must be a Boolean");
  if (!s({
      Type: p,
      IsDataDescriptor: u,
      IsAccessorDescriptor: c
    }, h)) throw new r("Assertion failed: Desc must be a Property Descriptor");
  if ("Undefined" !== p(v) && !s({
      Type: p,
      IsDataDescriptor: u,
      IsAccessorDescriptor: c
    }, v)) throw new r("Assertion failed: current must be a Property Descriptor, or undefined");
  if ("Undefined" === p(v)) return !!n && ("Undefined" === m || (c(h) ? i(u, f, a, e, t, h) : i(u, f, a, e, t, {
    "[[Configurable]]": !!h["[[Configurable]]"],
    "[[Enumerable]]": !!h["[[Enumerable]]"],
    "[[Value]]": h["[[Value]]"],
    "[[Writable]]": !!h["[[Writable]]"]
  })));
  if (!o({
      IsAccessorDescriptor: c,
      IsDataDescriptor: u
    }, v)) throw new r("`current`, when present, must be a fully populated and valid Property Descriptor");
  if (!v["[[Configurable]]"]) {
    if ("[[Configurable]]" in h && h["[[Configurable]]"] || "[[Enumerable]]" in h && !f(h["[[Enumerable]]"], v["[[Enumerable]]"]) || !l(h) && !f(c(h), c(v))) return !1;
    if (c(v)) {
      if ("[[Get]]" in h && !f(h["[[Get]]"], v["[[Get]]"]) || "[[Set]]" in h && !f(h["[[Set]]"], v["[[Set]]"])) return !1
    } else if (!v["[[Writable]]"] && ("[[Writable]]" in h && h["[[Writable]]"] || "[[Value]]" in h && !f(h["[[Value]]"], v["[[Value]]"]))) return !1
  }
  if ("Undefined" !== m) return u(v) && c(h) ? (g = ("[[Configurable]]" in h ? h : v)["[[Configurable]]"], i(u, f, a, e, t, {
    "[[Configurable]]": !!g,
    "[[Enumerable]]": !!(b = ("[[Enumerable]]" in h ? h : v)["[[Enumerable]]"]),
    "[[Get]]": ("[[Get]]" in h ? h : v)["[[Get]]"],
    "[[Set]]": ("[[Set]]" in h ? h : v)["[[Set]]"]
  })) : c(v) && u(h) ? (g = ("[[Configurable]]" in h ? h : v)["[[Configurable]]"], i(u, f, a, e, t, {
    "[[Configurable]]": !!g,
    "[[Enumerable]]": !!(b = ("[[Enumerable]]" in h ? h : v)["[[Enumerable]]"]),
    "[[Value]]": ("[[Value]]" in h ? h : v)["[[Value]]"],
    "[[Writable]]": !!("[[Writable]]" in h ? h : v)["[[Writable]]"]
  })) : i(u, f, a, e, t, h);
  return !0
}