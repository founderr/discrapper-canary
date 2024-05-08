"use strict";
l.r(t), l.d(t, {
  canViewInviteModal: function() {
    return i
  }
});
var n = l("981631");

function i(e, t, l, i) {
  let a = null != l ? l : t;
  return null != a && e.can(n.Permissions.CREATE_INSTANT_INVITE, a) || null != t && null != t.vanityURLCode || (null == i ? void 0 : i.invite_code) != null
}