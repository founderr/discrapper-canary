n.d(t, {
    L: function () {
        return r;
    }
});
var o,
    r,
    a = n(990547),
    i = n(544891),
    l = n(570140),
    s = n(314897),
    c = n(573261),
    u = n(815660),
    d = n(981631);
((o = r || (r = {})).USER_ACTION_REQUIRED = 'user_action_required'),
    (o.USER_SETTINGS_UPDATE = 'user_settings_update'),
    (o.GUILD_PHONE_REQUIRED = 'guild_phone_required'),
    (o.MFA_PHONE_UPDATE = 'mfa_phone_update'),
    (o.CONTACT_SYNC = 'contact_sync'),
    (t.Z = {
        setCountryCode(e) {
            l.Z.dispatch({
                type: 'PHONE_SET_COUNTRY_CODE',
                countryCode: e
            });
        },
        removePhone: (e, t) =>
            i.tn.del({
                url: d.ANM.PHONE,
                body: {
                    password: e,
                    change_phone_reason: t
                },
                oldFormErrors: !0
            }),
        resendCode(e) {
            let t = {},
                n = s.default.getFingerprint();
            return (
                null != n && '' !== n && (t['X-Fingerprint'] = n),
                i.tn.post({
                    url: d.ANM.RESEND_PHONE,
                    headers: t,
                    body: { phone: e }
                })
            );
        },
        beginAddPhone: (e, t) =>
            i.tn.post({
                url: d.ANM.PHONE,
                body: {
                    phone: e,
                    change_phone_reason: t
                }
            }),
        addPhone: (e, t, n) =>
            i.tn.post({
                url: d.ANM.PHONE,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
                },
                oldFormErrors: !0
            }),
        addPhoneWithoutPassword: (e) =>
            i.tn.post({
                url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
                body: { code: e }
            }),
        beginReverifyPhone: (e, t) =>
            i.tn.post({
                url: d.ANM.PHONE_REVERIFY,
                body: {
                    phone: e,
                    change_phone_reason: t
                }
            }),
        reverifyPhone: (e, t, n) =>
            i.tn.post({
                url: d.ANM.PHONE_REVERIFY,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
                },
                oldFormErrors: !0
            }),
        validatePhoneForSupport: (e) =>
            i.tn.post({
                url: d.ANM.VERIFY_PHONE_FOR_TICKET,
                body: { token: e },
                oldFormErrors: !0
            }),
        async verifyPhone(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                r = {},
                i = s.default.getFingerprint();
            null != i && '' !== i && (r['X-Fingerprint'] = i), o && (r.authorization = '');
            let m = await c.Z.post({
                url: d.ANM.VERIFY_PHONE,
                headers: r,
                body: {
                    phone: e,
                    code: t
                },
                oldFormErrors: !0,
                trackedActionData: { event: a.NetworkActionNames.USER_VERIFY_PHONE }
            });
            return (
                n &&
                    l.Z.dispatch({
                        type: 'MODAL_POP',
                        key: u.M
                    }),
                m.body
            );
        }
    });
