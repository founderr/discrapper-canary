"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var n = a("954016"),
  l = a("49111");

function s(e) {
  return e.type === l.ActivityTypes.STREAMING && null != e.url && n.validStreamURL.test(e.url)
}

function i(e) {
  return null != e && (Array.isArray(e) ? e.some(s) : s(e))
}