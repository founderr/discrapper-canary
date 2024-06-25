s.d(t, {
  u: function() {
    return a
  }
});
var n, a, i = s(735250);
s(470079);
var r = s(399606),
  l = s(704215),
  o = s(230711),
  c = s(410030),
  E = s(100527),
  _ = s(906732),
  u = s(779618),
  d = s(300284),
  T = s(703656),
  I = s(547972),
  R = s(131951),
  A = s(78839),
  N = s(63063),
  C = s(74538),
  g = s(528865),
  m = s(781922),
  M = s(885462),
  S = s(494127),
  p = s(314684),
  h = s(687362),
  f = s(119269),
  O = s(391110),
  x = s(75077),
  L = s(474936),
  P = s(981631),
  v = s(526761),
  Z = s(332325),
  b = s(689938),
  D = s(660372),
  U = s(926433),
  j = s(302036),
  G = s(994554),
  B = s(704565),
  H = s(393305),
  y = s(338879),
  k = s(203302),
  V = s(766491),
  F = s(193943),
  w = s(707046),
  W = s(488459),
  K = s(334347),
  Y = s(132015),
  z = s(142416),
  Q = s(607762),
  X = s(474106),
  q = s(567452),
  J = s(572501),
  $ = s(755590),
  ee = s(909910),
  et = s(637810),
  es = s(570423),
  en = s(912429),
  ea = s(91394),
  ei = s(209672),
  er = s(698173),
  el = s(926262);
