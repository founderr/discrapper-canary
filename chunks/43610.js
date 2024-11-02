n.d(t, {
    t: function () {
        return i;
    }
});
var r = n(818083),
    a = n(987338);
let s = (0, r.B)({
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
    i = (e) => s.useExperiment({ location: e }).enabled;
