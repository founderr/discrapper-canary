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
    return N
  },
  getRewardingTenureTitle: function() {
    return p
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
  m = s("735825"),
  A = s("689938");
let p = e => {
    switch (e) {
      case m.NitroRewardStatus.PENDING:
        return A.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE;
      case m.NitroRewardStatus.REDEEMABLE:
        return A.default.Messages.NITRO_HOME_REWARDING_REDEEMABLE_STATE_TITLE;
      case m.NitroRewardStatus.REDEEMED:
        return A.default.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
      default:
        return ""
    }
  },
  N = (e, t) => {
    switch (e) {
      case m.NitroRewardStatus.PENDING:
        return t === m.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? A.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_1_MONTH_VARIANT : A.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case m.NitroRewardStatus.REDEEMABLE:
        return t === m.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? A.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_1_MONTH_VARIANT : A.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case m.NitroRewardStatus.REDEEMED:
        return A.default.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_SUBTITLE;
      default:
        return
    }
  },
  g = e => {
    switch (e) {
      case m.NitroRewardStatus.PENDING:
        return A.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_DESCRIPTION;
      case m.NitroRewardStatus.REDEEMABLE:
        return;
      case m.NitroRewardStatus.REDEEMED:
        return A.default.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_DESCRIPTION;
      default:
        return
    }
  };

function C(e, t) {
  switch (e) {
    case m.NitroRewardStatus.PENDING:
      return null != t ? A.default.Messages.NITRO_HOME_REWARDING_TENURE_BOOST_AVAILABLE_DATE.format({
        days: t
      }) : "";
    case m.NitroRewardStatus.REDEEMABLE:
      return A.default.Messages.REDEEM;
    case m.NitroRewardStatus.REDEEMED:
      return A.default.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
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
      shopMarketingVariation: i,
      isPremiumSubscriber: l
    } = e, o = a ? 3 : 2, u = e => {
      let {
        card: s
      } = e;
      t.length < o && t.push(s)
    }, E = () => {
      i !== n.CollectiblesShopMarketingVariants.DEFAULT ? u({
        card: s.specialShopPerks
      }) : u({
        card: s.specialMemberPricing
      })
    }, {
      shouldShowCard: f
    } = _.June2024NewAppStylesWhatsNewCardExperiment.getCurrentConfig({
      location: O
    }, {
      autoTrackExposure: !1
    }), {
      shouldShowCard: S
    } = R.ServerProfilesExperiment.getCurrentConfig({
      location: O
    }, {
      autoTrackExposure: !1
    }), {
      shouldShowCard: m
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
      enabled: p
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
    });
    return null != s.freeBoost && !0 === r && u({
      card: s.freeBoost
    }), a && l && f && S ? (0 === t.length && E(), u({
      card: s.serverProfiles
    }), u({
      card: s.newAppStylesUpdateJune2024
    })) : a && !l && f && S && (m && A && !p && !N ? u({
      card: s.referralProgram
    }) : E(), u({
      card: s.serverProfiles
    }), u({
      card: s.newAppStylesUpdateJune2024
    })), u({
      card: s.earlyAccess
    }), E(), u({
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
          isPremiumSubscriber: o,
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
      title: A.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
      subtitle: A.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
    } : {
      title: A.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
      subtitle: A.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
    };
    return {
      title: A.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
      subtitle: A.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
    }
  },
  x = () => {
    let e = (0, r.useStateFromStores)([l.default], () => l.default.getCurrentUser());
    return (0, u.isPremium)(e)
  }