n.d(t, {
    n: function () {
        return r;
    }
});
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-12_shop_home_experiment',
        label: 'Shop Home API Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Use Shop Home API',
                config: { enabled: !0 }
            }
        ]
    }),
    r = (e) => i.useExperiment({ location: e }).enabled;
