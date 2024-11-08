n.d(t, {
    q0: function () {
        return y;
    },
    xo: function () {
        return N;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(668781),
    s = n(239091),
    o = n(881052),
    l = n(970606),
    u = n(962086),
    c = n(160404),
    d = n(264229),
    f = n(271383),
    _ = n(701190),
    h = n(594174),
    p = n(626135),
    m = n(246364),
    g = n(981631),
    E = n(976757),
    v = n(388032);
let I = async (e, t) => {
        let n = null != t ? t : _.Z.getInviteKeyForGuildId(e),
            a = h.default.getCurrentUser(),
            s = !f.ZP.isMember(e, null == a ? void 0 : a.id);
        try {
            let t = await r.tn.get({
                url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
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
    S = async (e, t) => {
        let { body: n } = await r.tn.patch({
            url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
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
    b = async (e, t) => {
        let { body: n } = await r.tn.patch({
            url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
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
    T = async (e, t) => {
        await r.tn.patch({
            url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: t },
            oldFormErrors: !0
        });
    },
    y = -1,
    A = async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
        if (c.Z.isFullServerPreview(e)) {
            (0, u.aq)(e, { memberOptions: { isPending: !1 } });
            return;
        }
        try {
            let { body: a } = await r.tn.put({
                url: g.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: {
                    ...(0, l.jK)({ outcome: E.qz.UNKNOWN }),
                    version: t.version,
                    form_fields: t.formFields
                }
            });
            return (
                i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: a
                }),
                (0, m.YG)(t.formFields) && n !== y && setTimeout(N, n),
                a
            );
        } catch (t) {
            let { status: e } = t;
            switch (e) {
                case 429:
                    throw (
                        ((0, s.Zy)(),
                        a.Z.show({
                            title: v.intl.string(v.t['2bHM5e']),
                            body: v.intl.string(v.t.D0lNBA),
                            confirmText: v.intl.string(v.t.qFctfH)
                        }),
                        {
                            ...t,
                            message: v.intl.string(v.t.D0lNBA)
                        })
                    );
                case 403:
                    throw {
                        ...t,
                        message: v.intl.string(v.t.bu2hl5)
                    };
                default:
                    var d, f;
                    throw {
                        ...t,
                        message: null !== (f = ((d = new o.Hx(t)), d.getAnyErrorMessage())) && void 0 !== f ? f : v.intl.string(v.t.R0RpRU)
                    };
            }
        }
    };
function N() {
    i.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW' });
}
t.ZP = {
    fetchVerificationForm: I,
    updateVerificationForm: S,
    updateVerificationFormFieldsLocal: (e, t) => {
        i.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: { formFields: t },
            isLocalUpdate: !0
        });
    },
    updateVerificationFormDescription: b,
    updateVerificationFormDescriptionLocal: (e, t) => {
        i.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: { description: t },
            isLocalUpdate: !0
        });
    },
    enableVerificationForm: T,
    submitVerificationForm: A,
    clearCoachmark: function () {
        i.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR' });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: r, reason: i, reasonOther: a, responses: s } = e;
        p.default.track(g.rMx.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: r.id,
            guild_id: t.id,
            reason: i,
            reason_other: a,
            responses: s
        });
    }
};
