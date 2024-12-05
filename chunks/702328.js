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
    p = n(100527),
    f = n(906732),
    _ = n(70097),
    h = n(464824),
    E = n(214852),
    b = n(78839),
    x = n(626135),
    C = n(74538),
    v = n(140465),
    T = n(278605),
    N = n(91802),
    S = n(104494),
    I = n(639119),
    R = n(906461),
    A = n(8647),
    j = n(568126),
    P = n(605289),
    Z = n(346497),
    B = n(823188),
    M = n(241158),
    O = n(135785),
    w = n(498765),
    y = n(635921),
    k = n(177839),
    L = n(794484),
    U = n(392521),
    D = n(349803),
    H = n(179984),
    V = n(304576),
    G = n(409100),
    F = n(391110),
    W = n(71363),
    z = n(781800),
    Y = n(474936),
    K = n(981631),
    Q = n(869783),
    J = n(388032),
    q = n(286919),
    X = n(865215),
    $ = n(735035),
    ee = n(786362),
    et = n(313199),
    en = n(821969);
let ei = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === Y.p9.TIER_2 && t) ? null : (0, i.jsx)(k.Z, { className: t ? q.perkCardsContainerSpacingFullscreen : q.perkCardsContainerSpacingSettings });
    },
    er = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(w.Z, { lifted: !t && n }) : null;
    },
    ea = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: a, isMarketingPageV2Enabled: l } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: s()(q.whatsNewSectionBackground, { [q.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, i.jsx)(L.Z, {
                              variant: F.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l && (0, i.jsx)(M.Z, { shouldLoadVideo: a }),
                      l &&
                          (0, i.jsx)(M.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: a
                          }),
                      !l &&
                          (0, i.jsx)(L.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(z.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: F.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(U.ZP, {
                              className: q.pdSparklesTop,
                              variant: U.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(U.ZP, {
                              className: q.pdSparklesBottom,
                              variant: U.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: a } = e;
    (0, E.z)(h.X);
    let M = r.useRef(null),
        w = r.useRef(null),
        k = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        L = (0, g.ZP)(),
        U = (0, c.wj)(L),
        z = (0, T.xP)('PremiumMarketingHome', !0),
        [es, el] = r.useState(!1),
        [eo, ec] = r.useState(!1),
        [ed, eu] = r.useState(!1),
        [eg, em] = r.useState(!1),
        ep = (0, l.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        ef = null != ep ? (0, C.Af)(ep) : null,
        e_ = null != ef ? C.ZP.getSkuIdForPlan(ef.planId) : null,
        eh = null !== e_ && e_ !== Y.Si.TIER_2 ? Y.Si.TIER_2 : null,
        eE = (0, N.n)(),
        eb = null != eE,
        [ex, eC] = r.useState(!1),
        ev = (0, S.Ng)(),
        eT = (0, I.N)(),
        eN = null == eT ? void 0 : null === (t = eT.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        eS = (0, v.Nx)(),
        eI = (0, Z.Vi)(),
        { analyticsLocations: eR } = (0, f.ZP)(p.Z.PREMIUM_MARKETING),
        eA = 'PremiumMarketingHome';
    (0, u.j)({
        location: eA + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eA + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            em(!0);
        }, []);
    let ej = (0, i.jsx)('div', {
            className: s()({
                [q.premiumTierCardsContainerSettings]: !n,
                [q.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => ec(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(B.ZP, {
                    variant: B.NN.DEFAULT,
                    showWumpus: !0,
                    tier0CTAButton:
                        eN === Y.Si.TIER_2 || eI || null != ev
                            ? (0, i.jsx)(G.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: Y.Si.TIER_0,
                                  className: q.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: q.buttonShine
                              })
                            : (0, i.jsx)(G.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: Y.Si.TIER_0,
                                  className: q.marginTopForButtons,
                                  buttonShineClassName: q.buttonShine
                              }),
                    tier2CTAButton:
                        eN === Y.Si.TIER_0
                            ? (0, i.jsx)(G.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: Y.Si.TIER_2,
                                  className: q.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: q.buttonShine
                              })
                            : (0, i.jsx)(G.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: Y.Si.TIER_2,
                                  className: q.marginTopForButtons,
                                  isEligibleForBogoPromotion: eI,
                                  buttonShineClassName: q.buttonShine
                              })
                })
            })
        }),
        eP = (0, i.jsxs)('div', {
            className: s()(q.container, {
                [q.settingsContainer]: !n,
                [q.containerBackground]: z && U
            }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, i.jsx)(O.Z, {
                    premiumSubscription: ep,
                    className: s()(n ? q.fullscreenExistingSubscriberSpacing : q.existingSubscriberSpacing, { [q.zIndex1]: eS }),
                    isFullscreen: n
                }),
                !z &&
                    (0, i.jsx)(er, {
                        isFullscreen: n,
                        inOfferExperience: eS
                    }),
                !n && eb
                    ? (0, i.jsx)(P.Z, {
                          localizedPricingPromo: eE,
                          smallGap: !0
                      })
                    : (0, i.jsxs)('div', {
                          className: s()({ [q.heroHeadingV2Container]: z }),
                          children: [
                              (0, i.jsx)(o.$, {
                                  onChange: (e) => el(e),
                                  threshold: 0,
                                  active: !0,
                                  children: z
                                      ? (0, i.jsx)(V.Z, {
                                            subscriptionTier: eh,
                                            isFullscreen: n || eS,
                                            entrypoint: a,
                                            isDarkMode: U
                                        })
                                      : (0, i.jsx)(y.ZP, {
                                            subscriptionTier: eh,
                                            isFullscreen: n || eS,
                                            isMarketingPageV2Enabled: z,
                                            className: s()({
                                                [q.fullscreenHero]: n,
                                                [q.settingsHeroNoBackground]: !n && eS,
                                                [q.trialMarketingMargin]: eS,
                                                [q.settingsHeroBogoHeight]: !n && eI,
                                                [q.settingsHeroBogoMarginFullscreen]: n && eI,
                                                [q.noTopPaddingOverride]: null != ep
                                            }),
                                            entrypoint: a,
                                            isDarkMode: U
                                        })
                              }),
                              z &&
                                  (0, i.jsx)('div', {
                                      className: q.heroHeadingV2ArtContainer,
                                      children: (0, i.jsx)(_.Z, {
                                          autoPlay: !k,
                                          playsInline: !0,
                                          preload: 'auto',
                                          poster: et.Z,
                                          loop: !0,
                                          className: s()(q.heroHeadingV2Art),
                                          ref: w,
                                          children: (0, i.jsx)('source', {
                                              src: en.Z,
                                              type: Q.m.WEBM
                                          })
                                      })
                                  })
                          ]
                      }),
                (0, i.jsxs)('div', {
                    className: q.promoBannerContainer,
                    children: [(0, i.jsx)(A.Z, { isFullScreen: n }), (0, i.jsx)(R.Z, { isFullScreen: n }), n && eb && (0, i.jsx)(j.Z, { localizedPricingPromo: eE })]
                }),
                !z && ej,
                (0, i.jsx)(ea, {
                    isFullscreen: n,
                    inOfferExperience: eS,
                    setIsAllPerksVisible: eC,
                    hasRenderedOnce: eg,
                    isMarketingPageV2Enabled: z
                }),
                !z && (0, i.jsx)(ei, { isFullscreen: n }),
                z && ej,
                (0, i.jsxs)('div', {
                    className: q.planComparisonTableContainer,
                    children: [
                        (0, i.jsx)(H.Z, {
                            className: q.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('img', {
                                          src: $,
                                          className: q.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: J.intl.string(J.t.X4IxWF)
                                      }),
                                      (0, i.jsx)('img', {
                                          src: ee,
                                          className: q.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: J.intl.string(J.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, i.jsx)('div', { className: n ? q.footerSpacingFullscreen : q.footerSpacing }),
                (0, i.jsx)(D.Z, {
                    isVisible: !es && !eo && eg,
                    isFullscreen: n,
                    subscriptionTier: eh
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !ed && (x.default.track(K.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eR }), eu(!0));
                    },
                    children: (0, i.jsx)('div', { className: q.bottomOfPageVisibilitySensor })
                }),
                (0, i.jsx)('img', {
                    src: X,
                    className: q.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: J.intl.string(J.t.X4IxWF)
                })
            ]
        });
    return n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.AdvancedScrollerAuto, {
                      className: s()(q.scroller),
                      ref: M,
                      children: eP
                  }),
                  (0, i.jsx)(W.Z, {
                      previousComponent: F.MQ.MARKETING,
                      isAllPerksVisible: ex,
                      setIsAllPerksVisible: eC,
                      isFullScreen: n
                  })
              ]
          })
        : eP;
};
