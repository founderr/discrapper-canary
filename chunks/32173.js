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
    p = n(703656),
    _ = n(547972),
    h = n(131951),
    E = n(78839),
    x = n(626135),
    b = n(424218),
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
    O = n(75077),
    Z = n(976465),
    M = n(474936),
    B = n(981631),
    w = n(526761),
    y = n(332325),
    L = n(388032),
    k = n(921664),
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
        i = (0, b.BU)(M.Uq / 1024, { useKibibytes: !0 }),
        r = (0, s.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        ef = null != r ? v.ZP.getPremiumPlanItem(r) : null,
        ep = null != ef ? v.ZP.getSkuIdForPlan(ef.planId) : null,
        e_ = ep === M.Si.TIER_2,
        eh = ep === M.Si.TIER_0,
        { flipped: eE } = (0, I.JP)(),
        { flipped: ex } = (0, I.as)(),
        eb = (0, S.nY)({ showAnimations: !0 }),
        eC = null != eb ? eb.initialPercentage : void 0,
        ev = null != eb ? eb.percentage : void 0,
        eT = (0, m.Z)(h.Z),
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
            (0, p.uL)(B.Z5c.COLLECTIBLES_SHOP);
        },
        eO = () => {
            o.Z.open(B.oAB.APPEARANCE, null, { scrollPosition: w.h1.CUSTOM_APP_ICONS });
        },
        eZ = {
            avatarDecorations: e_
                ? {
                      name: 'avatarDecorations',
                      title: L.intl.string(L.t['5YcGTk']),
                      subtitle: L.intl.string(L.t.QcJ6cX),
                      description: L.intl.string(L.t.MCvgWl),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eP,
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: Y,
                      canReveal: eE
                  }
                : {
                      name: 'avatarDecorations',
                      title: L.intl.string(L.t['5YcGTk']),
                      subtitle: L.intl.string(L.t['1QvWws']),
                      description: L.intl.string(L.t['2GPNr6']),
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: Y,
                      canReveal: eE
                  },
            clientThemes: {
                name: 'clientThemes',
                title: L.intl.string(L.t.kWM48P),
                subtitle: L.intl.string(L.t.CjRASE),
                description: L.intl.string(L.t.jBTTws),
                descriptionCta: L.intl.string(L.t.jVcuVV),
                onCtaClick: () => {
                    o.Z.open(B.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: V
            },
            clips: e_
                ? {
                      name: 'clips',
                      title: L.intl.string(L.t.z2jK6e),
                      subtitle: L.intl.string(L.t['hxy0/f']),
                      description: L.intl.string(L.t.Z6v86e),
                      descriptionCta: eT ? L.intl.string(L.t.jVcuVV) : L.intl.string(L.t.hvVgAQ),
                      pillText: L.intl.string(L.t.EYxi0t),
                      onCtaClick: eT
                          ? () => {
                                (0, _.Z)(y.Z.CLIPS, {
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
                      title: L.intl.string(L.t.z2jK6e),
                      subtitle: L.intl.string(L.t['hxy0/f']),
                      description: L.intl.string(L.t.X9IeNz),
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: K
                  },
            earlyAccess: e_
                ? {
                      name: 'earlyAccess',
                      title: L.intl.string(L.t.UkLVeH),
                      subtitle: L.intl.string(L.t.xf9ePj),
                      description: L.intl.string(L.t['+r4vdn']),
                      perkImage: J
                  }
                : {
                      name: 'earlyAccess',
                      title: L.intl.string(L.t.UkLVeH),
                      subtitle: L.intl.string(L.t.xf9ePj),
                      description: L.intl.string(L.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: J
                  },
            earlyAccessSeeAllVariant: e_
                ? {
                      name: 'earlyAccessSeeAllVariant',
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
            entranceSounds: e_
                ? {
                      name: 'entranceSounds',
                      title: L.intl.string(L.t['f4M+Hx']),
                      subtitle: L.intl.string(L.t['7ZCYvL']),
                      description: L.intl.string(L.t.mUT8bG),
                      descriptionCta: L.intl.string(L.t.jVcuVV),
                      onCtaClick: ej,
                      perkImage: $
                  }
                : {
                      name: 'entranceSounds',
                      title: L.intl.string(L.t['f4M+Hx']),
                      subtitle: L.intl.string(L.t['7ZCYvL']),
                      description: L.intl.string(L.t['3smf/f']),
                      perkImage: $
                  },
            entranceSoundsSeeAllVariation: e_
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: L.intl.string(L.t['f4M+Hx']),
                      subtitle: L.intl.string(L.t['7ZCYvL']),
                      description: L.intl.string(L.t.mUT8bG),
                      descriptionCta: L.intl.string(L.t.jVcuVV),
                      onCtaClick: ej,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: L.intl.string(L.t['f4M+Hx']),
                      subtitle: L.intl.string(L.t['7ZCYvL']),
                      description: L.intl.string(L.t['3smf/f']),
                      perkImage: ee
                  },
            profileEffects: e_
                ? {
                      name: 'profileEffects',
                      title: L.intl.string(L.t.c7OKaG),
                      subtitle: L.intl.string(L.t.eVvkDw),
                      description: L.intl.string(L.t['0mUM/P']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eP,
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: ei,
                      canReveal: ex
                  }
                : {
                      name: 'profileEffects',
                      title: L.intl.string(L.t.c7OKaG),
                      subtitle: L.intl.string(L.t.eVvkDw),
                      description: L.intl.string(L.t.XNKnvr),
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: ei,
                      canReveal: ex
                  },
            profiles: {
                name: 'profiles',
                title: L.intl.string(L.t.KcyDwM),
                subtitle: L.intl.string(L.t.Mt3U1d),
                description: L.intl.string(L.t.kWcDKy),
                descriptionCta: L.intl.string(L.t.jVcuVV),
                onCtaClick: eA,
                perkImage: F
            },
            remixing: e_
                ? {
                      name: 'remixing',
                      title: L.intl.string(L.t['H+v6eX']),
                      subtitle: L.intl.string(L.t.wmbOAg),
                      description: L.intl.string(L.t.gdA9FB),
                      perkImage: ea,
                      pillText: L.intl.string(L.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: L.intl.string(L.t['H+v6eX']),
                      subtitle: L.intl.string(L.t.wmbOAg),
                      description: L.intl.string(L.t.fiLtJi),
                      perkImage: ea,
                      pillText: L.intl.string(L.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: L.intl.string(L.t['NyDu//']),
                subtitle: L.intl.string(L.t['4pEwXF']),
                description: eR ? L.intl.format(L.t.uPiIBQ, { link: 'https://discord.com' }) : L.intl.string(L.t.jsyNHh),
                descriptionCta: L.intl.string(L.t.jVcuVV),
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
                imageOverlayText: eR ? L.intl.string(L.t.lcYttb) : void 0
            },
            specialMemberPricing: e_
                ? {
                      name: 'specialMemberPricing',
                      title: L.intl.string(L.t['0Mykgo']),
                      subtitle: L.intl.string(L.t.opgqDQ),
                      description: L.intl.string(L.t['t+QZSU']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: el
                  }
                : {
                      name: 'specialMemberPricing',
                      title: L.intl.string(L.t['0Mykgo']),
                      subtitle: L.intl.string(L.t.opgqDQ),
                      description: L.intl.string(L.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: el
                  },
            specialMemberPricingSeeAllVariant: e_
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: L.intl.string(L.t['0Mykgo']),
                      subtitle: L.intl.string(L.t.opgqDQ),
                      description: L.intl.string(L.t['t+QZSU']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: eo
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: L.intl.string(L.t['0Mykgo']),
                      subtitle: L.intl.string(L.t.opgqDQ),
                      description: L.intl.string(L.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eo
                  },
            specialShopPerks: e_
                ? {
                      name: 'specialShopPerks',
                      title: L.intl.string(L.t.U68LpK),
                      subtitle: L.intl.string(L.t.chRZiY),
                      description: L.intl.string(L.t['t+QZSU']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: el
                  }
                : {
                      name: 'specialShopPerks',
                      title: L.intl.string(L.t.U68LpK),
                      subtitle: L.intl.string(L.t.chRZiY),
                      description: L.intl.string(L.t['JE/EWV']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: el
                  },
            unlimitedSuperReactions: e_
                ? {
                      name: 'unlimitedSuperReactions',
                      title: L.intl.string(L.t.hpgmOz),
                      subtitle: L.intl.string(L.t.Hxujsr),
                      description: L.intl.string(L.t['Cn/z6+']),
                      perkImage: eg,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: L.intl.string(L.t.hpgmOz),
                      subtitle: L.intl.string(L.t.Hxujsr),
                      description: L.intl.string(L.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: eg,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: L.intl.string(L.t['6S7kOz']),
                subtitle: L.intl.string(L.t.kN1JRE),
                description: L.intl.string(L.t.e7FKCg),
                perkImage: eu
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: L.intl.string(L.t.O5R3ho),
                pillText: L.intl.string(L.t.yhEY5O),
                backgroundImage: en
            },
            badge: {
                name: 'badge',
                title: L.intl.string(L.t.dcFfSE),
                subtitle: L.intl.string(L.t['37MFFh']),
                perkImage: U,
                description: L.intl.string(L.t.T1IS4u),
                imageOverlayText: eS === M.a$.FP_ONLY ? L.intl.string(L.t.lcYttb) : void 0
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: L.intl.string(L.t.OuItFh),
                subtitle: L.intl.string(L.t.mPyrEx),
                perkImage: Q,
                description: L.intl.string(L.t.e7FKCg),
                descriptionCta: L.intl.string(L.t.jVcuVV),
                onCtaClick: eO
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: L.intl.string(L.t['R2IV/f']),
                subtitle: L.intl.string(L.t.R5Xag4),
                perkImage: X,
                description: L.intl.string(L.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: L.intl.string(L.t.LWsAra),
                subtitle: L.intl.string(L.t.bTzbVl),
                perkImage: (0, O.gx)(t, D, G),
                description: L.intl.string(L.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: L.intl.string(L.t.tzdIwM),
                subtitle: L.intl.string(L.t.FXlU29),
                perkImage: (0, O.gx)(t, H, ec),
                description: L.intl.string(L.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: L.intl.formatToPlainString(L.t.jqhAdH, { premiumMaxSize: i }),
                subtitle: L.intl.formatToPlainString(L.t['HI+cfn'], { premiumMaxSize: i }),
                perkImage: em,
                description: L.intl.string(L.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: L.intl.string(L.t.RSXQYG),
                subtitle: L.intl.string(L.t.ymCPxs),
                perkImage: ed,
                description: L.intl.string(L.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: L.intl.string(L.t.XQCSrq),
                subtitle: L.intl.string(L.t.HC5wVV),
                description: L.intl.string(L.t.ee7wQ0),
                descriptionCta: e_ || eh ? L.intl.string(L.t.y9TxXV) : L.intl.string(L.t.d8o6lZ),
                isPremiumGetCta: !(e_ || eh),
                onCtaClick: e_ || eh ? eO : void 0,
                perkImage: et
            },
            referralProgram: {
                name: 'referralProgram',
                title: L.intl.string(L.t.tPY4o6),
                subtitle: L.intl.string(L.t.JY0grK),
                description: L.intl.format(L.t['2JqTFx'], { helpdeskArticle: C.Z.getArticleURL(B.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: L.intl.string(L.t.JST6jo),
                isPremiumGetCta: !e_ || void 0,
                perkImage: er
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: L.intl.string(L.t.I9TYMj),
                subtitle: L.intl.string(L.t.HMSHeH),
                descriptionCta: e_ ? L.intl.string(L.t.jVcuVV) : L.intl.string(L.t.JST6jo),
                isPremiumGetCta: !e_,
                onCtaClick: e_ ? eA : void 0,
                perkImage: es
            }
        };
    if (null != eI) {
        let { title: e, subtitle: t, description: n, pillText: i, ctaDescription: r, dismissibleContentType: s } = eI,
            l = (0, a.jsx)('div', {
                className: k.cardComponent,
                children: (0, a.jsx)(A.Z, {
                    showAnimations: !0,
                    percentage: ev,
                    initialPercentage: eC
                })
            });
        eZ.tenureRewardCollectible = {
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
                className: k.cardComponent,
                children: (0, a.jsx)(A.Z, {
                    showAnimations: !0,
                    percentage: ev,
                    initialPercentage: eC
                })
            });
        eZ.freeBoost = {
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
    let eM = (0, Z.kG)(),
        { enabled: eB } = (0, N.Z)(),
        ew = () => {
            x.default.track(B.rMx.OPEN_MODAL, {
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
            (eZ.tenureBadge = {
                name: 'tenureBadge',
                title: L.intl.string(L.t.rnsqpa),
                pillText: L.intl.string(L.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, a.jsx)(j.Z, {}),
                cardVariant: P.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => ew()
            }),
        (0, T.ZP)('usePerksDiscoverabilityCard') === T.P0.SUMMER_2024 &&
            (eZ.shyProject = {
                name: 'shyProject',
                title: L.intl.string(L.t['0Mykgo']),
                subtitle: L.intl.string(L.t.opgqDQ),
                description: e_ ? L.intl.string(L.t['t+QZSU']) : L.intl.string(L.t['JE/EWV']),
                descriptionCta: L.intl.string(L.t.dBJVnZ),
                pillText: L.intl.string(L.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: e_ ? eP : void 0,
                perkImage: z,
                isPremiumGetCta: !e_
            }),
        eZ
    );
};
