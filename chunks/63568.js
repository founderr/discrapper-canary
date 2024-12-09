n.d(t, {
    K2: function () {
        return a;
    },
    jS: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'guild',
    id: '2024-11_member_verification_rollout',
    label: 'Member verification rollout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e, t) {
    return r.useExperiment(
        {
            guildId: e,
            location: t
        },
        { autoTrackExposure: !0 }
    ).enabled;
}
function a(e, t) {
    return r.getCurrentConfig(
        {
            guildId: e,
            location: t
        },
        { autoTrackExposure: !0 }
    ).enabled;
}
