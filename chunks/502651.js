"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
});
var r = l("954016"),
  a = l("49111");

function n(e) {
  return e.type === a.ActivityTypes.STREAMING && null != e.url && r.validStreamURL.test(e.url)
}

function s(e) {
  return null != e && (Array.isArray(e) ? e.some(n) : n(e))
}