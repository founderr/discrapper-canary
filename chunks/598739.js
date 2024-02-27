"use strict";
s.r(t), s.d(t, {
  NitroLandingPages: function() {
    return r
  },
  PerksDiscoverabilityVariants: function() {
    return n
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
var a, i, r, n, l = s("446674"),
  o = s("819855"),
  u = s("411691"),
  d = s("521012"),
  c = s("719923"),
  _ = s("646718"),
  E = s("782340");
(a = r || (r = {})).SEE_ALL = "See All Nitro Perks", a.MARKETING = "Marketing", a.HOME = "Home", (i = n || (n = {})).PERKS_DISCOVERABILITY = "perks_discoverability", i.WHATS_NEW = "whats_new", i.CARD_CAROUSEL_FIRST_ROW = "card_carousel_first_row", i.CARD_CAROUSEL_SECOND_ROW = "card_carousel_second_row", i.CARD_CAROUSEL_THIRD_ROW = "card_carousel_final_row";
let I = (e, t, s) => (0, o.isThemeDark)(e) ? t : s,
  T = (e, t, s, a) => {
    let i = [];
    switch (t) {
      case "perks_discoverability":
        i = [e.profiles, e.clientThemes, e.serverBoosts];
        break;
      case "whats_new":
        i = [e.earlyAccess, s !== u.CollectiblesShopMarketingVariants.DEFAULT ? e.specialShopPerks : e.specialMemberPricing, e.unlimitedSuperReactions];
        break;
      case "card_carousel_first_row":
        i = [e.customAppIcons, e.moreEmojiPower, e.customSoundsEverywhere, e.specialStickerAccess];
        break;
      case "card_carousel_second_row":
        i = [e.earlyAccessSeeAllVariant, e.specialMemberPricingSeeAllVariant, e.largeUploads, e.hdVideo, e.superReactions];
        break;
      case "card_carousel_final_row":
        i = [e.entranceSoundsSeeAllVariation, e.badge]
    }
    return !a && (i = i.filter(e => !e.hideOnNarrowScreen)), i
  },
  f = e => {
    let t = (0, l.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
      s = null != t ? c.default.getPremiumPlanItem(t) : null,
      a = null != s ? c.default.getSkuIdForPlan(s.planId) : null,
      i = a === _.PremiumSubscriptionSKUs.TIER_2;
    if (e) return i ? {
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