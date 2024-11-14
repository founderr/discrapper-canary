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
    l = n(481060),
    o = n(230711),
    c = n(410030),
    d = n(100527),
    u = n(906732),
    g = n(975298),
    m = n(779618),
    f = n(300284),
    _ = n(703656),
    p = n(547972),
    h = n(131951),
    E = n(594174),
    b = n(78839),
    x = n(626135),
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
    Z = n(391110),
    O = n(75077),
    M = n(976465),
    B = n(474936),
    w = n(735825),
    y = n(981631),
    k = n(526761),
    L = n(332325),
    U = n(388032),
    D = n(977341),
    G = n(660372),
    H = n(926433),
    V = n(302036),
    F = n(994554),
    W = n(704565),
    z = n(393305),
    Y = n(338879),
    K = n(609926),
    Q = n(203302),
    J = n(766491),
    q = n(193943),
    X = n(707046),
    $ = n(488459),
    ee = n(334347),
    et = n(132015),
    en = n(142416),
    ei = n(607762),
    er = n(474106),
    ea = n(567452),
    es = n(572501),
    el = n(755590),
    eo = n(909910),
    ec = n(637810),
    ed = n(570423),
    eu = n(912429),
    eg = n(91394),
    em = n(209672),
    ef = n(698173),
    e_ = n(926262);
