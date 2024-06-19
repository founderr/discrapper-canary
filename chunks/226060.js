n.d(t, {
  Z: function() {
    return N
  }
});
var s = n(735250);
n(470079);
var i = n(512722),
  l = n.n(i),
  a = n(399606),
  r = n(481060),
  o = n(607070),
  c = n(430824),
  u = n(506071),
  d = n(267101),
  E = n(240864),
  _ = n(57949),
  I = n(400916),
  T = n(689938);

function N(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: i
  } = e, N = (0, a.e7)([E.Z], () => E.Z.getGuildProduct(n)), m = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]), h = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), C = (0, u.n)();
  if (l()(null != m, "guild cannot be null"), l()(null != N, "guildProductListing cannot be null"), (0, d.SO)(m)) return (0, s.jsx)(r.Tooltip, {
    text: T.Z.Messages.GUILD_PRODUCT_PURCHASE_DISABLED_TOOLTIP,
    children: e => (0, s.jsx)(r.Button, {
      ...e,
      color: r.Button.Colors.BRAND,
      disabled: !0,
      children: T.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
    })
  });
  if (!N.has_entitlement) return (0, s.jsx)(r.ShinyButton, {
    shineSize: r.ShinyButton.ShineSizes.SMALL,
    pauseAnimation: h || !C,
    onClick: () => (0, _.z)({
      guildProductListing: N,
      guildId: m.id,
      sourceAnalyticsLocations: i
    }),
    children: T.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
  });
  return null != N.attachments ? (0, s.jsx)(I.Z, {
    guildId: m.id,
    productId: N.id
  }) : (0, s.jsx)(r.Button, {
    color: r.Button.Colors.PRIMARY,
    disabled: !0,
    children: T.Z.Messages.GUILD_PRODUCT_CARD_PURCHASED
  })
}