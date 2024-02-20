"use strict";
var n = r("520462"),
  o = r("745378"),
  i = r("214401"),
  a = r("314970"),
  u = r("293471"),
  l = a("Object.prototype.toString"),
  s = r("149384")(),
  c = "undefined" == typeof globalThis ? r.g : globalThis,
  p = o(),
  f = a("String.prototype.slice"),
  y = Object.getPrototypeOf,
  h = a("Array.prototype.indexOf", !0) || function(t, e) {
    for (var r = 0; r < t.length; r += 1)
      if (t[r] === e) return r;
    return -1
  },
  d = {
    __proto__: null
  };
s && u && y ? n(p, function(t) {
  var e = new c[t];
  if (Symbol.toStringTag in e) {
    var r = y(e),
      n = u(r, Symbol.toStringTag);
    !n && (n = u(y(r), Symbol.toStringTag)), d["$" + t] = i(n.get)
  }
}) : n(p, function(t) {
  var e = new c[t],
    r = e.slice || e.set;
  r && (d["$" + t] = i(r))
});
var b = function(t) {
    var e = !1;
    return n(d, function(r, n) {
      if (!e) try {
        "$" + r(t) === n && (e = f(n, 1))
      } catch (t) {}
    }), e
  },
  g = function(t) {
    var e = !1;
    return n(d, function(r, n) {
      if (!e) try {
        r(t), e = f(n, 1)
      } catch (t) {}
    }), e
  };
t.exports = function(t) {
  if (!t || "object" != typeof t) return !1;
  if (!s) {
    var e = f(l(t), 8, -1);
    return h(p, e) > -1 ? e : "Object" === e && g(t)
  }
  return u ? b(t) : null
}