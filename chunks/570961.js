t.d(n, {
    $y: function () {
        return E;
    },
    Kk: function () {
        return T;
    },
    NB: function () {
        return g;
    },
    en: function () {
        return p;
    },
    fi: function () {
        return f;
    },
    n_: function () {
        return _;
    },
    rS: function () {
        return x;
    },
    tS: function () {
        return S;
    }
}),
    t(411104),
    t(47120);
var i = t(544891),
    l = t(570140),
    r = t(668781),
    s = t(881052),
    a = t(339085),
    o = t(107862),
    c = t(592125),
    d = t(430824),
    u = t(823379),
    m = t(208665),
    I = t(981631),
    h = t(290511),
    N = t(388032);
function g() {
    l.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET' });
}
function T(e, n, t) {
    S(
        e,
        m.Z.editedOnboardingPrompts.map((e) =>
            e.id === n
                ? {
                      ...e,
                      ...t
                  }
                : e
        )
    );
}
function f(e, n) {
    S(
        e,
        m.Z.editedOnboardingPrompts.filter((e) => e.id !== n)
    );
}
function S(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (
        (l.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT',
            prompts: n
        }),
        t)
    ) {
        let t = n.map((t) => v(e, n, t));
        l.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS',
            errors: t
        });
    }
}
async function x(e, n) {
    let { dropdownsAllowed: t } = (0, o.RM)(e.id);
    if (!m.Z.hasChanges()) return;
    let i = m.Z.editedOnboardingPrompts;
    null != n && n.ignoreDefaultPrompt && 1 === i.length && (0, h.RF)(i[0]) && (i = []);
    let I = i.map((n) => {
            let i = n.options.map((n) => {
                let t = null == n.roleIds ? n.roleIds : n.roleIds.filter((n) => null != d.Z.getRole(e.id, n)),
                    i = null == n.channelIds ? n.channelIds : n.channelIds.filter((e) => null != c.Z.getChannel(e));
                return {
                    ...n,
                    roleIds: t,
                    channelIds: i,
                    emoji: (function (e) {
                        var n;
                        if (null == e) return;
                        if ((null === (n = e.emoji) || void 0 === n ? void 0 : n.id) == null) return e.emoji;
                        if (null != a.ZP.getCustomEmojiById(e.emoji.id)) return e.emoji;
                    })(n)
                };
            });
            return {
                ...n,
                options: i,
                type: i.length >= h.fY && t ? h.FN.DROPDOWN : h.FN.MULTIPLE_CHOICE
            };
        }),
        g = I.filter((e) => e.inOnboarding),
        T = I.filter((e) => !0 !== e.inOnboarding),
        f = I.map((n) => v(e, I, n));
    if (f.filter(u.lm).length > 0)
        throw (
            (l.Z.dispatch({
                type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED',
                errors: f
            }),
            Error('failed to locally validate prompts'))
        );
    if (g.length > h.b3)
        throw (
            (r.Z.show({
                title: N.intl.string(N.t.iLdiqa),
                body: N.intl.formatToPlainString(N.t['cTb/rq'], { numQuestions: h.b3 })
            }),
            l.Z.dispatch({
                type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED',
                errors: f
            }),
            Error('too many prompts in onboarding'))
        );
    let S = [...g, ...T];
    l.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT' });
    try {
        await _(e.id, { prompts: S.map(h.dr) }),
            l.Z.dispatch({
                type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS',
                guildId: e.id,
                updates: { prompts: S }
            });
    } catch (t) {
        var x;
        let { fieldName: e, error: n } = null !== (x = new s.Hx(t).getAnyErrorMessageAndField()) && void 0 !== x ? x : {};
        throw (
            (r.Z.show({
                title: N.intl.string(N.t.iLdiqa),
                body: [e, n].filter(u.lm).join(': ')
            }),
            l.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED' }),
            Error('failed to save prompts'))
        );
    }
}
async function E(e, n) {
    l.Z.dispatch({
        type: 'GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE',
        guildId: e,
        updates: { enabled: n }
    });
    try {
        await _(e, { enabled: n });
    } catch (i) {
        var t;
        let { fieldName: e, error: n } = null !== (t = new s.Hx(i).getAnyErrorMessageAndField()) && void 0 !== t ? t : {};
        r.Z.show({
            title: N.intl.string(N.t.iLdiqa),
            body: [e, n].filter(u.lm).join(': ')
        });
    }
}
async function _(e, n) {
    await i.tn.put({
        url: I.ANM.GUILD_ONBOARDING(e),
        body: n
    });
}
function v(e, n, t) {
    let i = { optionErrors: [] },
        l = !1;
    return t.title.length <= 0 && ((i.title = N.intl.string(N.t.h8Hg1d)), (l = !0)), t.options.length <= 0 && ((i.options = N.intl.string(N.t['64tF+f'])), (l = !0)), t.inOnboarding && n.filter((e) => e.inOnboarding).length > h.b3 && ((i.config = N.intl.formatToPlainString(N.t['cTb/rq'], { numQuestions: h.b3 })), (l = !0)), (i.optionErrors = t.options.map((i) => p(e, n, t, i))), (l = l || i.optionErrors.some((e) => null != e)) ? i : null;
}
function p(e, n, t, i) {
    var l, r, s;
    if (t.singleSelect) {
        let e = new Set(null !== (l = i.roleIds) && void 0 !== l ? l : []);
        for (let i of n)
            if (i.id !== t.id) {
                for (let n of i.options) if (null != n.roleIds && n.roleIds.some((n) => e.has(n))) return N.intl.string(N.t.rKxyvb);
            }
    }
    let a = (null !== (r = i.roleIds) && void 0 !== r ? r : []).filter((n) => null != d.Z.getRole(e.id, n)),
        o = (null !== (s = i.channelIds) && void 0 !== s ? s : []).filter((e) => null != c.Z.getChannel(e));
    return 0 === a.length && 0 === o.length ? N.intl.string(N.t.F6SUWF) : null;
}
