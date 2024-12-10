n.d(t, {
    Cy: function () {
        return J;
    },
    Gq: function () {
        return ei;
    },
    NN: function () {
        return c;
    },
    VE: function () {
        return o;
    },
    ZP: function () {
        return eu;
    },
    lq: function () {
        return ea;
    },
    mn: function () {
        return X;
    },
    nT: function () {
        return es;
    },
    uZ: function () {
        return u;
    },
    wp: function () {
        return el;
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
    T = n(100527),
    b = n(906732),
    S = n(535322),
    y = n(706454),
    A = n(594174),
    N = n(78839),
    C = n(709586),
    R = n(483444),
    O = n(599250),
    D = n(942659),
    L = n(930153),
    x = n(74538),
    w = n(357355),
    P = n(140465),
    M = n(650032),
    k = n(33052),
    U = n(104494),
    B = n(639119),
    G = n(230916),
    Z = n(346497),
    F = n(504865),
    V = n(63802),
    j = n(318990),
    H = n(474936),
    Y = n(217702),
    W = n(388032),
    K = n(521855),
    z = n(499317),
    q = n(476945),
    Q = n(945182);
function X(e) {
    let { text: t, className: n, colorOptions: r = 2 } = e;
    return (0, d.jsx)('div', {
        className: _()(n, K.freeTrialPill, {
            [K.freeTrialPillTier0GradientFill]: 1 === r,
            [K.freeTrialPillTier2GradientFill]: 3 === r,
            [K.freeTrialPillTier2OldGradientFill]: 4 === r,
            [K.lightBackgroundPill]: 5 === r,
            [K.greyBackgroundPill]: 6 === r
        }),
        children: (0, d.jsx)(v.Text, {
            variant: 'text-xs/bold',
            className: _()(K.freeTrialPillText, {
                [K.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
                [K.freeTrialPillTextTier0]: 0 === r,
                [K.freeTrialPillTextTier2]: 2 === r || 6 === r
            }),
            children: t
        })
    });
}
function J(e) {
    let t,
        { text: n, className: r, colorOptions: i = 2, isPillOnBorder: a = !0 } = e;
    switch (i) {
        case 1:
            t = g.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            t = 'url(#'.concat(V.l_, ')');
            break;
        case 4:
        case 5:
            t = 'url(#'.concat(V.Qi, ')');
            break;
        default:
            t = 'white';
    }
    return a
        ? (0, d.jsxs)('div', {
              className: _()(r, K.freeTrialPillWithSparkles),
              children: [
                  (0, d.jsx)(V.R9, {
                      foreground: K.sparkleStar1,
                      color: t
                  }),
                  (0, d.jsx)(V.R9, {
                      foreground: K.sparkleStar2,
                      color: t
                  }),
                  (0, d.jsx)(V.R9, {
                      foreground: K.sparkleStar3,
                      color: t
                  }),
                  (0, d.jsx)(X, {
                      text: n,
                      colorOptions: i
                  }),
                  (0, d.jsx)(V.R9, {
                      foreground: K.sparkleStar4,
                      color: t
                  }),
                  (0, d.jsx)(V.R9, {
                      foreground: K.sparkleStar5,
                      color: t
                  })
              ]
          })
        : (0, d.jsxs)('div', {
              className: _()(r, K.freeTrialPillWithSparkles),
              children: [
                  (0, d.jsx)(X, {
                      text: n,
                      colorOptions: i
                  }),
                  (0, d.jsx)(V.R9, {
                      foreground: K.sparkleStar1,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6
                      },
                      color: t
                  }),
                  (0, d.jsx)(V.R9, {
                      foreground: K.sparkleStar2,
                      color: t
                  })
              ]
          });
}
function $(e) {
    let { Icon: t, text: n, isNew: r = !1, className: i, textVariant: a, isMarketingPageV2: s } = e;
    return (0, d.jsxs)('div', {
        className: null != i ? i : K.itemWithWumpus,
        children: [
            (0, d.jsx)(t, {
                className: K.icon,
                color: 'currentColor'
            }),
            (0, d.jsx)(v.Text, {
                variant: null != a ? a : 'text-md/normal',
                color: s ? 'currentColor' : 'always-white',
                children: n
            }),
            r
                ? (0, d.jsx)(S.Z, {
                      className: K.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0
                  })
                : null
        ]
    });
}
function ee(e) {
    var t;
    let { defaultPriceString: n, subscriptionPlan: r, discountOffer: i } = e,
        a = (0, G.A)(r);
    return (0, d.jsx)(d.Fragment, {
        children: W.intl.format(W.t.sJTwHR, {
            numMonths: null !== (t = i.discount.user_usage_limit) && void 0 !== t ? t : H.rt,
            discountedPrice: a,
            regularPrice: n
        })
    });
}
function et(e) {
    var t, n, r, i, a, s, o;
    let { isGift: l, premiumTier: u, offerTierMatchesCard: c, offerType: f, showYearlyPrice: _, priceOptions: p, textVariant: g, className: E, isMarketingPageV2: I } = e,
        T = (0, m.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        b = (0, m.e7)([A.default], () => A.default.getCurrentUser()),
        S = (0, P.t7)(),
        y = (0, P.lr)(),
        C = u === H.p9.TIER_0 ? H.Si.TIER_0 : H.Si.TIER_2,
        R = (null == T ? void 0 : T.trialId) != null ? (null == b ? void 0 : b.premiumType) : S ? H.p9.TIER_2 : null,
        O = (0, B.N)(),
        D = (0, U.Ng)(),
        L = null == O ? void 0 : O.subscription_trial;
    if (!I && !l && null != R && u === R && null != T && null != T.planIdFromItems) {
        let e = null != T.trialEndsAt ? h()(null == T ? void 0 : T.trialEndsAt).diff(h()(), 'd') : 0,
            i = H.GP[T.planIdFromItems],
            a = x.ZP.formatPriceString(x.ZP.getDefaultPrice(i.id), i.interval);
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)(v.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: K.trialHeader,
                children:
                    0 === f
                        ? W.intl.format(W.t['2CGBrq'], {
                              remainingTime: e,
                              price: a
                          })
                        : T.planIdFromItems === H.Xh.PREMIUM_YEAR_TIER_2
                          ? W.intl.format(W.t['+qqh6u'], {
                                percent: null !== (t = null == y ? void 0 : y.percentage) && void 0 !== t ? t : H.Bo,
                                regularPrice: a
                            })
                          : W.intl.formatToPlainString(W.t['3Ziutb'], {
                                percent: null !== (n = null == y ? void 0 : y.percentage) && void 0 !== n ? n : H.M_,
                                regularPrice: a,
                                numMonths: null !== (r = null == y ? void 0 : y.duration) && void 0 !== r ? r : H.rt
                            })
            })
        });
    }
    if (!I && !l && c) {
        let e = x.ZP.formatPriceString(x.ZP.getDefaultPrice(u === H.p9.TIER_0 ? H.Xh.PREMIUM_MONTH_TIER_0 : H.Xh.PREMIUM_MONTH_TIER_2), H.rV.MONTH);
        if (0 === f) {
            return (0, d.jsx)(v.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: K.trialHeader,
                children: W.intl.format(W.t['9vyovr'], {
                    planName: (0, x.aq)(null !== (a = H.IW[null !== (i = null == L ? void 0 : L.sku_id) && void 0 !== i ? i : H.Si.NONE]) && void 0 !== a ? a : H.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, x.if)({
                        intervalType: null !== (s = null == L ? void 0 : L.interval) && void 0 !== s ? s : H.rV.DAY,
                        intervalCount: null !== (o = null == L ? void 0 : L.interval_count) && void 0 !== o ? o : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        }
        if (null != D)
            return (0, d.jsx)(v.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: K.trialHeader,
                children: (0, d.jsx)(ee, {
                    defaultPriceString: e,
                    subscriptionPlan: H.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: D
                })
            });
    }
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(F.Z, {
                subscriptionTier: C,
                isGift: l,
                className: null != E ? E : K.price,
                priceOptions: p,
                variant: g,
                isMarketingPageV2: I
            }),
            _ &&
                (0, d.jsx)(F.Z, {
                    subscriptionTier: C,
                    interval: H.rV.YEAR,
                    className: null != E ? E : K.price,
                    isGift: l,
                    priceOptions: p,
                    variant: g,
                    isMarketingPageV2: I
                })
        ]
    });
}
function en(e) {
    let { isMarketingPageV2: t } = e;
    return t
        ? (0, d.jsxs)(d.Fragment, {
              children: [
                  (0, d.jsx)($, {
                      Icon: v.CheckmarkLargeIcon,
                      text: W.intl.string(W.t.KjrZ8f),
                      className: K.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  }),
                  (0, d.jsx)($, {
                      Icon: v.CheckmarkLargeIcon,
                      text: W.intl.formatToPlainString(W.t.p8QVLS, { maxUploadPremium: (0, x.v9)(H.p9.TIER_0, { useSpace: !1 }) }),
                      className: K.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  }),
                  (0, d.jsx)($, {
                      Icon: v.CheckmarkLargeIcon,
                      text: W.intl.string(W.t.Uukj4u),
                      className: K.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  })
              ]
          })
        : (0, d.jsxs)(d.Fragment, {
              children: [
                  (0, d.jsx)($, {
                      Icon: v.UploadIcon,
                      text: W.intl.formatToPlainString(W.t.p8QVLS, { maxUploadPremium: (0, x.v9)(H.p9.TIER_0, { useSpace: !1 }) })
                  }),
                  (0, d.jsx)($, {
                      Icon: v.ReactionIcon,
                      text: W.intl.string(W.t.KjrZ8f)
                  }),
                  (0, d.jsx)($, {
                      Icon: v.SuperReactionIcon,
                      text: W.intl.string(W.t.taMwg4)
                  }),
                  (0, d.jsx)($, {
                      Icon: v.NitroWheelIcon,
                      text: W.intl.string(W.t['8ukxAQ'])
                  })
              ]
          });
}
function er(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, className: i, isGift: a = !1, priceOptions: s } = e,
        o = (0, m.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        l = (0, B.N)(),
        u = null == l ? void 0 : null === (t = l.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        c = (null == o ? void 0 : o.trialId) != null,
        f = null != u || c;
    return (0, d.jsxs)('div', {
        className: _()(K.tier0, K.card, K.tier0V2Background, i, {
            [K.withTier0Rim]: !a && f,
            [K.withCardHover]: !a && f
        }),
        children: [
            (0, d.jsx)('img', {
                src: z,
                className: K.v2starBackground,
                alt: ''
            }),
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(D.Z, { className: _()(K.title, K.tier0V2Title) }),
                            (0, d.jsx)(et, {
                                isGift: a,
                                premiumTier: H.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: u === H.Si.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: s,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0
                            })
                        ]
                    }),
                    (0, d.jsx)('div', { children: (0, d.jsx)(en, { isMarketingPageV2: !0 }) })
                ]
            }),
            n
        ]
    });
}
function ei(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: i, className: a, isGift: s = !1, priceOptions: o } = e,
        l = (0, m.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        u = (0, m.e7)([A.default], () => A.default.getCurrentUser()),
        c = (0, B.N)(),
        f = null == c ? void 0 : null === (t = c.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        p = (null == l ? void 0 : l.trialId) != null,
        h = (null == l ? void 0 : l.trialId) != null ? (null == u ? void 0 : u.premiumType) : null,
        g = null != f || p;
    return (0, d.jsxs)('div', {
        className: _()(K.tier0, K.card, a, {
            [K.withTier0Rim]: !s && g,
            [K.withCardHover]: !s && g
        }),
        children: [
            f === H.Si.TIER_0
                ? (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(J, {
                              text: W.intl.string(W.t.IBYG5e),
                              className: K.topRimPill,
                              colorOptions: 0
                          }),
                          (0, d.jsx)('div', { className: K.rimGlowTier0 })
                      ]
                  })
                : null,
            n
                ? (0, d.jsx)('div', {
                      className: K.wumpusImageContainer,
                      children: (0, d.jsx)(v.Image, {
                          src: q,
                          mediaLayoutType: Y.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: K.wumpusImage
                      })
                  })
                : null,
            s || f !== H.Si.TIER_0
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(J, {
                              text: W.intl.string(W.t.IBYG5e),
                              className: K.topRimPill,
                              colorOptions: 0
                          }),
                          (0, d.jsx)('div', { className: K.rimGlowTier0 })
                      ]
                  }),
            s || h !== H.p9.TIER_0
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(J, {
                              text: W.intl.string(W.t.qYKftb),
                              className: K.topRimPill,
                              colorOptions: 0
                          }),
                          (0, d.jsx)('div', { className: K.rimGlowTier0 })
                      ]
                  }),
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(O.Z, { className: _()(K.title, K.tier0Title) }),
                            (0, d.jsx)(et, {
                                isGift: s,
                                premiumTier: H.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: f === H.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: o
                            })
                        ]
                    }),
                    (0, d.jsx)('div', { children: (0, d.jsx)(en, {}) })
                ]
            }),
            r,
            s || f !== H.Si.TIER_0 ? null : (0, d.jsx)(V.t, { tier: H.p9.TIER_0 })
        ]
    });
}
function ea(e) {
    var t;
    let { showWumpus: n, showYearlyPrice: r, className: i, isGift: a = !1, priceOptions: s } = e,
        o = (0, B.N)(),
        l = null == o ? void 0 : null === (t = o.subscription_trial) || void 0 === t ? void 0 : t.sku_id;
    return (0, d.jsxs)('div', {
        className: _()(K.tier0, K.card, i),
        children: [
            n
                ? (0, d.jsx)('div', {
                      className: K.wumpusImageContainer,
                      children: (0, d.jsx)(v.Image, {
                          src: q,
                          mediaLayoutType: Y.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: K.wumpusImage
                      })
                  })
                : null,
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(O.Z, { className: _()(K.title, K.tier0Title) }),
                            (0, d.jsx)(et, {
                                isGift: a,
                                premiumTier: H.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: l === H.Si.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: s
                            })
                        ]
                    }),
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)($, {
                                Icon: v.UploadIcon,
                                text: W.intl.formatToPlainString(W.t.p8QVLS, { maxUploadPremium: (0, x.v9)(H.p9.TIER_0, { useSpace: !1 }) })
                            }),
                            (0, d.jsx)($, {
                                Icon: v.ReactionIcon,
                                text: W.intl.string(W.t.KjrZ8f)
                            }),
                            (0, d.jsx)($, {
                                Icon: v.PaintPaletteIcon,
                                text: W.intl.string(W.t.OuItFh)
                            }),
                            (0, d.jsx)($, {
                                Icon: v.NitroWheelIcon,
                                text: W.intl.string(W.t['8ukxAQ'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function es(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: r = !1 } = e,
        i = (0, m.e7)([y.default], () => y.default.locale),
        a = (0, m.e7)([w.Z], () => w.Z.affinities),
        s = n && !r && a.length > 0;
    switch (t) {
        case 3:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(v.Text, {
                        variant: 'text-sm/bold',
                        className: K.tier2V2Subheader,
                        children: W.intl.string(W.t.AozD3d)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.CheckmarkLargeIcon,
                        text: W.intl.string(W.t.kpMomJ),
                        className: K.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, d.jsx)($, {
                        Icon: v.CheckmarkLargeIcon,
                        text: W.intl.formatToPlainString(W.t.p8QVLS, { maxUploadPremium: (0, x.v9)(H.p9.TIER_2, { useSpace: !1 }) }),
                        className: K.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, d.jsx)($, {
                        Icon: v.CheckmarkLargeIcon,
                        text: W.intl.string(W.t.W180bW),
                        className: K.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, d.jsx)($, {
                        Icon: v.CheckmarkLargeIcon,
                        text: W.intl.string(W.t.zTk8Ul),
                        className: K.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    s && (0, d.jsx)(j.Z, {})
                ]
            });
        case 1:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)($, {
                        Icon: (0, v.makeIconCompat)(C.Z),
                        text: W.intl.formatToPlainString(W.t.T9RTr6, {
                            numBoosts: H.cb,
                            percentageOff: (0, L.T3)(i, H.Rr / 100)
                        })
                    }),
                    (0, d.jsx)($, {
                        Icon: v.UploadIcon,
                        text: W.intl.formatToPlainString(W.t.p8QVLS, { maxUploadPremium: (0, x.v9)(H.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, d.jsx)($, {
                        Icon: v.ReactionIcon,
                        text: W.intl.string(W.t.KjrZ8f)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.ScreenArrowIcon,
                        text: W.intl.string(W.t.W180bW)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.UserSquareIcon,
                        text: W.intl.string(W.t.CNIZf3)
                    })
                ]
            });
        case 2:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)($, {
                        Icon: v.UploadIcon,
                        text: W.intl.formatToPlainString(W.t.p8QVLS, { maxUploadPremium: (0, x.v9)(H.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, d.jsx)($, {
                        Icon: v.ReactionIcon,
                        text: W.intl.string(W.t.KjrZ8f)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.SuperReactionIcon,
                        text: W.intl.string(W.t.taMwg4)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.ScreenArrowIcon,
                        text: W.intl.string(W.t.W180bW)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.UserSquareIcon,
                        text: W.intl.string(W.t.CNIZf3)
                    })
                ]
            });
        default:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)($, {
                        Icon: v.UploadIcon,
                        text: W.intl.formatToPlainString(W.t.p8QVLS, { maxUploadPremium: (0, x.v9)(H.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, d.jsx)($, {
                        Icon: v.ReactionIcon,
                        text: W.intl.string(W.t.KjrZ8f)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.SuperReactionIcon,
                        text: W.intl.string(W.t.taMwg4)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.ScreenArrowIcon,
                        text: W.intl.string(W.t.W180bW)
                    }),
                    (0, d.jsx)($, {
                        Icon: (0, v.makeIconCompat)(C.Z),
                        text: W.intl.string(W.t.cdfuUV)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.UserSquareIcon,
                        text: W.intl.string(W.t.CNIZf3)
                    }),
                    s && (0, d.jsx)(j.Z, {})
                ]
            });
    }
}
function eo(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, featureSet: i = 0, className: a, isGift: s = !1, isModal: o = !1, priceOptions: l, showPromotionalGiftBanner: u = !1 } = e,
        c = (0, B.N)(),
        f = null == c ? void 0 : null === (t = c.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        p = (0, P.Nx)(),
        h = (0, U.Ng)(),
        m = null != c ? 0 : null != h ? 1 : null,
        g = (0, Z.Vi)(),
        E = !s && p,
        I = (0, Z.W1)();
    return (0, d.jsxs)('div', {
        className: _()(K.card, K.tier2, K.tier2V2Background, a, {
            [K.withTier2Rim]: E,
            [K.withCardHover]: E,
            [K.withPromotionalGradientBanner]: u
        }),
        children: [
            (0, d.jsx)('img', {
                src: z,
                className: K.v2starBackground,
                alt: ''
            }),
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(R.Z, { className: _()(K.title, K.tier2V2Title) }),
                            !s &&
                                f !== H.Si.TIER_2 &&
                                g &&
                                (0, d.jsx)('div', {
                                    children: (0, d.jsx)(v.Text, {
                                        variant: 'text-xs/bold',
                                        className: K.freeTrialPillInline,
                                        children: I
                                    })
                                }),
                            (0, d.jsx)(et, {
                                isGift: s,
                                premiumTier: H.p9.TIER_2,
                                offerType: m,
                                offerTierMatchesCard: f === H.Si.TIER_2 || (0, U.Wp)(h, H.Si.TIER_2),
                                showYearlyPrice: r,
                                priceOptions: l,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0
                            })
                        ]
                    }),
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(es, {
                            featureSet: i,
                            isModal: o,
                            isGift: s
                        })
                    })
                ]
            }),
            n,
            u && (0, d.jsx)(k.K, {})
        ]
    });
}
function el(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: i, featureSet: a = 0, className: s, isGift: o = !1, isModal: l = !1, priceOptions: u, showPromotionalGiftBanner: c = !1 } = e,
        f = (0, m.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        p = (0, m.e7)([A.default], () => A.default.getCurrentUser()),
        h = (0, B.N)(),
        g = null == h ? void 0 : null === (t = h.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        T = (null == f ? void 0 : f.trialId) != null ? (null == p ? void 0 : p.premiumType) : null,
        b = (0, P.Nx)(),
        S = (0, U.Ng)(),
        y = (0, P.t7)(),
        C = null != g || null != T ? 0 : null != S || y ? 1 : null,
        O = (0, Z.Vi)(),
        D = !o && b,
        L = (0, Z.W1)(),
        x = (0, E.ap)((0, I.ZP)()),
        w = x ? 5 : 2,
        { enabled: G } = M._.useExperiment({ location: 'Tier2Card' }, { autoTrackExposure: !1 }),
        F = W.intl.string(W.t.IBYG5e);
    G && (null == h ? void 0 : h.trial_id) === H.a7 && (F = W.intl.string(W.t.gtNqJS));
    let j = D && !x ? K.rimGlowTier2 : void 0;
    return (0, d.jsxs)('div', {
        className: _()(K.card, K.tier2, s, {
            [K.withTier2Rim]: D,
            [K.withCardHover]: D,
            [K.withPromotionalGradientBanner]: c
        }),
        children: [
            !o && null != S && (0, U.Wp)(S, H.Si.TIER_2) && void 0 !== S.discount.amount
                ? (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(J, {
                              text: y ? W.intl.string(W.t.EyjDRE) : W.intl.formatToPlainString(W.t.iiLbvr, { percent: S.discount.amount }),
                              className: K.topRimPill,
                              colorOptions: w
                          }),
                          (0, d.jsx)('div', { className: j })
                      ]
                  })
                : null,
            o || g !== H.Si.TIER_2
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(J, {
                              text: F,
                              className: K.topRimPill,
                              colorOptions: w
                          }),
                          (0, d.jsx)('div', { className: j })
                      ]
                  }),
            o || T !== H.p9.TIER_2
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(J, {
                              text: W.intl.string(W.t.qYKftb),
                              className: K.topRimPill,
                              colorOptions: w
                          }),
                          (0, d.jsx)('div', { className: j })
                      ]
                  }),
            !o &&
                y &&
                (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(J, {
                            text: W.intl.string(W.t.EyjDRE),
                            className: K.topRimPill,
                            colorOptions: w
                        }),
                        (0, d.jsx)('div', { className: j })
                    ]
                }),
            n
                ? (0, d.jsx)('div', {
                      className: K.wumpusImageContainer,
                      children: (0, d.jsx)(v.Image, {
                          src: Q,
                          mediaLayoutType: Y.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: K.wumpusImage
                      })
                  })
                : null,
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(R.Z, { className: _()(K.title, K.tier2Title) }),
                            !o &&
                                g !== H.Si.TIER_2 &&
                                O &&
                                (0, d.jsx)('div', {
                                    children: (0, d.jsx)(v.Text, {
                                        variant: 'text-xs/bold',
                                        className: K.freeTrialPillInline,
                                        children: L
                                    })
                                }),
                            (0, d.jsx)(et, {
                                isGift: o,
                                premiumTier: H.p9.TIER_2,
                                offerType: C,
                                offerTierMatchesCard: g === H.Si.TIER_2 || (0, U.Wp)(S, H.Si.TIER_2),
                                showYearlyPrice: i,
                                priceOptions: u
                            })
                        ]
                    }),
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(es, {
                            featureSet: a,
                            isModal: l,
                            isGift: o
                        })
                    })
                ]
            }),
            r,
            o || (g !== H.Si.TIER_2 && null == S) ? null : (0, d.jsx)(V.t, { tier: H.p9.TIER_2 }),
            c && (0, d.jsx)(k.K, {})
        ]
    });
}
function eu(e) {
    let { variant: t, showWumpus: n, tier0CTAButton: r, tier2CTAButton: i, className: a } = e,
        { analyticsLocations: s } = (0, b.ZP)(T.Z.PREMIUM_MARKETING_TIER_CARD),
        o = 1 === t;
    return (0, d.jsxs)(b.Gt, {
        value: s,
        children: [
            o &&
                (0, d.jsx)(v.Heading, {
                    className: K.v2TierCardSectionHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: W.intl.string(W.t.vLz3Zm)
                }),
            (0, d.jsxs)('div', {
                className: _()(K.premiumCards, a),
                children: [
                    o
                        ? (0, d.jsx)(er, { ctaButton: r })
                        : (0, d.jsx)(ei, {
                              showWumpus: n,
                              ctaButton: r
                          }),
                    o
                        ? (0, d.jsx)(eo, {
                              ctaButton: i,
                              featureSet: 3
                          })
                        : (0, d.jsx)(el, {
                              showWumpus: n,
                              ctaButton: i
                          })
                ]
            })
        ]
    });
}
((r = o || (o = {}))[(r.PREMIUM_TIER_0_WHITE_FILL = 0)] = 'PREMIUM_TIER_0_WHITE_FILL'), (r[(r.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = 'PREMIUM_TIER_0_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_WHITE_FILL = 2)] = 'PREMIUM_TIER_2_WHITE_FILL'), (r[(r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE'), (r[(r.PREMIUM_TIER_2_GREY_FILL = 6)] = 'PREMIUM_TIER_2_GREY_FILL'), ((i = l || (l = {}))[(i.PREMIUM_TRIAL = 0)] = 'PREMIUM_TRIAL'), (i[(i.PREMIUM_DISCOUNT = 1)] = 'PREMIUM_DISCOUNT'), ((a = u || (u = {}))[(a.DEFAULT = 0)] = 'DEFAULT'), (a[(a.BOOSTING = 1)] = 'BOOSTING'), (a[(a.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), (a[(a.V2 = 3)] = 'V2'), ((s = c || (c = {}))[(s.DEFAULT = 0)] = 'DEFAULT'), (s[(s.MARKETING_PAGE_V2 = 1)] = 'MARKETING_PAGE_V2');
