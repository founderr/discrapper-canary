n.d(t, {
    t: function () {
        return s;
    }
});
var r = n(818083),
    a = n(987338);
let i = (0, r.B)({
        kind: 'user',
        id: '2024-10_shop_browse_spookynight_switch',
        label: 'Collectibles Shop SpookyNight Switch',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable spooky night switch for shop',
                config: { enabled: !0 }
            }
        ],
        commonTriggerPoint: a.$P.COLLECTIBLES_SHOP_OPEN
    }),
    s = (e) => i.useExperiment({ location: e }).enabled;
