"use strict";
s.r(t), s.d(t, {
  PerksDiscoverabilityCardTypes: function() {
    return i
  }
});
var a, i, r = s("735250");
s("470079");
var n = s("399606"),
  l = s("524437"),
  o = s("230711"),
  u = s("410030"),
  d = s("100527"),
  c = s("906732"),
  _ = s("779618"),
  E = s("335131"),
  f = s("410154"),
  C = s("300284"),
  T = s("131951"),
  I = s("78839"),
  R = s("63063"),
  S = s("74538"),
  p = s("494127"),
  m = s("314684"),
  A = s("687362"),
  N = s("119269"),
  g = s("391110"),
  O = s("75077"),
  P = s("474936"),
  M = s("981631"),
  h = s("526761"),
  L = s("689938"),
  x = s("660372"),
  v = s("926433"),
  j = s("302036"),
  D = s("994554"),
  b = s("704565"),
  U = s("393305"),
  y = s("338879"),
  B = s("203302"),
  G = s("766491"),
  k = s("193943"),
  H = s("707046"),
  F = s("488459"),
  w = s("334347"),
  W = s("132015"),
  K = s("142416"),
  V = s("474106"),
  Y = s("567452"),
  z = s("755590"),
  Z = s("529018"),
  X = s("637810"),
  Q = s("570423"),
  J = s("912429"),
  q = s("91394"),
  $ = s("209672"),
  ee = s("698173"),
  et = s("926262");
