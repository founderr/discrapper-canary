t.d(n, {
    h: function () {
        return l;
    },
    r: function () {
        return r;
    }
});
let o = (0, t(818083).B)({
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
function l(e) {
    let { location: n, autoTrackExposure: t = !0 } = e,
        { enabled: l } = o.useExperiment({ location: n }, { autoTrackExposure: t });
    return l;
}
function r(e) {
    let { location: n } = e;
    return o.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }).enabled;
}
