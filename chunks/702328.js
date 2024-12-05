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
    T = n(599659),
    N = n(278605),
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
    var t;
    let { isFullscreen: n, entrypoint: a } = e;
    (0, E.z)(h.X);
    let w = r.useRef(null),
        k = r.useRef(null),
        U = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        D = (0, g.ZP)(),
        H = (0, c.wj)(D),
        K = (0, N.xP)('PremiumMarketingHome', !0),
        [eo, ec] = r.useState(!1),
        [ed, eu] = r.useState(!1),
        [eg, em] = r.useState(!1),
        [ef, ep] = r.useState(!1),
        e_ = (0, l.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        eh = null != e_ ? (0, C.Af)(e_) : null,
        eE = null != eh ? C.ZP.getSkuIdForPlan(eh.planId) : null,
        eb = null !== eE && eE !== Q.Si.TIER_2 ? Q.Si.TIER_2 : null,
        ex = (0, I.n)(),
        eC = null != ex,
        [ev, eT] = r.useState(!1),
        eN = (0, S.Ng)(),
        eI = (0, R.N)(),
        eS = null == eI ? void 0 : null === (t = eI.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        eR = (0, v.Nx)(),
        eA = (0, B.Vi)(),
        { analyticsLocations: ej } = (0, p.ZP)(f.Z.PREMIUM_MARKETING),
        eP = 'PremiumMarketingHome';
    (0, u.j)({
        location: eP + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eP + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            ep(!0);
        }, []);
    let { enabled: eZ } = T.O.useExperiment({ location: 'PremiumMarketingHome' }, { autoTrackExposure: !1 }),
        eB = (0, i.jsx)('div', {
            className: s()({
                [$.premiumTierCardsContainerSettings]: !n,
                [$.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => eu(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(O.ZP, {
                    variant: O.NN.DEFAULT,
                    showWumpus: !0,
                    tier0CTAButton:
                        eS === Q.Si.TIER_2 || eA || null != eN
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
                        eS === Q.Si.TIER_0
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
                                  isEligibleForBogoPromotion: eA,
                                  buttonShineClassName: $.buttonShine
                              })
                })
            })
        }),
        eM = eZ && a === Q.EZ.UserSettings,
        eO = (0, i.jsxs)('div', {
            className: s()($.container, {
                [$.settingsContainer]: !n,
                [$.containerBackground]: K && H
            }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, i.jsx)(y.Z, {
                    premiumSubscription: e_,
                    className: s()(n ? $.fullscreenExistingSubscriberSpacing : $.existingSubscriberSpacing, { [$.zIndex1]: eR }),
                    isFullscreen: n
                }),
                !K &&
                    (0, i.jsx)(es, {
                        isFullscreen: n,
                        inOfferExperience: eR
                    }),
                !n && eC
                    ? (0, i.jsx)(Z.Z, {
                          localizedPricingPromo: ex,
                          smallGap: !0
                      })
                    : (0, i.jsxs)('div', {
                          className: s()({ [$.heroHeadingV2Container]: K }),
                          children: [
                              (0, i.jsx)(o.$, {
                                  onChange: (e) => ec(e),
                                  threshold: 0,
                                  active: !0,
                                  children: K
                                      ? (0, i.jsx)(F.Z, {
                                            subscriptionTier: eb,
                                            isFullscreen: n || eR,
                                            entrypoint: a,
                                            isDarkMode: H
                                        })
                                      : (0, i.jsx)(L.ZP, {
                                            subscriptionTier: eb,
                                            isFullscreen: n || eR,
                                            isMarketingPageV2Enabled: K,
                                            className: s()({
                                                [$.fullscreenHero]: n,
                                                [$.settingsHeroNoBackground]: !n && eR,
                                                [$.trialMarketingMargin]: eR,
                                                [$.settingsHeroBogoHeight]: !n && eA,
                                                [$.settingsHeroBogoMarginFullscreen]: n && eA,
                                                [$.noTopPaddingOverride]: null != e_
                                            }),
                                            entrypoint: a,
                                            isDarkMode: H
                                        })
                              }),
                              K &&
                                  (0, i.jsx)('div', {
                                      className: $.heroHeadingV2ArtContainer,
                                      children: (0, i.jsx)(_.Z, {
                                          autoPlay: !U,
                                          playsInline: !0,
                                          preload: 'auto',
                                          poster: ei.Z,
                                          loop: !0,
                                          className: s()($.heroHeadingV2Art),
                                          ref: k,
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
                    children: [(0, i.jsx)(j.Z, { isFullScreen: n }), (0, i.jsx)(A.Z, { isFullScreen: n }), n && eC && (0, i.jsx)(P.Z, { localizedPricingPromo: ex })]
                }),
                !K && eB,
                eM && (0, i.jsx)(M.d, { className: $.nitroweenGiftCard }),
                (0, i.jsx)(el, {
                    isFullscreen: n,
                    inOfferExperience: eR,
                    setIsAllPerksVisible: eT,
                    hasRenderedOnce: ef,
                    isMarketingPageV2Enabled: K
                }),
                !K && (0, i.jsx)(ea, { isFullscreen: n }),
                K && eB,
                (0, i.jsxs)('div', {
                    className: $.planComparisonTableContainer,
                    children: [
                        (0, i.jsx)(G.Z, {
                            className: $.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
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
                (0, i.jsx)('div', { className: n ? $.footerSpacingFullscreen : $.footerSpacing }),
                (0, i.jsx)(V.Z, {
                    isVisible: !eo && !ed && ef,
                    isFullscreen: n,
                    subscriptionTier: eb
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !eg && (x.default.track(J.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: ej }), em(!0));
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
    return n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.AdvancedScrollerAuto, {
                      className: s()($.scroller),
                      ref: w,
                      children: eO
                  }),
                  (0, i.jsx)(Y.Z, {
                      previousComponent: z.MQ.MARKETING,
                      isAllPerksVisible: ev,
                      setIsAllPerksVisible: eT,
                      isFullScreen: n
                  })
              ]
          })
        : eO;
};
