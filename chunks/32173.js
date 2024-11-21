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
    f = n(832149),
    p = n(300284),
    _ = n(703656),
    h = n(547972),
    E = n(131951),
    b = n(594174),
    x = n(78839),
    C = n(626135),
    v = n(424218),
    T = n(63063),
    N = n(74538),
    I = n(860489),
    S = n(471309),
    R = n(494127),
    A = n(314684),
    j = n(687362),
    P = n(119269),
    Z = n(467685),
    O = n(391110),
    M = n(75077),
    B = n(976465),
    w = n(474936),
    y = n(735825),
    k = n(981631),
    L = n(526761),
    U = n(332325),
    D = n(388032),
    H = n(977341),
    G = n(660372),
    V = n(926433),
    F = n(302036),
    W = n(994554),
    z = n(704565),
    Y = n(393305),
    K = n(338879),
    Q = n(609926),
    J = n(203302),
    q = n(766491),
    X = n(193943),
    $ = n(707046),
    ee = n(488459),
    et = n(334347),
    en = n(132015),
    ei = n(142416),
    er = n(607762),
    ea = n(474106),
    es = n(567452),
    el = n(572501),
    eo = n(755590),
    ec = n(909910),
    ed = n(637810),
    eu = n(570423),
    eg = n(912429),
    em = n(91394),
    ef = n(209672),
    ep = n(698173),
    e_ = n(926262);
