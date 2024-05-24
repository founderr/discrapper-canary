"use strict";

function i(e) {
  var t;
  return null !== (t = null == e ? void 0 : e.compositeInstanceId) && void 0 !== t ? t : null == e ? void 0 : e.analyticsActivitySessionId
}

function r(e) {
  return null == e ? void 0 : e.activity_id
}
n.r(t), n.d(t, {
  default: function() {
    return i
  },
  getActivitySessionIdFromServerData: function() {
    return r
  }
})