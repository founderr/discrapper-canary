"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
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
  f = n("267101"),
  E = n("240864"),
  _ = n("57949"),
  m = n("400916"),
  T = n("689938");

function I(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: l
  } = e, I = (0, i.useStateFromStores)([E.default], () => E.default.getGuildProduct(n)), p = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), h = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), N = (0, c.useIsWindowFocused)();
  if (a()(null != p, "guild cannot be null"), a()(null != I, "guildProductListing cannot be null"), (0, f.useCanManageGuildProduct)(p)) return (0, s.jsx)(r.Tooltip, {
    text: T.default.Messages.GUILD_PRODUCT_PURCHASE_DISABLED_TOOLTIP,
    children: e => (0, s.jsx)(r.Button, {
      ...e,
      color: r.Button.Colors.BRAND,
      disabled: !0,
      children: T.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
    })
  });
  if (!I.has_entitlement) return (0, s.jsx)(d.default, {
    shineSize: d.default.ShineSizes.SMALL,
    pauseAnimation: h || !N,
    onClick: () => (0, _.openGuildProductPurchaseModal)({
      guildProductListing: I,
      guildId: p.id,
      sourceAnalyticsLocations: l
    }),
    children: T.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
  });
  return null != I.attachments ? (0, s.jsx)(m.default, {
    guildId: p.id,
    productId: I.id
  }) : (0, s.jsx)(r.Button, {
    color: r.Button.Colors.PRIMARY,
    disabled: !0,
    children: T.default.Messages.GUILD_PRODUCT_CARD_PURCHASED
  })
}