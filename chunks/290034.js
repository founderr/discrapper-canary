n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(297700),
    s = n(471885),
    l = n(981631),
    u = n(188662);
let c = {
        [l.Eu4.NONE]: u.iconBackgroundTierNone,
        [l.Eu4.TIER_1]: u.iconBackgroundTierOne,
        [l.Eu4.TIER_2]: u.iconBackgroundTierTwo,
        [l.Eu4.TIER_3]: u.iconBackgroundTierThree
    },
    d = {
        [l.Eu4.NONE]: u.iconTierNone,
        [l.Eu4.TIER_1]: u.iconTierOne,
        [l.Eu4.TIER_2]: u.iconTierTwo,
        [l.Eu4.TIER_3]: u.iconTierThree
    };
function _(e) {
    let { premiumTier: t, iconBackgroundClassName: n, iconClassName: i, size: l } = e;
    return (0, r.jsx)(o.Z, {
        className: a()(n, c[t]),
        size: l,
        children: (0, r.jsx)(s.Z, {
            tier: t,
            className: a()(i, u.boostedGuildIconGem, d[t])
        })
    });
}
