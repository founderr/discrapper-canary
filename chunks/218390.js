n.d(t, {
    d: function () {
        return ei;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    g = n(481060),
    m = n(570140),
    f = n(355467),
    p = n(37234),
    _ = n(821849),
    h = n(230711),
    E = n(497321),
    b = n(634894),
    x = n(410030),
    C = n(100527),
    v = n(906732),
    T = n(211242),
    N = n(975298),
    I = n(15640),
    S = n(89057),
    R = n(406128),
    A = n(703656),
    j = n(246946),
    P = n(78839),
    Z = n(483444),
    B = n(626135),
    M = n(63063),
    O = n(74538),
    w = n(140465),
    y = n(599659),
    k = n(91802),
    L = n(533525),
    U = n(232076),
    D = n(197115),
    H = n(823188),
    V = n(504865),
    G = n(179984),
    F = n(938736),
    W = n(386733),
    z = n(474936),
    Y = n(981631),
    K = n(388032),
    Q = n(328572),
    J = n(881188),
    q = n(434691),
    X = n(507579);
let $ = 'gifting_button',
    ee = 'payment modal';
function et(e) {
    let { premiumSubscription: t, isDiscountApplied: n, inReverseTrial: r, activeDiscountInfo: a, theme: s } = e,
        l = null != t.trialId,
        c = t.planIdFromItems === z.Xh.PREMIUM_YEAR_TIER_2,
        d = n || l,
        m = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        f = z.GP[t.planIdFromItems],
        p = O.ZP.formatPriceString(O.ZP.getDefaultPrice(f.id), f.interval);
    return d
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (l || !c) &&
                      (0, i.jsx)(H.Cy, {
                          text: l ? K.intl.string(K.t.qYKftb) : K.intl.string(K.t.EyjDRE),
                          className: Q.topRimPillWithSparkles,
                          colorOptions: (0, u.wj)(s) ? H.VE.PREMIUM_TIER_2_WHITE_FILL : H.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                      }),
                  (l || !c) && (0, i.jsx)('div', { className: Q.rimGlowTier2 }),
                  (0, i.jsx)(g.Heading, {
                      variant: 'heading-md/normal',
                      color: 'always-white',
                      className: Q.trialHeader,
                      children: (() => {
                          var e, n, i;
                          if (l) {
                              if (r) {
                                  let e = O.ZP.getReverseTrialWeeks(t.trialId);
                                  return K.intl.format(K.t.jLglur, { weeks: e });
                              }
                              return K.intl.format(K.t['2CGBrq'], {
                                  remainingTime: m,
                                  price: p
                              });
                          }
                          if (c)
                              return K.intl.format(K.t['+qqh6u'], {
                                  percent: null !== (e = null == a ? void 0 : a.percentage) && void 0 !== e ? e : z.Bo,
                                  regularPrice: p
                              });
                          return K.intl.formatToPlainString(K.t['3Ziutb'], {
                              percent: null !== (n = null == a ? void 0 : a.percentage) && void 0 !== n ? n : z.M_,
                              regularPrice: p,
                              numMonths: null !== (i = null == a ? void 0 : a.duration) && void 0 !== i ? i : z.rt
                          });
                      })()
                  })
              ]
          })
        : (0, i.jsx)(V.Z, {
              variant: void 0,
              subscriptionTier: z.Si.TIER_2,
              interval: f.interval
          });
}
function en() {
    let e = (0, w.t7)(),
        t = (0, w.lr)(),
        n = (0, c.e7)([P.ZP], () => P.ZP.inReverseTrial()),
        r = (0, x.ZP)(),
        a = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        { fractionalState: l } = (0, N.Z)(),
        o = null !== a && null !== a.planIdFromItems;
    if (!o && l === z.a$.NONE) return null;
    let d = l !== z.a$.NONE,
        u = null !== a && null != a.trialId,
        m = e || u;
    return (0, i.jsxs)('div', {
        className: s()(Q.tierCard, { [Q.withTier2Rim]: m }),
        children: [
            (0, i.jsxs)('div', {
                className: Q.tierInfo,
                children: [
                    (0, i.jsx)(Z.Z, { className: Q.tierTitle }),
                    d
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(H.mn, {
                                      text: K.intl.string(K.t.uXF4c3),
                                      className: Q.fractionalPremiumTopRimPill,
                                      colorOptions: H.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(g.Heading, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: Q.fractionalPremiumSubheader,
                                      children: K.intl.format(K.t.sK7fGh, { helpCenterLink: M.Z.getArticleURL(Y.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : o
                          ? (0, i.jsx)(et, {
                                premiumSubscription: a,
                                isDiscountApplied: e,
                                inReverseTrial: n,
                                activeDiscountInfo: t,
                                theme: r
                            })
                          : null,
                    (0, i.jsx)(H.nT, { featureSet: d ? H.uZ.FRACTIONAL_PREMIUM : H.uZ.DEFAULT }),
                    (0, i.jsx)(g.Button, {
                        className: Q.tierCardButton,
                        color: g.Button.Colors.WHITE,
                        onClick: () => {
                            B.default.track(Y.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, p.xf)(),
                                (0, A.uL)(Y.Z5c.APPLICATION_STORE);
                        },
                        children: (0, i.jsx)(g.Text, {
                            className: Q.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: K.intl.string(K.t.VR2iVF)
                        })
                    }),
                    (0, i.jsx)(g.Button, {
                        className: Q.managePlanButton,
                        look: g.Button.Looks.OUTLINED,
                        color: g.Button.Colors.WHITE,
                        onClick: () => {
                            B.default.track(Y.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_subscriptions_button',
                                target: 'subscriptions settings'
                            }),
                                h.Z.open(Y.oAB.SUBSCRIPTIONS);
                        },
                        children: (0, i.jsx)(g.Text, {
                            className: Q.__invalid_managePlanButtonCTA,
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: K.intl.string(K.t['9uDy6O'])
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: Q.tierImage,
                children: (0, i.jsx)('img', {
                    className: Q.tierImage,
                    alt: '',
                    src: J
                })
            })
        ]
    });
}
function ei(e) {
    let { className: t } = e;
    return (0, i.jsxs)('div', {
        className: s()(Q.giftCard, Q.giftCardHalloween, t),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: s()(Q.giftImage, Q.giftImageHalloween),
                'aria-hidden': !0,
                src: X.Z
            }),
            (0, i.jsxs)('div', {
                className: Q.giftInfo,
                children: [
                    (0, i.jsx)(g.Heading, {
                        className: Q.giftTitle,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: K.intl.string(K.t['YMI+UV'])
                    }),
                    (0, i.jsx)(g.Text, {
                        className: Q.giftText,
                        color: 'always-white',
                        variant: 'text-sm/normal',
                        children: K.intl.string(K.t.TWxqHh)
                    }),
                    (0, i.jsx)(D.Z, {
                        isGift: !0,
                        className: s()(Q.giftCardButton, Q.halloweenColor),
                        look: g.Button.Looks.OUTLINED,
                        buttonText: K.intl.string(K.t.Ve9Ge3),
                        buttonTextClassName: Q.giftButtonCTA,
                        color: g.Button.Colors.CUSTOM,
                        onClick: () => {
                            B.default.track(Y.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: $,
                                target: ee
                            });
                        }
                    })
                ]
            })
        ]
    });
}
function er() {
    let { enabled: e } = y.O.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: !1 });
    return e
        ? (0, i.jsx)(ei, {})
        : (0, i.jsxs)('div', {
              className: s()(Q.giftCard),
              children: [
                  (0, i.jsx)('img', {
                      className: Q.giftImage,
                      alt: '',
                      src: q
                  }),
                  (0, i.jsxs)('div', {
                      className: Q.giftInfo,
                      children: [
                          (0, i.jsx)(g.Heading, {
                              className: Q.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: K.intl.string(K.t['3KomGR'])
                          }),
                          (0, i.jsx)(g.Text, {
                              className: Q.giftText,
                              variant: 'text-sm/normal',
                              children: K.intl.string(K.t.yQ06u7)
                          }),
                          (0, i.jsx)(D.Z, {
                              isGift: !0,
                              className: s()(Q.giftCardButton, Q.giftCardButtonColor),
                              look: g.Button.Looks.OUTLINED,
                              buttonText: K.intl.string(K.t.Ve9Ge3),
                              buttonTextClassName: Q.giftButtonCTA,
                              color: g.Button.Colors.CUSTOM,
                              onClick: () => {
                                  B.default.track(Y.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: $,
                                      target: ee
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
t.Z = function () {
    let e = (0, T.Q)(),
        { analyticsLocations: t } = (0, v.ZP)(C.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        a = (0, c.e7)([P.ZP], () => P.ZP.hasFetchedSubscriptions()),
        s = (0, I.V)(),
        [l, o] = r.useState(!0),
        { fractionalState: u } = (0, N.Z)({ forceFetch: !0 }),
        p = (0, k.n)(),
        h = null == p ? void 0 : p.countryCode,
        x = (0, c.e7)([j.Z], () => j.Z.enabled),
        A = 'PremiumManagementSettings';
    (0, b.j)({
        location: A + ' auto on',
        autoTrackExposure: !0
    }),
        (0, b.j)({
            location: A + ' auto off',
            autoTrackExposure: !1
        }),
        (0, U.B)(A);
    let Z = (0, L.b)(A),
        M = (0, F.pn)(A);
    r.useEffect(() => {
        m.Z.wait(async () => {
            !x && !e && (await Promise.all([f.jg(), f.tZ(), (0, _.Y2)(h, null, Y.JjL.DISCOVERY)])), o(!1);
        });
    }, [h, x, e]);
    let [O, w] = r.useState(!1);
    if (x) return (0, i.jsx)(E.Z, {});
    if (e) return (0, i.jsx)(S.c8, {});
    let y = a && null !== n && s,
        D = u !== z.a$.NONE;
    if (!y && !D && !l)
        return (0, i.jsx)(R.Z, {
            title: K.intl.string(K.t.dyq9TU),
            note: null
        });
    if ((!y && !D) || l) return (0, i.jsx)(g.Spinner, {});
    let H = null !== n && null != n.trialId;
    return (0, i.jsx)(v.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: Q.__invalid_container,
                    children: [
                        (0, i.jsx)(en, {}),
                        (Z || M) && (0, i.jsx)(W.Z, { isInSettings: !0 }),
                        (0, i.jsx)(er, {}),
                        (0, i.jsx)(G.Z, {
                            className: Q.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: K.intl.string(K.t.dnVvQU),
                            hidePill: !H,
                            selectedPlanColumnClassName: Q.tier2PlanComparisonTableBackground,
                            selectedPlanTier: z.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    onChange: (e) => {
                        e && !O && (B.default.track(Y.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), w(!0));
                    },
                    children: (0, i.jsx)('div', { className: Q.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
