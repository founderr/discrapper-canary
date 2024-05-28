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
  c = s("100527"),
  d = s("906732"),
  _ = s("779618"),
  E = s("335131"),
  R = s("300284"),
  T = s("547972"),
  f = s("131951"),
  m = s("78839"),
  I = s("63063"),
  S = s("74538"),
  p = s("528865"),
  A = s("781922"),
  g = s("885462"),
  N = s("494127"),
  M = s("314684"),
  C = s("687362"),
  P = s("119269"),
  O = s("391110"),
  x = s("75077"),
  b = s("474936"),
  h = s("981631"),
  D = s("526761"),
  v = s("332325"),
  L = s("689938"),
  U = s("660372"),
  B = s("926433"),
  k = s("302036"),
  j = s("994554"),
  G = s("704565"),
  y = s("393305"),
  H = s("338879"),
  F = s("203302"),
  W = s("766491"),
  w = s("193943"),
  K = s("707046"),
  V = s("488459"),
  Y = s("334347"),
  z = s("132015"),
  Q = s("142416"),
  J = s("607762"),
  X = s("474106"),
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
  } = (0, d.default)(c.default.PREMIUM_MARKETING_PERK_CARD), t = (0, u.default)(), s = L.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, a = (0, n.useStateFromStores)([m.default], () => m.default.getPremiumTypeSubscription()), r = null != a ? S.default.getPremiumPlanItem(a) : null, eu = (null != r ? S.default.getSkuIdForPlan(r.planId) : null) === b.PremiumSubscriptionSKUs.TIER_2, {
    flipped: ec
  } = (0, N.useWhatsNewAvatarDecoRollout)(), {
    flipped: ed
  } = (0, N.useWhatsNewProfileFXRollout)(), e_ = (0, M.useFreeBoostDaysPercentage)({
    showAnimations: !0
  }), eE = null != e_ ? e_.initialPercentage : void 0, eR = null != e_ ? e_.percentage : void 0, eT = (0, _.default)(f.default), ef = (0, C.default)(), {
    canFlipCard: em
  } = A.ReferralProgramWhatsNewCardExperiment.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), {
    canFlipCard: eI
  } = p.June2024NewAppStylesWhatsNewCardExperiment.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), {
    canFlipCard: eS
  } = g.ServerProfilesExperiment.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), ep = (0, R.default)({
    scrollPosition: D.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: e
  }), eA = () => {
    o.default.open(h.UserSettingsSections.VOICE, D.SOUNDBOARD_SUBSECTION, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, eg = () => {
    (0, E.openCollectiblesShop)({
      analyticsLocations: e,
      analyticsSource: c.default.PREMIUM_MARKETING_PERK_CARD
    })
  }, eN = () => {
    o.default.open(h.UserSettingsSections.APPEARANCE, null, {
      scrollPosition: D.AppearanceScrollPositions.CUSTOM_APP_ICONS
    })
  }, eM = {
    avatarDecorations: eu ? {
      name: "avatarDecorations",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eg,
      pillText: L.default.Messages.EARLY_ACCESS,
      perkImage: F,
      canReveal: ec,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: L.default.Messages.EARLY_ACCESS,
      perkImage: F,
      canReveal: ec,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: L.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(h.UserSettingsSections.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: G
    },
    clips: eu ? {
      name: "clips",
      title: L.default.Messages.CLIPS,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: eT ? L.default.Messages.TAKE_ME_THERE : L.default.Messages.LEARN_MORE,
      pillText: L.default.Messages.EARLY_ACCESS,
      onCtaClick: eT ? () => {
        (0, T.default)(v.GameSettingsTab.CLIPS, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(I.default.getArticleURL(h.HelpdeskArticles.CLIPS), "_blank")
      },
      perkImage: W
    } : {
      name: "clips",
      title: L.default.Messages.CLIPS,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: L.default.Messages.EARLY_ACCESS,
      perkImage: W
    },
    earlyAccess: eu ? {
      name: "earlyAccess",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: K
    } : {
      name: "earlyAccess",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: K
    },
    earlyAccessSeeAllVariant: eu ? {
      name: "earlyAccessSeeAllVariant",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: V
    } : {
      name: "earlyAccess",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: V
    },
    entranceSounds: eu ? {
      name: "entranceSounds",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.TAKE_ME_THERE,
      onCtaClick: eA,
      perkImage: z
    } : {
      name: "entranceSounds",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: z
    },
    entranceSoundsSeeAllVariation: eu ? {
      name: "entranceSoundsSeeAllVariation",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.TAKE_ME_THERE,
      onCtaClick: eA,
      perkImage: Q
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: Q
    },
    profileEffects: eu ? {
      name: "profileEffects",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eg,
      pillText: L.default.Messages.EARLY_ACCESS,
      perkImage: Z,
      canReveal: ed,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: L.default.Messages.EARLY_ACCESS,
      perkImage: Z,
      canReveal: ed,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: L.default.Messages.TAKE_ME_THERE,
      onCtaClick: ep,
      perkImage: y
    },
    remixing: eu ? {
      name: "remixing",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: $,
      pillText: L.default.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: $,
      pillText: L.default.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: L.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(h.UserSettingsSections.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: H,
      hideOnNarrowScreen: !0
    },
    specialMemberPricing: eu ? {
      name: "specialMemberPricing",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eg,
      perkImage: et
    } : {
      name: "specialMemberPricing",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: et
    },
    specialMemberPricingSeeAllVariant: eu ? {
      name: "specialMemberPricingSeeAllVariant",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eg,
      perkImage: es
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: es
    },
    specialShopPerks: eu ? {
      name: "specialShopPerks",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eg,
      perkImage: et
    } : {
      name: "specialShopPerks",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eg,
      perkImage: et
    },
    unlimitedSuperReactions: eu ? {
      name: "unlimitedSuperReactions",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: en,
      hideOnNarrowScreen: !0
    } : {
      name: "unlimitedSuperReactions",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: en,
      hideOnNarrowScreen: !0
    },
    superReactions: {
      name: "superReactions",
      title: L.default.Messages.NITRO_HOME_SUPER_REACTIONS,
      subtitle: L.default.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
      description: L.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      perkImage: ei
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: L.default.Messages.NEW_DROP,
      pillText: L.default.Messages.COMING_SOON,
      backgroundImage: X
    },
    badge: {
      name: "badge",
      title: L.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
      subtitle: L.default.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
      perkImage: U,
      description: L.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
    },
    customAppIcons: {
      name: "customAppIcons",
      title: L.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
      perkImage: w,
      description: L.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      descriptionCta: L.default.Messages.TAKE_ME_THERE,
      onCtaClick: eN
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: L.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: Y,
      description: L.default.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: L.default.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
      subtitle: L.default.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
      perkImage: (0, x.getThemedImage)(t, B, k),
      description: L.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: L.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
      perkImage: (0, x.getThemedImage)(t, j, ea),
      description: L.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
    },
    largeUploads: {
      name: "largeUploads",
      title: L.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: s
      }),
      subtitle: L.default.Messages.NITRO_HOME_UPLOAD_ALL_YOU_WANT,
      perkImage: el,
      description: L.default.Messages.NITRO_HOME_CARD_UPLOAD_POWER
    },
    hdVideo: {
      name: "hdVideo",
      title: L.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
      perkImage: er,
      description: L.default.Messages.NITRO_HOME_STREAM_UP_TO_4K
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_DESCRIPTION,
      descriptionCta: eu ? L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
      isPremiumGetCta: !eu,
      onCtaClick: eu ? eN : void 0,
      perkImage: J,
      canReveal: eI,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP
    },
    referralProgram: {
      name: "referralProgram",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({
        helpdeskArticle: I.default.getArticleURL(h.HelpdeskArticles.REFERRAL_PROGRAM)
      }),
      descriptionCta: L.default.Messages.MARKETING_PAGE_CTA_GET_NITRO,
      isPremiumGetCta: !0,
      perkImage: q,
      canReveal: em,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_FLIP
    },
    serverProfiles: {
      name: "serverProfiles",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
      descriptionCta: eu ? L.default.Messages.TAKE_ME_THERE : L.default.Messages.MARKETING_PAGE_CTA_GET_NITRO,
      isPremiumGetCta: !eu,
      onCtaClick: eu ? ep : void 0,
      perkImage: ee,
      canReveal: eS,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_SERVER_PROFILE_FLIP
    }
  };
  if (null != ef) {
    let {
      title: t,
      subtitle: s,
      description: a,
      pillText: r,
      ctaDescription: n,
      dismissibleContentType: l
    } = ef, u = (0, i.jsx)(P.default, {
      showAnimations: !0,
      percentage: eR,
      initialPercentage: eE
    });
    eM.freeBoost = {
      name: "freeBoost",
      title: t,
      subtitle: s,
      description: a,
      perkComponent: u,
      descriptionCta: n,
      onCtaClick: () => {
        o.default.open(h.UserSettingsSections.GUILD_BOOSTING, null, {
          analyticsLocations: e
        })
      },
      cardVariant: O.CardVariants.REWARD,
      pillText: r,
      dismissibleContentType: l
    }
  }
  return eM
}