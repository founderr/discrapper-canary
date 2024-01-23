"use strict";
s.r(t), s.d(t, {
  PerksDiscoverabilityCardTypes: function() {
    return n
  },
  default: function() {
    return Y
  }
});
var a, n, r = s("65597"),
  l = s("151426"),
  i = s("79112"),
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
  p = s("646718"),
  N = s("49111"),
  A = s("397336"),
  g = s("782340"),
  P = s("113705"),
  C = s("982784"),
  M = s("19530"),
  O = s("215541"),
  h = s("571685"),
  L = s("994679"),
  x = s("620826"),
  v = s("333078"),
  U = s("156591"),
  b = s("578770"),
  D = s("913204"),
  j = s("761708"),
  G = s("174433"),
  k = s("62414"),
  y = s("613697"),
  B = s("907511"),
  K = s("165870"),
  H = s("14528"),
  F = s("443817"),
  W = s("443646"),
  w = s("759308");
let V = "Placeholder copy that gives more context on Perk...";
(a = n || (n = {})).AVATAR_DECORATIONS = "avatarDecorations", a.CLIENT_THEMES = "clientThemes", a.CLIPS = "clips", a.EARLY_ACCESS = "earlyAccess", a.ENTRANCE_SOUNDS = "entranceSounds", a.PROFILE_EFFECTS = "profileEffects", a.PROFILES = "profiles", a.REMIXING = "remixing", a.SERVER_BOOSTS = "serverBoosts", a.SPECIAL_MEMBER_PRICING = "specialMemberPricing", a.SPECIAL_SHOP_PERKS = "specialShopPerks", a.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", a.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", a.CUSTOM_APP_ICONS = "customAppIcons", a.MORE_EMOJI_POWER = "moreEmojiPower", a.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", a.SPECIAL_STICKER_ACCESS = "specialStickerAccess", a.LARGE_UPLOADS = "largeUploads", a.HD_VIDEO = "hdVideo", a.BADGE = "badge";
var Y = () => {
  let {
    analyticsLocations: e
  } = (0, d.default)(o.default.PREMIUM_MARKETING_PERK_CARD), t = (0, u.default)(), s = g.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, a = (0, r.default)([T.default], () => T.default.getPremiumTypeSubscription()), n = null != a ? S.default.getPremiumPlanItem(a) : null, Y = null != n ? S.default.getSkuIdForPlan(n.planId) : null, z = Y === p.PremiumSubscriptionSKUs.TIER_2, {
    flipped: X
  } = (0, R.useWhatsNewAvatarDecoRollout)(), {
    flipped: Q
  } = (0, R.useWhatsNewProfileFXRollout)(), J = (0, c.default)(I.default), Z = (0, E.default)({
    scrollPosition: A.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: e
  }), q = () => {
    (0, _.openCollectiblesShop)({
      analyticsLocations: e,
      analyticsSource: o.default.PREMIUM_MARKETING_PERK_CARD
    })
  }, $ = {
    avatarDecorations: z ? {
      name: "avatarDecorations",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: g.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: q,
      pillText: g.default.Messages.EARLY_ACCESS,
      perkImage: v,
      canReveal: X,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: g.default.Messages.EARLY_ACCESS,
      perkImage: v,
      canReveal: X,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: g.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        i.default.open(N.UserSettingsSections.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: h
    },
    clips: z ? {
      name: "clips",
      title: g.default.Messages.CLIPS,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: J ? g.default.Messages.TAKE_ME_THERE : g.default.Messages.LEARN_MORE,
      pillText: g.default.Messages.EARLY_ACCESS,
      onCtaClick: J ? () => {
        i.default.open(N.UserSettingsSections.CLIPS, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(f.default.getArticleURL(N.HelpdeskArticles.CLIPS), "_blank")
      },
      perkImage: U
    } : {
      name: "clips",
      title: g.default.Messages.CLIPS,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: g.default.Messages.EARLY_ACCESS,
      perkImage: U
    },
    earlyAccess: z ? {
      name: "earlyAccess",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: D
    } : {
      name: "earlyAccess",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: D
    },
    entranceSounds: z ? {
      name: "entranceSounds",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: g.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        i.default.open(N.UserSettingsSections.VOICE, A.SOUNDBOARD_SUBSECTION, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: G
    } : {
      name: "entranceSounds",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: G
    },
    profileEffects: z ? {
      name: "profileEffects",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: g.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: q,
      pillText: g.default.Messages.EARLY_ACCESS,
      perkImage: y,
      canReveal: Q,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: g.default.Messages.EARLY_ACCESS,
      perkImage: y,
      canReveal: Q,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: g.default.Messages.TAKE_ME_THERE,
      onCtaClick: Z,
      perkImage: L
    },
    remixing: z ? {
      name: "remixing",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: B,
      pillText: g.default.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: B,
      pillText: g.default.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: g.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: g.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        i.default.open(N.UserSettingsSections.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: x
    },
    specialMemberPricing: z ? {
      name: "specialMemberPricing",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: g.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: q,
      perkImage: K
    } : {
      name: "specialMemberPricing",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: K
    },
    specialShopPerks: z ? {
      name: "specialShopPerks",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: g.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: q,
      perkImage: K
    } : {
      name: "specialShopPerks",
      title: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: g.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: q,
      perkImage: K
    },
    unlimitedSuperReactions: z ? {
      name: "unlimitedSuperReactions",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: W
    } : {
      name: "unlimitedSuperReactions",
      title: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: g.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: W
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: g.default.Messages.NEW_DROP,
      pillText: g.default.Messages.COMING_SOON,
      backgroundImage: k
    },
    badge: {
      name: "badge",
      title: g.default.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
      perkImage: P,
      description: V
    },
    customAppIcons: {
      name: "customAppIcons",
      title: g.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
      perkImage: b,
      description: V
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: g.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: j,
      description: V
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: g.default.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
      subtitle: g.default.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
      perkImage: (0, m.getThemedImage)(t, C, M),
      description: V
    },
    specialStickerAccess: {
      name: "customSoundsEverywhere",
      title: g.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
      perkImage: (0, m.getThemedImage)(t, O, H),
      description: V
    },
    largeUploads: {
      name: "largeUploads",
      title: g.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: s
      }),
      subtitle: g.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
        premiumMaxSize: s
      }),
      perkImage: w,
      description: V
    },
    hdVideo: {
      name: "hdVideo",
      title: g.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
      subtitle: g.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
      perkImage: F,
      description: V
    }
  };
  return $
}