r.d(n, {
    A: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-03_clickstream_analytics',
    label: 'Clickstream Analytics',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Clickstream Analytics',
            config: { enabled: !0 }
        }
    ]
});
function a() {
    let { enabled: e } = i.getCurrentConfig({ location: 'clickstream' });
    return e;
}
