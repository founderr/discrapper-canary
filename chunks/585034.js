"use strict";
var n = r("886639"),
  o = r("868822"),
  i = r("418855"),
  a = r("649675"),
  u = r("763589"),
  l = r("308274"),
  s = r("470984"),
  c = r("55082"),
  p = r("579697"),
  f = r("161323"),
  y = TypeError,
  h = function(t, e) {
    this.stopped = t, this.result = e
  },
  d = h.prototype;
t.exports = function(t, e, r) {
  var b, g, v, m, S, x, A, w = r && r.that,
    O = !!(r && r.AS_ENTRIES),
    P = !!(r && r.IS_RECORD),
    j = !!(r && r.IS_ITERATOR),
    E = !!(r && r.INTERRUPTED),
    k = n(e, w),
    I = function(t) {
      return b && f(b, "normal", t), new h(!0, t)
    },
    M = function(t) {
      return O ? (i(t), E ? k(t[0], t[1], I) : k(t[0], t[1])) : E ? k(t, I) : k(t)
    };
  if (P) b = t.iterator;
  else if (j) b = t;
  else {
    if (!(g = p(t))) throw y(a(t) + " is not iterable");
    if (u(g)) {
      for (v = 0, m = l(t); m > v; v++)
        if ((S = M(t[v])) && s(d, S)) return S;
      return new h(!1)
    }
    b = c(t, g)
  }
  for (x = P ? t.next : b.next; !(A = o(x, b)).done;) {
    try {
      S = M(A.value)
    } catch (t) {
      f(b, "throw", t)
    }
    if ("object" == typeof S && S && s(d, S)) return S
  }
  return new h(!1)
}