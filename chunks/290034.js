t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    o = t(297700),
    u = t(471885),
    a = t(981631),
    s = t(188662);
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
    let { premiumTier: n, iconBackgroundClassName: t, iconClassName: r, size: a } = e;
    return (0, i.jsx)(o.Z, {
        className: l()(t, c[n]),
        size: a,
        children: (0, i.jsx)(u.Z, {
            tier: n,
            className: l()(r, s.boostedGuildIconGem, d[n])
        })
    });
}
