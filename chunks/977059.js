t.d(n, {
    R: function () {
        return l;
    },
    S: function () {
        return i;
    }
});
let r = (0, t(987170).Z)({
    kind: 'user',
    id: '2024-05_secure_frames_ui_rollout',
    label: 'Secure Frames Rollout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled.',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: n } = e;
    return r.useExperiment({ location: n }, { autoTrackExposure: !0 });
}
function l(e) {
    let { location: n } = e;
    return r.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
}
