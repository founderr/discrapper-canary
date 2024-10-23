r.d(t, {
    R: function () {
        return n;
    }
});
let s = (0, r(818083).B)({
        kind: 'user',
        id: '2024-07_reveal_mystery_card',
        label: 'Shop Reveal Mystery Card',
        defaultConfig: { revealed: !1 },
        treatments: [
            {
                id: 1,
                label: 'Force reveal mystery card in shop',
                config: { revealed: !0 }
            }
        ]
    }),
    n = (e) => s.useExperiment({ location: e });
