var r = n(544891),
    i = n(570140),
    a = n(668781),
    s = n(239091),
    o = n(881052),
    l = n(970606),
    u = n(962086),
    c = n(160404),
    d = n(264229),
    _ = n(271383),
    E = n(701190),
    f = n(594174),
    h = n(626135),
    p = n(981631),
    m = n(976757),
    I = n(689938);
let T = async (e, t) => {
        let n = null != t ? t : E.Z.getInviteKeyForGuildId(e),
            a = f.default.getCurrentUser(),
            s = !_.ZP.isMember(e, null == a ? void 0 : a.id);
        try {
            let t = await r.tn.get({
                url: p.ANM.GUILD_MEMBER_VERIFICATION(e),
                query: {
                    with_guild: s,
                    invite_code: null != n ? (0, d.jX)(n) : void 0
                },
                oldFormErrors: !0
            });
            if (null == t.body) throw t;
            let { body: a } = t;
            return (
                i.Z.dispatch({
                    type: 'MEMBER_VERIFICATION_FORM_UPDATE',
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields,
                        guild: a.guild
                    }
                }),
                a
            );
        } catch (t) {
            i.Z.dispatch({
                type: 'MEMBER_VERIFICATION_FORM_FETCH_FAIL',
                guildId: e
            });
        }
    },
    g = async (e, t) => {
        let { body: n } = await r.tn.patch({
            url: p.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { form_fields: t },
            oldFormErrors: !0
        });
        i.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: {
                version: n.version,
                description: n.description,
                formFields: n.form_fields
            }
        });
    },
    S = async (e, t) => {
        let { body: n } = await r.tn.patch({
            url: p.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { description: t },
            oldFormErrors: !0
        });
        i.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: {
                version: n.version,
                description: n.description,
                formFields: n.form_fields
            }
        });
    },
    A = async (e, t) => {
        await r.tn.patch({
            url: p.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: t },
            oldFormErrors: !0
        });
    },
    N = async (e, t) => {
        if (c.Z.isFullServerPreview(e)) {
            (0, u.aq)(e, { memberOptions: { isPending: !1 } });
            return;
        }
        try {
            let { body: n } = await r.tn.put({
                url: p.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: {
                    ...(0, l.jK)({ outcome: m.qz.UNKNOWN }),
                    version: t.version,
                    form_fields: t.formFields
                }
            });
            return (
                i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: n
                }),
                setTimeout(v, 200),
                n
            );
        } catch (t) {
            let { status: e } = t;
            switch (e) {
                case 429:
                    throw (
                        ((0, s.Zy)(),
                        a.Z.show({
                            title: I.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_HEADER,
                            body: I.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY,
                            confirmText: I.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_BUTTON
                        }),
                        {
                            ...t,
                            message: I.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY
                        })
                    );
                case 403:
                    throw {
                        ...t,
                        message: I.Z.Messages.CLAN_APPLICATION_MISSING_PERMISSION
                    };
                default:
                    var n, d;
                    throw {
                        ...t,
                        message: null !== (d = ((n = new o.Hx(t)), n.getAnyErrorMessage())) && void 0 !== d ? d : I.Z.Messages.ERROR_GENERIC_TITLE
                    };
            }
        }
    };
function v() {
    i.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW' });
}
t.Z = {
    fetchVerificationForm: T,
    updateVerificationForm: g,
    updateVerificationFormFieldsLocal: (e, t) => {
        i.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: { formFields: t },
            isLocalUpdate: !0
        });
    },
    updateVerificationFormDescription: S,
    updateVerificationFormDescriptionLocal: (e, t) => {
        i.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: { description: t },
            isLocalUpdate: !0
        });
    },
    enableVerificationForm: A,
    submitVerificationForm: N,
    clearCoachmark: function () {
        i.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR' });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: r, reason: i, reasonOther: a, responses: s } = e;
        h.default.track(p.rMx.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: r.id,
            guild_id: t.id,
            reason: i,
            reason_other: a,
            responses: s
        });
    }
};
