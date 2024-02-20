"use strict";
var r = n("696397").charAt,
  a = n("998270"),
  o = n("515011"),
  i = n("891024"),
  u = n("766739"),
  s = "String Iterator",
  l = o.set,
  c = o.getterFor(s);
i(String, "String", function(e) {
  l(this, {
    type: s,
    string: a(e),
    index: 0
  })
}, function() {
  var e, t = c(this),
    n = t.string,
    a = t.index;
  return a >= n.length ? u(void 0, !0) : (e = r(n, a), t.index += e.length, u(e, !1))
})