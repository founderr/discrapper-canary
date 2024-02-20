"use strict";
var r = n("859514"),
  a = n("503486"),
  o = n("434978"),
  i = n("16447"),
  u = n("541368").f,
  s = n("59393"),
  l = n("88052"),
  c = n("688358"),
  f = n("391358"),
  d = n("60683"),
  p = n("350142"),
  h = n("814026"),
  m = n("140925"),
  _ = "DOMException",
  Error = o("Error"),
  y = o(_),
  g = function() {
    l(this, v);
    var e = arguments.length,
      t = f(e < 1 ? void 0 : arguments[0]),
      n = f(e < 2 ? void 0 : arguments[1], "Error"),
      r = new y(t, n),
      a = Error(t);
    return a.name = _, u(r, "stack", i(1, p(a.stack, 1))), c(r, this, g), r
  },
  v = g.prototype = y.prototype,
  b = "stack" in Error(_),
  M = "stack" in new y(1, 2),
  w = y && h && Object.getOwnPropertyDescriptor(a, _),
  k = !!w && !(w.writable && w.configurable),
  L = b && !k && !M;
r({
  global: !0,
  constructor: !0,
  forced: m || L
}, {
  DOMException: L ? g : y
});
var D = o(_),
  S = D.prototype;
if (S.constructor !== D) {
  for (var T in !m && u(S, "constructor", i(1, D)), d)
    if (s(d, T)) {
      var Y = d[T],
        x = Y.s;
      !s(D, x) && u(D, x, i(6, Y.c))
    }
}