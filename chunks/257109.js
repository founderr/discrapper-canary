"use strict";
n.r(t);
var r = n("467360"),
  i = n("483266"),
  a = n("862195"),
  o = n("24002"),
  s = n("178683"),
  u = n("176338"),
  c = n("526389"),
  l = "[object Map]",
  d = "[object Promise]",
  f = "[object Set]",
  p = "[object WeakMap]",
  h = "[object DataView]",
  m = (0, c.default)(r.default),
  g = (0, c.default)(i.default),
  _ = (0, c.default)(a.default),
  b = (0, c.default)(o.default),
  v = (0, c.default)(s.default),
  y = u.default;
(r.default && y(new r.default(new ArrayBuffer(1))) != h || i.default && y(new i.default) != l || a.default && y(a.default.resolve()) != d || o.default && y(new o.default) != f || s.default && y(new s.default) != p) && (y = function(e) {
  var t = (0, u.default)(e),
    n = "[object Object]" == t ? e.constructor : void 0,
    r = n ? (0, c.default)(n) : "";
  if (r) switch (r) {
    case m:
      return h;
    case g:
      return l;
    case _:
      return d;
    case b:
      return f;
    case v:
      return p
  }
  return t
}), t.default = y