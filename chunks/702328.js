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
    x = n(184508),
    b = n(67645),
    C = n(599659),
    v = n(257944),
    T = n(91802),
    N = n(104494),
    I = n(639119),
    S = n(906461),
    R = n(8647),
    A = n(568126),
    j = n(605289),
    P = n(346497),
    O = n(218390),
    Z = n(823188),
    M = n(241158),
    w = n(135785),
    B = n(498765),
    y = n(635921),
    L = n(177839),
    k = n(794484),
    U = n(392521),
    D = n(349803),
    G = n(179984),
    H = n(409100),
    V = n(391110),
    F = n(71363),
    W = n(781800),
    z = n(474936),
    Y = n(981631),
    Q = n(388032),
    K = n(445615),
    J = n(865215),
    q = n(735035),
    X = n(786362);
let $ = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === z.p9.TIER_2 && t) ? null : (0, i.jsx)(L.Z, { className: t ? K.perkCardsContainerSpacingFullscreen : K.perkCardsContainerSpacingSettings });
    },
    ee = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, i.jsx)(B.Z, { lifted: !t && n }) : null;
    },
    et = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: a, whatsNewV2Enabled: l, BestOfNitroV2Enabled: c, setIsWhatsNewBoxVisible: d, setIsBestOfNitroVisible: u, isWhatsNewBoxVisible: g, isBestOfNitroVisible: m, hasRenderedOnce: f } = e,
            p = r.useRef(0),
            h = r.useRef(0),
            E = r.useRef(0),
            x = r.useRef(0);
        return (r.useEffect(() => {
            g ? (p.current = Date.now()) : 0 !== p.current && ((h.current = h.current + Date.now() - p.current), (p.current = 0));
        }, [g]),
        r.useEffect(() => {
            m ? (E.current = Date.now()) : 0 !== E.current && ((x.current = x.current + Date.now() - E.current), (E.current = 0));
        }, [m]),
        r.useEffect(
            () => () => {
                0 !== p.current && (h.current = h.current + (Date.now() - p.current)),
                    0 !== E.current && (x.current = x.current + (Date.now() - E.current)),
                    0 !== h.current &&
                        _.default.track(Y.rMx.PREMIUM_WHATS_NEW_VIEW_TIME, {
                            view_time: h.current,
                            is_v2: l
                        }),
                    0 !== x.current &&
                        _.default.track(Y.rMx.PREMIUM_BEST_OF_VIEW_TIME, {
                            view_time: x.current,
                            is_v2: l
                        });
            },
            []
        ),
        t)
            ? (0, i.jsxs)('div', {
                  className: s()(K.whatsNewSectionBackground, {
                      [K.whatsNewSectionBackgroundV2]: l || c,
                      [K.whatsNewSectionBackgroundNoGap]: l && c
                  }),
                  children: [
                      !l &&
                          (0, i.jsx)(k.Z, {
                              variant: V.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l &&
                          (0, i.jsx)(o.$, {
                              onChange: (e) => d(e),
                              threshold: 0,
                              active: !0,
                              children: (0, i.jsx)(M.Z, { shouldLoadVideo: f })
                          }),
                      c &&
                          (0, i.jsx)(o.$, {
                              onChange: (e) => u(e),
                              threshold: 0,
                              active: !0,
                              children: (0, i.jsx)(M.Z, {
                                  isBestOfNitro: !0,
                                  shouldLoadVideo: f
                              })
                          }),
                      !c &&
                          (0, i.jsx)(k.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, i.jsx)(W.Z, {
                                        setIsAllPerksVisible: a,
                                        previousComponent: V.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(U.ZP, {
                              className: K.pdSparklesTop,
                              variant: U.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, i.jsx)(U.ZP, {
                              className: K.pdSparklesBottom,
                              variant: U.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: a } = e;
    (0, f.z)(m.X);
    let M = (0, v.z7)('PremiumMarketingHome'),
        B = (0, b.g)('PremiumMarketingHome'),
        L = (0, x.tY)('PremiumMarketingHome'),
        k = r.useRef(null),
        [U, W] = r.useState(!1),
        [en, ei] = r.useState(!1),
        [er, ea] = r.useState(!1),
        [es, el] = r.useState(!1),
        [eo, ec] = r.useState(!1),
        [ed, eu] = r.useState(!1),
        eg = (0, l.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
        em = null != eg ? (0, h.Af)(eg) : null,
        ef = null != em ? h.ZP.getSkuIdForPlan(em.planId) : null,
        ep = null !== ef && ef !== z.Si.TIER_2 ? z.Si.TIER_2 : null,
        e_ = (0, T.n)(),
        eh = null != e_,
        [eE, ex] = r.useState(!1),
        eb = (0, N.Ng)(),
        eC = (0, I.N)(),
        ev = null == eC ? void 0 : null === (t = eC.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        eT = (0, E.Nx)(),
        eN = (0, P.Vi)(),
        { analyticsLocations: eI } = (0, g.ZP)(u.Z.PREMIUM_MARKETING),
        eS = 'PremiumMarketingHome';
    (0, d.j)({
        location: eS + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: eS + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            eu(!0);
        }, []);
    let { enabled: eR } = C.O.useExperiment({ location: 'PremiumMarketingHome' }, { autoTrackExposure: !1 }),
        eA = (0, i.jsx)('div', {
            className: s()({
                [K.premiumTierCardsContainerSettings]: !n,
                [K.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, i.jsx)(o.$, {
                onChange: (e) => ei(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(Z.ZP, {
                    variant: L ? (n ? Z.NN.TAGLINE_XP_COPY_HOME : Z.NN.TAGLINE_XP_COPY_SETTINGS) : Z.NN.DEFAULT,
                    showWumpus: !L,
                    tier0CTAButton:
                        ev === z.Si.TIER_2 || eN || null != eb
                            ? (0, i.jsx)(H.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: z.Si.TIER_0,
                                  className: K.marginTopForButtons,
                                  look: c.ButtonLooks.OUTLINED,
                                  color: c.ButtonColors.WHITE,
                                  buttonShineClassName: K.buttonShine
                              })
                            : (0, i.jsx)(H.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: z.Si.TIER_0,
                                  className: K.marginTopForButtons,
                                  buttonShineClassName: K.buttonShine
                              }),
                    tier2CTAButton:
                        ev === z.Si.TIER_0
                            ? (0, i.jsx)(H.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: z.Si.TIER_2,
                                  className: K.marginTopForButtons,
                                  look: c.ButtonLooks.OUTLINED,
                                  color: c.ButtonColors.WHITE,
                                  buttonShineClassName: K.buttonShine
                              })
                            : (0, i.jsx)(H.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: z.Si.TIER_2,
                                  className: K.marginTopForButtons,
                                  isEligibleForBogoPromotion: eN,
                                  buttonShineClassName: K.buttonShine
                              })
                })
            })
        }),
        ej = eR && a === z.EZ.UserSettings,
        eP = (0, i.jsxs)('div', {
            className: s()(K.container, { [K.settingsContainer]: !n }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, i.jsx)(w.Z, {
                    premiumSubscription: eg,
                    className: s()(n ? K.fullscreenExistingSubscriberSpacing : K.existingSubscriberSpacing, { [K.zIndex1]: eT }),
                    isFullscreen: n
                }),
                (0, i.jsx)(ee, {
                    isFullscreen: n,
                    inOfferExperience: eT
                }),
                !n && eh
                    ? (0, i.jsx)(j.Z, {
                          localizedPricingPromo: e_,
                          smallGap: !0
                      })
                    : (0, i.jsx)(o.$, {
                          onChange: (e) => W(e),
                          threshold: 0,
                          active: !0,
                          children: (0, i.jsx)(y.Z, {
                              subscriptionTier: ep,
                              isFullscreen: n || eT,
                              className: s()({
                                  [K.fullscreenHero]: n,
                                  [K.settingsHeroNoBackground]: !n && eT,
                                  [K.trialMarketingMargin]: eT,
                                  [K.settingsHeroBogoHeight]: !n && eN,
                                  [K.settingsHeroBogoMarginFullscreen]: n && eN,
                                  [K.noTopPaddingOverride]: null != eg
                              }),
                              entrypoint: a
                          })
                      }),
                (0, i.jsxs)('div', {
                    className: K.promoBannerContainer,
                    children: [(0, i.jsx)(R.Z, { isFullScreen: n }), (0, i.jsx)(S.Z, { isFullScreen: n }), n && eh && (0, i.jsx)(A.Z, { localizedPricingPromo: e_ })]
                }),
                eA,
                ej && (0, i.jsx)(O.d, { className: K.nitroweenGiftCard }),
                (0, i.jsx)(et, {
                    isFullscreen: n,
                    inOfferExperience: eT,
                    setIsAllPerksVisible: ex,
                    whatsNewV2Enabled: M,
                    BestOfNitroV2Enabled: B,
                    setIsWhatsNewBoxVisible: ea,
                    setIsBestOfNitroVisible: el,
                    isWhatsNewBoxVisible: er,
                    isBestOfNitroVisible: es,
                    hasRenderedOnce: ed
                }),
                !M && !B && (0, i.jsx)($, { isFullscreen: n }),
                (0, i.jsxs)('div', {
                    className: K.planComparisonTableContainer,
                    children: [
                        (0, i.jsx)(G.Z, {
                            className: K.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('img', {
                                          src: q,
                                          className: K.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: Q.intl.string(Q.t.X4IxWF)
                                      }),
                                      (0, i.jsx)('img', {
                                          src: X,
                                          className: K.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: Q.intl.string(Q.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, i.jsx)('div', { className: n ? K.footerSpacingFullscreen : K.footerSpacing }),
                (0, i.jsx)(D.Z, {
                    isVisible: !U && !en && !er && !es && ed,
                    isFullscreen: n,
                    subscriptionTier: ep
                }),
                (0, i.jsx)(o.$, {
                    onChange: (e) => {
                        e && !eo && (_.default.track(Y.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eI }), ec(!0));
                    },
                    children: (0, i.jsx)('div', { className: K.bottomOfPageVisibilitySensor })
                }),
                (0, i.jsx)('img', {
                    src: J,
                    className: K.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: Q.intl.string(Q.t.X4IxWF)
                })
            ]
        });
    return n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.AdvancedScrollerAuto, {
                      className: K.scroller,
                      ref: k,
                      children: eP
                  }),
                  (0, i.jsx)(F.Z, {
                      previousComponent: V.MQ.MARKETING,
                      isAllPerksVisible: eE,
                      setIsAllPerksVisible: ex,
                      isFullScreen: n
                  })
              ]
          })
        : eP;
};
