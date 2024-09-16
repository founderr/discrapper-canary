n.d(t, {
    u: function () {
        return a;
    }
});
var s,
    a,
    r = n(735250);
n(470079);
var i = n(399606),
    l = n(704215),
    o = n(481060),
    c = n(230711),
    d = n(410030),
    _ = n(100527),
    u = n(906732),
    E = n(779618),
    T = n(300284),
    I = n(703656),
    R = n(547972),
    g = n(131951),
    N = n(78839),
    C = n(626135),
    m = n(424218),
    p = n(63063),
    A = n(74538),
    f = n(860489),
    M = n(471309),
    h = n(827686),
    S = n(494127),
    x = n(314684),
    b = n(687362),
    O = n(119269),
    P = n(467685),
    v = n(391110),
    L = n(75077),
    Z = n(976465),
    D = n(474936),
    U = n(981631),
    B = n(526761),
    j = n(332325),
    G = n(689938),
    w = n(977341),
    y = n(660372),
    H = n(926433),
    k = n(302036),
    F = n(994554),
    V = n(704565),
    W = n(393305),
    K = n(338879),
    Y = n(609926),
    z = n(203302),
    Q = n(766491),
    q = n(193943),
    X = n(707046),
    J = n(488459),
    $ = n(334347),
    ee = n(132015),
    et = n(142416),
    en = n(607762),
    es = n(474106),
    ea = n(567452),
    er = n(572501),
    ei = n(755590),
    el = n(909910),
    eo = n(637810),
    ec = n(570423),
    ed = n(912429),
    e_ = n(91394),
    eu = n(209672),
    eE = n(698173),
    eT = n(926262);
