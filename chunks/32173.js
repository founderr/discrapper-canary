n.d(t, {
    u: function () {
        return r;
    }
});
var i,
    r,
    a = n(200651);
n(192379);
var s = n(399606),
    l = n(704215),
    o = n(481060),
    c = n(230711),
    d = n(410030),
    u = n(100527),
    g = n(906732),
    m = n(975298),
    f = n(779618),
    p = n(300284),
    _ = n(703656),
    h = n(547972),
    E = n(131951),
    x = n(78839),
    b = n(626135),
    C = n(424218),
    v = n(63063),
    T = n(74538),
    N = n(860489),
    I = n(471309),
    S = n(494127),
    R = n(314684),
    A = n(687362),
    j = n(119269),
    P = n(467685),
    O = n(391110),
    Z = n(75077),
    M = n(976465),
    w = n(474936),
    B = n(981631),
    y = n(526761),
    L = n(332325),
    k = n(388032),
    U = n(977341),
    D = n(660372),
    G = n(926433),
    H = n(302036),
    V = n(994554),
    F = n(704565),
    W = n(393305),
    z = n(338879),
    Y = n(609926),
    Q = n(203302),
    K = n(766491),
    J = n(193943),
    q = n(707046),
    X = n(488459),
    $ = n(334347),
    ee = n(132015),
    et = n(142416),
    en = n(607762),
    ei = n(474106),
    er = n(567452),
    ea = n(572501),
    es = n(755590),
    el = n(909910),
    eo = n(637810),
    ec = n(570423),
    ed = n(912429),
    eu = n(91394),
    eg = n(209672),
    em = n(698173),
    ef = n(926262);
