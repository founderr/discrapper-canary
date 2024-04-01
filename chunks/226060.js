"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("735250");
n("470079");
var l = n("512722"),
  a = n.n(l),
  i = n("399606"),
  r = n("481060"),
  o = n("607070"),
  u = n("430824"),
  d = n("976644"),
  c = n("506071"),
  E = n("267101"),
  f = n("240864"),
  _ = n("57949"),
  T = n("400916"),
  I = n("689938");

function m(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: l
  } = e, m = (0, i.useStateFromStores)([f.default], () => f.default.getGuildProduct(n)), N = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), p = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), S = (0, c.useIsWindowFocused)();
  if (a()(null != N, "guild cannot be null"), a()(null != m, "guildProductListing cannot be null"), (0, E.useCanManageGuildProduct)(N)) return (0, s.jsx)(r.Tooltip, {
    text: I.default.Messages.GUILD_PRODUCT_PURCHASE_DISABLED_TOOLTIP,
    children: e => (0, s.jsx)(r.Button, {
      ...e,
      color: r.Button.Colors.BRAND,
      disabled: !0,
      children: I.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
    })
  });
  if (!m.has_entitlement) return (0, s.jsx)(d.default, {
    shineSize: d.default.ShineSizes.SMALL,
    pauseAnimation: p || !S,
    onClick: () => (0, _.openGuildProductPurchaseModal)({
      guildProductListing: m,
      guildId: N.id,
      sourceAnalyticsLocations: l
    }),
    children: I.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
  });
  return null != m.attachments ? (0, s.jsx)(T.default, {
    guildId: N.id,
    productId: m.id
  }) : (0, s.jsx)(r.Button, {
    color: r.Button.Colors.PRIMARY,
    disabled: !0,
    children: I.default.Messages.GUILD_PRODUCT_CARD_PURCHASED
  })
}