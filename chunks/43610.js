s.d(t, {
    t: function () {
        return i;
    }
});
var a = s(818083),
    r = s(987338);
let n = (0, a.B)({
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
        commonTriggerPoint: r.$P.COLLECTIBLES_SHOP_OPEN
    }),
    i = (e) => n.useExperiment({ location: e }).enabled;
