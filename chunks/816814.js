"use strict";
n.r(t);
var a = n("544891"),
  s = n("570140"),
  o = n("325067"),
  r = n("981631");

function i(e, t) {
  return s.default.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), a.HTTP.post({
    url: e,
    body: {
      password: t
    },
    oldFormErrors: !0
  }).then(e => (s.default.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw s.default.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })
}
t.default = {
  enableMFAStart: async e => (await a.HTTP.post({
    url: r.Endpoints.MFA_TOTP_ENABLE,
    body: {
      password: e
    },
    oldFormErrors: !0
  })).body,
  verifyEmailCode: async e => (await a.HTTP.post({
    url: r.Endpoints.MFA_TOTP_ENABLE_VERIFY,
    body: {
      code: e
    }
  })).body,
  resendEmailCode: e => a.HTTP.post({
    url: r.Endpoints.MFA_TOTP_ENABLE_RESEND,
    body: {
      password: e
    }
  }),
  setEmailToken(e) {
    s.default.dispatch({
      type: "MFA_ENABLE_EMAIL_TOKEN",
      token: e
    })
  },
  enable(e) {
    let {
      password: t,
      code: n,
      secret: o,
      emailToken: i
    } = e;
    return a.HTTP.post({
      url: r.Endpoints.MFA_TOTP_ENABLE,
      body: {
        code: n,
        secret: o,
        password: t,
        email_token: i
      },
      oldFormErrors: !0
    }).then(e => s.default.dispatch({
      type: "MFA_ENABLE_SUCCESS",
      token: e.body.token,
      codes: e.body.backup_codes
    }))
  },
  disable() {
    a.HTTP.post({
      url: r.Endpoints.MFA_TOTP_DISABLE,
      oldFormErrors: !0
    }).then(e => {
      let {
        body: {
          token: t
        }
      } = e;
      return s.default.dispatch({
        type: "MFA_DISABLE_SUCCESS",
        token: t
      })
    })
  },
  enableSMS: e => i(r.Endpoints.MFA_SMS_ENABLE, e),
  disableSMS: e => i(r.Endpoints.MFA_SMS_DISABLE, e),
  sendMFABackupCodesVerificationKeyEmail: e => a.HTTP.post({
    url: r.Endpoints.MFA_SEND_VERIFICATION_KEY,
    body: {
      password: e
    },
    oldFormErrors: !0
  }).then(e => s.default.dispatch({
    type: "MFA_SEND_VERIFICATION_KEY",
    nonces: {
      viewNonce: e.body.nonce,
      regenerateNonce: e.body.regenerate_nonce
    }
  }), e => {
    throw e
  }),
  confirmViewBackupCodes(e, t) {
    let {
      viewNonce: n,
      regenerateNonce: i
    } = o.default.getNonces();
    return a.HTTP.post({
      url: r.Endpoints.MFA_CODES_VERIFICATION,
      body: {
        key: e,
        nonce: t ? i : n,
        regenerate: t
      },
      oldFormErrors: !0
    }).then(t => s.default.dispatch({
      type: "MFA_VIEW_BACKUP_CODES",
      codes: t.body.backup_codes,
      key: e
    }), e => {
      throw e
    })
  },
  clearBackupCodes() {
    s.default.dispatch({
      type: "MFA_CLEAR_BACKUP_CODES"
    })
  }
}