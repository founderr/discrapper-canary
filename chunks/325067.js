var n, i, a, l, r = t(392711),
  o = t.n(r),
  c = t(213919),
  E = t(442837),
  d = t(570140);
let _ = !1,
  T = [],
  S = "",
  u = "",
  I = !1,
  N = {
    viewNonce: "",
    regenerateNonce: ""
  };
class A extends(l = E.ZP.Store) {
  getVerificationKey() {
    return S
  }
  getBackupCodes() {
    return T
  }
  get togglingSMS() {
    return _
  }
  getNonces() {
    return N
  }
  get emailToken() {
    return u
  }
  get hasSeenBackupPrompt() {
    return I
  }
}
a = "MFAStore", (i = "displayName") in(n = A) ? Object.defineProperty(n, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = a, s.Z = new A(d.Z, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: s,
      codes: t
    } = e;
    void 0 !== s && c.setToken(s), T = t
  },
  MFA_ENABLE_EMAIL_TOKEN: function(e) {
    let {
      token: s
    } = e;
    u = s
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: s
    } = e;
    c.setToken(s)
  },
  MFA_SMS_TOGGLE: function() {
    _ = !0
  },
  MFA_SMS_TOGGLE_COMPLETE: function() {
    _ = !1
  },
  MFA_CLEAR_BACKUP_CODES: function() {
    T = []
  },
  MFA_VIEW_BACKUP_CODES: function(e) {
    let {
      codes: s,
      key: t
    } = e;
    T = o().sortBy(s, "code"), S = t
  },
  MFA_SEND_VERIFICATION_KEY: function(e) {
    let {
      nonces: s
    } = e;
    N = s
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function() {
    I = !0
  }
})