n(47120);
var s = n(200651),
    a = n(192379),
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
    h = n(906461),
    x = n(8647),
    b = n(568126),
    O = n(605289),
    P = n(248042),
    v = n(218390),
    L = n(823188),
    Z = n(241158),
    D = n(135785),
    U = n(498765),
    B = n(635921),
    j = n(177839),
    G = n(794484),
    w = n(392521),
    H = n(349803),
    y = n(179984),
    k = n(409100),
    F = n(391110),
    V = n(71363),
    W = n(781800),
    K = n(474936),
    Y = n(981631),
    z = n(689938),
    Q = n(445615),
    J = n(865215),
    X = n(735035),
    q = n(786362);
let $ = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === K.p9.TIER_2 && t) ? null : (0, s.jsx)(j.Z, { className: t ? Q.perkCardsContainerSpacingFullscreen : Q.perkCardsContainerSpacingSettings });
    },
    ee = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, s.jsx)(U.Z, { lifted: !t && n }) : null;
    },
    et = (e) => {
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
                        R.default.track(Y.rMx.PREMIUM_WHATS_NEW_VIEW_TIME, {
                            view_time: g.current,
                            is_v2: l
                        }),
                    0 !== m.current &&
                        R.default.track(Y.rMx.PREMIUM_BEST_OF_VIEW_TIME, {
                            view_time: m.current,
                            is_v2: l
                        });
            },
            []
        ),
        t)
            ? (0, s.jsxs)('div', {
                  className: i()(Q.whatsNewSectionBackground, {
                      [Q.whatsNewSectionBackgroundV2]: l || c,
                      [Q.whatsNewSectionBackgroundNoGap]: l && c
                  }),
                  children: [
                      !l &&
                          (0, s.jsx)(G.Z, {
                              variant: F.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l &&
                          (0, s.jsx)(o.$, {
                              onChange: (e) => _(e),
                              threshold: 0,
                              active: !0,
                              children: (0, s.jsx)(Z.Z, { shouldLoadVideo: T })
                          }),
                      c &&
                          (0, s.jsx)(o.$, {
                              onChange: (e) => d(e),
                              threshold: 0,
                              active: !0,
                              children: (0, s.jsx)(Z.Z, {
                                  isBestOfNitro: !0,
                                  shouldLoadVideo: T
                              })
                          }),
                      !c &&
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
                              className: Q.pdSparklesTop,
                              variant: w.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, s.jsx)(w.ZP, {
                              className: Q.pdSparklesBottom,
                              variant: w.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: r } = e;
    (0, T.z)(u.X);
    let Z = (0, f.z7)('PremiumMarketingHome'),
        U = (0, C.g)('PremiumMarketingHome'),
        j = (0, m.tY)('PremiumMarketingHome'),
        G = a.useRef(null),
        [w, W] = a.useState(!1),
        [en, es] = a.useState(!1),
        [ea, er] = a.useState(!1),
        [ei, el] = a.useState(!1),
        [eo, ec] = a.useState(!1),
        [e_, ed] = a.useState(!1),
        eE = (0, l.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        eu = null != eE ? (0, g.Af)(eE) : null,
        eT = null != eu ? g.ZP.getSkuIdForPlan(eu.planId) : null,
        eI = null !== eT && eT !== K.Si.TIER_2 ? K.Si.TIER_2 : null,
        eR = (0, p.n)(),
        eg = null != eR,
        [eN, em] = a.useState(!1),
        eC = (0, M.Ng)(),
        eA = (0, S.N)(),
        ef = null == eA ? void 0 : null === (t = eA.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        ep = (0, N.Nx)(),
        eM = (0, P.Vi)(),
        { analyticsLocations: eS } = (0, E.ZP)(d.Z.PREMIUM_MARKETING),
        eh = 'PremiumMarketingHome';
    (0, _.j)({
        location: eh + ' auto on',
        autoTrackExposure: !0
    }),
        (0, _.j)({
            location: eh + ' auto off',
            autoTrackExposure: !1
        }),
        a.useEffect(() => {
            ed(!0);
        }, []);
    let { enabled: ex } = A.O.useExperiment({ location: 'PremiumMarketingHome' }, { autoTrackExposure: !1 }),
        eb = (0, s.jsx)('div', {
            className: i()({
                [Q.premiumTierCardsContainerSettings]: !n,
                [Q.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, s.jsx)(o.$, {
                onChange: (e) => es(e),
                threshold: 0.1,
                active: !0,
                children: (0, s.jsx)(L.ZP, {
                    variant: j ? (n ? L.NN.TAGLINE_XP_COPY_HOME : L.NN.TAGLINE_XP_COPY_SETTINGS) : L.NN.DEFAULT,
                    showWumpus: !j,
                    tier0CTAButton:
                        ef === K.Si.TIER_2 || eM || null != eC
                            ? (0, s.jsx)(k.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: K.Si.TIER_0,
                                  className: Q.marginTopForButtons,
                                  look: c.ButtonLooks.OUTLINED,
                                  color: c.ButtonColors.WHITE,
                                  buttonShineClassName: Q.buttonShine
                              })
                            : (0, s.jsx)(k.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: K.Si.TIER_0,
                                  className: Q.marginTopForButtons,
                                  buttonShineClassName: Q.buttonShine
                              }),
                    tier2CTAButton:
                        ef === K.Si.TIER_0
                            ? (0, s.jsx)(k.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: K.Si.TIER_2,
                                  className: Q.marginTopForButtons,
                                  look: c.ButtonLooks.OUTLINED,
                                  color: c.ButtonColors.WHITE,
                                  buttonShineClassName: Q.buttonShine
                              })
                            : (0, s.jsx)(k.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: K.Si.TIER_2,
                                  className: Q.marginTopForButtons,
                                  isEligibleForBogoPromotion: eM,
                                  buttonShineClassName: Q.buttonShine
                              })
                })
            })
        }),
        eO = ex && r === K.EZ.UserSettings,
        eP = (0, s.jsxs)('div', {
            className: i()(Q.container, { [Q.settingsContainer]: !n }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, s.jsx)(D.Z, {
                    premiumSubscription: eE,
                    className: i()(n ? Q.fullscreenExistingSubscriberSpacing : Q.existingSubscriberSpacing, { [Q.zIndex1]: ep }),
                    isFullscreen: n
                }),
                (0, s.jsx)(ee, {
                    isFullscreen: n,
                    inOfferExperience: ep
                }),
                !n && eg
                    ? (0, s.jsx)(O.Z, {
                          localizedPricingPromo: eR,
                          smallGap: !0
                      })
                    : (0, s.jsx)(o.$, {
                          onChange: (e) => W(e),
                          threshold: 0,
                          active: !0,
                          children: (0, s.jsx)(B.Z, {
                              subscriptionTier: eI,
                              isFullscreen: n || ep,
                              className: i()({
                                  [Q.fullscreenHero]: n,
                                  [Q.settingsHeroNoBackground]: !n && ep,
                                  [Q.trialMarketingMargin]: ep,
                                  [Q.settingsHeroBogoHeight]: !n && eM,
                                  [Q.settingsHeroBogoMarginFullscreen]: n && eM,
                                  [Q.noTopPaddingOverride]: null != eE
                              }),
                              entrypoint: r
                          })
                      }),
                (0, s.jsxs)('div', {
                    className: Q.promoBannerContainer,
                    children: [(0, s.jsx)(x.Z, { isFullScreen: n }), (0, s.jsx)(h.Z, { isFullScreen: n }), n && eg && (0, s.jsx)(b.Z, { localizedPricingPromo: eR })]
                }),
                eb,
                eO && (0, s.jsx)(v.d, { className: Q.nitroweenGiftCard }),
                (0, s.jsx)(et, {
                    isFullscreen: n,
                    inOfferExperience: ep,
                    setIsAllPerksVisible: em,
                    whatsNewV2Enabled: Z,
                    BestOfNitroV2Enabled: U,
                    setIsWhatsNewBoxVisible: er,
                    setIsBestOfNitroVisible: el,
                    isWhatsNewBoxVisible: ea,
                    isBestOfNitroVisible: ei,
                    hasRenderedOnce: e_
                }),
                !Z && !U && (0, s.jsx)($, { isFullscreen: n }),
                (0, s.jsxs)('div', {
                    className: Q.planComparisonTableContainer,
                    children: [
                        (0, s.jsx)(y.Z, {
                            className: Q.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)('img', {
                                          src: X,
                                          className: Q.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: z.Z.Messages.IMAGE
                                      }),
                                      (0, s.jsx)('img', {
                                          src: q,
                                          className: Q.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: z.Z.Messages.IMAGE
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, s.jsx)('div', { className: n ? Q.footerSpacingFullscreen : Q.footerSpacing }),
                (0, s.jsx)(H.Z, {
                    isVisible: !w && !en && !ea && !ei && e_,
                    isFullscreen: n,
                    subscriptionTier: eI
                }),
                (0, s.jsx)(o.$, {
                    onChange: (e) => {
                        e && !eo && (R.default.track(Y.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eS }), ec(!0));
                    },
                    children: (0, s.jsx)('div', { className: Q.bottomOfPageVisibilitySensor })
                }),
                (0, s.jsx)('img', {
                    src: J,
                    className: Q.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: z.Z.Messages.IMAGE
                })
            ]
        });
    return n
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(c.AdvancedScrollerAuto, {
                      className: Q.scroller,
                      ref: G,
                      children: eP
                  }),
                  (0, s.jsx)(V.Z, {
                      previousComponent: F.MQ.MARKETING,
                      isAllPerksVisible: eN,
                      setIsAllPerksVisible: em,
                      isFullScreen: n
                  })
              ]
          })
        : eP;
};
