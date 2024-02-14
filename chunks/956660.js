"use strict";
var n = e("814026"),
  i = e("64980"),
  o = e("18563"),
  u = URLSearchParams.prototype,
  a = i(u.forEach);
n && !("size" in u) && o(u, "size", {
  get: function() {
    var t = 0;
    return a(this, function() {
      t++
    }), t
  },
  configurable: !0,
  enumerable: !0
})