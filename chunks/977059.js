e.d(n, {
    R: function () {
        return o;
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
function r(t) {
    let { location: n } = t;
    return i.useExperiment({ location: n }, { autoTrackExposure: !0 });
}
function o(t) {
    let { location: n } = t;
    return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
}
