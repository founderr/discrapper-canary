n.d(t, {
    I1: function () {
        return T;
    },
    eM: function () {
        return m;
    },
    rK: function () {
        return I;
    },
    rj: function () {
        return p;
    }
});
var r = n(789020);
var i = n(544891),
    a = n(570140),
    o = n(367907),
    s = n(314897),
    l = n(271383),
    u = n(430824),
    c = n(626135),
    d = n(630388),
    _ = n(45966),
    E = n(290511),
    f = n(981631),
    h = n(372897);
function p(e) {
    c.default.track(f.rMx.GUILD_ONBOARDING_LOADED, {
        ...(0, o.hH)(e),
        has_new_prompts: !1,
        number_of_prompts: 0
    });
}
function m(e) {
    return (
        a.Z.dispatch({
            type: 'GUILD_ONBOARDING_PROMPTS_FETCH_START',
            guildId: e
        }),
        i.tn.get({ url: f.ANM.GUILD_ONBOARDING(e) }).then(
            (t) => {
                let { body: n } = t,
                    r = (0, E.cf)(n);
                return a.Z.dispatch({
                    type: 'GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS',
                    guildId: e,
                    ...r
                }).then(() => r.prompts);
            },
            (t) => (
                a.Z.dispatch({
                    type: 'GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE',
                    guildId: e
                }),
                t
            )
        )
    );
}
async function I(e) {
    var t, n;
    let r = s.default.getId(),
        i = (0, d.yE)(null !== (n = null === (t = l.ZP.getMember(e, r)) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0, h.q.COMPLETED_ONBOARDING),
        a = u.Z.getGuild(e);
    if (null == a || !a.hasFeature(f.oNc.GUILD_ONBOARDING)) return Promise.resolve();
    let o = _.Z.shouldFetchPrompts(e),
        c = _.Z.getOnboardingPrompts(e);
    if (!o && c.length > 0) return c.every((e) => !e.inOnboarding) ? (S(e), Promise.resolve()) : (!i && T(e), Promise.resolve());
    let E = await m(e);
    return Array.isArray(E) && E.every((e) => !e.inOnboarding) ? (S(e), Promise.resolve()) : (!i && T(e), E);
}
function T(e) {
    a.Z.dispatch({
        type: 'GUILD_ONBOARDING_START',
        guildId: e
    });
}
let g = -2;
function S(e) {
    c.default.track(f.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
        ...(0, o.hH)(e),
        step: g,
        required: !0
    }),
        c.default.track(f.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
            ...(0, o.hH)(e),
            step: g,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0
        });
}
