t.d(s, {
  c: function() {
    return a
  }
}), t(399606), t(430824), t(496675), t(594174);
var n = t(981631),
  i = t(689938);

function a(e) {
  return e.hasAnyStaffLevel() || e.hasFlag(n.xW$.PARTNER) ? i.Z.Messages.MFA_SMS_DISABLED_PARTNER : null == e.email ? i.Z.Messages.MFA_SMS_DISABLED_NO_EMAIL : null
}