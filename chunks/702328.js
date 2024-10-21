n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    _ = n(634894),
    d = n(100527),
    E = n(906732),
    u = n(433811),
    T = n(214852),
    I = n(78839),
    R = n(626135),
    g = n(74538),
    N = n(140465),
    m = n(184508),
    C = n(67645),
    A = n(599659),
    f = n(257944),
    p = n(91802),
    M = n(104494),
    S = n(639119),
    h = n(8647),
    x = n(568126),
    b = n(605289),
    O = n(248042),
    P = n(218390),
    v = n(823188),
    L = n(241158),
    Z = n(135785),
    D = n(498765),
    U = n(635921),
    B = n(177839),
    j = n(794484),
    G = n(392521),
    w = n(349803),
    H = n(179984),
    y = n(409100),
    k = n(391110),
    F = n(71363),
    V = n(781800),
    W = n(474936),
    K = n(981631),
    Y = n(689938),
    z = n(445615),
    Q = n(865215),
    J = n(735035),
    X = n(786362);
let q = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === W.p9.TIER_2 && t) ? null : (0, s.jsx)(B.Z, { className: t ? z.perkCardsContainerSpacingFullscreen : z.perkCardsContainerSpacingSettings });
    },
    $ = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, s.jsx)(D.Z, { lifted: !t && n }) : null;
    },
    ee = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, whatsNewV2Enabled: l, BestOfNitroV2Enabled: c, setIsWhatsNewBoxVisible: _, setIsBestOfNitroVisible: d, isWhatsNewBoxVisible: E, isBestOfNitroVisible: u, hasRenderedOnce: T } = e,
            I = a.useRef(0),
            g = a.useRef(0),
            N = a.useRef(0),
            m = a.useRef(0);
        return (a.useEffect(() => {
            E ? (I.current = Date.now()) : 0 !== I.current && ((g.current = g.current + Date.now() - I.current), (I.current = 0));
        }, [E]),
        a.useEffect(() => {
            u ? (N.current = Date.now()) : 0 !== N.current && ((m.current = m.current + Date.now() - N.current), (N.current = 0));
        }, [u]),
        a.useEffect(
            () => () => {
                0 !== I.current && (g.current = g.current + (Date.now() - I.current)),
                    0 !== N.current && (m.current = m.current + (Date.now() - N.current)),
                    0 !== g.current &&
                        R.default.track(K.rMx.PREMIUM_WHATS_NEW_VIEW_TIME, {
                            view_time: g.current,
                            is_v2: l
                        }),
                    0 !== m.current &&
                        R.default.track(K.rMx.PREMIUM_BEST_OF_VIEW_TIME, {
                            view_time: m.current,
                            is_v2: l
                        });
            },
            []
        ),
        t)
            ? (0, s.jsxs)('div', {
                  className: i()(z.whatsNewSectionBackground, {
                      [z.whatsNewSectionBackgroundV2]: l || c,
                      [z.whatsNewSectionBackgroundNoGap]: l && c
                  }),
                  children: [
                      !l &&
                          (0, s.jsx)(j.Z, {
                              variant: k.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l &&
                          (0, s.jsx)(o.$, {
                              onChange: (e) => _(e),
                              threshold: 0,
                              active: !0,
                              children: (0, s.jsx)(L.Z, { shouldLoadVideo: T })
                          }),
                      c &&
                          (0, s.jsx)(o.$, {
                              onChange: (e) => d(e),
                              threshold: 0,
                              active: !0,
                              children: (0, s.jsx)(L.Z, {
                                  isBestOfNitro: !0,
                                  shouldLoadVideo: T
                              })
                          }),
                      !c &&
                          (0, s.jsx)(j.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, s.jsx)(V.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: k.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, s.jsx)(G.ZP, {
                              className: z.pdSparklesTop,
                              variant: G.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, s.jsx)(G.ZP, {
                              className: z.pdSparklesBottom,
                              variant: G.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: r } = e;
    (0, T.z)(u.X);
    let L = (0, f.z7)('PremiumMarketingHome'),
        D = (0, C.g)('PremiumMarketingHome'),
        B = (0, m.tY)('PremiumMarketingHome'),
        j = a.useRef(null),
        [G, V] = a.useState(!1),
        [et, en] = a.useState(!1),
        [es, ea] = a.useState(!1),
        [er, ei] = a.useState(!1),
        [el, eo] = a.useState(!1),
        [ec, e_] = a.useState(!1),
        ed = (0, l.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        eE = null != ed ? (0, g.Af)(ed) : null,
        eu = null != eE ? g.ZP.getSkuIdForPlan(eE.planId) : null,
        eT = null !== eu && eu !== W.Si.TIER_2 ? W.Si.TIER_2 : null,
        eI = (0, p.n)(),
        eR = null != eI,
        [eg, eN] = a.useState(!1),
        em = (0, M.Ng)(),
        eC = (0, S.N)(),
        eA = null == eC ? void 0 : null === (t = eC.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        ef = (0, N.Nx)(),
        ep = (0, O.Vi)(),
        { analyticsLocations: eM } = (0, E.ZP)(d.Z.PREMIUM_MARKETING),
        eS = 'PremiumMarketingHome';
    (0, _.j)({
        location: eS + ' auto on',
        autoTrackExposure: !0
    }),
        (0, _.j)({
            location: eS + ' auto off',
            autoTrackExposure: !1
        }),
        a.useEffect(() => {
            e_(!0);
        }, []);
    let { enabled: eh } = A.O.useExperiment({ location: 'PremiumMarketingHome' }, { autoTrackExposure: !1 }),
        ex = (0, s.jsx)('div', {
            className: i()({
                [z.premiumTierCardsContainerSettings]: !n,
                [z.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, s.jsx)(o.$, {
                onChange: (e) => en(e),
                threshold: 0.1,
                active: !0,
                children: (0, s.jsx)(v.ZP, {
                    variant: B ? (n ? v.NN.TAGLINE_XP_COPY_HOME : v.NN.TAGLINE_XP_COPY_SETTINGS) : v.NN.DEFAULT,
                    showWumpus: !B,
                    tier0CTAButton:
                        eA === W.Si.TIER_2 || ep || null != em
                            ? (0, s.jsx)(y.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: W.Si.TIER_0,
                                  className: z.marginTopForButtons,
                                  look: c.ButtonLooks.OUTLINED,
                                  color: c.ButtonColors.WHITE,
                                  buttonShineClassName: z.buttonShine
                              })
                            : (0, s.jsx)(y.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: W.Si.TIER_0,
                                  className: z.marginTopForButtons,
                                  buttonShineClassName: z.buttonShine
                              }),
                    tier2CTAButton:
                        eA === W.Si.TIER_0
                            ? (0, s.jsx)(y.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: W.Si.TIER_2,
                                  className: z.marginTopForButtons,
                                  look: c.ButtonLooks.OUTLINED,
                                  color: c.ButtonColors.WHITE,
                                  buttonShineClassName: z.buttonShine
                              })
                            : (0, s.jsx)(y.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: W.Si.TIER_2,
                                  className: z.marginTopForButtons,
                                  isEligibleForBogoPromotion: ep,
                                  buttonShineClassName: z.buttonShine
                              })
                })
            })
        }),
        eb = eh && r === W.EZ.UserSettings,
        eO = (0, s.jsxs)('div', {
            className: i()(z.container, { [z.settingsContainer]: !n }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, s.jsx)(Z.Z, {
                    premiumSubscription: ed,
                    className: i()(n ? z.fullscreenExistingSubscriberSpacing : z.existingSubscriberSpacing, { [z.zIndex1]: ef }),
                    isFullscreen: n
                }),
                (0, s.jsx)($, {
                    isFullscreen: n,
                    inOfferExperience: ef
                }),
                !n && eR
                    ? (0, s.jsx)(b.Z, {
                          localizedPricingPromo: eI,
                          smallGap: !0
                      })
                    : (0, s.jsx)(o.$, {
                          onChange: (e) => V(e),
                          threshold: 0,
                          active: !0,
                          children: (0, s.jsx)(U.Z, {
                              subscriptionTier: eT,
                              isFullscreen: n || ef,
                              className: i()({
                                  [z.fullscreenHero]: n,
                                  [z.settingsHeroNoBackground]: !n && ef,
                                  [z.trialMarketingMargin]: ef,
                                  [z.settingsHeroBogoHeight]: !n && ep,
                                  [z.settingsHeroBogoMarginFullscreen]: n && ep,
                                  [z.noTopPaddingOverride]: null != ed
                              }),
                              entrypoint: r
                          })
                      }),
                (0, s.jsxs)('div', {
                    className: z.promoBannerContainer,
                    children: [(0, s.jsx)(h.Z, { isFullScreen: n }), n && eR && (0, s.jsx)(x.Z, { localizedPricingPromo: eI })]
                }),
                ex,
                eb && (0, s.jsx)(P.d, { className: z.nitroweenGiftCard }),
                (0, s.jsx)(ee, {
                    isFullscreen: n,
                    inOfferExperience: ef,
                    setIsAllPerksVisible: eN,
                    whatsNewV2Enabled: L,
                    BestOfNitroV2Enabled: D,
                    setIsWhatsNewBoxVisible: ea,
                    setIsBestOfNitroVisible: ei,
                    isWhatsNewBoxVisible: es,
                    isBestOfNitroVisible: er,
                    hasRenderedOnce: ec
                }),
                !L && !D && (0, s.jsx)(q, { isFullscreen: n }),
                (0, s.jsxs)('div', {
                    className: z.planComparisonTableContainer,
                    children: [
                        (0, s.jsx)(H.Z, {
                            className: z.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)('img', {
                                          src: J,
                                          className: z.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: Y.Z.Messages.IMAGE
                                      }),
                                      (0, s.jsx)('img', {
                                          src: X,
                                          className: z.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: Y.Z.Messages.IMAGE
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, s.jsx)('div', { className: n ? z.footerSpacingFullscreen : z.footerSpacing }),
                (0, s.jsx)(w.Z, {
                    isVisible: !G && !et && !es && !er && ec,
                    isFullscreen: n,
                    subscriptionTier: eT
                }),
                (0, s.jsx)(o.$, {
                    onChange: (e) => {
                        e && !el && (R.default.track(K.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eM }), eo(!0));
                    },
                    children: (0, s.jsx)('div', { className: z.bottomOfPageVisibilitySensor })
                }),
                (0, s.jsx)('img', {
                    src: Q,
                    className: z.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: Y.Z.Messages.IMAGE
                })
            ]
        });
    return n
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(c.AdvancedScrollerAuto, {
                      className: z.scroller,
                      ref: j,
                      children: eO
                  }),
                  (0, s.jsx)(F.Z, {
                      previousComponent: k.MQ.MARKETING,
                      isAllPerksVisible: eg,
                      setIsAllPerksVisible: eN,
                      isFullScreen: n
                  })
              ]
          })
        : eO;
};
