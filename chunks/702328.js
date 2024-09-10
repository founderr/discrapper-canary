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
    g = n(626135),
    N = n(74538),
    C = n(140465),
    m = n(257944),
    p = n(91802),
    A = n(104494),
    f = n(639119),
    h = n(8647),
    M = n(568126),
    S = n(605289),
    x = n(248042),
    b = n(823188),
    O = n(241158),
    P = n(135785),
    v = n(498765),
    L = n(635921),
    Z = n(177839),
    D = n(794484),
    U = n(392521),
    B = n(349803),
    j = n(179984),
    G = n(409100),
    w = n(391110),
    y = n(71363),
    H = n(781800),
    k = n(474936),
    F = n(981631),
    V = n(445615),
    W = n(865215),
    K = n(735035),
    Y = n(786362);
let z = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === k.p9.TIER_2 && t) ? null : (0, s.jsx)(Z.Z, { className: t ? V.perkCardsContainerSpacingFullscreen : V.perkCardsContainerSpacingSettings });
    },
    Q = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, s.jsx)(v.Z, { lifted: !t && n }) : null;
    },
    q = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: a, whatsNewV2Enabled: r, setIsWhatsNewBoxVisible: l, hasRenderedOnce: o } = e;
        return t
            ? (0, s.jsxs)('div', {
                  className: i()(V.whatsNewSectionBackground, { [V.whatsNewSectionBackgroundV2]: r }),
                  children: [
                      !r &&
                          (0, s.jsx)(D.Z, {
                              variant: w.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      r &&
                          (0, s.jsx)(c.$, {
                              onChange: (e) => l(e),
                              threshold: 0,
                              active: !0,
                              children: (0, s.jsx)(O.Z, { shouldLoadVideo: o })
                          }),
                      (0, s.jsx)(D.Z, {
                          isFullScreen: t,
                          showAllPerksButton: t
                              ? (0, s.jsx)(H.Z, {
                                    setIsAllPerksVisible: a,
                                    previousComponent: w.MQ.MARKETING
                                })
                              : void 0
                      }),
                      n &&
                          !r &&
                          (0, s.jsx)(U.ZP, {
                              className: V.pdSparklesTop,
                              variant: U.u0.TOP
                          }),
                      n &&
                          !r &&
                          (0, s.jsx)(U.ZP, {
                              className: V.pdSparklesBottom,
                              variant: U.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: r } = e;
    (0, I.z)(T.X);
    let O = (0, m.z7)('PremiumMarketingHome'),
        v = a.useRef(null),
        [Z, D] = a.useState(!1),
        [U, H] = a.useState(!1),
        [X, J] = a.useState(!1),
        [$, ee] = a.useState(!1),
        [et, en] = a.useState(!1),
        es = (0, o.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        ea = null != es ? (0, N.Af)(es) : null,
        er = null != ea ? N.ZP.getSkuIdForPlan(ea.planId) : null,
        ei = null !== er && er !== k.Si.TIER_2 ? k.Si.TIER_2 : null,
        el = (0, p.n)(),
        eo = null != el,
        [ec, ed] = a.useState(!1),
        e_ = (0, A.Ng)(),
        eu = (0, f.N)(),
        eE = null == eu ? void 0 : null === (t = eu.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        eT = (0, C.Nx)(),
        eI = (0, x.Vi)(),
        { analyticsLocations: eR } = (0, E.ZP)(u.Z.PREMIUM_MARKETING),
        eg = 'PremiumMarketingHome';
    (0, _.j)({
        location: eg + ' auto on',
        autoTrackExposure: !0
    }),
        (0, _.j)({
            location: eg + ' auto off',
            autoTrackExposure: !1
        }),
        a.useEffect(() => {
            en(!0);
        }, []);
    let eN = (0, s.jsx)('div', {
            className: i()({
                [V.premiumTierCardsContainerSettings]: !n,
                [V.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, s.jsx)(c.$, {
                onChange: (e) => H(e),
                threshold: 0.1,
                active: !0,
                children: (0, s.jsx)(b.ZP, {
                    showWumpus: !0,
                    tier0CTAButton:
                        eE === k.Si.TIER_2 || eI || null != e_
                            ? (0, s.jsx)(G.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: k.Si.TIER_0,
                                  className: V.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: V.buttonShine
                              })
                            : (0, s.jsx)(G.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: k.Si.TIER_0,
                                  className: V.marginTopForButtons,
                                  buttonShineClassName: V.buttonShine
                              }),
                    tier2CTAButton:
                        eE === k.Si.TIER_0
                            ? (0, s.jsx)(G.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: k.Si.TIER_2,
                                  className: V.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: V.buttonShine
                              })
                            : (0, s.jsx)(G.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: k.Si.TIER_2,
                                  className: V.marginTopForButtons,
                                  isEligibleForBogoPromotion: eI,
                                  buttonShineClassName: V.buttonShine
                              })
                })
            })
        }),
        eC = (0, s.jsxs)('div', {
            className: i()(V.container, { [V.settingsContainer]: !n }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, s.jsx)(P.Z, {
                    premiumSubscription: es,
                    className: i()(n ? V.fullscreenExistingSubscriberSpacing : V.existingSubscriberSpacing, { [V.zIndex1]: eT }),
                    isFullscreen: n
                }),
                (0, s.jsx)(Q, {
                    isFullscreen: n,
                    inOfferExperience: eT
                }),
                !n && eo
                    ? (0, s.jsx)(S.Z, {
                          localizedPricingPromo: el,
                          smallGap: !0
                      })
                    : (0, s.jsx)(c.$, {
                          onChange: (e) => D(e),
                          threshold: 0,
                          active: !0,
                          children: (0, s.jsx)(L.Z, {
                              subscriptionTier: ei,
                              isFullscreen: n || eT,
                              className: i()({
                                  [V.fullscreenHero]: n,
                                  [V.settingsHeroNoBackground]: !n && eT,
                                  [V.trialMarketingMargin]: eT,
                                  [V.settingsHeroBogoHeight]: !n && eI,
                                  [V.settingsHeroBogoMarginFullscreen]: n && eI,
                                  [V.noTopPaddingOverride]: null != es
                              }),
                              entrypoint: r
                          })
                      }),
                (0, s.jsxs)('div', {
                    className: V.promoBannerContainer,
                    children: [(0, s.jsx)(h.Z, { isFullScreen: n }), n && eo && (0, s.jsx)(M.Z, { localizedPricingPromo: el })]
                }),
                eN,
                (0, s.jsx)(q, {
                    isFullscreen: n,
                    inOfferExperience: eT,
                    setIsAllPerksVisible: ed,
                    whatsNewV2Enabled: O,
                    setIsWhatsNewBoxVisible: J,
                    hasRenderedOnce: et
                }),
                !O && (0, s.jsx)(z, { isFullscreen: n }),
                (0, s.jsxs)('div', {
                    className: V.planComparisonTableContainer,
                    children: [
                        (0, s.jsx)(j.Z, {
                            className: V.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)('img', {
                                          src: K,
                                          className: V.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: l.Z.Messages.IMAGE
                                      }),
                                      (0, s.jsx)('img', {
                                          src: Y,
                                          className: V.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: l.Z.Messages.IMAGE
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, s.jsx)('div', { className: n ? V.footerSpacingFullscreen : V.footerSpacing }),
                (0, s.jsx)(B.Z, {
                    isVisible: !Z && !U && !X && et,
                    isFullscreen: n,
                    subscriptionTier: ei
                }),
                (0, s.jsx)(c.$, {
                    onChange: (e) => {
                        e && !$ && (g.default.track(F.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eR }), ee(!0));
                    },
                    children: (0, s.jsx)('div', { className: V.bottomOfPageVisibilitySensor })
                }),
                (0, s.jsx)('img', {
                    src: W,
                    className: V.bottomIllustration,
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
                      className: V.scroller,
                      ref: v,
                      children: eC
                  }),
                  (0, s.jsx)(y.Z, {
                      previousComponent: w.MQ.MARKETING,
                      isAllPerksVisible: ec,
                      setIsAllPerksVisible: ed,
                      isFullScreen: n
                  })
              ]
          })
        : eC;
};
