n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(297700),
    u = n(471885),
    a = n(981631),
    s = n(188662);
let c = {
        [a.Eu4.NONE]: s.iconBackgroundTierNone,
        [a.Eu4.TIER_1]: s.iconBackgroundTierOne,
        [a.Eu4.TIER_2]: s.iconBackgroundTierTwo,
        [a.Eu4.TIER_3]: s.iconBackgroundTierThree
    },
    d = {
        [a.Eu4.NONE]: s.iconTierNone,
        [a.Eu4.TIER_1]: s.iconTierOne,
        [a.Eu4.TIER_2]: s.iconTierTwo,
        [a.Eu4.TIER_3]: s.iconTierThree
    };
function f(e) {
    let { premiumTier: t, iconBackgroundClassName: n, iconClassName: r, size: a } = e;
    return (0, i.jsx)(o.Z, {
        className: l()(n, c[t]),
        size: a,
        children: (0, i.jsx)(u.Z, {
            tier: t,
            className: l()(r, s.boostedGuildIconGem, d[t])
        })
    });
}
