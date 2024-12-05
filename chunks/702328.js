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
    m = n(100527),
    f = n(906732),
    p = n(464824),
    _ = n(214852),
    h = n(78839),
    E = n(626135),
    b = n(74538),
    x = n(140465),
    C = n(599659),
    v = n(278605),
    T = n(91802),
    N = n(104494),
    I = n(639119),
    S = n(906461),
    R = n(8647),
    A = n(568126),
    j = n(605289),
    P = n(346497),
    Z = n(218390),
    B = n(823188),
    M = n(241158),
    O = n(135785),
    w = n(498765),
    y = n(635921),
    k = n(177839),
    L = n(794484),
    U = n(392521),
    D = n(349803),
    G = n(179984),
    H = n(409100),
    V = n(391110),
    F = n(71363),
    W = n(781800),
    z = n(474936),
    Y = n(981631),
    K = n(388032),
    Q = n(286919),
    J = n(865215),
    q = n(735035),
    X = n(786362);
let $ = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === z.p9.TIER_2 && t) ? null : (0, i.jsx)(k.Z, { className: t ? Q.perkCardsContainerSpacingFullscreen : Q.perkCardsContainerSpacingSettings });
    },
    ee = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(w.Z, { lifted: !t && n }) : null;
    },
    et = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, hasRenderedOnce: a, isMarketingPageV2Enabled: l } = e;
        return t
            ? (0, i.jsxs)('div', {
                  className: s()(Q.whatsNewSectionBackground, { [Q.whatsNewSectionBackgroundV2]: l }),
                  children: [
                      !l &&
                          (0, i.jsx)(L.Z, {
                              variant: V.R0.WHATS_NEW,
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
                                  ? (0, i.jsx)(W.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: V.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(U.ZP, {
                              className: Q.pdSparklesTop,
                              variant: U.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(U.ZP, {
                              className: Q.pdSparklesBottom,
                              variant: U.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: a } = e;
    (0, _.z)(p.X);
    let M = r.useRef(null),
        w = (0, g.ZP)(),
        k = (0, c.wj)(w),
        L = (0, v.xP)('PremiumMarketingHome'),
        [U, W] = r.useState(!1),
        [en, ei] = r.useState(!1),
        [er, ea] = r.useState(!1),
        [es, el] = r.useState(!1),
        eo = (0, l.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
        ec = null != eo ? (0, b.Af)(eo) : null,
        ed = null != ec ? b.ZP.getSkuIdForPlan(ec.planId) : null,
        eu = null !== ed && ed !== z.Si.TIER_2 ? z.Si.TIER_2 : null,
        eg = (0, T.n)(),
        em = null != eg,
        [ef, ep] = r.useState(!1),
        e_ = (0, N.Ng)(),
        eh = (0, I.N)(),
        eE = null == eh ? void 0 : null === (t = eh.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        eb = (0, x.Nx)(),
        ex = (0, P.Vi)(),
        { analyticsLocations: eC } = (0, f.ZP)(m.Z.PREMIUM_MARKETING),
        ev = 'PremiumMarketingHome';
    (0, u.j)({
        location: ev + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: ev + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            el(!0);
        }, []);
    let { enabled: eT } = C.O.useExperiment({ location: 'PremiumMarketingHome' }, { autoTrackExposure: !1 }),
        eN = (0, i.jsx)('div', {
            className: s()({
                [Q.premiumTierCardsContainerSettings]: !n,
                [Q.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => ei(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(B.ZP, {
                    variant: B.NN.DEFAULT,
                    showWumpus: !0,
                    tier0CTAButton:
                        eE === z.Si.TIER_2 || ex || null != e_
                            ? (0, i.jsx)(H.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: z.Si.TIER_0,
                                  className: Q.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: Q.buttonShine
                              })
                            : (0, i.jsx)(H.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: z.Si.TIER_0,
                                  className: Q.marginTopForButtons,
                                  buttonShineClassName: Q.buttonShine
                              }),
                    tier2CTAButton:
                        eE === z.Si.TIER_0
                            ? (0, i.jsx)(H.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: z.Si.TIER_2,
                                  className: Q.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: Q.buttonShine
                              })
                            : (0, i.jsx)(H.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: z.Si.TIER_2,
                                  className: Q.marginTopForButtons,
                                  isEligibleForBogoPromotion: ex,
                                  buttonShineClassName: Q.buttonShine
                              })
                })
            })
        }),
        eI = eT && a === z.EZ.UserSettings,
        eS = (0, i.jsxs)('div', {
            className: s()(Q.container, { [Q.settingsContainer]: !n }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, i.jsx)(O.Z, {
                    premiumSubscription: eo,
                    className: s()(n ? Q.fullscreenExistingSubscriberSpacing : Q.existingSubscriberSpacing, { [Q.zIndex1]: eb }),
                    isFullscreen: n
                }),
                (0, i.jsx)(ee, {
                    isFullscreen: n,
                    inOfferExperience: eb
                }),
                !n && em
                    ? (0, i.jsx)(j.Z, {
                          localizedPricingPromo: eg,
                          smallGap: !0
                      })
                    : (0, i.jsx)(o.$, {
                          onChange: (e) => W(e),
                          threshold: 0,
                          active: !0,
                          children: (0, i.jsx)(y.Z, {
                              subscriptionTier: eu,
                              isFullscreen: n || eb,
                              className: s()({
                                  [Q.fullscreenHero]: n,
                                  [Q.settingsHeroNoBackground]: !n && eb,
                                  [Q.trialMarketingMargin]: eb,
                                  [Q.settingsHeroBogoHeight]: !n && ex,
                                  [Q.settingsHeroBogoMarginFullscreen]: n && ex,
                                  [Q.noTopPaddingOverride]: null != eo
                              }),
                              entrypoint: a
                          })
                      }),
                (0, i.jsxs)('div', {
                    className: Q.promoBannerContainer,
                    children: [(0, i.jsx)(R.Z, { isFullScreen: n }), (0, i.jsx)(S.Z, { isFullScreen: n }), n && em && (0, i.jsx)(A.Z, { localizedPricingPromo: eg })]
                }),
                eN,
                eI && (0, i.jsx)(Z.d, { className: Q.nitroweenGiftCard }),
                (0, i.jsx)(et, {
                    isFullscreen: n,
                    inOfferExperience: eb,
                    setIsAllPerksVisible: ep,
                    hasRenderedOnce: es,
                    isMarketingPageV2Enabled: L
                }),
                !L && (0, i.jsx)($, { isFullscreen: n }),
                (0, i.jsxs)('div', {
                    className: Q.planComparisonTableContainer,
                    children: [
                        (0, i.jsx)(G.Z, {
                            className: Q.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('img', {
                                          src: q,
                                          className: Q.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: K.intl.string(K.t.X4IxWF)
                                      }),
                                      (0, i.jsx)('img', {
                                          src: X,
                                          className: Q.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: K.intl.string(K.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, i.jsx)('div', { className: n ? Q.footerSpacingFullscreen : Q.footerSpacing }),
                (0, i.jsx)(D.Z, {
                    isVisible: !U && !en && es,
                    isFullscreen: n,
                    subscriptionTier: eu
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !er && (E.default.track(Y.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eC }), ea(!0));
                    },
                    children: (0, i.jsx)('div', { className: Q.bottomOfPageVisibilitySensor })
                }),
                (0, i.jsx)('img', {
                    src: J,
                    className: Q.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: K.intl.string(K.t.X4IxWF)
                })
            ]
        });
    return n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.AdvancedScrollerAuto, {
                      className: s()(Q.scroller, { [Q.containerBackground]: L && k }),
                      ref: M,
                      children: eS
                  }),
                  (0, i.jsx)(F.Z, {
                      previousComponent: V.MQ.MARKETING,
                      isAllPerksVisible: ef,
                      setIsAllPerksVisible: ep,
                      isFullScreen: n
                  })
              ]
          })
        : eS;
};