((i = r || (r = {})).AVATAR_DECORATIONS = 'avatarDecorations'), (i.CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILE_EFFECTS = 'profileEffects'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.FREE_BOOST = 'freeBoost'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHY_PROJECT = 'shyProject'), (i.TENURE_BADGE = 'tenureBadge');
t.Z = () => {
    let { analyticsLocations: e } = (0, g.ZP)(u.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, d.ZP)(),
        i = (0, C.BU)(w.Uq / 1024, { useKibibytes: !0 }),
        r = (0, s.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        ep = null != r ? T.ZP.getPremiumPlanItem(r) : null,
        e_ = null != ep ? T.ZP.getSkuIdForPlan(ep.planId) : null,
        eh = e_ === w.Si.TIER_2,
        eE = e_ === w.Si.TIER_0,
        { flipped: ex } = (0, S.JP)(),
        { flipped: eb } = (0, S.as)(),
        eC = (0, R.nY)({ showAnimations: !0 }),
        ev = null != eC ? eC.initialPercentage : void 0,
        eT = null != eC ? eC.percentage : void 0,
        eN = (0, f.Z)(E.Z),
        eI = (0, A.ZP)(),
        eS = (0, A.aJ)(),
        { fractionalState: eR } = (0, m.Z)(),
        eA = eR === w.a$.FP_ONLY,
        ej = (0, p.Z)({
            scrollPosition: y.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eP = () => {
            c.Z.open(B.oAB.VOICE, y.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eO = () => {
            (0, _.uL)(B.Z5c.COLLECTIBLES_SHOP);
        },
        eZ = () => {
            c.Z.open(B.oAB.APPEARANCE, null, { scrollPosition: y.h1.CUSTOM_APP_ICONS });
        },
        eM = {
            avatarDecorations: eh
                ? {
                      name: 'avatarDecorations',
                      title: k.intl.string(k.t['5YcGTk']),
                      subtitle: k.intl.string(k.t.QcJ6cX),
                      description: k.intl.string(k.t.MCvgWl),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eO,
                      pillText: k.intl.string(k.t.EYxi0t),
                      perkImage: Q,
                      canReveal: ex,
                      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
                  }
                : {
                      name: 'avatarDecorations',
                      title: k.intl.string(k.t['5YcGTk']),
                      subtitle: k.intl.string(k.t['1QvWws']),
                      description: k.intl.string(k.t['2GPNr6']),
                      pillText: k.intl.string(k.t.EYxi0t),
                      perkImage: Q,
                      canReveal: ex,
                      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
                  },
            clientThemes: {
                name: 'clientThemes',
                title: k.intl.string(k.t.kWM48P),
                subtitle: k.intl.string(k.t.CjRASE),
                description: k.intl.string(k.t.jBTTws),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                onCtaClick: () => {
                    c.Z.open(B.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: F
            },
            clips: eh
                ? {
                      name: 'clips',
                      title: k.intl.string(k.t.z2jK6e),
                      subtitle: k.intl.string(k.t['hxy0/f']),
                      description: k.intl.string(k.t.Z6v86e),
                      descriptionCta: eN ? k.intl.string(k.t.jVcuVV) : k.intl.string(k.t.hvVgAQ),
                      pillText: k.intl.string(k.t.EYxi0t),
                      onCtaClick: eN
                          ? () => {
                                (0, h.Z)(L.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(v.Z.getArticleURL(B.BhN.CLIPS), '_blank');
                            },
                      perkImage: K
                  }
                : {
                      name: 'clips',
                      title: k.intl.string(k.t.z2jK6e),
                      subtitle: k.intl.string(k.t['hxy0/f']),
                      description: k.intl.string(k.t.X9IeNz),
                      pillText: k.intl.string(k.t.EYxi0t),
                      perkImage: K
                  },
            earlyAccess: eh
                ? {
                      name: 'earlyAccess',
                      title: k.intl.string(k.t.UkLVeH),
                      subtitle: k.intl.string(k.t.xf9ePj),
                      description: k.intl.string(k.t['+r4vdn']),
                      perkImage: q
                  }
                : {
                      name: 'earlyAccess',
                      title: k.intl.string(k.t.UkLVeH),
                      subtitle: k.intl.string(k.t.xf9ePj),
                      description: k.intl.string(k.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: q
                  },
            earlyAccessSeeAllVariant: eh
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: k.intl.string(k.t.UkLVeH),
                      subtitle: k.intl.string(k.t.xf9ePj),
                      description: k.intl.string(k.t['+r4vdn']),
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: k.intl.string(k.t.UkLVeH),
                      subtitle: k.intl.string(k.t.xf9ePj),
                      description: k.intl.string(k.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            entranceSounds: eh
                ? {
                      name: 'entranceSounds',
                      title: k.intl.string(k.t['f4M+Hx']),
                      subtitle: k.intl.string(k.t['7ZCYvL']),
                      description: k.intl.string(k.t.mUT8bG),
                      descriptionCta: k.intl.string(k.t.jVcuVV),
                      onCtaClick: eP,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSounds',
                      title: k.intl.string(k.t['f4M+Hx']),
                      subtitle: k.intl.string(k.t['7ZCYvL']),
                      description: k.intl.string(k.t['3smf/f']),
                      perkImage: ee
                  },
            entranceSoundsSeeAllVariation: eh
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: k.intl.string(k.t['f4M+Hx']),
                      subtitle: k.intl.string(k.t['7ZCYvL']),
                      description: k.intl.string(k.t.mUT8bG),
                      descriptionCta: k.intl.string(k.t.jVcuVV),
                      onCtaClick: eP,
                      perkImage: et
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: k.intl.string(k.t['f4M+Hx']),
                      subtitle: k.intl.string(k.t['7ZCYvL']),
                      description: k.intl.string(k.t['3smf/f']),
                      perkImage: et
                  },
            profileEffects: eh
                ? {
                      name: 'profileEffects',
                      title: k.intl.string(k.t.c7OKaG),
                      subtitle: k.intl.string(k.t.eVvkDw),
                      description: k.intl.string(k.t['0mUM/P']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eO,
                      pillText: k.intl.string(k.t.EYxi0t),
                      perkImage: er,
                      canReveal: eb,
                      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
                  }
                : {
                      name: 'profileEffects',
                      title: k.intl.string(k.t.c7OKaG),
                      subtitle: k.intl.string(k.t.eVvkDw),
                      description: k.intl.string(k.t.XNKnvr),
                      pillText: k.intl.string(k.t.EYxi0t),
                      perkImage: er,
                      canReveal: eb,
                      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
                  },
            profiles: {
                name: 'profiles',
                title: k.intl.string(k.t.KcyDwM),
                subtitle: k.intl.string(k.t.Mt3U1d),
                description: k.intl.string(k.t.kWcDKy),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                onCtaClick: ej,
                perkImage: W
            },
            remixing: eh
                ? {
                      name: 'remixing',
                      title: k.intl.string(k.t['H+v6eX']),
                      subtitle: k.intl.string(k.t.wmbOAg),
                      description: k.intl.string(k.t.gdA9FB),
                      perkImage: es,
                      pillText: k.intl.string(k.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: k.intl.string(k.t['H+v6eX']),
                      subtitle: k.intl.string(k.t.wmbOAg),
                      description: k.intl.string(k.t.fiLtJi),
                      perkImage: es,
                      pillText: k.intl.string(k.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: k.intl.string(k.t['NyDu//']),
                subtitle: k.intl.string(k.t['4pEwXF']),
                description: eA ? k.intl.format(k.t.uPiIBQ, { link: 'https://discord.com' }) : k.intl.string(k.t.jsyNHh),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                onCtaClick: eA
                    ? void 0
                    : () => {
                          c.Z.open(B.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: z,
                hideOnNarrowScreen: !eA,
                imageOverlayText: eA ? k.intl.string(k.t.lcYttb) : void 0
            },
            specialMemberPricing: eh
                ? {
                      name: 'specialMemberPricing',
                      title: k.intl.string(k.t['0Mykgo']),
                      subtitle: k.intl.string(k.t.opgqDQ),
                      description: k.intl.string(k.t['t+QZSU']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eO,
                      perkImage: eo
                  }
                : {
                      name: 'specialMemberPricing',
                      title: k.intl.string(k.t['0Mykgo']),
                      subtitle: k.intl.string(k.t.opgqDQ),
                      description: k.intl.string(k.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eo
                  },
            specialMemberPricingSeeAllVariant: eh
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: k.intl.string(k.t['0Mykgo']),
                      subtitle: k.intl.string(k.t.opgqDQ),
                      description: k.intl.string(k.t['t+QZSU']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eO,
                      perkImage: ec
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: k.intl.string(k.t['0Mykgo']),
                      subtitle: k.intl.string(k.t.opgqDQ),
                      description: k.intl.string(k.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ec
                  },
            specialShopPerks: eh
                ? {
                      name: 'specialShopPerks',
                      title: k.intl.string(k.t.U68LpK),
                      subtitle: k.intl.string(k.t.chRZiY),
                      description: k.intl.string(k.t['t+QZSU']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eO,
                      perkImage: eo
                  }
                : {
                      name: 'specialShopPerks',
                      title: k.intl.string(k.t.U68LpK),
                      subtitle: k.intl.string(k.t.chRZiY),
                      description: k.intl.string(k.t['JE/EWV']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eO,
                      perkImage: eo
                  },
            unlimitedSuperReactions: eh
                ? {
                      name: 'unlimitedSuperReactions',
                      title: k.intl.string(k.t.hpgmOz),
                      subtitle: k.intl.string(k.t.Hxujsr),
                      description: k.intl.string(k.t['Cn/z6+']),
                      perkImage: em,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: k.intl.string(k.t.hpgmOz),
                      subtitle: k.intl.string(k.t.Hxujsr),
                      description: k.intl.string(k.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: em,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: k.intl.string(k.t['6S7kOz']),
                subtitle: k.intl.string(k.t.kN1JRE),
                description: k.intl.string(k.t.e7FKCg),
                perkImage: eg
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: k.intl.string(k.t.O5R3ho),
                pillText: k.intl.string(k.t.yhEY5O),
                backgroundImage: ei
            },
            badge: {
                name: 'badge',
                title: k.intl.string(k.t.dcFfSE),
                subtitle: k.intl.string(k.t['37MFFh']),
                perkImage: D,
                description: k.intl.string(k.t.T1IS4u),
                imageOverlayText: eR === w.a$.FP_ONLY ? k.intl.string(k.t.lcYttb) : void 0
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: k.intl.string(k.t.OuItFh),
                subtitle: k.intl.string(k.t.mPyrEx),
                perkImage: J,
                description: k.intl.string(k.t.e7FKCg),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                onCtaClick: eZ
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: k.intl.string(k.t['R2IV/f']),
                subtitle: k.intl.string(k.t.R5Xag4),
                perkImage: $,
                description: k.intl.string(k.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: k.intl.string(k.t.LWsAra),
                subtitle: k.intl.string(k.t.bTzbVl),
                perkImage: (0, Z.gx)(t, G, H),
                description: k.intl.string(k.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: k.intl.string(k.t.tzdIwM),
                subtitle: k.intl.string(k.t.FXlU29),
                perkImage: (0, Z.gx)(t, V, ed),
                description: k.intl.string(k.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: k.intl.formatToPlainString(k.t.jqhAdH, { premiumMaxSize: i }),
                subtitle: k.intl.formatToPlainString(k.t['HI+cfn'], { premiumMaxSize: i }),
                perkImage: ef,
                description: k.intl.string(k.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: k.intl.string(k.t.RSXQYG),
                subtitle: k.intl.string(k.t.ymCPxs),
                perkImage: eu,
                description: k.intl.string(k.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: k.intl.string(k.t.XQCSrq),
                subtitle: k.intl.string(k.t.HC5wVV),
                description: k.intl.string(k.t.ee7wQ0),
                descriptionCta: eh || eE ? k.intl.string(k.t.y9TxXV) : k.intl.string(k.t.d8o6lZ),
                isPremiumGetCta: !(eh || eE),
                onCtaClick: eh || eE ? eZ : void 0,
                perkImage: en
            },
            referralProgram: {
                name: 'referralProgram',
                title: k.intl.string(k.t.tPY4o6),
                subtitle: k.intl.string(k.t.JY0grK),
                description: k.intl.format(k.t['2JqTFx'], { helpdeskArticle: v.Z.getArticleURL(B.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: k.intl.string(k.t.JST6jo),
                isPremiumGetCta: !eh || void 0,
                perkImage: ea
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: k.intl.string(k.t.I9TYMj),
                subtitle: k.intl.string(k.t.HMSHeH),
                descriptionCta: eh ? k.intl.string(k.t.jVcuVV) : k.intl.string(k.t.JST6jo),
                isPremiumGetCta: !eh,
                onCtaClick: eh ? ej : void 0,
                perkImage: el
            }
        };
    if (null != eS) {
        let { title: e, subtitle: t, description: n, pillText: i, ctaDescription: r, dismissibleContentType: s } = eS,
            l = (0, a.jsx)('div', {
                className: U.cardComponent,
                children: (0, a.jsx)(j.Z, {
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: ev
                })
            });
        eM.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: e,
            subtitle: t,
            description: n,
            perkComponent: l,
            descriptionCta: r,
            onCtaClick: () => {
                console.log('open avatar deco apply modal');
            },
            cardVariant: O.zW.REWARD,
            pillText: i,
            dismissibleContentType: s
        };
    }
    if (null != eI) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: s, dismissibleContentType: l } = eI,
            o = (0, a.jsx)('div', {
                className: U.cardComponent,
                children: (0, a.jsx)(j.Z, {
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: ev
                })
            });
        eM.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: o,
            descriptionCta: s,
            onCtaClick: () => {
                c.Z.open(B.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: O.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    let ew = (0, M.kG)(),
        { enabled: eB } = (0, I.Z)(),
        ey = () => {
            b.default.track(B.rMx.OPEN_MODAL, {
                type: 'Tiered Tenure Badge Details',
                location_stack: e,
                location: u.Z.PREMIUM_MARKETING_PERK_CARD,
                source: u.Z.PREMIUM_MARKETING_PERK_CARD
            }),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('16133').then(n.bind(n, 743648));
                    return (t) => (0, a.jsx)(e, { ...t });
                });
        };
    return (
        null != ew &&
            eB &&
            (eM.tenureBadge = {
                name: 'tenureBadge',
                title: k.intl.string(k.t.rnsqpa),
                pillText: k.intl.string(k.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, a.jsx)(P.Z, {}),
                cardVariant: O.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => ey()
            }),
        (0, N.ZP)('usePerksDiscoverabilityCard') === N.P0.SUMMER_2024 &&
            (eM.shyProject = {
                name: 'shyProject',
                title: k.intl.string(k.t['0Mykgo']),
                subtitle: k.intl.string(k.t.opgqDQ),
                description: eh ? k.intl.string(k.t['t+QZSU']) : k.intl.string(k.t['JE/EWV']),
                descriptionCta: k.intl.string(k.t.dBJVnZ),
                pillText: k.intl.string(k.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: eh ? eO : void 0,
                perkImage: Y,
                isPremiumGetCta: !eh
            }),
        eM
    );
};
