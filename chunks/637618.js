"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var s = n("735250");
n("470079");
var l = n("990547"),
  a = n("399606"),
  i = n("100527"),
  r = n("213609"),
  o = n("914010"),
  u = n("267101"),
  d = n("675297"),
  c = n("20281");

function E(e) {
  let {
    code: t
  } = e, [n, E] = t.split("-"), f = (0, u.useFetchGuildProductListing)(n, E), _ = (0, a.useStateFromStores)([o.default], () => o.default.getGuildId());
  return ((0, r.default)({
    type: c.ImpressionTypes.VIEW,
    name: l.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
    properties: {
      guild_product_listing_id: E,
      has_entitlement: (null == f ? void 0 : f.has_entitlement) === !0
    }
  }, {
    disableTrack: null == f
  }), null == f || _ !== n) ? null : (0, s.jsx)(d.GuildProductListingPublicCard, {
    guildProductListing: f,
    guildId: n,
    location: i.default.GUILD_PRODUCT_EMBED_CARD,
    cardWidth: 390,
    thumbnailHeight: 219
  })
}