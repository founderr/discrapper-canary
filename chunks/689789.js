r.d(n, {
    S: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-06_frecency_list_split',
    label: 'Frecency List Split',
    defaultConfig: { canSplitFrecencyList: !1 },
    treatments: [
        {
            id: 1,
            label: 'Split frecency emoji messages from reactions',
            config: { canSplitFrecencyList: !0 }
        }
    ]
});
function a(e) {
    let { location: n, autoTrackExposure: r } = e,
        { canSplitFrecencyList: a } = i.useExperiment({ location: n }, { autoTrackExposure: r });
    return { canSplitFrecencyList: a };
}
n.Z = i;
