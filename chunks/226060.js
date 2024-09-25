n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var i = n(512722),
    a = n.n(i),
    o = n(399606),
    s = n(481060),
    l = n(607070),
    u = n(430824),
    c = n(506071),
    d = n(267101),
    _ = n(240864),
    E = n(57949),
    f = n(400916),
    h = n(689938);
function p(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: i } = e,
        p = (0, o.e7)([_.Z], () => _.Z.getGuildProduct(n)),
        m = (0, o.e7)([u.Z], () => u.Z.getGuild(t), [t]),
        I = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        T = (0, c.n)();
    if ((a()(null != m, 'guild cannot be null'), a()(null != p, 'guildProductListing cannot be null'), (0, d.SO)(m)))
        return (0, r.jsx)(s.Tooltip, {
            text: h.Z.Messages.GUILD_PRODUCT_PURCHASE_DISABLED_TOOLTIP,
            children: (e) =>
                (0, r.jsx)(s.Button, {
                    ...e,
                    color: s.Button.Colors.BRAND,
                    disabled: !0,
                    children: h.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
                })
        });
    if (p.has_entitlement)
        return null != p.attachments
            ? (0, r.jsx)(f.Z, {
                  guildId: m.id,
                  productId: p.id
              })
            : (0, r.jsx)(s.Button, {
                  color: s.Button.Colors.PRIMARY,
                  disabled: !0,
                  children: h.Z.Messages.GUILD_PRODUCT_CARD_PURCHASED
              });
    {
        let e = () =>
            (0, E.z)({
                guildProductListing: p,
                guildId: m.id,
                sourceAnalyticsLocations: i
            });
        return (0, r.jsx)(s.ShinyButton, {
            shineSize: s.ShinyButton.ShineSizes.SMALL,
            pauseAnimation: I || !T,
            onClick: e,
            children: h.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
        });
    }
}
