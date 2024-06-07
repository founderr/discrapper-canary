"use strict";
n.r(t);
var s, a, r, o, i = n("392711"),
  l = n.n(i),
  d = n("213919"),
  c = n("442837"),
  u = n("570140");
let f = !1,
  E = [],
  p = "",
  _ = "",
  h = !1,
  A = {
    viewNonce: "",
    regenerateNonce: ""
  };
class C extends(o = c.default.Store) {
  getVerificationKey() {
    return p
  }
  getBackupCodes() {
    return E
  }
  get togglingSMS() {
    return f
  }
  getNonces() {
    return A
  }
  get emailToken() {
    return _
  }
  get hasSeenBackupPrompt() {
    return h
  }
}
r = "MFAStore", (a = "displayName") in(s = C) ? Object.defineProperty(s, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = r, t.default = new C(u.default, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: t,
      codes: n
    } = e;
    void 0 !== t && d.setToken(t), E = n
  },
  MFA_ENABLE_EMAIL_TOKEN: function(e) {
    let {
      token: t
    } = e;
    _ = t
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    d.setToken(t)
  },
  MFA_SMS_TOGGLE: function() {
    f = !0
  },
  MFA_SMS_TOGGLE_COMPLETE: function() {
    f = !1
  },
  MFA_CLEAR_BACKUP_CODES: function() {
    E = []
  },
  MFA_VIEW_BACKUP_CODES: function(e) {
    let {
      codes: t,
      key: n
    } = e;
    E = l().sortBy(t, "code"), p = n
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