"use strict";
var n = e("696397").charAt,
  i = e("998270"),
  o = e("515011"),
  u = e("891024"),
  a = e("766739"),
  f = "String Iterator",
  s = o.set,
  c = o.getterFor(f);
u(String, "String", function(t) {
  s(this, {
    type: f,
    string: i(t),
    index: 0
  })
}, function() {
  var t, r = c(this),
    e = r.string,
    i = r.index;
  return i >= e.length ? a(void 0, !0) : (t = n(e, i), r.index += t.length, a(t, !1))
})