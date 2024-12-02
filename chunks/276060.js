e.d(t, {
    t: function () {
        return i;
    }
});
let r = (0, e(818083).B)({
    kind: 'user',
    id: '2024-09_likely_atoed_connections',
    label: 'Likely ATO Warning',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Likely ATO Warning',
            config: { enabled: !0 }
        }
    ]
});
function i(n) {
    let { location: t, autoTrackExposure: e = !0 } = n,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: e });
    return i;
}
