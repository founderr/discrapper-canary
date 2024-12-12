r.r(n),
    r.d(n, {
        default: function () {
            return E;
        },
        discardOnboardingPromise: function () {
            return g;
        },
        isOnboardingActiveForGuild: function () {
            return I;
        },
        openAndWaitForOnboarding: function () {
            return v;
        }
    });
var i = r(512722),
    a = r.n(i),
    s = r(481060),
    o = r(749210),
    l = r(703656),
    u = r(549817),
    c = r(745752),
    d = r(819553),
    f = r(679240),
    _ = r(981631),
    h = r(176505);
let p = {};
function m(e) {
    var n;
    null === (n = p[e]) || void 0 === n || n.call(p), (p[e] = null);
}
function g(e) {
    p[e] = null;
}
async function E(e) {
    let { guildId: n, returnChannelId: r, isPreview: i = !1 } = e;
    (0, s.closeAllModals)(), a()(null == p[n], 'should not double-join guilds');
    let u = await (0, o.V)(n);
    if (u.hasFeature(_.oNc.COMMUNITY)) {
        if (i) (0, c.I1)(n);
        else {
            if (!u.hasFeature(_.oNc.GUILD_ONBOARDING)) return;
            await (0, c.rK)(n);
        }
        d.ZP.shouldShowOnboarding(n) && (await v(n), null != r && (0, l.uL)(_.Z5c.CHANNEL(n, r)));
    }
}
function v(e) {
    return new Promise((n) => {
        (p[e] = n),
            (0, f.x)(e).then(() => {
                m(e), u.Z.finishOnboarding(e);
            }),
            (0, l.uL)(_.Z5c.CHANNEL(e, h.oC.GUILD_ONBOARDING));
    });
}
function I(e) {
    return null != p[e];
}
