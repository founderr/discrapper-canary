var s = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    i = n(780384),
    l = n(481060),
    o = n(410030),
    c = n(197115),
    _ = n(474936),
    d = n(689938),
    E = n(983712);
t.Z = (e) => {
    let { className: t, forceWhite: n, giftMessage: a, subscriptionTier: u, ...T } = e,
        I = (0, o.ZP)(),
        R = (0, i.wj)(I) || n,
        g = R ? l.ButtonColors.WHITE : l.ButtonColors.BRAND,
        N = u === _.Si.TIER_0 ? d.Z.Messages.GIFT_NITRO_TIER_0 : d.Z.Messages.GIFT_NITRO;
    return (0, s.jsx)(c.Z, {
        isGift: !0,
        color: g,
        look: l.ButtonLooks.OUTLINED,
        buttonText: N,
        giftMessage: a,
        className: r()(t, E.giftButton, R ? E.buttonWhite : E.buttonBrand),
        subscriptionTier: u,
        ...T
    });
};
