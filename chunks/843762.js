"use strict";
var r = n("859514"),
  a = n("116180"),
  o = n("308274"),
  i = n("109024"),
  u = n("53489"),
  s = n("359529"),
  l = 1 !== [].unshift(0);
r({
  target: "Array",
  proto: !0,
  arity: 1,
  forced: l || ! function() {
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).unshift()
    } catch (e) {
      return e instanceof TypeError
    }
  }()
}, {
  unshift: function(e) {
    var t = a(this),
      n = o(t),
      r = arguments.length;
    if (r) {
      s(n + r);
      for (var l = n; l--;) {
        var c = l + r;
        l in t ? t[c] = t[l] : u(t, c)
      }
      for (var f = 0; f < r; f++) t[f] = arguments[f]
    }
    return i(t, n + r)
  }
})