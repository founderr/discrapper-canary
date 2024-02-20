"use strict";
var r = n("727204"),
  a = n("116180"),
  o = n("949580"),
  i = n("308274"),
  u = TypeError,
  s = function(e) {
    return function(t, n, s, l) {
      r(n);
      var c = a(t),
        f = o(c),
        d = i(c),
        p = e ? d - 1 : 0,
        h = e ? -1 : 1;
      if (s < 2)
        for (;;) {
          if (p in f) {
            l = f[p], p += h;
            break
          }
          if (p += h, e ? p < 0 : d <= p) throw u("Reduce of empty array with no initial value")
        }
      for (; e ? p >= 0 : d > p; p += h) p in f && (l = n(l, f[p], p, c));
      return l
    }
  };
e.exports = {
  left: s(!1),
  right: s(!0)
}