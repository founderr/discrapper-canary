n.d(t, {
    v: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-09_game_profile_feedback_flow',
    label: 'Game Profile Feedback Flow',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = r.useExperiment({ location: e }, { autoTrackExposure: t });
    return n;
}
