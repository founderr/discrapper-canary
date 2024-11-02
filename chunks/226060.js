n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var a = n(512722),
    s = n.n(a),
    r = n(399606),
    l = n(481060),
    o = n(607070),
    c = n(430824),
    u = n(506071),
    d = n(267101),
    _ = n(240864),
    E = n(57949),
    I = n(400916),
    m = n(689938);
function f(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: a } = e,
        f = (0, r.e7)([_.Z], () => _.Z.getGuildProduct(n)),
        T = (0, r.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        h = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        N = (0, u.n)();
    if ((s()(null != T, 'guild cannot be null'), s()(null != f, 'guildProductListing cannot be null'), (0, d.SO)(T)))
        return (0, i.jsx)(l.Tooltip, {
            text: m.Z.Messages.GUILD_PRODUCT_PURCHASE_DISABLED_TOOLTIP,
            children: (e) =>
                (0, i.jsx)(l.Button, {
                    ...e,
                    color: l.Button.Colors.BRAND,
                    disabled: !0,
                    children: m.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
                })
        });
    if (!f.has_entitlement)
        return (0, i.jsx)(l.ShinyButton, {
            shineSize: l.ShinyButton.ShineSizes.SMALL,
            pauseAnimation: h || !N,
            onClick: () =>
                (0, E.z)({
                    guildProductListing: f,
                    guildId: T.id,
                    sourceAnalyticsLocations: a
                }),
            children: m.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
        });
    return null != f.attachments
        ? (0, i.jsx)(I.Z, {
              guildId: T.id,
              productId: f.id
          })
        : (0, i.jsx)(l.Button, {
              color: l.Button.Colors.PRIMARY,
              disabled: !0,
              children: m.Z.Messages.GUILD_PRODUCT_CARD_PURCHASED
          });
}
