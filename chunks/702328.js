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
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: a, isMarketingPageV2Enabled: l } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: s()(en.whatsNewSectionBackground, { [en.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, i.jsx)(H.Z, {
                              variant: Q.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l && (0, i.jsx)(k.Z, { shouldLoadVideo: a }),
                      l &&
                          (0, i.jsx)(k.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: a
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
    let L = r.useRef(null),
        D = r.useRef(null),
        H = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
        G = (0, m.ZP)(),
        J = (0, c.wj)(G),
        eg = (0, N.xP)('PremiumMarketingHome', !0),
        [ef, ep] = r.useState(!1),
        [e_, eh] = r.useState(!1),
        [eE, eb] = r.useState(!1),
        [ex, eC] = r.useState(!1),
        eT = (0, C.rO)(),
        [ev, eN] = r.useState(!1),
        eI = (0, l.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        eS = null != eI ? (0, T.Af)(eI) : null,
        eR = null != eS ? T.ZP.getSkuIdForPlan(eS.planId) : null,
        eA = null !== eR && eR !== X.Si.TIER_2 ? X.Si.TIER_2 : null,
        ej = (0, S.n)(),
        eP = null != ej,
        [eZ, eM] = r.useState(!1),
        eB = (0, R.Ng)(),
        eO = (0, A.N)(),
        ew = null == eO ? void 0 : null === (t = eO.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        ek = (0, v.Nx)(),
        ey = (0, B.Vi)(),
        eL = null === (n = (0, I.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
        { analyticsLocations: eU } = (0, p.ZP)(f.Z.PREMIUM_MARKETING),
        eD = 'PremiumMarketingHome';
    (0, u.j)({
        location: eD + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eD + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            eN(!0);
        }, []);
    let eH = (0, i.jsx)('div', {
            className: s()({
                [en.premiumTierCardsContainerSettings]: !a,
                [en.premiumTierCardsContainerFullscreen]: a
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => eb(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(w.ZP, {
                    variant: eg ? w.NN.MARKETING_PAGE_V2 : w.NN.DEFAULT,
                    showWumpus: !eg,
                    tier0CTAButton:
                        (ew === X.Si.TIER_2 || ey || null != eB) && !eg
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
                        ew !== X.Si.TIER_0 || eg
                            ? (0, i.jsx)(K.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: X.Si.TIER_2,
                                  className: en.marginTopForButtons,
                                  isEligibleForBogoPromotion: ey,
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
        eG = (0, i.jsxs)('div', {
            className: s()(en.container, {
                [en.settingsContainer]: !a,
                [en.containerBackground]: eg && J
            }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                eg && (0, i.jsx)('div', { className: en.heroHeaderSideGradient }),
                eg &&
                    (0, i.jsx)('img', {
                        src: ei,
                        className: en.heroHeaderBackgroundStars,
                        alt: ''
                    }),
                (0, i.jsx)(y.Z, {
                    premiumSubscription: eI,
                    className: s()(a ? en.fullscreenExistingSubscriberSpacing : en.existingSubscriberSpacing, { [en.zIndex1]: ek }),
                    isFullscreen: a
                }),
                !eg &&
                    (0, i.jsx)(eu, {
                        isFullscreen: a,
                        inOfferExperience: ek
                    }),
                !a && eP
                    ? (0, i.jsx)(M.Z, {
                          localizedPricingPromo: ej,
                          smallGap: !0
                      })
                    : (0, i.jsxs)('div', {
                          className: s()({ [en.heroHeadingV2Container]: eg }),
                          children: [
                              (0, i.jsx)(o.$, {
                                  onChange: (e) => ep(e),
                                  threshold: 0,
                                  active: !0,
                                  children: eg
                                      ? (0, i.jsx)(Y.Z, {
                                            subscriptionTier: eA,
                                            isFullscreen: a || ek,
                                            entrypoint: k,
                                            isDarkMode: J
                                        })
                                      : (0, i.jsx)(U.ZP, {
                                            subscriptionTier: eA,
                                            isFullscreen: a || ek,
                                            isMarketingPageV2Enabled: eg,
                                            className: s()({
                                                [en.fullscreenHero]: a,
                                                [en.settingsHeroNoBackground]: !a && ek,
                                                [en.trialMarketingMargin]: ek,
                                                [en.settingsHeroBogoHeight]: !a && ey,
                                                [en.settingsHeroBogoMarginFullscreen]: a && ey,
                                                [en.noTopPaddingOverride]: null != eI
                                            }),
                                            entrypoint: k,
                                            isDarkMode: J
                                        })
                              }),
                              eg &&
                                  (0, i.jsx)('div', {
                                      className: en.heroHeadingV2ArtContainer,
                                      children: (0, i.jsx)(_.Z, {
                                          autoPlay: !H,
                                          playsInline: !0,
                                          preload: 'auto',
                                          poster: eo.Z,
                                          loop: !0,
                                          className: s()(en.heroHeadingV2Art),
                                          ref: D,
                                          children: (0, i.jsx)('source', {
                                              src: eT ? el.Z : ec.Z,
                                              type: eT ? ee.m.MP4 : ee.m.WEBM
                                          })
                                      })
                                  })
                          ]
                      }),
                (0, i.jsxs)('div', {
                    className: en.promoBannerContainer,
                    children: [(0, i.jsx)(P.Z, { isFullScreen: a }), (0, i.jsx)(j.Z, { isFullScreen: a }), a && eP && (0, i.jsx)(Z.Z, { localizedPricingPromo: ej })]
                }),
                !eg && eH,
                k === X.EZ.UserSettings &&
                    null != eL &&
                    (0, i.jsx)(O.C, {
                        className: en.giftPromoCard,
                        config: eL
                    }),
                (0, i.jsx)(em, {
                    isFullscreen: a,
                    inOfferExperience: ek,
                    setIsAllPerksVisible: eM,
                    hasRenderedOnce: ev,
                    isMarketingPageV2Enabled: eg
                }),
                !eg && (0, i.jsx)(ed, { isFullscreen: a }),
                eg && eH,
                (0, i.jsxs)('div', {
                    className: en.planComparisonTableContainer,
                    children: [
                        eg
                            ? (0, i.jsx)(W.Z, { className: en.planComparisonTableV2 })
                            : (0, i.jsx)(F.Z, {
                                  className: en.planComparisonTable,
                                  hideCTAs: !0
                              }),
                        a && !eg
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
                !eg && (0, i.jsx)('div', { className: a ? en.footerSpacingFullscreen : en.footerSpacing }),
                (0, i.jsx)(V.Z, {
                    isVisible: !ef && !eE && !e_ && ev,
                    isFullscreen: a,
                    subscriptionTier: eA
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !ex && (x.default.track($.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eU }), eC(!0));
                    },
                    children: (0, i.jsx)('div', { className: en.bottomOfPageVisibilitySensor })
                }),
                !eg &&
                    (0, i.jsx)('img', {
                        src: er,
                        className: en.bottomIllustration,
                        width: 112,
                        height: 85,
                        alt: et.intl.string(et.t.X4IxWF)
                    }),
                eg &&
                    (0, i.jsx)(o.$, {
                        onChange: (e) => {
                            eh(e);
                        },
                        children: (0, i.jsx)(z.Z, {
                            isFooterVisible: e_,
                            isDarkMode: J,
                            isReducedMotion: H
                        })
                    })
            ]
        });
    return a
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.AdvancedScrollerAuto, {
                      className: s()(en.scroller),
                      ref: L,
                      children: eG
                  }),
                  (0, i.jsx)(q.Z, {
                      previousComponent: Q.MQ.MARKETING,
                      isAllPerksVisible: eZ,
                      setIsAllPerksVisible: eM,
                      isFullScreen: a
                  })
              ]
          })
        : eG;
};
