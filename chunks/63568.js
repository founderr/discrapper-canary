n.d(t, {
    K2: function () {
        return l;
    },
    jS: function () {
        return r;
    }
});
let i = (0, n(818083).B)({
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
function r(e, t) {
    return i.useExperiment(
        {
            guildId: e,
            location: t
        },
        { autoTrackExposure: !0 }
    ).enabled;
}
function l(e, t) {
    return i.getCurrentConfig(
        {
            guildId: e,
            location: t
        },
        { autoTrackExposure: !0 }
    ).enabled;
}
