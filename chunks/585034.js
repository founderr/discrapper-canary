"use strict";
var r = n("886639"),
  a = n("868822"),
  o = n("418855"),
  i = n("649675"),
  s = n("763589"),
  c = n("308274"),
  l = n("470984"),
  u = n("55082"),
  d = n("579697"),
  p = n("161323"),
  f = TypeError,
  h = function(e, t) {
    this.stopped = e, this.result = t
  },
  m = h.prototype;
e.exports = function(e, t, n) {
  var v, g, y, b, x, S, w, D = n && n.that,
    C = !!(n && n.AS_ENTRIES),
    k = !!(n && n.IS_RECORD),
    P = !!(n && n.IS_ITERATOR),
    E = !!(n && n.INTERRUPTED),
    T = r(t, D),
    M = function(e) {
      return v && p(v, "normal", e), new h(!0, e)
    },
    R = function(e) {
      return C ? (o(e), E ? T(e[0], e[1], M) : T(e[0], e[1])) : E ? T(e, M) : T(e)
    };
  if (k) v = e.iterator;
  else if (P) v = e;
  else {
    if (!(g = d(e))) throw f(i(e) + " is not iterable");
    if (s(g)) {
      for (y = 0, b = c(e); b > y; y++)
        if ((x = R(e[y])) && l(m, x)) return x;
      return new h(!1)
    }
    v = u(e, g)
  }
  for (S = k ? e.next : v.next; !(w = a(S, v)).done;) {
    try {
      x = R(w.value)
    } catch (e) {
      p(v, "throw", e)
    }
    if ("object" == typeof x && x && l(m, x)) return x
  }
  return new h(!1)
}