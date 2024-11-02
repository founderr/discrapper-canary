n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(399606),
    o = n(481060),
    s = n(607070),
    c = n(430824),
    u = n(506071),
    d = n(267101),
    m = n(240864),
    f = n(57949),
    h = n(400916),
    p = n(388032);
function g(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: r } = e,
        g = (0, a.e7)([m.Z], () => m.Z.getGuildProduct(n)),
        _ = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        C = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        E = (0, u.n)();
    if ((l()(null != _, 'guild cannot be null'), l()(null != g, 'guildProductListing cannot be null'), (0, d.SO)(_)))
        return (0, i.jsx)(o.Tooltip, {
            text: p.intl.string(p.t.sAJr9f),
            children: (e) =>
                (0, i.jsx)(o.Button, {
                    ...e,
                    color: o.Button.Colors.BRAND,
                    disabled: !0,
                    children: p.intl.string(p.t.xUi3BA)
                })
        });
    if (!g.has_entitlement)
        return (0, i.jsx)(o.ShinyButton, {
            shineSize: o.ShinyButton.ShineSizes.SMALL,
            pauseAnimation: C || !E,
            onClick: () =>
                (0, f.z)({
                    guildProductListing: g,
                    guildId: _.id,
                    sourceAnalyticsLocations: r
                }),
            children: p.intl.string(p.t.xUi3BA)
        });
    return null != g.attachments
        ? (0, i.jsx)(h.Z, {
              guildId: _.id,
              productId: g.id
          })
        : (0, i.jsx)(o.Button, {
              color: o.Button.Colors.PRIMARY,
              disabled: !0,
              children: p.intl.string(p.t.RcTOGB)
          });
}
