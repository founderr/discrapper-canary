"use strict";
var r = n("859514"),
  a = n("868822"),
  o = n("64980"),
  i = n("590455"),
  s = n("125359"),
  c = n("551544"),
  l = n("238104"),
  u = n("998270"),
  d = n("47361"),
  p = n("623105"),
  f = n("87078"),
  h = n("174669"),
  m = n("140925"),
  v = h("replace"),
  g = TypeError,
  y = o("".indexOf),
  b = o("".replace),
  x = o("".slice),
  S = Math.max,
  w = function(e, t, n) {
    return n > e.length ? -1 : "" === t ? n : y(e, t, n)
  };
r({
  target: "String",
  proto: !0
}, {
  replaceAll: function(e, t) {
    var n, r, o, h, D, C, k, P, E = i(this),
      T = 0,
      M = 0,
      R = "";
    if (!c(e)) {
      if ((n = l(e)) && !~y(u(i(p(e))), "g")) throw g("`.replaceAll` does not allow non-global regexes");
      if (r = d(e, v)) return a(r, e, E, t);
      if (m && n) return b(u(E), e, t)
    }
    for (o = u(E), h = u(e), !(D = s(t)) && (t = u(t)), k = S(1, C = h.length), T = w(o, h, 0); - 1 !== T;) P = D ? u(t(h, T, o)) : f(h, o, T, [], void 0, t), R += x(o, M, T) + P, M = T + C, T = w(o, h, T + k);
    return M < o.length && (R += x(o, M)), R
  }
})