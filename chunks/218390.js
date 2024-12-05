n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(913527),
    o = n.n(a),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    m = n(481060),
    g = n(570140),
    h = n(355467),
    p = n(37234),
    x = n(821849),
    T = n(230711),
    S = n(497321),
    _ = n(634894),
    E = n(410030),
    C = n(607070),
    f = n(100527),
    I = n(906732),
    N = n(211242),
    A = n(975298),
    b = n(15640),
    v = n(89057),
    j = n(406128),
    O = n(703656),
    R = n(246946),
    P = n(78839),
    D = n(483444),
    y = n(626135),
    B = n(63063),
    L = n(74538),
    Z = n(140465),
    F = n(286961),
    M = n(91802),
    k = n(533525),
    w = n(232076),
    U = n(197115),
    V = n(823188),
    G = n(504865),
    Y = n(179984),
    H = n(938736),
    z = n(386733),
    W = n(474936),
    K = n(981631),
    q = n(388032),
    X = n(328572),
    Q = n(881188),
    J = n(434691);
let $ = 'gifting_button',
    ee = 'payment modal';
function et(e) {
    let { premiumSubscription: t, isDiscountApplied: n, inReverseTrial: s, activeDiscountInfo: r, theme: l } = e,
        a = null != t.trialId,
        c = t.planIdFromItems === W.Xh.PREMIUM_YEAR_TIER_2,
        d = n || a,
        g = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        h = W.GP[t.planIdFromItems],
        p = L.ZP.formatPriceString(L.ZP.getDefaultPrice(h.id), h.interval);
    return d
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (a || !c) &&
                      (0, i.jsx)(V.Cy, {
                          text: a ? q.intl.string(q.t.qYKftb) : q.intl.string(q.t.EyjDRE),
                          className: X.topRimPillWithSparkles,
                          colorOptions: (0, u.wj)(l) ? V.VE.PREMIUM_TIER_2_WHITE_FILL : V.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                      }),
                  (a || !c) && (0, i.jsx)('div', { className: X.rimGlowTier2 }),
                  (0, i.jsx)(m.Heading, {
                      variant: 'heading-md/normal',
                      color: 'always-white',
                      className: X.trialHeader,
                      children: (() => {
                          var e, n, i;
                          if (a) {
                              if (s) {
                                  let e = L.ZP.getReverseTrialWeeks(t.trialId);
                                  return q.intl.format(q.t.jLglur, { weeks: e });
                              }
                              return q.intl.format(q.t['2CGBrq'], {
                                  remainingTime: g,
                                  price: p
                              });
                          }
                          if (c)
                              return q.intl.format(q.t['+qqh6u'], {
                                  percent: null !== (e = null == r ? void 0 : r.percentage) && void 0 !== e ? e : W.Bo,
                                  regularPrice: p
                              });
                          return q.intl.formatToPlainString(q.t['3Ziutb'], {
                              percent: null !== (n = null == r ? void 0 : r.percentage) && void 0 !== n ? n : W.M_,
                              regularPrice: p,
                              numMonths: null !== (i = null == r ? void 0 : r.duration) && void 0 !== i ? i : W.rt
                          });
                      })()
                  })
              ]
          })
        : (0, i.jsx)(G.Z, {
              variant: void 0,
              subscriptionTier: W.Si.TIER_2,
              interval: h.interval
          });
}
function en() {
    let e = (0, Z.t7)(),
        t = (0, Z.lr)(),
        n = (0, c.e7)([P.ZP], () => P.ZP.inReverseTrial()),
        s = (0, E.ZP)(),
        r = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        { fractionalState: a } = (0, A.Z)(),
        o = null !== r && null !== r.planIdFromItems;
    if (!o && a === W.a$.NONE) return null;
    let d = a !== W.a$.NONE,
        u = null !== r && null != r.trialId,
        g = e || u;
    return (0, i.jsxs)('div', {
        className: l()(X.tierCard, { [X.withTier2Rim]: g }),
        children: [
            (0, i.jsxs)('div', {
                className: X.tierInfo,
                children: [
                    (0, i.jsx)(D.Z, { className: X.tierTitle }),
                    d
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(V.mn, {
                                      text: q.intl.string(q.t.uXF4c3),
                                      className: X.fractionalPremiumTopRimPill,
                                      colorOptions: V.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(m.Heading, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: X.fractionalPremiumSubheader,
                                      children: q.intl.format(q.t.sK7fGh, { helpCenterLink: B.Z.getArticleURL(K.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : o
                          ? (0, i.jsx)(et, {
                                premiumSubscription: r,
                                isDiscountApplied: e,
                                inReverseTrial: n,
                                activeDiscountInfo: t,
                                theme: s
                            })
                          : null,
                    (0, i.jsx)(V.nT, { featureSet: d ? V.uZ.FRACTIONAL_PREMIUM : V.uZ.DEFAULT }),
                    (0, i.jsx)(m.Button, {
                        className: X.tierCardButton,
                        color: m.Button.Colors.WHITE,
                        onClick: () => {
                            y.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, p.xf)(),
                                (0, O.uL)(K.Z5c.APPLICATION_STORE);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: X.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: q.intl.string(q.t.VR2iVF)
                        })
                    }),
                    (0, i.jsx)(m.Button, {
                        className: X.managePlanButton,
                        look: m.Button.Looks.OUTLINED,
                        color: m.Button.Colors.WHITE,
                        onClick: () => {
                            y.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_subscriptions_button',
                                target: 'subscriptions settings'
                            }),
                                T.Z.open(K.oAB.SUBSCRIPTIONS);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: X.__invalid_managePlanButtonCTA,
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: q.intl.string(q.t['9uDy6O'])
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: X.tierImage,
                children: (0, i.jsx)('img', {
                    className: X.tierImage,
                    alt: '',
                    src: Q
                })
            })
        ]
    });
}
function ei(e) {
    let { config: t } = e,
        n = (0, c.e7)([C.Z], () => C.Z.useReducedMotion);
    return (0, i.jsxs)('div', {
        className: X.giftCardPromotion,
        children: [
            n
                ? (0, i.jsx)('img', {
                      alt: '',
                      className: X.giftImagePromotion,
                      'aria-hidden': !0,
                      src: t.getStaticImageUrl()
                  })
                : (0, i.jsx)(m.LottieAnimation, {
                      importData: t.getAnimatedImageData,
                      className: l()(X.giftImageAnimatedPromotion, X.giftImagePromotion)
                  }),
            (0, i.jsxs)('div', {
                className: X.giftInfoPromotion,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        className: X.giftCardPromotionBannerImage,
                        src: t.getBackgroundImageUrl()
                    }),
                    (0, i.jsx)(m.Heading, {
                        className: X.giftInfoTitlePromotion,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: t.title()
                    }),
                    (0, i.jsx)(m.Text, {
                        className: X.giftText,
                        color: 'always-white',
                        variant: 'text-sm/medium',
                        children: t.body()
                    }),
                    (0, i.jsx)(U.Z, {
                        isGift: !0,
                        className: l()(X.giftCardButton, X.halloweenColor),
                        look: m.Button.Looks.OUTLINED,
                        buttonText: q.intl.string(q.t.Ve9Ge3),
                        buttonTextClassName: X.giftButtonCTA,
                        color: m.Button.Colors.CUSTOM,
                        onClick: () => {
                            y.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
function es() {
    var e;
    let t = null === (e = (0, F.Z)()) || void 0 === e ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(ei, { config: t })
        : (0, i.jsxs)('div', {
              className: l()(X.giftCard),
              children: [
                  (0, i.jsx)('img', {
                      className: X.giftImage,
                      alt: '',
                      src: J
                  }),
                  (0, i.jsxs)('div', {
                      className: X.giftInfo,
                      children: [
                          (0, i.jsx)(m.Heading, {
                              className: X.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: q.intl.string(q.t['3KomGR'])
                          }),
                          (0, i.jsx)(m.Text, {
                              className: X.giftText,
                              variant: 'text-sm/normal',
                              children: q.intl.string(q.t.yQ06u7)
                          }),
                          (0, i.jsx)(U.Z, {
                              isGift: !0,
                              className: l()(X.giftCardButton, X.giftCardButtonColor),
                              look: m.Button.Looks.OUTLINED,
                              buttonText: q.intl.string(q.t.Ve9Ge3),
                              buttonTextClassName: X.giftButtonCTA,
                              color: m.Button.Colors.CUSTOM,
                              onClick: () => {
                                  y.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
    let e = (0, N.Q)(),
        { analyticsLocations: t } = (0, I.ZP)(f.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        r = (0, c.e7)([P.ZP], () => P.ZP.hasFetchedSubscriptions()),
        l = (0, b.V)(),
        [a, o] = s.useState(!0),
        { fractionalState: u } = (0, A.Z)({ forceFetch: !0 }),
        p = (0, M.n)(),
        T = null == p ? void 0 : p.countryCode,
        E = (0, c.e7)([R.Z], () => R.Z.enabled),
        C = 'PremiumManagementSettings';
    (0, _.j)({
        location: C + ' auto on',
        autoTrackExposure: !0
    }),
        (0, _.j)({
            location: C + ' auto off',
            autoTrackExposure: !1
        }),
        (0, w.B)(C);
    let O = (0, k.b)(C),
        D = (0, H.pn)(C);
    s.useEffect(() => {
        g.Z.wait(async () => {
            !E && !e && (await Promise.all([h.jg(), h.tZ(), (0, x.Y2)(T, null, K.JjL.DISCOVERY)])), o(!1);
        });
    }, [T, E, e]);
    let [B, L] = s.useState(!1);
    if (E) return (0, i.jsx)(S.Z, {});
    if (e) return (0, i.jsx)(v.c8, {});
    let Z = r && null !== n && l,
        F = u !== W.a$.NONE;
    if (!Z && !F && !a)
        return (0, i.jsx)(j.Z, {
            title: q.intl.string(q.t.dyq9TU),
            note: null
        });
    if ((!Z && !F) || a) return (0, i.jsx)(m.Spinner, {});
    let U = null !== n && null != n.trialId;
    return (0, i.jsx)(I.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: X.__invalid_container,
                    children: [
                        (0, i.jsx)(en, {}),
                        (O || D) && (0, i.jsx)(z.Z, { isInSettings: !0 }),
                        (0, i.jsx)(es, {}),
                        (0, i.jsx)(Y.Z, {
                            className: X.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: q.intl.string(q.t.dnVvQU),
                            hidePill: !U,
                            selectedPlanColumnClassName: X.tier2PlanComparisonTableBackground,
                            selectedPlanTier: W.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    onChange: (e) => {
                        e && !B && (y.default.track(K.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), L(!0));
                    },
                    children: (0, i.jsx)('div', { className: X.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
