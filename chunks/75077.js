"use strict";
s.r(t), s.d(t, {
  getFilteredPerksDiscoverabilityCards: function() {
    return h
  },
  getRewardingTenureCtaDescription: function() {
    return C
  },
  getRewardingTenureDescription: function() {
    return g
  },
  getRewardingTenureSubtitle: function() {
    return p
  },
  getRewardingTenureTitle: function() {
    return N
  },
  getThemedImage: function() {
    return P
  },
  useIsPremiumSubscriber: function() {
    return x
  },
  usePerksDiscoverabilityStrings: function() {
    return L
  }
}), s("653041"), s("627341");
var a = s("278074"),
  r = s("442837"),
  i = s("780384"),
  n = s("410154"),
  l = s("594174"),
  o = s("78839"),
  u = s("74538"),
  d = s("331119"),
  c = s("575595"),
  _ = s("528865"),
  E = s("915296"),
  T = s("650032"),
  I = s("781922"),
  R = s("885462"),
  f = s("391110"),
  S = s("474936"),
  A = s("735825"),
  m = s("689938");
let N = e => {
    switch (e) {
      case A.NitroRewardStatus.PENDING:
        return m.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE;
      case A.NitroRewardStatus.REDEEMABLE:
        return m.default.Messages.NITRO_HOME_REWARDING_REDEEMABLE_STATE_TITLE;
      case A.NitroRewardStatus.REDEEMED:
        return m.default.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
      default:
        return ""
    }
  },
  p = (e, t) => {
    switch (e) {
      case A.NitroRewardStatus.PENDING:
        return t === A.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? m.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_1_MONTH_VARIANT : m.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case A.NitroRewardStatus.REDEEMABLE:
        return t === A.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? m.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_1_MONTH_VARIANT : m.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case A.NitroRewardStatus.REDEEMED:
        return m.default.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_SUBTITLE;
      default:
        return
    }
  },
  g = e => {
    switch (e) {
      case A.NitroRewardStatus.PENDING:
        return m.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_DESCRIPTION;
      case A.NitroRewardStatus.REDEEMABLE:
        return;
      case A.NitroRewardStatus.REDEEMED:
        return m.default.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_DESCRIPTION;
      default:
        return
    }
  };

function C(e, t) {
  switch (e) {
    case A.NitroRewardStatus.PENDING:
      return null != t ? m.default.Messages.NITRO_HOME_REWARDING_TENURE_BOOST_AVAILABLE_DATE.format({
        days: t
      }) : "";
    case A.NitroRewardStatus.REDEEMABLE:
      return m.default.Messages.REDEEM;
    case A.NitroRewardStatus.REDEEMED:
      return m.default.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
    default:
      return ""
  }
}
let P = (e, t, s) => (0, i.isThemeDark)(e) ? t : s,
  O = "getWhatsNewRow",
  M = e => {
    let {
      cards: t,
      perksCards: s,
      isFullScreen: a,
      showTenureCard: r,
      shopMarketingVariation: i
    } = e, l = a ? 3 : 2, o = e => {
      let {
        card: s
      } = e;
      t.length < l && t.push(s)
    }, u = () => {
      i !== n.CollectiblesShopMarketingVariants.DEFAULT ? o({
        card: s.specialShopPerks
      }) : o({
        card: s.specialMemberPricing
      })
    }, {
      shouldShowCard: E
    } = _.June2024NewAppStylesWhatsNewCardExperiment.getCurrentConfig({
      location: O
    }, {
      autoTrackExposure: !1
    }), {
      shouldShowCard: f
    } = R.ServerProfilesExperiment.getCurrentConfig({
      location: O
    }, {
      autoTrackExposure: !1
    }), {
      shouldShowCard: S
    } = I.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: O
    }, {
      autoTrackExposure: !1
    }), {
      enabled: A
    } = T.ReferralProgramRecipient.getCurrentConfig({
      location: O
    }, {
      autoTrackExposure: !1
    }), {
      enabled: m
    } = c.DiscountModelDataCollection.getCurrentConfig({
      location: O
    }, {
      autoTrackExposure: !1
    }), {
      enabled: N
    } = d.CannibalizationModelDataCollection.getCurrentConfig({
      location: O
    }, {
      autoTrackExposure: !1
    }), p = v();
    return null != s.freeBoost && !0 === r && o({
      card: s.freeBoost
    }), a && p && E && f ? (0 === t.length && u(), o({
      card: s.serverProfiles
    }), o({
      card: s.newAppStylesUpdateJune2024
    })) : a && !p && E && f && (S && A && !m && !N ? o({
      card: s.referralProgram
    }) : u(), o({
      card: s.serverProfiles
    }), o({
      card: s.newAppStylesUpdateJune2024
    })), o({
      card: s.earlyAccess
    }), u(), o({
      card: s.unlimitedSuperReactions
    }), t
  },
  h = e => {
    let {
      perksCards: t,
      variant: s,
      shopMarketingVariation: r,
      isFullScreen: i,
      showTenureCard: n,
      tileOrderVariant: l,
      isPremiumSubscriber: o
    } = e, u = [];
    switch (s) {
      case f.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY:
        u = (0, a.match)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: E.TileOrderVariant.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.profiles, t.moreEmojiPower, t.largeUploads]).with({
          tileOrderVariant: E.TileOrderVariant.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]).otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
        break;
      case f.PerksDiscoverabilityCardSection.WHATS_NEW:
        u = M({
          cards: u,
          perksCards: t,
          isFullScreen: i,
          showTenureCard: n,
          shopMarketingVariation: r
        });
        break;
      case f.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW:
        u = (0, a.match)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: E.TileOrderVariant.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.hdVideo, t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]).with({
          tileOrderVariant: E.TileOrderVariant.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]).otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
        break;
      case f.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW:
        u = (0, a.match)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: E.TileOrderVariant.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.clientThemes, t.customAppIcons, t.customSoundsEverywhere, t.specialStickerAccess]).with({
          tileOrderVariant: E.TileOrderVariant.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.customSoundsEverywhere, t.specialStickerAccess]).otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
        break;
      case f.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW:
        u = [t.entranceSoundsSeeAllVariation, t.badge]
    }
    return !i && (u = u.filter(e => !e.hideOnNarrowScreen)), u
  },
  L = e => {
    let t = (0, r.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
      s = null != t ? u.default.getPremiumPlanItem(t) : null,
      a = (null != s ? u.default.getSkuIdForPlan(s.planId) : null) === S.PremiumSubscriptionSKUs.TIER_2;
    if (e) return a ? {
      title: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
      subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
    } : {
      title: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
      subtitle: m.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
    };
    return {
      title: m.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
      subtitle: m.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
    }
  },
  x = () => {
    let e = (0, r.useStateFromStores)([l.default], () => l.default.getCurrentUser());
    return (0, u.isPremium)(e)
  },
  v = () => {
    let e = l.default.getCurrentUser();
    return (0, u.isPremiumExactly)(e, S.PremiumTypes.TIER_2)
  }