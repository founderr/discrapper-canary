n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(634894),
    u = n(100527),
    g = n(906732),
    m = n(433811),
    f = n(214852),
    p = n(78839),
    _ = n(626135),
    h = n(74538),
    E = n(140465),
    b = n(599659),
    x = n(278605),
    C = n(91802),
    v = n(104494),
    T = n(639119),
    N = n(906461),
    I = n(8647),
    S = n(568126),
    R = n(605289),
    A = n(346497),
    j = n(218390),
    P = n(823188),
    Z = n(241158),
    O = n(135785),
    B = n(498765),
    M = n(635921),
    w = n(177839),
    y = n(794484),
    k = n(392521),
    L = n(349803),
    U = n(179984),
    D = n(409100),
    G = n(391110),
    H = n(71363),
    V = n(781800),
    F = n(474936),
    W = n(981631),
    z = n(388032),
    Y = n(445615),
    K = n(865215),
    Q = n(735035),
    J = n(786362);
let q = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === F.p9.TIER_2 && t) ? null : (0, i.jsx)(w.Z, { className: t ? Y.perkCardsContainerSpacingFullscreen : Y.perkCardsContainerSpacingSettings });
    },
    X = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(B.Z, { lifted: !t && n }) : null;
    },
    $ = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: a, isMarketingPageV2Enabled: l } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: s()(Y.whatsNewSectionBackground),
                  children: [
                      !l &&
                          (0, i.jsx)(y.Z, {
                              variant: G.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l && (0, i.jsx)(Z.Z, { shouldLoadVideo: a }),
                      l &&
                          (0, i.jsx)(Z.Z, {
                              isBestOfNitro: !0,
                              shouldLoadVideo: a
                          }),
                      !l &&
                          (0, i.jsx)(y.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(V.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: G.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(k.ZP, {
                              className: Y.pdSparklesTop,
                              variant: k.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(k.ZP, {
                              className: Y.pdSparklesBottom,
                              variant: k.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: a } = e;
    (0, f.z)(m.X);
    let Z = r.useRef(null),
        B = (0, x.xP)('PremiumMarketingHome'),
        [w, y] = r.useState(!1),
        [k, V] = r.useState(!1),
        [ee, et] = r.useState(!1),
        [en, ei] = r.useState(!1),
        er = (0, l.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
        ea = null != er ? (0, h.Af)(er) : null,
        es = null != ea ? h.ZP.getSkuIdForPlan(ea.planId) : null,
        el = null !== es && es !== F.Si.TIER_2 ? F.Si.TIER_2 : null,
        eo = (0, C.n)(),
        ec = null != eo,
        [ed, eu] = r.useState(!1),
        eg = (0, v.Ng)(),
        em = (0, T.N)(),
        ef = null == em ? void 0 : null === (t = em.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        ep = (0, E.Nx)(),
        e_ = (0, A.Vi)(),
        { analyticsLocations: eh } = (0, g.ZP)(u.Z.PREMIUM_MARKETING),
        eE = 'PremiumMarketingHome';
    (0, d.j)({
        location: eE + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: eE + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            ei(!0);
        }, []);
    let { enabled: eb } = b.O.useExperiment({ location: 'PremiumMarketingHome' }, { autoTrackExposure: !1 }),
        ex = (0, i.jsx)('div', {
            className: s()({
                [Y.premiumTierCardsContainerSettings]: !n,
                [Y.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => V(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(P.ZP, {
                    variant: P.NN.DEFAULT,
                    showWumpus: !0,
                    tier0CTAButton:
                        ef === F.Si.TIER_2 || e_ || null != eg
                            ? (0, i.jsx)(D.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: F.Si.TIER_0,
                                  className: Y.marginTopForButtons,
                                  look: c.ButtonLooks.OUTLINED,
                                  color: c.ButtonColors.WHITE,
                                  buttonShineClassName: Y.buttonShine
                              })
                            : (0, i.jsx)(D.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: F.Si.TIER_0,
                                  className: Y.marginTopForButtons,
                                  buttonShineClassName: Y.buttonShine
                              }),
                    tier2CTAButton:
                        ef === F.Si.TIER_0
                            ? (0, i.jsx)(D.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: F.Si.TIER_2,
                                  className: Y.marginTopForButtons,
                                  look: c.ButtonLooks.OUTLINED,
                                  color: c.ButtonColors.WHITE,
                                  buttonShineClassName: Y.buttonShine
                              })
                            : (0, i.jsx)(D.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: F.Si.TIER_2,
                                  className: Y.marginTopForButtons,
                                  isEligibleForBogoPromotion: e_,
                                  buttonShineClassName: Y.buttonShine
                              })
                })
            })
        }),
        eC = eb && a === F.EZ.UserSettings,
        ev = (0, i.jsxs)('div', {
            className: s()(Y.container, { [Y.settingsContainer]: !n }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, i.jsx)(O.Z, {
                    premiumSubscription: er,
                    className: s()(n ? Y.fullscreenExistingSubscriberSpacing : Y.existingSubscriberSpacing, { [Y.zIndex1]: ep }),
                    isFullscreen: n
                }),
                (0, i.jsx)(X, {
                    isFullscreen: n,
                    inOfferExperience: ep
                }),
                !n && ec
                    ? (0, i.jsx)(R.Z, {
                          localizedPricingPromo: eo,
                          smallGap: !0
                      })
                    : (0, i.jsx)(o.$, {
                          onChange: (e) => y(e),
                          threshold: 0,
                          active: !0,
                          children: (0, i.jsx)(M.Z, {
                              subscriptionTier: el,
                              isFullscreen: n || ep,
                              className: s()({
                                  [Y.fullscreenHero]: n,
                                  [Y.settingsHeroNoBackground]: !n && ep,
                                  [Y.trialMarketingMargin]: ep,
                                  [Y.settingsHeroBogoHeight]: !n && e_,
                                  [Y.settingsHeroBogoMarginFullscreen]: n && e_,
                                  [Y.noTopPaddingOverride]: null != er
                              }),
                              entrypoint: a
                          })
                      }),
                (0, i.jsxs)('div', {
                    className: Y.promoBannerContainer,
                    children: [(0, i.jsx)(I.Z, { isFullScreen: n }), (0, i.jsx)(N.Z, { isFullScreen: n }), n && ec && (0, i.jsx)(S.Z, { localizedPricingPromo: eo })]
                }),
                ex,
                eC && (0, i.jsx)(j.d, { className: Y.nitroweenGiftCard }),
                (0, i.jsx)($, {
                    isFullscreen: n,
                    inOfferExperience: ep,
                    setIsAllPerksVisible: eu,
                    hasRenderedOnce: en,
                    isMarketingPageV2Enabled: B
                }),
                !B && (0, i.jsx)(q, { isFullscreen: n }),
                (0, i.jsxs)('div', {
                    className: Y.planComparisonTableContainer,
                    children: [
                        (0, i.jsx)(U.Z, {
                            className: Y.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('img', {
                                          src: Q,
                                          className: Y.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: z.intl.string(z.t.X4IxWF)
                                      }),
                                      (0, i.jsx)('img', {
                                          src: J,
                                          className: Y.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: z.intl.string(z.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, i.jsx)('div', { className: n ? Y.footerSpacingFullscreen : Y.footerSpacing }),
                (0, i.jsx)(L.Z, {
                    isVisible: !w && !k && en,
                    isFullscreen: n,
                    subscriptionTier: el
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !ee && (_.default.track(W.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eh }), et(!0));
                    },
                    children: (0, i.jsx)('div', { className: Y.bottomOfPageVisibilitySensor })
                }),
                (0, i.jsx)('img', {
                    src: K,
                    className: Y.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: z.intl.string(z.t.X4IxWF)
                })
            ]
        });
    return n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.AdvancedScrollerAuto, {
                      className: Y.scroller,
                      ref: Z,
                      children: ev
                  }),
                  (0, i.jsx)(H.Z, {
                      previousComponent: G.MQ.MARKETING,
                      isAllPerksVisible: ed,
                      setIsAllPerksVisible: eu,
                      isFullScreen: n
                  })
              ]
          })
        : ev;
};
