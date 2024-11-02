n.d(t, {
    u: function () {
        return i;
    }
});
var r = n(818083),
    a = n(987338);
let s = (0, r.B)({
        kind: 'user',
        id: '2024-08_shop_browse',
        label: 'Collectibles Shop Browse Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable new shop layout',
                config: { enabled: !0 }
            }
        ],
        commonTriggerPoint: a.$P.COLLECTIBLES_SHOP_OPEN
    }),
    i = (e) => s.useExperiment({ location: e }).enabled;
