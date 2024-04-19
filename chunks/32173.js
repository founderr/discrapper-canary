"use strict";
s.r(t), s.d(t, {
  PerksDiscoverabilityCardTypes: function() {
    return i
  }
});
var a, i, r = s("735250");
s("470079");
var l = s("399606"),
  n = s("524437"),
  o = s("230711"),
  u = s("410030"),
  d = s("100527"),
  c = s("906732"),
  _ = s("779618"),
  E = s("335131"),
  C = s("410154"),
  f = s("300284"),
  T = s("131951"),
  I = s("78839"),
  R = s("63063"),
  S = s("74538"),
  p = s("494127"),
  m = s("687362"),
  A = s("623068"),
  N = s("391110"),
  g = s("75077"),
  O = s("474936"),
  P = s("981631"),
  M = s("526761"),
  h = s("689938"),
  L = s("660372"),
  x = s("926433"),
  v = s("302036"),
  j = s("994554"),
  D = s("704565"),
  b = s("393305"),
  U = s("338879"),
  y = s("203302"),
  B = s("766491"),
  G = s("193943"),
  k = s("707046"),
  H = s("488459"),
  F = s("334347"),
  w = s("132015"),
  W = s("142416"),
  K = s("474106"),
  V = s("567452"),
  Y = s("755590"),
  z = s("529018"),
  Z = s("637810"),
  X = s("570423"),
  Q = s("912429"),
  J = s("91394"),
  q = s("209672"),
  $ = s("698173"),
  ee = s("926262");
