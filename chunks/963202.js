r.d(n, {
    i: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-07_rapidash_m3_joiners',
    label: 'Rapidash M3 Users',
    defaultConfig: { enableM3Experience: !1 },
    treatments: [
        {
            id: 1,
            label: 'Targeted users',
            config: { enableM3Experience: !0 }
        }
    ]
});
function a(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return i.useExperiment({ location: e }, { autoTrackExposure: n }).enableM3Experience;
}