((i = r || (r = {})).AVATAR_DECORATIONS = 'avatarDecorations'), (i.CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILE_EFFECTS = 'profileEffects'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.FREE_BOOST = 'freeBoost'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHY_PROJECT = 'shyProject'), (i.TENURE_BADGE = 'tenureBadge');
t.Z = () => {
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        i = (0, C.BU)(B.Uq / 1024, { useKibibytes: !0 }),
        r = (0, s.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        ep = null != r ? T.ZP.getPremiumPlanItem(r) : null,
        eh = (null != ep ? T.ZP.getSkuIdForPlan(ep.planId) : null) === B.Si.TIER_2,
        eE = E.default.getCurrentUser(),
        eb = (0, T.I5)(eE, B.p9.TIER_2),
        ex = (0, T.I5)(eE, B.p9.TIER_0),
        { flipped: eC } = (0, S.JP)(),
        { flipped: ev } = (0, S.as)(),
        eT = (0, R.nY)({ showAnimations: !0 }),
        eN = null != eT ? eT.initialPercentage : void 0,
        eI = null != eT ? eT.percentage : void 0,
        eS = (0, m.Z)(h.Z),
        eR = (0, A.ZP)(),
        eA = (0, A.aJ)(),
        { fractionalState: ej } = (0, g.Z)(),
        eP = ej === B.a$.FP_ONLY,
        eZ = (0, f.Z)({
            scrollPosition: k.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eO = () => {
            o.Z.open(y.oAB.VOICE, k.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eM = () => {
            (0, _.uL)(y.Z5c.COLLECTIBLES_SHOP);
        },
        eB = () => {
            o.Z.open(y.oAB.APPEARANCE, null, { scrollPosition: k.h1.CUSTOM_APP_ICONS });
        },
        ew = {
            avatarDecorations: eb
                ? {
                      name: 'avatarDecorations',
                      title: U.intl.string(U.t['5YcGTk']),
                      subtitle: U.intl.string(U.t.QcJ6cX),
                      description: U.intl.string(U.t.MCvgWl),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: eM,
                      pillText: U.intl.string(U.t.EYxi0t),
                      perkImage: Q,
                      canReveal: eC
                  }
                : {
                      name: 'avatarDecorations',
                      title: U.intl.string(U.t['5YcGTk']),
                      subtitle: U.intl.string(U.t['1QvWws']),
                      description: U.intl.string(U.t['2GPNr6']),
                      pillText: U.intl.string(U.t.EYxi0t),
                      perkImage: Q,
                      canReveal: eC
                  },
            clientThemes: {
                name: 'clientThemes',
                title: U.intl.string(U.t.kWM48P),
                subtitle: U.intl.string(U.t.CjRASE),
                description: U.intl.string(U.t.jBTTws),
                descriptionCta: U.intl.string(U.t.jVcuVV),
                onCtaClick: () => {
                    o.Z.open(y.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: W
            },
            clips: eb
                ? {
                      name: 'clips',
                      title: U.intl.string(U.t.z2jK6e),
                      subtitle: U.intl.string(U.t['hxy0/f']),
                      description: U.intl.string(U.t.Z6v86e),
                      descriptionCta: eS ? U.intl.string(U.t.jVcuVV) : U.intl.string(U.t.hvVgAQ),
                      pillText: U.intl.string(U.t.EYxi0t),
                      onCtaClick: eS
                          ? () => {
                                (0, p.Z)(L.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(v.Z.getArticleURL(y.BhN.CLIPS), '_blank');
                            },
                      perkImage: J
                  }
                : {
                      name: 'clips',
                      title: U.intl.string(U.t.z2jK6e),
                      subtitle: U.intl.string(U.t['hxy0/f']),
                      description: U.intl.string(U.t.X9IeNz),
                      pillText: U.intl.string(U.t.EYxi0t),
                      perkImage: J
                  },
            earlyAccess: eb
                ? {
                      name: 'earlyAccess',
                      title: U.intl.string(U.t.UkLVeH),
                      subtitle: U.intl.string(U.t.xf9ePj),
                      description: U.intl.string(U.t['+r4vdn']),
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: U.intl.string(U.t.UkLVeH),
                      subtitle: U.intl.string(U.t.xf9ePj),
                      description: U.intl.string(U.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            earlyAccessSeeAllVariant: eb
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: U.intl.string(U.t.UkLVeH),
                      subtitle: U.intl.string(U.t.xf9ePj),
                      description: U.intl.string(U.t['+r4vdn']),
                      perkImage: $
                  }
                : {
                      name: 'earlyAccess',
                      title: U.intl.string(U.t.UkLVeH),
                      subtitle: U.intl.string(U.t.xf9ePj),
                      description: U.intl.string(U.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: $
                  },
            entranceSounds: eb
                ? {
                      name: 'entranceSounds',
                      title: U.intl.string(U.t['f4M+Hx']),
                      subtitle: U.intl.string(U.t['7ZCYvL']),
                      description: U.intl.string(U.t.mUT8bG),
                      descriptionCta: U.intl.string(U.t.jVcuVV),
                      onCtaClick: eO,
                      perkImage: et
                  }
                : {
                      name: 'entranceSounds',
                      title: U.intl.string(U.t['f4M+Hx']),
                      subtitle: U.intl.string(U.t['7ZCYvL']),
                      description: U.intl.string(U.t['3smf/f']),
                      perkImage: et
                  },
            entranceSoundsSeeAllVariation: eb
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: U.intl.string(U.t['f4M+Hx']),
                      subtitle: U.intl.string(U.t['7ZCYvL']),
                      description: U.intl.string(U.t.mUT8bG),
                      descriptionCta: U.intl.string(U.t.jVcuVV),
                      onCtaClick: eO,
                      perkImage: en
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: U.intl.string(U.t['f4M+Hx']),
                      subtitle: U.intl.string(U.t['7ZCYvL']),
                      description: U.intl.string(U.t['3smf/f']),
                      perkImage: en
                  },
            profileEffects: eb
                ? {
                      name: 'profileEffects',
                      title: U.intl.string(U.t.c7OKaG),
                      subtitle: U.intl.string(U.t.eVvkDw),
                      description: U.intl.string(U.t['0mUM/P']),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: eM,
                      pillText: U.intl.string(U.t.EYxi0t),
                      perkImage: ea,
                      canReveal: ev
                  }
                : {
                      name: 'profileEffects',
                      title: U.intl.string(U.t.c7OKaG),
                      subtitle: U.intl.string(U.t.eVvkDw),
                      description: U.intl.string(U.t.XNKnvr),
                      pillText: U.intl.string(U.t.EYxi0t),
                      perkImage: ea,
                      canReveal: ev
                  },
            profiles: {
                name: 'profiles',
                title: U.intl.string(U.t.KcyDwM),
                subtitle: U.intl.string(U.t.Mt3U1d),
                description: U.intl.string(U.t.kWcDKy),
                descriptionCta: U.intl.string(U.t.jVcuVV),
                onCtaClick: eZ,
                perkImage: z
            },
            remixing: eb
                ? {
                      name: 'remixing',
                      title: U.intl.string(U.t['H+v6eX']),
                      subtitle: U.intl.string(U.t.wmbOAg),
                      description: U.intl.string(U.t.gdA9FB),
                      perkImage: el,
                      pillText: U.intl.string(U.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: U.intl.string(U.t['H+v6eX']),
                      subtitle: U.intl.string(U.t.wmbOAg),
                      description: U.intl.string(U.t.fiLtJi),
                      perkImage: el,
                      pillText: U.intl.string(U.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: U.intl.string(U.t['NyDu//']),
                subtitle: U.intl.string(U.t['4pEwXF']),
                description: eP ? U.intl.format(U.t.uPiIBQ, { link: 'https://discord.com' }) : U.intl.string(U.t.jsyNHh),
                descriptionCta: U.intl.string(U.t.jVcuVV),
                onCtaClick: eP
                    ? void 0
                    : () => {
                          o.Z.open(y.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: Y,
                hideOnNarrowScreen: !eP,
                imageOverlayText: eP ? U.intl.string(U.t.lcYttb) : void 0
            },
            specialMemberPricing: eb
                ? {
                      name: 'specialMemberPricing',
                      title: U.intl.string(U.t['0Mykgo']),
                      subtitle: U.intl.string(U.t.opgqDQ),
                      description: U.intl.string(U.t['t+QZSU']),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: eM,
                      perkImage: ec
                  }
                : {
                      name: 'specialMemberPricing',
                      title: U.intl.string(U.t['0Mykgo']),
                      subtitle: U.intl.string(U.t.opgqDQ),
                      description: U.intl.string(U.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ec
                  },
            specialMemberPricingSeeAllVariant: eb
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: U.intl.string(U.t['0Mykgo']),
                      subtitle: U.intl.string(U.t.opgqDQ),
                      description: U.intl.string(U.t['t+QZSU']),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: eM,
                      perkImage: ed
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: U.intl.string(U.t['0Mykgo']),
                      subtitle: U.intl.string(U.t.opgqDQ),
                      description: U.intl.string(U.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ed
                  },
            specialShopPerks: eb
                ? {
                      name: 'specialShopPerks',
                      title: U.intl.string(U.t.U68LpK),
                      subtitle: U.intl.string(U.t.chRZiY),
                      description: U.intl.string(U.t['t+QZSU']),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: eM,
                      perkImage: ec
                  }
                : {
                      name: 'specialShopPerks',
                      title: U.intl.string(U.t.U68LpK),
                      subtitle: U.intl.string(U.t.chRZiY),
                      description: U.intl.string(U.t['JE/EWV']),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: eM,
                      perkImage: ec
                  },
            unlimitedSuperReactions: eb
                ? {
                      name: 'unlimitedSuperReactions',
                      title: U.intl.string(U.t.hpgmOz),
                      subtitle: U.intl.string(U.t.Hxujsr),
                      description: U.intl.string(U.t['Cn/z6+']),
                      perkImage: ef,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: U.intl.string(U.t.hpgmOz),
                      subtitle: U.intl.string(U.t.Hxujsr),
                      description: U.intl.string(U.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: ef,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: U.intl.string(U.t['6S7kOz']),
                subtitle: U.intl.string(U.t.kN1JRE),
                description: U.intl.string(U.t.e7FKCg),
                perkImage: em
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: U.intl.string(U.t.O5R3ho),
                pillText: U.intl.string(U.t.yhEY5O),
                backgroundImage: er
            },
            badge: {
                name: 'badge',
                title: U.intl.string(U.t.dcFfSE),
                subtitle: U.intl.string(U.t['37MFFh']),
                perkImage: G,
                description: U.intl.string(U.t.T1IS4u),
                imageOverlayText: ej === B.a$.FP_ONLY ? U.intl.string(U.t.lcYttb) : void 0
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: U.intl.string(U.t.OuItFh),
                subtitle: U.intl.string(U.t.mPyrEx),
                perkImage: q,
                description: U.intl.string(U.t.e7FKCg),
                descriptionCta: U.intl.string(U.t.jVcuVV),
                onCtaClick: eB
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: U.intl.string(U.t['R2IV/f']),
                subtitle: U.intl.string(U.t.R5Xag4),
                perkImage: ee,
                description: U.intl.string(U.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: U.intl.string(U.t.LWsAra),
                subtitle: U.intl.string(U.t.bTzbVl),
                perkImage: (0, O.gx)(t, H, V),
                description: U.intl.string(U.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: U.intl.string(U.t.tzdIwM),
                subtitle: U.intl.string(U.t.FXlU29),
                perkImage: (0, O.gx)(t, F, eu),
                description: U.intl.string(U.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: U.intl.formatToPlainString(U.t.jqhAdH, { premiumMaxSize: i }),
                subtitle: U.intl.formatToPlainString(U.t['HI+cfn'], { premiumMaxSize: i }),
                perkImage: e_,
                description: U.intl.string(U.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: U.intl.string(U.t.RSXQYG),
                subtitle: U.intl.string(U.t.ymCPxs),
                perkImage: eg,
                description: U.intl.string(U.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: U.intl.string(U.t.XQCSrq),
                subtitle: U.intl.string(U.t.HC5wVV),
                description: U.intl.string(U.t.ee7wQ0),
                descriptionCta: eb || ex ? U.intl.string(U.t.y9TxXV) : U.intl.string(U.t.d8o6lZ),
                isPremiumGetCta: !(eb || ex),
                onCtaClick: eb || ex ? eB : void 0,
                perkImage: ei
            },
            referralProgram: {
                name: 'referralProgram',
                title: U.intl.string(U.t.tPY4o6),
                subtitle: U.intl.string(U.t.JY0grK),
                description: U.intl.format(U.t['2JqTFx'], { helpdeskArticle: v.Z.getArticleURL(y.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: U.intl.string(U.t.JST6jo),
                isPremiumGetCta: !eh || void 0,
                perkImage: es
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: U.intl.string(U.t.I9TYMj),
                subtitle: U.intl.string(U.t.HMSHeH),
                descriptionCta: eb ? U.intl.string(U.t.jVcuVV) : U.intl.string(U.t.JST6jo),
                isPremiumGetCta: !eb,
                onCtaClick: eb ? eZ : void 0,
                perkImage: eo
            }
        };
    if (null != eA) {
        let { title: e, subtitle: t, description: n, pillText: i, ctaDescription: r, dismissibleContentType: s } = eA,
            l = (0, a.jsx)('div', {
                className: D.cardComponent,
                children: (0, a.jsx)(j.ZP, {
                    progressCircleVariation: j.Qo.AVATAR_DECO,
                    avatarDecoAssetId: w.VA,
                    avatarDecoAssetDescription: 'Gear Spin',
                    showAnimations: !0,
                    percentage: eI,
                    initialPercentage: eN
                })
            });
        ew.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: e,
            subtitle: t,
            description: n,
            perkComponent: l,
            descriptionCta: r,
            onCtaClick: () => {
                console.log('open avatar deco apply modal');
            },
            cardVariant: Z.zW.REWARD,
            pillText: i,
            dismissibleContentType: s
        };
    }
    if (null != eR) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: s, dismissibleContentType: l } = eR,
            c = (0, a.jsx)('div', {
                className: D.cardComponent,
                children: (0, a.jsx)(j.ZP, {
                    showAnimations: !0,
                    percentage: eI,
                    initialPercentage: eN
                })
            });
        ew.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: c,
            descriptionCta: s,
            onCtaClick: () => {
                o.Z.open(y.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: Z.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    let ey = (0, M.kG)(),
        { enabled: ek } = (0, I.Z)(),
        eL = () => {
            x.default.track(y.rMx.OPEN_MODAL, {
                type: 'Tiered Tenure Badge Details',
                location_stack: e,
                location: d.Z.PREMIUM_MARKETING_PERK_CARD,
                source: d.Z.PREMIUM_MARKETING_PERK_CARD
            }),
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await n.e('16133').then(n.bind(n, 743648));
                    return (t) => (0, a.jsx)(e, { ...t });
                });
        };
    return (
        null != ey &&
            ek &&
            (ew.tenureBadge = {
                name: 'tenureBadge',
                title: U.intl.string(U.t.rnsqpa),
                pillText: U.intl.string(U.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, a.jsx)(P.Z, {}),
                cardVariant: Z.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => eL()
            }),
        (0, N.ZP)('usePerksDiscoverabilityCard') === N.P0.SUMMER_2024 &&
            (ew.shyProject = {
                name: 'shyProject',
                title: U.intl.string(U.t['0Mykgo']),
                subtitle: U.intl.string(U.t.opgqDQ),
                description: eb ? U.intl.string(U.t['t+QZSU']) : U.intl.string(U.t['JE/EWV']),
                descriptionCta: U.intl.string(U.t.dBJVnZ),
                pillText: U.intl.string(U.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: eb ? eM : void 0,
                perkImage: K,
                isPremiumGetCta: !eb
            }),
        ew
    );
};
