var n = i(544891),
    o = i(570140),
    a = i(325067),
    l = i(981631);
function r(e, t) {
    return (
        o.Z.dispatch({ type: 'MFA_SMS_TOGGLE' }),
        n.tn
            .post({
                url: e,
                body: { password: t },
                oldFormErrors: !0
            })
            .then(
                (e) => (o.Z.dispatch({ type: 'MFA_SMS_TOGGLE_COMPLETE' }), e),
                (e) => {
                    throw (o.Z.dispatch({ type: 'MFA_SMS_TOGGLE_COMPLETE' }), e);
                }
            )
    );
}
t.Z = {
    enableMFAStart: async (e) =>
        (
            await n.tn.post({
                url: l.ANM.MFA_TOTP_ENABLE,
                body: { password: e },
                oldFormErrors: !0
            })
        ).body,
    verifyEmailCode: async (e) =>
        (
            await n.tn.post({
                url: l.ANM.MFA_TOTP_ENABLE_VERIFY,
                body: { code: e }
            })
        ).body,
    resendEmailCode: (e) =>
        n.tn.post({
            url: l.ANM.MFA_TOTP_ENABLE_RESEND,
            body: { password: e }
        }),
    setEmailToken(e) {
        o.Z.dispatch({
            type: 'MFA_ENABLE_EMAIL_TOKEN',
            token: e
        });
    },
    enable(e) {
        let { password: t, code: i, secret: a, emailToken: r } = e;
        return n.tn
            .post({
                url: l.ANM.MFA_TOTP_ENABLE,
                body: {
                    code: i,
                    secret: a,
                    password: t,
                    email_token: r
                },
                oldFormErrors: !0
            })
            .then((e) =>
                o.Z.dispatch({
                    type: 'MFA_ENABLE_SUCCESS',
                    token: e.body.token,
                    codes: e.body.backup_codes
                })
            );
    },
    disable() {
        n.tn
            .post({
                url: l.ANM.MFA_TOTP_DISABLE,
                oldFormErrors: !0
            })
            .then((e) => {
                let {
                    body: { token: t }
                } = e;
                return o.Z.dispatch({
                    type: 'MFA_DISABLE_SUCCESS',
                    token: t
                });
            });
    },
    enableSMS: (e) => r(l.ANM.MFA_SMS_ENABLE, e),
    disableSMS: (e) => r(l.ANM.MFA_SMS_DISABLE, e),
    sendMFABackupCodesVerificationKeyEmail: (e) =>
        n.tn
            .post({
                url: l.ANM.MFA_SEND_VERIFICATION_KEY,
                body: { password: e },
                oldFormErrors: !0
            })
            .then(
                (e) =>
                    o.Z.dispatch({
                        type: 'MFA_SEND_VERIFICATION_KEY',
                        nonces: {
                            viewNonce: e.body.nonce,
                            regenerateNonce: e.body.regenerate_nonce
                        }
                    }),
                (e) => {
                    throw e;
                }
            ),
    confirmViewBackupCodes(e, t) {
        let { viewNonce: i, regenerateNonce: r } = a.Z.getNonces();
        return n.tn
            .post({
                url: l.ANM.MFA_CODES_VERIFICATION,
                body: {
                    key: e,
                    nonce: t ? r : i,
                    regenerate: t
                },
                oldFormErrors: !0
            })
            .then(
                (t) =>
                    o.Z.dispatch({
                        type: 'MFA_VIEW_BACKUP_CODES',
                        codes: t.body.backup_codes,
                        key: e
                    }),
                (e) => {
                    throw e;
                }
            );
    },
    clearBackupCodes() {
        o.Z.dispatch({ type: 'MFA_CLEAR_BACKUP_CODES' });
    }
};
