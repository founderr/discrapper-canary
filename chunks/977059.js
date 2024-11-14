e.d(t, {
    R: function () {
        return u;
    },
    S: function () {
        return r;
    }
});
let i = (0, e(987170).Z)({
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
function r(n) {
    let { location: t } = n;
    return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
}
function u(n) {
    let { location: t } = n;
    return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
}
