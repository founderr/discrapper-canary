"use strict";
n.r(t);
var s = n("544891"),
  a = n("570140"),
  r = n("325067"),
  o = n("981631");

function i(e, t) {
  return a.default.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), s.HTTP.post({
    url: e,
    body: {
      password: t
    },
    oldFormErrors: !0
  }).then(e => (a.default.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw a.default.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })
}
t.default = {
  enableMFAStart: async e => (await s.HTTP.post({
    url: o.Endpoints.MFA_TOTP_ENABLE,
    body: {
      password: e
    },
    oldFormErrors: !0
  })).body,
  verifyEmailCode: async e => (await s.HTTP.post({
    url: o.Endpoints.MFA_TOTP_ENABLE_VERIFY,
    body: {
      code: e
    }
  })).body,
  resendEmailCode: e => s.HTTP.post({
    url: o.Endpoints.MFA_TOTP_ENABLE_RESEND,
    body: {
      password: e
    }
  }),
  setEmailToken(e) {
    a.default.dispatch({
      type: "MFA_ENABLE_EMAIL_TOKEN",
      token: e
    })
  },
  enable(e) {
    let {
      password: t,
      code: n,
      secret: r,
      emailToken: i
    } = e;
    return s.HTTP.post({
      url: o.Endpoints.MFA_TOTP_ENABLE,
      body: {
        code: n,
        secret: r,
        password: t,
        email_token: i
      },
      oldFormErrors: !0
    }).then(e => a.default.dispatch({
      type: "MFA_ENABLE_SUCCESS",
      token: e.body.token,
      codes: e.body.backup_codes
    }))
  },
  disable() {
    s.HTTP.post({
      url: o.Endpoints.MFA_TOTP_DISABLE,
      oldFormErrors: !0
    }).then(e => {
      let {
        body: {
          token: t
        }
      } = e;
      return a.default.dispatch({
        type: "MFA_DISABLE_SUCCESS",
        token: t
      })
    })
  },
  enableSMS: e => i(o.Endpoints.MFA_SMS_ENABLE, e),
  disableSMS: e => i(o.Endpoints.MFA_SMS_DISABLE, e),
  sendMFABackupCodesVerificationKeyEmail: e => s.HTTP.post({
    url: o.Endpoints.MFA_SEND_VERIFICATION_KEY,
    body: {
      password: e
    },
    oldFormErrors: !0
  }).then(e => a.default.dispatch({
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
    } = r.default.getNonces();
    return s.HTTP.post({
      url: o.Endpoints.MFA_CODES_VERIFICATION,
      body: {
        key: e,
        nonce: t ? i : n,
        regenerate: t
      },
      oldFormErrors: !0
    }).then(t => a.default.dispatch({
      type: "MFA_VIEW_BACKUP_CODES",
      codes: t.body.backup_codes,
      key: e
    }), e => {
      throw e
    })
  },
  clearBackupCodes() {
    a.default.dispatch({
      type: "MFA_CLEAR_BACKUP_CODES"
    })
  }
}