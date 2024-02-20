"use strict";
var n = r("911718")("%Object.defineProperty%", !0),
  o = function() {
    if (n) try {
      return n({}, "a", {
        value: 1
      }), !0
    } catch (t) {}
    return !1
  };
o.hasArrayLengthDefineBug = function() {
  if (!o()) return null;
  try {
    return 1 !== n([], "length", {
      value: 1
    }).length
  } catch (t) {
    return !0
  }
}, t.exports = o