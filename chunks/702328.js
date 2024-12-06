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
    C = n(74538),
    v = n(140465),
    T = n(278605),
    N = n(286961),
    I = n(91802),
    S = n(104494),
    R = n(639119),
    A = n(906461),
    j = n(8647),
    P = n(568126),
    Z = n(605289),
    B = n(346497),
    M = n(218390),
    O = n(823188),
    w = n(241158),
    y = n(135785),
    k = n(498765),
    L = n(635921),
    U = n(177839),
    D = n(794484),
    H = n(392521),
    V = n(349803),
    G = n(179984),
    F = n(304576),
    W = n(409100),
    z = n(391110),
    Y = n(71363),
    K = n(781800),
    Q = n(474936),
    J = n(981631),
    q = n(869783),
    X = n(388032),
    $ = n(286919),
    ee = n(865215),
    et = n(735035),
    en = n(786362),
    ei = n(313199),
    er = n(821969);
let ea = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === Q.p9.TIER_2 && t) ? null : (0, i.jsx)(U.Z, { className: t ? $.perkCardsContainerSpacingFullscreen : $.perkCardsContainerSpacingSettings });
    },
    es = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(k.Z, { lifted: !t && n }) : null;
    },
    el = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: a, isMarketingPageV2Enabled: l } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: s()($.whatsNewSectionBackground, { [$.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, i.jsx)(D.Z, {
                              variant: z.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l && (0, i.jsx)(w.Z, { shouldLoadVideo: a }),
                      l &&
                          (0, i.jsx)(w.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: a
                          }),
                      !l &&
                          (0, i.jsx)(D.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(K.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: z.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(H.ZP, {
                              className: $.pdSparklesTop,
                              variant: H.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(H.ZP, {
                              className: $.pdSparklesBottom,
                              variant: H.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t, n;
    let { isFullscreen: a, entrypoint: w } = e;
    (0, E.z)(h.X);
    let k = r.useRef(null),
        U = r.useRef(null),
        D = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        H = (0, g.ZP)(),
        K = (0, c.wj)(H),
        eo = (0, T.xP)('PremiumMarketingHome', !0),
        [ec, ed] = r.useState(!1),
        [eu, eg] = r.useState(!1),
        [em, ef] = r.useState(!1),
        [ep, e_] = r.useState(!1),
        eh = (0, l.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        eE = null != eh ? (0, C.Af)(eh) : null,
        eb = null != eE ? C.ZP.getSkuIdForPlan(eE.planId) : null,
        ex = null !== eb && eb !== Q.Si.TIER_2 ? Q.Si.TIER_2 : null,
        eC = (0, I.n)(),
        ev = null != eC,
        [eT, eN] = r.useState(!1),
        eI = (0, S.Ng)(),
        eS = (0, R.N)(),
        eR = null == eS ? void 0 : null === (t = eS.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        eA = (0, v.Nx)(),
        ej = (0, B.Vi)(),
        eP = null === (n = (0, N.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
        { analyticsLocations: eZ } = (0, p.ZP)(f.Z.PREMIUM_MARKETING),
        eB = 'PremiumMarketingHome';
    (0, u.j)({
        location: eB + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eB + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            e_(!0);
        }, []);
    let eM = (0, i.jsx)('div', {
            className: s()({
                [$.premiumTierCardsContainerSettings]: !a,
                [$.premiumTierCardsContainerFullscreen]: a
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => eg(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(O.ZP, {
                    variant: O.NN.DEFAULT,
                    showWumpus: !0,
                    tier0CTAButton:
                        eR === Q.Si.TIER_2 || ej || null != eI
                            ? (0, i.jsx)(W.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: Q.Si.TIER_0,
                                  className: $.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: $.buttonShine
                              })
                            : (0, i.jsx)(W.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: Q.Si.TIER_0,
                                  className: $.marginTopForButtons,
                                  buttonShineClassName: $.buttonShine
                              }),
                    tier2CTAButton:
                        eR === Q.Si.TIER_0
                            ? (0, i.jsx)(W.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: Q.Si.TIER_2,
                                  className: $.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: $.buttonShine
                              })
                            : (0, i.jsx)(W.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: Q.Si.TIER_2,
                                  className: $.marginTopForButtons,
                                  isEligibleForBogoPromotion: ej,
                                  buttonShineClassName: $.buttonShine
                              })
                })
            })
        }),
        eO = (0, i.jsxs)('div', {
            className: s()($.container, {
                [$.settingsContainer]: !a,
                [$.containerBackground]: eo && K
            }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, i.jsx)(y.Z, {
                    premiumSubscription: eh,
                    className: s()(a ? $.fullscreenExistingSubscriberSpacing : $.existingSubscriberSpacing, { [$.zIndex1]: eA }),
                    isFullscreen: a
                }),
                !eo &&
                    (0, i.jsx)(es, {
                        isFullscreen: a,
                        inOfferExperience: eA
                    }),
                !a && ev
                    ? (0, i.jsx)(Z.Z, {
                          localizedPricingPromo: eC,
                          smallGap: !0
                      })
                    : (0, i.jsxs)('div', {
                          className: s()({ [$.heroHeadingV2Container]: eo }),
                          children: [
                              (0, i.jsx)(o.$, {
                                  onChange: (e) => ed(e),
                                  threshold: 0,
                                  active: !0,
                                  children: eo
                                      ? (0, i.jsx)(F.Z, {
                                            subscriptionTier: ex,
                                            isFullscreen: a || eA,
                                            entrypoint: w,
                                            isDarkMode: K
                                        })
                                      : (0, i.jsx)(L.ZP, {
                                            subscriptionTier: ex,
                                            isFullscreen: a || eA,
                                            isMarketingPageV2Enabled: eo,
                                            className: s()({
                                                [$.fullscreenHero]: a,
                                                [$.settingsHeroNoBackground]: !a && eA,
                                                [$.trialMarketingMargin]: eA,
                                                [$.settingsHeroBogoHeight]: !a && ej,
                                                [$.settingsHeroBogoMarginFullscreen]: a && ej,
                                                [$.noTopPaddingOverride]: null != eh
                                            }),
                                            entrypoint: w,
                                            isDarkMode: K
                                        })
                              }),
                              eo &&
                                  (0, i.jsx)('div', {
                                      className: $.heroHeadingV2ArtContainer,
                                      children: (0, i.jsx)(_.Z, {
                                          autoPlay: !D,
                                          playsInline: !0,
                                          preload: 'auto',
                                          poster: ei.Z,
                                          loop: !0,
                                          className: s()($.heroHeadingV2Art),
                                          ref: U,
                                          children: (0, i.jsx)('source', {
                                              src: er.Z,
                                              type: q.m.WEBM
                                          })
                                      })
                                  })
                          ]
                      }),
                (0, i.jsxs)('div', {
                    className: $.promoBannerContainer,
                    children: [(0, i.jsx)(j.Z, { isFullScreen: a }), (0, i.jsx)(A.Z, { isFullScreen: a }), a && ev && (0, i.jsx)(P.Z, { localizedPricingPromo: eC })]
                }),
                !eo && eM,
                w === Q.EZ.UserSettings &&
                    null != eP &&
                    (0, i.jsx)(M.C, {
                        className: $.giftPromoCard,
                        config: eP
                    }),
                (0, i.jsx)(el, {
                    isFullscreen: a,
                    inOfferExperience: eA,
                    setIsAllPerksVisible: eN,
                    hasRenderedOnce: ep,
                    isMarketingPageV2Enabled: eo
                }),
                !eo && (0, i.jsx)(ea, { isFullscreen: a }),
                eo && eM,
                (0, i.jsxs)('div', {
                    className: $.planComparisonTableContainer,
                    children: [
                        (0, i.jsx)(G.Z, {
                            className: $.planComparisonTable,
                            hideCTAs: !0
                        }),
                        a
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('img', {
                                          src: et,
                                          className: $.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: X.intl.string(X.t.X4IxWF)
                                      }),
                                      (0, i.jsx)('img', {
                                          src: en,
                                          className: $.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: X.intl.string(X.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, i.jsx)('div', { className: a ? $.footerSpacingFullscreen : $.footerSpacing }),
                (0, i.jsx)(V.Z, {
                    isVisible: !ec && !eu && ep,
                    isFullscreen: a,
                    subscriptionTier: ex
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !em && (x.default.track(J.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eZ }), ef(!0));
                    },
                    children: (0, i.jsx)('div', { className: $.bottomOfPageVisibilitySensor })
                }),
                (0, i.jsx)('img', {
                    src: ee,
                    className: $.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: X.intl.string(X.t.X4IxWF)
                })
            ]
        });
    return a
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.AdvancedScrollerAuto, {
                      className: s()($.scroller),
                      ref: k,
                      children: eO
                  }),
                  (0, i.jsx)(Y.Z, {
                      previousComponent: z.MQ.MARKETING,
                      isAllPerksVisible: eT,
                      setIsAllPerksVisible: eN,
                      isFullScreen: a
                  })
              ]
          })
        : eO;
};