((s = a || (a = {})).AVATAR_DECORATIONS = 'avatarDecorations'), (s.CLIENT_THEMES = 'clientThemes'), (s.CLIPS = 'clips'), (s.EARLY_ACCESS = 'earlyAccess'), (s.ENTRANCE_SOUNDS = 'entranceSounds'), (s.PROFILE_EFFECTS = 'profileEffects'), (s.PROFILES = 'profiles'), (s.REMIXING = 'remixing'), (s.SERVER_BOOSTS = 'serverBoosts'), (s.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (s.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (s.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (s.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (s.SUPER_REACTIONS = 'superReactions'), (s.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (s.CUSTOM_APP_ICONS = 'customAppIcons'), (s.MORE_EMOJI_POWER = 'moreEmojiPower'), (s.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (s.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (s.LARGE_UPLOADS = 'largeUploads'), (s.HD_VIDEO = 'hdVideo'), (s.BADGE = 'badge'), (s.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (s.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (s.FREE_BOOST = 'freeBoost'), (s.REFERRAL_PROGRAM = 'referralProgram'), (s.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (s.SERVER_PROFILES = 'serverProfiles'), (s.SHY_PROJECT = 'shyProject'), (s.TENURE_BADGE = 'tenureBadge');
t.Z = () => {
    let { analyticsLocations: e } = (0, u.ZP)(_.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, d.ZP)(),
        s = (0, m.BU)(D.Uq / 1024, { useKibibytes: !0 }),
        a = (0, i.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        eI = null != a ? A.ZP.getPremiumPlanItem(a) : null,
        eR = null != eI ? A.ZP.getSkuIdForPlan(eI.planId) : null,
        eg = eR === D.Si.TIER_2,
        eN = eR === D.Si.TIER_0,
        { flipped: eC } = (0, S.JP)(),
        { flipped: em } = (0, S.as)(),
        ep = (0, x.nY)({ showAnimations: !0 }),
        eA = null != ep ? ep.initialPercentage : void 0,
        ef = null != ep ? ep.percentage : void 0,
        eM = (0, E.Z)(g.Z),
        eh = (0, b.Z)(),
        eS = (0, T.Z)({
            scrollPosition: B.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        ex = () => {
            c.Z.open(U.oAB.VOICE, B.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eb = () => {
            (0, I.uL)(U.Z5c.COLLECTIBLES_SHOP);
        },
        eO = () => {
            c.Z.open(U.oAB.APPEARANCE, null, { scrollPosition: B.h1.CUSTOM_APP_ICONS });
        },
        eP = {
            avatarDecorations: eg
                ? {
                      name: 'avatarDecorations',
                      title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
                      description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
                      descriptionCta: G.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: eb,
                      pillText: G.Z.Messages.EARLY_ACCESS,
                      perkImage: z,
                      canReveal: eC,
                      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
                  }
                : {
                      name: 'avatarDecorations',
                      title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
                      description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
                      pillText: G.Z.Messages.EARLY_ACCESS,
                      perkImage: z,
                      canReveal: eC,
                      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
                  },
            clientThemes: {
                name: 'clientThemes',
                title: G.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
                subtitle: G.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
                description: G.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
                descriptionCta: G.Z.Messages.TAKE_ME_THERE,
                onCtaClick: () => {
                    c.Z.open(U.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: V
            },
            clips: eg
                ? {
                      name: 'clips',
                      title: G.Z.Messages.CLIPS,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
                      description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
                      descriptionCta: eM ? G.Z.Messages.TAKE_ME_THERE : G.Z.Messages.LEARN_MORE,
                      pillText: G.Z.Messages.EARLY_ACCESS,
                      onCtaClick: eM
                          ? () => {
                                (0, R.Z)(j.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(p.Z.getArticleURL(U.BhN.CLIPS), '_blank');
                            },
                      perkImage: Q
                  }
                : {
                      name: 'clips',
                      title: G.Z.Messages.CLIPS,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
                      description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
                      pillText: G.Z.Messages.EARLY_ACCESS,
                      perkImage: Q
                  },
            earlyAccess: eg
                ? {
                      name: 'earlyAccess',
                      title: G.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: G.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: G.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: G.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: G.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: G.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            earlyAccessSeeAllVariant: eg
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: G.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: G.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: G.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
                      perkImage: J
                  }
                : {
                      name: 'earlyAccess',
                      title: G.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: G.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: G.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: J
                  },
            entranceSounds: eg
                ? {
                      name: 'entranceSounds',
                      title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
                      descriptionCta: G.Z.Messages.TAKE_ME_THERE,
                      onCtaClick: ex,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSounds',
                      title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
                      perkImage: ee
                  },
            entranceSoundsSeeAllVariation: eg
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
                      descriptionCta: G.Z.Messages.TAKE_ME_THERE,
                      onCtaClick: ex,
                      perkImage: et
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
                      perkImage: et
                  },
            profileEffects: eg
                ? {
                      name: 'profileEffects',
                      title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
                      description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
                      descriptionCta: G.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: eb,
                      pillText: G.Z.Messages.EARLY_ACCESS,
                      perkImage: ea,
                      canReveal: em,
                      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
                  }
                : {
                      name: 'profileEffects',
                      title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
                      description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
                      pillText: G.Z.Messages.EARLY_ACCESS,
                      perkImage: ea,
                      canReveal: em,
                      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
                  },
            profiles: {
                name: 'profiles',
                title: G.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
                subtitle: G.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
                description: G.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
                descriptionCta: G.Z.Messages.TAKE_ME_THERE,
                onCtaClick: eS,
                perkImage: W
            },
            remixing: eg
                ? {
                      name: 'remixing',
                      title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
                      description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
                      perkImage: ei,
                      pillText: G.Z.Messages.EARLY_ACCESS
                  }
                : {
                      name: 'remixing',
                      title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
                      description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
                      perkImage: ei,
                      pillText: G.Z.Messages.EARLY_ACCESS
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: G.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
                subtitle: G.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
                description: G.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
                descriptionCta: G.Z.Messages.TAKE_ME_THERE,
                onCtaClick: () => {
                    c.Z.open(U.oAB.GUILD_BOOSTING, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: K,
                hideOnNarrowScreen: !0
            },
            specialMemberPricing: eg
                ? {
                      name: 'specialMemberPricing',
                      title: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                      descriptionCta: G.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: eb,
                      perkImage: eo
                  }
                : {
                      name: 'specialMemberPricing',
                      title: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: eo
                  },
            specialMemberPricingSeeAllVariant: eg
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                      descriptionCta: G.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: eb,
                      perkImage: ec
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: ec
                  },
            specialShopPerks: eg
                ? {
                      name: 'specialShopPerks',
                      title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
                      description: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                      descriptionCta: G.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: eb,
                      perkImage: eo
                  }
                : {
                      name: 'specialShopPerks',
                      title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
                      subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
                      description: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                      descriptionCta: G.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: eb,
                      perkImage: eo
                  },
            unlimitedSuperReactions: eg
                ? {
                      name: 'unlimitedSuperReactions',
                      title: G.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
                      subtitle: G.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
                      description: G.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
                      perkImage: eE,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: G.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
                      subtitle: G.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
                      description: G.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: eE,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: G.Z.Messages.NITRO_HOME_SUPER_REACTIONS,
                subtitle: G.Z.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
                description: G.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
                perkImage: eu
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: G.Z.Messages.NEW_DROP,
                pillText: G.Z.Messages.COMING_SOON,
                backgroundImage: es
            },
            badge: {
                name: 'badge',
                title: G.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
                subtitle: G.Z.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
                perkImage: y,
                description: G.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: G.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
                subtitle: G.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
                perkImage: q,
                description: G.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
                descriptionCta: G.Z.Messages.TAKE_ME_THERE,
                onCtaClick: eO
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: G.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
                subtitle: G.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
                perkImage: $,
                description: G.Z.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: G.Z.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
                subtitle: G.Z.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
                perkImage: (0, L.gx)(t, H, k),
                description: G.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: G.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
                subtitle: G.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
                perkImage: (0, L.gx)(t, F, ed),
                description: G.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
            },
            largeUploads: {
                name: 'largeUploads',
                title: G.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({ premiumMaxSize: s }),
                subtitle: G.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({ premiumMaxSize: s }),
                perkImage: eT,
                description: G.Z.Messages.NITRO_HOME_CARD_UPLOAD_POWER
            },
            hdVideo: {
                name: 'hdVideo',
                title: G.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
                subtitle: G.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
                perkImage: e_,
                description: G.Z.Messages.NITRO_HOME_STREAM_UP_TO_4K
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
                subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
                description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_DESCRIPTION,
                descriptionCta: eg || eN ? G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
                isPremiumGetCta: !(eg || eN),
                onCtaClick: eg || eN ? eO : void 0,
                perkImage: en
            },
            referralProgram: {
                name: 'referralProgram',
                title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
                subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
                description: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({ helpdeskArticle: p.Z.getArticleURL(U.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: G.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                isPremiumGetCta: !eg || void 0,
                perkImage: er
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
                subtitle: G.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
                descriptionCta: eg ? G.Z.Messages.TAKE_ME_THERE : G.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                isPremiumGetCta: !eg,
                onCtaClick: eg ? eS : void 0,
                perkImage: el
            }
        };
    if (null != eh) {
        let { title: t, subtitle: n, description: s, pillText: a, ctaDescription: i, dismissibleContentType: l } = eh,
            o = (0, r.jsx)('div', {
                className: w.cardComponent,
                children: (0, r.jsx)(O.Z, {
                    showAnimations: !0,
                    percentage: ef,
                    initialPercentage: eA
                })
            });
        eP.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: s,
            perkComponent: o,
            descriptionCta: i,
            onCtaClick: () => {
                c.Z.open(U.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: v.zW.REWARD,
            pillText: a,
            dismissibleContentType: l
        };
    }
    let ev = (0, Z.kG)(),
        { enabled: eL } = (0, M.Z)(),
        { enabled: eZ } = (0, h.Z)(),
        eD = () => {
            C.default.track(U.rMx.OPEN_MODAL, {
                type: 'Tiered Tenure Badge Details',
                location_stack: e,
                location: _.Z.PREMIUM_MARKETING_PERK_CARD,
                source: _.Z.PREMIUM_MARKETING_PERK_CARD
            }),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('16133').then(n.bind(n, 743648));
                    return (t) => (0, r.jsx)(e, { ...t });
                });
        };
    return (
        null != ev &&
            eL &&
            eZ &&
            (eP.tenureBadge = {
                name: 'tenureBadge',
                title: G.Z.Messages.NITRO_HOME_TIERED_TENURE_BADGES_WHATS_NEW_CARD_HEADER,
                pillText: G.Z.Messages.REWARD.toLocaleUpperCase(),
                perkComponent: (0, r.jsx)(P.Z, {}),
                cardVariant: v.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => eD()
            }),
        (0, f.ZP)('usePerksDiscoverabilityCard') === f.P0.SUMMER_2024 &&
            (eP.shyProject = {
                name: 'shyProject',
                title: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                subtitle: G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                description: eg ? G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB : G.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                descriptionCta: G.Z.Messages.VISIT_THE_SHOP_CTA,
                pillText: G.Z.Messages.NITRO_HOME_TAB_NEW.toLocaleUpperCase(),
                onCtaClick: eg ? eb : void 0,
                perkImage: Y,
                isPremiumGetCta: !eg
            }),
        eP
    );
};
