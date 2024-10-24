n.d(t, {
    t: function () {
        return i;
    }
});
var r = n(818083),
    s = n(987338);
let a = (0, r.B)({
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
        commonTriggerPoint: s.$P.COLLECTIBLES_SHOP_OPEN
    }),
    i = (e) => a.useExperiment({ location: e }).enabled;
