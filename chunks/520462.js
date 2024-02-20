"use strict";
n("70102");
var r = n("170407"),
  a = Object.prototype.toString,
  o = Object.prototype.hasOwnProperty,
  i = function(e, t, n) {
    for (var r = 0, a = e.length; r < a; r++) o.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
  },
  s = function(e, t, n) {
    for (var r = 0, a = e.length; r < a; r++) null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e)
  },
  c = function(e, t, n) {
    for (var r in e) o.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
  };
e.exports = function(e, t, n) {
  var o;
  if (!r(t)) throw TypeError("iterator must be a function");
  arguments.length >= 3 && (o = n), "[object Array]" === a.call(e) ? i(e, t, o) : "string" == typeof e ? s(e, t, o) : c(e, t, o)
}