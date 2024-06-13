"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("735250");
n("470079");
var a = n("512722"),
  l = n.n(a),
  i = n("399606"),
  r = n("481060"),
  o = n("607070"),
  u = n("430824"),
  d = n("506071"),
  c = n("267101"),
  f = n("240864"),
  E = n("57949"),
  _ = n("400916"),
  T = n("689938");

function m(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: a
  } = e, m = (0, i.useStateFromStores)([f.default], () => f.default.getGuildProduct(n)), I = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), N = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), p = (0, d.useIsWindowFocused)();
  if (l()(null != I, "guild cannot be null"), l()(null != m, "guildProductListing cannot be null"), (0, c.useCanManageGuildProduct)(I)) return (0, s.jsx)(r.Tooltip, {
    text: T.default.Messages.GUILD_PRODUCT_PURCHASE_DISABLED_TOOLTIP,
    children: e => (0, s.jsx)(r.Button, {
      ...e,
      color: r.Button.Colors.BRAND,
      disabled: !0,
      children: T.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
    })
  });
  if (!m.has_entitlement) return (0, s.jsx)(r.ShinyButton, {
    shineSize: r.ShinyButton.ShineSizes.SMALL,
    pauseAnimation: N || !p,
    onClick: () => (0, E.openGuildProductPurchaseModal)({
      guildProductListing: m,
      guildId: I.id,
      sourceAnalyticsLocations: a
    }),
    children: T.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
  });
  return null != m.attachments ? (0, s.jsx)(_.default, {
    guildId: I.id,
    productId: m.id
  }) : (0, s.jsx)(r.Button, {
    color: r.Button.Colors.PRIMARY,
    disabled: !0,
    children: T.default.Messages.GUILD_PRODUCT_CARD_PURCHASED
  })
}