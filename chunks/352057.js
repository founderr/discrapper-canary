n.d(t, {
    h: function () {
        return i;
    },
    r: function () {
        return a;
    }
});
let o = (0, n(818083).B)({
    kind: 'user',
    id: '2024-09_global_discovery_apps',
    label: 'Global Discovery Apps',
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
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = o.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
function a(e) {
    let { location: t } = e;
    return o.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
