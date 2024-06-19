var n = t(544891),
  i = t(570140),
  a = t(325067),
  l = t(981631);

function r(e, s) {
  return i.Z.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), n.tn.post({
    url: e,
    body: {
      password: s
    },
    oldFormErrors: !0
  }).then(e => (i.Z.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw i.Z.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })
}
s.Z = {
  enableMFAStart: async e => (await n.tn.post({
    url: l.ANM.MFA_TOTP_ENABLE,
    body: {
      password: e
    },
    oldFormErrors: !0
  })).body,
  verifyEmailCode: async e => (await n.tn.post({
    url: l.ANM.MFA_TOTP_ENABLE_VERIFY,
    body: {
      code: e
    }
  })).body,
  resendEmailCode: e => n.tn.post({
    url: l.ANM.MFA_TOTP_ENABLE_RESEND,
    body: {
      password: e
    }
  }),
  setEmailToken(e) {
    i.Z.dispatch({
      type: "MFA_ENABLE_EMAIL_TOKEN",
      token: e
    })
  },
  enable(e) {
    let {
      password: s,
      code: t,
      secret: a,
      emailToken: r
    } = e;
    return n.tn.post({
      url: l.ANM.MFA_TOTP_ENABLE,
      body: {
        code: t,
        secret: a,
        password: s,
        email_token: r
      },
      oldFormErrors: !0
    }).then(e => i.Z.dispatch({
      type: "MFA_ENABLE_SUCCESS",
      token: e.body.token,
      codes: e.body.backup_codes
    }))
  },
  disable() {
    n.tn.post({
      url: l.ANM.MFA_TOTP_DISABLE,
      oldFormErrors: !0
    }).then(e => {
      let {
        body: {
          token: s
        }
      } = e;
      return i.Z.dispatch({
        type: "MFA_DISABLE_SUCCESS",
        token: s
      })
    })
  },
  enableSMS: e => r(l.ANM.MFA_SMS_ENABLE, e),
  disableSMS: e => r(l.ANM.MFA_SMS_DISABLE, e),
  sendMFABackupCodesVerificationKeyEmail: e => n.tn.post({
    url: l.ANM.MFA_SEND_VERIFICATION_KEY,
    body: {
      password: e
    },
    oldFormErrors: !0
  }).then(e => i.Z.dispatch({
    type: "MFA_SEND_VERIFICATION_KEY",
    nonces: {
      viewNonce: e.body.nonce,
      regenerateNonce: e.body.regenerate_nonce
    }
  }), e => {
    throw e
  }),
  confirmViewBackupCodes(e, s) {
    let {
      viewNonce: t,
      regenerateNonce: r
    } = a.Z.getNonces();
    return n.tn.post({
      url: l.ANM.MFA_CODES_VERIFICATION,
      body: {
        key: e,
        nonce: s ? r : t,
        regenerate: s
      },
      oldFormErrors: !0
    }).then(s => i.Z.dispatch({
      type: "MFA_VIEW_BACKUP_CODES",
      codes: s.body.backup_codes,
      key: e
    }), e => {
      throw e
    })
  },
  clearBackupCodes() {
    i.Z.dispatch({
      type: "MFA_CLEAR_BACKUP_CODES"
    })
  }
}