var n = t(544891),
  o = t(570140),
  a = t(325067),
  l = t(981631);

function r(e, i) {
  return o.Z.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), n.tn.post({
    url: e,
    body: {
      password: i
    },
    oldFormErrors: !0
  }).then(e => (o.Z.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw o.Z.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })
}
i.Z = {
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
    o.Z.dispatch({
      type: "MFA_ENABLE_EMAIL_TOKEN",
      token: e
    })
  },
  enable(e) {
    let {
      password: i,
      code: t,
      secret: a,
      emailToken: r
    } = e;
    return n.tn.post({
      url: l.ANM.MFA_TOTP_ENABLE,
      body: {
        code: t,
        secret: a,
        password: i,
        email_token: r
      },
      oldFormErrors: !0
    }).then(e => o.Z.dispatch({
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
          token: i
        }
      } = e;
      return o.Z.dispatch({
        type: "MFA_DISABLE_SUCCESS",
        token: i
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
  }).then(e => o.Z.dispatch({
    type: "MFA_SEND_VERIFICATION_KEY",
    nonces: {
      viewNonce: e.body.nonce,
      regenerateNonce: e.body.regenerate_nonce
    }
  }), e => {
    throw e
  }),
  confirmViewBackupCodes(e, i) {
    let {
      viewNonce: t,
      regenerateNonce: r
    } = a.Z.getNonces();
    return n.tn.post({
      url: l.ANM.MFA_CODES_VERIFICATION,
      body: {
        key: e,
        nonce: i ? r : t,
        regenerate: i
      },
      oldFormErrors: !0
    }).then(i => o.Z.dispatch({
      type: "MFA_VIEW_BACKUP_CODES",
      codes: i.body.backup_codes,
      key: e
    }), e => {
      throw e
    })
  },
  clearBackupCodes() {
    o.Z.dispatch({
      type: "MFA_CLEAR_BACKUP_CODES"
    })
  }
}