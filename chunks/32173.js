t.d(s, {
  u: function() {
    return a
  }
});
var n, a, r = t(735250);
t(470079);
var i = t(399606),
  l = t(704215),
  o = t(230711),
  _ = t(410030),
  c = t(100527),
  E = t(906732),
  u = t(779618),
  d = t(300284),
  R = t(703656),
  I = t(547972),
  T = t(131951),
  A = t(78839),
  M = t(63063),
  S = t(74538),
  N = t(528865),
  p = t(781922),
  m = t(885462),
  C = t(494127),
  g = t(314684),
  f = t(687362),
  P = t(119269),
  O = t(391110),
  x = t(75077),
  h = t(474936),
  L = t(981631),
  b = t(526761),
  v = t(332325),
  Z = t(689938),
  D = t(660372),
  U = t(926433),
  B = t(302036),
  j = t(994554),
  G = t(704565),
  H = t(393305),
  W = t(338879),
  k = t(203302),
  K = t(766491),
  F = t(193943),
  w = t(707046),
  V = t(488459),
  y = t(334347),
  Y = t(132015),
  z = t(142416),
  Q = t(607762),
  X = t(474106),
  J = t(567452),
  $ = t(572501),
  q = t(755590),
  ee = t(909910),
  es = t(637810),
  et = t(570423),
  en = t(912429),
  ea = t(91394),
  er = t(209672),
  ei = t(698173),
  el = t(926262);
