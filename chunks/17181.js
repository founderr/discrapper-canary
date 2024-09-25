n.r(t),
    n.d(t, {
        default: function () {
            return m;
        },
        discardOnboardingPromise: function () {
            return p;
        },
        isOnboardingActiveForGuild: function () {
            return T;
        },
        openAndWaitForOnboarding: function () {
            return I;
        }
    });
var r = n(512722),
    i = n.n(r),
    a = n(481060),
    o = n(749210),
    s = n(703656),
    l = n(549817),
    u = n(745752),
    c = n(819553),
    d = n(679240),
    _ = n(981631),
    E = n(176505);
let f = {};
function h(e) {
    var t;
    null === (t = f[e]) || void 0 === t || t.call(f), (f[e] = null);
}
function p(e) {
    f[e] = null;
}
async function m(e) {
    let { guildId: t, returnChannelId: n, isPreview: r = !1 } = e;
    (0, a.closeAllModals)(), i()(null == f[t], 'should not double-join guilds');
    let l = await (0, o.V)(t);
    if (l.hasFeature(_.oNc.COMMUNITY)) {
        if (r) (0, u.I1)(t);
        else {
            if (!l.hasFeature(_.oNc.GUILD_ONBOARDING)) return;
            await (0, u.rK)(t);
        }
        c.ZP.shouldShowOnboarding(t) && (await I(t), null != n && (0, s.uL)(_.Z5c.CHANNEL(t, n)));
    }
}
function I(e) {
    return new Promise((t) => {
        (f[e] = t),
            (0, d.x)(e).then(() => {
                h(e), l.Z.finishOnboarding(e);
            }),
            (0, s.uL)(_.Z5c.CHANNEL(e, E.oC.GUILD_ONBOARDING));
    });
}
function T(e) {
    return null != f[e];
}
