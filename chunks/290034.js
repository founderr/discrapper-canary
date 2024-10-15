t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(735250);
t(470079);
var r = t(120356),
    l = t.n(r),
    o = t(297700),
    u = t(471885),
    s = t(981631),
    a = t(188662);
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
    let { premiumTier: n, iconBackgroundClassName: t, iconClassName: r, size: s } = e;
    return (0, i.jsx)(o.Z, {
        className: l()(t, c[n]),
        size: s,
        children: (0, i.jsx)(u.Z, {
            tier: n,
            className: l()(r, a.boostedGuildIconGem, d[n])
        })
    });
}
