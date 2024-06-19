n.d(t, {
  Z: function() {
    return E
  }
}), n(47120);
var s = n(735250);
n(470079);
var i = n(990547),
  l = n(399606),
  a = n(100527),
  r = n(213609),
  o = n(914010),
  c = n(267101),
  u = n(675297),
  d = n(20281);

function E(e) {
  let {
    code: t
  } = e, [n, E] = t.split("-"), _ = (0, c.hO)(n, E), I = (0, l.e7)([o.Z], () => o.Z.getGuildId());
  return ((0, r.Z)({
    type: d.n.VIEW,
    name: i.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
    properties: {
      guild_product_listing_id: E,
      has_entitlement: (null == _ ? void 0 : _.has_entitlement) === !0
    }
  }, {
    disableTrack: null == _
  }), null == _ || I !== n) ? null : (0, s.jsx)(u.H, {
    guildProductListing: _,
    guildId: n,
    location: a.Z.GUILD_PRODUCT_EMBED_CARD,
    cardWidth: 390,
    thumbnailHeight: 219
  })
}