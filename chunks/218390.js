n.d(t, {
    d: function () {
        return en;
    }
}),
    n(47120);
var s = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    _ = n(622535),
    d = n(780384),
    E = n(481060),
    u = n(570140),
    T = n(355467),
    I = n(37234),
    R = n(821849),
    g = n(230711),
    N = n(497321),
    m = n(634894),
    C = n(410030),
    A = n(100527),
    p = n(906732),
    f = n(211242),
    M = n(975298),
    S = n(15640),
    h = n(89057),
    x = n(406128),
    b = n(703656),
    O = n(246946),
    P = n(78839),
    v = n(483444),
    L = n(626135),
    Z = n(63063),
    D = n(74538),
    U = n(140465),
    B = n(599659),
    j = n(91802),
    G = n(898997),
    w = n(197115),
    y = n(823188),
    H = n(504865),
    k = n(179984),
    F = n(938736),
    V = n(386733),
    W = n(474936),
    K = n(981631),
    Y = n(689938),
    z = n(957781),
    Q = n(881188),
    J = n(434691),
    X = n(507579);
let q = 'gifting_button',
    $ = 'payment modal';
function ee(e) {
    let { premiumSubscription: t, isDiscountApplied: n, inReverseTrial: a, activeDiscountInfo: r, theme: i } = e,
        l = null != t.trialId,
        c = t.planIdFromItems === W.Xh.PREMIUM_YEAR_TIER_2,
        _ = n || l,
        u = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        T = W.GP[t.planIdFromItems],
        I = D.ZP.formatPriceString(D.ZP.getDefaultPrice(T.id), T.interval);
    return _
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (l || !c) &&
                      (0, s.jsx)(y.Cy, {
                          text: l ? Y.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : Y.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                          className: z.topRimPillWithSparkles,
                          colorOptions: (0, d.wj)(i) ? y.VE.PREMIUM_TIER_2_WHITE_FILL : y.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                      }),
                  (l || !c) && (0, s.jsx)('div', { className: z.rimGlowTier2 }),
                  (0, s.jsx)(E.Heading, {
                      variant: 'heading-md/normal',
                      color: 'always-white',
                      className: z.trialHeader,
                      children: (() => {
                          var e, n, s;
                          if (l) {
                              if (a) {
                                  let e = D.ZP.getReverseTrialWeeks(t.trialId);
                                  return Y.Z.Messages.REVERSE_TRIAL_SUBSCRIBER_MANAGEMENT_SUBHEADER.format({ weeks: e });
                              }
                              return Y.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                  remainingTime: u,
                                  price: I
                              });
                          }
                          if (c)
                              return Y.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                                  percent: null !== (e = null == r ? void 0 : r.percentage) && void 0 !== e ? e : W.Bo,
                                  regularPrice: I
                              });
                          return Y.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                              percent: null !== (n = null == r ? void 0 : r.percentage) && void 0 !== n ? n : W.M_,
                              regularPrice: I,
                              numMonths: null !== (s = null == r ? void 0 : r.duration) && void 0 !== s ? s : W.rt
                          });
                      })()
                  })
              ]
          })
        : (0, s.jsx)(H.Z, {
              variant: void 0,
              subscriptionTier: W.Si.TIER_2,
              interval: T.interval
          });
}
function et() {
    let e = (0, U.t7)(),
        t = (0, U.lr)(),
        n = (0, c.e7)([P.ZP], () => P.ZP.inReverseTrial()),
        a = (0, C.ZP)(),
        r = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        { fractionalState: l } = (0, M.Z)(),
        o = null !== r && null !== r.planIdFromItems;
    if (!o && l === W.a$.NONE) return null;
    let _ = l !== W.a$.NONE,
        d = null !== r && null != r.trialId,
        u = e || d;
    return (0, s.jsxs)('div', {
        className: i()(z.tierCard, { [z.withTier2Rim]: u }),
        children: [
            (0, s.jsxs)('div', {
                className: z.tierInfo,
                children: [
                    (0, s.jsx)(v.Z, { className: z.tierTitle }),
                    _
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(y.mn, {
                                      text: Y.Z.Messages.FRACTIONAL_PREMIUM_CREDITS_ACTIVATED,
                                      className: z.fractionalPremiumTopRimPill,
                                      colorOptions: y.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, s.jsx)(E.Heading, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: z.fractionalPremiumSubheader,
                                      children: Y.Z.Messages.FRACTIONAL_PREMIUM_SETTINGS_HERO_SUBHEADER.format({ helpCenterLink: Z.Z.getArticleURL(K.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : o
                          ? (0, s.jsx)(ee, {
                                premiumSubscription: r,
                                isDiscountApplied: e,
                                inReverseTrial: n,
                                activeDiscountInfo: t,
                                theme: a
                            })
                          : null,
                    (0, s.jsx)(y.nT, { featureSet: _ ? y.uZ.FRACTIONAL_PREMIUM : y.uZ.DEFAULT }),
                    (0, s.jsx)(E.Button, {
                        className: z.tierCardButton,
                        color: E.Button.Colors.WHITE,
                        onClick: () => {
                            L.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, I.xf)(),
                                (0, b.uL)(K.Z5c.APPLICATION_STORE);
                        },
                        children: (0, s.jsx)(E.Text, {
                            className: z.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: Y.Z.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
                        })
                    }),
                    (0, s.jsx)(E.Button, {
                        className: z.managePlanButton,
                        look: E.Button.Looks.OUTLINED,
                        color: E.Button.Colors.WHITE,
                        onClick: () => {
                            L.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_subscriptions_button',
                                target: 'subscriptions settings'
                            }),
                                g.Z.open(K.oAB.SUBSCRIPTIONS);
                        },
                        children: (0, s.jsx)(E.Text, {
                            className: z.__invalid_managePlanButtonCTA,
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: Y.Z.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
                        })
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: z.tierImage,
                children: (0, s.jsx)('img', {
                    className: z.tierImage,
                    alt: '',
                    src: Q
                })
            })
        ]
    });
}
function en(e) {
    let { className: t } = e;
    return (0, s.jsxs)('div', {
        className: i()(z.giftCard, z.giftCardHalloween, t),
        children: [
            (0, s.jsx)('img', {
                alt: '',
                className: i()(z.giftImage, z.giftImageHalloween),
                'aria-hidden': !0,
                src: X.Z
            }),
            (0, s.jsxs)('div', {
                className: z.giftInfo,
                children: [
                    (0, s.jsx)(E.Heading, {
                        className: z.giftTitle,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: Y.Z.Messages.NITROWEEN_GIFT_UPSELL_TITLE
                    }),
                    (0, s.jsx)(E.Text, {
                        className: z.giftText,
                        color: 'always-white',
                        variant: 'text-sm/normal',
                        children: Y.Z.Messages.NITROWEEN_DESKTOP_BILLING_SETTINGS_SUBTITLE
                    }),
                    (0, s.jsx)(w.Z, {
                        isGift: !0,
                        className: i()(z.giftCardButton, z.halloweenColor),
                        look: E.Button.Looks.OUTLINED,
                        buttonText: Y.Z.Messages.GIFT_NITRO,
                        buttonTextClassName: z.giftButtonCTA,
                        color: E.Button.Colors.CUSTOM,
                        onClick: () => {
                            L.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: q,
                                target: $
                            });
                        }
                    })
                ]
            })
        ]
    });
}
function es() {
    let { enabled: e } = B.O.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: !1 });
    return e
        ? (0, s.jsx)(en, {})
        : (0, s.jsxs)('div', {
              className: i()(z.giftCard),
              children: [
                  (0, s.jsx)('img', {
                      className: z.giftImage,
                      alt: '',
                      src: J
                  }),
                  (0, s.jsxs)('div', {
                      className: z.giftInfo,
                      children: [
                          (0, s.jsx)(E.Heading, {
                              className: z.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: Y.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
                          }),
                          (0, s.jsx)(E.Text, {
                              className: z.giftText,
                              variant: 'text-sm/normal',
                              children: Y.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
                          }),
                          (0, s.jsx)(w.Z, {
                              isGift: !0,
                              className: i()(z.giftCardButton, z.giftCardButtonColor),
                              look: E.Button.Looks.OUTLINED,
                              buttonText: Y.Z.Messages.GIFT_NITRO,
                              buttonTextClassName: z.giftButtonCTA,
                              color: E.Button.Colors.CUSTOM,
                              onClick: () => {
                                  L.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: q,
                                      target: $
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
t.Z = function () {
    let e = (0, f.Q)(),
        { analyticsLocations: t } = (0, p.ZP)(A.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        r = (0, c.e7)([P.ZP], () => P.ZP.hasFetchedSubscriptions()),
        i = (0, S.V)(),
        [l, o] = a.useState(!0),
        { fractionalState: d } = (0, M.Z)(),
        I = (0, j.n)(),
        g = null == I ? void 0 : I.countryCode,
        C = (0, c.e7)([O.Z], () => O.Z.enabled),
        b = 'PremiumManagementSettings';
    (0, m.j)({
        location: b + ' auto on',
        autoTrackExposure: !0
    }),
        (0, m.j)({
            location: b + ' auto off',
            autoTrackExposure: !1
        }),
        (0, G.B)('PremiumManagementSettings');
    let v = (0, F.bD)('PremiumManagementSettings'),
        Z = (0, F.pn)('PremiumManagementSettings');
    a.useEffect(() => {
        u.Z.wait(async () => {
            !C && !e && (await Promise.all([T.jg(), T.tZ(), (0, R.Y2)(g, null, K.JjL.DISCOVERY)])), o(!1);
        });
    }, [g, C, e]);
    let [D, U] = a.useState(!1);
    if (C) return (0, s.jsx)(N.Z, {});
    if (e) return (0, s.jsx)(h.c8, {});
    let B = r && null !== n && i,
        w = d !== W.a$.NONE;
    if (!B && !w && !l)
        return (0, s.jsx)(x.Z, {
            title: Y.Z.Messages.REDIRECTED_CALLBACK_ERROR,
            note: null
        });
    if ((!B && !w) || l) return (0, s.jsx)(E.Spinner, {});
    let y = null !== n && null != n.trialId;
    return (0, s.jsx)(p.Gt, {
        value: t,
        children: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)('div', {
                    className: z.__invalid_container,
                    children: [
                        (0, s.jsx)(et, {}),
                        (v || Z) && (0, s.jsx)(V.Z, { isInSettings: !0 }),
                        (0, s.jsx)(es, {}),
                        (0, s.jsx)(k.Z, {
                            className: z.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: Y.Z.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
                            hidePill: !y,
                            selectedPlanColumnClassName: z.tier2PlanComparisonTableBackground,
                            selectedPlanTier: W.p9.TIER_2
                        })
                    ]
                }),
                (0, s.jsx)(_.$, {
                    onChange: (e) => {
                        e && !D && (L.default.track(K.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), U(!0));
                    },
                    children: (0, s.jsx)('div', { className: z.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
