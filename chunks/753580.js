"use strict";
var r = n("886639"),
  a = n("868822"),
  o = n("116180"),
  i = n("579813"),
  u = n("763589"),
  s = n("904520"),
  l = n("308274"),
  c = n("790199"),
  f = n("55082"),
  d = n("579697"),
  p = Array;
e.exports = function(e) {
  var t, n, h, m, _, y, g = o(e),
    v = s(this),
    b = arguments.length,
    M = b > 1 ? arguments[1] : void 0,
    w = void 0 !== M;
  w && (M = r(M, b > 2 ? arguments[2] : void 0));
  var k = d(g),
    L = 0;
  if (k && !(this === p && u(k)))
    for (_ = (m = f(g, k)).next, n = v ? new this : []; !(h = a(_, m)).done; L++) y = w ? i(m, M, [h.value, L], !0) : h.value, c(n, L, y);
  else
    for (t = l(g), n = v ? new this(t) : p(t); t > L; L++) y = w ? M(g[L], L) : g[L], c(n, L, y);
  return n.length = L, n
}