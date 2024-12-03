t.d(n, {
    $K: function () {
        return _;
    },
    IG: function () {
        return C;
    },
    Nb: function () {
        return v;
    },
    Ts: function () {
        return p;
    },
    Wy: function () {
        return j;
    },
    di: function () {
        return D;
    }
}),
    t(47120);
var i = t(570140),
    l = t(668781),
    r = t(479531),
    s = t(45966),
    a = t(819553),
    o = t(637853),
    c = t(17181),
    d = t(962086),
    u = t(225675),
    m = t(592125),
    I = t(430824),
    h = t(823379),
    N = t(434404),
    g = t(889369),
    T = t(570961),
    f = t(84658),
    S = t(176505),
    x = t(290511),
    E = t(388032);
function _(e) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_STEP',
        step: e
    });
}
function v(e) {
    null != e &&
        i.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED',
            upsellType: e
        });
}
async function p(e, n) {
    let t = s.Z.getEnabled(e),
        a = Array.from(g.Z.editedDefaultChannelIds).filter((e) => null != m.Z.getChannel(e)),
        [c, d] = (0, o.d9)(e, [...a]);
    if (t && n === x.Un.ONBOARDING_DEFAULT && (d.length < x.md || c.length < x.X)) {
        l.Z.show({
            title: E.intl.string(E.t.iLdiqa),
            body: E.intl.string(E.t.JOT74e)
        });
        return;
    }
    try {
        await (0, T.n_)(e, { mode: n });
    } catch (t) {
        var u;
        let { fieldName: e, error: n } = null !== (u = new r.Z(t).getAnyErrorMessageAndField()) && void 0 !== u ? u : {};
        l.Z.show({
            title: E.intl.string(E.t.iLdiqa),
            body: [e, n].filter(h.lm).join(': ')
        });
    }
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_SET_MODE',
        guildId: e,
        mode: n
    });
}
function C(e, n) {
    let t = f.xh.findIndex((e) => e === n);
    if (-1 !== t && t !== f.xh.length - 1) _(f.xh[t + 1]);
}
function j(e, n) {
    let t = f.xh.findIndex((e) => e === n);
    if (-1 !== t && 0 !== t) _(f.xh[t - 1]);
}
async function D(e) {
    let n = I.Z.getGuild(e);
    null != n &&
        (N.Z.close(),
        (0, d.iD)(n.id, {
            type: u.z.NEW_MEMBER,
            roles: {},
            optInChannels: new Set(),
            optInEnabled: !1,
            onboardingResponses: new Set(),
            onboardingEnabled: !0,
            memberOptions: {
                isPending: n.hasVerificationGate(),
                flags: 0
            }
        }),
        a.ZP.resetOnboardingStatus(n.id),
        (0, c.discardOnboardingPromise)(n.id),
        await (0, c.default)({
            guildId: n.id,
            isPreview: !0,
            returnChannelId: S.oC.GUILD_HOME
        }));
}
