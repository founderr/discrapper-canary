var l = n(990547),
    i = n(283693),
    r = n(570140),
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
                    return null != l && (n = -1 !== l.split('.').indexOf('edu')), (0, i.iG)({ is_edu_email: n });
                }
            }
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
                        return (0, i.iG)({ has_matching_guild: n });
                    }
                }
            })
        ).body,
    async verify(t) {
        if (null != t)
            try {
                var e;
                let n = await a.Z.post({
                        url: u.ANM.HUB_EMAIL_VERIFY,
                        body: { token: t },
                        trackedActionData: { event: l.NetworkActionNames.HUB_EMAIL_VERIFY }
                    }),
                    i = null === (e = n.body.guild) || void 0 === e ? void 0 : e.id;
                r.Z.dispatch({
                    type: 'HUB_VERIFY_EMAIL_SUCCESS',
                    guildId: i
                });
            } catch (t) {
                r.Z.dispatch({
                    type: 'HUB_VERIFY_EMAIL_FAILURE',
                    errors: t.body
                });
            }
    },
    async verifyCode(t, e, n) {
        if (null != t)
            try {
                var i;
                let o = await a.Z.post({
                        url: u.ANM.HUB_EMAIL_VERIFY_CODE,
                        body: {
                            code: t,
                            guild_id: e,
                            email: n
                        },
                        trackedActionData: { event: l.NetworkActionNames.HUB_EMAIL_VERIFY }
                    }),
                    s = null === (i = o.body.guild) || void 0 === i ? void 0 : i.id;
                return (
                    r.Z.dispatch({
                        type: 'HUB_VERIFY_EMAIL_SUCCESS',
                        guildId: s
                    }),
                    o.body
                );
            } catch (t) {
                throw (
                    (r.Z.dispatch({
                        type: 'HUB_VERIFY_EMAIL_FAILURE',
                        errors: t.body
                    }),
                    t)
                );
            }
    }
};
