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
    E = n(100527),
    u = n(906732),
    T = n(433811),
    I = n(214852),
    R = n(78839),
    g = n(626135),
    N = n(74538),
    m = n(140465),
    C = n(184508),
    f = n(67645),
    p = n(599659),
    A = n(257944),
    M = n(91802),
    S = n(104494),
    h = n(639119),
    x = n(8647),
    b = n(568126),
    O = n(605289),
    P = n(248042),
    v = n(218390),
    L = n(823188),
    Z = n(241158),
    D = n(135785),
    B = n(498765),
    U = n(635921),
    j = n(177839),
    G = n(794484),
    w = n(392521),
    y = n(349803),
    H = n(179984),
    k = n(409100),
    F = n(391110),
    V = n(71363),
    W = n(781800),
    K = n(474936),
    Y = n(981631),
    z = n(445615),
    Q = n(865215),
    X = n(735035),
    J = n(786362);
let q = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === K.p9.TIER_2 && t) ? null : (0, s.jsx)(j.Z, { className: t ? z.perkCardsContainerSpacingFullscreen : z.perkCardsContainerSpacingSettings });
    },
    $ = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, s.jsx)(B.Z, { lifted: !t && n }) : null;
    },
    ee = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, whatsNewV2Enabled: l, BestOfNitroV2Enabled: o, setIsWhatsNewBoxVisible: d, setIsBestOfNitroVisible: _, isWhatsNewBoxVisible: E, isBestOfNitroVisible: u, hasRenderedOnce: T } = e,
            I = a.useRef(0),
            R = a.useRef(0),
            N = a.useRef(0),
            m = a.useRef(0);
        return (a.useEffect(() => {
            E ? (I.current = Date.now()) : 0 !== I.current && ((R.current = R.current + Date.now() - I.current), (I.current = 0));
        }, [E]),
        a.useEffect(() => {
            u ? (N.current = Date.now()) : 0 !== N.current && ((m.current = m.current + Date.now() - N.current), (N.current = 0));
        }, [u]),
        a.useEffect(
            () => () => {
                0 !== I.current && (R.current = R.current + (Date.now() - I.current)),
                    0 !== N.current && (m.current = m.current + (Date.now() - N.current)),
                    0 !== R.current &&
                        g.default.track(Y.rMx.PREMIUM_WHATS_NEW_VIEW_TIME, {
                            view_time: R.current,
                            is_v2: l
                        }),
                    0 !== m.current &&
                        g.default.track(Y.rMx.PREMIUM_BEST_OF_VIEW_TIME, {
                            view_time: m.current,
                            is_v2: l
                        });
            },
            []
        ),
        t)
            ? (0, s.jsxs)('div', {
                  className: i()(z.whatsNewSectionBackground, {
                      [z.whatsNewSectionBackgroundV2]: l || o,
                      [z.whatsNewSectionBackgroundNoGap]: l && o
                  }),
                  children: [
                      !l &&
                          (0, s.jsx)(G.Z, {
                              variant: F.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l &&
                          (0, s.jsx)(c.$, {
                              onChange: (e) => d(e),
                              threshold: 0,
                              active: !0,
                              children: (0, s.jsx)(Z.Z, { shouldLoadVideo: T })
                          }),
                      o &&
                          (0, s.jsx)(c.$, {
                              onChange: (e) => _(e),
                              threshold: 0,
                              active: !0,
                              children: (0, s.jsx)(Z.Z, {
                                  isBestOfNitro: !0,
                                  shouldLoadVideo: T
                              })
                          }),
                      !o &&
                          (0, s.jsx)(G.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, s.jsx)(W.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: F.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, s.jsx)(w.ZP, {
                              className: z.pdSparklesTop,
                              variant: w.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, s.jsx)(w.ZP, {
                              className: z.pdSparklesBottom,
                              variant: w.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: r } = e;
    (0, I.z)(T.X);
    let Z = (0, A.z7)('PremiumMarketingHome'),
        B = (0, f.g)('PremiumMarketingHome'),
        j = (0, C.tY)('PremiumMarketingHome'),
        G = a.useRef(null),
        [w, W] = a.useState(!1),
        [et, en] = a.useState(!1),
        [es, ea] = a.useState(!1),
        [er, ei] = a.useState(!1),
        [el, eo] = a.useState(!1),
        [ec, ed] = a.useState(!1),
        e_ = (0, o.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        eE = null != e_ ? (0, N.Af)(e_) : null,
        eu = null != eE ? N.ZP.getSkuIdForPlan(eE.planId) : null,
        eT = null !== eu && eu !== K.Si.TIER_2 ? K.Si.TIER_2 : null,
        eI = (0, M.n)(),
        eR = null != eI,
        [eg, eN] = a.useState(!1),
        em = (0, S.Ng)(),
        eC = (0, h.N)(),
        ef = null == eC ? void 0 : null === (t = eC.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        ep = (0, m.Nx)(),
        eA = (0, P.Vi)(),
        { analyticsLocations: eM } = (0, u.ZP)(E.Z.PREMIUM_MARKETING),
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
            ed(!0);
        }, []);
    let { enabled: eh } = p.O.useExperiment({ location: 'PremiumMarketingHome' }, { autoTrackExposure: !1 }),
        ex = (0, s.jsx)('div', {
            className: i()({
                [z.premiumTierCardsContainerSettings]: !n,
                [z.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, s.jsx)(c.$, {
                onChange: (e) => en(e),
                threshold: 0.1,
                active: !0,
                children: (0, s.jsx)(L.ZP, {
                    variant: j ? (n ? L.NN.TAGLINE_XP_COPY_HOME : L.NN.TAGLINE_XP_COPY_SETTINGS) : L.NN.DEFAULT,
                    showWumpus: !j,
                    tier0CTAButton:
                        ef === K.Si.TIER_2 || eA || null != em
                            ? (0, s.jsx)(k.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: K.Si.TIER_0,
                                  className: z.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: z.buttonShine
                              })
                            : (0, s.jsx)(k.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: K.Si.TIER_0,
                                  className: z.marginTopForButtons,
                                  buttonShineClassName: z.buttonShine
                              }),
                    tier2CTAButton:
                        ef === K.Si.TIER_0
                            ? (0, s.jsx)(k.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: K.Si.TIER_2,
                                  className: z.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: z.buttonShine
                              })
                            : (0, s.jsx)(k.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: K.Si.TIER_2,
                                  className: z.marginTopForButtons,
                                  isEligibleForBogoPromotion: eA,
                                  buttonShineClassName: z.buttonShine
                              })
                })
            })
        }),
        eb = eh && r === K.EZ.UserSettings,
        eO = (0, s.jsxs)('div', {
            className: i()(z.container, { [z.settingsContainer]: !n }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, s.jsx)(D.Z, {
                    premiumSubscription: e_,
                    className: i()(n ? z.fullscreenExistingSubscriberSpacing : z.existingSubscriberSpacing, { [z.zIndex1]: ep }),
                    isFullscreen: n
                }),
                (0, s.jsx)($, {
                    isFullscreen: n,
                    inOfferExperience: ep
                }),
                !n && eR
                    ? (0, s.jsx)(O.Z, {
                          localizedPricingPromo: eI,
                          smallGap: !0
                      })
                    : (0, s.jsx)(c.$, {
                          onChange: (e) => W(e),
                          threshold: 0,
                          active: !0,
                          children: (0, s.jsx)(U.Z, {
                              subscriptionTier: eT,
                              isFullscreen: n || ep,
                              className: i()({
                                  [z.fullscreenHero]: n,
                                  [z.settingsHeroNoBackground]: !n && ep,
                                  [z.trialMarketingMargin]: ep,
                                  [z.settingsHeroBogoHeight]: !n && eA,
                                  [z.settingsHeroBogoMarginFullscreen]: n && eA,
                                  [z.noTopPaddingOverride]: null != e_
                              }),
                              entrypoint: r
                          })
                      }),
                (0, s.jsxs)('div', {
                    className: z.promoBannerContainer,
                    children: [(0, s.jsx)(x.Z, { isFullScreen: n }), n && eR && (0, s.jsx)(b.Z, { localizedPricingPromo: eI })]
                }),
                ex,
                eb && (0, s.jsx)(v.d, { className: z.nitroweenGiftCard }),
                (0, s.jsx)(ee, {
                    isFullscreen: n,
                    inOfferExperience: ep,
                    setIsAllPerksVisible: eN,
                    whatsNewV2Enabled: Z,
                    BestOfNitroV2Enabled: B,
                    setIsWhatsNewBoxVisible: ea,
                    setIsBestOfNitroVisible: ei,
                    isWhatsNewBoxVisible: es,
                    isBestOfNitroVisible: er,
                    hasRenderedOnce: ec
                }),
                !Z && !B && (0, s.jsx)(q, { isFullscreen: n }),
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
                                          src: X,
                                          className: z.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: l.Z.Messages.IMAGE
                                      }),
                                      (0, s.jsx)('img', {
                                          src: J,
                                          className: z.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: l.Z.Messages.IMAGE
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, s.jsx)('div', { className: n ? z.footerSpacingFullscreen : z.footerSpacing }),
                (0, s.jsx)(y.Z, {
                    isVisible: !w && !et && !es && !er && ec,
                    isFullscreen: n,
                    subscriptionTier: eT
                }),
                (0, s.jsx)(c.$, {
                    onChange: (e) => {
                        e && !el && (g.default.track(Y.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eM }), eo(!0));
                    },
                    children: (0, s.jsx)('div', { className: z.bottomOfPageVisibilitySensor })
                }),
                (0, s.jsx)('img', {
                    src: Q,
                    className: z.bottomIllustration,
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
                      className: z.scroller,
                      ref: G,
                      children: eO
                  }),
                  (0, s.jsx)(V.Z, {
                      previousComponent: F.MQ.MARKETING,
                      isAllPerksVisible: eg,
                      setIsAllPerksVisible: eN,
                      isFullScreen: n
                  })
              ]
          })
        : eO;
};
