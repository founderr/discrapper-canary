"use strict";
n.r(t), n.d(t, {
  isBlockedByProxyErrorCode: function() {
    return r
  }
});
var a = n("49111");

function r(e) {
  var t;
  return !e.ok && (null === (t = e.body) || void 0 === t ? void 0 : t.code) === a.AbortCodes.BLOCKED_BY_PROXY
}