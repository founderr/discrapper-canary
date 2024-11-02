n.d(t, {
    m: function () {
        return a;
    }
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-09_shop_browse_backend',
        label: 'Collectibles Shop Home Backend',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'use backend data',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (e) => r.useExperiment({ location: e }).enabled;
