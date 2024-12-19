t.d(n, {
    HZ: function () {
        return c;
    },
    kf: function () {
        return o;
    }
});
var r = t(192379),
    i = t(818083),
    a = t(987338);
let c = (0, i.B)({
        kind: 'user',
        id: '2024-12_confetti_potion',
        label: 'Confetti Potion Experiment',
        commonTriggerPoint: a.$P.CONNECTION_OPEN,
        defaultConfig: {
            canPurchase: !1,
            canSeeConfetti: !1,
            canSeeEducation: !1,
            canSeeUpsells: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Viewer Treatment',
                config: {
                    canPurchase: !1,
                    canSeeConfetti: !0,
                    canSeeEducation: !0,
                    canSeeUpsells: !1
                }
            },
            {
                id: 2,
                label: 'Purchaser Treatment',
                config: {
                    canPurchase: !0,
                    canSeeConfetti: !0,
                    canSeeEducation: !0,
                    canSeeUpsells: !0
                }
            }
        ]
    }),
    o = (e) => r.useMemo(() => c.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }), [e]).canSeeConfetti;
