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
    o = n(230711),
    c = n(410030),
    d = n(100527),
    _ = n(906732),
    u = n(779618),
    E = n(300284),
    T = n(703656),
    I = n(547972),
    R = n(131951),
    C = n(78839),
    g = n(424218),
    N = n(63063),
    p = n(74538),
    m = n(860489),
    A = n(494127),
    f = n(314684),
    S = n(687362),
    h = n(119269),
    M = n(391110),
    x = n(75077),
    O = n(474936),
    b = n(981631),
    P = n(526761),
    v = n(332325),
    L = n(689938),
    Z = n(660372),
    D = n(926433),
    B = n(302036),
    j = n(994554),
    U = n(704565),
    G = n(393305),
    y = n(338879),
    k = n(609926),
    w = n(203302),
    H = n(766491),
    F = n(193943),
    V = n(707046),
    W = n(488459),
    K = n(334347),
    Y = n(132015),
    z = n(142416),
    Q = n(607762),
    q = n(474106),
    J = n(567452),
    X = n(572501),
    $ = n(755590),
    ee = n(909910),
    et = n(637810),
    en = n(570423),
    es = n(912429),
    ea = n(91394),
    er = n(209672),
    ei = n(698173),
    el = n(926262);
((s = a || (a = {})).AVATAR_DECORATIONS = 'avatarDecorations'), (s.CLIENT_THEMES = 'clientThemes'), (s.CLIPS = 'clips'), (s.EARLY_ACCESS = 'earlyAccess'), (s.ENTRANCE_SOUNDS = 'entranceSounds'), (s.PROFILE_EFFECTS = 'profileEffects'), (s.PROFILES = 'profiles'), (s.REMIXING = 'remixing'), (s.SERVER_BOOSTS = 'serverBoosts'), (s.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (s.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (s.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (s.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (s.SUPER_REACTIONS = 'superReactions'), (s.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (s.CUSTOM_APP_ICONS = 'customAppIcons'), (s.MORE_EMOJI_POWER = 'moreEmojiPower'), (s.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (s.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (s.LARGE_UPLOADS = 'largeUploads'), (s.HD_VIDEO = 'hdVideo'), (s.BADGE = 'badge'), (s.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (s.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (s.FREE_BOOST = 'freeBoost'), (s.REFERRAL_PROGRAM = 'referralProgram'), (s.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (s.SERVER_PROFILES = 'serverProfiles'), (s.SHY_PROJECT = 'shyProject');
t.Z = () => {
    let { analyticsLocations: e } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        n = (0, g.BU)(O.Uq / 1024, { useKibibytes: !0 }),
        s = (0, i.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        a = null != s ? p.ZP.getPremiumPlanItem(s) : null,
        eo = null != a ? p.ZP.getSkuIdForPlan(a.planId) : null,
        ec = eo === O.Si.TIER_2,
        ed = eo === O.Si.TIER_0,
        { flipped: e_ } = (0, A.JP)(),
        { flipped: eu } = (0, A.as)(),
        eE = (0, f.nY)({ showAnimations: !0 }),
        eT = null != eE ? eE.initialPercentage : void 0,
        eI = null != eE ? eE.percentage : void 0,
        eR = (0, u.Z)(R.Z),
        eC = (0, S.Z)(),
        eg = (0, E.Z)({
            scrollPosition: P.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eN = () => {
            o.Z.open(b.oAB.VOICE, P.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        ep = () => {
            (0, T.uL)(b.Z5c.COLLECTIBLES_SHOP);
        },
        em = () => {
            o.Z.open(b.oAB.APPEARANCE, null, { scrollPosition: P.h1.CUSTOM_APP_ICONS });
        },
        eA = {
            avatarDecorations: ec
                ? {
                      name: 'avatarDecorations',
                      title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
                      description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
                      descriptionCta: L.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: ep,
                      pillText: L.Z.Messages.EARLY_ACCESS,
                      perkImage: w,
                      canReveal: e_,
                      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
                  }
                : {
                      name: 'avatarDecorations',
                      title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
                      description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
                      pillText: L.Z.Messages.EARLY_ACCESS,
                      perkImage: w,
                      canReveal: e_,
                      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
                  },
            clientThemes: {
                name: 'clientThemes',
                title: L.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
                subtitle: L.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
                description: L.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
                descriptionCta: L.Z.Messages.TAKE_ME_THERE,
                onCtaClick: () => {
                    o.Z.open(b.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: U
            },
            clips: ec
                ? {
                      name: 'clips',
                      title: L.Z.Messages.CLIPS,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
                      description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
                      descriptionCta: eR ? L.Z.Messages.TAKE_ME_THERE : L.Z.Messages.LEARN_MORE,
                      pillText: L.Z.Messages.EARLY_ACCESS,
                      onCtaClick: eR
                          ? () => {
                                (0, I.Z)(v.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(N.Z.getArticleURL(b.BhN.CLIPS), '_blank');
                            },
                      perkImage: H
                  }
                : {
                      name: 'clips',
                      title: L.Z.Messages.CLIPS,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
                      description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
                      pillText: L.Z.Messages.EARLY_ACCESS,
                      perkImage: H
                  },
            earlyAccess: ec
                ? {
                      name: 'earlyAccess',
                      title: L.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: L.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: L.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
                      perkImage: V
                  }
                : {
                      name: 'earlyAccess',
                      title: L.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: L.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: L.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: V
                  },
            earlyAccessSeeAllVariant: ec
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: L.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: L.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: L.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
                      perkImage: W
                  }
                : {
                      name: 'earlyAccess',
                      title: L.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: L.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: L.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: W
                  },
            entranceSounds: ec
                ? {
                      name: 'entranceSounds',
                      title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
                      descriptionCta: L.Z.Messages.TAKE_ME_THERE,
                      onCtaClick: eN,
                      perkImage: Y
                  }
                : {
                      name: 'entranceSounds',
                      title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
                      perkImage: Y
                  },
            entranceSoundsSeeAllVariation: ec
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
                      descriptionCta: L.Z.Messages.TAKE_ME_THERE,
                      onCtaClick: eN,
                      perkImage: z
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
                      perkImage: z
                  },
            profileEffects: ec
                ? {
                      name: 'profileEffects',
                      title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
                      description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
                      descriptionCta: L.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: ep,
                      pillText: L.Z.Messages.EARLY_ACCESS,
                      perkImage: J,
                      canReveal: eu,
                      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
                  }
                : {
                      name: 'profileEffects',
                      title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
                      description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
                      pillText: L.Z.Messages.EARLY_ACCESS,
                      perkImage: J,
                      canReveal: eu,
                      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
                  },
            profiles: {
                name: 'profiles',
                title: L.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
                subtitle: L.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
                description: L.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
                descriptionCta: L.Z.Messages.TAKE_ME_THERE,
                onCtaClick: eg,
                perkImage: G
            },
            remixing: ec
                ? {
                      name: 'remixing',
                      title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
                      description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
                      perkImage: $,
                      pillText: L.Z.Messages.EARLY_ACCESS
                  }
                : {
                      name: 'remixing',
                      title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
                      description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
                      perkImage: $,
                      pillText: L.Z.Messages.EARLY_ACCESS
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: L.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
                subtitle: L.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
                description: L.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
                descriptionCta: L.Z.Messages.TAKE_ME_THERE,
                onCtaClick: () => {
                    o.Z.open(b.oAB.GUILD_BOOSTING, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: y,
                hideOnNarrowScreen: !0
            },
            specialMemberPricing: ec
                ? {
                      name: 'specialMemberPricing',
                      title: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                      descriptionCta: L.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: ep,
                      perkImage: et
                  }
                : {
                      name: 'specialMemberPricing',
                      title: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: et
                  },
            specialMemberPricingSeeAllVariant: ec
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                      descriptionCta: L.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: ep,
                      perkImage: en
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: en
                  },
            specialShopPerks: ec
                ? {
                      name: 'specialShopPerks',
                      title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
                      description: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                      descriptionCta: L.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: ep,
                      perkImage: et
                  }
                : {
                      name: 'specialShopPerks',
                      title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
                      subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
                      description: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                      descriptionCta: L.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: ep,
                      perkImage: et
                  },
            unlimitedSuperReactions: ec
                ? {
                      name: 'unlimitedSuperReactions',
                      title: L.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
                      subtitle: L.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
                      description: L.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
                      perkImage: ei,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: L.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
                      subtitle: L.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
                      description: L.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: ei,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: L.Z.Messages.NITRO_HOME_SUPER_REACTIONS,
                subtitle: L.Z.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
                description: L.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
                perkImage: er
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: L.Z.Messages.NEW_DROP,
                pillText: L.Z.Messages.COMING_SOON,
                backgroundImage: q
            },
            badge: {
                name: 'badge',
                title: L.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
                subtitle: L.Z.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
                perkImage: Z,
                description: L.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: L.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
                subtitle: L.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
                perkImage: F,
                description: L.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
                descriptionCta: L.Z.Messages.TAKE_ME_THERE,
                onCtaClick: em
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: L.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
                subtitle: L.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
                perkImage: K,
                description: L.Z.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: L.Z.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
                subtitle: L.Z.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
                perkImage: (0, x.gx)(t, D, B),
                description: L.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: L.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
                subtitle: L.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
                perkImage: (0, x.gx)(t, j, es),
                description: L.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
            },
            largeUploads: {
                name: 'largeUploads',
                title: L.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({ premiumMaxSize: n }),
                subtitle: L.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({ premiumMaxSize: n }),
                perkImage: el,
                description: L.Z.Messages.NITRO_HOME_CARD_UPLOAD_POWER
            },
            hdVideo: {
                name: 'hdVideo',
                title: L.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
                subtitle: L.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
                perkImage: ea,
                description: L.Z.Messages.NITRO_HOME_STREAM_UP_TO_4K
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
                subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
                description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_DESCRIPTION,
                descriptionCta: ec || ed ? L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
                isPremiumGetCta: !(ec || ed),
                onCtaClick: ec || ed ? em : void 0,
                perkImage: Q
            },
            referralProgram: {
                name: 'referralProgram',
                title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
                subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
                description: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({ helpdeskArticle: N.Z.getArticleURL(b.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: L.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                isPremiumGetCta: !ec || void 0,
                perkImage: X
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
                subtitle: L.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
                descriptionCta: ec ? L.Z.Messages.TAKE_ME_THERE : L.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                isPremiumGetCta: !ec,
                onCtaClick: ec ? eg : void 0,
                perkImage: ee
            }
        };
    if (null != eC) {
        let { title: t, subtitle: n, description: s, pillText: a, ctaDescription: i, dismissibleContentType: l } = eC,
            c = (0, r.jsx)(h.Z, {
                showAnimations: !0,
                percentage: eI,
                initialPercentage: eT
            });
        eA.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: s,
            perkComponent: c,
            descriptionCta: i,
            onCtaClick: () => {
                o.Z.open(b.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: M.zW.REWARD,
            pillText: a,
            dismissibleContentType: l
        };
    }
    return (
        (0, m.ZP)('usePerksDiscoverabilityCard') === m.P0.SUMMER_2024 &&
            (eA.shyProject = {
                name: 'shyProject',
                title: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                subtitle: L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                description: ec ? L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB : L.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                descriptionCta: L.Z.Messages.VISIT_THE_SHOP_CTA,
                pillText: L.Z.Messages.NITRO_HOME_TAB_NEW.toLocaleUpperCase(),
                onCtaClick: ec ? ep : void 0,
                perkImage: k,
                isPremiumGetCta: !ec
            }),
        eA
    );
};