let eo = "usePerksDiscoverabilityCards";
(n = a || (a = {})).AVATAR_DECORATIONS = "avatarDecorations", n.CLIENT_THEMES = "clientThemes", n.CLIPS = "clips", n.EARLY_ACCESS = "earlyAccess", n.ENTRANCE_SOUNDS = "entranceSounds", n.PROFILE_EFFECTS = "profileEffects", n.PROFILES = "profiles", n.REMIXING = "remixing", n.SERVER_BOOSTS = "serverBoosts", n.SPECIAL_MEMBER_PRICING = "specialMemberPricing", n.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", n.SPECIAL_SHOP_PERKS = "specialShopPerks", n.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", n.SUPER_REACTIONS = "superReactions", n.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", n.CUSTOM_APP_ICONS = "customAppIcons", n.MORE_EMOJI_POWER = "moreEmojiPower", n.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", n.SPECIAL_STICKER_ACCESS = "specialStickerAccess", n.LARGE_UPLOADS = "largeUploads", n.HD_VIDEO = "hdVideo", n.BADGE = "badge", n.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", n.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", n.FREE_BOOST = "freeBoost", n.REFERRAL_PROGRAM = "referralProgram", n.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", n.SERVER_PROFILES = "serverProfiles";
s.Z = () => {
  let {
    analyticsLocations: e
  } = (0, E.ZP)(c.Z.PREMIUM_MARKETING_PERK_CARD), s = (0, _.ZP)(), t = Z.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, n = (0, i.e7)([A.ZP], () => A.ZP.getPremiumTypeSubscription()), a = null != n ? S.ZP.getPremiumPlanItem(n) : null, e_ = null != a ? S.ZP.getSkuIdForPlan(a.planId) : null, ec = e_ === h.Si.TIER_2, eE = e_ === h.Si.TIER_0, {
    flipped: eu
  } = (0, C.JP)(), {
    flipped: ed
  } = (0, C.as)(), eR = (0, g.nY)({
    showAnimations: !0
  }), eI = null != eR ? eR.initialPercentage : void 0, eT = null != eR ? eR.percentage : void 0, eA = (0, u.Z)(T.Z), eM = (0, f.Z)(), {
    canFlipCard: eS
  } = p.X.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), {
    canFlipCard: eN
  } = N.W.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), {
    canFlipCard: ep
  } = m.e.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), em = (0, d.Z)({
    scrollPosition: b.Y_.TRY_IT_OUT,
    analyticsLocations: e
  }), eC = () => {
    o.Z.open(L.oAB.VOICE, b.GA, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, eg = () => {
    (0, R.uL)(L.Z5c.COLLECTIBLES_SHOP)
  }, ef = () => {
    o.Z.open(L.oAB.APPEARANCE, null, {
      scrollPosition: b.h1.CUSTOM_APP_ICONS
    })
  }, eP = {
    avatarDecorations: ec ? {
      name: "avatarDecorations",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eg,
      pillText: Z.Z.Messages.EARLY_ACCESS,
      perkImage: k,
      canReveal: eu,
      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: Z.Z.Messages.EARLY_ACCESS,
      perkImage: k,
      canReveal: eu,
      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.Z.open(L.oAB.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: G
    },
    clips: ec ? {
      name: "clips",
      title: Z.Z.Messages.CLIPS,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: eA ? Z.Z.Messages.TAKE_ME_THERE : Z.Z.Messages.LEARN_MORE,
      pillText: Z.Z.Messages.EARLY_ACCESS,
      onCtaClick: eA ? () => {
        (0, I.Z)(v.Z.CLIPS, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(M.Z.getArticleURL(L.BhN.CLIPS), "_blank")
      },
      perkImage: K
    } : {
      name: "clips",
      title: Z.Z.Messages.CLIPS,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: Z.Z.Messages.EARLY_ACCESS,
      perkImage: K
    },
    earlyAccess: ec ? {
      name: "earlyAccess",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: w
    } : {
      name: "earlyAccess",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: w
    },
    earlyAccessSeeAllVariant: ec ? {
      name: "earlyAccessSeeAllVariant",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: V
    } : {
      name: "earlyAccess",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: V
    },
    entranceSounds: ec ? {
      name: "entranceSounds",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
      onCtaClick: eC,
      perkImage: Y
    } : {
      name: "entranceSounds",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: Y
    },
    entranceSoundsSeeAllVariation: ec ? {
      name: "entranceSoundsSeeAllVariation",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
      onCtaClick: eC,
      perkImage: z
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: z
    },
    profileEffects: ec ? {
      name: "profileEffects",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eg,
      pillText: Z.Z.Messages.EARLY_ACCESS,
      perkImage: J,
      canReveal: ed,
      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: Z.Z.Messages.EARLY_ACCESS,
      perkImage: J,
      canReveal: ed,
      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
      onCtaClick: em,
      perkImage: H
    },
    remixing: ec ? {
      name: "remixing",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: q,
      pillText: Z.Z.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: q,
      pillText: Z.Z.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.Z.open(L.oAB.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: W,
      hideOnNarrowScreen: !0
    },
    specialMemberPricing: ec ? {
      name: "specialMemberPricing",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eg,
      perkImage: es
    } : {
      name: "specialMemberPricing",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: es
    },
    specialMemberPricingSeeAllVariant: ec ? {
      name: "specialMemberPricingSeeAllVariant",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eg,
      perkImage: et
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: et
    },
    specialShopPerks: ec ? {
      name: "specialShopPerks",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eg,
      perkImage: es
    } : {
      name: "specialShopPerks",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eg,
      perkImage: es
    },
    unlimitedSuperReactions: ec ? {
      name: "unlimitedSuperReactions",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: ei,
      hideOnNarrowScreen: !0
    } : {
      name: "unlimitedSuperReactions",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: ei,
      hideOnNarrowScreen: !0
    },
    superReactions: {
      name: "superReactions",
      title: Z.Z.Messages.NITRO_HOME_SUPER_REACTIONS,
      subtitle: Z.Z.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
      description: Z.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      perkImage: er
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: Z.Z.Messages.NEW_DROP,
      pillText: Z.Z.Messages.COMING_SOON,
      backgroundImage: X
    },
    badge: {
      name: "badge",
      title: Z.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
      subtitle: Z.Z.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
      perkImage: D,
      description: Z.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
    },
    customAppIcons: {
      name: "customAppIcons",
      title: Z.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
      perkImage: F,
      description: Z.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
      onCtaClick: ef
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: Z.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: y,
      description: Z.Z.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: Z.Z.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
      subtitle: Z.Z.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
      perkImage: (0, x.gx)(s, U, B),
      description: Z.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: Z.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
      perkImage: (0, x.gx)(s, j, en),
      description: Z.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
    },
    largeUploads: {
      name: "largeUploads",
      title: Z.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: t
      }),
      subtitle: Z.Z.Messages.NITRO_HOME_UPLOAD_ALL_YOU_WANT,
      perkImage: el,
      description: Z.Z.Messages.NITRO_HOME_CARD_UPLOAD_POWER
    },
    hdVideo: {
      name: "hdVideo",
      title: Z.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
      perkImage: ea,
      description: Z.Z.Messages.NITRO_HOME_STREAM_UP_TO_4K
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_DESCRIPTION,
      descriptionCta: ec || eE ? Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
      isPremiumGetCta: !(ec || eE),
      onCtaClick: ec || eE ? ef : void 0,
      perkImage: Q,
      canReveal: eN,
      dismissibleContentType: l.z.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP
    },
    referralProgram: {
      name: "referralProgram",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({
        helpdeskArticle: M.Z.getArticleURL(L.BhN.REFERRAL_PROGRAM)
      }),
      descriptionCta: Z.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
      isPremiumGetCta: !ec || void 0,
      perkImage: $,
      canReveal: eS,
      dismissibleContentType: l.z.WHATS_NEW_REFERRAL_PROGRAM_FLIP
    },
    serverProfiles: {
      name: "serverProfiles",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
      descriptionCta: ec ? Z.Z.Messages.TAKE_ME_THERE : Z.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
      isPremiumGetCta: !ec,
      onCtaClick: ec ? em : void 0,
      perkImage: ee,
      canReveal: ep,
      dismissibleContentType: l.z.WHATS_NEW_SERVER_PROFILE_FLIP
    }
  };
  if (null != eM) {
    let {
      title: s,
      subtitle: t,
      description: n,
      pillText: a,
      ctaDescription: i,
      dismissibleContentType: l
    } = eM, _ = (0, r.jsx)(P.Z, {
      showAnimations: !0,
      percentage: eT,
      initialPercentage: eI
    });
    eP.freeBoost = {
      name: "freeBoost",
      title: s,
      subtitle: t,
      description: n,
      perkComponent: _,
      descriptionCta: i,
      onCtaClick: () => {
        o.Z.open(L.oAB.GUILD_BOOSTING, null, {
          analyticsLocations: e
        })
      },
      cardVariant: O.zW.REWARD,
      pillText: a,
      dismissibleContentType: l
    }
  }
  return eP
}