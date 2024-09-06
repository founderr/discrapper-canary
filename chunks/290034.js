t.d(n, {
    Z: function () {
        return _;
    }
});
var r = t(735250);
t(470079);
var i = t(120356),
    o = t.n(i),
    l = t(297700),
    u = t(471885),
    s = t(981631),
    a = t(890422);
let c = {
        [s.Eu4.NONE]: a.iconBackgroundTierNone,
        [s.Eu4.TIER_1]: a.iconBackgroundTierOne,
        [s.Eu4.TIER_2]: a.iconBackgroundTierTwo,
        [s.Eu4.TIER_3]: a.iconBackgroundTierThree
    },
    d = {
        [s.Eu4.NONE]: a.iconTierNone,
        [s.Eu4.TIER_1]: a.iconTierOne,
        [s.Eu4.TIER_2]: a.iconTierTwo,
        [s.Eu4.TIER_3]: a.iconTierThree
    };
function _(e) {
    let { premiumTier: n, iconBackgroundClassName: t, iconClassName: i, size: s } = e;
    return (0, r.jsx)(l.Z, {
        className: o()(t, c[n]),
        size: s,
        children: (0, r.jsx)(u.Z, {
            tier: n,
            className: o()(i, a.boostedGuildIconGem, d[n])
        })
    });
}
