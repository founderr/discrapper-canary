n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(990547),
    o = n(399606),
    s = n(100527),
    l = n(213609),
    u = n(914010),
    c = n(267101),
    d = n(675297),
    _ = n(20281);
function E(e) {
    let { code: t } = e,
        [n, r] = t.split('-'),
        E = (0, c.hO)(n, r),
        f = (0, o.e7)([u.Z], () => u.Z.getGuildId());
    return ((0, l.Z)(
        {
            type: _.n.VIEW,
            name: a.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: {
                guild_product_listing_id: r,
                has_entitlement: (null == E ? void 0 : E.has_entitlement) === !0
            }
        },
        { disableTrack: null == E }
    ),
    null == E || f !== n)
        ? null
        : (0, i.jsx)(d.H, {
              guildProductListing: E,
              guildId: n,
              location: s.Z.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219
          });
}
