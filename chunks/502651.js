"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("954016"),
  a = n("49111");

function s(e) {
  return e.type === a.ActivityTypes.STREAMING && null != e.url && l.validStreamURL.test(e.url)
}

function i(e) {
  return null != e && (Array.isArray(e) ? e.some(s) : s(e))
}