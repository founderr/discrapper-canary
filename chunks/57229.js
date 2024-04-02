"use strict";
e.exports = function() {
  var e = {},
    t = {};
  return e.on = function(e, r) {
    var n = {
      name: e,
      handler: r
    };
    return t[e] = t[e] || [], t[e].unshift(n), n
  }, e.off = function(e) {
    var r = t[e.name].indexOf(e); - 1 !== r && t[e.name].splice(r, 1)
  }, e.trigger = function(e, r) {
    var n, o = t[e];
    if (o)
      for (n = o.length; n--;) o[n].handler(r)
  }, e
}