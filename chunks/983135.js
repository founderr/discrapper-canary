t.d(n, {
    $K: function () {
        return v;
    },
    IG: function () {
        return j;
    },
    Nb: function () {
        return p;
    },
    Ts: function () {
        return C;
    },
    Wy: function () {
        return D;
    },
    di: function () {
        return O;
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
    d = t(621923),
    u = t(962086),
    m = t(225675),
    I = t(592125),
    h = t(430824),
    N = t(823379),
    g = t(434404),
    T = t(889369),
    f = t(570961),
    S = t(84658),
    x = t(176505),
    E = t(290511),
    _ = t(388032);
function v(e) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_STEP',
        step: e
    });
}
function p(e) {
    null != e &&
        i.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED',
            upsellType: e
        });
}
async function C(e, n) {
    let t = s.Z.getEnabled(e),
        a = Array.from(T.Z.editedDefaultChannelIds).filter((e) => null != I.Z.getChannel(e)),
        [c, d] = (0, o.d9)(e, [...a]);
    if (t && n === E.Un.ONBOARDING_DEFAULT && (d.length < E.md || c.length < E.X)) {
        l.Z.show({
            title: _.intl.string(_.t.iLdiqa),
            body: _.intl.string(_.t.JOT74e)
        });
        return;
    }
    try {
        await (0, f.n_)(e, { mode: n });
    } catch (t) {
        var u;
        let { fieldName: e, error: n } = null !== (u = new r.Z(t).getAnyErrorMessageAndField()) && void 0 !== u ? u : {};
        l.Z.show({
            title: _.intl.string(_.t.iLdiqa),
            body: [e, n].filter(N.lm).join(': ')
        });
    }
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_SET_MODE',
        guildId: e,
        mode: n
    });
}
function j(e, n) {
    let { homeSettingsEnabled: t } = (0, d.l6)(e),
        i = S.xh.findIndex((e) => e === n);
    if (-1 !== i && i !== S.xh.length - 1) {
        if (!t && S.xh[i + 1] === S.PG.HOME_SETTINGS) {
            v(S.xh[i + 2]);
            return;
        }
        v(S.xh[i + 1]);
    }
}
function D(e, n) {
    let { homeSettingsEnabled: t } = (0, d.l6)(e),
        i = S.xh.findIndex((e) => e === n);
    if (-1 !== i && 0 !== i) {
        if (!t && S.xh[i - 1] === S.PG.HOME_SETTINGS) {
            v(S.xh[i - 2]);
            return;
        }
        v(S.xh[i - 1]);
    }
}
async function O(e) {
    let n = h.Z.getGuild(e);
    null != n &&
        (g.Z.close(),
        (0, u.iD)(n.id, {
            type: m.z.NEW_MEMBER,
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
            returnChannelId: x.oC.GUILD_HOME
        }));
}
