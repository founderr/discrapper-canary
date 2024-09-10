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
    C = n(74538),
    N = n(140465),
    m = n(91802),
    p = n(104494),
    A = n(639119),
    f = n(8647),
    M = n(568126),
    h = n(605289),
    S = n(248042),
    x = n(823188),
    O = n(135785),
    b = n(498765),
    P = n(635921),
    v = n(177839),
    L = n(794484),
    Z = n(392521),
    D = n(349803),
    U = n(179984),
    B = n(409100),
    j = n(391110),
    G = n(71363),
    y = n(781800),
    w = n(474936),
    H = n(981631),
    k = n(445615),
    F = n(865215),
    V = n(735035),
    W = n(786362);
let K = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === w.p9.TIER_2 && t) ? null : (0, s.jsx)(v.Z, { className: t ? k.perkCardsContainerSpacingFullscreen : k.perkCardsContainerSpacingSettings });
    },
    Y = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, s.jsx)(b.Z, { lifted: !t && n }) : null;
    },
    z = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: a } = e;
        return t
            ? (0, s.jsxs)('div', {
                  className: i()(k.whatsNewSectionBackground),
                  children: [
                      (0, s.jsx)(L.Z, {
                          variant: j.R0.WHATS_NEW,
                          isFullScreen: t
                      }),
                      (0, s.jsx)(L.Z, {
                          isFullScreen: t,
                          showAllPerksButton: t
                              ? (0, s.jsx)(y.Z, {
                                    setIsAllPerksVisible: a,
                                    previousComponent: j.MQ.MARKETING
                                })
                              : void 0
                      }),
                      n
                          ? (0, s.jsx)(Z.ZP, {
                                className: k.pdSparklesTop,
                                variant: Z.u0.TOP
                            })
                          : null,
                      n
                          ? (0, s.jsx)(Z.ZP, {
                                className: k.pdSparklesBottom,
                                variant: Z.u0.BOTTOM
                            })
                          : null
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: r } = e;
    (0, I.z)(T.X);
    let b = a.useRef(null),
        [v, L] = a.useState(!1),
        [Z, y] = a.useState(!1),
        [Q, q] = a.useState(!1),
        [J, X] = a.useState(!1),
        $ = (0, o.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        ee = null != $ ? (0, C.Af)($) : null,
        et = null != ee ? C.ZP.getSkuIdForPlan(ee.planId) : null,
        en = null !== et && et !== w.Si.TIER_2 ? w.Si.TIER_2 : null,
        es = (0, m.n)(),
        ea = null != es,
        [er, ei] = a.useState(!1),
        el = (0, p.Ng)(),
        eo = (0, A.N)(),
        ec = null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        ed = (0, N.Nx)(),
        e_ = (0, S.Vi)(),
        { analyticsLocations: eu } = (0, E.ZP)(u.Z.PREMIUM_MARKETING),
        eE = 'PremiumMarketingHome';
    (0, _.j)({
        location: eE + ' auto on',
        autoTrackExposure: !0
    }),
        (0, _.j)({
            location: eE + ' auto off',
            autoTrackExposure: !1
        }),
        a.useEffect(() => {
            X(!0);
        }, []);
    let eT = (0, s.jsx)('div', {
            className: i()({
                [k.premiumTierCardsContainerSettings]: !n,
                [k.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, s.jsx)(c.$, {
                onChange: (e) => y(e),
                threshold: 0.1,
                active: !0,
                children: (0, s.jsx)(x.ZP, {
                    showWumpus: !0,
                    tier0CTAButton:
                        ec === w.Si.TIER_2 || e_ || null != el
                            ? (0, s.jsx)(B.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: w.Si.TIER_0,
                                  className: k.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: k.buttonShine
                              })
                            : (0, s.jsx)(B.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: w.Si.TIER_0,
                                  className: k.marginTopForButtons,
                                  buttonShineClassName: k.buttonShine
                              }),
                    tier2CTAButton:
                        ec === w.Si.TIER_0
                            ? (0, s.jsx)(B.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: w.Si.TIER_2,
                                  className: k.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: k.buttonShine
                              })
                            : (0, s.jsx)(B.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: w.Si.TIER_2,
                                  className: k.marginTopForButtons,
                                  isEligibleForBogoPromotion: e_,
                                  buttonShineClassName: k.buttonShine
                              })
                })
            })
        }),
        eI = (0, s.jsxs)('div', {
            className: i()(k.container, { [k.settingsContainer]: !n }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, s.jsx)(O.Z, {
                    premiumSubscription: $,
                    className: i()(n ? k.fullscreenExistingSubscriberSpacing : k.existingSubscriberSpacing, { [k.zIndex1]: ed }),
                    isFullscreen: n
                }),
                (0, s.jsx)(Y, {
                    isFullscreen: n,
                    inOfferExperience: ed
                }),
                !n && ea
                    ? (0, s.jsx)(h.Z, {
                          localizedPricingPromo: es,
                          smallGap: !0
                      })
                    : (0, s.jsx)(c.$, {
                          onChange: (e) => L(e),
                          threshold: 0,
                          active: !0,
                          children: (0, s.jsx)(P.Z, {
                              subscriptionTier: en,
                              isFullscreen: n || ed,
                              className: i()({
                                  [k.fullscreenHero]: n,
                                  [k.settingsHeroNoBackground]: !n && ed,
                                  [k.trialMarketingMargin]: ed,
                                  [k.settingsHeroBogoHeight]: !n && e_,
                                  [k.settingsHeroBogoMarginFullscreen]: n && e_,
                                  [k.noTopPaddingOverride]: null != $
                              }),
                              entrypoint: r
                          })
                      }),
                (0, s.jsxs)('div', {
                    className: k.promoBannerContainer,
                    children: [(0, s.jsx)(f.Z, { isFullScreen: n }), n && ea && (0, s.jsx)(M.Z, { localizedPricingPromo: es })]
                }),
                eT,
                (0, s.jsx)(z, {
                    isFullscreen: n,
                    inOfferExperience: ed,
                    setIsAllPerksVisible: ei
                }),
                (0, s.jsx)(K, { isFullscreen: n }),
                (0, s.jsxs)('div', {
                    className: k.planComparisonTableContainer,
                    children: [
                        (0, s.jsx)(U.Z, {
                            className: k.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)('img', {
                                          src: V,
                                          className: k.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: l.Z.Messages.IMAGE
                                      }),
                                      (0, s.jsx)('img', {
                                          src: W,
                                          className: k.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: l.Z.Messages.IMAGE
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, s.jsx)('div', { className: n ? k.footerSpacingFullscreen : k.footerSpacing }),
                (0, s.jsx)(D.Z, {
                    isVisible: !v && !Z && J,
                    isFullscreen: n,
                    subscriptionTier: en
                }),
                (0, s.jsx)(c.$, {
                    onChange: (e) => {
                        e && !Q && (g.default.track(H.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eu }), q(!0));
                    },
                    children: (0, s.jsx)('div', { className: k.bottomOfPageVisibilitySensor })
                }),
                (0, s.jsx)('img', {
                    src: F,
                    className: k.bottomIllustration,
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
                      className: k.scroller,
                      ref: b,
                      children: eI
                  }),
                  (0, s.jsx)(G.Z, {
                      previousComponent: j.MQ.MARKETING,
                      isAllPerksVisible: er,
                      setIsAllPerksVisible: ei,
                      isFullScreen: n
                  })
              ]
          })
        : eI;
};
