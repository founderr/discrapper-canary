"use strict";
n.r(t);
var a, s, o, r, i = n("392711"),
  l = n.n(i),
  d = n("213919"),
  c = n("442837"),
  u = n("570140");
let E = !1,
  f = [],
  _ = "",
  p = "",
  h = !1,
  A = {
    viewNonce: "",
    regenerateNonce: ""
  };
class T extends(r = c.default.Store) {
  getVerificationKey() {
    return _
  }
  getBackupCodes() {
    return f
  }
  get togglingSMS() {
    return E
  }
  getNonces() {
    return A
  }
  get emailToken() {
    return p
  }
  get hasSeenBackupPrompt() {
    return h
  }
}
o = "MFAStore", (s = "displayName") in(a = T) ? Object.defineProperty(a, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = o, t.default = new T(u.default, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: t,
      codes: n
    } = e;
    void 0 !== t && d.setToken(t), f = n
  },
  MFA_ENABLE_EMAIL_TOKEN: function(e) {
    let {
      token: t
    } = e;
    p = t
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    d.setToken(t)
  },
  MFA_SMS_TOGGLE: function() {
    E = !0
  },
  MFA_SMS_TOGGLE_COMPLETE: function() {
    E = !1
  },
  MFA_CLEAR_BACKUP_CODES: function() {
    f = []
  },
  MFA_VIEW_BACKUP_CODES: function(e) {
    let {
      codes: t,
      key: n
    } = e;
    f = l().sortBy(t, "code"), _ = n
  },
  MFA_SEND_VERIFICATION_KEY: function(e) {
    let {
      nonces: t
    } = e;
    A = t
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function() {
    h = !0
  }
})