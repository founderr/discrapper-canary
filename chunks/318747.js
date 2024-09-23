var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(780384),
    o = n(481060),
    l = n(410030),
    c = n(197115),
    d = n(474936),
    _ = n(689938),
    u = n(983712);
t.Z = (e) => {
    let { className: t, forceWhite: n, giftMessage: a, subscriptionTier: E, ...T } = e,
        I = (0, l.ZP)(),
        R = (0, i.wj)(I) || n,
        m = R ? o.ButtonColors.WHITE : o.ButtonColors.BRAND,
        g = E === d.Si.TIER_0 ? _.Z.Messages.GIFT_NITRO_TIER_0 : _.Z.Messages.GIFT_NITRO;
    return (0, s.jsx)(c.Z, {
        isGift: !0,
        color: m,
        look: o.ButtonLooks.OUTLINED,
        buttonText: g,
        giftMessage: a,
        className: r()(t, u.giftButton, R ? u.buttonWhite : u.buttonBrand),
        subscriptionTier: E,
        ...T
    });
};
