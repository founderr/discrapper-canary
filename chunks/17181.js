n.r(t),
    n.d(t, {
        default: function () {
            return m;
        },
        discardOnboardingPromise: function () {
            return h;
        },
        isOnboardingActiveForGuild: function () {
            return E;
        },
        openAndWaitForOnboarding: function () {
            return g;
        }
    });
var r = n(512722),
    i = n.n(r),
    a = n(481060),
    s = n(749210),
    o = n(703656),
    l = n(549817),
    u = n(745752),
    c = n(819553),
    d = n(679240),
    f = n(981631),
    _ = n(176505);
let p = {};
function h(e) {
    p[e] = null;
}
async function m(e) {
    let { guildId: t, returnChannelId: n, isPreview: r = !1 } = e;
    (0, a.closeAllModals)(), i()(null == p[t], 'should not double-join guilds');
    let l = await (0, s.V)(t);
    if (l.hasFeature(f.oNc.COMMUNITY)) {
        if (r) (0, u.I1)(t);
        else {
            if (!l.hasFeature(f.oNc.GUILD_ONBOARDING)) return;
            await (0, u.rK)(t);
        }
        c.ZP.shouldShowOnboarding(t) && (await g(t), null != n && (0, o.uL)(f.Z5c.CHANNEL(t, n)));
    }
}
function g(e) {
    return new Promise((t) => {
        (p[e] = t),
            (0, d.x)(e).then(() => {
                var t, n;
                null === (n = p[(t = e)]) || void 0 === n || n.call(p), (p[t] = null), l.Z.finishOnboarding(e);
            }),
            (0, o.uL)(f.Z5c.CHANNEL(e, _.oC.GUILD_ONBOARDING));
    });
}
function E(e) {
    return null != p[e];
}