let es = new Date("2024-05-07T03:59:00Z");
(a = i || (i = {})).AVATAR_DECORATIONS = "avatarDecorations", a.CLIENT_THEMES = "clientThemes", a.CLIPS = "clips", a.EARLY_ACCESS = "earlyAccess", a.ENTRANCE_SOUNDS = "entranceSounds", a.PROFILE_EFFECTS = "profileEffects", a.PROFILES = "profiles", a.REMIXING = "remixing", a.SERVER_BOOSTS = "serverBoosts", a.SPECIAL_MEMBER_PRICING = "specialMemberPricing", a.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", a.SPECIAL_SHOP_PERKS = "specialShopPerks", a.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", a.SUPER_REACTIONS = "superReactions", a.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", a.CUSTOM_APP_ICONS = "customAppIcons", a.MORE_EMOJI_POWER = "moreEmojiPower", a.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", a.SPECIAL_STICKER_ACCESS = "specialStickerAccess", a.LARGE_UPLOADS = "largeUploads", a.HD_VIDEO = "hdVideo", a.BADGE = "badge", a.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", a.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", a.FREE_BOOST = "freeBoost", a.SHY_PROJECT = "shyProject";
t.default = () => {
  let {
    analyticsLocations: e
  } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD), t = (0, u.default)(), s = L.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, a = (0, n.useStateFromStores)([I.default], () => I.default.getPremiumTypeSubscription()), i = null != a ? S.default.getPremiumPlanItem(a) : null, ea = (null != i ? S.default.getSkuIdForPlan(i.planId) : null) === P.PremiumSubscriptionSKUs.TIER_2, {
    flipped: ei
  } = (0, p.useWhatsNewAvatarDecoRollout)(), {
    flipped: er
  } = (0, p.useWhatsNewProfileFXRollout)(), en = (0, m.useFreeBoostDaysPercentage)({
    showAnimations: !0
  }), el = null != en ? en.initialPercentage : void 0, eo = null != en ? en.percentage : void 0, eu = (0, _.default)(T.default), ed = (0, A.default)(), ec = (0, C.default)({
    scrollPosition: h.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: e
  }), e_ = () => {
    o.default.open(M.UserSettingsSections.VOICE, h.SOUNDBOARD_SUBSECTION, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, eE = () => {
    (0, E.openCollectiblesShop)({
      analyticsLocations: e,
      analyticsSource: d.default.PREMIUM_MARKETING_PERK_CARD
    })
  }, ef = {
    avatarDecorations: ea ? {
      name: "avatarDecorations",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eE,
      pillText: L.default.Messages.EARLY_ACCESS,
      perkImage: B,
      canReveal: ei,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: L.default.Messages.EARLY_ACCESS,
      perkImage: B,
      canReveal: ei,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: L.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(M.UserSettingsSections.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: b
    },
    clips: ea ? {
      name: "clips",
      title: L.default.Messages.CLIPS,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: eu ? L.default.Messages.TAKE_ME_THERE : L.default.Messages.LEARN_MORE,
      pillText: L.default.Messages.EARLY_ACCESS,
      onCtaClick: eu ? () => {
        o.default.open(M.UserSettingsSections.CLIPS, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(R.default.getArticleURL(M.HelpdeskArticles.CLIPS), "_blank")
      },
      perkImage: G
    } : {
      name: "clips",
      title: L.default.Messages.CLIPS,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: L.default.Messages.EARLY_ACCESS,
      perkImage: G
    },
    earlyAccess: ea ? {
      name: "earlyAccess",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: H
    } : {
      name: "earlyAccess",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: H
    },
    earlyAccessSeeAllVariant: ea ? {
      name: "earlyAccessSeeAllVariant",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: F
    } : {
      name: "earlyAccess",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: F
    },
    entranceSounds: ea ? {
      name: "entranceSounds",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.TAKE_ME_THERE,
      onCtaClick: e_,
      perkImage: W
    } : {
      name: "entranceSounds",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: W
    },
    entranceSoundsSeeAllVariation: ea ? {
      name: "entranceSoundsSeeAllVariation",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.TAKE_ME_THERE,
      onCtaClick: e_,
      perkImage: K
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: K
    },
    profileEffects: ea ? {
      name: "profileEffects",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eE,
      pillText: L.default.Messages.EARLY_ACCESS,
      perkImage: Y,
      canReveal: er,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: L.default.Messages.EARLY_ACCESS,
      perkImage: Y,
      canReveal: er,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: L.default.Messages.TAKE_ME_THERE,
      onCtaClick: ec,
      perkImage: U
    },
    remixing: ea ? {
      name: "remixing",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: z,
      pillText: L.default.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: z,
      pillText: L.default.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: L.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: L.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(M.UserSettingsSections.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: y,
      hideOnNarrowScreen: !0
    },
    specialMemberPricing: ea ? {
      name: "specialMemberPricing",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eE,
      perkImage: X
    } : {
      name: "specialMemberPricing",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: X
    },
    specialMemberPricingSeeAllVariant: ea ? {
      name: "specialMemberPricingSeeAllVariant",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eE,
      perkImage: Q
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: Q
    },
    specialShopPerks: ea ? {
      name: "specialShopPerks",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eE,
      perkImage: X
    } : {
      name: "specialShopPerks",
      title: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eE,
      perkImage: X
    },
    unlimitedSuperReactions: ea ? {
      name: "unlimitedSuperReactions",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: ee,
      hideOnNarrowScreen: !0
    } : {
      name: "unlimitedSuperReactions",
      title: L.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: L.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: L.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: ee,
      hideOnNarrowScreen: !0
    },
    superReactions: {
      name: "superReactions",
      title: L.default.Messages.NITRO_HOME_SUPER_REACTIONS,
      subtitle: L.default.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
      description: L.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      perkImage: $
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: L.default.Messages.NEW_DROP,
      pillText: L.default.Messages.COMING_SOON,
      backgroundImage: V
    },
    badge: {
      name: "badge",
      title: L.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
      subtitle: L.default.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
      perkImage: x,
      description: L.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
    },
    customAppIcons: {
      name: "customAppIcons",
      title: L.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
      perkImage: k,
      description: L.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      descriptionCta: L.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(M.UserSettingsSections.APPEARANCE, null, {
          scrollPosition: h.AppearanceScrollPositions.CUSTOM_APP_ICONS
        })
      }
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: L.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: w,
      description: L.default.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: L.default.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
      subtitle: L.default.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
      perkImage: (0, O.getThemedImage)(t, v, j),
      description: L.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: L.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
      perkImage: (0, O.getThemedImage)(t, D, J),
      description: L.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
    },
    largeUploads: {
      name: "largeUploads",
      title: L.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: s
      }),
      subtitle: L.default.Messages.NITRO_HOME_UPLOAD_ALL_YOU_WANT,
      perkImage: et,
      description: L.default.Messages.NITRO_HOME_CARD_UPLOAD_POWER
    },
    hdVideo: {
      name: "hdVideo",
      title: L.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
      subtitle: L.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
      perkImage: q,
      description: L.default.Messages.NITRO_HOME_STREAM_UP_TO_4K
    }
  };
  if (null != ed) {
    let {
      title: t,
      subtitle: s,
      description: a,
      pillText: i,
      ctaDescription: n,
      dismissibleContentType: l
    } = ed, u = (0, r.jsx)(N.default, {
      showAnimations: !0,
      percentage: eo,
      initialPercentage: el
    });
    ef.freeBoost = {
      name: "freeBoost",
      title: t,
      subtitle: s,
      description: a,
      perkComponent: u,
      descriptionCta: n,
      onCtaClick: () => {
        o.default.open(M.UserSettingsSections.GUILD_BOOSTING, null, {
          analyticsLocations: e
        })
      },
      cardVariant: g.CardVariants.REWARD,
      pillText: i,
      dismissibleContentType: l
    }
  }
  return (0, f.default)("usePerksDiscoverabilityCard") === f.CollectiblesShopMarketingVariants.SHY && Date.now() < es.getTime() && (ef.shyProject = {
    name: "shyProject",
    title: L.default.Messages.NITRO_HOME_SHY_PROJECT_TITLE,
    subtitle: L.default.Messages.NITRO_HOME_SHY_PROJECT_SUBTITLE,
    description: ea ? L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB : L.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
    descriptionCta: L.default.Messages.VISIT_THE_SHOP_CTA,
    onCtaClick: ea ? eE : void 0,
    perkImage: Z,
    isPremiumGetCta: !ea
  }), ef
}