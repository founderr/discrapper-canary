n.d(t, {
    C: function () {
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
    m = n(481060),
    g = n(570140),
    f = n(355467),
    p = n(37234),
    _ = n(821849),
    h = n(230711),
    E = n(497321),
    b = n(634894),
    x = n(410030),
    C = n(607070),
    T = n(100527),
    v = n(906732),
    N = n(211242),
    I = n(975298),
    S = n(15640),
    R = n(89057),
    j = n(406128),
    A = n(703656),
    P = n(246946),
    Z = n(78839),
    M = n(483444),
    B = n(626135),
    O = n(63063),
    w = n(74538),
    y = n(140465),
    k = n(286961),
    L = n(91802),
    U = n(533525),
    D = n(232076),
    H = n(197115),
    G = n(823188),
    V = n(504865),
    F = n(179984),
    W = n(938736),
    z = n(386733),
    Y = n(474936),
    K = n(981631),
    Q = n(388032),
    q = n(328572),
    J = n(881188),
    X = n(434691);
let $ = 'gifting_button',
    ee = 'payment modal';
function et(e) {
    let { premiumSubscription: t, isDiscountApplied: n, inReverseTrial: r, activeDiscountInfo: a, theme: s } = e,
        l = null != t.trialId,
        c = t.planIdFromItems === Y.Xh.PREMIUM_YEAR_TIER_2,
        d = n || l,
        g = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        f = Y.GP[t.planIdFromItems],
        p = w.ZP.formatPriceString(w.ZP.getDefaultPrice(f.id), f.interval);
    return d
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (l || !c) &&
                      (0, i.jsx)(G.Cy, {
                          text: l ? Q.intl.string(Q.t.qYKftb) : Q.intl.string(Q.t.EyjDRE),
                          className: q.topRimPillWithSparkles,
                          colorOptions: (0, u.wj)(s) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                      }),
                  (l || !c) && (0, i.jsx)('div', { className: q.rimGlowTier2 }),
                  (0, i.jsx)(m.Heading, {
                      variant: 'heading-md/normal',
                      color: 'always-white',
                      className: q.trialHeader,
                      children: (() => {
                          var e, n, i;
                          if (l) {
                              if (r) {
                                  let e = w.ZP.getReverseTrialWeeks(t.trialId);
                                  return Q.intl.format(Q.t.jLglur, { weeks: e });
                              }
                              return Q.intl.format(Q.t['2CGBrq'], {
                                  remainingTime: g,
                                  price: p
                              });
                          }
                          if (c)
                              return Q.intl.format(Q.t['+qqh6u'], {
                                  percent: null !== (e = null == a ? void 0 : a.percentage) && void 0 !== e ? e : Y.Bo,
                                  regularPrice: p
                              });
                          return Q.intl.formatToPlainString(Q.t['3Ziutb'], {
                              percent: null !== (n = null == a ? void 0 : a.percentage) && void 0 !== n ? n : Y.M_,
                              regularPrice: p,
                              numMonths: null !== (i = null == a ? void 0 : a.duration) && void 0 !== i ? i : Y.rt
                          });
                      })()
                  })
              ]
          })
        : (0, i.jsx)(V.Z, {
              variant: void 0,
              subscriptionTier: Y.Si.TIER_2,
              interval: f.interval
          });
}
function en() {
    let e = (0, y.t7)(),
        t = (0, y.lr)(),
        n = (0, c.e7)([Z.ZP], () => Z.ZP.inReverseTrial()),
        r = (0, x.ZP)(),
        a = (0, c.e7)([Z.ZP], () => Z.ZP.getPremiumTypeSubscription()),
        { fractionalState: l } = (0, I.Z)(),
        o = null !== a && null !== a.planIdFromItems;
    if (!o && l === Y.a$.NONE) return null;
    let d = l !== Y.a$.NONE,
        u = null !== a && null != a.trialId,
        g = e || u;
    return (0, i.jsxs)('div', {
        className: s()(q.tierCard, { [q.withTier2Rim]: g }),
        children: [
            (0, i.jsxs)('div', {
                className: q.tierInfo,
                children: [
                    (0, i.jsx)(M.Z, { className: q.tierTitle }),
                    d
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(G.mn, {
                                      text: Q.intl.string(Q.t.uXF4c3),
                                      className: q.fractionalPremiumTopRimPill,
                                      colorOptions: G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(m.Heading, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: q.fractionalPremiumSubheader,
                                      children: Q.intl.format(Q.t.sK7fGh, { helpCenterLink: O.Z.getArticleURL(K.BhN.FRACTIONAL_PREMIUM_ABOUT) })
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
                    (0, i.jsx)(G.nT, { featureSet: d ? G.uZ.FRACTIONAL_PREMIUM : G.uZ.DEFAULT }),
                    (0, i.jsx)(m.Button, {
                        className: q.tierCardButton,
                        color: m.Button.Colors.WHITE,
                        onClick: () => {
                            B.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, p.xf)(),
                                (0, A.uL)(K.Z5c.APPLICATION_STORE);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: q.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: Q.intl.string(Q.t.VR2iVF)
                        })
                    }),
                    (0, i.jsx)(m.Button, {
                        className: q.managePlanButton,
                        look: m.Button.Looks.OUTLINED,
                        color: m.Button.Colors.WHITE,
                        onClick: () => {
                            B.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_subscriptions_button',
                                target: 'subscriptions settings'
                            }),
                                h.Z.open(K.oAB.SUBSCRIPTIONS);
                        },
                        children: (0, i.jsx)(m.Text, {
                            className: q.__invalid_managePlanButtonCTA,
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: Q.intl.string(Q.t['9uDy6O'])
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: q.tierImage,
                children: (0, i.jsx)('img', {
                    className: q.tierImage,
                    alt: '',
                    src: J
                })
            })
        ]
    });
}
function ei(e) {
    let { className: t, config: n } = e,
        r = (0, c.e7)([C.Z], () => C.Z.useReducedMotion);
    return (0, i.jsxs)('div', {
        className: s()(q.giftCardPromotion, t),
        children: [
            r
                ? (0, i.jsx)('img', {
                      alt: '',
                      className: q.giftImagePromotion,
                      'aria-hidden': !0,
                      src: n.getStaticImageUrl()
                  })
                : (0, i.jsx)(m.LottieAnimation, {
                      importData: n.getAnimatedImageData,
                      className: s()(q.giftImageAnimatedPromotion, q.giftImagePromotion)
                  }),
            (0, i.jsxs)('div', {
                className: q.giftInfoPromotion,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        className: q.giftCardPromotionBannerImage,
                        src: n.getBackgroundImageUrl()
                    }),
                    (0, i.jsx)(m.Heading, {
                        className: q.giftInfoTitlePromotion,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: n.title()
                    }),
                    (0, i.jsx)(m.Text, {
                        className: q.giftText,
                        color: 'always-white',
                        variant: 'text-sm/medium',
                        children: n.body()
                    }),
                    (0, i.jsx)(H.Z, {
                        isGift: !0,
                        className: s()(q.giftCardButton, q.halloweenColor),
                        look: m.Button.Looks.OUTLINED,
                        buttonText: Q.intl.string(Q.t.Ve9Ge3),
                        buttonTextClassName: q.giftButtonCTA,
                        color: m.Button.Colors.CUSTOM,
                        onClick: () => {
                            B.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
    var e;
    let t = null === (e = (0, k.Z)()) || void 0 === e ? void 0 : e.billingSettingsMarketingBanner;
    return null != t
        ? (0, i.jsx)(ei, { config: t })
        : (0, i.jsxs)('div', {
              className: s()(q.giftCard),
              children: [
                  (0, i.jsx)('img', {
                      className: q.giftImage,
                      alt: '',
                      src: X
                  }),
                  (0, i.jsxs)('div', {
                      className: q.giftInfo,
                      children: [
                          (0, i.jsx)(m.Heading, {
                              className: q.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: Q.intl.string(Q.t['3KomGR'])
                          }),
                          (0, i.jsx)(m.Text, {
                              className: q.giftText,
                              variant: 'text-sm/normal',
                              children: Q.intl.string(Q.t.yQ06u7)
                          }),
                          (0, i.jsx)(H.Z, {
                              isGift: !0,
                              className: s()(q.giftCardButton, q.giftCardButtonColor),
                              look: m.Button.Looks.OUTLINED,
                              buttonText: Q.intl.string(Q.t.Ve9Ge3),
                              buttonTextClassName: q.giftButtonCTA,
                              color: m.Button.Colors.CUSTOM,
                              onClick: () => {
                                  B.default.track(K.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
        { analyticsLocations: t } = (0, v.ZP)(T.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([Z.ZP], () => Z.ZP.getPremiumTypeSubscription()),
        a = (0, c.e7)([Z.ZP], () => Z.ZP.hasFetchedSubscriptions()),
        s = (0, S.V)(),
        [l, o] = r.useState(!0),
        { fractionalState: u } = (0, I.Z)({ forceFetch: !0 }),
        p = (0, L.n)(),
        h = null == p ? void 0 : p.countryCode,
        x = (0, c.e7)([P.Z], () => P.Z.enabled),
        C = 'PremiumManagementSettings';
    (0, b.j)({
        location: C + ' auto on',
        autoTrackExposure: !0
    }),
        (0, b.j)({
            location: C + ' auto off',
            autoTrackExposure: !1
        }),
        (0, D.B)(C);
    let A = (0, U.b)(C),
        M = (0, W.pn)(C);
    r.useEffect(() => {
        g.Z.wait(async () => {
            !x && !e && (await Promise.all([f.jg(), f.tZ(), (0, _.Y2)(h, null, K.JjL.DISCOVERY)])), o(!1);
        });
    }, [h, x, e]);
    let [O, w] = r.useState(!1);
    if (x) return (0, i.jsx)(E.Z, {});
    if (e) return (0, i.jsx)(R.c8, {});
    let y = a && null !== n && s,
        k = u !== Y.a$.NONE;
    if (!y && !k && !l)
        return (0, i.jsx)(j.Z, {
            title: Q.intl.string(Q.t.dyq9TU),
            note: null
        });
    if ((!y && !k) || l) return (0, i.jsx)(m.Spinner, {});
    let H = null !== n && null != n.trialId;
    return (0, i.jsx)(v.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: q.__invalid_container,
                    children: [
                        (0, i.jsx)(en, {}),
                        (A || M) && (0, i.jsx)(z.Z, { isInSettings: !0 }),
                        (0, i.jsx)(er, {}),
                        (0, i.jsx)(F.Z, {
                            className: q.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: Q.intl.string(Q.t.dnVvQU),
                            hidePill: !H,
                            selectedPlanColumnClassName: q.tier2PlanComparisonTableBackground,
                            selectedPlanTier: Y.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    onChange: (e) => {
                        e && !O && (B.default.track(K.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), w(!0));
                    },
                    children: (0, i.jsx)('div', { className: q.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
