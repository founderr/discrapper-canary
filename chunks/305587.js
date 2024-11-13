e.d(t, {
    Xs: function () {
        return a;
    }
});
let i = (0, e(818083).B)({
    kind: 'user',
    id: '2024-09_dm_mute_feedback',
    label: 'DM Mute Feedback Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable DM Mute Feedback Survey',
            config: { enabled: !0 }
        }
    ]
});
function a(n) {
    let { enabled: t } = i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
    return t;
}
