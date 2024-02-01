"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var l = a("954016"),
  n = a("49111");

function s(e) {
  return e.type === n.ActivityTypes.STREAMING && null != e.url && l.validStreamURL.test(e.url)
}

function i(e) {
  return null != e && (Array.isArray(e) ? e.some(s) : s(e))
}