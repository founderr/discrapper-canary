n.d(t, {
    Y: function () {
        return l;
    }
});
var i = n(818083),
    r = n(987338);
let l = (0, i.B)({
    kind: 'user',
    id: '2024-10_mobile_referral_trial_recipient',
    label: 'Referral Recipient Experiment',
    commonTriggerPoint: r.$P.CONNECTION_OPEN_MOBILE,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Referral Recipient Experiment on Mobile',
            config: { enabled: !0 }
        }
    ]
});
