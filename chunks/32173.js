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
    T = n(74538),
    v = n(860489),
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
    B = n(981631),
    w = n(526761),
    y = n(332325),
    k = n(388032),
    L = n(921664),
    U = n(660372),
    D = n(926433),
    G = n(302036),
    H = n(994554),
    V = n(704565),
    F = n(393305),
    W = n(338879),
    z = n(609926),
    Y = n(203302),
    K = n(766491),
    Q = n(193943),
    J = n(707046),
    q = n(488459),
    X = n(334347),
    $ = n(132015),
    ee = n(142416),
    et = n(607762),
    en = n(474106),
    ei = n(567452),
    er = n(572501),
    ea = n(755590),
    es = n(909910),
    el = n(637810),
    eo = n(570423),
    ec = n(912429),
    ed = n(91394),
    eu = n(209672),
    eg = n(698173),
    em = n(926262);
((i = r || (r = {})).AVATAR_DECORATIONS = 'avatarDecorations'), (i.CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILE_EFFECTS = 'profileEffects'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.FREE_BOOST = 'freeBoost'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHY_PROJECT = 'shyProject'), (i.TENURE_BADGE = 'tenureBadge');
t.Z = () => {
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        i = (0, x.BU)(M.Uq / 1024, { useKibibytes: !0 }),
        r = (0, s.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        ef = null != r ? T.ZP.getPremiumPlanItem(r) : null,
        e_ = null != ef ? T.ZP.getSkuIdForPlan(ef.planId) : null,
        ep = e_ === M.Si.TIER_2,
        eh = e_ === M.Si.TIER_0,
        { flipped: eE } = (0, I.JP)(),
        { flipped: eb } = (0, I.as)(),
        ex = (0, S.nY)({ showAnimations: !0 }),
        eC = null != ex ? ex.initialPercentage : void 0,
        eT = null != ex ? ex.percentage : void 0,
        ev = (0, m.Z)(h.Z),
        eN = (0, R.ZP)(),
        eI = (0, R.aJ)(),
        { fractionalState: eS } = (0, g.Z)(),
        eR = eS === M.a$.FP_ONLY,
        eA = (0, f.Z)({
            scrollPosition: w.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        ej = () => {
            o.Z.open(B.oAB.VOICE, w.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eP = () => {
            (0, _.uL)(B.Z5c.COLLECTIBLES_SHOP);
        },
        eZ = () => {
            o.Z.open(B.oAB.APPEARANCE, null, { scrollPosition: w.h1.CUSTOM_APP_ICONS });
        },
        eO = {
            avatarDecorations: ep
                ? {
                      name: 'avatarDecorations',
                      title: k.intl.string(k.t['5YcGTk']),
                      subtitle: k.intl.string(k.t.QcJ6cX),
                      description: k.intl.string(k.t.MCvgWl),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eP,
                      pillText: k.intl.string(k.t.EYxi0t),
                      perkImage: Y,
                      canReveal: eE
                  }
                : {
                      name: 'avatarDecorations',
                      title: k.intl.string(k.t['5YcGTk']),
                      subtitle: k.intl.string(k.t['1QvWws']),
                      description: k.intl.string(k.t['2GPNr6']),
                      pillText: k.intl.string(k.t.EYxi0t),
                      perkImage: Y,
                      canReveal: eE
                  },
            clientThemes: {
                name: 'clientThemes',
                title: k.intl.string(k.t.kWM48P),
                subtitle: k.intl.string(k.t.CjRASE),
                description: k.intl.string(k.t.jBTTws),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                onCtaClick: () => {
                    o.Z.open(B.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: V
            },
            clips: ep
                ? {
                      name: 'clips',
                      title: k.intl.string(k.t.z2jK6e),
                      subtitle: k.intl.string(k.t['hxy0/f']),
                      description: k.intl.string(k.t.Z6v86e),
                      descriptionCta: ev ? k.intl.string(k.t.jVcuVV) : k.intl.string(k.t.hvVgAQ),
                      pillText: k.intl.string(k.t.EYxi0t),
                      onCtaClick: ev
                          ? () => {
                                (0, p.Z)(y.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(C.Z.getArticleURL(B.BhN.CLIPS), '_blank');
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
            earlyAccess: ep
                ? {
                      name: 'earlyAccess',
                      title: k.intl.string(k.t.UkLVeH),
                      subtitle: k.intl.string(k.t.xf9ePj),
                      description: k.intl.string(k.t['+r4vdn']),
                      perkImage: J
                  }
                : {
                      name: 'earlyAccess',
                      title: k.intl.string(k.t.UkLVeH),
                      subtitle: k.intl.string(k.t.xf9ePj),
                      description: k.intl.string(k.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: J
                  },
            earlyAccessSeeAllVariant: ep
                ? {
                      name: 'earlyAccessSeeAllVariant',
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
            entranceSounds: ep
                ? {
                      name: 'entranceSounds',
                      title: k.intl.string(k.t['f4M+Hx']),
                      subtitle: k.intl.string(k.t['7ZCYvL']),
                      description: k.intl.string(k.t.mUT8bG),
                      descriptionCta: k.intl.string(k.t.jVcuVV),
                      onCtaClick: ej,
                      perkImage: $
                  }
                : {
                      name: 'entranceSounds',
                      title: k.intl.string(k.t['f4M+Hx']),
                      subtitle: k.intl.string(k.t['7ZCYvL']),
                      description: k.intl.string(k.t['3smf/f']),
                      perkImage: $
                  },
            entranceSoundsSeeAllVariation: ep
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: k.intl.string(k.t['f4M+Hx']),
                      subtitle: k.intl.string(k.t['7ZCYvL']),
                      description: k.intl.string(k.t.mUT8bG),
                      descriptionCta: k.intl.string(k.t.jVcuVV),
                      onCtaClick: ej,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: k.intl.string(k.t['f4M+Hx']),
                      subtitle: k.intl.string(k.t['7ZCYvL']),
                      description: k.intl.string(k.t['3smf/f']),
                      perkImage: ee
                  },
            profileEffects: ep
                ? {
                      name: 'profileEffects',
                      title: k.intl.string(k.t.c7OKaG),
                      subtitle: k.intl.string(k.t.eVvkDw),
                      description: k.intl.string(k.t['0mUM/P']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eP,
                      pillText: k.intl.string(k.t.EYxi0t),
                      perkImage: ei,
                      canReveal: eb
                  }
                : {
                      name: 'profileEffects',
                      title: k.intl.string(k.t.c7OKaG),
                      subtitle: k.intl.string(k.t.eVvkDw),
                      description: k.intl.string(k.t.XNKnvr),
                      pillText: k.intl.string(k.t.EYxi0t),
                      perkImage: ei,
                      canReveal: eb
                  },
            profiles: {
                name: 'profiles',
                title: k.intl.string(k.t.KcyDwM),
                subtitle: k.intl.string(k.t.Mt3U1d),
                description: k.intl.string(k.t.kWcDKy),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                onCtaClick: eA,
                perkImage: F
            },
            remixing: ep
                ? {
                      name: 'remixing',
                      title: k.intl.string(k.t['H+v6eX']),
                      subtitle: k.intl.string(k.t.wmbOAg),
                      description: k.intl.string(k.t.gdA9FB),
                      perkImage: ea,
                      pillText: k.intl.string(k.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: k.intl.string(k.t['H+v6eX']),
                      subtitle: k.intl.string(k.t.wmbOAg),
                      description: k.intl.string(k.t.fiLtJi),
                      perkImage: ea,
                      pillText: k.intl.string(k.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: k.intl.string(k.t['NyDu//']),
                subtitle: k.intl.string(k.t['4pEwXF']),
                description: eR ? k.intl.format(k.t.uPiIBQ, { link: 'https://discord.com' }) : k.intl.string(k.t.jsyNHh),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                onCtaClick: eR
                    ? void 0
                    : () => {
                          o.Z.open(B.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: W,
                hideOnNarrowScreen: !eR,
                imageOverlayText: eR ? k.intl.string(k.t.lcYttb) : void 0
            },
            specialMemberPricing: ep
                ? {
                      name: 'specialMemberPricing',
                      title: k.intl.string(k.t['0Mykgo']),
                      subtitle: k.intl.string(k.t.opgqDQ),
                      description: k.intl.string(k.t['t+QZSU']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: el
                  }
                : {
                      name: 'specialMemberPricing',
                      title: k.intl.string(k.t['0Mykgo']),
                      subtitle: k.intl.string(k.t.opgqDQ),
                      description: k.intl.string(k.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: el
                  },
            specialMemberPricingSeeAllVariant: ep
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: k.intl.string(k.t['0Mykgo']),
                      subtitle: k.intl.string(k.t.opgqDQ),
                      description: k.intl.string(k.t['t+QZSU']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: eo
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: k.intl.string(k.t['0Mykgo']),
                      subtitle: k.intl.string(k.t.opgqDQ),
                      description: k.intl.string(k.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eo
                  },
            specialShopPerks: ep
                ? {
                      name: 'specialShopPerks',
                      title: k.intl.string(k.t.U68LpK),
                      subtitle: k.intl.string(k.t.chRZiY),
                      description: k.intl.string(k.t['t+QZSU']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: el
                  }
                : {
                      name: 'specialShopPerks',
                      title: k.intl.string(k.t.U68LpK),
                      subtitle: k.intl.string(k.t.chRZiY),
                      description: k.intl.string(k.t['JE/EWV']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: el
                  },
            unlimitedSuperReactions: ep
                ? {
                      name: 'unlimitedSuperReactions',
                      title: k.intl.string(k.t.hpgmOz),
                      subtitle: k.intl.string(k.t.Hxujsr),
                      description: k.intl.string(k.t['Cn/z6+']),
                      perkImage: eg,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: k.intl.string(k.t.hpgmOz),
                      subtitle: k.intl.string(k.t.Hxujsr),
                      description: k.intl.string(k.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: eg,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: k.intl.string(k.t['6S7kOz']),
                subtitle: k.intl.string(k.t.kN1JRE),
                description: k.intl.string(k.t.e7FKCg),
                perkImage: eu
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: k.intl.string(k.t.O5R3ho),
                pillText: k.intl.string(k.t.yhEY5O),
                backgroundImage: en
            },
            badge: {
                name: 'badge',
                title: k.intl.string(k.t.dcFfSE),
                subtitle: k.intl.string(k.t['37MFFh']),
                perkImage: U,
                description: k.intl.string(k.t.T1IS4u),
                imageOverlayText: eS === M.a$.FP_ONLY ? k.intl.string(k.t.lcYttb) : void 0
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: k.intl.string(k.t.OuItFh),
                subtitle: k.intl.string(k.t.mPyrEx),
                perkImage: Q,
                description: k.intl.string(k.t.e7FKCg),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                onCtaClick: eZ
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: k.intl.string(k.t['R2IV/f']),
                subtitle: k.intl.string(k.t.R5Xag4),
                perkImage: X,
                description: k.intl.string(k.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: k.intl.string(k.t.LWsAra),
                subtitle: k.intl.string(k.t.bTzbVl),
                perkImage: (0, Z.gx)(t, D, G),
                description: k.intl.string(k.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: k.intl.string(k.t.tzdIwM),
                subtitle: k.intl.string(k.t.FXlU29),
                perkImage: (0, Z.gx)(t, H, ec),
                description: k.intl.string(k.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: k.intl.formatToPlainString(k.t.jqhAdH, { premiumMaxSize: i }),
                subtitle: k.intl.formatToPlainString(k.t['HI+cfn'], { premiumMaxSize: i }),
                perkImage: em,
                description: k.intl.string(k.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: k.intl.string(k.t.RSXQYG),
                subtitle: k.intl.string(k.t.ymCPxs),
                perkImage: ed,
                description: k.intl.string(k.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: k.intl.string(k.t.XQCSrq),
                subtitle: k.intl.string(k.t.HC5wVV),
                description: k.intl.string(k.t.ee7wQ0),
                descriptionCta: ep || eh ? k.intl.string(k.t.y9TxXV) : k.intl.string(k.t.d8o6lZ),
                isPremiumGetCta: !(ep || eh),
                onCtaClick: ep || eh ? eZ : void 0,
                perkImage: et
            },
            referralProgram: {
                name: 'referralProgram',
                title: k.intl.string(k.t.tPY4o6),
                subtitle: k.intl.string(k.t.JY0grK),
                description: k.intl.format(k.t['2JqTFx'], { helpdeskArticle: C.Z.getArticleURL(B.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: k.intl.string(k.t.JST6jo),
                isPremiumGetCta: !ep || void 0,
                perkImage: er
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: k.intl.string(k.t.I9TYMj),
                subtitle: k.intl.string(k.t.HMSHeH),
                descriptionCta: ep ? k.intl.string(k.t.jVcuVV) : k.intl.string(k.t.JST6jo),
                isPremiumGetCta: !ep,
                onCtaClick: ep ? eA : void 0,
                perkImage: es
            }
        };
    if (null != eI) {
        let { title: e, subtitle: t, description: n, pillText: i, ctaDescription: r, dismissibleContentType: s } = eI,
            l = (0, a.jsx)('div', {
                className: L.cardComponent,
                children: (0, a.jsx)(A.Z, {
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: eC
                })
            });
        eO.tenureRewardCollectible = {
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
    if (null != eN) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: s, dismissibleContentType: l } = eN,
            c = (0, a.jsx)('div', {
                className: L.cardComponent,
                children: (0, a.jsx)(A.Z, {
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: eC
                })
            });
        eO.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: c,
            descriptionCta: s,
            onCtaClick: () => {
                o.Z.open(B.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: P.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    let eM = (0, O.kG)(),
        { enabled: eB } = (0, N.Z)(),
        ew = () => {
            b.default.track(B.rMx.OPEN_MODAL, {
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
        null != eM &&
            eB &&
            (eO.tenureBadge = {
                name: 'tenureBadge',
                title: k.intl.string(k.t.rnsqpa),
                pillText: k.intl.string(k.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, a.jsx)(j.Z, {}),
                cardVariant: P.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => ew()
            }),
        (0, v.ZP)('usePerksDiscoverabilityCard') === v.P0.SUMMER_2024 &&
            (eO.shyProject = {
                name: 'shyProject',
                title: k.intl.string(k.t['0Mykgo']),
                subtitle: k.intl.string(k.t.opgqDQ),
                description: ep ? k.intl.string(k.t['t+QZSU']) : k.intl.string(k.t['JE/EWV']),
                descriptionCta: k.intl.string(k.t.dBJVnZ),
                pillText: k.intl.string(k.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: ep ? eP : void 0,
                perkImage: z,
                isPremiumGetCta: !ep
            }),
        eO
    );
};
