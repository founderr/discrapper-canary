"use strict";
s.r(t), s.d(t, {
  PerksDiscoverabilityCardTypes: function() {
    return r
  }
});
var a, r, i = s("735250");
s("470079");
var n = s("399606"),
  l = s("524437"),
  o = s("230711"),
  u = s("410030"),
  d = s("100527"),
  c = s("906732"),
  _ = s("779618"),
  E = s("335131"),
  T = s("300284"),
  I = s("547972"),
  R = s("131951"),
  f = s("78839"),
  S = s("63063"),
  A = s("74538"),
  m = s("528865"),
  N = s("781922"),
  p = s("885462"),
  g = s("494127"),
  C = s("314684"),
  P = s("687362"),
  O = s("119269"),
  M = s("391110"),
  h = s("75077"),
  L = s("474936"),
  x = s("981631"),
  v = s("526761"),
  D = s("332325"),
  b = s("689938"),
  U = s("660372"),
  j = s("926433"),
  G = s("302036"),
  B = s("994554"),
  y = s("704565"),
  k = s("393305"),
  H = s("338879"),
  F = s("203302"),
  w = s("766491"),
  W = s("193943"),
  K = s("707046"),
  V = s("488459"),
  Y = s("334347"),
  z = s("132015"),
  X = s("142416"),
  Q = s("607762"),
  J = s("474106"),
  Z = s("567452"),
  q = s("572501"),
  $ = s("755590"),
  ee = s("909910"),
  et = s("637810"),
  es = s("570423"),
  ea = s("912429"),
  er = s("91394"),
  ei = s("209672"),
  en = s("698173"),
  el = s("926262");
