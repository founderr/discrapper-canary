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
    E = n(78839),
    b = n(626135),
    x = n(424218),
    C = n(63063),
    v = n(74538),
    T = n(860489),
    N = n(471309),
    I = n(494127),
    S = n(314684),
    R = n(687362),
    A = n(119269),
    j = n(467685),
    P = n(391110),
    Z = n(75077),
    O = n(976465),
    M = n(474936),
    B = n(735825),
    w = n(981631),
    y = n(526761),
    k = n(332325),
    L = n(388032),
    U = n(977341),
    D = n(660372),
    G = n(926433),
    H = n(302036),
    V = n(994554),
    F = n(704565),
    W = n(393305),
    z = n(338879),
    Y = n(609926),
    K = n(203302),
    Q = n(766491),
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
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        i = (0, x.BU)(M.Uq / 1024, { useKibibytes: !0 }),
        r = (0, s.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        e_ = null != r ? v.ZP.getPremiumPlanItem(r) : null,
        ep = null != e_ ? v.ZP.getSkuIdForPlan(e_.planId) : null,
        eh = ep === M.Si.TIER_2,
        eE = ep === M.Si.TIER_0,
        { flipped: eb } = (0, I.JP)(),
        { flipped: ex } = (0, I.as)(),
        eC = (0, S.nY)({ showAnimations: !0 }),
        ev = null != eC ? eC.initialPercentage : void 0,
        eT = null != eC ? eC.percentage : void 0,
        eN = (0, m.Z)(h.Z),
        eI = (0, R.ZP)(),
        eS = (0, R.aJ)(),
        { fractionalState: eR } = (0, g.Z)(),
        eA = eR === M.a$.FP_ONLY,
        ej = (0, f.Z)({
            scrollPosition: y.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eP = () => {
            o.Z.open(w.oAB.VOICE, y.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eZ = () => {
            (0, _.uL)(w.Z5c.COLLECTIBLES_SHOP);
        },
        eO = () => {
            o.Z.open(w.oAB.APPEARANCE, null, { scrollPosition: y.h1.CUSTOM_APP_ICONS });
        },
        eM = {
            avatarDecorations: eh
                ? {
                      name: 'avatarDecorations',
                      title: L.intl.string(L.t['5YcGTk']),
                      subtitle: L.intl.string(L.t.QcJ6cX),
                      description: L.intl.string(L.t.MCvgWl),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eZ,
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: K,
                      canReveal: eb
                  }
                : {
                      name: 'avatarDecorations',
                      title: L.intl.string(L.t['5YcGTk']),
                      subtitle: L.intl.string(L.t['1QvWws']),
                      description: L.intl.string(L.t['2GPNr6']),
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: K,
                      canReveal: eb
                  },
            clientThemes: {
                name: 'clientThemes',
                title: L.intl.string(L.t.kWM48P),
                subtitle: L.intl.string(L.t.CjRASE),
                description: L.intl.string(L.t.jBTTws),
                descriptionCta: L.intl.string(L.t.jVcuVV),
                onCtaClick: () => {
                    o.Z.open(w.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: F
            },
            clips: eh
                ? {
                      name: 'clips',
                      title: L.intl.string(L.t.z2jK6e),
                      subtitle: L.intl.string(L.t['hxy0/f']),
                      description: L.intl.string(L.t.Z6v86e),
                      descriptionCta: eN ? L.intl.string(L.t.jVcuVV) : L.intl.string(L.t.hvVgAQ),
                      pillText: L.intl.string(L.t.EYxi0t),
                      onCtaClick: eN
                          ? () => {
                                (0, p.Z)(k.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(C.Z.getArticleURL(w.BhN.CLIPS), '_blank');
                            },
                      perkImage: Q
                  }
                : {
                      name: 'clips',
                      title: L.intl.string(L.t.z2jK6e),
                      subtitle: L.intl.string(L.t['hxy0/f']),
                      description: L.intl.string(L.t.X9IeNz),
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: Q
                  },
            earlyAccess: eh
                ? {
                      name: 'earlyAccess',
                      title: L.intl.string(L.t.UkLVeH),
                      subtitle: L.intl.string(L.t.xf9ePj),
                      description: L.intl.string(L.t['+r4vdn']),
                      perkImage: q
                  }
                : {
                      name: 'earlyAccess',
                      title: L.intl.string(L.t.UkLVeH),
                      subtitle: L.intl.string(L.t.xf9ePj),
                      description: L.intl.string(L.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: q
                  },
            earlyAccessSeeAllVariant: eh
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: L.intl.string(L.t.UkLVeH),
                      subtitle: L.intl.string(L.t.xf9ePj),
                      description: L.intl.string(L.t['+r4vdn']),
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: L.intl.string(L.t.UkLVeH),
                      subtitle: L.intl.string(L.t.xf9ePj),
                      description: L.intl.string(L.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            entranceSounds: eh
                ? {
                      name: 'entranceSounds',
                      title: L.intl.string(L.t['f4M+Hx']),
                      subtitle: L.intl.string(L.t['7ZCYvL']),
                      description: L.intl.string(L.t.mUT8bG),
                      descriptionCta: L.intl.string(L.t.jVcuVV),
                      onCtaClick: eP,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSounds',
                      title: L.intl.string(L.t['f4M+Hx']),
                      subtitle: L.intl.string(L.t['7ZCYvL']),
                      description: L.intl.string(L.t['3smf/f']),
                      perkImage: ee
                  },
            entranceSoundsSeeAllVariation: eh
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: L.intl.string(L.t['f4M+Hx']),
                      subtitle: L.intl.string(L.t['7ZCYvL']),
                      description: L.intl.string(L.t.mUT8bG),
                      descriptionCta: L.intl.string(L.t.jVcuVV),
                      onCtaClick: eP,
                      perkImage: et
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: L.intl.string(L.t['f4M+Hx']),
                      subtitle: L.intl.string(L.t['7ZCYvL']),
                      description: L.intl.string(L.t['3smf/f']),
                      perkImage: et
                  },
            profileEffects: eh
                ? {
                      name: 'profileEffects',
                      title: L.intl.string(L.t.c7OKaG),
                      subtitle: L.intl.string(L.t.eVvkDw),
                      description: L.intl.string(L.t['0mUM/P']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eZ,
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: er,
                      canReveal: ex
                  }
                : {
                      name: 'profileEffects',
                      title: L.intl.string(L.t.c7OKaG),
                      subtitle: L.intl.string(L.t.eVvkDw),
                      description: L.intl.string(L.t.XNKnvr),
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: er,
                      canReveal: ex
                  },
            profiles: {
                name: 'profiles',
                title: L.intl.string(L.t.KcyDwM),
                subtitle: L.intl.string(L.t.Mt3U1d),
                description: L.intl.string(L.t.kWcDKy),
                descriptionCta: L.intl.string(L.t.jVcuVV),
                onCtaClick: ej,
                perkImage: W
            },
            remixing: eh
                ? {
                      name: 'remixing',
                      title: L.intl.string(L.t['H+v6eX']),
                      subtitle: L.intl.string(L.t.wmbOAg),
                      description: L.intl.string(L.t.gdA9FB),
                      perkImage: es,
                      pillText: L.intl.string(L.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: L.intl.string(L.t['H+v6eX']),
                      subtitle: L.intl.string(L.t.wmbOAg),
                      description: L.intl.string(L.t.fiLtJi),
                      perkImage: es,
                      pillText: L.intl.string(L.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: L.intl.string(L.t['NyDu//']),
                subtitle: L.intl.string(L.t['4pEwXF']),
                description: eA ? L.intl.format(L.t.uPiIBQ, { link: 'https://discord.com' }) : L.intl.string(L.t.jsyNHh),
                descriptionCta: L.intl.string(L.t.jVcuVV),
                onCtaClick: eA
                    ? void 0
                    : () => {
                          o.Z.open(w.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: z,
                hideOnNarrowScreen: !eA,
                imageOverlayText: eA ? L.intl.string(L.t.lcYttb) : void 0
            },
            specialMemberPricing: eh
                ? {
                      name: 'specialMemberPricing',
                      title: L.intl.string(L.t['0Mykgo']),
                      subtitle: L.intl.string(L.t.opgqDQ),
                      description: L.intl.string(L.t['t+QZSU']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: eo
                  }
                : {
                      name: 'specialMemberPricing',
                      title: L.intl.string(L.t['0Mykgo']),
                      subtitle: L.intl.string(L.t.opgqDQ),
                      description: L.intl.string(L.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eo
                  },
            specialMemberPricingSeeAllVariant: eh
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: L.intl.string(L.t['0Mykgo']),
                      subtitle: L.intl.string(L.t.opgqDQ),
                      description: L.intl.string(L.t['t+QZSU']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: ec
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: L.intl.string(L.t['0Mykgo']),
                      subtitle: L.intl.string(L.t.opgqDQ),
                      description: L.intl.string(L.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ec
                  },
            specialShopPerks: eh
                ? {
                      name: 'specialShopPerks',
                      title: L.intl.string(L.t.U68LpK),
                      subtitle: L.intl.string(L.t.chRZiY),
                      description: L.intl.string(L.t['t+QZSU']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: eo
                  }
                : {
                      name: 'specialShopPerks',
                      title: L.intl.string(L.t.U68LpK),
                      subtitle: L.intl.string(L.t.chRZiY),
                      description: L.intl.string(L.t['JE/EWV']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: eo
                  },
            unlimitedSuperReactions: eh
                ? {
                      name: 'unlimitedSuperReactions',
                      title: L.intl.string(L.t.hpgmOz),
                      subtitle: L.intl.string(L.t.Hxujsr),
                      description: L.intl.string(L.t['Cn/z6+']),
                      perkImage: em,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: L.intl.string(L.t.hpgmOz),
                      subtitle: L.intl.string(L.t.Hxujsr),
                      description: L.intl.string(L.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: em,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: L.intl.string(L.t['6S7kOz']),
                subtitle: L.intl.string(L.t.kN1JRE),
                description: L.intl.string(L.t.e7FKCg),
                perkImage: eg
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: L.intl.string(L.t.O5R3ho),
                pillText: L.intl.string(L.t.yhEY5O),
                backgroundImage: ei
            },
            badge: {
                name: 'badge',
                title: L.intl.string(L.t.dcFfSE),
                subtitle: L.intl.string(L.t['37MFFh']),
                perkImage: D,
                description: L.intl.string(L.t.T1IS4u),
                imageOverlayText: eR === M.a$.FP_ONLY ? L.intl.string(L.t.lcYttb) : void 0
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: L.intl.string(L.t.OuItFh),
                subtitle: L.intl.string(L.t.mPyrEx),
                perkImage: J,
                description: L.intl.string(L.t.e7FKCg),
                descriptionCta: L.intl.string(L.t.jVcuVV),
                onCtaClick: eO
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: L.intl.string(L.t['R2IV/f']),
                subtitle: L.intl.string(L.t.R5Xag4),
                perkImage: $,
                description: L.intl.string(L.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: L.intl.string(L.t.LWsAra),
                subtitle: L.intl.string(L.t.bTzbVl),
                perkImage: (0, Z.gx)(t, G, H),
                description: L.intl.string(L.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: L.intl.string(L.t.tzdIwM),
                subtitle: L.intl.string(L.t.FXlU29),
                perkImage: (0, Z.gx)(t, V, ed),
                description: L.intl.string(L.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: L.intl.formatToPlainString(L.t.jqhAdH, { premiumMaxSize: i }),
                subtitle: L.intl.formatToPlainString(L.t['HI+cfn'], { premiumMaxSize: i }),
                perkImage: ef,
                description: L.intl.string(L.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: L.intl.string(L.t.RSXQYG),
                subtitle: L.intl.string(L.t.ymCPxs),
                perkImage: eu,
                description: L.intl.string(L.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: L.intl.string(L.t.XQCSrq),
                subtitle: L.intl.string(L.t.HC5wVV),
                description: L.intl.string(L.t.ee7wQ0),
                descriptionCta: eh || eE ? L.intl.string(L.t.y9TxXV) : L.intl.string(L.t.d8o6lZ),
                isPremiumGetCta: !(eh || eE),
                onCtaClick: eh || eE ? eO : void 0,
                perkImage: en
            },
            referralProgram: {
                name: 'referralProgram',
                title: L.intl.string(L.t.tPY4o6),
                subtitle: L.intl.string(L.t.JY0grK),
                description: L.intl.format(L.t['2JqTFx'], { helpdeskArticle: C.Z.getArticleURL(w.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: L.intl.string(L.t.JST6jo),
                isPremiumGetCta: !eh || void 0,
                perkImage: ea
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: L.intl.string(L.t.I9TYMj),
                subtitle: L.intl.string(L.t.HMSHeH),
                descriptionCta: eh ? L.intl.string(L.t.jVcuVV) : L.intl.string(L.t.JST6jo),
                isPremiumGetCta: !eh,
                onCtaClick: eh ? ej : void 0,
                perkImage: el
            }
        };
    if (null != eS) {
        let { title: e, subtitle: t, description: n, pillText: i, ctaDescription: r, dismissibleContentType: s } = eS,
            l = (0, a.jsx)('div', {
                className: U.cardComponent,
                children: (0, a.jsx)(A.ZP, {
                    progressCircleVariation: A.Qo.AVATAR_DECO,
                    avatarDecoAssetId: B.VA,
                    avatarDecoAssetDescription: 'Gear Spin',
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
            cardVariant: P.zW.REWARD,
            pillText: i,
            dismissibleContentType: s
        };
    }
    if (null != eI) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: s, dismissibleContentType: l } = eI,
            c = (0, a.jsx)('div', {
                className: U.cardComponent,
                children: (0, a.jsx)(A.ZP, {
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
            perkComponent: c,
            descriptionCta: s,
            onCtaClick: () => {
                o.Z.open(w.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: P.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    let eB = (0, O.kG)(),
        { enabled: ew } = (0, N.Z)(),
        ey = () => {
            b.default.track(w.rMx.OPEN_MODAL, {
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
        null != eB &&
            ew &&
            (eM.tenureBadge = {
                name: 'tenureBadge',
                title: L.intl.string(L.t.rnsqpa),
                pillText: L.intl.string(L.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, a.jsx)(j.Z, {}),
                cardVariant: P.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => ey()
            }),
        (0, T.ZP)('usePerksDiscoverabilityCard') === T.P0.SUMMER_2024 &&
            (eM.shyProject = {
                name: 'shyProject',
                title: L.intl.string(L.t['0Mykgo']),
                subtitle: L.intl.string(L.t.opgqDQ),
                description: eh ? L.intl.string(L.t['t+QZSU']) : L.intl.string(L.t['JE/EWV']),
                descriptionCta: L.intl.string(L.t.dBJVnZ),
                pillText: L.intl.string(L.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: eh ? eZ : void 0,
                perkImage: Y,
                isPremiumGetCta: !eh
            }),
        eM
    );
};
