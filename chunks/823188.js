n.d(t, {
    Cy: function () {
        return Q;
    },
    Gq: function () {
        return et;
    },
    NN: function () {
        return c;
    },
    VE: function () {
        return o;
    },
    ZP: function () {
        return ei;
    },
    mn: function () {
        return q;
    },
    nT: function () {
        return en;
    },
    uZ: function () {
        return u;
    },
    wp: function () {
        return er;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d = n(200651);
n(192379);
var f = n(120356),
    _ = n.n(f),
    p = n(913527),
    h = n.n(p),
    m = n(442837),
    g = n(692547),
    E = n(780384),
    v = n(481060),
    I = n(410030),
    b = n(100527),
    T = n(906732),
    S = n(535322),
    y = n(706454),
    A = n(594174),
    N = n(78839),
    C = n(709586),
    R = n(483444),
    O = n(599250),
    D = n(930153),
    L = n(74538),
    x = n(357355),
    w = n(140465),
    M = n(650032),
    P = n(515593),
    k = n(104494),
    U = n(639119),
    G = n(230916),
    B = n(346497),
    Z = n(504865),
    F = n(63802),
    V = n(318990),
    j = n(474936),
    H = n(217702),
    Y = n(388032),
    W = n(645512),
    K = n(476945),
    z = n(945182);
function q(e) {
    let { text: t, className: n, colorOptions: r = 2 } = e;
    return (0, d.jsx)('div', {
        className: _()(n, W.freeTrialPill, {
            [W.freeTrialPillTier0GradientFill]: 1 === r,
            [W.freeTrialPillTier2GradientFill]: 3 === r,
            [W.freeTrialPillTier2OldGradientFill]: 4 === r,
            [W.lightBackgroundPill]: 5 === r,
            [W.greyBackgroundPill]: 6 === r
        }),
        children: (0, d.jsx)(v.Text, {
            variant: 'text-xs/bold',
            className: _()(W.freeTrialPillText, {
                [W.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
                [W.freeTrialPillTextTier0]: 0 === r,
                [W.freeTrialPillTextTier2]: 2 === r || 6 === r
            }),
            children: t
        })
    });
}
function Q(e) {
    let t,
        { text: n, className: r, colorOptions: i = 2, isPillOnBorder: a = !0 } = e;
    switch (i) {
        case 1:
            t = g.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            t = 'url(#'.concat(F.l_, ')');
            break;
        case 4:
        case 5:
            t = 'url(#'.concat(F.Qi, ')');
            break;
        default:
            t = 'white';
    }
    return a
        ? (0, d.jsxs)('div', {
              className: _()(r, W.freeTrialPillWithSparkles),
              children: [
                  (0, d.jsx)(F.R9, {
                      foreground: W.sparkleStar1,
                      color: t
                  }),
                  (0, d.jsx)(F.R9, {
                      foreground: W.sparkleStar2,
                      color: t
                  }),
                  (0, d.jsx)(F.R9, {
                      foreground: W.sparkleStar3,
                      color: t
                  }),
                  (0, d.jsx)(q, {
                      text: n,
                      colorOptions: i
                  }),
                  (0, d.jsx)(F.R9, {
                      foreground: W.sparkleStar4,
                      color: t
                  }),
                  (0, d.jsx)(F.R9, {
                      foreground: W.sparkleStar5,
                      color: t
                  })
              ]
          })
        : (0, d.jsxs)('div', {
              className: _()(r, W.freeTrialPillWithSparkles),
              children: [
                  (0, d.jsx)(q, {
                      text: n,
                      colorOptions: i
                  }),
                  (0, d.jsx)(F.R9, {
                      foreground: W.sparkleStar1,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6
                      },
                      color: t
                  }),
                  (0, d.jsx)(F.R9, {
                      foreground: W.sparkleStar2,
                      color: t
                  })
              ]
          });
}
function X(e) {
    let { Icon: t, text: n, isNew: r = !1, className: i, textVariant: a } = e;
    return (0, d.jsxs)('div', {
        className: null != i ? i : W.itemWithWumpus,
        children: [
            (0, d.jsx)(t, {
                className: W.icon,
                color: 'currentColor'
            }),
            (0, d.jsx)(v.Text, {
                variant: null != a ? a : 'text-md/normal',
                color: 'always-white',
                children: n
            }),
            r
                ? (0, d.jsx)(S.Z, {
                      className: W.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0
                  })
                : null
        ]
    });
}
function J(e) {
    var t;
    let { defaultPriceString: n, subscriptionPlan: r, discountOffer: i } = e,
        a = (0, G.A)(r);
    return (0, d.jsx)(d.Fragment, {
        children: Y.intl.format(Y.t.sJTwHR, {
            numMonths: null !== (t = i.discount.user_usage_limit) && void 0 !== t ? t : j.rt,
            discountedPrice: a,
            regularPrice: n
        })
    });
}
function $(e) {
    var t, n, r, i, a, s, o;
    let { isGift: l, premiumTier: u, offerTierMatchesCard: c, offerType: f, showYearlyPrice: _, priceOptions: p, textVariant: g, className: E } = e,
        I = (0, m.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        b = (0, m.e7)([A.default], () => A.default.getCurrentUser()),
        T = (0, w.t7)(),
        S = (0, w.lr)(),
        y = u === j.p9.TIER_0 ? j.Si.TIER_0 : j.Si.TIER_2,
        C = (null == I ? void 0 : I.trialId) != null ? (null == b ? void 0 : b.premiumType) : T ? j.p9.TIER_2 : null,
        R = (0, U.N)(),
        O = (0, k.Ng)(),
        D = null == R ? void 0 : R.subscription_trial;
    if (!l && null != C && u === C && null != I && null != I.planIdFromItems) {
        let e = null != I.trialEndsAt ? h()(null == I ? void 0 : I.trialEndsAt).diff(h()(), 'd') : 0,
            i = j.GP[I.planIdFromItems],
            a = L.ZP.formatPriceString(L.ZP.getDefaultPrice(i.id), i.interval);
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)(v.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: W.trialHeader,
                children:
                    0 === f
                        ? Y.intl.format(Y.t['2CGBrq'], {
                              remainingTime: e,
                              price: a
                          })
                        : I.planIdFromItems === j.Xh.PREMIUM_YEAR_TIER_2
                          ? Y.intl.format(Y.t['+qqh6u'], {
                                percent: null !== (t = null == S ? void 0 : S.percentage) && void 0 !== t ? t : j.Bo,
                                regularPrice: a
                            })
                          : Y.intl.formatToPlainString(Y.t['3Ziutb'], {
                                percent: null !== (n = null == S ? void 0 : S.percentage) && void 0 !== n ? n : j.M_,
                                regularPrice: a,
                                numMonths: null !== (r = null == S ? void 0 : S.duration) && void 0 !== r ? r : j.rt
                            })
            })
        });
    }
    if (!l && c) {
        let e = L.ZP.formatPriceString(L.ZP.getDefaultPrice(u === j.p9.TIER_0 ? j.Xh.PREMIUM_MONTH_TIER_0 : j.Xh.PREMIUM_MONTH_TIER_2), j.rV.MONTH);
        if (0 === f) {
            return (0, d.jsx)(v.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: W.trialHeader,
                children: Y.intl.format(Y.t['9vyovr'], {
                    planName: (0, L.aq)(null !== (a = j.IW[null !== (i = null == D ? void 0 : D.sku_id) && void 0 !== i ? i : j.Si.NONE]) && void 0 !== a ? a : j.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, L.if)({
                        intervalType: null !== (s = null == D ? void 0 : D.interval) && void 0 !== s ? s : j.rV.DAY,
                        intervalCount: null !== (o = null == D ? void 0 : D.interval_count) && void 0 !== o ? o : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        }
        if (null != O)
            return (0, d.jsx)(v.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: W.trialHeader,
                children: (0, d.jsx)(J, {
                    defaultPriceString: e,
                    subscriptionPlan: j.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: O
                })
            });
    }
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(Z.Z, {
                subscriptionTier: y,
                isGift: l,
                className: null != E ? E : W.price,
                priceOptions: p,
                variant: g
            }),
            _ &&
                (0, d.jsx)(Z.Z, {
                    subscriptionTier: y,
                    interval: j.rV.YEAR,
                    className: null != E ? E : W.price,
                    isGift: l,
                    priceOptions: p,
                    variant: g
                })
        ]
    });
}
function ee() {
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(X, {
                Icon: v.UploadIcon,
                text: Y.intl.formatToPlainString(Y.t.p8QVLS, { maxUploadPremium: (0, L.v9)(j.p9.TIER_0, { useSpace: !1 }) })
            }),
            (0, d.jsx)(X, {
                Icon: v.ReactionIcon,
                text: Y.intl.string(Y.t.KjrZ8f)
            }),
            (0, d.jsx)(X, {
                Icon: v.SuperReactionIcon,
                text: Y.intl.string(Y.t.taMwg4)
            }),
            (0, d.jsx)(X, {
                Icon: v.NitroWheelIcon,
                text: Y.intl.string(Y.t['8ukxAQ'])
            })
        ]
    });
}
function et(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: i, className: a, isGift: s = !1, priceOptions: o } = e,
        l = (0, m.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        u = (0, m.e7)([A.default], () => A.default.getCurrentUser()),
        c = (0, U.N)(),
        f = null == c ? void 0 : null === (t = c.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        p = (null == l ? void 0 : l.trialId) != null,
        h = (null == l ? void 0 : l.trialId) != null ? (null == u ? void 0 : u.premiumType) : null,
        g = null != f || p;
    return (0, d.jsxs)('div', {
        className: _()(W.tier0, W.card, a, {
            [W.withTier0Rim]: !s && g,
            [W.withCardHover]: !s && g
        }),
        children: [
            f === j.Si.TIER_0
                ? (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(Q, {
                              text: Y.intl.string(Y.t.IBYG5e),
                              className: W.topRimPill,
                              colorOptions: 0
                          }),
                          (0, d.jsx)('div', { className: W.rimGlowTier0 })
                      ]
                  })
                : null,
            n
                ? (0, d.jsx)('div', {
                      className: W.wumpusImageContainer,
                      children: (0, d.jsx)(v.Image, {
                          src: K,
                          mediaLayoutType: H.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: W.wumpusImage
                      })
                  })
                : null,
            s || f !== j.Si.TIER_0
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(Q, {
                              text: Y.intl.string(Y.t.IBYG5e),
                              className: W.topRimPill,
                              colorOptions: 0
                          }),
                          (0, d.jsx)('div', { className: W.rimGlowTier0 })
                      ]
                  }),
            s || h !== j.p9.TIER_0
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(Q, {
                              text: Y.intl.string(Y.t.qYKftb),
                              className: W.topRimPill,
                              colorOptions: 0
                          }),
                          (0, d.jsx)('div', { className: W.rimGlowTier0 })
                      ]
                  }),
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(O.Z, { className: _()(W.title, W.tier0Title) }),
                            (0, d.jsx)($, {
                                isGift: s,
                                premiumTier: j.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: f === j.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: o
                            })
                        ]
                    }),
                    (0, d.jsx)('div', { children: (0, d.jsx)(ee, {}) })
                ]
            }),
            r,
            s || f !== j.Si.TIER_0 ? null : (0, d.jsx)(F.t, { tier: j.p9.TIER_0 })
        ]
    });
}
function en(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: r = !1 } = e,
        i = (0, m.e7)([y.default], () => y.default.locale),
        a = (0, m.e7)([x.Z], () => x.Z.affinities),
        s = n && !r && a.length > 0;
    switch (t) {
        case 1:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(X, {
                        Icon: (0, v.makeIconCompat)(C.Z),
                        text: Y.intl.formatToPlainString(Y.t.T9RTr6, {
                            numBoosts: j.cb,
                            percentageOff: (0, D.T3)(i, j.Rr / 100)
                        })
                    }),
                    (0, d.jsx)(X, {
                        Icon: v.UploadIcon,
                        text: Y.intl.formatToPlainString(Y.t.p8QVLS, { maxUploadPremium: (0, L.v9)(j.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, d.jsx)(X, {
                        Icon: v.ReactionIcon,
                        text: Y.intl.string(Y.t.KjrZ8f)
                    }),
                    (0, d.jsx)(X, {
                        Icon: v.ScreenArrowIcon,
                        text: Y.intl.string(Y.t.W180bW)
                    }),
                    (0, d.jsx)(X, {
                        Icon: v.UserSquareIcon,
                        text: Y.intl.string(Y.t.CNIZf3)
                    })
                ]
            });
        case 2:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(X, {
                        Icon: v.UploadIcon,
                        text: Y.intl.formatToPlainString(Y.t.p8QVLS, { maxUploadPremium: (0, L.v9)(j.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, d.jsx)(X, {
                        Icon: v.ReactionIcon,
                        text: Y.intl.string(Y.t.KjrZ8f)
                    }),
                    (0, d.jsx)(X, {
                        Icon: v.SuperReactionIcon,
                        text: Y.intl.string(Y.t.taMwg4)
                    }),
                    (0, d.jsx)(X, {
                        Icon: v.ScreenArrowIcon,
                        text: Y.intl.string(Y.t.W180bW)
                    }),
                    (0, d.jsx)(X, {
                        Icon: v.UserSquareIcon,
                        text: Y.intl.string(Y.t.CNIZf3)
                    })
                ]
            });
        default:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(X, {
                        Icon: v.UploadIcon,
                        text: Y.intl.formatToPlainString(Y.t.p8QVLS, { maxUploadPremium: (0, L.v9)(j.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, d.jsx)(X, {
                        Icon: v.ReactionIcon,
                        text: Y.intl.string(Y.t.KjrZ8f)
                    }),
                    (0, d.jsx)(X, {
                        Icon: v.SuperReactionIcon,
                        text: Y.intl.string(Y.t.taMwg4)
                    }),
                    (0, d.jsx)(X, {
                        Icon: v.ScreenArrowIcon,
                        text: Y.intl.string(Y.t.W180bW)
                    }),
                    (0, d.jsx)(X, {
                        Icon: (0, v.makeIconCompat)(C.Z),
                        text: Y.intl.string(Y.t.cdfuUV)
                    }),
                    (0, d.jsx)(X, {
                        Icon: v.UserSquareIcon,
                        text: Y.intl.string(Y.t.CNIZf3)
                    }),
                    s && (0, d.jsx)(V.Z, {})
                ]
            });
    }
}
function er(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: i, featureSet: a = 0, className: s, isGift: o = !1, isModal: l = !1, priceOptions: u, showHalloweenGift: c = !1 } = e,
        f = (0, m.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        p = (0, m.e7)([A.default], () => A.default.getCurrentUser()),
        h = (0, U.N)(),
        g = null == h ? void 0 : null === (t = h.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        b = (null == f ? void 0 : f.trialId) != null ? (null == p ? void 0 : p.premiumType) : null,
        T = (0, w.Nx)(),
        S = (0, k.Ng)(),
        y = (0, w.t7)(),
        C = null != g || null != b ? 0 : null != S || y ? 1 : null,
        O = (0, B.Vi)(),
        D = !o && T,
        L = (0, B.W1)(),
        x = (0, E.ap)((0, I.ZP)()),
        G = x ? 5 : 2,
        { enabled: Z } = M._.useExperiment({ location: 'Tier2Card' }, { autoTrackExposure: !1 }),
        V = Y.intl.string(Y.t.IBYG5e);
    Z && (null == h ? void 0 : h.trial_id) === j.a7 && (V = Y.intl.string(Y.t.gtNqJS));
    let K = D && !x ? W.rimGlowTier2 : void 0;
    return (0, d.jsxs)('div', {
        className: _()(W.card, W.tier2, s, {
            [W.withTier2Rim]: D,
            [W.withCardHover]: D,
            [W.withHalloweenTier2]: c
        }),
        children: [
            !o && null != S && (0, k.Wp)(S, j.Si.TIER_2) && void 0 !== S.discount.amount
                ? (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(Q, {
                              text: y ? Y.intl.string(Y.t.EyjDRE) : Y.intl.formatToPlainString(Y.t.iiLbvr, { percent: S.discount.amount }),
                              className: W.topRimPill,
                              colorOptions: G
                          }),
                          (0, d.jsx)('div', { className: K })
                      ]
                  })
                : null,
            o || g !== j.Si.TIER_2
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(Q, {
                              text: V,
                              className: W.topRimPill,
                              colorOptions: G
                          }),
                          (0, d.jsx)('div', { className: K })
                      ]
                  }),
            o || b !== j.p9.TIER_2
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(Q, {
                              text: Y.intl.string(Y.t.qYKftb),
                              className: W.topRimPill,
                              colorOptions: G
                          }),
                          (0, d.jsx)('div', { className: K })
                      ]
                  }),
            !o &&
                y &&
                (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(Q, {
                            text: Y.intl.string(Y.t.EyjDRE),
                            className: W.topRimPill,
                            colorOptions: G
                        }),
                        (0, d.jsx)('div', { className: K })
                    ]
                }),
            n
                ? (0, d.jsx)('div', {
                      className: W.wumpusImageContainer,
                      children: (0, d.jsx)(v.Image, {
                          src: z,
                          mediaLayoutType: H.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: W.wumpusImage
                      })
                  })
                : null,
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(R.Z, { className: _()(W.title, W.tier2Title) }),
                            !o &&
                                g !== j.Si.TIER_2 &&
                                O &&
                                (0, d.jsx)('div', {
                                    children: (0, d.jsx)(v.Text, {
                                        variant: 'text-xs/bold',
                                        className: W.freeTrialPillInline,
                                        children: L
                                    })
                                }),
                            (0, d.jsx)($, {
                                isGift: o,
                                premiumTier: j.p9.TIER_2,
                                offerType: C,
                                offerTierMatchesCard: g === j.Si.TIER_2 || (0, k.Wp)(S, j.Si.TIER_2),
                                showYearlyPrice: i,
                                priceOptions: u
                            })
                        ]
                    }),
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(en, {
                            featureSet: a,
                            isModal: l,
                            isGift: o
                        })
                    })
                ]
            }),
            r,
            o || (g !== j.Si.TIER_2 && null == S) ? null : (0, d.jsx)(F.t, { tier: j.p9.TIER_2 }),
            c
                ? (0, d.jsxs)('div', {
                      className: W.halloweenGiftMessage,
                      children: [
                          (0, d.jsx)(v.Text, {
                              className: W.halloweenGiftMessageText,
                              variant: 'text-md/medium',
                              children: Y.intl.string(Y.t.J88y6O)
                          }),
                          (0, d.jsx)('div', {
                              className: W.halloweenAvatar,
                              children: (0, d.jsx)(P.Z, { size: v.AvatarSizes.SIZE_80 })
                          })
                      ]
                  })
                : null
        ]
    });
}
function ei(e) {
    let { showWumpus: t, tier0CTAButton: n, tier2CTAButton: r, className: i } = e,
        { analyticsLocations: a } = (0, T.ZP)(b.Z.PREMIUM_MARKETING_TIER_CARD);
    return (0, d.jsx)(T.Gt, {
        value: a,
        children: (0, d.jsxs)('div', {
            className: _()(W.premiumCards, i),
            children: [
                (0, d.jsx)(et, {
                    showWumpus: t,
                    ctaButton: n
                }),
                (0, d.jsx)(er, {
                    showWumpus: t,
                    ctaButton: r
                })
            ]
        })
    });
}
((r = o || (o = {}))[(r.PREMIUM_TIER_0_WHITE_FILL = 0)] = 'PREMIUM_TIER_0_WHITE_FILL'), (r[(r.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = 'PREMIUM_TIER_0_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_WHITE_FILL = 2)] = 'PREMIUM_TIER_2_WHITE_FILL'), (r[(r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE'), (r[(r.PREMIUM_TIER_2_GREY_FILL = 6)] = 'PREMIUM_TIER_2_GREY_FILL'), ((i = l || (l = {}))[(i.PREMIUM_TRIAL = 0)] = 'PREMIUM_TRIAL'), (i[(i.PREMIUM_DISCOUNT = 1)] = 'PREMIUM_DISCOUNT'), ((a = u || (u = {}))[(a.DEFAULT = 0)] = 'DEFAULT'), (a[(a.BOOSTING = 1)] = 'BOOSTING'), (a[(a.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), ((s = c || (c = {}))[(s.DEFAULT = 0)] = 'DEFAULT'), (s[(s.MARKETING_PAGE_V2 = 1)] = 'MARKETING_PAGE_V2');
