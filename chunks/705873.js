"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("702976");
var r = n("49111");

function i(e) {
  var t;
  return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & r.UserFlags.STAFF) === r.UserFlags.STAFF || (null == e ? void 0 : e.personal_connection_id) != null
}