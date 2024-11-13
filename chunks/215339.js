t.d(n, {
    j: function () {
        return i;
    }
});
let l = (0, t(818083).B)({
        kind: 'user',
        id: '2024-10_consumables_hd_streaming',
        label: 'Consumable HD Streaming Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Treatment',
                config: { enabled: !0 }
            }
        ]
    }),
    i = (e) => l.useExperiment({ location: e }).enabled;
