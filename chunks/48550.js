"use strict";
s.r(t), s.d(t, {
  SELECT_NAMES: function() {
    return n
  }
});
var l = s("689938");
let n = {
  get webauthn() {
    return l.default.Messages.MFA_V2_WEBAUTHN_NAME
  },
  get totp() {
    return l.default.Messages.MFA_V2_TOTP_NAME
  },
  get sms() {
    return l.default.Messages.MFA_V2_SMS_NAME
  },
  get password() {
    return l.default.Messages.MFA_V2_PASSWORD_NAME
  },
  get backup() {
    return l.default.Messages.MFA_V2_BACKUP_NAME
  }
}