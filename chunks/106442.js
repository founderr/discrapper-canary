"use strict";
var n = e("859514"),
  i = e("64980"),
  o = e("590455"),
  u = e("969708"),
  a = e("998270"),
  f = e("664144"),
  s = i("".charAt);
n({
  target: "String",
  proto: !0,
  forced: f(function() {
    return "\uD842" !== "\uD842\uDFB7".at(-2)
  })
}, {
  at: function(t) {
    var r = a(o(this)),
      e = r.length,
      n = u(t),
      i = n >= 0 ? n : e + n;
    return i < 0 || i >= e ? void 0 : s(r, i)
  }
})