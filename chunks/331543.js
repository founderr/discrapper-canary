"use strict";
n("854508"), n("70102");
var r = n("464510"),
  i = n("765379"),
  o = n("667769"),
  s = n("640107"),
  a = n("554741"),
  c = n("903389"),
  u = n("862440"),
  l = n("338100"),
  d = n("955006"),
  f = n("812095"),
  p = n("264871"),
  h = Object("a"),
  v = "a" !== h[0] || !(0 in h),
  g = f("String.prototype.split");
e.exports = function(e) {
  var t, n = l(this),
    f = u((v && p(n) ? g(n, "") : n).length);
  if (!c(e)) throw TypeError("Array.prototype.map callback must be a function");
  arguments.length > 1 && (t = arguments[1]);
  for (var h = r(n, f), b = 0; b < f;) {
    var m = d(b);
    if (a(n, m)) {
      var y = i(e, t, [s(n, m), b, n]);
      o(h, m, y)
    }
    b += 1
  }
  return h
}