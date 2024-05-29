"use strict";
var r = n("538315"),
  i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
  a = Object.prototype.toString,
  o = Array.prototype.concat,
  s = n("834889"),
  u = n("134533")(),
  c = function(e, t, n, r) {
    if (t in e) {
      if (!0 === r) {
        if (e[t] === n) return
      } else {
        var i;
        if (!("function" == typeof(i = r) && "[object Function]" === a.call(i)) || !r()) return
      }
    }
    u ? s(e, t, n, !0) : s(e, t, n)
  },
  l = function(e, t) {
    var n = arguments.length > 2 ? arguments[2] : {},
      a = r(t);
    i && (a = o.call(a, Object.getOwnPropertySymbols(t)));
    for (var s = 0; s < a.length; s += 1) c(e, a[s], t[a[s]], n[a[s]])
  };
l.supportsDescriptors = !!u, e.exports = l