"use strict";
var r = n("886639"),
  i = n("868822"),
  o = n("418855"),
  s = n("649675"),
  a = n("763589"),
  c = n("308274"),
  u = n("470984"),
  l = n("55082"),
  d = n("579697"),
  f = n("161323"),
  p = TypeError,
  h = function(e, t) {
    this.stopped = e, this.result = t
  },
  v = h.prototype;
e.exports = function(e, t, n) {
  var g, b, m, y, x, w, S, k = n && n.that,
    E = !!(n && n.AS_ENTRIES),
    _ = !!(n && n.IS_RECORD),
    M = !!(n && n.IS_ITERATOR),
    D = !!(n && n.INTERRUPTED),
    C = r(t, k),
    P = function(e) {
      return g && f(g, "normal", e), new h(!0, e)
    },
    T = function(e) {
      return E ? (o(e), D ? C(e[0], e[1], P) : C(e[0], e[1])) : D ? C(e, P) : C(e)
    };
  if (_) g = e.iterator;
  else if (M) g = e;
  else {
    if (!(b = d(e))) throw p(s(e) + " is not iterable");
    if (a(b)) {
      for (m = 0, y = c(e); y > m; m++)
        if ((x = T(e[m])) && u(v, x)) return x;
      return new h(!1)
    }
    g = l(e, b)
  }
  for (w = _ ? e.next : g.next; !(S = i(w, g)).done;) {
    try {
      x = T(S.value)
    } catch (e) {
      f(g, "throw", e)
    }
    if ("object" == typeof x && x && u(v, x)) return x
  }
  return new h(!1)
}