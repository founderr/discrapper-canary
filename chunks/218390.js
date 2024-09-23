t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(913527),
    l = t.n(o),
    c = t(442837),
    d = t(622535),
    _ = t(780384),
    u = t(481060),
    E = t(570140),
    T = t(355467),
    S = t(37234),
    I = t(821849),
    N = t(230711),
    m = t(497321),
    C = t(634894),
    A = t(410030),
    g = t(100527),
    h = t(906732),
    O = t(211242),
    p = t(15640),
    R = t(89057),
    x = t(406128),
    f = t(703656),
    M = t(246946),
    D = t(78839),
    L = t(483444),
    P = t(626135),
    b = t(74538),
    Z = t(140465),
    v = t(599659),
    j = t(91802),
    B = t(898997),
    U = t(197115),
    G = t(823188),
    F = t(504865),
    y = t(179984),
    V = t(938736),
    Y = t(386733),
    w = t(474936),
    k = t(981631),
    H = t(689938),
    W = t(957781),
    K = t(881188),
    z = t(434691),
    Q = t(507579);
let X = 'gifting_button',
    q = 'payment modal';
function J() {
    let e = (0, c.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
        s = (0, Z.t7)(),
        t = (0, Z.lr)(),
        a = (0, c.e7)([D.ZP], () => D.ZP.inReverseTrial()),
        i = (0, A.ZP)();
    if (null == e || null == e.planIdFromItems) return null;
    let o = null != e.trialId,
        d = e.planIdFromItems === w.Xh.PREMIUM_YEAR_TIER_2,
        E = s || o,
        T = null != e.trialEndsAt ? l()(e.trialEndsAt).diff(l()(), 'd') : 0,
        I = w.GP[e.planIdFromItems],
        m = b.ZP.formatPriceString(b.ZP.getDefaultPrice(I.id), I.interval);
    return (0, n.jsxs)('div', {
        className: r()(W.tierCard, { [W.withTier2Rim]: E }),
        children: [
            (0, n.jsxs)('div', {
                className: W.tierInfo,
                children: [
                    (0, n.jsx)(L.Z, { className: W.tierTitle }),
                    E
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (o || !d) &&
                                      (0, n.jsx)(G.Cy, {
                                          text: o ? H.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : H.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                                          className: W.topRimPill,
                                          colorOptions: (0, _.wj)(i) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                  (o || !d) && (0, n.jsx)('div', { className: W.rimGlowTier2 }),
                                  (0, n.jsx)(u.Heading, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: W.trialHeader,
                                      children: (() => {
                                          var s, n, i;
                                          if (o) {
                                              if (a) {
                                                  let s = b.ZP.getReverseTrialWeeks(e.trialId);
                                                  return H.Z.Messages.REVERSE_TRIAL_SUBSCRIBER_MANAGEMENT_SUBHEADER.format({ weeks: s });
                                              }
                                              return H.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                                  remainingTime: T,
                                                  price: m
                                              });
                                          }
                                          if (d)
                                              return H.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                                                  percent: null !== (s = null == t ? void 0 : t.percentage) && void 0 !== s ? s : w.Bo,
                                                  regularPrice: m
                                              });
                                          return H.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                                              percent: null !== (n = null == t ? void 0 : t.percentage) && void 0 !== n ? n : w.M_,
                                              regularPrice: m,
                                              numMonths: null !== (i = null == t ? void 0 : t.duration) && void 0 !== i ? i : w.rt
                                          });
                                      })()
                                  })
                              ]
                          })
                        : (0, n.jsx)(F.Z, {
                              variant: void 0,
                              subscriptionTier: w.Si.TIER_2,
                              interval: I.interval
                          }),
                    (0, n.jsx)(G.nT, {}),
                    (0, n.jsx)(u.Button, {
                        className: W.tierCardButton,
                        color: u.Button.Colors.WHITE,
                        onClick: () => {
                            P.default.track(k.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, S.xf)(),
                                (0, f.uL)(k.Z5c.APPLICATION_STORE);
                        },
                        children: (0, n.jsx)(u.Text, {
                            className: W.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: H.Z.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
                        })
                    }),
                    (0, n.jsx)(u.Button, {
                        className: W.managePlanButton,
                        look: u.Button.Looks.OUTLINED,
                        color: u.Button.Colors.WHITE,
                        onClick: () => {
                            P.default.track(k.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_subscriptions_button',
                                target: 'subscriptions settings'
                            }),
                                N.Z.open(k.oAB.SUBSCRIPTIONS);
                        },
                        children: (0, n.jsx)(u.Text, {
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
function $() {
    return (0, n.jsxs)('div', {
        className: r()(W.giftCard, W.giftCardHalloween),
        children: [
            (0, n.jsx)('img', {
                alt: '',
                className: r()(W.giftImage, W.giftImageHalloween),
                'aria-hidden': !0,
                src: Q.Z
            }),
            (0, n.jsx)('div', {
                className: r()(W.giftImage, W.giftImageHalloweenSpacer),
                'aria-hidden': !0
            }),
            (0, n.jsxs)('div', {
                className: W.giftInfo,
                children: [
                    (0, n.jsx)(u.Heading, {
                        className: W.giftTitle,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: H.Z.Messages.NITROWEEN_GIFT_UPSELL_TITLE
                    }),
                    (0, n.jsx)(u.Text, {
                        className: W.giftText,
                        color: 'always-white',
                        variant: 'text-sm/normal',
                        children: H.Z.Messages.NITROWEEN_DESKTOP_BILLING_SETTINGS_SUBTITLE
                    }),
                    (0, n.jsx)(U.Z, {
                        isGift: !0,
                        className: r()(W.giftCardButton, W.halloweenColor),
                        look: u.Button.Looks.OUTLINED,
                        buttonText: H.Z.Messages.GIFT_NITRO,
                        buttonTextClassName: W.giftButtonCTA,
                        color: u.Button.Colors.CUSTOM,
                        onClick: () => {
                            P.default.track(k.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: X,
                                target: q
                            });
                        }
                    })
                ]
            })
        ]
    });
}
function ee() {
    let { enabled: e } = v.O.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: !1 });
    return e
        ? (0, n.jsx)($, {})
        : (0, n.jsxs)('div', {
              className: r()(W.giftCard),
              children: [
                  (0, n.jsx)('img', {
                      className: W.giftImage,
                      alt: '',
                      src: z
                  }),
                  (0, n.jsxs)('div', {
                      className: W.giftInfo,
                      children: [
                          (0, n.jsx)(u.Heading, {
                              className: W.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: H.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
                          }),
                          (0, n.jsx)(u.Text, {
                              className: W.giftText,
                              variant: 'text-sm/normal',
                              children: H.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
                          }),
                          (0, n.jsx)(U.Z, {
                              isGift: !0,
                              className: r()(W.giftCardButton, W.giftCardButtonColor),
                              look: u.Button.Looks.OUTLINED,
                              buttonText: H.Z.Messages.GIFT_NITRO,
                              buttonTextClassName: W.giftButtonCTA,
                              color: u.Button.Colors.CUSTOM,
                              onClick: () => {
                                  P.default.track(k.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: X,
                                      target: q
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
        { analyticsLocations: s } = (0, h.ZP)(g.Z.PREMIUM_SETTINGS),
        t = (0, c.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
        i = (0, c.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
        r = (0, p.V)(),
        [o, l] = a.useState(!0),
        _ = (0, j.n)(),
        S = null == _ ? void 0 : _.countryCode,
        N = (0, c.e7)([M.Z], () => M.Z.enabled),
        A = 'PremiumManagementSettings';
    (0, C.j)({
        location: A + ' auto on',
        autoTrackExposure: !0
    }),
        (0, C.j)({
            location: A + ' auto off',
            autoTrackExposure: !1
        }),
        (0, B.B)('PremiumManagementSettings');
    let f = (0, V.bD)('PremiumManagementSettings'),
        L = (0, V.pn)('PremiumManagementSettings');
    a.useEffect(() => {
        E.Z.wait(async () => {
            !N && !e && (await Promise.all([T.jg(), T.tZ(), (0, I.Y2)(S, null, k.JjL.DISCOVERY)])), l(!1);
        });
    }, [S, N, e]);
    let [b, Z] = a.useState(!1);
    if (N) return (0, n.jsx)(m.Z, {});
    if (e) return (0, n.jsx)(R.c8, {});
    if ((!i || null == t || !r) && !o)
        return (0, n.jsx)(x.Z, {
            title: H.Z.Messages.REDIRECTED_CALLBACK_ERROR,
            note: null
        });
    if (!i || null == t || !r || o) return (0, n.jsx)(u.Spinner, {});
    let v = null != t.trialId;
    return (0, n.jsx)(h.Gt, {
        value: s,
        children: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: W.__invalid_container,
                    children: [
                        (0, n.jsx)(J, {}),
                        (f || L) && (0, n.jsx)(Y.Z, { isInSettings: !0 }),
                        (0, n.jsx)(ee, {}),
                        (0, n.jsx)(y.Z, {
                            className: W.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: H.Z.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
                            hidePill: !v,
                            selectedPlanColumnClassName: W.tier2PlanComparisonTableBackground,
                            selectedPlanTier: w.p9.TIER_2
                        })
                    ]
                }),
                (0, n.jsx)(d.$, {
                    onChange: (e) => {
                        e && !b && (P.default.track(k.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: s }), Z(!0));
                    },
                    children: (0, n.jsx)('div', { className: W.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
