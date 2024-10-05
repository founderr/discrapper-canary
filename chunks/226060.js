n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(735250);
n(470079);
var a = n(512722),
    s = n.n(a),
    l = n(399606),
    r = n(481060),
    o = n(607070),
    c = n(430824),
    d = n(506071),
    u = n(267101),
    _ = n(240864),
    E = n(57949),
    I = n(400916),
    m = n(689938);
function T(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: a } = e,
        T = (0, l.e7)([_.Z], () => _.Z.getGuildProduct(n)),
        N = (0, l.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        h = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        C = (0, d.n)();
    if ((s()(null != N, 'guild cannot be null'), s()(null != T, 'guildProductListing cannot be null'), (0, u.SO)(N)))
        return (0, i.jsx)(r.Tooltip, {
            text: m.Z.Messages.GUILD_PRODUCT_PURCHASE_DISABLED_TOOLTIP,
            children: (e) =>
                (0, i.jsx)(r.Button, {
                    ...e,
                    color: r.Button.Colors.BRAND,
                    disabled: !0,
                    children: m.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
                })
        });
    if (!T.has_entitlement)
        return (0, i.jsx)(r.ShinyButton, {
            shineSize: r.ShinyButton.ShineSizes.SMALL,
            pauseAnimation: h || !C,
            onClick: () =>
                (0, E.z)({
                    guildProductListing: T,
                    guildId: N.id,
                    sourceAnalyticsLocations: a
                }),
            children: m.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
        });
    return null != T.attachments
        ? (0, i.jsx)(I.Z, {
              guildId: N.id,
              productId: T.id
          })
        : (0, i.jsx)(r.Button, {
              color: r.Button.Colors.PRIMARY,
              disabled: !0,
              children: m.Z.Messages.GUILD_PRODUCT_CARD_PURCHASED
          });
}
