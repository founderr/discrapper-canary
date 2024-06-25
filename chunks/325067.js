var n, o, a, l, r = t(392711),
  s = t.n(r),
  c = t(213919),
  d = t(442837),
  u = t(570140);
let _ = !1,
  E = [],
  M = "",
  A = "",
  b = !1,
  C = {
    viewNonce: "",
    regenerateNonce: ""
  };
class h extends(l = d.ZP.Store) {
  getVerificationKey() {
    return M
  }
  getBackupCodes() {
    return E
  }
  get togglingSMS() {
    return _
  }
  getNonces() {
    return C
  }
  get emailToken() {
    return A
  }
  get hasSeenBackupPrompt() {
    return b
  }
}
a = "MFAStore", (o = "displayName") in(n = h) ? Object.defineProperty(n, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[o] = a, i.Z = new h(u.Z, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: i,
      codes: t
    } = e;
    void 0 !== i && c.setToken(i), E = t
  },
  MFA_ENABLE_EMAIL_TOKEN: function(e) {
    let {
      token: i
    } = e;
    A = i
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: i
    } = e;
    c.setToken(i)
  },
  MFA_SMS_TOGGLE: function() {
    _ = !0
  },
  MFA_SMS_TOGGLE_COMPLETE: function() {
    _ = !1
  },
  MFA_CLEAR_BACKUP_CODES: function() {
    E = []
  },
  MFA_VIEW_BACKUP_CODES: function(e) {
    let {
      codes: i,
      key: t
    } = e;
    E = s().sortBy(i, "code"), M = t
  },
  MFA_SEND_VERIFICATION_KEY: function(e) {
    let {
      nonces: i
    } = e;
    C = i
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function() {
    b = !0
  }
})