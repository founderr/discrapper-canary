var n, a, i, r, o = t(392711),
  l = t.n(o),
  c = t(213919),
  d = t(442837),
  _ = t(570140);
let E = !1,
  u = [],
  T = "",
  S = "",
  I = !1,
  N = {
    viewNonce: "",
    regenerateNonce: ""
  };
class C extends(r = d.ZP.Store) {
  getVerificationKey() {
    return T
  }
  getBackupCodes() {
    return u
  }
  get togglingSMS() {
    return E
  }
  getNonces() {
    return N
  }
  get emailToken() {
    return S
  }
  get hasSeenBackupPrompt() {
    return I
  }
}
i = "MFAStore", (a = "displayName") in(n = C) ? Object.defineProperty(n, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = i, s.Z = new C(_.Z, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: s,
      codes: t
    } = e;
    void 0 !== s && c.setToken(s), u = t
  },
  MFA_ENABLE_EMAIL_TOKEN: function(e) {
    let {
      token: s
    } = e;
    S = s
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: s
    } = e;
    c.setToken(s)
  },
  MFA_SMS_TOGGLE: function() {
    E = !0
  },
  MFA_SMS_TOGGLE_COMPLETE: function() {
    E = !1
  },
  MFA_CLEAR_BACKUP_CODES: function() {
    u = []
  },
  MFA_VIEW_BACKUP_CODES: function(e) {
    let {
      codes: s,
      key: t
    } = e;
    u = l().sortBy(s, "code"), T = t
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