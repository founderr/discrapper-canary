n.d(t, {
    q0: function () {
        return T;
    },
    xo: function () {
        return y;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(668781),
    s = n(239091),
    o = n(881052),
    l = n(962086),
    u = n(160404),
    c = n(264229),
    d = n(271383),
    f = n(701190),
    _ = n(594174),
    p = n(626135),
    h = n(246364),
    m = n(981631),
    g = n(388032);
let E = async (e, t) => {
        let n = null != t ? t : f.Z.getInviteKeyForGuildId(e),
            a = _.default.getCurrentUser(),
            s = !d.ZP.isMember(e, null == a ? void 0 : a.id);
        try {
            let t = await r.tn.get({
                url: m.ANM.GUILD_MEMBER_VERIFICATION(e),
                query: {
                    with_guild: s,
                    invite_code: null != n ? (0, c.jX)(n) : void 0
                },
                oldFormErrors: !0,
                rejectWithError: !1
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
    v = async (e, t) => {
        let { body: n } = await r.tn.patch({
            url: m.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { form_fields: t },
            oldFormErrors: !0,
            rejectWithError: !1
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
            url: m.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { description: t },
            oldFormErrors: !0,
            rejectWithError: !1
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
    I = async (e, t) => {
        await r.tn.patch({
            url: m.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: t },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    T = -1,
    S = async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
        if (u.Z.isFullServerPreview(e)) {
            (0, l.aq)(e, { memberOptions: { isPending: !1 } });
            return;
        }
        try {
            let { body: a } = await r.tn.put({
                url: m.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: {
                    version: t.version,
                    form_fields: t.formFields
                },
                rejectWithError: !1
            });
            return (
                i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: a
                }),
                (0, h.YG)(t.formFields) && n !== T && setTimeout(y, n),
                a
            );
        } catch (t) {
            let { status: e } = t;
            switch (e) {
                case 429:
                    throw (
                        ((0, s.Zy)(),
                        a.Z.show({
                            title: g.intl.string(g.t['2bHM5e']),
                            body: g.intl.string(g.t.D0lNBA),
                            confirmText: g.intl.string(g.t.qFctfH)
                        }),
                        {
                            ...t,
                            message: g.intl.string(g.t.D0lNBA)
                        })
                    );
                case 403:
                    throw {
                        ...t,
                        message: g.intl.string(g.t.bu2hl5)
                    };
                default:
                    var c, d;
                    throw {
                        ...t,
                        message: null !== (d = ((c = new o.Hx(t)), c.getAnyErrorMessage())) && void 0 !== d ? d : g.intl.string(g.t.R0RpRU)
                    };
            }
        }
    };
function y() {
    i.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW' });
}
t.ZP = {
    fetchVerificationForm: E,
    updateVerificationForm: v,
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
    enableVerificationForm: I,
    submitVerificationForm: S,
    clearCoachmark: function () {
        i.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR' });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: r, reason: i, reasonOther: a, responses: s } = e;
        p.default.track(m.rMx.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: r.id,
            guild_id: t.id,
            reason: i,
            reason_other: a,
            responses: s
        });
    }
};
