"use strict";
s.r(t), s.d(t, {
  getFilteredPerksDiscoverabilityCards: function() {
    return x
  },
  getRewardingTenureCtaDescription: function() {
    return g
  },
  getRewardingTenureDescription: function() {
    return C
  },
  getRewardingTenureSubtitle: function() {
    return M
  },
  getRewardingTenureTitle: function() {
    return A
  },
  getThemedImage: function() {
    return N
  },
  useIsPremiumSubscriber: function() {
    return h
  },
  usePerksDiscoverabilityStrings: function() {
    return b
  }
}), s("653041"), s("627341");
var a = s("278074"),
  r = s("442837"),
  i = s("780384"),
  n = s("410154"),
  l = s("594174"),
  o = s("78839"),
  u = s("74538"),
  c = s("331119"),
  d = s("575595"),
  _ = s("528865"),
  E = s("915296"),
  R = s("650032"),
  T = s("781922"),
  I = s("885462"),
  f = s("391110"),
  S = s("474936"),
  m = s("735825"),
  p = s("689938");
let A = e => {
    switch (e) {
      case m.NitroRewardStatus.PENDING:
        return p.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE;
      case m.NitroRewardStatus.REDEEMABLE:
        return p.default.Messages.NITRO_HOME_REWARDING_REDEEMABLE_STATE_TITLE;
      case m.NitroRewardStatus.REDEEMED:
        return p.default.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
      default:
        return ""
    }
  },
  M = (e, t) => {
    switch (e) {
      case m.NitroRewardStatus.PENDING:
        return t === m.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? p.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_1_MONTH_VARIANT : p.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case m.NitroRewardStatus.REDEEMABLE:
        return t === m.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? p.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_1_MONTH_VARIANT : p.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case m.NitroRewardStatus.REDEEMED:
        return p.default.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_SUBTITLE;
      default:
        return
    }
  },
  C = e => {
    switch (e) {
      case m.NitroRewardStatus.PENDING:
        return p.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_DESCRIPTION;
      case m.NitroRewardStatus.REDEEMABLE:
        return;
      case m.NitroRewardStatus.REDEEMED:
        return p.default.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_DESCRIPTION;
      default:
        return
    }
  };

function g(e, t) {
  switch (e) {
    case m.NitroRewardStatus.PENDING:
      return null != t ? p.default.Messages.NITRO_HOME_REWARDING_TENURE_BOOST_AVAILABLE_DATE.format({
        days: t
      }) : "";
    case m.NitroRewardStatus.REDEEMABLE:
      return p.default.Messages.REDEEM;
    case m.NitroRewardStatus.REDEEMED:
      return p.default.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
    default:
      return ""
  }
}
let N = (e, t, s) => (0, i.isThemeDark)(e) ? t : s,
  P = "getWhatsNewRow",
  O = e => {
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
      location: P
    }, {
      autoTrackExposure: !1
    }), {
      shouldShowCard: f
    } = I.ServerProfilesExperiment.getCurrentConfig({
      location: P
    }, {
      autoTrackExposure: !1
    }), {
      shouldShowCard: S
    } = T.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: P
    }, {
      autoTrackExposure: !1
    }), {
      enabled: m
    } = R.ReferralProgramRecipient.getCurrentConfig({
      location: P
    }, {
      autoTrackExposure: !1
    }), {
      enabled: p
    } = d.DiscountModelDataCollection.getCurrentConfig({
      location: P
    }, {
      autoTrackExposure: !1
    }), {
      enabled: A
    } = c.CannibalizationModelDataCollection.getCurrentConfig({
      location: P
    }, {
      autoTrackExposure: !1
    }), M = D();
    return null != s.freeBoost && !0 === r && o({
      card: s.freeBoost
    }), a && M && E && f ? (0 === t.length && u(), o({
      card: s.newAppStylesUpdateJune2024
    }), o({
      card: s.serverProfiles
    })) : a && !M && E && f && (S && m && !p && !A ? o({
      card: s.referralProgram
    }) : u(), o({
      card: s.newAppStylesUpdateJune2024
    }), o({
      card: s.serverProfiles
    })), o({
      card: s.earlyAccess
    }), u(), o({
      card: s.unlimitedSuperReactions
    }), t
  },
  x = e => {
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
        u = O({
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
  b = e => {
    let t = (0, r.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
      s = null != t ? u.default.getPremiumPlanItem(t) : null,
      a = (null != s ? u.default.getSkuIdForPlan(s.planId) : null) === S.PremiumSubscriptionSKUs.TIER_2;
    if (e) return a ? {
      title: p.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
      subtitle: p.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
    } : {
      title: p.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
      subtitle: p.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
    };
    return {
      title: p.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
      subtitle: p.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
    }
  },
  h = () => {
    let e = (0, r.useStateFromStores)([l.default], () => l.default.getCurrentUser());
    return (0, u.isPremium)(e)
  },
  D = () => {
    let e = l.default.getCurrentUser();
    return (0, u.isPremiumExactly)(e, S.PremiumTypes.TIER_2)
  }