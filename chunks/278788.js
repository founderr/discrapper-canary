n.d(t, {
    HZ: function () {
        return l;
    }
}),
    n(192379);
var i = n(818083),
    r = n(987338);
let l = (0, i.B)({
    kind: 'user',
    id: '2024-12_confetti_potion',
    label: 'Confetti Potion Experiment',
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
});
