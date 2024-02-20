"use strict";
var r = n("484784"),
  a = n("64980"),
  o = n("998270"),
  i = n("79807"),
  u = URLSearchParams,
  s = u.prototype,
  l = a(s.append),
  c = a(s.delete),
  f = a(s.forEach),
  d = a([].push),
  p = new u("a=1&a=2&b=3");
p.delete("a", 1), p.delete("b", void 0), p + "" != "a=2" && r(s, "delete", function(e) {
  var t, n = arguments.length,
    r = n < 2 ? void 0 : arguments[1];
  if (n && void 0 === r) return c(this, e);
  var a = [];
  f(this, function(e, t) {
    d(a, {
      key: t,
      value: e
    })
  }), i(n, 1);
  for (var u = o(e), s = o(r), p = 0, h = 0, m = !1, _ = a.length; p < _;) t = a[p++], m || t.key === u ? (m = !0, c(this, t.key)) : h++;
  for (; h < _;) !((t = a[h++]).key === u && t.value === s) && l(this, t.key, t.value)
}, {
  enumerable: !0,
  unsafe: !0
})