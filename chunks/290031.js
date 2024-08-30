n.d(t, {
    O: function () {
        return i;
    }
});
var r = n(818083);
let i = (0, r.B)({
    kind: 'user',
    id: '2024-03_nitro_tenure_reward_card',
    label: 'Nitro Tenure Reward Card',
    defaultConfig: { enableNitroTenureRewardCard: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enables the nitro tenure reward card for users',
            config: { enableNitroTenureRewardCard: !0 }
        }
    ]
});
(0, r.B)({
    kind: 'user',
    id: '2024-08_nitro_tenure_rewards_backfill',
    label: 'Nitro Tenure Reward Backfill',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enables the nitro tenure reward backfill for the user',
            config: { enabled: !0 }
        }
    ]
});
