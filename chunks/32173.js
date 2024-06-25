n.d(t, {
  u: function() {
    return a
  }
});
var s, a, r = n(735250);
n(470079);
var i = n(399606),
  l = n(704215),
  o = n(230711),
  c = n(410030),
  d = n(100527),
  _ = n(906732),
  E = n(779618),
  u = n(300284),
  T = n(703656),
  I = n(547972),
  R = n(131951),
  C = n(78839),
  g = n(63063),
  p = n(74538),
  A = n(528865),
  N = n(781922),
  m = n(885462),
  S = n(494127),
  f = n(314684),
  h = n(687362),
  M = n(119269),
  x = n(391110),
  b = n(75077),
  O = n(474936),
  P = n(981631),
  L = n(526761),
  v = n(332325),
  Z = n(689938),
  D = n(660372),
  B = n(926433),
  U = n(302036),
  j = n(994554),
  G = n(704565),
  H = n(393305),
  y = n(338879),
  k = n(203302),
  w = n(766491),
  F = n(193943),
  V = n(707046),
  W = n(488459),
  K = n(334347),
  Y = n(132015),
  z = n(142416),
  Q = n(607762),
  X = n(474106),
  J = n(567452),
  q = n(572501),
  $ = n(755590),
  ee = n(909910),
  et = n(637810),
  en = n(570423),
  es = n(912429),
  ea = n(91394),
  er = n(209672),
  ei = n(698173),
  el = n(926262);
