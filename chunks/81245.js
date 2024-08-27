i.d(t, {
    M: function () {
        return c;
    }
});
var n = i(442837),
    o = i(987170),
    a = i(594174),
    l = i(111361),
    s = i(474936);
let r = (0, o.Z)({
    id: '2024-08_premium_user_profile_upsell_desktop',
    label: 'User Profile Upsell',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function c(e) {
    let t = (0, n.e7)([a.default], () => l.ZP.isPremium(a.default.getCurrentUser(), s.p9.TIER_2));
    return r.useExperiment(
        { location: e },
        {
            autoTrackExposure: !t,
            disable: t
        }
    ).enabled;
}
