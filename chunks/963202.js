n.d(t, {
    iN: function () {
        return a;
    }
});
var r = n(818083);
let i = (0, r.B)({
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
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return i.useExperiment({ location: e }, { autoTrackExposure: t }).enableM3Experience;
}
(0, r.B)({
    kind: 'user',
    id: '2024-06_clans_mobile_tags',
    label: 'Clans - Mobile',
    defaultConfig: { clanTagsVisible: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show tags on mobile',
            config: { clanTagsVisible: !0 }
        }
    ]
});
