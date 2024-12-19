t.d(n, {
    HZ: function () {
        return c;
    },
    kf: function () {
        return o;
    }
});
var i = t(192379),
    r = t(818083),
    a = t(987338);
let c = (0, r.B)({
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
    o = (e) => i.useMemo(() => c.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }), [e]).canSeeConfetti;