let eo = "usePerksDiscoverabilityCards";
(a = r || (r = {})).AVATAR_DECORATIONS = "avatarDecorations", a.CLIENT_THEMES = "clientThemes", a.CLIPS = "clips", a.EARLY_ACCESS = "earlyAccess", a.ENTRANCE_SOUNDS = "entranceSounds", a.PROFILE_EFFECTS = "profileEffects", a.PROFILES = "profiles", a.REMIXING = "remixing", a.SERVER_BOOSTS = "serverBoosts", a.SPECIAL_MEMBER_PRICING = "specialMemberPricing", a.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", a.SPECIAL_SHOP_PERKS = "specialShopPerks", a.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", a.SUPER_REACTIONS = "superReactions", a.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", a.CUSTOM_APP_ICONS = "customAppIcons", a.MORE_EMOJI_POWER = "moreEmojiPower", a.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", a.SPECIAL_STICKER_ACCESS = "specialStickerAccess", a.LARGE_UPLOADS = "largeUploads", a.HD_VIDEO = "hdVideo", a.BADGE = "badge", a.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", a.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", a.FREE_BOOST = "freeBoost", a.REFERRAL_PROGRAM = "referralProgram", a.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", a.SERVER_PROFILES = "serverProfiles";
t.default = () => {
  let {
    analyticsLocations: e
  } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD), t = (0, u.default)(), s = b.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, a = (0, n.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()), r = null != a ? A.default.getPremiumPlanItem(a) : null, eu = (null != r ? A.default.getSkuIdForPlan(r.planId) : null) === L.PremiumSubscriptionSKUs.TIER_2, {
    flipped: ed
  } = (0, g.useWhatsNewAvatarDecoRollout)(), {
    flipped: ec
  } = (0, g.useWhatsNewProfileFXRollout)(), e_ = (0, C.useFreeBoostDaysPercentage)({
    showAnimations: !0
  }), eE = null != e_ ? e_.initialPercentage : void 0, eT = null != e_ ? e_.percentage : void 0, eI = (0, _.default)(R.default), eR = (0, P.default)(), {
    canFlipCard: ef
  } = N.ReferralProgramWhatsNewCardExperiment.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), {
    canFlipCard: eS
  } = m.June2024NewAppStylesWhatsNewCardExperiment.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), {
    canFlipCard: eA
  } = p.ServerProfilesExperiment.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), em = (0, T.default)({
    scrollPosition: v.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: e
  }), eN = () => {
    o.default.open(x.UserSettingsSections.VOICE, v.SOUNDBOARD_SUBSECTION, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, ep = () => {
    (0, E.openCollectiblesShop)({
      analyticsLocations: e,
      analyticsSource: d.default.PREMIUM_MARKETING_PERK_CARD
    })
  }, eg = () => {
    o.default.open(x.UserSettingsSections.APPEARANCE, null, {
      scrollPosition: v.AppearanceScrollPositions.CUSTOM_APP_ICONS
    })
  }, eC = {
    avatarDecorations: eu ? {
      name: "avatarDecorations",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: b.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ep,
      pillText: b.default.Messages.EARLY_ACCESS,
      perkImage: F,
      canReveal: ed,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: b.default.Messages.EARLY_ACCESS,
      perkImage: F,
      canReveal: ed,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: b.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: b.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(x.UserSettingsSections.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: y
    },
    clips: eu ? {
      name: "clips",
      title: b.default.Messages.CLIPS,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: eI ? b.default.Messages.TAKE_ME_THERE : b.default.Messages.LEARN_MORE,
      pillText: b.default.Messages.EARLY_ACCESS,
      onCtaClick: eI ? () => {
        (0, I.default)(D.GameSettingsTab.CLIPS, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(S.default.getArticleURL(x.HelpdeskArticles.CLIPS), "_blank")
      },
      perkImage: w
    } : {
      name: "clips",
      title: b.default.Messages.CLIPS,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: b.default.Messages.EARLY_ACCESS,
      perkImage: w
    },
    earlyAccess: eu ? {
      name: "earlyAccess",
      title: b.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: b.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: b.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: K
    } : {
      name: "earlyAccess",
      title: b.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: b.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: b.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: K
    },
    earlyAccessSeeAllVariant: eu ? {
      name: "earlyAccessSeeAllVariant",
      title: b.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: b.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: b.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: V
    } : {
      name: "earlyAccess",
      title: b.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: b.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: b.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: V
    },
    entranceSounds: eu ? {
      name: "entranceSounds",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: b.default.Messages.TAKE_ME_THERE,
      onCtaClick: eN,
      perkImage: z
    } : {
      name: "entranceSounds",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: z
    },
    entranceSoundsSeeAllVariation: eu ? {
      name: "entranceSoundsSeeAllVariation",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: b.default.Messages.TAKE_ME_THERE,
      onCtaClick: eN,
      perkImage: X
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: X
    },
    profileEffects: eu ? {
      name: "profileEffects",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: b.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ep,
      pillText: b.default.Messages.EARLY_ACCESS,
      perkImage: Z,
      canReveal: ec,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: b.default.Messages.EARLY_ACCESS,
      perkImage: Z,
      canReveal: ec,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: b.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: b.default.Messages.TAKE_ME_THERE,
      onCtaClick: em,
      perkImage: k
    },
    remixing: eu ? {
      name: "remixing",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: $,
      pillText: b.default.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: $,
      pillText: b.default.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: b.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: b.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(x.UserSettingsSections.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: H,
      hideOnNarrowScreen: !0
    },
    specialMemberPricing: eu ? {
      name: "specialMemberPricing",
      title: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: b.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ep,
      perkImage: et
    } : {
      name: "specialMemberPricing",
      title: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: et
    },
    specialMemberPricingSeeAllVariant: eu ? {
      name: "specialMemberPricingSeeAllVariant",
      title: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: b.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ep,
      perkImage: es
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: es
    },
    specialShopPerks: eu ? {
      name: "specialShopPerks",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: b.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ep,
      perkImage: et
    } : {
      name: "specialShopPerks",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: b.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: b.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ep,
      perkImage: et
    },
    unlimitedSuperReactions: eu ? {
      name: "unlimitedSuperReactions",
      title: b.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: b.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: b.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: en,
      hideOnNarrowScreen: !0
    } : {
      name: "unlimitedSuperReactions",
      title: b.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: b.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: b.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: en,
      hideOnNarrowScreen: !0
    },
    superReactions: {
      name: "superReactions",
      title: b.default.Messages.NITRO_HOME_SUPER_REACTIONS,
      subtitle: b.default.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
      description: b.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      perkImage: ei
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: b.default.Messages.NEW_DROP,
      pillText: b.default.Messages.COMING_SOON,
      backgroundImage: J
    },
    badge: {
      name: "badge",
      title: b.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
      subtitle: b.default.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
      perkImage: U,
      description: b.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
    },
    customAppIcons: {
      name: "customAppIcons",
      title: b.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
      perkImage: W,
      description: b.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      descriptionCta: b.default.Messages.TAKE_ME_THERE,
      onCtaClick: eg
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: b.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: Y,
      description: b.default.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: b.default.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
      subtitle: b.default.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
      perkImage: (0, h.getThemedImage)(t, j, G),
      description: b.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: b.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
      perkImage: (0, h.getThemedImage)(t, B, ea),
      description: b.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
    },
    largeUploads: {
      name: "largeUploads",
      title: b.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: s
      }),
      subtitle: b.default.Messages.NITRO_HOME_UPLOAD_ALL_YOU_WANT,
      perkImage: el,
      description: b.default.Messages.NITRO_HOME_CARD_UPLOAD_POWER
    },
    hdVideo: {
      name: "hdVideo",
      title: b.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
      perkImage: er,
      description: b.default.Messages.NITRO_HOME_STREAM_UP_TO_4K
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_DESCRIPTION,
      descriptionCta: eu ? b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
      isPremiumGetCta: !eu,
      onCtaClick: eu ? eg : void 0,
      perkImage: Q,
      canReveal: eS,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP
    },
    referralProgram: {
      name: "referralProgram",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
      description: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({
        helpdeskArticle: S.default.getArticleURL(x.HelpdeskArticles.REFERRAL_PROGRAM)
      }),
      descriptionCta: b.default.Messages.MARKETING_PAGE_CTA_GET_NITRO,
      isPremiumGetCta: !eu || void 0,
      perkImage: q,
      canReveal: ef,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_FLIP
    },
    serverProfiles: {
      name: "serverProfiles",
      title: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
      subtitle: b.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
      descriptionCta: eu ? b.default.Messages.TAKE_ME_THERE : b.default.Messages.MARKETING_PAGE_CTA_GET_NITRO,
      isPremiumGetCta: !eu,
      onCtaClick: eu ? em : void 0,
      perkImage: ee,
      canReveal: eA,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_SERVER_PROFILE_FLIP
    }
  };
  if (null != eR) {
    let {
      title: t,
      subtitle: s,
      description: a,
      pillText: r,
      ctaDescription: n,
      dismissibleContentType: l
    } = eR, u = (0, i.jsx)(O.default, {
      showAnimations: !0,
      percentage: eT,
      initialPercentage: eE
    });
    eC.freeBoost = {
      name: "freeBoost",
      title: t,
      subtitle: s,
      description: a,
      perkComponent: u,
      descriptionCta: n,
      onCtaClick: () => {
        o.default.open(x.UserSettingsSections.GUILD_BOOSTING, null, {
          analyticsLocations: e
        })
      },
      cardVariant: M.CardVariants.REWARD,
      pillText: r,
      dismissibleContentType: l
    }
  }
  return eC
}