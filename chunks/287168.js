"use strict";
var n = e("484784"),
  i = e("64980"),
  o = e("998270"),
  u = e("79807"),
  a = URLSearchParams,
  f = a.prototype,
  s = i(f.getAll),
  c = i(f.has),
  l = new a("a=1");
(l.has("a", 2) || !l.has("a", void 0)) && n(f, "has", function(t) {
  var r = arguments.length,
    e = r < 2 ? void 0 : arguments[1];
  if (r && void 0 === e) return c(this, t);
  var n = s(this, t);
  u(r, 1);
  for (var i = o(e), a = 0; a < n.length;)
    if (n[a++] === i) return !0;
  return !1
}, {
  enumerable: !0,
  unsafe: !0
})