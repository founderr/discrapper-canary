"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var a = l("954016"),
  n = l("49111");

function s(e) {
  return e.type === n.ActivityTypes.STREAMING && null != e.url && a.validStreamURL.test(e.url)
}

function i(e) {
  return null != e && (Array.isArray(e) ? e.some(s) : s(e))
}