let et = new Date("2024-05-07T03:59:00Z");
(a = i || (i = {})).AVATAR_DECORATIONS = "avatarDecorations", a.CLIENT_THEMES = "clientThemes", a.CLIPS = "clips", a.EARLY_ACCESS = "earlyAccess", a.ENTRANCE_SOUNDS = "entranceSounds", a.PROFILE_EFFECTS = "profileEffects", a.PROFILES = "profiles", a.REMIXING = "remixing", a.SERVER_BOOSTS = "serverBoosts", a.SPECIAL_MEMBER_PRICING = "specialMemberPricing", a.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", a.SPECIAL_SHOP_PERKS = "specialShopPerks", a.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", a.SUPER_REACTIONS = "superReactions", a.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", a.CUSTOM_APP_ICONS = "customAppIcons", a.MORE_EMOJI_POWER = "moreEmojiPower", a.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", a.SPECIAL_STICKER_ACCESS = "specialStickerAccess", a.LARGE_UPLOADS = "largeUploads", a.HD_VIDEO = "hdVideo", a.BADGE = "badge", a.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", a.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", a.FREE_BOOST = "freeBoost", a.SHY_PROJECT = "shyProject";
t.default = () => {
  let {
    analyticsLocations: e
  } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD), t = (0, u.default)(), s = h.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, a = (0, l.useStateFromStores)([I.default], () => I.default.getPremiumTypeSubscription()), i = null != a ? S.default.getPremiumPlanItem(a) : null, es = (null != i ? S.default.getSkuIdForPlan(i.planId) : null) === O.PremiumSubscriptionSKUs.TIER_2, {
    flipped: ea
  } = (0, p.useWhatsNewAvatarDecoRollout)(), {
    flipped: ei
  } = (0, p.useWhatsNewProfileFXRollout)(), er = (0, _.default)(T.default), el = (0, m.default)(), en = (0, f.default)({
    scrollPosition: M.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: e
  }), eo = () => {
    o.default.open(P.UserSettingsSections.VOICE, M.SOUNDBOARD_SUBSECTION, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, eu = () => {
    (0, E.openCollectiblesShop)({
      analyticsLocations: e,
      analyticsSource: d.default.PREMIUM_MARKETING_PERK_CARD
    })
  }, ed = {
    avatarDecorations: es ? {
      name: "avatarDecorations",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eu,
      pillText: h.default.Messages.EARLY_ACCESS,
      perkImage: y,
      canReveal: ea,
      dismissibleContentType: n.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: h.default.Messages.EARLY_ACCESS,
      perkImage: y,
      canReveal: ea,
      dismissibleContentType: n.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: h.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(P.UserSettingsSections.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: D
    },
    clips: es ? {
      name: "clips",
      title: h.default.Messages.CLIPS,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: er ? h.default.Messages.TAKE_ME_THERE : h.default.Messages.LEARN_MORE,
      pillText: h.default.Messages.EARLY_ACCESS,
      onCtaClick: er ? () => {
        o.default.open(P.UserSettingsSections.CLIPS, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(R.default.getArticleURL(P.HelpdeskArticles.CLIPS), "_blank")
      },
      perkImage: B
    } : {
      name: "clips",
      title: h.default.Messages.CLIPS,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: h.default.Messages.EARLY_ACCESS,
      perkImage: B
    },
    earlyAccess: es ? {
      name: "earlyAccess",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: k
    } : {
      name: "earlyAccess",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: k
    },
    earlyAccessSeeAllVariant: es ? {
      name: "earlyAccessSeeAllVariant",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: H
    } : {
      name: "earlyAccess",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: H
    },
    entranceSounds: es ? {
      name: "entranceSounds",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.TAKE_ME_THERE,
      onCtaClick: eo,
      perkImage: w
    } : {
      name: "entranceSounds",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: w
    },
    entranceSoundsSeeAllVariation: es ? {
      name: "entranceSoundsSeeAllVariation",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.TAKE_ME_THERE,
      onCtaClick: eo,
      perkImage: W
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: W
    },
    profileEffects: es ? {
      name: "profileEffects",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eu,
      pillText: h.default.Messages.EARLY_ACCESS,
      perkImage: V,
      canReveal: ei,
      dismissibleContentType: n.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: h.default.Messages.EARLY_ACCESS,
      perkImage: V,
      canReveal: ei,
      dismissibleContentType: n.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: h.default.Messages.TAKE_ME_THERE,
      onCtaClick: en,
      perkImage: b
    },
    remixing: es ? {
      name: "remixing",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: Y,
      pillText: h.default.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: Y,
      pillText: h.default.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: h.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(P.UserSettingsSections.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: U,
      hideOnNarrowScreen: !0
    },
    specialMemberPricing: es ? {
      name: "specialMemberPricing",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eu,
      perkImage: Z
    } : {
      name: "specialMemberPricing",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: Z
    },
    specialMemberPricingSeeAllVariant: es ? {
      name: "specialMemberPricingSeeAllVariant",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eu,
      perkImage: X
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: X
    },
    specialShopPerks: es ? {
      name: "specialShopPerks",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eu,
      perkImage: Z
    } : {
      name: "specialShopPerks",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eu,
      perkImage: Z
    },
    unlimitedSuperReactions: es ? {
      name: "unlimitedSuperReactions",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: $,
      hideOnNarrowScreen: !0
    } : {
      name: "unlimitedSuperReactions",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: $,
      hideOnNarrowScreen: !0
    },
    superReactions: {
      name: "superReactions",
      title: h.default.Messages.NITRO_HOME_SUPER_REACTIONS,
      subtitle: h.default.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
      description: h.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      perkImage: q
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: h.default.Messages.NEW_DROP,
      pillText: h.default.Messages.COMING_SOON,
      backgroundImage: K
    },
    badge: {
      name: "badge",
      title: h.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
      subtitle: h.default.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
      perkImage: L,
      description: h.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
    },
    customAppIcons: {
      name: "customAppIcons",
      title: h.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
      perkImage: G,
      description: h.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      descriptionCta: h.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(P.UserSettingsSections.APPEARANCE, null, {
          scrollPosition: M.AppearanceScrollPositions.CUSTOM_APP_ICONS
        })
      }
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: h.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: F,
      description: h.default.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: h.default.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
      subtitle: h.default.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
      perkImage: (0, g.getThemedImage)(t, x, v),
      description: h.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: h.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
      perkImage: (0, g.getThemedImage)(t, j, Q),
      description: h.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
    },
    largeUploads: {
      name: "largeUploads",
      title: h.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: s
      }),
      subtitle: h.default.Messages.NITRO_HOME_UPLOAD_ALL_YOU_WANT,
      perkImage: ee,
      description: h.default.Messages.NITRO_HOME_CARD_UPLOAD_POWER
    },
    hdVideo: {
      name: "hdVideo",
      title: h.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
      perkImage: J,
      description: h.default.Messages.NITRO_HOME_STREAM_UP_TO_4K
    }
  };
  if (null != el) {
    let {
      title: t,
      subtitle: s,
      description: a,
      pillText: i,
      ctaDescription: l,
      dismissibleContentType: n
    } = el;
    ed.freeBoost = {
      name: "freeBoost",
      title: t,
      subtitle: s,
      description: a,
      perkComponent: (0, r.jsx)(A.default, {}),
      descriptionCta: l,
      onCtaClick: () => {
        o.default.open(P.UserSettingsSections.GUILD_BOOSTING, null, {
          analyticsLocations: e
        })
      },
      cardVariant: N.CardVariants.REWARD,
      pillText: i,
      dismissibleContentType: n
    }
  }
  return (0, C.default)("usePerksDiscoverabilityCard") === C.CollectiblesShopMarketingVariants.SHY && Date.now() < et.getTime() && (ed.shyProject = {
    name: "shyProject",
    title: h.default.Messages.NITRO_HOME_SHY_PROJECT_TITLE,
    subtitle: h.default.Messages.NITRO_HOME_SHY_PROJECT_SUBTITLE,
    description: es ? h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB : h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
    descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
    onCtaClick: es ? eu : void 0,
    perkImage: z,
    isPremiumGetCta: !es
  }), ed
}