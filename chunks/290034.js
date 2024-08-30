n.d(i, {
    Z: function () {
        return _;
    }
});
var o = n(735250);
n(470079);
var t = n(120356),
    r = n.n(t),
    a = n(297700),
    s = n(471885),
    l = n(981631),
    c = n(890422);
let d = {
        [l.Eu4.NONE]: c.iconBackgroundTierNone,
        [l.Eu4.TIER_1]: c.iconBackgroundTierOne,
        [l.Eu4.TIER_2]: c.iconBackgroundTierTwo,
        [l.Eu4.TIER_3]: c.iconBackgroundTierThree
    },
    u = {
        [l.Eu4.NONE]: c.iconTierNone,
        [l.Eu4.TIER_1]: c.iconTierOne,
        [l.Eu4.TIER_2]: c.iconTierTwo,
        [l.Eu4.TIER_3]: c.iconTierThree
    };
function _(e) {
    let { premiumTier: i, iconBackgroundClassName: n, iconClassName: t, size: l } = e;
    return (0, o.jsx)(a.Z, {
        className: r()(n, d[i]),
        size: l,
        children: (0, o.jsx)(s.Z, {
            tier: i,
            className: r()(t, c.boostedGuildIconGem, u[i])
        })
    });
}
