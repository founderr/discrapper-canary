"use strict";
s.r(t), s.d(t, {
  PerksDiscoverabilityCardTypes: function() {
    return r
  },
  default: function() {
    return J
  }
});
var a, r, n = s("65597"),
  i = s("151426"),
  l = s("79112"),
  u = s("841098"),
  o = s("812204"),
  d = s("685665"),
  c = s("18346"),
  _ = s("21526"),
  E = s("38766"),
  I = s("42887"),
  T = s("521012"),
  f = s("701909"),
  S = s("719923"),
  R = s("184684"),
  m = s("598739"),
  A = s("646718"),
  N = s("49111"),
  p = s("397336"),
  g = s("782340"),
  P = s("574211"),
  C = s("982784"),
  M = s("19530"),
  O = s("215541"),
  h = s("571685"),
  L = s("994679"),
  x = s("620826"),
  v = s("333078"),
  D = s("156591"),
  U = s("578770"),
  b = s("913204"),
  j = s("198326"),
  G = s("761708"),
  k = s("174433"),
  y = s("828015"),
  B = s("62414"),
  H = s("613697"),
  K = s("907511"),
  W = s("165870"),
  F = s("186590"),
  w = s("14528"),
  V = s("925094"),
  Y = s("832085"),
  z = s("443646"),
  Q = s("759308");
