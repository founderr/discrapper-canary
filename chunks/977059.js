e.d(t, {
    R: function () {
        return u;
    },
    S: function () {
        return i;
    }
});
let r = (0, e(987170).Z)({
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
function i(n) {
    let { location: t } = n;
    return r.useExperiment({ location: t }, { autoTrackExposure: !0 });
}
function u(n) {
    let { location: t } = n;
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
}
