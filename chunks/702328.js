n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    o = n(330711),
    l = n(442837),
    c = n(622535),
    d = n(481060),
    _ = n(634894),
    u = n(100527),
    E = n(906732),
    T = n(433811),
    I = n(214852),
    R = n(78839),
    m = n(626135),
    g = n(74538),
    N = n(140465),
    C = n(67645),
    p = n(599659),
    f = n(257944),
    A = n(91802),
    S = n(104494),
    M = n(639119),
    h = n(8647),
    x = n(568126),
    b = n(605289),
    O = n(248042),
    P = n(218390),
    v = n(823188),
    L = n(241158),
    Z = n(135785),
    D = n(498765),
    B = n(635921),
    U = n(177839),
    j = n(794484),
    G = n(392521),
    w = n(349803),
    y = n(179984),
    k = n(409100),
    H = n(391110),
    F = n(71363),
    V = n(781800),
    W = n(474936),
    K = n(981631),
    Y = n(445615),
    z = n(865215),
    Q = n(735035),
    q = n(786362);
let X = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === W.p9.TIER_2 && t) ? null : (0, s.jsx)(U.Z, { className: t ? Y.perkCardsContainerSpacingFullscreen : Y.perkCardsContainerSpacingSettings });
    },
    J = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, s.jsx)(D.Z, { lifted: !t && n }) : null;
    },
    $ = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, whatsNewV2Enabled: o, BestOfNitroV2Enabled: l, setIsWhatsNewBoxVisible: d, setIsBestOfNitroVisible: _, isWhatsNewBoxVisible: u, isBestOfNitroVisible: E, hasRenderedOnce: T } = e,
            I = a.useRef(0),
            R = a.useRef(0),
            g = a.useRef(0),
            N = a.useRef(0);
        return (a.useEffect(() => {
            u ? (I.current = Date.now()) : 0 !== I.current && ((R.current = R.current + Date.now() - I.current), (I.current = 0));
        }, [u]),
        a.useEffect(() => {
            E ? (g.current = Date.now()) : 0 !== g.current && ((N.current = N.current + Date.now() - g.current), (g.current = 0));
        }, [E]),
        a.useEffect(
            () => () => {
                0 !== I.current && (R.current = R.current + (Date.now() - I.current)),
                    0 !== g.current && (N.current = N.current + (Date.now() - g.current)),
                    0 !== R.current &&
                        m.default.track(K.rMx.PREMIUM_WHATS_NEW_VIEW_TIME, {
                            view_time: R.current,
                            is_v2: o
                        }),
                    0 !== N.current &&
                        m.default.track(K.rMx.PREMIUM_BEST_OF_VIEW_TIME, {
                            view_time: N.current,
                            is_v2: o
                        });
            },
            []
        ),
        t)
            ? (0, s.jsxs)('div', {
                  className: i()(Y.whatsNewSectionBackground, {
                      [Y.whatsNewSectionBackgroundV2]: o || l,
                      [Y.whatsNewSectionBackgroundNoGap]: o && l
                  }),
                  children: [
                      !o &&
                          (0, s.jsx)(j.Z, {
                              variant: H.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      o &&
                          (0, s.jsx)(c.$, {
                              onChange: (e) => d(e),
                              threshold: 0,
                              active: !0,
                              children: (0, s.jsx)(L.Z, { shouldLoadVideo: T })
                          }),
                      l &&
                          (0, s.jsx)(c.$, {
                              onChange: (e) => _(e),
                              threshold: 0,
                              active: !0,
                              children: (0, s.jsx)(L.Z, {
                                  isBestOfNitro: !0,
                                  shouldLoadVideo: T
                              })
                          }),
                      !l &&
                          (0, s.jsx)(j.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, s.jsx)(V.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: H.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !o &&
                          (0, s.jsx)(G.ZP, {
                              className: Y.pdSparklesTop,
                              variant: G.u0.TOP
                          }),
                      n &&
                          !o &&
                          (0, s.jsx)(G.ZP, {
                              className: Y.pdSparklesBottom,
                              variant: G.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: r } = e;
    (0, I.z)(T.X);
    let L = (0, f.z7)('PremiumMarketingHome'),
        D = (0, C.g)('PremiumMarketingHome'),
        U = a.useRef(null),
        [j, G] = a.useState(!1),
        [V, ee] = a.useState(!1),
        [et, en] = a.useState(!1),
        [es, ea] = a.useState(!1),
        [er, ei] = a.useState(!1),
        [eo, el] = a.useState(!1),
        ec = (0, l.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        ed = null != ec ? (0, g.Af)(ec) : null,
        e_ = null != ed ? g.ZP.getSkuIdForPlan(ed.planId) : null,
        eu = null !== e_ && e_ !== W.Si.TIER_2 ? W.Si.TIER_2 : null,
        eE = (0, A.n)(),
        eT = null != eE,
        [eI, eR] = a.useState(!1),
        em = (0, S.Ng)(),
        eg = (0, M.N)(),
        eN = null == eg ? void 0 : null === (t = eg.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        eC = (0, N.Nx)(),
        ep = (0, O.Vi)(),
        { analyticsLocations: ef } = (0, E.ZP)(u.Z.PREMIUM_MARKETING),
        eA = 'PremiumMarketingHome';
    (0, _.j)({
        location: eA + ' auto on',
        autoTrackExposure: !0
    }),
        (0, _.j)({
            location: eA + ' auto off',
            autoTrackExposure: !1
        }),
        a.useEffect(() => {
            el(!0);
        }, []);
    let { enabled: eS } = p.O.useExperiment({ location: 'PremiumMarketingHome' }, { autoTrackExposure: !1 }),
        eM = (0, s.jsx)('div', {
            className: i()({
                [Y.premiumTierCardsContainerSettings]: !n,
                [Y.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, s.jsx)(c.$, {
                onChange: (e) => ee(e),
                threshold: 0.1,
                active: !0,
                children: (0, s.jsx)(v.ZP, {
                    showWumpus: !0,
                    tier0CTAButton:
                        eN === W.Si.TIER_2 || ep || null != em
                            ? (0, s.jsx)(k.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: W.Si.TIER_0,
                                  className: Y.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: Y.buttonShine
                              })
                            : (0, s.jsx)(k.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: W.Si.TIER_0,
                                  className: Y.marginTopForButtons,
                                  buttonShineClassName: Y.buttonShine
                              }),
                    tier2CTAButton:
                        eN === W.Si.TIER_0
                            ? (0, s.jsx)(k.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: W.Si.TIER_2,
                                  className: Y.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: Y.buttonShine
                              })
                            : (0, s.jsx)(k.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: W.Si.TIER_2,
                                  className: Y.marginTopForButtons,
                                  isEligibleForBogoPromotion: ep,
                                  buttonShineClassName: Y.buttonShine
                              })
                })
            })
        }),
        eh = (0, s.jsxs)('div', {
            className: i()(Y.container, { [Y.settingsContainer]: !n }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, s.jsx)(Z.Z, {
                    premiumSubscription: ec,
                    className: i()(n ? Y.fullscreenExistingSubscriberSpacing : Y.existingSubscriberSpacing, { [Y.zIndex1]: eC }),
                    isFullscreen: n
                }),
                (0, s.jsx)(J, {
                    isFullscreen: n,
                    inOfferExperience: eC
                }),
                !n && eT
                    ? (0, s.jsx)(b.Z, {
                          localizedPricingPromo: eE,
                          smallGap: !0
                      })
                    : (0, s.jsx)(c.$, {
                          onChange: (e) => G(e),
                          threshold: 0,
                          active: !0,
                          children: (0, s.jsx)(B.Z, {
                              subscriptionTier: eu,
                              isFullscreen: n || eC,
                              className: i()({
                                  [Y.fullscreenHero]: n,
                                  [Y.settingsHeroNoBackground]: !n && eC,
                                  [Y.trialMarketingMargin]: eC,
                                  [Y.settingsHeroBogoHeight]: !n && ep,
                                  [Y.settingsHeroBogoMarginFullscreen]: n && ep,
                                  [Y.noTopPaddingOverride]: null != ec
                              }),
                              entrypoint: r
                          })
                      }),
                (0, s.jsxs)('div', {
                    className: Y.promoBannerContainer,
                    children: [(0, s.jsx)(h.Z, { isFullScreen: n }), n && eT && (0, s.jsx)(x.Z, { localizedPricingPromo: eE })]
                }),
                eS && r === W.EZ.UserSettings && (0, s.jsx)(P.d, { className: Y.nitroweenGiftCard }),
                eM,
                (0, s.jsx)($, {
                    isFullscreen: n,
                    inOfferExperience: eC,
                    setIsAllPerksVisible: eR,
                    whatsNewV2Enabled: L,
                    BestOfNitroV2Enabled: D,
                    setIsWhatsNewBoxVisible: en,
                    setIsBestOfNitroVisible: ea,
                    isWhatsNewBoxVisible: et,
                    isBestOfNitroVisible: es,
                    hasRenderedOnce: eo
                }),
                !L && !D && (0, s.jsx)(X, { isFullscreen: n }),
                (0, s.jsxs)('div', {
                    className: Y.planComparisonTableContainer,
                    children: [
                        (0, s.jsx)(y.Z, {
                            className: Y.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)('img', {
                                          src: Q,
                                          className: Y.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: o.Z.Messages.IMAGE
                                      }),
                                      (0, s.jsx)('img', {
                                          src: q,
                                          className: Y.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: o.Z.Messages.IMAGE
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, s.jsx)('div', { className: n ? Y.footerSpacingFullscreen : Y.footerSpacing }),
                (0, s.jsx)(w.Z, {
                    isVisible: !j && !V && !et && !es && eo,
                    isFullscreen: n,
                    subscriptionTier: eu
                }),
                (0, s.jsx)(c.$, {
                    onChange: (e) => {
                        e && !er && (m.default.track(K.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: ef }), ei(!0));
                    },
                    children: (0, s.jsx)('div', { className: Y.bottomOfPageVisibilitySensor })
                }),
                (0, s.jsx)('img', {
                    src: z,
                    className: Y.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: o.Z.Messages.IMAGE
                })
            ]
        });
    return n
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(d.AdvancedScrollerAuto, {
                      className: Y.scroller,
                      ref: U,
                      children: eh
                  }),
                  (0, s.jsx)(F.Z, {
                      previousComponent: H.MQ.MARKETING,
                      isAllPerksVisible: eI,
                      setIsAllPerksVisible: eR,
                      isFullScreen: n
                  })
              ]
          })
        : eh;
};
