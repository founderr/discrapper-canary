n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(622535),
    c = n(780384),
    d = n(481060),
    u = n(634894),
    m = n(410030),
    g = n(607070),
    f = n(100527),
    p = n(906732),
    _ = n(70097),
    h = n(464824),
    E = n(214852),
    b = n(78839),
    x = n(626135),
    C = n(526167),
    T = n(74538),
    v = n(140465),
    N = n(278605),
    I = n(286961),
    S = n(91802),
    R = n(104494),
    A = n(639119),
    j = n(906461),
    P = n(8647),
    Z = n(568126),
    M = n(605289),
    B = n(346497),
    O = n(218390),
    w = n(823188),
    k = n(241158),
    y = n(135785),
    L = n(498765),
    U = n(635921),
    D = n(177839),
    H = n(794484),
    G = n(392521),
    V = n(349803),
    F = n(179984),
    W = n(706542),
    z = n(851001),
    Y = n(304576),
    K = n(409100),
    Q = n(391110),
    q = n(71363),
    J = n(781800),
    X = n(474936),
    $ = n(981631),
    ee = n(869783),
    et = n(388032),
    en = n(286919),
    ei = n(499317),
    er = n(865215),
    ea = n(735035),
    es = n(786362),
    el = n(181960),
    eo = n(313199),
    ec = n(821969);
