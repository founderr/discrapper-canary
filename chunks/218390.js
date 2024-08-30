t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(913527),
    l = t.n(o),
    c = t(442837),
    d = t(622535),
    u = t(780384),
    _ = t(481060),
    E = t(570140),
    T = t(355467),
    I = t(37234),
    S = t(821849),
    N = t(230711),
    m = t(497321),
    C = t(634894),
    g = t(410030),
    A = t(100527),
    h = t(906732),
    O = t(211242),
    p = t(15640),
    x = t(89057),
    R = t(406128),
    f = t(703656),
    M = t(246946),
    D = t(78839),
    P = t(483444),
    L = t(626135),
    b = t(74538),
    Z = t(140465),
    v = t(646476),
    j = t(91802),
    B = t(898997),
    U = t(197115),
    G = t(823188),
    y = t(504865),
    F = t(179984),
    V = t(938736),
    w = t(386733),
    k = t(474936),
    Y = t(981631),
    H = t(689938),
    W = t(374912),
    K = t(881188),
    z = t(520314),
    Q = t(434691);
function X() {
    let e = (0, c.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
        s = (0, Z.t7)(),
        t = (0, Z.lr)(),
        a = (0, c.e7)([D.ZP], () => D.ZP.inReverseTrial()),
        i = (0, g.ZP)();
    if (null == e || null == e.planIdFromItems) return null;
    let o = null != e.trialId,
        d = e.planIdFromItems === k.Xh.PREMIUM_YEAR_TIER_2,
        E = s || o,
        T = null != e.trialEndsAt ? l()(e.trialEndsAt).diff(l()(), 'd') : 0,
        S = k.GP[e.planIdFromItems],
        m = b.ZP.formatPriceString(b.ZP.getDefaultPrice(S.id), S.interval);
    return (0, n.jsxs)('div', {
        className: r()(W.tierCard, { [W.withTier2Rim]: E }),
        children: [
            (0, n.jsxs)('div', {
                className: W.tierInfo,
                children: [
                    (0, n.jsx)(P.Z, { className: W.tierTitle }),
                    E
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (o || !d) &&
                                      (0, n.jsx)(G.Cy, {
                                          text: o ? H.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : H.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                                          className: W.topRimPill,
                                          colorOptions: (0, u.wj)(i) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                  (o || !d) && (0, n.jsx)('div', { className: W.rimGlowTier2 }),
                                  (0, n.jsx)(_.Heading, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: W.trialHeader,
                                      children: (() => {
                                          var s, n, i;
                                          if (o) {
                                              if (a) {
                                                  let s = e.trialId === k.dO ? 1 : 2;
                                                  return H.Z.Messages.REVERSE_TRIAL_SUBSCRIBER_MANAGEMENT_SUBHEADER.format({ weeks: s });
                                              }
                                              return H.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                                  remainingTime: T,
                                                  price: m
                                              });
                                          }
                                          if (d)
                                              return H.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                                                  percent: null !== (s = null == t ? void 0 : t.percentage) && void 0 !== s ? s : k.Bo,
                                                  regularPrice: m
                                              });
                                          return H.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                                              percent: null !== (n = null == t ? void 0 : t.percentage) && void 0 !== n ? n : k.M_,
                                              regularPrice: m,
                                              numMonths: null !== (i = null == t ? void 0 : t.duration) && void 0 !== i ? i : k.rt
                                          });
                                      })()
                                  })
                              ]
                          })
                        : (0, n.jsx)(y.Z, {
                              variant: void 0,
                              subscriptionTier: k.Si.TIER_2,
                              interval: S.interval
                          }),
                    (0, n.jsx)(G.nT, {}),
                    (0, n.jsx)(_.Button, {
                        className: W.tierCardButton,
                        color: _.Button.Colors.WHITE,
                        onClick: () => {
                            L.default.track(Y.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, I.xf)(),
                                (0, f.uL)(Y.Z5c.APPLICATION_STORE);
                        },
                        children: (0, n.jsx)(_.Text, {
                            className: W.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: H.Z.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
                        })
                    }),
                    (0, n.jsx)(_.Button, {
                        className: W.managePlanButton,
                        look: _.Button.Looks.OUTLINED,
                        color: _.Button.Colors.WHITE,
                        onClick: () => {
                            L.default.track(Y.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_subscriptions_button',
                                target: 'subscriptions settings'
                            }),
                                N.Z.open(Y.oAB.SUBSCRIPTIONS);
                        },
                        children: (0, n.jsx)(_.Text, {
                            className: W.__invalid_managePlanButtonCTA,
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: H.Z.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
                        })
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: W.tierImage,
                children: (0, n.jsx)('img', {
                    className: W.tierImage,
                    alt: '',
                    src: K
                })
            })
        ]
    });
}
function q() {
    let e = (0, v.rK)(),
        { enabled: s } = v.RO.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: e }),
        t = s && e;
    return (0, n.jsxs)('div', {
        className: r()(W.giftCard, { [W.giftCardSeasonal]: t }),
        children: [
            t &&
                (0, n.jsx)('img', {
                    className: W.seasonalGiftImage,
                    alt: '',
                    src: z
                }),
            (0, n.jsx)('img', {
                className: W.giftImage,
                style: { visibility: t ? 'hidden' : 'visible' },
                alt: '',
                src: Q
            }),
            (0, n.jsxs)('div', {
                className: W.giftInfo,
                children: [
                    (0, n.jsx)(_.Heading, {
                        className: r()(W.giftTitle, { [W.seasonalColor]: t }),
                        variant: 'heading-xl/extrabold',
                        children: t ? H.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : H.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
                    }),
                    (0, n.jsx)(_.Text, {
                        className: r()(W.giftText, { [W.seasonalColor]: t }),
                        variant: 'text-sm/normal',
                        children: t ? H.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : H.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
                    }),
                    (0, n.jsx)(U.Z, {
                        isGift: !0,
                        className: r()(W.giftCardButton, t ? W.seasonalColor : W.giftCardButtonColor),
                        look: _.Button.Looks.OUTLINED,
                        buttonText: H.Z.Messages.GIFT_NITRO,
                        buttonTextClassName: W.giftButtonCTA,
                        color: _.Button.Colors.CUSTOM,
                        onClick: () => {
                            L.default.track(Y.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'gifting_button',
                                target: 'payment modal'
                            });
                        }
                    })
                ]
            })
        ]
    });
}
s.Z = function () {
    let e = (0, O.Q)(),
        { analyticsLocations: s } = (0, h.ZP)(A.Z.PREMIUM_SETTINGS),
        t = (0, c.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
        i = (0, c.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
        r = (0, p.V)(),
        [o, l] = a.useState(!0),
        u = (0, j.n)(),
        I = null == u ? void 0 : u.countryCode,
        N = (0, c.e7)([M.Z], () => M.Z.enabled),
        g = 'PremiumManagementSettings';
    (0, C.j)({
        location: g + ' auto on',
        autoTrackExposure: !0
    }),
        (0, C.j)({
            location: g + ' auto off',
            autoTrackExposure: !1
        }),
        (0, B.B)('PremiumManagementSettings');
    let f = (0, V.bD)('PremiumManagementSettings'),
        P = (0, V.pn)('PremiumManagementSettings');
    a.useEffect(() => {
        E.Z.wait(async () => {
            !N && !e && (await Promise.all([T.jg(), T.tZ(), (0, S.Y2)(I, null, Y.JjL.DISCOVERY)])), l(!1);
        });
    }, [I, N, e]);
    let [b, Z] = a.useState(!1);
    if (N) return (0, n.jsx)(m.Z, {});
    if (e) return (0, n.jsx)(x.c8, {});
    if ((!i || null == t || !r) && !o)
        return (0, n.jsx)(R.Z, {
            title: H.Z.Messages.REDIRECTED_CALLBACK_ERROR,
            note: null
        });
    if (!i || null == t || !r || o) return (0, n.jsx)(_.Spinner, {});
    let v = null != t.trialId;
    return (0, n.jsx)(h.Gt, {
        value: s,
        children: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: W.__invalid_container,
                    children: [
                        (0, n.jsx)(X, {}),
                        (f || P) && (0, n.jsx)(w.Z, { isInSettings: !0 }),
                        (0, n.jsx)(q, {}),
                        (0, n.jsx)(F.Z, {
                            className: W.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: H.Z.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
                            hidePill: !v,
                            selectedPlanColumnClassName: W.tier2PlanComparisonTableBackground,
                            selectedPlanTier: k.p9.TIER_2
                        })
                    ]
                }),
                (0, n.jsx)(d.$, {
                    onChange: (e) => {
                        e && !b && (L.default.track(Y.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: s }), Z(!0));
                    },
                    children: (0, n.jsx)('div', { className: W.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
