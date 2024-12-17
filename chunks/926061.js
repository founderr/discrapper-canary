r.d(n, {
    YP: function () {
        return o;
    },
    Zq: function () {
        return s;
    },
    l5: function () {
        return l;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2024-09_global_discovery_apps',
    label: 'Global Discovery Apps - Logged In',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { location: n } = e;
    return s.useExperiment({ location: n }, { autoTrackExposure: !1 }).enabled;
}
function l(e) {
    let { location: n } = e;
    return s.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }).enabled;
}