((i = r || (r = {})).AVATAR_DECORATIONS = 'avatarDecorations'), (i.CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILE_EFFECTS = 'profileEffects'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.FREE_BOOST = 'freeBoost'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHY_PROJECT = 'shyProject'), (i.TENURE_BADGE = 'tenureBadge');
t.Z = () => {
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        i = (0, v.BU)(w.Uq / 1024, { useKibibytes: !0 }),
        r = (0, s.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        eh = null != r ? N.ZP.getPremiumPlanItem(r) : null,
        eE = (null != eh ? N.ZP.getSkuIdForPlan(eh.planId) : null) === w.Si.TIER_2,
        eb = b.default.getCurrentUser(),
        ex = (0, N.I5)(eb, w.p9.TIER_2),
        eC = (0, N.I5)(eb, w.p9.TIER_0),
        { flipped: ev } = (0, R.JP)(),
        { flipped: eT } = (0, R.as)(),
        eN = (0, A.bq)({ showAnimations: !0 }),
        eI = null != eN ? eN.initialPercentage : void 0,
        eS = null != eN ? eN.percentage : void 0,
        eR = (0, m.Z)(E.Z),
        eA = (0, j.ZP)(),
        ej = (0, j.aJ)(),
        eP = (0, A.Kb)(y.qY),
        { fractionalState: eZ } = (0, g.Z)(),
        eO = eZ === w.a$.FP_ONLY,
        eM = (0, p.Z)({
            scrollPosition: L.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eB = () => {
            o.Z.open(k.oAB.VOICE, L.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        ew = () => {
            (0, _.uL)(k.Z5c.COLLECTIBLES_SHOP);
        },
        ey = () => {
            o.Z.open(k.oAB.APPEARANCE, null, { scrollPosition: L.h1.CUSTOM_APP_ICONS });
        },
        ek = {
            avatarDecorations: ex
                ? {
                      name: 'avatarDecorations',
                      title: D.intl.string(D.t['5YcGTk']),
                      subtitle: D.intl.string(D.t.QcJ6cX),
                      description: D.intl.string(D.t.MCvgWl),
                      descriptionCta: D.intl.string(D.t.dBJVnZ),
                      onCtaClick: ew,
                      pillText: D.intl.string(D.t.EYxi0t),
                      perkImage: J,
                      canReveal: ev
                  }
                : {
                      name: 'avatarDecorations',
                      title: D.intl.string(D.t['5YcGTk']),
                      subtitle: D.intl.string(D.t['1QvWws']),
                      description: D.intl.string(D.t['2GPNr6']),
                      pillText: D.intl.string(D.t.EYxi0t),
                      perkImage: J,
                      canReveal: ev
                  },
            clientThemes: {
                name: 'clientThemes',
                title: D.intl.string(D.t.kWM48P),
                subtitle: D.intl.string(D.t.CjRASE),
                description: D.intl.string(D.t.jBTTws),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                onCtaClick: () => {
                    o.Z.open(k.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: z
            },
            clips: ex
                ? {
                      name: 'clips',
                      title: D.intl.string(D.t.z2jK6e),
                      subtitle: D.intl.string(D.t['hxy0/f']),
                      description: D.intl.string(D.t.Z6v86e),
                      descriptionCta: eR ? D.intl.string(D.t.jVcuVV) : D.intl.string(D.t.hvVgAQ),
                      pillText: D.intl.string(D.t.EYxi0t),
                      onCtaClick: eR
                          ? () => {
                                (0, h.Z)(U.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(T.Z.getArticleURL(k.BhN.CLIPS), '_blank');
                            },
                      perkImage: q
                  }
                : {
                      name: 'clips',
                      title: D.intl.string(D.t.z2jK6e),
                      subtitle: D.intl.string(D.t['hxy0/f']),
                      description: D.intl.string(D.t.X9IeNz),
                      pillText: D.intl.string(D.t.EYxi0t),
                      perkImage: q
                  },
            earlyAccess: ex
                ? {
                      name: 'earlyAccess',
                      title: D.intl.string(D.t.UkLVeH),
                      subtitle: D.intl.string(D.t.xf9ePj),
                      description: D.intl.string(D.t['+r4vdn']),
                      perkImage: $
                  }
                : {
                      name: 'earlyAccess',
                      title: D.intl.string(D.t.UkLVeH),
                      subtitle: D.intl.string(D.t.xf9ePj),
                      description: D.intl.string(D.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: $
                  },
            earlyAccessSeeAllVariant: ex
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: D.intl.string(D.t.UkLVeH),
                      subtitle: D.intl.string(D.t.xf9ePj),
                      description: D.intl.string(D.t['+r4vdn']),
                      perkImage: ee
                  }
                : {
                      name: 'earlyAccess',
                      title: D.intl.string(D.t.UkLVeH),
                      subtitle: D.intl.string(D.t.xf9ePj),
                      description: D.intl.string(D.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: ee
                  },
            entranceSounds: ex
                ? {
                      name: 'entranceSounds',
                      title: D.intl.string(D.t['f4M+Hx']),
                      subtitle: D.intl.string(D.t['7ZCYvL']),
                      description: D.intl.string(D.t.mUT8bG),
                      descriptionCta: D.intl.string(D.t.jVcuVV),
                      onCtaClick: eB,
                      perkImage: en
                  }
                : {
                      name: 'entranceSounds',
                      title: D.intl.string(D.t['f4M+Hx']),
                      subtitle: D.intl.string(D.t['7ZCYvL']),
                      description: D.intl.string(D.t['3smf/f']),
                      perkImage: en
                  },
            entranceSoundsSeeAllVariation: ex
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: D.intl.string(D.t['f4M+Hx']),
                      subtitle: D.intl.string(D.t['7ZCYvL']),
                      description: D.intl.string(D.t.mUT8bG),
                      descriptionCta: D.intl.string(D.t.jVcuVV),
                      onCtaClick: eB,
                      perkImage: ei
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: D.intl.string(D.t['f4M+Hx']),
                      subtitle: D.intl.string(D.t['7ZCYvL']),
                      description: D.intl.string(D.t['3smf/f']),
                      perkImage: ei
                  },
            profileEffects: ex
                ? {
                      name: 'profileEffects',
                      title: D.intl.string(D.t.c7OKaG),
                      subtitle: D.intl.string(D.t.eVvkDw),
                      description: D.intl.string(D.t['0mUM/P']),
                      descriptionCta: D.intl.string(D.t.dBJVnZ),
                      onCtaClick: ew,
                      pillText: D.intl.string(D.t.EYxi0t),
                      perkImage: es,
                      canReveal: eT
                  }
                : {
                      name: 'profileEffects',
                      title: D.intl.string(D.t.c7OKaG),
                      subtitle: D.intl.string(D.t.eVvkDw),
                      description: D.intl.string(D.t.XNKnvr),
                      pillText: D.intl.string(D.t.EYxi0t),
                      perkImage: es,
                      canReveal: eT
                  },
            profiles: {
                name: 'profiles',
                title: D.intl.string(D.t.KcyDwM),
                subtitle: D.intl.string(D.t.Mt3U1d),
                description: D.intl.string(D.t.kWcDKy),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                onCtaClick: eM,
                perkImage: Y
            },
            remixing: ex
                ? {
                      name: 'remixing',
                      title: D.intl.string(D.t['H+v6eX']),
                      subtitle: D.intl.string(D.t.wmbOAg),
                      description: D.intl.string(D.t.gdA9FB),
                      perkImage: eo,
                      pillText: D.intl.string(D.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: D.intl.string(D.t['H+v6eX']),
                      subtitle: D.intl.string(D.t.wmbOAg),
                      description: D.intl.string(D.t.fiLtJi),
                      perkImage: eo,
                      pillText: D.intl.string(D.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: D.intl.string(D.t['NyDu//']),
                subtitle: D.intl.string(D.t['4pEwXF']),
                description: eO ? D.intl.format(D.t.uPiIBQ, { link: 'https://discord.com' }) : D.intl.string(D.t.jsyNHh),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                onCtaClick: eO
                    ? void 0
                    : () => {
                          o.Z.open(k.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: K,
                hideOnNarrowScreen: !eO,
                imageOverlayText: eO ? D.intl.string(D.t.lcYttb) : void 0
            },
            specialMemberPricing: ex
                ? {
                      name: 'specialMemberPricing',
                      title: D.intl.string(D.t['0Mykgo']),
                      subtitle: D.intl.string(D.t.opgqDQ),
                      description: D.intl.string(D.t['t+QZSU']),
                      descriptionCta: D.intl.string(D.t.dBJVnZ),
                      onCtaClick: ew,
                      perkImage: ed
                  }
                : {
                      name: 'specialMemberPricing',
                      title: D.intl.string(D.t['0Mykgo']),
                      subtitle: D.intl.string(D.t.opgqDQ),
                      description: D.intl.string(D.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ed
                  },
            specialMemberPricingSeeAllVariant: ex
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: D.intl.string(D.t['0Mykgo']),
                      subtitle: D.intl.string(D.t.opgqDQ),
                      description: D.intl.string(D.t['t+QZSU']),
                      descriptionCta: D.intl.string(D.t.dBJVnZ),
                      onCtaClick: ew,
                      perkImage: eu
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: D.intl.string(D.t['0Mykgo']),
                      subtitle: D.intl.string(D.t.opgqDQ),
                      description: D.intl.string(D.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eu
                  },
            specialShopPerks: ex
                ? {
                      name: 'specialShopPerks',
                      title: D.intl.string(D.t.U68LpK),
                      subtitle: D.intl.string(D.t.chRZiY),
                      description: D.intl.string(D.t['t+QZSU']),
                      descriptionCta: D.intl.string(D.t.dBJVnZ),
                      onCtaClick: ew,
                      perkImage: ed
                  }
                : {
                      name: 'specialShopPerks',
                      title: D.intl.string(D.t.U68LpK),
                      subtitle: D.intl.string(D.t.chRZiY),
                      description: D.intl.string(D.t['JE/EWV']),
                      descriptionCta: D.intl.string(D.t.dBJVnZ),
                      onCtaClick: ew,
                      perkImage: ed
                  },
            unlimitedSuperReactions: ex
                ? {
                      name: 'unlimitedSuperReactions',
                      title: D.intl.string(D.t.hpgmOz),
                      subtitle: D.intl.string(D.t.Hxujsr),
                      description: D.intl.string(D.t['Cn/z6+']),
                      perkImage: ep,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: D.intl.string(D.t.hpgmOz),
                      subtitle: D.intl.string(D.t.Hxujsr),
                      description: D.intl.string(D.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: ep,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: D.intl.string(D.t['6S7kOz']),
                subtitle: D.intl.string(D.t.kN1JRE),
                description: D.intl.string(D.t.e7FKCg),
                perkImage: ef
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: D.intl.string(D.t.O5R3ho),
                pillText: D.intl.string(D.t.yhEY5O),
                backgroundImage: ea
            },
            badge: {
                name: 'badge',
                title: D.intl.string(D.t.dcFfSE),
                subtitle: D.intl.string(D.t['37MFFh']),
                perkImage: G,
                description: D.intl.string(D.t.T1IS4u),
                imageOverlayText: eZ === w.a$.FP_ONLY ? D.intl.string(D.t.lcYttb) : void 0
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: D.intl.string(D.t.OuItFh),
                subtitle: D.intl.string(D.t.mPyrEx),
                perkImage: X,
                description: D.intl.string(D.t.e7FKCg),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                onCtaClick: ey
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: D.intl.string(D.t['R2IV/f']),
                subtitle: D.intl.string(D.t.R5Xag4),
                perkImage: et,
                description: D.intl.string(D.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: D.intl.string(D.t.LWsAra),
                subtitle: D.intl.string(D.t.bTzbVl),
                perkImage: (0, M.gx)(t, V, F),
                description: D.intl.string(D.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: D.intl.string(D.t.tzdIwM),
                subtitle: D.intl.string(D.t.FXlU29),
                perkImage: (0, M.gx)(t, W, eg),
                description: D.intl.string(D.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: D.intl.formatToPlainString(D.t.jqhAdH, { premiumMaxSize: i }),
                subtitle: D.intl.formatToPlainString(D.t['HI+cfn'], { premiumMaxSize: i }),
                perkImage: e_,
                description: D.intl.string(D.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: D.intl.string(D.t.RSXQYG),
                subtitle: D.intl.string(D.t.ymCPxs),
                perkImage: em,
                description: D.intl.string(D.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: D.intl.string(D.t.XQCSrq),
                subtitle: D.intl.string(D.t.HC5wVV),
                description: D.intl.string(D.t.ee7wQ0),
                descriptionCta: ex || eC ? D.intl.string(D.t.y9TxXV) : D.intl.string(D.t.d8o6lZ),
                isPremiumGetCta: !(ex || eC),
                onCtaClick: ex || eC ? ey : void 0,
                perkImage: er
            },
            referralProgram: {
                name: 'referralProgram',
                title: D.intl.string(D.t.tPY4o6),
                subtitle: D.intl.string(D.t.JY0grK),
                description: D.intl.format(D.t['2JqTFx'], { helpdeskArticle: T.Z.getArticleURL(k.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: D.intl.string(D.t.JST6jo),
                isPremiumGetCta: !eE || void 0,
                perkImage: el
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: D.intl.string(D.t.I9TYMj),
                subtitle: D.intl.string(D.t.HMSHeH),
                descriptionCta: ex ? D.intl.string(D.t.jVcuVV) : D.intl.string(D.t.JST6jo),
                isPremiumGetCta: !ex,
                onCtaClick: ex ? eM : void 0,
                perkImage: ec
            }
        };
    if (null != ej) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: s, dismissibleContentType: l } = ej,
            o = (0, a.jsx)('div', {
                className: H.cardComponent,
                children: (0, a.jsx)(P.ZP, {
                    progressCircleVariation: P.Qo.AVATAR_DECO,
                    avatarDecoAssetId: y.VA,
                    avatarDecoAssetDescription: D.intl.string(D.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eS,
                    initialPercentage: eI
                })
            });
        ek.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: o,
            descriptionCta: s,
            onCtaClick: () => {
                if (null != eP)
                    (0, f.Z)({
                        product: eP,
                        title: D.intl.string(D.t.wRAXra),
                        description: D.intl.string(D.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: O.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    if (null != eA) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: s, dismissibleContentType: l } = eA,
            c = (0, a.jsx)('div', {
                className: H.cardComponent,
                children: (0, a.jsx)(P.ZP, {
                    showAnimations: !0,
                    percentage: eS,
                    initialPercentage: eI
                })
            });
        ek.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: c,
            descriptionCta: s,
            onCtaClick: () => {
                o.Z.open(k.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: O.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    let eL = (0, B.kG)(),
        { enabled: eU } = (0, S.Z)(),
        eD = () => {
            C.default.track(k.rMx.OPEN_MODAL, {
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
        null != eL &&
            eU &&
            (ek.tenureBadge = {
                name: 'tenureBadge',
                title: D.intl.string(D.t.rnsqpa),
                pillText: D.intl.string(D.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, a.jsx)(Z.Z, {}),
                cardVariant: O.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => eD()
            }),
        (0, I.ZP)('usePerksDiscoverabilityCard') === I.P0.SUMMER_2024 &&
            (ek.shyProject = {
                name: 'shyProject',
                title: D.intl.string(D.t['0Mykgo']),
                subtitle: D.intl.string(D.t.opgqDQ),
                description: ex ? D.intl.string(D.t['t+QZSU']) : D.intl.string(D.t['JE/EWV']),
                descriptionCta: D.intl.string(D.t.dBJVnZ),
                pillText: D.intl.string(D.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: ex ? ew : void 0,
                perkImage: Q,
                isPremiumGetCta: !ex
            }),
        ek
    );
};
