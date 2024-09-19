n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(330711),
    o = n(442837),
    c = n(622535),
    d = n(481060),
    _ = n(634894),
    u = n(100527),
    E = n(906732),
    T = n(433811),
    I = n(214852),
    R = n(78839),
    m = n(626135),
    N = n(74538),
    g = n(140465),
    C = n(67645),
    p = n(257944),
    f = n(91802),
    A = n(104494),
    h = n(639119),
    S = n(8647),
    M = n(568126),
    x = n(605289),
    b = n(248042),
    O = n(823188),
    v = n(241158),
    P = n(135785),
    L = n(498765),
    Z = n(635921),
    D = n(177839),
    B = n(794484),
    U = n(392521),
    j = n(349803),
    G = n(179984),
    w = n(409100),
    y = n(391110),
    H = n(71363),
    k = n(781800),
    F = n(474936),
    V = n(981631),
    W = n(445615),
    K = n(865215),
    Y = n(735035),
    z = n(786362);
let Q = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === F.p9.TIER_2 && t) ? null : (0, s.jsx)(D.Z, { className: t ? W.perkCardsContainerSpacingFullscreen : W.perkCardsContainerSpacingSettings });
    },
    q = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, s.jsx)(L.Z, { lifted: !t && n }) : null;
    },
    X = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, whatsNewV2Enabled: l, BestOfNitroV2Enabled: o, setIsWhatsNewBoxVisible: d, setIsBestOfNitroVisible: _, hasRenderedOnce: u } = e,
            [E, T] = a.useState(!1),
            I = a.useRef(0),
            R = a.useRef(0);
        return (a.useEffect(() => {
            E ? (I.current = Date.now()) : 0 !== I.current && ((R.current = R.current + Date.now() - I.current), (I.current = 0));
        }, [E]),
        a.useEffect(
            () => () => {
                0 !== I.current && (R.current = R.current + (Date.now() - I.current)),
                    0 !== R.current &&
                        m.default.track(V.rMx.PREMIUM_WHATS_NEW_VIEW_TIME, {
                            view_time: R.current,
                            is_v2: l
                        });
            },
            []
        ),
        t)
            ? (0, s.jsx)(c.$, {
                  onChange: (e) => T(e),
                  threshold: 0,
                  active: !0,
                  children: (0, s.jsxs)('div', {
                      className: i()(W.whatsNewSectionBackground, {
                          [W.whatsNewSectionBackgroundV2]: l || o,
                          [W.whatsNewSectionBackgroundNoGap]: l && o
                      }),
                      children: [
                          !l &&
                              (0, s.jsx)(B.Z, {
                                  variant: y.R0.WHATS_NEW,
                                  isFullScreen: t
                              }),
                          l &&
                              (0, s.jsx)(c.$, {
                                  onChange: (e) => d(e),
                                  threshold: 0,
                                  active: !0,
                                  children: (0, s.jsx)(v.Z, { shouldLoadVideo: u })
                              }),
                          o &&
                              (0, s.jsx)(c.$, {
                                  onChange: (e) => _(e),
                                  threshold: 0,
                                  active: !0,
                                  children: (0, s.jsx)(v.Z, {
                                      isBestOfNitro: !0,
                                      shouldLoadVideo: u
                                  })
                              }),
                          !o &&
                              (0, s.jsx)(B.Z, {
                                  isFullScreen: t,
                                  showAllPerksButton: t
                                      ? (0, s.jsx)(k.Z, {
                                            setIsAllPerksVisible: r,
                                            previousComponent: y.MQ.MARKETING
                                        })
                                      : void 0
                              }),
                          n &&
                              !l &&
                              (0, s.jsx)(U.ZP, {
                                  className: W.pdSparklesTop,
                                  variant: U.u0.TOP
                              }),
                          n &&
                              !l &&
                              (0, s.jsx)(U.ZP, {
                                  className: W.pdSparklesBottom,
                                  variant: U.u0.BOTTOM
                              })
                      ]
                  })
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: r } = e;
    (0, I.z)(T.X);
    let v = (0, p.z7)('PremiumMarketingHome'),
        L = (0, C.g)('PremiumMarketingHome'),
        D = a.useRef(null),
        [B, U] = a.useState(!1),
        [k, J] = a.useState(!1),
        [$, ee] = a.useState(!1),
        [et, en] = a.useState(!1),
        [es, ea] = a.useState(!1),
        [er, ei] = a.useState(!1),
        el = (0, o.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        eo = null != el ? (0, N.Af)(el) : null,
        ec = null != eo ? N.ZP.getSkuIdForPlan(eo.planId) : null,
        ed = null !== ec && ec !== F.Si.TIER_2 ? F.Si.TIER_2 : null,
        e_ = (0, f.n)(),
        eu = null != e_,
        [eE, eT] = a.useState(!1),
        eI = (0, A.Ng)(),
        eR = (0, h.N)(),
        em = null == eR ? void 0 : null === (t = eR.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        eN = (0, g.Nx)(),
        eg = (0, b.Vi)(),
        { analyticsLocations: eC } = (0, E.ZP)(u.Z.PREMIUM_MARKETING),
        ep = 'PremiumMarketingHome';
    (0, _.j)({
        location: ep + ' auto on',
        autoTrackExposure: !0
    }),
        (0, _.j)({
            location: ep + ' auto off',
            autoTrackExposure: !1
        }),
        a.useEffect(() => {
            ei(!0);
        }, []);
    let ef = (0, s.jsx)('div', {
            className: i()({
                [W.premiumTierCardsContainerSettings]: !n,
                [W.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, s.jsx)(c.$, {
                onChange: (e) => J(e),
                threshold: 0.1,
                active: !0,
                children: (0, s.jsx)(O.ZP, {
                    showWumpus: !0,
                    tier0CTAButton:
                        em === F.Si.TIER_2 || eg || null != eI
                            ? (0, s.jsx)(w.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: F.Si.TIER_0,
                                  className: W.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: W.buttonShine
                              })
                            : (0, s.jsx)(w.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: F.Si.TIER_0,
                                  className: W.marginTopForButtons,
                                  buttonShineClassName: W.buttonShine
                              }),
                    tier2CTAButton:
                        em === F.Si.TIER_0
                            ? (0, s.jsx)(w.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: F.Si.TIER_2,
                                  className: W.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: W.buttonShine
                              })
                            : (0, s.jsx)(w.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: F.Si.TIER_2,
                                  className: W.marginTopForButtons,
                                  isEligibleForBogoPromotion: eg,
                                  buttonShineClassName: W.buttonShine
                              })
                })
            })
        }),
        eA = (0, s.jsxs)('div', {
            className: i()(W.container, { [W.settingsContainer]: !n }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, s.jsx)(P.Z, {
                    premiumSubscription: el,
                    className: i()(n ? W.fullscreenExistingSubscriberSpacing : W.existingSubscriberSpacing, { [W.zIndex1]: eN }),
                    isFullscreen: n
                }),
                (0, s.jsx)(q, {
                    isFullscreen: n,
                    inOfferExperience: eN
                }),
                !n && eu
                    ? (0, s.jsx)(x.Z, {
                          localizedPricingPromo: e_,
                          smallGap: !0
                      })
                    : (0, s.jsx)(c.$, {
                          onChange: (e) => U(e),
                          threshold: 0,
                          active: !0,
                          children: (0, s.jsx)(Z.Z, {
                              subscriptionTier: ed,
                              isFullscreen: n || eN,
                              className: i()({
                                  [W.fullscreenHero]: n,
                                  [W.settingsHeroNoBackground]: !n && eN,
                                  [W.trialMarketingMargin]: eN,
                                  [W.settingsHeroBogoHeight]: !n && eg,
                                  [W.settingsHeroBogoMarginFullscreen]: n && eg,
                                  [W.noTopPaddingOverride]: null != el
                              }),
                              entrypoint: r
                          })
                      }),
                (0, s.jsxs)('div', {
                    className: W.promoBannerContainer,
                    children: [(0, s.jsx)(S.Z, { isFullScreen: n }), n && eu && (0, s.jsx)(M.Z, { localizedPricingPromo: e_ })]
                }),
                ef,
                (0, s.jsx)(X, {
                    isFullscreen: n,
                    inOfferExperience: eN,
                    setIsAllPerksVisible: eT,
                    whatsNewV2Enabled: v,
                    BestOfNitroV2Enabled: L,
                    setIsWhatsNewBoxVisible: ee,
                    setIsBestOfNitroVisible: en,
                    hasRenderedOnce: er
                }),
                !v && !L && (0, s.jsx)(Q, { isFullscreen: n }),
                (0, s.jsxs)('div', {
                    className: W.planComparisonTableContainer,
                    children: [
                        (0, s.jsx)(G.Z, {
                            className: W.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)('img', {
                                          src: Y,
                                          className: W.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: l.Z.Messages.IMAGE
                                      }),
                                      (0, s.jsx)('img', {
                                          src: z,
                                          className: W.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: l.Z.Messages.IMAGE
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, s.jsx)('div', { className: n ? W.footerSpacingFullscreen : W.footerSpacing }),
                (0, s.jsx)(j.Z, {
                    isVisible: !B && !k && !$ && !et && er,
                    isFullscreen: n,
                    subscriptionTier: ed
                }),
                (0, s.jsx)(c.$, {
                    onChange: (e) => {
                        e && !es && (m.default.track(V.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eC }), ea(!0));
                    },
                    children: (0, s.jsx)('div', { className: W.bottomOfPageVisibilitySensor })
                }),
                (0, s.jsx)('img', {
                    src: K,
                    className: W.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: l.Z.Messages.IMAGE
                })
            ]
        });
    return n
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(d.AdvancedScrollerAuto, {
                      className: W.scroller,
                      ref: D,
                      children: eA
                  }),
                  (0, s.jsx)(H.Z, {
                      previousComponent: y.MQ.MARKETING,
                      isAllPerksVisible: eE,
                      setIsAllPerksVisible: eT,
                      isFullScreen: n
                  })
              ]
          })
        : eA;
};
