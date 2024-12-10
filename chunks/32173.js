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
    B = n(391110),
    M = n(75077),
    O = n(976465),
    w = n(474936),
    y = n(735825),
    k = n(981631),
    L = n(526761),
    U = n(332325),
    D = n(388032),
    G = n(506829),
    H = n(660372),
    V = n(926433),
    F = n(302036),
    W = n(994554),
    z = n(704565),
    Y = n(393305),
    K = n(338879),
    Q = n(609926),
    q = n(203302),
    J = n(766491),
    X = n(193943),
    $ = n(707046),
    ee = n(488459),
    et = n(334347),
    en = n(132015),
    ei = n(355653),
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
    e_ = n(926262),
    eh = n(371435),
    eE = n(83663);
((i = r || (r = {})).AVATAR_DECORATIONS = 'avatarDecorations'), (i.CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILE_EFFECTS = 'profileEffects'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.GREY_BADGE = 'greyBadge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.FREE_BOOST = 'freeBoost'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHY_PROJECT = 'shyProject'), (i.TENURE_BADGE = 'tenureBadge');
t.Z = () => {
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        i = (0, v.BU)(w.Uq / 1024, { useKibibytes: !0 }),
        r = (0, s.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        eb = null != r ? N.ZP.getPremiumPlanItem(r) : null,
        ex = (null != eb ? N.ZP.getSkuIdForPlan(eb.planId) : null) === w.Si.TIER_2,
        eC = b.default.getCurrentUser(),
        ev = (0, N.I5)(eC, w.p9.TIER_2),
        eT = (0, N.I5)(eC, w.p9.TIER_0),
        { flipped: eN } = (0, R.JP)(),
        { flipped: eI } = (0, R.as)(),
        eS = (0, A.bq)({ showAnimations: !0 }),
        eR = null != eS ? eS.initialPercentage : void 0,
        eA = null != eS ? eS.percentage : void 0,
        ej = (0, m.Z)(E.Z),
        eP = (0, j.ZP)(),
        eZ = (0, j.aJ)(),
        eB = (0, A.Kb)(y.qY),
        { fractionalState: eM } = (0, g.Z)(),
        eO = eM === w.a$.FP_ONLY,
        ew = (0, p.Z)({
            scrollPosition: L.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        ey = () => {
            o.Z.open(k.oAB.VOICE, L.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        ek = () => {
            (0, _.uL)(k.Z5c.COLLECTIBLES_SHOP);
        },
        eL = () => {
            o.Z.open(k.oAB.APPEARANCE, null, { scrollPosition: L.h1.CUSTOM_APP_ICONS });
        },
        eU = {
            avatarDecorations: ev
                ? {
                      name: 'avatarDecorations',
                      title: D.intl.string(D.t['5YcGTk']),
                      subtitle: D.intl.string(D.t.QcJ6cX),
                      description: D.intl.string(D.t.MCvgWl),
                      descriptionCta: D.intl.string(D.t.dBJVnZ),
                      onCtaClick: ek,
                      pillText: D.intl.string(D.t.EYxi0t),
                      perkImage: q,
                      canReveal: eN
                  }
                : {
                      name: 'avatarDecorations',
                      title: D.intl.string(D.t['5YcGTk']),
                      subtitle: D.intl.string(D.t['1QvWws']),
                      description: D.intl.string(D.t['2GPNr6']),
                      pillText: D.intl.string(D.t.EYxi0t),
                      perkImage: q,
                      canReveal: eN
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
            clips: ev
                ? {
                      name: 'clips',
                      title: D.intl.string(D.t.z2jK6e),
                      subtitle: D.intl.string(D.t['hxy0/f']),
                      description: D.intl.string(D.t.Z6v86e),
                      descriptionCta: ej ? D.intl.string(D.t.jVcuVV) : D.intl.string(D.t.hvVgAQ),
                      pillText: D.intl.string(D.t.EYxi0t),
                      onCtaClick: ej
                          ? () => {
                                (0, h.Z)(U.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(T.Z.getArticleURL(k.BhN.CLIPS), '_blank');
                            },
                      perkImage: J
                  }
                : {
                      name: 'clips',
                      title: D.intl.string(D.t.z2jK6e),
                      subtitle: D.intl.string(D.t['hxy0/f']),
                      description: D.intl.string(D.t.X9IeNz),
                      pillText: D.intl.string(D.t.EYxi0t),
                      perkImage: J
                  },
            earlyAccess: ev
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
            earlyAccessSeeAllVariant: ev
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
            entranceSounds: ev
                ? {
                      name: 'entranceSounds',
                      title: D.intl.string(D.t['f4M+Hx']),
                      subtitle: D.intl.string(D.t['7ZCYvL']),
                      description: D.intl.string(D.t.mUT8bG),
                      descriptionCta: D.intl.string(D.t.jVcuVV),
                      onCtaClick: ey,
                      perkImage: en
                  }
                : {
                      name: 'entranceSounds',
                      title: D.intl.string(D.t['f4M+Hx']),
                      subtitle: D.intl.string(D.t['7ZCYvL']),
                      description: D.intl.string(D.t['3smf/f']),
                      perkImage: en
                  },
            entranceSoundsSeeAllVariation: ev
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: D.intl.string(D.t['f4M+Hx']),
                      subtitle: D.intl.string(D.t['7ZCYvL']),
                      description: D.intl.string(D.t.mUT8bG),
                      descriptionCta: D.intl.string(D.t.jVcuVV),
                      onCtaClick: ey,
                      perkImage: ei
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: D.intl.string(D.t['f4M+Hx']),
                      subtitle: D.intl.string(D.t['7ZCYvL']),
                      description: D.intl.string(D.t['3smf/f']),
                      perkImage: ei
                  },
            profileEffects: ev
                ? {
                      name: 'profileEffects',
                      title: D.intl.string(D.t.c7OKaG),
                      subtitle: D.intl.string(D.t.eVvkDw),
                      description: D.intl.string(D.t['0mUM/P']),
                      descriptionCta: D.intl.string(D.t.dBJVnZ),
                      onCtaClick: ek,
                      pillText: D.intl.string(D.t.EYxi0t),
                      perkImage: es,
                      canReveal: eI
                  }
                : {
                      name: 'profileEffects',
                      title: D.intl.string(D.t.c7OKaG),
                      subtitle: D.intl.string(D.t.eVvkDw),
                      description: D.intl.string(D.t.XNKnvr),
                      pillText: D.intl.string(D.t.EYxi0t),
                      perkImage: es,
                      canReveal: eI
                  },
            profiles: {
                name: 'profiles',
                title: D.intl.string(D.t.KcyDwM),
                subtitle: D.intl.string(D.t.Mt3U1d),
                description: D.intl.string(D.t.kWcDKy),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                onCtaClick: ew,
                perkImage: Y
            },
            remixing: ev
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
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: D.intl.string(D.t['NyDu//']),
                subtitle: D.intl.string(D.t['4pEwXF']),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                perkImage: eh.Z,
                imageOverlayText: D.intl.string(D.t.lcYttb)
            },
            specialMemberPricing: ev
                ? {
                      name: 'specialMemberPricing',
                      title: D.intl.string(D.t['0Mykgo']),
                      subtitle: D.intl.string(D.t.opgqDQ),
                      description: D.intl.string(D.t['t+QZSU']),
                      descriptionCta: D.intl.string(D.t.dBJVnZ),
                      onCtaClick: ek,
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
            specialMemberPricingSeeAllVariant: ev
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: D.intl.string(D.t['0Mykgo']),
                      subtitle: D.intl.string(D.t.opgqDQ),
                      description: D.intl.string(D.t['t+QZSU']),
                      descriptionCta: D.intl.string(D.t.dBJVnZ),
                      onCtaClick: ek,
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
            specialShopPerks: ev
                ? {
                      name: 'specialShopPerks',
                      title: D.intl.string(D.t.U68LpK),
                      subtitle: D.intl.string(D.t.chRZiY),
                      description: D.intl.string(D.t['t+QZSU']),
                      descriptionCta: D.intl.string(D.t.dBJVnZ),
                      onCtaClick: ek,
                      perkImage: ed
                  }
                : {
                      name: 'specialShopPerks',
                      title: D.intl.string(D.t.U68LpK),
                      subtitle: D.intl.string(D.t.chRZiY),
                      description: D.intl.string(D.t['JE/EWV']),
                      descriptionCta: D.intl.string(D.t.dBJVnZ),
                      onCtaClick: ek,
                      perkImage: ed
                  },
            unlimitedSuperReactions: ev
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
                perkImage: H,
                description: D.intl.string(D.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: D.intl.string(D.t.dcFfSE),
                subtitle: D.intl.string(D.t['37MFFh']),
                perkImage: eE.Z,
                description: D.intl.string(D.t.T1IS4u),
                imageOverlayText: D.intl.string(D.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: D.intl.string(D.t.OuItFh),
                subtitle: D.intl.string(D.t.mPyrEx),
                perkImage: X,
                description: D.intl.string(D.t.e7FKCg),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                onCtaClick: eL
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
                descriptionCta: ev || eT ? D.intl.string(D.t.y9TxXV) : D.intl.string(D.t.d8o6lZ),
                isPremiumGetCta: !(ev || eT),
                onCtaClick: ev || eT ? eL : void 0,
                perkImage: er
            },
            referralProgram: {
                name: 'referralProgram',
                title: D.intl.string(D.t.tPY4o6),
                subtitle: D.intl.string(D.t.JY0grK),
                description: D.intl.format(D.t['2JqTFx'], { helpdeskArticle: T.Z.getArticleURL(k.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: D.intl.string(D.t.JST6jo),
                isPremiumGetCta: !ex || void 0,
                perkImage: el
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: D.intl.string(D.t.I9TYMj),
                subtitle: D.intl.string(D.t.HMSHeH),
                descriptionCta: ev ? D.intl.string(D.t.jVcuVV) : D.intl.string(D.t.JST6jo),
                isPremiumGetCta: !ev,
                onCtaClick: ev ? ew : void 0,
                perkImage: ec
            }
        };
    if (null != eZ) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: s, dismissibleContentType: l } = eZ,
            o = (0, a.jsx)('div', {
                className: G.cardComponent,
                children: (0, a.jsx)(P.ZP, {
                    progressCircleVariation: P.Qo.AVATAR_DECO,
                    avatarDecoAssetId: y.VA,
                    avatarDecoAssetDescription: D.intl.string(D.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eA,
                    initialPercentage: eR
                })
            });
        eU.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: o,
            descriptionCta: s,
            onCtaClick: () => {
                if (null != eB)
                    (0, f.Z)({
                        product: eB,
                        title: D.intl.string(D.t.wRAXra),
                        description: D.intl.string(D.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: B.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    if (null != eP) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: s, dismissibleContentType: l } = eP,
            c = (0, a.jsx)('div', {
                className: G.cardComponent,
                children: (0, a.jsx)(P.ZP, {
                    showAnimations: !0,
                    percentage: eA,
                    initialPercentage: eR
                })
            });
        eU.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: c,
            descriptionCta: s,
            onCtaClick: () => {
                o.Z.open(k.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: B.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    let eD = (0, O.kG)(),
        { enabled: eG } = (0, S.Z)(),
        eH = () => {
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
        null != eD &&
            eG &&
            (eU.tenureBadge = {
                name: 'tenureBadge',
                title: D.intl.string(D.t.rnsqpa),
                pillText: D.intl.string(D.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, a.jsx)(Z.Z, {}),
                cardVariant: B.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => eH()
            }),
        (0, I.ZP)('usePerksDiscoverabilityCard') === I.P0.SUMMER_2024 &&
            (eU.shyProject = {
                name: 'shyProject',
                title: D.intl.string(D.t['0Mykgo']),
                subtitle: D.intl.string(D.t.opgqDQ),
                description: ev ? D.intl.string(D.t['t+QZSU']) : D.intl.string(D.t['JE/EWV']),
                descriptionCta: D.intl.string(D.t.dBJVnZ),
                pillText: D.intl.string(D.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: ev ? ek : void 0,
                perkImage: Q,
                isPremiumGetCta: !ev
            }),
        eU
    );
};
