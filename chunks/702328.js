n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(634894),
    _ = n(100527),
    u = n(906732),
    E = n(433811),
    T = n(214852),
    I = n(78839),
    R = n(626135),
    C = n(74538),
    g = n(140465),
    p = n(91802),
    N = n(104494),
    A = n(639119),
    m = n(8647),
    f = n(568126),
    S = n(605289),
    h = n(248042),
    M = n(823188),
    x = n(135785),
    O = n(498765),
    b = n(635921),
    P = n(177839),
    L = n(794484),
    v = n(392521),
    Z = n(349803),
    D = n(179984),
    B = n(409100),
    j = n(391110),
    U = n(71363),
    G = n(781800),
    y = n(474936),
    k = n(981631),
    H = n(556613),
    w = n(865215),
    F = n(735035),
    V = n(786362);
let W = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === y.p9.TIER_2 && t) ? null : (0, s.jsx)(P.Z, { className: t ? H.perkCardsContainerSpacingFullscreen : H.perkCardsContainerSpacingSettings });
    },
    K = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, s.jsx)(O.Z, { lifted: !t && n }) : null;
    },
    Y = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: a } = e;
        return t
            ? (0, s.jsxs)('div', {
                  className: i()(H.whatsNewSectionBackground),
                  children: [
                      (0, s.jsx)(L.Z, {
                          variant: j.R0.WHATS_NEW,
                          isFullScreen: t
                      }),
                      (0, s.jsx)(L.Z, {
                          isFullScreen: t,
                          showAllPerksButton: t
                              ? (0, s.jsx)(G.Z, {
                                    setIsAllPerksVisible: a,
                                    previousComponent: j.MQ.MARKETING
                                })
                              : void 0
                      }),
                      n
                          ? (0, s.jsx)(v.ZP, {
                                className: H.pdSparklesTop,
                                variant: v.u0.TOP
                            })
                          : null,
                      n
                          ? (0, s.jsx)(v.ZP, {
                                className: H.pdSparklesBottom,
                                variant: v.u0.BOTTOM
                            })
                          : null
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: r } = e;
    (0, T.z)(E.X);
    let O = a.useRef(null),
        [P, L] = a.useState(!1),
        [v, G] = a.useState(!1),
        [z, Q] = a.useState(!1),
        [q, X] = a.useState(!1),
        J = (0, l.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        $ = null != J ? (0, C.Af)(J) : null,
        ee = null != $ ? C.ZP.getSkuIdForPlan($.planId) : null,
        et = null !== ee && ee !== y.Si.TIER_2 ? y.Si.TIER_2 : null,
        en = (0, p.n)(),
        es = null != en,
        [ea, er] = a.useState(!1),
        ei = (0, N.Ng)(),
        el = (0, A.N)(),
        eo = null == el ? void 0 : null === (t = el.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        ec = (0, g.Nx)(),
        ed = (0, h.Vi)(),
        { analyticsLocations: e_ } = (0, u.ZP)(_.Z.PREMIUM_MARKETING),
        eu = 'PremiumMarketingHome';
    (0, d.j)({
        location: eu + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: eu + ' auto off',
            autoTrackExposure: !1
        }),
        a.useEffect(() => {
            X(!0);
        }, []);
    let eE = (0, s.jsx)('div', {
            className: i()({
                [H.premiumTierCardsContainerSettings]: !n,
                [H.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, s.jsx)(o.$, {
                onChange: (e) => G(e),
                threshold: 0.1,
                active: !0,
                children: (0, s.jsx)(M.ZP, {
                    showWumpus: !0,
                    tier0CTAButton:
                        eo === y.Si.TIER_2 || ed || null != ei
                            ? (0, s.jsx)(B.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: y.Si.TIER_0,
                                  className: H.marginTopForButtons,
                                  look: c.ButtonLooks.OUTLINED,
                                  color: c.ButtonColors.WHITE,
                                  buttonShineClassName: H.buttonShine
                              })
                            : (0, s.jsx)(B.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: y.Si.TIER_0,
                                  className: H.marginTopForButtons,
                                  buttonShineClassName: H.buttonShine
                              }),
                    tier2CTAButton:
                        eo === y.Si.TIER_0
                            ? (0, s.jsx)(B.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: y.Si.TIER_2,
                                  className: H.marginTopForButtons,
                                  look: c.ButtonLooks.OUTLINED,
                                  color: c.ButtonColors.WHITE,
                                  buttonShineClassName: H.buttonShine
                              })
                            : (0, s.jsx)(B.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: y.Si.TIER_2,
                                  className: H.marginTopForButtons,
                                  isEligibleForBogoPromotion: ed,
                                  buttonShineClassName: H.buttonShine
                              })
                })
            })
        }),
        eT = (0, s.jsxs)('div', {
            className: i()(H.container, { [H.settingsContainer]: !n }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, s.jsx)(x.Z, {
                    premiumSubscription: J,
                    className: i()(n ? H.fullscreenExistingSubscriberSpacing : H.existingSubscriberSpacing, { [H.zIndex1]: ec }),
                    isFullscreen: n
                }),
                (0, s.jsx)(K, {
                    isFullscreen: n,
                    inOfferExperience: ec
                }),
                !n && es
                    ? (0, s.jsx)(S.Z, {
                          localizedPricingPromo: en,
                          smallGap: !0
                      })
                    : (0, s.jsx)(o.$, {
                          onChange: (e) => L(e),
                          threshold: 0,
                          active: !0,
                          children: (0, s.jsx)(b.Z, {
                              subscriptionTier: et,
                              isFullscreen: n || ec,
                              className: i()({
                                  [H.fullscreenHero]: n,
                                  [H.settingsHeroNoBackground]: !n && ec,
                                  [H.trialMarketingMargin]: ec,
                                  [H.settingsHeroBogoHeight]: !n && ed,
                                  [H.settingsHeroBogoMarginFullscreen]: n && ed,
                                  [H.noTopPaddingOverride]: null != J
                              }),
                              entrypoint: r
                          })
                      }),
                (0, s.jsxs)('div', {
                    className: H.promoBannerContainer,
                    children: [(0, s.jsx)(m.Z, { isFullScreen: n }), n && es && (0, s.jsx)(f.Z, { localizedPricingPromo: en })]
                }),
                eE,
                (0, s.jsx)(Y, {
                    isFullscreen: n,
                    inOfferExperience: ec,
                    setIsAllPerksVisible: er
                }),
                (0, s.jsx)(W, { isFullscreen: n }),
                (0, s.jsxs)('div', {
                    className: H.planComparisonTableContainer,
                    children: [
                        (0, s.jsx)(D.Z, {
                            className: H.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)(c.Image, {
                                          src: F,
                                          className: H.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          zoomable: !1
                                      }),
                                      (0, s.jsx)(c.Image, {
                                          src: V,
                                          className: H.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          zoomable: !1
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, s.jsx)('div', { className: n ? H.footerSpacingFullscreen : H.footerSpacing }),
                (0, s.jsx)(Z.Z, {
                    isVisible: !P && !v && q,
                    isFullscreen: n,
                    subscriptionTier: et
                }),
                (0, s.jsx)(o.$, {
                    onChange: (e) => {
                        e && !z && (R.default.track(k.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: e_ }), Q(!0));
                    },
                    children: (0, s.jsx)('div', { className: H.bottomOfPageVisibilitySensor })
                }),
                (0, s.jsx)(c.Image, {
                    src: w,
                    className: H.bottomIllustration,
                    width: 112,
                    height: 85,
                    zoomable: !1
                })
            ]
        });
    return n
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(c.AdvancedScrollerAuto, {
                      className: H.scroller,
                      ref: O,
                      children: eT
                  }),
                  (0, s.jsx)(U.Z, {
                      previousComponent: j.MQ.MARKETING,
                      isAllPerksVisible: ea,
                      setIsAllPerksVisible: er,
                      isFullScreen: n
                  })
              ]
          })
        : eT;
};