let eo = "usePerksDiscoverabilityCards";
(s = a || (a = {})).AVATAR_DECORATIONS = "avatarDecorations", s.CLIENT_THEMES = "clientThemes", s.CLIPS = "clips", s.EARLY_ACCESS = "earlyAccess", s.ENTRANCE_SOUNDS = "entranceSounds", s.PROFILE_EFFECTS = "profileEffects", s.PROFILES = "profiles", s.REMIXING = "remixing", s.SERVER_BOOSTS = "serverBoosts", s.SPECIAL_MEMBER_PRICING = "specialMemberPricing", s.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", s.SPECIAL_SHOP_PERKS = "specialShopPerks", s.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", s.SUPER_REACTIONS = "superReactions", s.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", s.CUSTOM_APP_ICONS = "customAppIcons", s.MORE_EMOJI_POWER = "moreEmojiPower", s.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", s.SPECIAL_STICKER_ACCESS = "specialStickerAccess", s.LARGE_UPLOADS = "largeUploads", s.HD_VIDEO = "hdVideo", s.BADGE = "badge", s.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", s.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", s.FREE_BOOST = "freeBoost", s.REFERRAL_PROGRAM = "referralProgram", s.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", s.SERVER_PROFILES = "serverProfiles";
t.Z = () => {
  let {
    analyticsLocations: e
  } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD), t = (0, c.ZP)(), n = Z.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, s = (0, i.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()), a = null != s ? p.ZP.getPremiumPlanItem(s) : null, ec = null != a ? p.ZP.getSkuIdForPlan(a.planId) : null, ed = ec === O.Si.TIER_2, e_ = ec === O.Si.TIER_0, {
    flipped: eE
  } = (0, S.JP)(), {
    flipped: eu
  } = (0, S.as)(), eT = (0, f.nY)({
    showAnimations: !0
  }), eI = null != eT ? eT.initialPercentage : void 0, eR = null != eT ? eT.percentage : void 0, eC = (0, E.Z)(R.Z), eg = (0, h.Z)(), {
    canFlipCard: ep
  } = N.X.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), {
    canFlipCard: eA
  } = A.W.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), {
    canFlipCard: eN
  } = m.e.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), em = (0, u.Z)({
    scrollPosition: L.Y_.TRY_IT_OUT,
    analyticsLocations: e
  }), eS = () => {
    o.Z.open(P.oAB.VOICE, L.GA, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, ef = () => {
    (0, T.uL)(P.Z5c.COLLECTIBLES_SHOP)
  }, eh = () => {
    o.Z.open(P.oAB.APPEARANCE, null, {
      scrollPosition: L.h1.CUSTOM_APP_ICONS
    })
  }, eM = {
    avatarDecorations: ed ? {
      name: "avatarDecorations",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ef,
      pillText: Z.Z.Messages.EARLY_ACCESS,
      perkImage: k,
      canReveal: eE,
      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: Z.Z.Messages.EARLY_ACCESS,
      perkImage: k,
      canReveal: eE,
      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.Z.open(P.oAB.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: G
    },
    clips: ed ? {
      name: "clips",
      title: Z.Z.Messages.CLIPS,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: eC ? Z.Z.Messages.TAKE_ME_THERE : Z.Z.Messages.LEARN_MORE,
      pillText: Z.Z.Messages.EARLY_ACCESS,
      onCtaClick: eC ? () => {
        (0, I.Z)(v.Z.CLIPS, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(g.Z.getArticleURL(P.BhN.CLIPS), "_blank")
      },
      perkImage: w
    } : {
      name: "clips",
      title: Z.Z.Messages.CLIPS,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: Z.Z.Messages.EARLY_ACCESS,
      perkImage: w
    },
    earlyAccess: ed ? {
      name: "earlyAccess",
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
    earlyAccessSeeAllVariant: ed ? {
      name: "earlyAccessSeeAllVariant",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: W
    } : {
      name: "earlyAccess",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: W
    },
    entranceSounds: ed ? {
      name: "entranceSounds",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
      onCtaClick: eS,
      perkImage: Y
    } : {
      name: "entranceSounds",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: Y
    },
    entranceSoundsSeeAllVariation: ed ? {
      name: "entranceSoundsSeeAllVariation",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
      onCtaClick: eS,
      perkImage: z
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: z
    },
    profileEffects: ed ? {
      name: "profileEffects",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ef,
      pillText: Z.Z.Messages.EARLY_ACCESS,
      perkImage: J,
      canReveal: eu,
      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: Z.Z.Messages.EARLY_ACCESS,
      perkImage: J,
      canReveal: eu,
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
    remixing: ed ? {
      name: "remixing",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: $,
      pillText: Z.Z.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: $,
      pillText: Z.Z.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.Z.open(P.oAB.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: y,
      hideOnNarrowScreen: !0
    },
    specialMemberPricing: ed ? {
      name: "specialMemberPricing",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ef,
      perkImage: et
    } : {
      name: "specialMemberPricing",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: et
    },
    specialMemberPricingSeeAllVariant: ed ? {
      name: "specialMemberPricingSeeAllVariant",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ef,
      perkImage: en
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: en
    },
    specialShopPerks: ed ? {
      name: "specialShopPerks",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ef,
      perkImage: et
    } : {
      name: "specialShopPerks",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ef,
      perkImage: et
    },
    unlimitedSuperReactions: ed ? {
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
      onCtaClick: eh
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: Z.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: K,
      description: Z.Z.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: Z.Z.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
      subtitle: Z.Z.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
      perkImage: (0, b.gx)(t, B, U),
      description: Z.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: Z.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
      perkImage: (0, b.gx)(t, j, es),
      description: Z.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
    },
    largeUploads: {
      name: "largeUploads",
      title: Z.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: n
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
      descriptionCta: ed || e_ ? Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
      isPremiumGetCta: !(ed || e_),
      onCtaClick: ed || e_ ? eh : void 0,
      perkImage: Q,
      canReveal: eA,
      dismissibleContentType: l.z.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP
    },
    referralProgram: {
      name: "referralProgram",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
      description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({
        helpdeskArticle: g.Z.getArticleURL(P.BhN.REFERRAL_PROGRAM)
      }),
      descriptionCta: Z.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
      isPremiumGetCta: !ed || void 0,
      perkImage: q,
      canReveal: ep,
      dismissibleContentType: l.z.WHATS_NEW_REFERRAL_PROGRAM_FLIP
    },
    serverProfiles: {
      name: "serverProfiles",
      title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
      subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
      descriptionCta: ed ? Z.Z.Messages.TAKE_ME_THERE : Z.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
      isPremiumGetCta: !ed,
      onCtaClick: ed ? em : void 0,
      perkImage: ee,
      canReveal: eN,
      dismissibleContentType: l.z.WHATS_NEW_SERVER_PROFILE_FLIP
    }
  };
  if (null != eg) {
    let {
      title: t,
      subtitle: n,
      description: s,
      pillText: a,
      ctaDescription: i,
      dismissibleContentType: l
    } = eg, c = (0, r.jsx)(M.Z, {
      showAnimations: !0,
      percentage: eR,
      initialPercentage: eI
    });
    eM.freeBoost = {
      name: "freeBoost",
      title: t,
      subtitle: n,
      description: s,
      perkComponent: c,
      descriptionCta: i,
      onCtaClick: () => {
        o.Z.open(P.oAB.GUILD_BOOSTING, null, {
          analyticsLocations: e
        })
      },
      cardVariant: x.zW.REWARD,
      pillText: a,
      dismissibleContentType: l
    }
  }
  return eM
}