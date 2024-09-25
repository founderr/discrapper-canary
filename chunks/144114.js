n.d(t, {
    L: function () {
        return r;
    }
});
var s,
    r,
    i = n(990547),
    a = n(544891),
    o = n(570140),
    l = n(314897),
    c = n(573261),
    u = n(815660),
    d = n(981631);
((s = r || (r = {})).USER_ACTION_REQUIRED = 'user_action_required'),
    (s.USER_SETTINGS_UPDATE = 'user_settings_update'),
    (s.GUILD_PHONE_REQUIRED = 'guild_phone_required'),
    (s.MFA_PHONE_UPDATE = 'mfa_phone_update'),
    (s.CONTACT_SYNC = 'contact_sync'),
    (t.Z = {
        setCountryCode(e) {
            o.Z.dispatch({
                type: 'PHONE_SET_COUNTRY_CODE',
                countryCode: e
            });
        },
        removePhone: (e, t) =>
            a.tn.del({
                url: d.ANM.PHONE,
                body: {
                    password: e,
                    change_phone_reason: t
                },
                oldFormErrors: !0
            }),
        resendCode(e) {
            let t = {},
                n = l.default.getFingerprint();
            return (
                null != n && '' !== n && (t['X-Fingerprint'] = n),
                a.tn.post({
                    url: d.ANM.RESEND_PHONE,
                    headers: t,
                    body: { phone: e }
                })
            );
        },
        beginAddPhone: (e, t) =>
            a.tn.post({
                url: d.ANM.PHONE,
                body: {
                    phone: e,
                    change_phone_reason: t
                }
            }),
        addPhone: (e, t, n) =>
            a.tn.post({
                url: d.ANM.PHONE,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
                },
                oldFormErrors: !0
            }),
        addPhoneWithoutPassword: (e) =>
            a.tn.post({
                url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
                body: { code: e }
            }),
        beginReverifyPhone: (e, t) =>
            a.tn.post({
                url: d.ANM.PHONE_REVERIFY,
                body: {
                    phone: e,
                    change_phone_reason: t
                }
            }),
        reverifyPhone: (e, t, n) =>
            a.tn.post({
                url: d.ANM.PHONE_REVERIFY,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
                },
                oldFormErrors: !0
            }),
        validatePhoneForSupport: (e) =>
            a.tn.post({
                url: d.ANM.VERIFY_PHONE_FOR_TICKET,
                body: { token: e },
                oldFormErrors: !0
            }),
        async verifyPhone(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                r = {},
                a = l.default.getFingerprint();
            null != a && '' !== a && (r['X-Fingerprint'] = a), s && (r.authorization = '');
            let _ = await c.Z.post({
                url: d.ANM.VERIFY_PHONE,
                headers: r,
                body: {
                    phone: e,
                    code: t
                },
                oldFormErrors: !0,
                trackedActionData: { event: i.NetworkActionNames.USER_VERIFY_PHONE }
            });
            return (
                n &&
                    o.Z.dispatch({
                        type: 'MODAL_POP',
                        key: u.M
                    }),
                _.body
            );
        }
    });