let X = "Placeholder copy that gives more context on Perk...";
(a = r || (r = {})).AVATAR_DECORATIONS = "avatarDecorations", a.CLIENT_THEMES = "clientThemes", a.CLIPS = "clips", a.EARLY_ACCESS = "earlyAccess", a.ENTRANCE_SOUNDS = "entranceSounds", a.PROFILE_EFFECTS = "profileEffects", a.PROFILES = "profiles", a.REMIXING = "remixing", a.SERVER_BOOSTS = "serverBoosts", a.SPECIAL_MEMBER_PRICING = "specialMemberPricing", a.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", a.SPECIAL_SHOP_PERKS = "specialShopPerks", a.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", a.SUPER_REACTIONS = "superReactions", a.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", a.CUSTOM_APP_ICONS = "customAppIcons", a.MORE_EMOJI_POWER = "moreEmojiPower", a.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", a.SPECIAL_STICKER_ACCESS = "specialStickerAccess", a.LARGE_UPLOADS = "largeUploads", a.HD_VIDEO = "hdVideo", a.BADGE = "badge", a.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", a.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant";
var J = () => {
  let {
    analyticsLocations: e
  } = (0, d.default)(o.default.PREMIUM_MARKETING_PERK_CARD), t = (0, u.default)(), s = g.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, a = (0, n.default)([T.default], () => T.default.getPremiumTypeSubscription()), r = null != a ? S.default.getPremiumPlanItem(a) : null, J = null != r ? S.default.getSkuIdForPlan(r.planId) : null, Z = J === A.PremiumSubscriptionSKUs.TIER_2, {
    flipped: q
  } = (0, R.useWhatsNewAvatarDecoRollout)(), {
    flipped: $
  } = (0, R.useWhatsNewProfileFXRollout)(), ee = (0, c.default)(I.default), et = (0, E.default)({
    scrollPosition: p.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: e
  }), es = () => {
    l.default.open(N.UserSettingsSections.VOICE, p.SOUNDBOARD_SUBSECTION, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, ea = () => {
    (0, _.openCollectiblesShop)({
      analyticsLocations: e,
      analyticsSource: o.default.PREMIUM_MARKETING_PERK_CARD
    })
  }, er = {
    avatarDecorations: Z ? {
      name: "avatarDecorations",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: g.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ea,
      pillText: g.default.Messages.EARLY_ACCESS,
      perkImage: v,
      canReveal: q,
      dismissibleContentType: i.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: g.default.Messages.EARLY_ACCESS,
      perkImage: v,
      canReveal: q,
      dismissibleContentType: i.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: g.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        l.default.open(N.UserSettingsSections.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: h
    },
    clips: Z ? {
      name: "clips",
      title: g.default.Messages.CLIPS,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: ee ? g.default.Messages.TAKE_ME_THERE : g.default.Messages.LEARN_MORE,
      pillText: g.default.Messages.EARLY_ACCESS,
      onCtaClick: ee ? () => {
        l.default.open(N.UserSettingsSections.CLIPS, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(f.default.getArticleURL(N.HelpdeskArticles.CLIPS), "_blank")
      },
      perkImage: D
    } : {
      name: "clips",
      title: g.default.Messages.CLIPS,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: g.default.Messages.EARLY_ACCESS,
      perkImage: D
    },
    earlyAccess: Z ? {
      name: "earlyAccess",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: b
    } : {
      name: "earlyAccess",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: b
    },
    earlyAccessSeeAllVariant: Z ? {
      name: "earlyAccessSeeAllVariant",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: j
    } : {
      name: "earlyAccess",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: j
    },
    entranceSounds: Z ? {
      name: "entranceSounds",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: g.default.Messages.TAKE_ME_THERE,
      onCtaClick: es,
      perkImage: k
    } : {
      name: "entranceSounds",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: k
    },
    entranceSoundsSeeAllVariation: Z ? {
      name: "entranceSoundsSeeAllVariation",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: g.default.Messages.TAKE_ME_THERE,
      onCtaClick: es,
      perkImage: y
    } : {
      name: "entranceSounds",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: y
    },
    profileEffects: Z ? {
      name: "profileEffects",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: g.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ea,
      pillText: g.default.Messages.EARLY_ACCESS,
      perkImage: H,
      canReveal: $,
      dismissibleContentType: i.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: g.default.Messages.EARLY_ACCESS,
      perkImage: H,
      canReveal: $,
      dismissibleContentType: i.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: g.default.Messages.TAKE_ME_THERE,
      onCtaClick: et,
      perkImage: L
    },
    remixing: Z ? {
      name: "remixing",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: K,
      pillText: g.default.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: K,
      pillText: g.default.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: g.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        l.default.open(N.UserSettingsSections.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: x
    },
    specialMemberPricing: Z ? {
      name: "specialMemberPricing",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: g.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ea,
      perkImage: W
    } : {
      name: "specialMemberPricing",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: W
    },
    specialMemberPricingSeeAllVariant: Z ? {
      name: "specialMemberPricingSeeAllVariant",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: g.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ea,
      perkImage: F
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: F
    },
    specialShopPerks: Z ? {
      name: "specialShopPerks",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: g.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ea,
      perkImage: W
    } : {
      name: "specialShopPerks",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: g.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ea,
      perkImage: W
    },
    unlimitedSuperReactions: Z ? {
      name: "unlimitedSuperReactions",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: z
    } : {
      name: "unlimitedSuperReactions",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: z
    },
    superReactions: Z ? {
      name: "unlimitedSuperReactions",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: Y
    } : {
      name: "unlimitedSuperReactions",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: Y
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: g.default.Messages.NEW_DROP,
      pillText: g.default.Messages.COMING_SOON,
      backgroundImage: B
    },
    badge: {
      name: "badge",
      title: g.default.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
      perkImage: P,
      description: X
    },
    customAppIcons: {
      name: "customAppIcons",
      title: g.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
      perkImage: U,
      description: X
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: g.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: G,
      description: X
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: g.default.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
      subtitle: g.default.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
      perkImage: (0, m.getThemedImage)(t, C, M),
      description: X
    },
    specialStickerAccess: {
      name: "customSoundsEverywhere",
      title: g.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
      perkImage: (0, m.getThemedImage)(t, O, w),
      description: X
    },
    largeUploads: {
      name: "largeUploads",
      title: g.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: s
      }),
      subtitle: g.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
        premiumMaxSize: s
      }),
      perkImage: Q,
      description: X
    },
    hdVideo: {
      name: "hdVideo",
      title: g.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
      perkImage: V,
      description: X
    }
  };
  return er
}