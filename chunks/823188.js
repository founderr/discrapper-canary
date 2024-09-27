n.d(t, {
    Cy: function () {
        return W;
    },
    Gq: function () {
        return X;
    },
    VE: function () {
        return r;
    },
    ZP: function () {
        return ee;
    },
    nT: function () {
        return $;
    },
    uZ: function () {
        return a;
    },
    wp: function () {
        return J;
    }
});
var r,
    i,
    a,
    o = n(735250);
n(470079);
var s = n(120356),
    l = n.n(s),
    u = n(913527),
    c = n.n(u),
    d = n(442837),
    _ = n(692547),
    E = n(780384),
    f = n(481060),
    h = n(410030),
    p = n(100527),
    m = n(906732),
    I = n(535322),
    T = n(706454),
    g = n(594174),
    S = n(78839),
    A = n(709586),
    v = n(483444),
    N = n(599250),
    O = n(930153),
    R = n(74538),
    C = n(357355),
    y = n(140465),
    L = n(650032),
    b = n(515593),
    D = n(104494),
    M = n(639119),
    P = n(230916),
    U = n(248042),
    w = n(504865),
    x = n(63802),
    G = n(318990),
    k = n(474936),
    B = n(217702),
    F = n(689938),
    Z = n(645512),
    V = n(476945),
    H = n(945182);
