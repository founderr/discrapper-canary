n.d(i, {
    u: function () {
        return l;
    }
});
let E = (0, n(818083).B)({
    id: '2024-11_soundmoji_rendering',
    label: 'Render soundmojis',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function l(t) {
    let { location: i } = t;
    return E.getCurrentConfig({ location: i }, { autoTrackExposure: !1 }).enabled;
}
