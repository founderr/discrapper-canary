n.d(t, {
    R$: function () {
        return f;
    },
    ZP: function () {
        return m;
    }
});
var i = n(913527),
    r = n.n(i),
    s = n(990547),
    l = n(570140),
    a = n(479531),
    o = n(771308),
    c = n(314897),
    u = n(626135),
    d = n(573261),
    h = n(959776),
    p = n(981631),
    g = n(723359);
function m(e) {
    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
    return f({
        ...i,
        invite: t,
        giftCodeSKUId: n
    });
}
function f(e) {
    let { email: t, phoneToken: n, username: i, globalName: m, consent: f, password: x, guildTemplateCode: _, birthday: E, invite: v = null, giftCodeSKUId: I = null, multiStep: b = !1, promoEmailConsent: N = null, usedUsernameSuggestion: C = null } = e;
    return (
        l.Z.dispatch({
            type: 'REGISTER',
            birthday: b ? E : null
        }),
        null != E &&
            ((0, h.Z)(E, p.jXE.REGISTER),
            u.default.track(p.rMx.AGE_GATE_ACTION, {
                source: g.L0.REGISTER,
                action: g.Al.AGE_GATE_SUBMITTED
            }),
            !(function (e) {
                let t;
                let n = r()().diff(e, 'years');
                !(n < 13) && ((t = n >= 13 && n <= 17 ? '13-17' : n >= 18 && n <= 22 ? '18-22' : '23+'), u.default.track(p.rMx.USER_AGE_SUBMITTED, { age_bucket: t }));
            })(E)),
        d.Z.post({
            url: p.ANM.REGISTER,
            body: {
                fingerprint: c.default.getFingerprint(),
                email: t,
                username: i,
                global_name: m,
                password: x,
                invite: v,
                consent: f,
                phone_token: n,
                date_of_birth: null == E ? void 0 : E.format('YYYY-MM-DD'),
                gift_code_sku_id: I,
                guild_template_code: _,
                promotional_email_opt_in: null == N ? void 0 : N.checked
            },
            trackedActionData: {
                event: s.NetworkActionNames.USER_REGISTER,
                properties: {
                    invite_code: v,
                    used_username_suggestion: C,
                    promotional_email_opt_in: null == N ? void 0 : N.checked,
                    promotional_email_pre_checked: null == N ? void 0 : N.preChecked,
                    was_unique_username: !0
                }
            },
            rejectWithError: !1
        }).then(
            (e) => {
                l.Z.dispatch({
                    type: 'REGISTER_SUCCESS',
                    token: e.body.token
                }),
                    u.default.track(p.rMx.AGE_GATE_ACTION, {
                        source: g.L0.REGISTER,
                        action: g.Al.AGE_GATE_SUCCESS
                    });
            },
            (e) => {
                let t = new a.Z(e);
                throw (
                    (l.Z.dispatch({
                        type: 'REGISTER_FAILURE',
                        error: t
                    }),
                    null != t.getFieldErrors('date_of_birth') && o.wE(g.L0.REGISTER),
                    u.default.track(p.rMx.REGISTER_SUBMIT_ERRORED, {
                        is_unique_username_registration: !0,
                        email_error_reason: t.getFirstFieldErrorMessage('email'),
                        phone_error_reason: t.getFirstFieldErrorMessage('phone'),
                        password_error_reason: t.getFirstFieldErrorMessage('password'),
                        username_error_reason: t.getFirstFieldErrorMessage('username'),
                        global_name_error_reason: t.getFirstFieldErrorMessage('global_name'),
                        date_of_birth_error_reason: t.getFirstFieldErrorMessage('date_of_birth')
                    }),
                    e)
                );
            }
        )
    );
}