let eo = "usePerksDiscoverabilityCards";
(n = a || (a = {})).AVATAR_DECORATIONS = "avatarDecorations", n.CLIENT_THEMES = "clientThemes", n.CLIPS = "clips", n.EARLY_ACCESS = "earlyAccess", n.ENTRANCE_SOUNDS = "entranceSounds", n.PROFILE_EFFECTS = "profileEffects", n.PROFILES = "profiles", n.REMIXING = "remixing", n.SERVER_BOOSTS = "serverBoosts", n.SPECIAL_MEMBER_PRICING = "specialMemberPricing", n.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", n.SPECIAL_SHOP_PERKS = "specialShopPerks", n.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", n.SUPER_REACTIONS = "superReactions", n.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", n.CUSTOM_APP_ICONS = "customAppIcons", n.MORE_EMOJI_POWER = "moreEmojiPower", n.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", n.SPECIAL_STICKER_ACCESS = "specialStickerAccess", n.LARGE_UPLOADS = "largeUploads", n.HD_VIDEO = "hdVideo", n.BADGE = "badge", n.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", n.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", n.FREE_BOOST = "freeBoost", n.REFERRAL_PROGRAM = "referralProgram", n.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", n.SERVER_PROFILES = "serverProfiles";
t.Z = () => {
  let {
    analyticsLocations: e
  } = (0, _.ZP)(E.Z.PREMIUM_MARKETING_PERK_CARD), t = (0, c.ZP)(), s = b.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, n = (0, r.e7)([A.ZP], () => A.ZP.getPremiumTypeSubscription()), a = null != n ? C.ZP.getPremiumPlanItem(n) : null, ec = null != a ? C.ZP.getSkuIdForPlan(a.planId) : null, eE = ec === L.Si.TIER_2, e_ = ec === L.Si.TIER_0, {
    flipped: eu
  } = (0, S.JP)(), {
    flipped: ed
  } = (0, S.as)(), eT = (0, p.nY)({
    showAnimations: !0
  }), eI = null != eT ? eT.initialPercentage : void 0, eR = null != eT ? eT.percentage : void 0, eA = (0, u.Z)(R.Z), eN = (0, h.Z)(), {
    canFlipCard: eC
  } = m.X.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), {
    canFlipCard: eg
  } = g.W.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), {
    canFlipCard: em
  } = M.e.useExperiment({
    location: eo
  }, {
    autoTrackExposure: !1
  }), eM = (0, d.Z)({
    scrollPosition: v.Y_.TRY_IT_OUT,
    analyticsLocations: e
  }), eS = () => {
    o.Z.open(P.oAB.VOICE, v.GA, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, ep = () => {
    (0, T.uL)(P.Z5c.COLLECTIBLES_SHOP)
  }, eh = () => {
    o.Z.open(P.oAB.APPEARANCE, null, {
      scrollPosition: v.h1.CUSTOM_APP_ICONS
    })
  }, ef = {
    avatarDecorations: eE ? {
      name: "avatarDecorations",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: b.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ep,
      pillText: b.Z.Messages.EARLY_ACCESS,
      perkImage: k,
      canReveal: eu,
      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: b.Z.Messages.EARLY_ACCESS,
      perkImage: k,
      canReveal: eu,
      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: b.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: b.Z.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.Z.open(P.oAB.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: B
    },
    clips: eE ? {
      name: "clips",
      title: b.Z.Messages.CLIPS,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: eA ? b.Z.Messages.TAKE_ME_THERE : b.Z.Messages.LEARN_MORE,
      pillText: b.Z.Messages.EARLY_ACCESS,
      onCtaClick: eA ? () => {
        (0, I.Z)(Z.Z.CLIPS, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(N.Z.getArticleURL(P.BhN.CLIPS), "_blank")
      },
      perkImage: V
    } : {
      name: "clips",
      title: b.Z.Messages.CLIPS,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: b.Z.Messages.EARLY_ACCESS,
      perkImage: V
    },
    earlyAccess: eE ? {
      name: "earlyAccess",
      title: b.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: b.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: b.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: w
    } : {
      name: "earlyAccess",
      title: b.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: b.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: b.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: w
    },
    earlyAccessSeeAllVariant: eE ? {
      name: "earlyAccessSeeAllVariant",
      title: b.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: b.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: b.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: W
    } : {
      name: "earlyAccess",
      title: b.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: b.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: b.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: W
    },
    entranceSounds: eE ? {
      name: "entranceSounds",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: b.Z.Messages.TAKE_ME_THERE,
      onCtaClick: eS,
      perkImage: Y
    } : {
      name: "entranceSounds",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: Y
    },
    entranceSoundsSeeAllVariation: eE ? {
      name: "entranceSoundsSeeAllVariation",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: b.Z.Messages.TAKE_ME_THERE,
      onCtaClick: eS,
      perkImage: z
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: z
    },
    profileEffects: eE ? {
      name: "profileEffects",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: b.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ep,
      pillText: b.Z.Messages.EARLY_ACCESS,
      perkImage: q,
      canReveal: ed,
      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: b.Z.Messages.EARLY_ACCESS,
      perkImage: q,
      canReveal: ed,
      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: b.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: b.Z.Messages.TAKE_ME_THERE,
      onCtaClick: eM,
      perkImage: H
    },
    remixing: eE ? {
      name: "remixing",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: $,
      pillText: b.Z.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: $,
      pillText: b.Z.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: b.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: b.Z.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.Z.open(P.oAB.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: y,
      hideOnNarrowScreen: !0
    },
    specialMemberPricing: eE ? {
      name: "specialMemberPricing",
      title: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: b.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ep,
      perkImage: et
    } : {
      name: "specialMemberPricing",
      title: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: et
    },
    specialMemberPricingSeeAllVariant: eE ? {
      name: "specialMemberPricingSeeAllVariant",
      title: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: b.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ep,
      perkImage: es
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: es
    },
    specialShopPerks: eE ? {
      name: "specialShopPerks",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: b.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ep,
      perkImage: et
    } : {
      name: "specialShopPerks",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: b.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: b.Z.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: ep,
      perkImage: et
    },
    unlimitedSuperReactions: eE ? {
      name: "unlimitedSuperReactions",
      title: b.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: b.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: b.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: er,
      hideOnNarrowScreen: !0
    } : {
      name: "unlimitedSuperReactions",
      title: b.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: b.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: b.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: er,
      hideOnNarrowScreen: !0
    },
    superReactions: {
      name: "superReactions",
      title: b.Z.Messages.NITRO_HOME_SUPER_REACTIONS,
      subtitle: b.Z.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
      description: b.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      perkImage: ei
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: b.Z.Messages.NEW_DROP,
      pillText: b.Z.Messages.COMING_SOON,
      backgroundImage: X
    },
    badge: {
      name: "badge",
      title: b.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
      subtitle: b.Z.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
      perkImage: D,
      description: b.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
    },
    customAppIcons: {
      name: "customAppIcons",
      title: b.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
      perkImage: F,
      description: b.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      descriptionCta: b.Z.Messages.TAKE_ME_THERE,
      onCtaClick: eh
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: b.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: K,
      description: b.Z.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: b.Z.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
      subtitle: b.Z.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
      perkImage: (0, x.gx)(t, U, j),
      description: b.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: b.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
      perkImage: (0, x.gx)(t, G, en),
      description: b.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
    },
    largeUploads: {
      name: "largeUploads",
      title: b.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: s
      }),
      subtitle: b.Z.Messages.NITRO_HOME_UPLOAD_ALL_YOU_WANT,
      perkImage: el,
      description: b.Z.Messages.NITRO_HOME_CARD_UPLOAD_POWER
    },
    hdVideo: {
      name: "hdVideo",
      title: b.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
      perkImage: ea,
      description: b.Z.Messages.NITRO_HOME_STREAM_UP_TO_4K
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_DESCRIPTION,
      descriptionCta: eE || e_ ? b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
      isPremiumGetCta: !(eE || e_),
      onCtaClick: eE || e_ ? eh : void 0,
      perkImage: Q,
      canReveal: eg,
      dismissibleContentType: l.z.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP
    },
    referralProgram: {
      name: "referralProgram",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
      description: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({
        helpdeskArticle: N.Z.getArticleURL(P.BhN.REFERRAL_PROGRAM)
      }),
      descriptionCta: b.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
      isPremiumGetCta: !eE || void 0,
      perkImage: J,
      canReveal: eC,
      dismissibleContentType: l.z.WHATS_NEW_REFERRAL_PROGRAM_FLIP
    },
    serverProfiles: {
      name: "serverProfiles",
      title: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
      subtitle: b.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
      descriptionCta: eE ? b.Z.Messages.TAKE_ME_THERE : b.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
      isPremiumGetCta: !eE,
      onCtaClick: eE ? eM : void 0,
      perkImage: ee,
      canReveal: em,
      dismissibleContentType: l.z.WHATS_NEW_SERVER_PROFILE_FLIP
    }
  };
  if (null != eN) {
    let {
      title: t,
      subtitle: s,
      description: n,
      pillText: a,
      ctaDescription: r,
      dismissibleContentType: l
    } = eN, c = (0, i.jsx)(f.Z, {
      showAnimations: !0,
      percentage: eR,
      initialPercentage: eI
    });
    ef.freeBoost = {
      name: "freeBoost",
      title: t,
      subtitle: s,
      description: n,
      perkComponent: c,
      descriptionCta: r,
      onCtaClick: () => {
        o.Z.open(P.oAB.GUILD_BOOSTING, null, {
          analyticsLocations: e
        })
      },
      cardVariant: O.zW.REWARD,
      pillText: a,
      dismissibleContentType: l
    }
  }
  return ef
}