"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var a = n("917351"),
  i = n.n(a),
  o = n("171718"),
  l = n("446674"),
  r = n("913144");
let s = !1,
  d = [],
  c = "",
  u = "",
  E = !1,
  f = {
    viewNonce: "",
    regenerateNonce: ""
  };
class _ extends l.default.Store {
  getVerificationKey() {
    return c
  }
  getBackupCodes() {
    return d
  }
  get togglingSMS() {
    return s
  }
  getNonces() {
    return f
  }
  get emailToken() {
    return u
  }
  get hasSeenBackupPrompt() {
    return E
  }
}
_.displayName = "MFAStore";
var M = new _(r.default, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: t,
      codes: n
    } = e;
    void 0 !== t && o.default.setToken(t), d = n
  },
  MFA_ENABLE_EMAIL_TOKEN: function(e) {
    let {
      token: t
    } = e;
    u = t
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    o.default.setToken(t)
  },
  MFA_SMS_TOGGLE: function() {
    s = !0
  },
  MFA_SMS_TOGGLE_COMPLETE: function() {
    s = !1
  },
  MFA_CLEAR_BACKUP_CODES: function() {
    d = []
  },
  MFA_VIEW_BACKUP_CODES: function(e) {
    let {
      codes: t,
      key: n
    } = e;
    d = i.sortBy(t, "code"), c = n
  },
  MFA_SEND_VERIFICATION_KEY: function(e) {
    let {
      nonces: t
    } = e;
    f = t
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function() {
    E = !0
  }
})