n.d(t, {
    Cy: function () {
        return $;
    },
    Gq: function () {
        return er;
    },
    NN: function () {
        return c;
    },
    VE: function () {
        return o;
    },
    ZP: function () {
        return es;
    },
    mn: function () {
        return X;
    },
    nT: function () {
        return ei;
    },
    uZ: function () {
        return u;
    },
    wp: function () {
        return ea;
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
    d = n(735250);
n(470079);
var _ = n(120356),
    E = n.n(_),
    f = n(913527),
    h = n.n(f),
    p = n(442837),
    I = n(692547),
    m = n(780384),
    T = n(481060),
    S = n(410030),
    g = n(100527),
    A = n(906732),
    N = n(535322),
    R = n(706454),
    O = n(594174),
    v = n(78839),
    C = n(709586),
    L = n(483444),
    D = n(599250),
    y = n(942659),
    b = n(930153),
    M = n(74538),
    P = n(357355),
    U = n(140465),
    w = n(184508),
    x = n(650032),
    G = n(515593),
    k = n(104494),
    B = n(639119),
    F = n(230916),
    V = n(248042),
    H = n(504865),
    Z = n(63802),
    Y = n(318990),
    j = n(474936),
    W = n(217702),
    K = n(689938),
    z = n(645512),
    q = n(476945),
    Q = n(945182);
function X(e) {
    let { text: t, className: n, colorOptions: r = 2 } = e;
    return (0, d.jsx)('div', {
        className: E()(n, z.freeTrialPill, {
            [z.freeTrialPillTier0GradientFill]: 1 === r,
            [z.freeTrialPillTier2GradientFill]: 3 === r,
            [z.freeTrialPillTier2OldGradientFill]: 4 === r,
            [z.lightBackgroundPill]: 5 === r
        }),
        children: (0, d.jsx)(T.Text, {
            variant: 'text-xs/bold',
            className: E()(z.freeTrialPillText, {
                [z.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
                [z.freeTrialPillTextTier0]: 0 === r,
                [z.freeTrialPillTextTier2]: 2 === r
            }),
            children: t
        })
    });
}
function $(e) {
    let t,
        { text: n, className: r, colorOptions: i = 2, isPillOnBorder: a = !0 } = e;
    switch (i) {
        case 1:
            t = I.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            t = 'url(#'.concat(Z.l_, ')');
            break;
        case 4:
        case 5:
            t = 'url(#'.concat(Z.Qi, ')');
            break;
        default:
            t = 'white';
    }
    return a
        ? (0, d.jsxs)('div', {
              className: E()(r, z.freeTrialPillWithSparkles),
              children: [
                  (0, d.jsx)(Z.R9, {
                      foreground: z.sparkleStar1,
                      color: t
                  }),
                  (0, d.jsx)(Z.R9, {
                      foreground: z.sparkleStar2,
                      color: t
                  }),
                  (0, d.jsx)(Z.R9, {
                      foreground: z.sparkleStar3,
                      color: t
                  }),
                  (0, d.jsx)(X, {
                      text: n,
                      colorOptions: i
                  }),
                  (0, d.jsx)(Z.R9, {
                      foreground: z.sparkleStar4,
                      color: t
                  }),
                  (0, d.jsx)(Z.R9, {
                      foreground: z.sparkleStar5,
                      color: t
                  })
              ]
          })
        : (0, d.jsxs)('div', {
              className: E()(r, z.freeTrialPillWithSparkles),
              children: [
                  (0, d.jsx)(X, {
                      text: n,
                      colorOptions: i
                  }),
                  (0, d.jsx)(Z.R9, {
                      foreground: z.sparkleStar1,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6
                      },
                      color: t
                  }),
                  (0, d.jsx)(Z.R9, {
                      foreground: z.sparkleStar2,
                      color: t
                  })
              ]
          });
}
function J(e) {
    let { Icon: t, text: n, isNew: r = !1, className: i, textVariant: a } = e;
    return (0, d.jsxs)('div', {
        className: null != i ? i : z.itemWithWumpus,
        children: [
            (0, d.jsx)(t, {
                className: z.icon,
                color: 'currentColor'
            }),
            (0, d.jsx)(T.Text, {
                variant: null != a ? a : 'text-md/normal',
                color: 'always-white',
                children: n
            }),
            r
                ? (0, d.jsx)(N.Z, {
                      className: z.newTagItem,
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
        a = (0, F.A)(r);
    return (0, d.jsx)(d.Fragment, {
        children: K.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
            numMonths: null !== (t = i.discount.user_usage_limit) && void 0 !== t ? t : j.rt,
            discountedPrice: a,
            regularPrice: n
        })
    });
}
function et(e) {
    var t, n, r, i, a, s, o;
    let { isGift: l, premiumTier: u, offerTierMatchesCard: c, offerType: _, showYearlyPrice: E, priceOptions: f, textVariant: I, className: m, shouldUseTaglineXPCopy: S } = e,
        g = (0, p.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()),
        A = (0, p.e7)([O.default], () => O.default.getCurrentUser()),
        N = (0, U.t7)(),
        R = (0, U.lr)(),
        C = u === j.p9.TIER_0 ? j.Si.TIER_0 : j.Si.TIER_2,
        L = (null == g ? void 0 : g.trialId) != null ? (null == A ? void 0 : A.premiumType) : N ? j.p9.TIER_2 : null,
        D = (0, B.N)(),
        y = (0, k.Ng)(),
        b = null == D ? void 0 : D.subscription_trial;
    if (!l && null != L && u === L && null != g && null != g.planIdFromItems) {
        let e = null != g.trialEndsAt ? h()(null == g ? void 0 : g.trialEndsAt).diff(h()(), 'd') : 0,
            i = j.GP[g.planIdFromItems],
            a = M.ZP.formatPriceString(M.ZP.getDefaultPrice(i.id), i.interval);
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)(T.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: z.trialHeader,
                children:
                    0 === _
                        ? K.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                              remainingTime: e,
                              price: a
                          })
                        : g.planIdFromItems === j.Xh.PREMIUM_YEAR_TIER_2
                          ? K.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                                percent: null !== (t = null == R ? void 0 : R.percentage) && void 0 !== t ? t : j.Bo,
                                regularPrice: a
                            })
                          : K.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                                percent: null !== (n = null == R ? void 0 : R.percentage) && void 0 !== n ? n : j.M_,
                                regularPrice: a,
                                numMonths: null !== (r = null == R ? void 0 : R.duration) && void 0 !== r ? r : j.rt
                            })
            })
        });
    }
    if (!l && c) {
        let e = M.ZP.formatPriceString(M.ZP.getDefaultPrice(u === j.p9.TIER_0 ? j.Xh.PREMIUM_MONTH_TIER_0 : j.Xh.PREMIUM_MONTH_TIER_2), j.rV.MONTH);
        if (0 === _) {
            return (0, d.jsx)(T.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: z.trialHeader,
                children: K.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                    planName: (0, M.aq)(null !== (a = j.IW[null !== (i = null == b ? void 0 : b.sku_id) && void 0 !== i ? i : j.Si.NONE]) && void 0 !== a ? a : j.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, M.if)({
                        intervalType: null !== (s = null == b ? void 0 : b.interval) && void 0 !== s ? s : j.rV.DAY,
                        intervalCount: null !== (o = null == b ? void 0 : b.interval_count) && void 0 !== o ? o : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        }
        if (null != y)
            return (0, d.jsx)(T.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: z.trialHeader,
                children: (0, d.jsx)(ee, {
                    defaultPriceString: e,
                    subscriptionPlan: j.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: y
                })
            });
    }
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(H.Z, {
                subscriptionTier: C,
                isGift: l,
                className: null != m ? m : z.price,
                priceOptions: f,
                variant: I,
                shouldUseTaglineXPCopy: S
            }),
            E &&
                (0, d.jsx)(H.Z, {
                    subscriptionTier: C,
                    interval: j.rV.YEAR,
                    className: null != m ? m : z.price,
                    isGift: l,
                    priceOptions: f,
                    variant: I,
                    shouldUseTaglineXPCopy: S
                })
        ]
    });
}
function en(e) {
    let { shouldUseTaglineXPCopy: t } = e;
    return t
        ? (0, d.jsxs)(d.Fragment, {
              children: [
                  (0, d.jsx)(J, {
                      Icon: T.CheckmarkLargeIcon,
                      text: K.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM,
                      className: z.item,
                      textVariant: 'text-sm/normal'
                  }),
                  (0, d.jsx)(J, {
                      Icon: T.CheckmarkLargeIcon,
                      text: K.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, M.v9)(j.p9.TIER_0, { useSpace: !1 }) }),
                      className: z.item,
                      textVariant: 'text-sm/normal'
                  }),
                  (0, d.jsx)(J, {
                      Icon: T.CheckmarkLargeIcon,
                      text: K.Z.Messages.PREMIUM_TRIAL_ACTION_SHEET_CUSTOM_APP_ICONS,
                      className: z.item,
                      textVariant: 'text-sm/normal'
                  })
              ]
          })
        : (0, d.jsxs)(d.Fragment, {
              children: [
                  (0, d.jsx)(J, {
                      Icon: T.UploadIcon,
                      text: K.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, M.v9)(j.p9.TIER_0, { useSpace: !1 }) })
                  }),
                  (0, d.jsx)(J, {
                      Icon: T.ReactionIcon,
                      text: K.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                  }),
                  (0, d.jsx)(J, {
                      Icon: T.SuperReactionIcon,
                      text: K.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
                  }),
                  (0, d.jsx)(J, {
                      Icon: T.NitroWheelIcon,
                      text: K.Z.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
                  })
              ]
          });
}
function er(e) {
    var t;
    let { showWumpus: n, shouldUseTaglineXPCopy: r, ctaButton: i, showYearlyPrice: a, className: s, isGift: o = !1, priceOptions: l, variant: u } = e,
        c = (0, p.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()),
        _ = (0, p.e7)([O.default], () => O.default.getCurrentUser()),
        f = (0, B.N)(),
        h = null == f ? void 0 : null === (t = f.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        I = (null == c ? void 0 : c.trialId) != null,
        m = (null == c ? void 0 : c.trialId) != null ? (null == _ ? void 0 : _.premiumType) : null,
        S = null != h || I,
        { useEssentials: g } = (0, w.VR)('PremiumTierCards');
    return (0, d.jsxs)('div', {
        className: E()(z.tier0, z.card, s, {
            [z.withTier0Rim]: !o && S,
            [z.withCardHover]: !o && S
        }),
        children: [
            h === j.Si.TIER_0
                ? (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)($, {
                              text: K.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                              className: z.topRimPill,
                              colorOptions: 0
                          }),
                          (0, d.jsx)('div', { className: z.rimGlowTier0 })
                      ]
                  })
                : null,
            n
                ? (0, d.jsx)('div', {
                      className: z.wumpusImageContainer,
                      children: (0, d.jsx)(T.Image, {
                          src: q,
                          mediaLayoutType: W.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: z.wumpusImage
                      })
                  })
                : null,
            o || h !== j.Si.TIER_0
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)($, {
                              text: K.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                              className: z.topRimPill,
                              colorOptions: 0
                          }),
                          (0, d.jsx)('div', { className: z.rimGlowTier0 })
                      ]
                  }),
            o || m !== j.p9.TIER_0
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)($, {
                              text: K.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                              className: z.topRimPill,
                              colorOptions: 0
                          }),
                          (0, d.jsx)('div', { className: z.rimGlowTier0 })
                      ]
                  }),
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            r ? (0, d.jsx)(y.Z, { className: E()(z.title, z.taglineXPTier0Title) }) : (0, d.jsx)(D.Z, { className: E()(z.title, z.tier0Title) }),
                            r &&
                                (0, d.jsx)(T.Text, {
                                    variant: 'display-md',
                                    color: 'always-white',
                                    className: 2 === u ? z.taglineXPSubHeaderSettings : z.taglineXPSubHeaderStoreHome,
                                    children: g ? K.Z.Messages.NITRO_MAKETING_THE_ESSENTIALS : K.Z.Messages.NITRO_MARKETING_THE_BASICS
                                }),
                            (0, d.jsx)(et, {
                                isGift: o,
                                premiumTier: j.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: h === j.Si.TIER_0,
                                showYearlyPrice: a,
                                priceOptions: l,
                                textVariant: r ? 'heading-lg/normal' : void 0,
                                shouldUseTaglineXPCopy: r,
                                className: r ? (a ? z.taglineXPPrices : z.taglineXPPrice) : void 0
                            })
                        ]
                    }),
                    (0, d.jsx)('div', { children: (0, d.jsx)(en, { shouldUseTaglineXPCopy: r }) })
                ]
            }),
            i,
            o || h !== j.Si.TIER_0 ? null : (0, d.jsx)(Z.t, { tier: j.p9.TIER_0 })
        ]
    });
}
function ei(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: r = !1 } = e,
        i = (0, p.e7)([R.default], () => R.default.locale),
        a = (0, p.e7)([P.Z], () => P.Z.affinities),
        s = n && !r && a.length > 0;
    switch (t) {
        case 2:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(T.Text, {
                        variant: 'text-sm/normal',
                        color: 'always-white',
                        style: { marginBottom: 6 },
                        children: K.Z.Messages.PREMIUM_TIER_2_DETAILS_SUBHEADER
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.CheckmarkLargeIcon,
                        text: K.Z.Messages.MARKETING_PAGE_COMPARISON_TABLE_PROFILE_THEMES_V2,
                        className: z.item,
                        textVariant: 'text-sm/normal'
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.CheckmarkLargeIcon,
                        text: K.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, M.v9)(j.p9.TIER_2, { useSpace: !1 }) }),
                        className: z.item,
                        textVariant: 'text-sm/normal'
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.CheckmarkLargeIcon,
                        text: K.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM,
                        className: z.item,
                        textVariant: 'text-sm/normal'
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.CheckmarkLargeIcon,
                        text: K.Z.Messages.PREMIUM_TIER_2_FEATURE_THEMES_AND_MORE,
                        className: z.item,
                        textVariant: 'text-sm/normal'
                    }),
                    s && (0, d.jsx)(Y.Z, {})
                ]
            });
        case 1:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(J, {
                        Icon: (0, T.makeIconCompat)(C.Z),
                        text: K.Z.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                            numBoosts: j.cb,
                            percentageOff: (0, b.T3)(i, j.Rr / 100)
                        })
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.UploadIcon,
                        text: K.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, M.v9)(j.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.ReactionIcon,
                        text: K.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.ScreenArrowIcon,
                        text: K.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.UserSquareIcon,
                        text: K.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    })
                ]
            });
        case 3:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(J, {
                        Icon: T.UploadIcon,
                        text: K.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, M.v9)(j.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.ReactionIcon,
                        text: K.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.SuperReactionIcon,
                        text: K.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.ScreenArrowIcon,
                        text: K.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.UserSquareIcon,
                        text: K.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    })
                ]
            });
        default:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(J, {
                        Icon: T.UploadIcon,
                        text: K.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, M.v9)(j.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.ReactionIcon,
                        text: K.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.SuperReactionIcon,
                        text: K.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.ScreenArrowIcon,
                        text: K.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }),
                    (0, d.jsx)(J, {
                        Icon: (0, T.makeIconCompat)(C.Z),
                        text: K.Z.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
                    }),
                    (0, d.jsx)(J, {
                        Icon: T.UserSquareIcon,
                        text: K.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    }),
                    s && (0, d.jsx)(Y.Z, {})
                ]
            });
    }
}
function ea(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: i, featureSet: a = 0, className: s, isGift: o = !1, isModal: l = !1, priceOptions: u, showHalloweenGift: c = !1, shouldUseTaglineXPCopy: _ = !1, variant: f } = e,
        h = (0, p.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()),
        I = (0, p.e7)([O.default], () => O.default.getCurrentUser()),
        g = (0, B.N)(),
        A = null == g ? void 0 : null === (t = g.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        N = (null == h ? void 0 : h.trialId) != null ? (null == I ? void 0 : I.premiumType) : null,
        R = (0, U.Nx)(),
        C = (0, k.Ng)(),
        D = (0, U.t7)(),
        y = null != A || null != N ? 0 : null != C || D ? 1 : null,
        b = (0, V.Vi)(),
        M = !o && R,
        P = (0, V.W1)(),
        w = (0, m.ap)((0, S.ZP)()),
        F = w ? 5 : 2,
        { enabled: H } = x._.useExperiment({ location: 'Tier2Card' }, { autoTrackExposure: !1 }),
        Y = K.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
    H && (null == g ? void 0 : g.trial_id) === j.a7 && (Y = K.Z.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL);
    let q = M && !w ? z.rimGlowTier2 : void 0;
    return (0, d.jsxs)('div', {
        className: E()(z.card, z.tier2, s, {
            [z.withTier2Rim]: M,
            [z.withCardHover]: M,
            [z.withHalloweenTier2]: c
        }),
        children: [
            !o && null != C && (0, k.Wp)(C, j.Si.TIER_2) && void 0 !== C.discount.amount
                ? (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)($, {
                              text: D ? K.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : K.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: C.discount.amount }),
                              className: z.topRimPill,
                              colorOptions: F
                          }),
                          (0, d.jsx)('div', { className: q })
                      ]
                  })
                : null,
            o || A !== j.Si.TIER_2
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)($, {
                              text: Y,
                              className: z.topRimPill,
                              colorOptions: F
                          }),
                          (0, d.jsx)('div', { className: q })
                      ]
                  }),
            o || N !== j.p9.TIER_2
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)($, {
                              text: K.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                              className: z.topRimPill,
                              colorOptions: F
                          }),
                          (0, d.jsx)('div', { className: q })
                      ]
                  }),
            !o &&
                D &&
                (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)($, {
                            text: K.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                            className: z.topRimPill,
                            colorOptions: F
                        }),
                        (0, d.jsx)('div', { className: q })
                    ]
                }),
            n
                ? (0, d.jsx)('div', {
                      className: z.wumpusImageContainer,
                      children: (0, d.jsx)(T.Image, {
                          src: Q,
                          mediaLayoutType: W.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: z.wumpusImage
                      })
                  })
                : null,
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(L.Z, {
                                className: E()(z.title, {
                                    [z.taglineXPTier2Title]: _,
                                    [z.tier2Title]: !_
                                })
                            }),
                            !o &&
                                A !== j.Si.TIER_2 &&
                                b &&
                                (0, d.jsx)('div', {
                                    children: (0, d.jsx)(T.Text, {
                                        variant: 'text-xs/bold',
                                        className: z.freeTrialPillInline,
                                        children: P
                                    })
                                }),
                            _ &&
                                (0, d.jsx)(T.Text, {
                                    variant: 'display-md',
                                    color: 'always-white',
                                    className: 2 === f ? z.taglineXPSubHeaderSettings : z.taglineXPSubHeaderStoreHome,
                                    children: K.Z.Messages.PREMIUM_TIER_2_SUBHEADER
                                }),
                            (0, d.jsx)(et, {
                                isGift: o,
                                premiumTier: j.p9.TIER_2,
                                offerType: y,
                                offerTierMatchesCard: A === j.Si.TIER_2 || (0, k.Wp)(C, j.Si.TIER_2),
                                showYearlyPrice: i,
                                priceOptions: u,
                                textVariant: _ ? 'heading-lg/normal' : void 0,
                                shouldUseTaglineXPCopy: _,
                                className: _ ? (i ? z.taglineXPPrices : z.taglineXPPrice) : void 0
                            })
                        ]
                    }),
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(ei, {
                            featureSet: _ ? 2 : a,
                            isModal: l,
                            isGift: o
                        })
                    })
                ]
            }),
            r,
            o || (A !== j.Si.TIER_2 && null == C) ? null : (0, d.jsx)(Z.t, { tier: j.p9.TIER_2 }),
            c
                ? (0, d.jsxs)('div', {
                      className: z.halloweenGiftMessage,
                      children: [
                          (0, d.jsx)(T.Text, {
                              className: z.halloweenGiftMessageText,
                              variant: 'text-md/medium',
                              children: K.Z.Messages.NITROWEEN_MOBILE_GIFT_PLAN_SELECT_DESCRIPTION
                          }),
                          (0, d.jsx)('div', {
                              className: z.halloweenAvatar,
                              children: (0, d.jsx)(G.Z, { size: T.AvatarSizes.SIZE_80 })
                          })
                      ]
                  })
                : null
        ]
    });
}
function es(e) {
    let { variant: t, showWumpus: n, tier0CTAButton: r, tier2CTAButton: i, className: a } = e,
        { analyticsLocations: s } = (0, A.ZP)(g.Z.PREMIUM_MARKETING_TIER_CARD),
        o = 2 === t || 1 === t;
    return (0, d.jsx)(A.Gt, {
        value: s,
        children: (0, d.jsxs)('div', {
            className: E()(z.premiumCards, a),
            children: [
                (0, d.jsx)(er, {
                    showWumpus: n,
                    shouldUseTaglineXPCopy: o,
                    ctaButton: r,
                    variant: t
                }),
                (0, d.jsx)(ea, {
                    showWumpus: n,
                    shouldUseTaglineXPCopy: o,
                    ctaButton: i,
                    variant: t
                })
            ]
        })
    });
}
((r = o || (o = {}))[(r.PREMIUM_TIER_0_WHITE_FILL = 0)] = 'PREMIUM_TIER_0_WHITE_FILL'), (r[(r.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = 'PREMIUM_TIER_0_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_WHITE_FILL = 2)] = 'PREMIUM_TIER_2_WHITE_FILL'), (r[(r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE'), ((i = l || (l = {}))[(i.PREMIUM_TRIAL = 0)] = 'PREMIUM_TRIAL'), (i[(i.PREMIUM_DISCOUNT = 1)] = 'PREMIUM_DISCOUNT'), ((a = u || (u = {}))[(a.DEFAULT = 0)] = 'DEFAULT'), (a[(a.BOOSTING = 1)] = 'BOOSTING'), (a[(a.TAGLINE_XP = 2)] = 'TAGLINE_XP'), (a[(a.FRACTIONAL_PREMIUM = 3)] = 'FRACTIONAL_PREMIUM'), ((s = c || (c = {}))[(s.DEFAULT = 0)] = 'DEFAULT'), (s[(s.TAGLINE_XP_COPY_HOME = 1)] = 'TAGLINE_XP_COPY_HOME'), (s[(s.TAGLINE_XP_COPY_SETTINGS = 2)] = 'TAGLINE_XP_COPY_SETTINGS');
