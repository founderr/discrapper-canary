"use strict";
n.r(t), n.d(t, {
  canViewInviteModal: function() {
    return l
  }
});
var a = n("981631");

function l(e, t, n, l) {
  let i = null != n ? n : t;
  return null != i && e.can(a.Permissions.CREATE_INSTANT_INVITE, i) || null != t && null != t.vanityURLCode || (null == l ? void 0 : l.invite_code) != null
}