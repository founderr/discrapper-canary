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
    o = n(704215),
    l = n(481060),
    c = n(230711),
    d = n(410030),
    _ = n(100527),
    u = n(906732),
    E = n(779618),
    T = n(300284),
    I = n(703656),
    R = n(547972),
    m = n(131951),
    g = n(78839),
    N = n(626135),
    C = n(424218),
    p = n(63063),
    f = n(74538),
    A = n(860489),
    S = n(471309),
    h = n(494127),
    M = n(314684),
    x = n(687362),
    b = n(119269),
    O = n(467685),
    v = n(391110),
    P = n(75077),
    L = n(976465),
    Z = n(474936),
    D = n(981631),
    B = n(526761),
    U = n(332325),
    j = n(689938),
    G = n(977341),
    w = n(660372),
    y = n(926433),
    H = n(302036),
    k = n(994554),
    F = n(704565),
    V = n(393305),
    W = n(338879),
    K = n(609926),
    Y = n(203302),
    z = n(766491),
    Q = n(193943),
    q = n(707046),
    X = n(488459),
    J = n(334347),
    $ = n(132015),
    ee = n(142416),
    et = n(607762),
    en = n(474106),
    es = n(567452),
    ea = n(572501),
    er = n(755590),
    ei = n(909910),
    eo = n(637810),
    el = n(570423),
    ec = n(912429),
    ed = n(91394),
    e_ = n(209672),
    eu = n(698173),
    eE = n(926262);
