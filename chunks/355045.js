"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(622535),
  u = n(481060),
  _ = n(906732),
  c = n(963249),
  d = n(594174),
  E = n(314884),
  I = n(346656),
  T = n(709586),
  h = n(74538),
  f = n(678558),
  S = n(981631),
  A = n(474936),
  N = n(689938),
  m = n(132632);
t.Z = function(e) {
  let {
    closeLayer: t,
    guild: n,
    onCtaVisibilityChange: s
  } = e, O = (0, a.e7)([d.default], () => d.default.getCurrentUser()), R = (0, a.e7)([E.Z], () => E.Z.boostSlots), {
    analyticsLocations: p
  } = (0, _.ZP)(), g = r.useMemo(() => Object.keys(R).filter(e => {
    let t = R[e];
    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id
  }), [R, n.id]);
  return (0, i.jsxs)("div", {
    className: m.guildStatus,
    children: [(0, i.jsx)(I.Z, {
      className: m.guildIcon,
      guild: n,
      size: I.Z.Sizes.LARGER
    }), (0, i.jsx)(u.Heading, {
      className: m.guildName,
      color: "always-white",
      variant: "text-lg/bold",
      children: n.name
    }), (0, i.jsxs)("div", {
      className: m.guildBoostCountWrapper,
      children: [(0, i.jsxs)("div", {
        className: m.guildBoostCount,
        children: [(0, i.jsx)(T.Z, {
          className: o()(m.guildBoostBadge, {
            [m.guildBoostBadgeWithBoosts]: n.premiumSubscriberCount > 0
          })
        }), (0, i.jsx)(u.Text, {
          className: m.guildStatusCopy,
          variant: "text-md/bold",
          children: N.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
            subscriptions: n.premiumSubscriberCount
          })
        })]
      }), g.length > 0 ? (0, i.jsx)(u.Text, {
        className: m.guildBoostCountCurrentUser,
        variant: "text-sm/normal",
        children: N.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_USER_SUBSCRIPTION_COUNT.format({
          numSubscriptions: g.length
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: m.guildBoostCtas,
      children: [(0, i.jsx)(l.$, {
        onChange: s,
        threshold: .9,
        children: (0, i.jsx)("div", {
          className: o()(m.guildBoostCta, m.guildBoostCtaBoostWrapper),
          children: (0, i.jsx)(f.Z, {
            className: m.guildBoostCtaBoost,
            innerClassName: o()(m.__invalid_guildBoostCtaContent, m.guildBoostCtaBoostContent),
            buttonShineClassName: m.guildBoostCtaBoostShine,
            guild: n,
            analyticsLocation: {
              page: S.ZY5.PREMIUM_GUILD_USER_MODAL,
              section: S.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
              object: S.qAy.BUTTON_CTA,
              objectType: S.Qqv.BUY
            },
            closeLayer: t,
            color: u.Button.Colors.WHITE,
            size: u.Button.Sizes.LARGE,
            fullWidth: !0
          })
        })
      }), h.ZP.hasFreeBoosts(O) || h.ZP.isPremium(O, A.p9.TIER_2) ? (0, i.jsxs)(u.Button, {
        className: o()(m.guildBoostCta, m.guildBoostCtaSecondary),
        innerClassName: o()(m.__invalid_guildBoostCtaContent, m.guildBoostCtaGiftContent),
        look: u.Button.Looks.OUTLINED,
        color: u.Button.Colors.WHITE,
        onClick: function() {
          (0, c.Z)({
            initialPlanId: null,
            subscriptionTier: A.Si.TIER_2,
            isGift: !0,
            analyticsLocations: p,
            analyticsObject: {
              page: S.ZY5.PREMIUM_GUILD_USER_MODAL,
              section: S.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
              object: S.qAy.BUTTON_ICON,
              objectType: S.Qqv.GIFT
            },
            onClose: e => e && t()
          })
        },
        size: u.Button.Sizes.LARGE,
        children: [(0, i.jsx)(u.GiftIcon, {
          size: "md",
          color: "currentColor",
          className: m.guildBoostCtaGiftIcon
        }), N.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_GIFT_NITRO]
      }) : (0, i.jsx)(u.Button, {
        className: o()(m.guildBoostCta, m.guildBoostCtaSecondary),
        innerClassName: o()(m.__invalid_guildBoostCtaContent, m.__invalid_guildBoostCtaSubscribeContent),
        look: u.Button.Looks.OUTLINED,
        color: u.Button.Colors.WHITE,
        onClick: function() {
          (0, c.Z)({
            initialPlanId: null,
            subscriptionTier: A.Si.TIER_2,
            analyticsLocations: p,
            analyticsObject: {
              page: S.ZY5.PREMIUM_GUILD_USER_MODAL,
              section: S.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
              object: S.qAy.BUTTON_ICON,
              objectType: S.Qqv.BUY
            },
            onClose: e => e && t()
          })
        },
        size: u.Button.Sizes.LARGE,
        children: N.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_SUBSCRIBE_WITH_FREE_BOOSTS
      })]
    })]
  })
}