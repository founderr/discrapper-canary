i.d(n, {
    Z: function () {
        return _;
    }
});
var t = i(735250);
i(470079);
var o = i(120356),
    a = i.n(o),
    r = i(297700),
    l = i(471885),
    s = i(981631),
    c = i(188662);
let d = {
        [s.Eu4.NONE]: c.iconBackgroundTierNone,
        [s.Eu4.TIER_1]: c.iconBackgroundTierOne,
        [s.Eu4.TIER_2]: c.iconBackgroundTierTwo,
        [s.Eu4.TIER_3]: c.iconBackgroundTierThree
    },
    u = {
        [s.Eu4.NONE]: c.iconTierNone,
        [s.Eu4.TIER_1]: c.iconTierOne,
        [s.Eu4.TIER_2]: c.iconTierTwo,
        [s.Eu4.TIER_3]: c.iconTierThree
    };
function _(e) {
    let { premiumTier: n, iconBackgroundClassName: i, iconClassName: o, size: s } = e;
    return (0, t.jsx)(r.Z, {
        className: a()(i, d[n]),
        size: s,
        children: (0, t.jsx)(l.Z, {
            tier: n,
            className: a()(o, c.boostedGuildIconGem, u[n])
        })
    });
}