let Y = 'Tier2Card';
function j(e) {
    let { text: t, className: n, colorOptions: r = 2 } = e;
    return (0, o.jsx)('div', {
        className: l()(n, Z.freeTrialPill, {
            [Z.freeTrialPillTier0GradientFill]: 1 === r,
            [Z.freeTrialPillTier2GradientFill]: 3 === r,
            [Z.freeTrialPillTier2OldGradientFill]: 4 === r,
            [Z.lightBackgroundPill]: 5 === r
        }),
        children: (0, o.jsx)(f.Text, {
            variant: 'text-xs/bold',
            className: l()(Z.freeTrialPillText, {
                [Z.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
                [Z.freeTrialPillTextTier0]: 0 === r,
                [Z.freeTrialPillTextTier2]: 2 === r
            }),
            children: t
        })
    });
}
function W(e) {
    let t,
        { text: n, className: r, colorOptions: i = 2, isPillOnBorder: a = !0 } = e;
    switch (i) {
        case 1:
            t = _.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            t = 'url(#'.concat(x.l_, ')');
            break;
        case 4:
        case 5:
            t = 'url(#'.concat(x.Qi, ')');
            break;
        default:
            t = 'white';
    }
    return a
        ? (0, o.jsxs)('div', {
              className: l()(r, Z.freeTrialPillWithSparkles),
              children: [
                  (0, o.jsx)(x.R9, {
                      foreground: Z.sparkleStar1,
                      color: t
                  }),
                  (0, o.jsx)(x.R9, {
                      foreground: Z.sparkleStar2,
                      color: t
                  }),
                  (0, o.jsx)(x.R9, {
                      foreground: Z.sparkleStar3,
                      color: t
                  }),
                  (0, o.jsx)(j, {
                      text: n,
                      colorOptions: i
                  }),
                  (0, o.jsx)(x.R9, {
                      foreground: Z.sparkleStar4,
                      color: t
                  }),
                  (0, o.jsx)(x.R9, {
                      foreground: Z.sparkleStar5,
                      color: t
                  })
              ]
          })
        : (0, o.jsxs)('div', {
              className: l()(r, Z.freeTrialPillWithSparkles),
              children: [
                  (0, o.jsx)(j, {
                      text: n,
                      colorOptions: i
                  }),
                  (0, o.jsx)(x.R9, {
                      foreground: Z.sparkleStar1,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6
                      },
                      color: t
                  }),
                  (0, o.jsx)(x.R9, {
                      foreground: Z.sparkleStar2,
                      color: t
                  })
              ]
          });
}
function K(e) {
    let { Icon: t, text: n, isNew: r = !1, className: i } = e;
    return (0, o.jsxs)('div', {
        className: null != i ? i : Z.itemWithWumpus,
        children: [
            (0, o.jsx)(t, {
                className: Z.icon,
                color: 'currentColor'
            }),
            (0, o.jsx)(f.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                children: n
            }),
            r
                ? (0, o.jsx)(I.Z, {
                      className: Z.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0
                  })
                : null
        ]
    });
}
function z(e) {
    var t;
    let { defaultPriceString: n, subscriptionPlan: r, discountOffer: i } = e,
        a = (0, P.A)(r);
    return (0, o.jsx)(o.Fragment, {
        children: F.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
            numMonths: null !== (t = i.discount.user_usage_limit) && void 0 !== t ? t : k.rt,
            discountedPrice: a,
            regularPrice: n
        })
    });
}
function q(e) {
    let { isGift: t, premiumTier: n, offerTierMatchesCard: r, offerType: i, showYearlyPrice: a, priceOptions: s } = e,
        l = (0, d.e7)([S.ZP], () => S.ZP.getPremiumTypeSubscription()),
        u = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        _ = (0, y.t7)(),
        E = (0, y.lr)(),
        h = n === k.p9.TIER_0 ? k.Si.TIER_0 : k.Si.TIER_2,
        p = (null == l ? void 0 : l.trialId) != null ? (null == u ? void 0 : u.premiumType) : _ ? k.p9.TIER_2 : null,
        m = (0, M.N)(),
        I = (0, D.Ng)(),
        T = null == m ? void 0 : m.subscription_trial;
    if (!t && null != p && n === p && null != l && null != l.planIdFromItems) {
        let e = null != l.trialEndsAt ? c()(null == l ? void 0 : l.trialEndsAt).diff(c()(), 'd') : 0,
            t = k.GP[l.planIdFromItems],
            n = R.ZP.formatPriceString(R.ZP.getDefaultPrice(t.id), t.interval),
            r = () => {
                var t, r, a;
                return 0 === i
                    ? F.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                          remainingTime: e,
                          price: n
                      })
                    : l.planIdFromItems === k.Xh.PREMIUM_YEAR_TIER_2
                      ? F.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                            percent: null !== (t = null == E ? void 0 : E.percentage) && void 0 !== t ? t : k.Bo,
                            regularPrice: n
                        })
                      : F.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                            percent: null !== (r = null == E ? void 0 : E.percentage) && void 0 !== r ? r : k.M_,
                            regularPrice: n,
                            numMonths: null !== (a = null == E ? void 0 : E.duration) && void 0 !== a ? a : k.rt
                        });
            };
        return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)(f.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: Z.trialHeader,
                children: r()
            })
        });
    }
    if (!t && r) {
        let e = R.ZP.formatPriceString(R.ZP.getDefaultPrice(n === k.p9.TIER_0 ? k.Xh.PREMIUM_MONTH_TIER_0 : k.Xh.PREMIUM_MONTH_TIER_2), k.rV.MONTH);
        if (0 === i) {
            var A, v, N, O;
            return (0, o.jsx)(f.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: Z.trialHeader,
                children: F.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                    planName: (0, R.aq)(null !== (v = k.IW[null !== (A = null == T ? void 0 : T.sku_id) && void 0 !== A ? A : k.Si.NONE]) && void 0 !== v ? v : k.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, R.if)({
                        intervalType: null !== (N = null == T ? void 0 : T.interval) && void 0 !== N ? N : k.rV.DAY,
                        intervalCount: null !== (O = null == T ? void 0 : T.interval_count) && void 0 !== O ? O : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        }
        if (null != I)
            return (0, o.jsx)(f.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: Z.trialHeader,
                children: (0, o.jsx)(z, {
                    defaultPriceString: e,
                    subscriptionPlan: k.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: I
                })
            });
    }
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(w.Z, {
                subscriptionTier: h,
                isGift: t,
                className: Z.price,
                priceOptions: s
            }),
            a &&
                (0, o.jsx)(w.Z, {
                    subscriptionTier: h,
                    interval: k.rV.YEAR,
                    isGift: t,
                    className: Z.price,
                    priceOptions: s
                })
        ]
    });
}
function Q() {
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(K, {
                Icon: f.UploadIcon,
                text: F.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, R.v9)(k.p9.TIER_0, { useSpace: !1 }) })
            }),
            (0, o.jsx)(K, {
                Icon: f.ReactionIcon,
                text: F.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }),
            (0, o.jsx)(K, {
                Icon: f.SuperReactionIcon,
                text: F.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
            }),
            (0, o.jsx)(K, {
                Icon: f.NitroWheelIcon,
                text: F.Z.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
            })
        ]
    });
}
function X(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: i, className: a, isGift: s = !1, priceOptions: u } = e,
        c = (0, d.e7)([S.ZP], () => S.ZP.getPremiumTypeSubscription()),
        _ = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        E = (0, M.N)(),
        h = null == E ? void 0 : null === (t = E.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        p = (null == c ? void 0 : c.trialId) != null,
        m = (null == c ? void 0 : c.trialId) != null ? (null == _ ? void 0 : _.premiumType) : null,
        I = null != h || p;
    return (0, o.jsxs)('div', {
        className: l()(Z.tier0, Z.card, a, {
            [Z.withTier0Rim]: !s && I,
            [Z.withCardHover]: !s && I
        }),
        children: [
            h === k.Si.TIER_0
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(W, {
                              text: F.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                              className: Z.topRimPill,
                              colorOptions: 0
                          }),
                          (0, o.jsx)('div', { className: Z.rimGlowTier0 })
                      ]
                  })
                : null,
            n
                ? (0, o.jsx)('div', {
                      className: Z.wumpusImageContainer,
                      children: (0, o.jsx)(f.Image, {
                          src: V,
                          mediaLayoutType: B.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: Z.wumpusImage
                      })
                  })
                : null,
            s || h !== k.Si.TIER_0
                ? null
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(W, {
                              text: F.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                              className: Z.topRimPill,
                              colorOptions: 0
                          }),
                          (0, o.jsx)('div', { className: Z.rimGlowTier0 })
                      ]
                  }),
            s || m !== k.p9.TIER_0
                ? null
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(W, {
                              text: F.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                              className: Z.topRimPill,
                              colorOptions: 0
                          }),
                          (0, o.jsx)('div', { className: Z.rimGlowTier0 })
                      ]
                  }),
            (0, o.jsxs)('div', {
                children: [
                    (0, o.jsxs)('div', {
                        children: [
                            (0, o.jsx)(N.Z, { className: l()(Z.title, Z.tier0Title) }),
                            (0, o.jsx)(q, {
                                isGift: s,
                                premiumTier: k.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: h === k.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: u
                            })
                        ]
                    }),
                    (0, o.jsx)('div', { children: (0, o.jsx)(Q, {}) })
                ]
            }),
            r,
            s || h !== k.Si.TIER_0 ? null : (0, o.jsx)(x.t, { tier: k.p9.TIER_0 })
        ]
    });
}
function $(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: r = !1 } = e,
        i = (0, d.e7)([T.default], () => T.default.locale),
        a = (0, d.e7)([C.Z], () => C.Z.affinities),
        s = n && !r && a.length > 0;
    if (1 === t)
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(K, {
                    Icon: (0, f.makeIconCompat)(A.Z),
                    text: F.Z.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                        numBoosts: k.cb,
                        percentageOff: (0, O.T3)(i, k.Rr / 100)
                    })
                }),
                (0, o.jsx)(K, {
                    Icon: f.UploadIcon,
                    text: F.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, R.v9)(k.p9.TIER_2, { useSpace: !1 }) })
                }),
                (0, o.jsx)(K, {
                    Icon: f.ReactionIcon,
                    text: F.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                }),
                (0, o.jsx)(K, {
                    Icon: f.ScreenArrowIcon,
                    text: F.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                }),
                (0, o.jsx)(K, {
                    Icon: f.UserSquareIcon,
                    text: F.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                })
            ]
        });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(K, {
                Icon: f.UploadIcon,
                text: F.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, R.v9)(k.p9.TIER_2, { useSpace: !1 }) })
            }),
            (0, o.jsx)(K, {
                Icon: f.ReactionIcon,
                text: F.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }),
            (0, o.jsx)(K, {
                Icon: f.SuperReactionIcon,
                text: F.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
            }),
            (0, o.jsx)(K, {
                Icon: f.ScreenArrowIcon,
                text: F.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
            }),
            (0, o.jsx)(K, {
                Icon: (0, f.makeIconCompat)(A.Z),
                text: F.Z.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
            }),
            (0, o.jsx)(K, {
                Icon: f.UserSquareIcon,
                text: F.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
            }),
            s && (0, o.jsx)(G.Z, {})
        ]
    });
}
function J(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: i, featureSet: a = 0, className: s, isGift: u = !1, isModal: c = !1, priceOptions: _, showHalloweenGift: p = !1 } = e,
        m = (0, d.e7)([S.ZP], () => S.ZP.getPremiumTypeSubscription()),
        I = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        T = (0, M.N)(),
        A = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        N = (null == m ? void 0 : m.trialId) != null ? (null == I ? void 0 : I.premiumType) : null,
        O = (0, y.Nx)(),
        R = (0, D.Ng)(),
        C = (0, y.t7)(),
        P = null != A || null != N ? 0 : null != R || C ? 1 : null,
        w = (0, U.Vi)(),
        G = !u && O,
        V = (0, U.W1)(),
        j = (0, E.ap)((0, h.ZP)()),
        K = j ? 5 : 2,
        { enabled: z } = L._.useExperiment({ location: Y }, { autoTrackExposure: !1 }),
        Q = F.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
    z && (null == T ? void 0 : T.trial_id) === k.a7 && (Q = F.Z.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL);
    let X = G && !j ? Z.rimGlowTier2 : void 0;
    return (0, o.jsxs)('div', {
        className: l()(Z.card, Z.tier2, s, {
            [Z.withTier2Rim]: G,
            [Z.withCardHover]: G,
            [Z.withHalloweenTier2]: p
        }),
        children: [
            !u && null != R && (0, D.Wp)(R, k.Si.TIER_2) && void 0 !== R.discount.amount
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(W, {
                              text: C ? F.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : F.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: R.discount.amount }),
                              className: Z.topRimPill,
                              colorOptions: K
                          }),
                          (0, o.jsx)('div', { className: X })
                      ]
                  })
                : null,
            u || A !== k.Si.TIER_2
                ? null
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(W, {
                              text: Q,
                              className: Z.topRimPill,
                              colorOptions: K
                          }),
                          (0, o.jsx)('div', { className: X })
                      ]
                  }),
            u || N !== k.p9.TIER_2
                ? null
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(W, {
                              text: F.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                              className: Z.topRimPill,
                              colorOptions: K
                          }),
                          (0, o.jsx)('div', { className: X })
                      ]
                  }),
            !u &&
                C &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(W, {
                            text: F.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                            className: Z.topRimPill,
                            colorOptions: K
                        }),
                        (0, o.jsx)('div', { className: X })
                    ]
                }),
            n
                ? (0, o.jsx)('div', {
                      className: Z.wumpusImageContainer,
                      children: (0, o.jsx)(f.Image, {
                          src: H,
                          mediaLayoutType: B.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: Z.wumpusImage
                      })
                  })
                : null,
            (0, o.jsxs)('div', {
                children: [
                    (0, o.jsxs)('div', {
                        children: [
                            (0, o.jsx)(v.Z, { className: l()(Z.title, Z.tier2Title) }),
                            !u &&
                                A !== k.Si.TIER_2 &&
                                w &&
                                (0, o.jsx)('div', {
                                    children: (0, o.jsx)(f.Text, {
                                        variant: 'text-xs/bold',
                                        className: Z.freeTrialPillInline,
                                        children: V
                                    })
                                }),
                            (0, o.jsx)(q, {
                                isGift: u,
                                premiumTier: k.p9.TIER_2,
                                offerType: P,
                                offerTierMatchesCard: A === k.Si.TIER_2 || (0, D.Wp)(R, k.Si.TIER_2),
                                showYearlyPrice: i,
                                priceOptions: _
                            })
                        ]
                    }),
                    (0, o.jsx)('div', {
                        children: (0, o.jsx)($, {
                            featureSet: a,
                            isModal: c,
                            isGift: u
                        })
                    })
                ]
            }),
            r,
            u || (A !== k.Si.TIER_2 && null == R) ? null : (0, o.jsx)(x.t, { tier: k.p9.TIER_2 }),
            p
                ? (0, o.jsxs)('div', {
                      className: Z.halloweenGiftMessage,
                      children: [
                          (0, o.jsx)(f.Text, {
                              className: Z.halloweenGiftMessageText,
                              variant: 'text-md/medium',
                              children: F.Z.Messages.NITROWEEN_MOBILE_GIFT_PLAN_SELECT_DESCRIPTION
                          }),
                          (0, o.jsx)('div', {
                              className: Z.halloweenAvatar,
                              children: (0, o.jsx)(b.Z, { size: f.AvatarSizes.SIZE_80 })
                          })
                      ]
                  })
                : null
        ]
    });
}
function ee(e) {
    let { showWumpus: t, tier0CTAButton: n, tier2CTAButton: r, className: i } = e,
        { analyticsLocations: a } = (0, m.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD);
    return (0, o.jsx)(m.Gt, {
        value: a,
        children: (0, o.jsxs)('div', {
            className: l()(Z.premiumCards, i),
            children: [
                (0, o.jsx)(X, {
                    showWumpus: t,
                    ctaButton: n
                }),
                (0, o.jsx)(J, {
                    showWumpus: t,
                    ctaButton: r
                })
            ]
        })
    });
}
!(function (e) {
    (e[(e.PREMIUM_TIER_0_WHITE_FILL = 0)] = 'PREMIUM_TIER_0_WHITE_FILL'), (e[(e.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = 'PREMIUM_TIER_0_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_WHITE_FILL = 2)] = 'PREMIUM_TIER_2_WHITE_FILL'), (e[(e.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE');
})(r || (r = {})),
    !(function (e) {
        (e[(e.PREMIUM_TRIAL = 0)] = 'PREMIUM_TRIAL'), (e[(e.PREMIUM_DISCOUNT = 1)] = 'PREMIUM_DISCOUNT');
    })(i || (i = {})),
    !(function (e) {
        (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.BOOSTING = 1)] = 'BOOSTING');
    })(a || (a = {}));
