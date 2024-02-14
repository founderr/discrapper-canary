"use strict";
var n = e("814026"),
  i = e("64980"),
  o = e("868822"),
  u = e("664144"),
  a = e("172479"),
  f = e("493399"),
  s = e("202463"),
  c = e("116180"),
  l = e("949580"),
  h = Object.assign,
  p = Object.defineProperty,
  v = i([].concat);
t.exports = !h || u(function() {
  if (n && 1 !== h({
      b: 1
    }, h(p({}, "a", {
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
  var t = {},
    r = {},
    e = Symbol("assign detection"),
    i = "abcdefghijklmnopqrst";
  return t[e] = 7, i.split("").forEach(function(t) {
    r[t] = t
  }), 7 !== h({}, t)[e] || a(h({}, r)).join("") !== i
}) ? function(t, r) {
  for (var e = c(t), i = arguments.length, u = 1, h = f.f, p = s.f; i > u;) {
    for (var d, g = l(arguments[u++]), y = h ? v(a(g), h(g)) : a(g), b = y.length, m = 0; b > m;) d = y[m++], (!n || o(p, g, d)) && (e[d] = g[d])
  }
  return e
} : h