let ed = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === X.p9.TIER_2 && t) ? null : (0, i.jsx)(D.Z, { className: t ? en.perkCardsContainerSpacingFullscreen : en.perkCardsContainerSpacingSettings });
    },
    eu = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(L.Z, { lifted: !t && n }) : null;
    },
    em = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: a, isMarketingPageV2Enabled: l, isReducedMotion: o } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: s()(en.whatsNewSectionBackground, { [en.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, i.jsx)(H.Z, {
                              variant: Q.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l &&
                          (0, i.jsx)(k.Z, {
                              shouldLoadVideo: a,
                              isReducedMotion: o
                          }),
                      l &&
                          (0, i.jsx)(k.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: a,
                              isReducedMotion: o
                          }),
                      !l &&
                          (0, i.jsx)(H.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(J.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: Q.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(G.ZP, {
                              className: en.pdSparklesTop,
                              variant: G.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(G.ZP, {
                              className: en.pdSparklesBottom,
                              variant: G.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t, n;
    let { isFullscreen: a, entrypoint: k } = e;
    (0, E.z)(h.X);
    let L = k === X.EZ.ApplicationStoreHome,
        D = r.useRef(null),
        H = r.useRef(null),
        G = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
        J = (0, m.ZP)(),
        eg = (0, c.wj)(J),
        ef = (0, N.xP)('PremiumMarketingHome', L) && L,
        [ep, e_] = r.useState(!1),
        [eh, eE] = r.useState(!1),
        [eb, ex] = r.useState(!1),
        [eC, eT] = r.useState(!1),
        ev = (0, C.rO)(),
        [eN, eI] = r.useState(!1),
        eS = (0, l.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        eR = null != eS ? (0, T.Af)(eS) : null,
        eA = null != eR ? T.ZP.getSkuIdForPlan(eR.planId) : null,
        ej = null !== eA && eA !== X.Si.TIER_2 ? X.Si.TIER_2 : null,
        eP = (0, S.n)(),
        eZ = null != eP,
        [eM, eB] = r.useState(!1),
        eO = (0, R.Ng)(),
        ew = (0, A.N)(),
        ek = null == ew ? void 0 : null === (t = ew.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        ey = (0, v.Nx)(),
        eL = (0, B.Vi)(),
        eU = null === (n = (0, I.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
        { analyticsLocations: eD } = (0, p.ZP)(f.Z.PREMIUM_MARKETING),
        eH = 'PremiumMarketingHome';
    (0, u.j)({
        location: eH + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eH + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            eI(!0);
        }, []);
    let eG = (0, i.jsx)('div', {
            className: s()({
                [en.premiumTierCardsContainerSettings]: !a,
                [en.premiumTierCardsContainerFullscreen]: a
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => ex(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(w.ZP, {
                    variant: ef ? w.NN.MARKETING_PAGE_V2 : w.NN.DEFAULT,
                    showWumpus: !ef,
                    tier0CTAButton:
                        (ek === X.Si.TIER_2 || eL || null != eO) && !ef
                            ? (0, i.jsx)(K.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_0,
                                  className: en.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: en.buttonShine
                              })
                            : (0, i.jsx)(K.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_0,
                                  className: en.marginTopForButtons,
                                  buttonShineClassName: en.buttonShine
                              }),
                    tier2CTAButton:
                        ek !== X.Si.TIER_0 || ef
                            ? (0, i.jsx)(K.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_2,
                                  className: en.marginTopForButtons,
                                  isEligibleForBogoPromotion: eL,
                                  buttonShineClassName: en.buttonShine
                              })
                            : (0, i.jsx)(K.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_2,
                                  className: en.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: en.buttonShine
                              })
                })
            })
        }),
        eV = (0, i.jsxs)('div', {
            className: s()(en.container, {
                [en.settingsContainer]: !a,
                [en.containerBackground]: ef && eg
            }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                ef && (0, i.jsx)('div', { className: en.heroHeaderSideGradient }),
                ef &&
                    (0, i.jsx)('img', {
                        src: ei,
                        className: en.heroHeaderBackgroundStars,
                        alt: ''
                    }),
                (0, i.jsx)(y.Z, {
                    premiumSubscription: eS,
                    className: s()(a ? en.fullscreenExistingSubscriberSpacing : en.existingSubscriberSpacing, { [en.zIndex1]: ey }),
                    isFullscreen: a
                }),
                !ef &&
                    (0, i.jsx)(eu, {
                        isFullscreen: a,
                        inOfferExperience: ey
                    }),
                !a && eZ
                    ? (0, i.jsx)(M.Z, {
                          localizedPricingPromo: eP,
                          smallGap: !0
                      })
                    : (0, i.jsxs)('div', {
                          className: s()({ [en.heroHeadingV2Container]: ef }),
                          children: [
                              (0, i.jsx)(o.$, {
                                  onChange: (e) => e_(e),
                                  threshold: 0,
                                  active: !0,
                                  children: ef
                                      ? (0, i.jsx)(Y.Z, {
                                            subscriptionTier: ej,
                                            isFullscreen: a || ey,
                                            entrypoint: k,
                                            isDarkMode: eg
                                        })
                                      : (0, i.jsx)(U.ZP, {
                                            subscriptionTier: ej,
                                            isFullscreen: a || ey,
                                            isMarketingPageV2Enabled: ef,
                                            className: s()({
                                                [en.fullscreenHero]: a,
                                                [en.settingsHeroNoBackground]: !a && ey,
                                                [en.trialMarketingMargin]: ey,
                                                [en.settingsHeroBogoHeight]: !a && eL,
                                                [en.settingsHeroBogoMarginFullscreen]: a && eL,
                                                [en.noTopPaddingOverride]: null != eS
                                            }),
                                            entrypoint: k,
                                            isDarkMode: eg
                                        })
                              }),
                              ef &&
                                  (0, i.jsx)('div', {
                                      className: en.heroHeadingV2ArtContainer,
                                      children: (0, i.jsx)(_.Z, {
                                          autoPlay: !G,
                                          playsInline: !0,
                                          preload: 'auto',
                                          poster: eo.Z,
                                          loop: !0,
                                          className: s()(en.heroHeadingV2Art),
                                          ref: H,
                                          children: (0, i.jsx)('source', {
                                              src: ev ? el.Z : ec.Z,
                                              type: ev ? ee.m.MP4 : ee.m.WEBM
                                          })
                                      })
                                  })
                          ]
                      }),
                (0, i.jsxs)('div', {
                    className: en.promoBannerContainer,
                    children: [(0, i.jsx)(P.Z, { isFullScreen: a }), (0, i.jsx)(j.Z, { isFullScreen: a }), a && eZ && (0, i.jsx)(Z.Z, { localizedPricingPromo: eP })]
                }),
                !ef && eG,
                k === X.EZ.UserSettings &&
                    null != eU &&
                    (0, i.jsx)(O.C, {
                        className: en.giftPromoCard,
                        config: eU
                    }),
                (0, i.jsx)(em, {
                    isFullscreen: a,
                    inOfferExperience: ey,
                    setIsAllPerksVisible: eB,
                    hasRenderedOnce: eN,
                    isMarketingPageV2Enabled: ef,
                    isReducedMotion: G
                }),
                !ef && (0, i.jsx)(ed, { isFullscreen: a }),
                ef && eG,
                (0, i.jsxs)('div', {
                    className: en.planComparisonTableContainer,
                    children: [
                        ef
                            ? (0, i.jsx)(W.Z, { className: en.planComparisonTableV2 })
                            : (0, i.jsx)(F.Z, {
                                  className: en.planComparisonTable,
                                  hideCTAs: !0
                              }),
                        a && !ef
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('img', {
                                          src: ea,
                                          className: en.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: et.intl.string(et.t.X4IxWF)
                                      }),
                                      (0, i.jsx)('img', {
                                          src: es,
                                          className: en.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: et.intl.string(et.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                !ef && (0, i.jsx)('div', { className: a ? en.footerSpacingFullscreen : en.footerSpacing }),
                (0, i.jsx)(V.Z, {
                    isVisible: !ep && !eb && !eh && eN,
                    isFullscreen: a,
                    subscriptionTier: ej,
                    isMarketingPageV2: ef
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !eC && (x.default.track($.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eD }), eT(!0));
                    },
                    children: (0, i.jsx)('div', { className: en.bottomOfPageVisibilitySensor })
                }),
                !ef &&
                    (0, i.jsx)('img', {
                        src: er,
                        className: en.bottomIllustration,
                        width: 112,
                        height: 85,
                        alt: et.intl.string(et.t.X4IxWF)
                    }),
                ef &&
                    (0, i.jsx)(o.$, {
                        onChange: (e) => {
                            eE(e);
                        },
                        children: (0, i.jsx)(z.Z, {
                            isFooterVisible: eh,
                            isDarkMode: eg,
                            isReducedMotion: G
                        })
                    })
            ]
        });
    return a
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.AdvancedScrollerAuto, {
                      className: s()(en.scroller),
                      ref: D,
                      children: eV
                  }),
                  (0, i.jsx)(q.Z, {
                      previousComponent: Q.MQ.MARKETING,
                      isAllPerksVisible: eM,
                      setIsAllPerksVisible: eB,
                      isFullScreen: a
                  })
              ]
          })
        : eV;
};
