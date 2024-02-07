"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var i = s("37983"),
  r = s("884691"),
  a = s("414456"),
  l = s.n(a),
  o = s("446674"),
  n = s("290381"),
  u = s("77078"),
  d = s("685665"),
  c = s("649844"),
  E = s("697218"),
  _ = s("625634"),
  T = s("476263"),
  I = s("978679"),
  f = s("118503"),
  N = s("719923"),
  R = s("617917"),
  g = s("49111"),
  m = s("646718"),
  S = s("782340"),
  M = s("310265"),
  h = function(e) {
    let {
      closeLayer: t,
      guild: s,
      onCtaVisibilityChange: a
    } = e, h = (0, o.useStateFromStores)([E.default], () => E.default.getCurrentUser()), G = (0, o.useStateFromStores)([_.default], () => _.default.boostSlots), {
      analyticsLocations: p
    } = (0, d.default)(), x = r.useMemo(() => Object.keys(G).filter(e => {
      let t = G[e];
      return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === s.id
    }), [G, s.id]);
    return (0, i.jsxs)("div", {
      className: M.guildStatus,
      children: [(0, i.jsx)(T.default, {
        className: M.guildIcon,
        guild: s,
        size: T.default.Sizes.LARGER
      }), (0, i.jsx)(u.Heading, {
        className: M.guildName,
        color: "always-white",
        variant: "text-lg/bold",
        children: s.name
      }), (0, i.jsxs)("div", {
        className: M.guildBoostCountWrapper,
        children: [(0, i.jsxs)("div", {
          className: M.guildBoostCount,
          children: [(0, i.jsx)(f.default, {
            className: l(M.guildBoostBadge, {
              [M.guildBoostBadgeWithBoosts]: s.premiumSubscriberCount > 0
            })
          }), (0, i.jsx)(u.Text, {
            className: M.guildStatusCopy,
            variant: "text-md/bold",
            children: S.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
              subscriptions: s.premiumSubscriberCount
            })
          })]
        }), x.length > 0 ? (0, i.jsx)(u.Text, {
          className: M.guildBoostCountCurrentUser,
          variant: "text-sm/normal",
          children: S.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_USER_SUBSCRIPTION_COUNT.format({
            numSubscriptions: x.length
          })
        }) : null]
      }), (0, i.jsxs)("div", {
        className: M.guildBoostCtas,
        children: [(0, i.jsx)(n.VisibilitySensor, {
          onChange: a,
          threshold: .9,
          children: (0, i.jsx)("div", {
            className: l(M.guildBoostCta, M.guildBoostCtaBoostWrapper),
            children: (0, i.jsx)(R.default, {
              className: M.guildBoostCtaBoost,
              innerClassName: l(M.guildBoostCtaContent, M.guildBoostCtaBoostContent),
              buttonShineClassName: M.guildBoostCtaBoostShine,
              guild: s,
              analyticsLocation: {
                page: g.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                section: g.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: g.AnalyticsObjects.BUTTON_CTA,
                objectType: g.AnalyticsObjectTypes.BUY
              },
              closeLayer: t,
              color: u.Button.Colors.WHITE,
              size: u.Button.Sizes.LARGE,
              fullWidth: !0
            })
          })
        }), N.default.hasFreeBoosts(h) || N.default.isPremium(h, m.PremiumTypes.TIER_2) ? (0, i.jsxs)(u.Button, {
          className: l(M.guildBoostCta, M.guildBoostCtaSecondary),
          innerClassName: l(M.guildBoostCtaContent, M.guildBoostCtaGiftContent),
          look: u.Button.Looks.OUTLINED,
          color: u.Button.Colors.WHITE,
          onClick: function() {
            (0, c.default)({
              initialPlanId: null,
              subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
              isGift: !0,
              analyticsLocations: p,
              analyticsObject: {
                page: g.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                section: g.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: g.AnalyticsObjects.BUTTON_ICON,
                objectType: g.AnalyticsObjectTypes.GIFT
              },
              onClose: e => e && t()
            })
          },
          size: u.Button.Sizes.LARGE,
          children: [(0, i.jsx)(I.default, {
            className: M.guildBoostCtaGiftIcon
          }), S.default.Messages.PREMIUM_GUILD_PERKS_MODAL_GIFT_NITRO]
        }) : (0, i.jsx)(u.Button, {
          className: l(M.guildBoostCta, M.guildBoostCtaSecondary),
          innerClassName: l(M.guildBoostCtaContent, M.guildBoostCtaSubscribeContent),
          look: u.Button.Looks.OUTLINED,
          color: u.Button.Colors.WHITE,
          onClick: function() {
            (0, c.default)({
              initialPlanId: null,
              subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: p,
              analyticsObject: {
                page: g.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                section: g.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: g.AnalyticsObjects.BUTTON_ICON,
                objectType: g.AnalyticsObjectTypes.BUY
              },
              onClose: e => e && t()
            })
          },
          size: u.Button.Sizes.LARGE,
          children: S.default.Messages.PREMIUM_GUILD_PERKS_MODAL_SUBSCRIBE_WITH_FREE_BOOSTS
        })]
      })]
    })
  }