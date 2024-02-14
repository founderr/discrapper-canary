"use strict";
var n = e("886639"),
  i = e("868822"),
  o = e("116180"),
  u = e("579813"),
  a = e("763589"),
  f = e("904520"),
  s = e("308274"),
  c = e("790199"),
  l = e("55082"),
  h = e("579697"),
  p = Array;
t.exports = function(t) {
  var r, e, v, d, g, y, b = o(t),
    m = f(this),
    _ = arguments.length,
    w = _ > 1 ? arguments[1] : void 0,
    E = void 0 !== w;
  E && (w = n(w, _ > 2 ? arguments[2] : void 0));
  var k = h(b),
    A = 0;
  if (k && !(this === p && a(k)))
    for (g = (d = l(b, k)).next, e = m ? new this : []; !(v = i(g, d)).done; A++) y = E ? u(d, w, [v.value, A], !0) : v.value, c(e, A, y);
  else
    for (r = s(b), e = m ? new this(r) : p(r); r > A; A++) y = E ? w(b[A], A) : b[A], c(e, A, y);
  return e.length = A, e
}