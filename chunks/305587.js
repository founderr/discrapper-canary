t.d(n, {
    Xs: function () {
        return a;
    }
});
let i = (0, t(818083).B)({
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
function a(e) {
    let { enabled: n } = i.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return n;
}
