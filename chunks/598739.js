"use strict";
s.r(t), s.d(t, {
  NitroLandingPages: function() {
    return i
  },
  PerksDiscoverabilityVariants: function() {
    return r
  },
  getThemedImage: function() {
    return I
  },
  getFilteredPerksDiscoverabilityCards: function() {
    return T
  },
  usePerksDiscoverabilityStrings: function() {
    return f
  }
});
var a, n, i, r, l = s("446674"),
  o = s("819855"),
  u = s("411691"),
  d = s("521012"),
  c = s("719923"),
  _ = s("646718"),
  E = s("782340");
(a = i || (i = {})).SEE_ALL = "See All Nitro Perks", a.MARKETING = "Marketing", a.HOME = "Home", (n = r || (r = {})).PERKS_DISCOVERABILITY = "perks_discoverability", n.WHATS_NEW = "whats_new", n.CARD_CAROUSEL_FIRST_ROW = "card_carousel_first_row", n.CARD_CAROUSEL_SECOND_ROW = "card_carousel_second_row", n.CARD_CAROUSEL_THIRD_ROW = "card_carousel_final_row";
let I = (e, t, s) => (0, o.isThemeDark)(e) ? t : s,
  T = (e, t, s) => {
    let a = [];
    switch (t) {
      case "perks_discoverability":
        a = [e.profiles, e.clientThemes, e.serverBoosts];
        break;
      case "whats_new":
        a = [e.earlyAccess, s !== u.CollectiblesShopMarketingVariants.DEFAULT ? e.specialShopPerks : e.specialMemberPricing, e.unlimitedSuperReactions];
        break;
      case "card_carousel_first_row":
        a = [e.customAppIcons, e.moreEmojiPower, e.customSoundsEverywhere, e.specialStickerAccess];
        break;
      case "card_carousel_second_row":
        a = [e.earlyAccessSeeAllVariant, e.specialMemberPricingSeeAllVariant, e.largeUploads, e.hdVideo, e.superReactions];
        break;
      case "card_carousel_final_row":
        a = [e.entranceSoundsSeeAllVariation, e.badge]
    }
    return a
  },
  f = e => {
    let t = (0, l.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
      s = null != t ? c.default.getPremiumPlanItem(t) : null,
      a = null != s ? c.default.getSkuIdForPlan(s.planId) : null,
      n = a === _.PremiumSubscriptionSKUs.TIER_2;
    if (e) return n ? {
      title: E.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
      subtitle: E.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
    } : {
      title: E.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
      subtitle: E.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
    };
    return {
      title: E.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
      subtitle: E.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
    }
  }