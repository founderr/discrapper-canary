"use strict";
n.r(t);
var r = n("548015"),
  i = n("74748"),
  a = n("572657"),
  o = n("318670"),
  s = n("252798"),
  u = n("396379"),
  c = r.default ? r.default.prototype : void 0,
  l = c ? c.valueOf : void 0;
t.default = function(e, t, n, r, c, d, f) {
  switch (n) {
    case "[object DataView]":
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
      e = e.buffer, t = t.buffer;
    case "[object ArrayBuffer]":
      if (e.byteLength != t.byteLength || !d(new i.default(e), new i.default(t))) break;
      return !0;
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return (0, a.default)(+e, +t);
    case "[object Error]":
      return e.name == t.name && e.message == t.message;
    case "[object RegExp]":
    case "[object String]":
      return e == t + "";
    case "[object Map]":
      var p = s.default;
    case "[object Set]":
      var h = 1 & r;
      if (p || (p = u.default), e.size != t.size && !h) break;
      var m = f.get(e);
      if (m) return m == t;
      r |= 2, f.set(e, t);
      var g = (0, o.default)(p(e), p(t), r, c, d, f);
      return f.delete(e), g;
    case "[object Symbol]":
      if (l) return l.call(e) == l.call(t)
  }
  return !1
}