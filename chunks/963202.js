n.d(t, {
    i: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
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
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return r.useExperiment({ location: e }, { autoTrackExposure: t }).enableM3Experience;
}
