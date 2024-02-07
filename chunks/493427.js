"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = function() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = function e(t) {
    var n, r, o = "";
    if ("string" == typeof t || "number" == typeof t) o += t;
    else if ("object" == typeof t) {
      if (Array.isArray(t)) {
        var a = t.length;
        for (n = 0; n < a; n++) t[n] && (r = e(t[n])) && (o && (o += " "), o += r)
      } else
        for (r in t) t[r] && (o && (o += " "), o += r)
    }
    return o
  }(e)) && (r && (r += " "), r += t);
  return r
}