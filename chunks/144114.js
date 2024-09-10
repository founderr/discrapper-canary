n.d(t, {
    L: function () {
        return r;
    }
});
var i,
    r,
    s = n(990547),
    l = n(544891),
    a = n(570140),
    o = n(314897),
    u = n(573261),
    d = n(815660),
    c = n(981631);
((i = r || (r = {})).USER_ACTION_REQUIRED = 'user_action_required'),
    (i.USER_SETTINGS_UPDATE = 'user_settings_update'),
    (i.GUILD_PHONE_REQUIRED = 'guild_phone_required'),
    (i.MFA_PHONE_UPDATE = 'mfa_phone_update'),
    (i.CONTACT_SYNC = 'contact_sync'),
    (t.Z = {
        setCountryCode(e) {
            a.Z.dispatch({
                type: 'PHONE_SET_COUNTRY_CODE',
                countryCode: e
            });
        },
        removePhone: (e, t) =>
            l.tn.del({
                url: c.ANM.PHONE,
                body: {
                    password: e,
                    change_phone_reason: t
                },
                oldFormErrors: !0
            }),
        resendCode(e) {
            let t = {},
                n = o.default.getFingerprint();
            return (
                null != n && '' !== n && (t['X-Fingerprint'] = n),
                l.tn.post({
                    url: c.ANM.RESEND_PHONE,
                    headers: t,
                    body: { phone: e }
                })
            );
        },
        beginAddPhone: (e, t) =>
            l.tn.post({
                url: c.ANM.PHONE,
                body: {
                    phone: e,
                    change_phone_reason: t
                }
            }),
        addPhone: (e, t, n) =>
            l.tn.post({
                url: c.ANM.PHONE,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
                },
                oldFormErrors: !0
            }),
        addPhoneWithoutPassword: (e) =>
            l.tn.post({
                url: c.ANM.PHONE_VERIFY_NO_PASSWORD,
                body: { code: e }
            }),
        beginReverifyPhone: (e, t) =>
            l.tn.post({
                url: c.ANM.PHONE_REVERIFY,
                body: {
                    phone: e,
                    change_phone_reason: t
                }
            }),
        reverifyPhone: (e, t, n) =>
            l.tn.post({
                url: c.ANM.PHONE_REVERIFY,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
                },
                oldFormErrors: !0
            }),
        validatePhoneForSupport: (e) =>
            l.tn.post({
                url: c.ANM.VERIFY_PHONE_FOR_TICKET,
                body: { token: e },
                oldFormErrors: !0
            }),
        async verifyPhone(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                r = {},
                l = o.default.getFingerprint();
            null != l && '' !== l && (r['X-Fingerprint'] = l), i && (r.authorization = '');
            let _ = await u.Z.post({
                url: c.ANM.VERIFY_PHONE,
                headers: r,
                body: {
                    phone: e,
                    code: t
                },
                oldFormErrors: !0,
                trackedActionData: { event: s.NetworkActionNames.USER_VERIFY_PHONE }
            });
            return (
                n &&
                    a.Z.dispatch({
                        type: 'MODAL_POP',
                        key: d.M
                    }),
                _.body
            );
        }
    });
