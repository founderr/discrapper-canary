"use strict";
var n = e("859514"),
  i = e("503486"),
  o = e("434978"),
  u = e("16447"),
  a = e("541368").f,
  f = e("59393"),
  s = e("88052"),
  c = e("688358"),
  l = e("391358"),
  h = e("60683"),
  p = e("350142"),
  v = e("814026"),
  d = e("140925"),
  g = "DOMException",
  Error = o("Error"),
  y = o(g),
  b = function() {
    s(this, m);
    var t = arguments.length,
      r = l(t < 1 ? void 0 : arguments[0]),
      e = l(t < 2 ? void 0 : arguments[1], "Error"),
      n = new y(r, e),
      i = Error(r);
    return i.name = g, a(n, "stack", u(1, p(i.stack, 1))), c(n, this, b), n
  },
  m = b.prototype = y.prototype,
  _ = "stack" in Error(g),
  w = "stack" in new y(1, 2),
  E = y && v && Object.getOwnPropertyDescriptor(i, g),
  k = !!E && !(E.writable && E.configurable),
  A = _ && !k && !w;
n({
  global: !0,
  constructor: !0,
  forced: d || A
}, {
  DOMException: A ? b : y
});
var x = o(g),
  R = x.prototype;
if (R.constructor !== x) {
  for (var S in !d && a(R, "constructor", u(1, x)), h)
    if (f(h, S)) {
      var O = h[S],
        T = O.s;
      !f(x, T) && a(x, T, u(6, O.c))
    }
}