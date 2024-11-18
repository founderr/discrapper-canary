var l = n(990547),
    r = n(283693),
    i = n(570140),
    a = n(573261),
    u = n(981631);
e.Z = {
    signup: (t, e) =>
        a.Z.post({
            url: u.ANM.HUB_WAITLIST_SIGNUP,
            body: {
                email: t,
                school: e
            },
            trackedActionData: {
                event: l.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                properties: (t) => {
                    var e;
                    let n = !1,
                        l = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.email_domain;
                    return null != l && (n = -1 !== l.split('.').indexOf('edu')), (0, r.iG)({ is_edu_email: n });
                }
            },
            rejectWithError: !1
        }),
    sendVerificationEmail: async (t, e, n) =>
        (
            await a.Z.post({
                url: u.ANM.HUB_EMAIL_VERIFY_SEND,
                body: {
                    email: t,
                    guild_id: n,
                    allow_multiple_guilds: e,
                    use_verification_code: !0
                },
                trackedActionData: {
                    event: l.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                    properties: (t) => {
                        var e;
                        let n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.has_matching_guild;
                        return (0, r.iG)({ has_matching_guild: n });
                    }
                },
                rejectWithError: !1
            })
        ).body,
    async verify(t) {
        if (null != t)
            try {
                var e;
                let n = await a.Z.post({
                        url: u.ANM.HUB_EMAIL_VERIFY,
                        body: { token: t },
                        trackedActionData: { event: l.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: !1
                    }),
                    r = null === (e = n.body.guild) || void 0 === e ? void 0 : e.id;
                i.Z.dispatch({
                    type: 'HUB_VERIFY_EMAIL_SUCCESS',
                    guildId: r
                });
            } catch (t) {
                i.Z.dispatch({
                    type: 'HUB_VERIFY_EMAIL_FAILURE',
                    errors: t.body
                });
            }
    },
    async verifyCode(t, e, n) {
        if (null != t)
            try {
                var r;
                let o = await a.Z.post({
                        url: u.ANM.HUB_EMAIL_VERIFY_CODE,
                        body: {
                            code: t,
                            guild_id: e,
                            email: n
                        },
                        trackedActionData: { event: l.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: !1
                    }),
                    s = null === (r = o.body.guild) || void 0 === r ? void 0 : r.id;
                return (
                    i.Z.dispatch({
                        type: 'HUB_VERIFY_EMAIL_SUCCESS',
                        guildId: s
                    }),
                    o.body
                );
            } catch (t) {
                throw (
                    (i.Z.dispatch({
                        type: 'HUB_VERIFY_EMAIL_FAILURE',
                        errors: t.body
                    }),
                    t)
                );
            }
    }
};
