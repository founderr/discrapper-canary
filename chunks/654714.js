"use strict";
var n = e("484784"),
  i = e("64980"),
  o = e("998270"),
  u = e("79807"),
  a = URLSearchParams,
  f = a.prototype,
  s = i(f.append),
  c = i(f.delete),
  l = i(f.forEach),
  h = i([].push),
  p = new a("a=1&a=2&b=3");
p.delete("a", 1), p.delete("b", void 0), p + "" != "a=2" && n(f, "delete", function(t) {
  var r, e = arguments.length,
    n = e < 2 ? void 0 : arguments[1];
  if (e && void 0 === n) return c(this, t);
  var i = [];
  l(this, function(t, r) {
    h(i, {
      key: r,
      value: t
    })
  }), u(e, 1);
  for (var a = o(t), f = o(n), p = 0, v = 0, d = !1, g = i.length; p < g;) r = i[p++], d || r.key === a ? (d = !0, c(this, r.key)) : v++;
  for (; v < g;) !((r = i[v++]).key === a && r.value === f) && s(this, r.key, r.value)
}, {
  enumerable: !0,
  unsafe: !0
})