s.d(n, {
    aQ: function () {
        return a;
    }
}),
    s(47120);
var t = s(742280),
    l = s(818083),
    i = s(474936);
n.ZP = (0, l.B)({
    kind: 'user',
    id: '2022-02_multi_month_plans',
    label: 'Multi Month Plans',
    defaultConfig: { newPlans: [] },
    treatments: [
        {
            id: 1,
            label: '3 and 6 Month Plans',
            config: {
                newPlans: [i.Xh.PREMIUM_6_MONTH_TIER_2, i.Xh.PREMIUM_3_MONTH_TIER_2]
            }
        },
        {
            id: 2,
            label: '3 Month Plan Only',
            config: { newPlans: [i.Xh.PREMIUM_3_MONTH_TIER_2] }
        }
    ]
});
let r = new Set([t.S.US, t.S.CA]);
function a(e) {
    return null == e || r.has(e.country);
}
