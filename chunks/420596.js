r.d(n, {
    c: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2023-10_call_banner_bg',
    label: 'Call Banner Background Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function a(e, n) {
    return i.useExperiment({ location: n }, { autoTrackExposure: e });
}
