"use strict";
var r = n("484784"),
  a = n("64980"),
  o = n("998270"),
  i = n("79807"),
  u = URLSearchParams,
  s = u.prototype,
  l = a(s.getAll),
  c = a(s.has),
  f = new u("a=1");
(f.has("a", 2) || !f.has("a", void 0)) && r(s, "has", function(e) {
  var t = arguments.length,
    n = t < 2 ? void 0 : arguments[1];
  if (t && void 0 === n) return c(this, e);
  var r = l(this, e);
  i(t, 1);
  for (var a = o(n), u = 0; u < r.length;)
    if (r[u++] === a) return !0;
  return !1
}, {
  enumerable: !0,
  unsafe: !0
})