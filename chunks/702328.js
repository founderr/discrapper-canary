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
    g = n(410030),
    m = n(607070),
    f = n(100527),
    p = n(906732),
    _ = n(70097),
    h = n(464824),
    E = n(214852),
    b = n(78839),
    x = n(626135),
    C = n(526167),
    v = n(74538),
    T = n(140465),
    N = n(278605),
    I = n(286961),
    S = n(91802),
    R = n(104494),
    A = n(639119),
    j = n(906461),
    P = n(8647),
    Z = n(568126),
    B = n(605289),
    M = n(346497),
    O = n(218390),
    w = n(823188),
    y = n(241158),
    k = n(135785),
    L = n(498765),
    U = n(635921),
    D = n(177839),
    G = n(794484),
    H = n(392521),
    V = n(349803),
    F = n(179984),
    W = n(851001),
    z = n(304576),
    Y = n(409100),
    K = n(391110),
    Q = n(71363),
    q = n(781800),
    J = n(474936),
    X = n(981631),
    $ = n(869783),
    ee = n(388032),
    et = n(286919),
    en = n(499317),
    ei = n(865215),
    er = n(735035),
    ea = n(786362),
    es = n(181960),
    el = n(313199),
    eo = n(821969);
let ec = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === J.p9.TIER_2 && t) ? null : (0, i.jsx)(D.Z, { className: t ? et.perkCardsContainerSpacingFullscreen : et.perkCardsContainerSpacingSettings });
    },
    ed = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(L.Z, { lifted: !t && n }) : null;
    },
    eu = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: a, isMarketingPageV2Enabled: l } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: s()(et.whatsNewSectionBackground, { [et.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, i.jsx)(G.Z, {
                              variant: K.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l && (0, i.jsx)(y.Z, { shouldLoadVideo: a }),
                      l &&
                          (0, i.jsx)(y.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: a
                          }),
                      !l &&
                          (0, i.jsx)(G.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(q.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: K.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(H.ZP, {
                              className: et.pdSparklesTop,
                              variant: H.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(H.ZP, {
                              className: et.pdSparklesBottom,
                              variant: H.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t, n;
    let { isFullscreen: a, entrypoint: y } = e;
    (0, E.z)(h.X);
    let L = r.useRef(null),
        D = r.useRef(null),
        G = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        H = (0, g.ZP)(),
        q = (0, c.wj)(H),
        eg = (0, N.xP)('PremiumMarketingHome', !0),
        [em, ef] = r.useState(!1),
        [ep, e_] = r.useState(!1),
        [eh, eE] = r.useState(!1),
        [eb, ex] = r.useState(!1),
        eC = (0, C.rO)(),
        [ev, eT] = r.useState(!1),
        eN = (0, l.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        eI = null != eN ? (0, v.Af)(eN) : null,
        eS = null != eI ? v.ZP.getSkuIdForPlan(eI.planId) : null,
        eR = null !== eS && eS !== J.Si.TIER_2 ? J.Si.TIER_2 : null,
        eA = (0, S.n)(),
        ej = null != eA,
        [eP, eZ] = r.useState(!1),
        eB = (0, R.Ng)(),
        eM = (0, A.N)(),
        eO = null == eM ? void 0 : null === (t = eM.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        ew = (0, T.Nx)(),
        ey = (0, M.Vi)(),
        ek = null === (n = (0, I.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
        { analyticsLocations: eL } = (0, p.ZP)(f.Z.PREMIUM_MARKETING),
        eU = 'PremiumMarketingHome';
    (0, u.j)({
        location: eU + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eU + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            eT(!0);
        }, []);
    let eD = (0, i.jsx)('div', {
            className: s()({
                [et.premiumTierCardsContainerSettings]: !a,
                [et.premiumTierCardsContainerFullscreen]: a
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => eE(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(w.ZP, {
                    variant: eg ? w.NN.MARKETING_PAGE_V2 : w.NN.DEFAULT,
                    showWumpus: !eg,
                    tier0CTAButton:
                        (eO === J.Si.TIER_2 || ey || null != eB) && !eg
                            ? (0, i.jsx)(Y.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: J.Si.TIER_0,
                                  className: et.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: et.buttonShine
                              })
                            : (0, i.jsx)(Y.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: J.Si.TIER_0,
                                  className: et.marginTopForButtons,
                                  buttonShineClassName: et.buttonShine
                              }),
                    tier2CTAButton:
                        eO !== J.Si.TIER_0 || eg
                            ? (0, i.jsx)(Y.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: J.Si.TIER_2,
                                  className: et.marginTopForButtons,
                                  isEligibleForBogoPromotion: ey,
                                  buttonShineClassName: et.buttonShine
                              })
                            : (0, i.jsx)(Y.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: J.Si.TIER_2,
                                  className: et.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: et.buttonShine
                              })
                })
            })
        }),
        eG = (0, i.jsxs)('div', {
            className: s()(et.container, {
                [et.settingsContainer]: !a,
                [et.containerBackground]: eg && q
            }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                eg && (0, i.jsx)('div', { className: et.heroHeaderSideGradient }),
                eg &&
                    (0, i.jsx)('img', {
                        src: en,
                        className: et.heroHeaderBackgroundStars,
                        alt: ''
                    }),
                (0, i.jsx)(k.Z, {
                    premiumSubscription: eN,
                    className: s()(a ? et.fullscreenExistingSubscriberSpacing : et.existingSubscriberSpacing, { [et.zIndex1]: ew }),
                    isFullscreen: a
                }),
                !eg &&
                    (0, i.jsx)(ed, {
                        isFullscreen: a,
                        inOfferExperience: ew
                    }),
                !a && ej
                    ? (0, i.jsx)(B.Z, {
                          localizedPricingPromo: eA,
                          smallGap: !0
                      })
                    : (0, i.jsxs)('div', {
                          className: s()({ [et.heroHeadingV2Container]: eg }),
                          children: [
                              (0, i.jsx)(o.$, {
                                  onChange: (e) => ef(e),
                                  threshold: 0,
                                  active: !0,
                                  children: eg
                                      ? (0, i.jsx)(z.Z, {
                                            subscriptionTier: eR,
                                            isFullscreen: a || ew,
                                            entrypoint: y,
                                            isDarkMode: q
                                        })
                                      : (0, i.jsx)(U.ZP, {
                                            subscriptionTier: eR,
                                            isFullscreen: a || ew,
                                            isMarketingPageV2Enabled: eg,
                                            className: s()({
                                                [et.fullscreenHero]: a,
                                                [et.settingsHeroNoBackground]: !a && ew,
                                                [et.trialMarketingMargin]: ew,
                                                [et.settingsHeroBogoHeight]: !a && ey,
                                                [et.settingsHeroBogoMarginFullscreen]: a && ey,
                                                [et.noTopPaddingOverride]: null != eN
                                            }),
                                            entrypoint: y,
                                            isDarkMode: q
                                        })
                              }),
                              eg &&
                                  (0, i.jsx)('div', {
                                      className: et.heroHeadingV2ArtContainer,
                                      children: (0, i.jsx)(_.Z, {
                                          autoPlay: !G,
                                          playsInline: !0,
                                          preload: 'auto',
                                          poster: el.Z,
                                          loop: !0,
                                          className: s()(et.heroHeadingV2Art),
                                          ref: D,
                                          children: (0, i.jsx)('source', {
                                              src: eC ? es.Z : eo.Z,
                                              type: eC ? $.m.MP4 : $.m.WEBM
                                          })
                                      })
                                  })
                          ]
                      }),
                (0, i.jsxs)('div', {
                    className: et.promoBannerContainer,
                    children: [(0, i.jsx)(P.Z, { isFullScreen: a }), (0, i.jsx)(j.Z, { isFullScreen: a }), a && ej && (0, i.jsx)(Z.Z, { localizedPricingPromo: eA })]
                }),
                !eg && eD,
                y === J.EZ.UserSettings &&
                    null != ek &&
                    (0, i.jsx)(O.C, {
                        className: et.giftPromoCard,
                        config: ek
                    }),
                (0, i.jsx)(eu, {
                    isFullscreen: a,
                    inOfferExperience: ew,
                    setIsAllPerksVisible: eZ,
                    hasRenderedOnce: ev,
                    isMarketingPageV2Enabled: eg
                }),
                !eg && (0, i.jsx)(ec, { isFullscreen: a }),
                eg && eD,
                (0, i.jsxs)('div', {
                    className: et.planComparisonTableContainer,
                    children: [
                        (0, i.jsx)(F.Z, {
                            className: et.planComparisonTable,
                            hideCTAs: !0
                        }),
                        a
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('img', {
                                          src: er,
                                          className: et.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: ee.intl.string(ee.t.X4IxWF)
                                      }),
                                      (0, i.jsx)('img', {
                                          src: ea,
                                          className: et.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: ee.intl.string(ee.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                !eg && (0, i.jsx)('div', { className: a ? et.footerSpacingFullscreen : et.footerSpacing }),
                (0, i.jsx)(V.Z, {
                    isVisible: !em && !eh && !ep && ev,
                    isFullscreen: a,
                    subscriptionTier: eR
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !eb && (x.default.track(X.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eL }), ex(!0));
                    },
                    children: (0, i.jsx)('div', { className: et.bottomOfPageVisibilitySensor })
                }),
                !eg &&
                    (0, i.jsx)('img', {
                        src: ei,
                        className: et.bottomIllustration,
                        width: 112,
                        height: 85,
                        alt: ee.intl.string(ee.t.X4IxWF)
                    }),
                eg &&
                    (0, i.jsx)(o.$, {
                        onChange: (e) => {
                            e_(e);
                        },
                        children: (0, i.jsx)(W.Z, {
                            isFooterVisible: ep,
                            isDarkMode: q,
                            isReducedMotion: G
                        })
                    })
            ]
        });
    return a
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.AdvancedScrollerAuto, {
                      className: s()(et.scroller),
                      ref: L,
                      children: eG
                  }),
                  (0, i.jsx)(Q.Z, {
                      previousComponent: K.MQ.MARKETING,
                      isAllPerksVisible: eP,
                      setIsAllPerksVisible: eZ,
                      isFullScreen: a
                  })
              ]
          })
        : eG;
};
