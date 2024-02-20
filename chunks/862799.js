"use strict";
var r = n("814026"),
  a = n("64980"),
  o = n("868822"),
  i = n("664144"),
  u = n("172479"),
  s = n("493399"),
  l = n("202463"),
  c = n("116180"),
  f = n("949580"),
  d = Object.assign,
  p = Object.defineProperty,
  h = a([].concat);
e.exports = !d || i(function() {
  if (r && 1 !== d({
      b: 1
    }, d(p({}, "a", {
      enumerable: !0,
      get: function() {
        p(this, "b", {
          value: 3,
          enumerable: !1
        })
      }
    }), {
      b: 2
    })).b) return !0;
  var e = {},
    t = {},
    n = Symbol("assign detection"),
    a = "abcdefghijklmnopqrst";
  return e[n] = 7, a.split("").forEach(function(e) {
    t[e] = e
  }), 7 !== d({}, e)[n] || u(d({}, t)).join("") !== a
}) ? function(e, t) {
  for (var n = c(e), a = arguments.length, i = 1, d = s.f, p = l.f; a > i;) {
    for (var m, _ = f(arguments[i++]), y = d ? h(u(_), d(_)) : u(_), g = y.length, v = 0; g > v;) m = y[v++], (!r || o(p, _, m)) && (n[m] = _[m])
  }
  return n
} : d