r.d(t, {
    x: function () {
        return i;
    }
});
var a = r(818083),
    n = r(987338);
let s = (0, a.B)({
        kind: 'user',
        id: '2024-09_shop_browse_band_switch',
        label: 'Collectibles Shop Band Switch',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable band switch for shop',
                config: { enabled: !0 }
            }
        ],
        commonTriggerPoint: n.$P.COLLECTIBLES_SHOP_OPEN
    }),
    i = (e) => s.useExperiment({ location: e }).enabled;
