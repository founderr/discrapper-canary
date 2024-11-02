e.d(n, {
    zF: function () {
        return r;
    }
});
let i = (0, e(818083).B)({
    kind: 'user',
    id: '2024-05_throughline_care',
    label: 'Throughline Care Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable throughline care links',
            config: { enabled: !0 }
        }
    ]
});
function r(t) {
    return i.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
