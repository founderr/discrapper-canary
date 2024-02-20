"use strict";
var r, a = n("503486"),
  o = n("145661"),
  i = n("125359"),
  u = n("867422"),
  s = n("297293"),
  l = n("484320"),
  c = n("79807"),
  Function = a.Function;
var f = /MSIE .\./.test(s) || u && ((r = a.Bun.version.split(".")).length < 3 || "0" === r[0] && (r[1] < 3 || "3" === r[1] && "0" === r[2]));
e.exports = function(e, t) {
  var n = t ? 2 : 1;
  return f ? function(r, a) {
    var u = c(arguments.length, 1) > n,
      s = i(r) ? r : Function(r),
      f = u ? l(arguments, n) : [],
      d = u ? function() {
        o(s, this, f)
      } : s;
    return t ? e(d, a) : e(d)
  } : e
}