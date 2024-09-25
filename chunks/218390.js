n.d(t, {
    d: function () {
        return $;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    o = n(913527),
    l = n.n(o),
    c = n(442837),
    d = n(622535),
    _ = n(780384),
    u = n(481060),
    E = n(570140),
    T = n(355467),
    I = n(37234),
    R = n(821849),
    m = n(230711),
    g = n(497321),
    N = n(634894),
    C = n(410030),
    p = n(100527),
    f = n(906732),
    A = n(211242),
    S = n(15640),
    M = n(89057),
    h = n(406128),
    x = n(703656),
    b = n(246946),
    O = n(78839),
    P = n(483444),
    v = n(626135),
    L = n(74538),
    Z = n(140465),
    D = n(599659),
    B = n(91802),
    U = n(898997),
    j = n(197115),
    G = n(823188),
    w = n(504865),
    y = n(179984),
    H = n(938736),
    k = n(386733),
    F = n(474936),
    V = n(981631),
    W = n(689938),
    K = n(957781),
    Y = n(881188),
    z = n(434691),
    Q = n(507579);
let q = 'gifting_button',
    X = 'payment modal';
function J() {
    let e = (0, c.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
        t = (0, Z.t7)(),
        n = (0, Z.lr)(),
        a = (0, c.e7)([O.ZP], () => O.ZP.inReverseTrial()),
        r = (0, C.ZP)();
    if (null == e || null == e.planIdFromItems) return null;
    let o = null != e.trialId,
        d = e.planIdFromItems === F.Xh.PREMIUM_YEAR_TIER_2,
        E = t || o,
        T = null != e.trialEndsAt ? l()(e.trialEndsAt).diff(l()(), 'd') : 0,
        R = F.GP[e.planIdFromItems],
        g = L.ZP.formatPriceString(L.ZP.getDefaultPrice(R.id), R.interval);
    return (0, s.jsxs)('div', {
        className: i()(K.tierCard, { [K.withTier2Rim]: E }),
        children: [
            (0, s.jsxs)('div', {
                className: K.tierInfo,
                children: [
                    (0, s.jsx)(P.Z, { className: K.tierTitle }),
                    E
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (o || !d) &&
                                      (0, s.jsx)(G.Cy, {
                                          text: o ? W.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : W.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                                          className: K.topRimPill,
                                          colorOptions: (0, _.wj)(r) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      }),
                                  (o || !d) && (0, s.jsx)('div', { className: K.rimGlowTier2 }),
                                  (0, s.jsx)(u.Heading, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: K.trialHeader,
                                      children: (() => {
                                          var t, s, r;
                                          if (o) {
                                              if (a) {
                                                  let t = L.ZP.getReverseTrialWeeks(e.trialId);
                                                  return W.Z.Messages.REVERSE_TRIAL_SUBSCRIBER_MANAGEMENT_SUBHEADER.format({ weeks: t });
                                              }
                                              return W.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                                  remainingTime: T,
                                                  price: g
                                              });
                                          }
                                          if (d)
                                              return W.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                                                  percent: null !== (t = null == n ? void 0 : n.percentage) && void 0 !== t ? t : F.Bo,
                                                  regularPrice: g
                                              });
                                          return W.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                                              percent: null !== (s = null == n ? void 0 : n.percentage) && void 0 !== s ? s : F.M_,
                                              regularPrice: g,
                                              numMonths: null !== (r = null == n ? void 0 : n.duration) && void 0 !== r ? r : F.rt
                                          });
                                      })()
                                  })
                              ]
                          })
                        : (0, s.jsx)(w.Z, {
                              variant: void 0,
                              subscriptionTier: F.Si.TIER_2,
                              interval: R.interval
                          }),
                    (0, s.jsx)(G.nT, {}),
                    (0, s.jsx)(u.Button, {
                        className: K.tierCardButton,
                        color: u.Button.Colors.WHITE,
                        onClick: () => {
                            v.default.track(V.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, I.xf)(),
                                (0, x.uL)(V.Z5c.APPLICATION_STORE);
                        },
                        children: (0, s.jsx)(u.Text, {
                            className: K.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: W.Z.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
                        })
                    }),
                    (0, s.jsx)(u.Button, {
                        className: K.managePlanButton,
                        look: u.Button.Looks.OUTLINED,
                        color: u.Button.Colors.WHITE,
                        onClick: () => {
                            v.default.track(V.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_subscriptions_button',
                                target: 'subscriptions settings'
                            }),
                                m.Z.open(V.oAB.SUBSCRIPTIONS);
                        },
                        children: (0, s.jsx)(u.Text, {
                            className: K.__invalid_managePlanButtonCTA,
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: W.Z.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
                        })
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: K.tierImage,
                children: (0, s.jsx)('img', {
                    className: K.tierImage,
                    alt: '',
                    src: Y
                })
            })
        ]
    });
}
function $(e) {
    let { className: t } = e;
    return (0, s.jsxs)('div', {
        className: i()(K.giftCard, K.giftCardHalloween, t),
        children: [
            (0, s.jsx)('img', {
                alt: '',
                className: i()(K.giftImage, K.giftImageHalloween),
                'aria-hidden': !0,
                src: Q.Z
            }),
            (0, s.jsxs)('div', {
                className: K.giftInfo,
                children: [
                    (0, s.jsx)(u.Heading, {
                        className: K.giftTitle,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: W.Z.Messages.NITROWEEN_GIFT_UPSELL_TITLE
                    }),
                    (0, s.jsx)(u.Text, {
                        className: K.giftText,
                        color: 'always-white',
                        variant: 'text-sm/normal',
                        children: W.Z.Messages.NITROWEEN_DESKTOP_BILLING_SETTINGS_SUBTITLE
                    }),
                    (0, s.jsx)(j.Z, {
                        isGift: !0,
                        className: i()(K.giftCardButton, K.halloweenColor),
                        look: u.Button.Looks.OUTLINED,
                        buttonText: W.Z.Messages.GIFT_NITRO,
                        buttonTextClassName: K.giftButtonCTA,
                        color: u.Button.Colors.CUSTOM,
                        onClick: () => {
                            v.default.track(V.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: q,
                                target: X
                            });
                        }
                    })
                ]
            })
        ]
    });
}
function ee() {
    let { enabled: e } = D.O.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: !1 });
    return e
        ? (0, s.jsx)($, {})
        : (0, s.jsxs)('div', {
              className: i()(K.giftCard),
              children: [
                  (0, s.jsx)('img', {
                      className: K.giftImage,
                      alt: '',
                      src: z
                  }),
                  (0, s.jsxs)('div', {
                      className: K.giftInfo,
                      children: [
                          (0, s.jsx)(u.Heading, {
                              className: K.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
                          }),
                          (0, s.jsx)(u.Text, {
                              className: K.giftText,
                              variant: 'text-sm/normal',
                              children: W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
                          }),
                          (0, s.jsx)(j.Z, {
                              isGift: !0,
                              className: i()(K.giftCardButton, K.giftCardButtonColor),
                              look: u.Button.Looks.OUTLINED,
                              buttonText: W.Z.Messages.GIFT_NITRO,
                              buttonTextClassName: K.giftButtonCTA,
                              color: u.Button.Colors.CUSTOM,
                              onClick: () => {
                                  v.default.track(V.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: q,
                                      target: X
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
t.Z = function () {
    let e = (0, A.Q)(),
        { analyticsLocations: t } = (0, f.ZP)(p.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
        r = (0, c.e7)([O.ZP], () => O.ZP.hasFetchedSubscriptions()),
        i = (0, S.V)(),
        [o, l] = a.useState(!0),
        _ = (0, B.n)(),
        I = null == _ ? void 0 : _.countryCode,
        m = (0, c.e7)([b.Z], () => b.Z.enabled),
        C = 'PremiumManagementSettings';
    (0, N.j)({
        location: C + ' auto on',
        autoTrackExposure: !0
    }),
        (0, N.j)({
            location: C + ' auto off',
            autoTrackExposure: !1
        }),
        (0, U.B)('PremiumManagementSettings');
    let x = (0, H.bD)('PremiumManagementSettings'),
        P = (0, H.pn)('PremiumManagementSettings');
    a.useEffect(() => {
        E.Z.wait(async () => {
            !m && !e && (await Promise.all([T.jg(), T.tZ(), (0, R.Y2)(I, null, V.JjL.DISCOVERY)])), l(!1);
        });
    }, [I, m, e]);
    let [L, Z] = a.useState(!1);
    if (m) return (0, s.jsx)(g.Z, {});
    if (e) return (0, s.jsx)(M.c8, {});
    if ((!r || null == n || !i) && !o)
        return (0, s.jsx)(h.Z, {
            title: W.Z.Messages.REDIRECTED_CALLBACK_ERROR,
            note: null
        });
    if (!r || null == n || !i || o) return (0, s.jsx)(u.Spinner, {});
    let D = null != n.trialId;
    return (0, s.jsx)(f.Gt, {
        value: t,
        children: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)('div', {
                    className: K.__invalid_container,
                    children: [
                        (0, s.jsx)(J, {}),
                        (x || P) && (0, s.jsx)(k.Z, { isInSettings: !0 }),
                        (0, s.jsx)(ee, {}),
                        (0, s.jsx)(y.Z, {
                            className: K.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: W.Z.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
                            hidePill: !D,
                            selectedPlanColumnClassName: K.tier2PlanComparisonTableBackground,
                            selectedPlanTier: F.p9.TIER_2
                        })
                    ]
                }),
                (0, s.jsx)(d.$, {
                    onChange: (e) => {
                        e && !L && (v.default.track(V.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), Z(!0));
                    },
                    children: (0, s.jsx)('div', { className: K.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
