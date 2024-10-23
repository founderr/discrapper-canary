r.d(t, {
    t: function () {
        return i;
    }
});
var s = r(818083),
    n = r(987338);
let a = (0, s.B)({
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
        commonTriggerPoint: n.$P.COLLECTIBLES_SHOP_OPEN
    }),
    i = (e) => a.useExperiment({ location: e }).enabled;
