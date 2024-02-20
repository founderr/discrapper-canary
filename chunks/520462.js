"use strict";
r("70102");
var n = r("170407"),
  o = Object.prototype.toString,
  i = Object.prototype.hasOwnProperty,
  a = function(t, e, r) {
    for (var n = 0, o = t.length; n < o; n++) i.call(t, n) && (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t))
  },
  u = function(t, e, r) {
    for (var n = 0, o = t.length; n < o; n++) null == r ? e(t.charAt(n), n, t) : e.call(r, t.charAt(n), n, t)
  },
  l = function(t, e, r) {
    for (var n in t) i.call(t, n) && (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t))
  };
t.exports = function(t, e, r) {
  var i;
  if (!n(e)) throw TypeError("iterator must be a function");
  arguments.length >= 3 && (i = r), "[object Array]" === o.call(t) ? a(t, e, i) : "string" == typeof t ? u(t, e, i) : l(t, e, i)
}