"use strict";
var r = n("503486"),
  a = n("814026"),
  o = n("18563"),
  i = n("383252"),
  u = n("664144"),
  RegExp = r.RegExp,
  s = RegExp.prototype;
a && u(function() {
  var e = !0;
  try {
    RegExp(".", "d")
  } catch (t) {
    e = !1
  }
  var t = {},
    n = "",
    r = e ? "dgimsy" : "gimsy",
    a = function(e, r) {
      Object.defineProperty(t, e, {
        get: function() {
          return n += r, !0
        }
      })
    },
    o = {
      dotAll: "s",
      global: "g",
      ignoreCase: "i",
      multiline: "m",
      sticky: "y"
    };
  for (var i in e && (o.hasIndices = "d"), o) a(i, o[i]);
  return Object.getOwnPropertyDescriptor(s, "flags").get.call(t) !== r || n !== r
}) && o(s, "flags", {
  configurable: !0,
  get: i
})