((s = a || (a = {})).AVATAR_DECORATIONS = 'avatarDecorations'), (s.CLIENT_THEMES = 'clientThemes'), (s.CLIPS = 'clips'), (s.EARLY_ACCESS = 'earlyAccess'), (s.ENTRANCE_SOUNDS = 'entranceSounds'), (s.PROFILE_EFFECTS = 'profileEffects'), (s.PROFILES = 'profiles'), (s.REMIXING = 'remixing'), (s.SERVER_BOOSTS = 'serverBoosts'), (s.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (s.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (s.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (s.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (s.SUPER_REACTIONS = 'superReactions'), (s.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (s.CUSTOM_APP_ICONS = 'customAppIcons'), (s.MORE_EMOJI_POWER = 'moreEmojiPower'), (s.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (s.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (s.LARGE_UPLOADS = 'largeUploads'), (s.HD_VIDEO = 'hdVideo'), (s.BADGE = 'badge'), (s.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (s.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (s.FREE_BOOST = 'freeBoost'), (s.REFERRAL_PROGRAM = 'referralProgram'), (s.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (s.SERVER_PROFILES = 'serverProfiles'), (s.SHY_PROJECT = 'shyProject'), (s.TENURE_BADGE = 'tenureBadge');
t.Z = () => {
    let { analyticsLocations: e } = (0, u.ZP)(_.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, d.ZP)(),
        s = (0, C.BU)(Z.Uq / 1024, { useKibibytes: !0 }),
        a = (0, i.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
        eT = null != a ? f.ZP.getPremiumPlanItem(a) : null,
        eI = null != eT ? f.ZP.getSkuIdForPlan(eT.planId) : null,
        eR = eI === Z.Si.TIER_2,
        em = eI === Z.Si.TIER_0,
        { flipped: eg } = (0, h.JP)(),
        { flipped: eN } = (0, h.as)(),
        eC = (0, M.nY)({ showAnimations: !0 }),
        ep = null != eC ? eC.initialPercentage : void 0,
        ef = null != eC ? eC.percentage : void 0,
        eA = (0, E.Z)(m.Z),
        eS = (0, x.Z)(),
        eh = (0, T.Z)({
            scrollPosition: B.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eM = () => {
            c.Z.open(D.oAB.VOICE, B.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        ex = () => {
            (0, I.uL)(D.Z5c.COLLECTIBLES_SHOP);
        },
        eb = () => {
            c.Z.open(D.oAB.APPEARANCE, null, { scrollPosition: B.h1.CUSTOM_APP_ICONS });
        },
        eO = {
            avatarDecorations: eR
                ? {
                      name: 'avatarDecorations',
                      title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
                      description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
                      descriptionCta: j.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: ex,
                      pillText: j.Z.Messages.EARLY_ACCESS,
                      perkImage: Y,
                      canReveal: eg,
                      dismissibleContentType: o.z.WHATS_NEW_AVATAR_DECOS_FLIP
                  }
                : {
                      name: 'avatarDecorations',
                      title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
                      description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
                      pillText: j.Z.Messages.EARLY_ACCESS,
                      perkImage: Y,
                      canReveal: eg,
                      dismissibleContentType: o.z.WHATS_NEW_AVATAR_DECOS_FLIP
                  },
            clientThemes: {
                name: 'clientThemes',
                title: j.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
                subtitle: j.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
                description: j.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
                descriptionCta: j.Z.Messages.TAKE_ME_THERE,
                onCtaClick: () => {
                    c.Z.open(D.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: F
            },
            clips: eR
                ? {
                      name: 'clips',
                      title: j.Z.Messages.CLIPS,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
                      description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
                      descriptionCta: eA ? j.Z.Messages.TAKE_ME_THERE : j.Z.Messages.LEARN_MORE,
                      pillText: j.Z.Messages.EARLY_ACCESS,
                      onCtaClick: eA
                          ? () => {
                                (0, R.Z)(U.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(p.Z.getArticleURL(D.BhN.CLIPS), '_blank');
                            },
                      perkImage: z
                  }
                : {
                      name: 'clips',
                      title: j.Z.Messages.CLIPS,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
                      description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
                      pillText: j.Z.Messages.EARLY_ACCESS,
                      perkImage: z
                  },
            earlyAccess: eR
                ? {
                      name: 'earlyAccess',
                      title: j.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: j.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: j.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
                      perkImage: q
                  }
                : {
                      name: 'earlyAccess',
                      title: j.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: j.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: j.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: q
                  },
            earlyAccessSeeAllVariant: eR
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: j.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: j.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: j.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: j.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: j.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: j.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            entranceSounds: eR
                ? {
                      name: 'entranceSounds',
                      title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
                      descriptionCta: j.Z.Messages.TAKE_ME_THERE,
                      onCtaClick: eM,
                      perkImage: $
                  }
                : {
                      name: 'entranceSounds',
                      title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
                      perkImage: $
                  },
            entranceSoundsSeeAllVariation: eR
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
                      descriptionCta: j.Z.Messages.TAKE_ME_THERE,
                      onCtaClick: eM,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
                      perkImage: ee
                  },
            profileEffects: eR
                ? {
                      name: 'profileEffects',
                      title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
                      description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
                      descriptionCta: j.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: ex,
                      pillText: j.Z.Messages.EARLY_ACCESS,
                      perkImage: es,
                      canReveal: eN,
                      dismissibleContentType: o.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
                  }
                : {
                      name: 'profileEffects',
                      title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
                      description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
                      pillText: j.Z.Messages.EARLY_ACCESS,
                      perkImage: es,
                      canReveal: eN,
                      dismissibleContentType: o.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
                  },
            profiles: {
                name: 'profiles',
                title: j.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
                subtitle: j.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
                description: j.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
                descriptionCta: j.Z.Messages.TAKE_ME_THERE,
                onCtaClick: eh,
                perkImage: V
            },
            remixing: eR
                ? {
                      name: 'remixing',
                      title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
                      description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
                      perkImage: er,
                      pillText: j.Z.Messages.EARLY_ACCESS
                  }
                : {
                      name: 'remixing',
                      title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
                      description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
                      perkImage: er,
                      pillText: j.Z.Messages.EARLY_ACCESS
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: j.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
                subtitle: j.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
                description: j.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
                descriptionCta: j.Z.Messages.TAKE_ME_THERE,
                onCtaClick: () => {
                    c.Z.open(D.oAB.GUILD_BOOSTING, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: W,
                hideOnNarrowScreen: !0
            },
            specialMemberPricing: eR
                ? {
                      name: 'specialMemberPricing',
                      title: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                      descriptionCta: j.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: ex,
                      perkImage: eo
                  }
                : {
                      name: 'specialMemberPricing',
                      title: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: eo
                  },
            specialMemberPricingSeeAllVariant: eR
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                      descriptionCta: j.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: ex,
                      perkImage: el
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: el
                  },
            specialShopPerks: eR
                ? {
                      name: 'specialShopPerks',
                      title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
                      description: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                      descriptionCta: j.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: ex,
                      perkImage: eo
                  }
                : {
                      name: 'specialShopPerks',
                      title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
                      subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
                      description: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                      descriptionCta: j.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: ex,
                      perkImage: eo
                  },
            unlimitedSuperReactions: eR
                ? {
                      name: 'unlimitedSuperReactions',
                      title: j.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
                      subtitle: j.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
                      description: j.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
                      perkImage: eu,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: j.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
                      subtitle: j.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
                      description: j.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: eu,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: j.Z.Messages.NITRO_HOME_SUPER_REACTIONS,
                subtitle: j.Z.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
                description: j.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
                perkImage: e_
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: j.Z.Messages.NEW_DROP,
                pillText: j.Z.Messages.COMING_SOON,
                backgroundImage: en
            },
            badge: {
                name: 'badge',
                title: j.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
                subtitle: j.Z.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
                perkImage: w,
                description: j.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: j.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
                subtitle: j.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
                perkImage: Q,
                description: j.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
                descriptionCta: j.Z.Messages.TAKE_ME_THERE,
                onCtaClick: eb
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: j.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
                subtitle: j.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
                perkImage: J,
                description: j.Z.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: j.Z.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
                subtitle: j.Z.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
                perkImage: (0, P.gx)(t, y, H),
                description: j.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: j.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
                subtitle: j.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
                perkImage: (0, P.gx)(t, k, ec),
                description: j.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
            },
            largeUploads: {
                name: 'largeUploads',
                title: j.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({ premiumMaxSize: s }),
                subtitle: j.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({ premiumMaxSize: s }),
                perkImage: eE,
                description: j.Z.Messages.NITRO_HOME_CARD_UPLOAD_POWER
            },
            hdVideo: {
                name: 'hdVideo',
                title: j.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
                subtitle: j.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
                perkImage: ed,
                description: j.Z.Messages.NITRO_HOME_STREAM_UP_TO_4K
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
                subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
                description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_DESCRIPTION,
                descriptionCta: eR || em ? j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
                isPremiumGetCta: !(eR || em),
                onCtaClick: eR || em ? eb : void 0,
                perkImage: et
            },
            referralProgram: {
                name: 'referralProgram',
                title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
                subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
                description: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({ helpdeskArticle: p.Z.getArticleURL(D.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: j.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                isPremiumGetCta: !eR || void 0,
                perkImage: ea
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
                subtitle: j.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
                descriptionCta: eR ? j.Z.Messages.TAKE_ME_THERE : j.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                isPremiumGetCta: !eR,
                onCtaClick: eR ? eh : void 0,
                perkImage: ei
            }
        };
    if (null != eS) {
        let { title: t, subtitle: n, description: s, pillText: a, ctaDescription: i, dismissibleContentType: o } = eS,
            l = (0, r.jsx)('div', {
                className: G.cardComponent,
                children: (0, r.jsx)(b.Z, {
                    showAnimations: !0,
                    percentage: ef,
                    initialPercentage: ep
                })
            });
        eO.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: s,
            perkComponent: l,
            descriptionCta: i,
            onCtaClick: () => {
                c.Z.open(D.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: v.zW.REWARD,
            pillText: a,
            dismissibleContentType: o
        };
    }
    let ev = (0, L.kG)(),
        { enabled: eP } = (0, S.Z)(),
        eL = () => {
            N.default.track(D.rMx.OPEN_MODAL, {
                type: 'Tiered Tenure Badge Details',
                location_stack: e,
                location: _.Z.PREMIUM_MARKETING_PERK_CARD,
                source: _.Z.PREMIUM_MARKETING_PERK_CARD
            }),
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await n.e('16133').then(n.bind(n, 743648));
                    return (t) => (0, r.jsx)(e, { ...t });
                });
        };
    return (
        null != ev &&
            eP &&
            (eO.tenureBadge = {
                name: 'tenureBadge',
                title: j.Z.Messages.NITRO_HOME_TIERED_TENURE_BADGES_WHATS_NEW_CARD_HEADER,
                pillText: j.Z.Messages.REWARD.toLocaleUpperCase(),
                perkComponent: (0, r.jsx)(O.Z, {}),
                cardVariant: v.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => eL()
            }),
        (0, A.ZP)('usePerksDiscoverabilityCard') === A.P0.SUMMER_2024 &&
            (eO.shyProject = {
                name: 'shyProject',
                title: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                subtitle: j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                description: eR ? j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB : j.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                descriptionCta: j.Z.Messages.VISIT_THE_SHOP_CTA,
                pillText: j.Z.Messages.NITRO_HOME_TAB_NEW.toLocaleUpperCase(),
                onCtaClick: eR ? ex : void 0,
                perkImage: K,
                isPremiumGetCta: !eR
            }),
        eO
    );
};
