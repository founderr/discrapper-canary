r.d(n, {
    j: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2023-09_trigger_debugging_aa',
    label: 'trigger debugging aa mobile',
    defaultConfig: { inUse: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { inUse: !0 }
        }
    ]
});
function a(e) {
    let { autoTrackExposure: n = !1, location: r } = e;
    return i.useExperiment({ location: r }, { autoTrackExposure: n });
}
