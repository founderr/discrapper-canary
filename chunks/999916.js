n.d(t, {
    P: function () {
        return r;
    }
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-11_global_discovery_algolia_search',
    label: 'Global Discovery Servers Search',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: r } = i.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return r;
}
