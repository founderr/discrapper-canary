t.d(n, {
    O: function () {
        return V;
    },
    y: function () {
        return K;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    s = t.n(r),
    a = t(512722),
    c = t.n(a),
    o = t(442837),
    u = t(481060),
    d = t(490504),
    m = t(911969),
    p = t(940824),
    x = t(987209),
    h = t(563132),
    f = t(409813),
    v = t(509545),
    E = t(78839),
    S = t(669079),
    g = t(63063),
    j = t(74538),
    y = t(937615),
    I = t(711459),
    P = t(109213),
    T = t(717401),
    N = t(857039),
    b = t(847903),
    C = t(104494),
    _ = t(639119),
    O = t(55610),
    A = t(653798),
    Z = t(553797),
    R = t(927699),
    w = t(987716),
    M = t(311821),
    L = t(459965),
    k = t(811616),
    F = t(251660),
    D = t(474936),
    U = t(981631),
    B = t(231338),
    G = t(388032),
    H = t(461405),
    W = t(615945);
function V(e) {
    var n, t, r, a;
    let { premiumSubscription: f, skuId: E, selectedPlanId: M, setSelectedPlanId: L, priceOptions: V, planOptions: K, eligibleForMultiMonthPlans: z, referralTrialOfferId: Y, subscriptionPeriodEnd: X, showTotal: q = !0, discountInvoiceItems: J, handleClose: Q } = e,
        { activeSubscription: $, setSelectedPlanId: ee, selectedSkuId: en, selectedPlan: et, priceOptions: ei } = (0, h.usePaymentContext)(),
        { isGift: el, giftRecipient: er, selectedGiftStyle: es, customGiftMessage: ea, setCustomGiftMessage: ec, giftingOrigin: eo, claimableRewards: eu, setSelectedGiftingPromotionReward: ed } = (0, x.wD)(),
        em = (0, S.MY)(er),
        ep = el && (0, S.pO)(er),
        ex = (0, T.cF)(et, ep, eu),
        eh = (0, N.Z)({ location: 'PremiumPlanSelectStep' });
    (E = null != E ? E : en), (f = null != f ? f : $), c()(void 0 !== f, 'should not be undefined');
    let [ef, ev] = (0, o.Wu)([v.Z], () => [null != f ? v.Z.get(f.planId) : null, null != M ? v.Z.get(M) : null]),
        eE = (0, _.N)(Y),
        eS = null == eE ? void 0 : eE.subscription_trial,
        eg = (0, C.Ng)(),
        ej = null == eg ? void 0 : null === (n = eg.discount) || void 0 === n ? void 0 : n.plan_ids,
        ey = null != ev ? ev : et,
        eI = l.useCallback(
            (e) => {
                null != L ? L(e) : ee(e);
            },
            [L, ee]
        ),
        eP = null != V ? V : ei;
    c()(null != eP, 'Price option has to be set');
    let eT = null != eE && D.nG[eE.trial_id].skus.includes(E),
        eN = null != eg && K.some((e) => (null == ej ? void 0 : ej.includes(e))) && null != eg.discount,
        eb = (0, j.aS)(D.Xh.PREMIUM_MONTH_TIER_2, !1, el, eP);
    l.useEffect(() => {
        z && I.ZP.trackExposure({ location: '5f89bb_1' });
    }, [z]);
    let eC = (null == ey ? void 0 : ey.id) != null && K.includes(ey.id);
    l.useEffect(() => {
        if (!eC) {
            if (null == ef || el) eI(K[0]);
            else if (null != ef) {
                let e = K.find((e) => e !== ef.id);
                null != e && eI(e);
            }
        }
    }, [eC, el, K, ef, eI]),
        l.useEffect(() => {
            ex && null != eu && eu.length > 0 && ed(eu[0]);
        }, [eu, ed, ex]);
    let e_ = !ep && (el || (!eT && !eN)) && eC && q,
        eO = (0, u.useRadioGroup)(),
        eA = (null == ey ? void 0 : ey.id) != null ? (0, j.aS)(ey.id, !1, el, eP) : void 0,
        { ipCountryCode: eZ } = (0, b.Z)(),
        eR = 'HR' === eZ && null != eA && eA.currency === B.pK.EUR,
        ew = (0, j.Ap)(eP.paymentSourceId),
        eM = l.useMemo(() => {
            if ((null == eS ? void 0 : eS.interval) === D.rV.DAY) return (null == eS ? void 0 : eS.interval_count) > 7 ? G.intl.string(G.t.Z1V2cn) : G.intl.string(G.t.MI1rHh);
            return G.intl.string(G.t['+S5lra']);
        }, [eS]),
        eL = !el && (eN || (null != eS && eT && null != X)),
        ek = null == J ? void 0 : null === (a = J.find((e) => e.subscriptionPlanId === D.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === a ? void 0 : null === (r = a.discounts) || void 0 === r ? void 0 : null === (t = r.find((e) => e.type === m.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount,
        eF = (e, n, t) => {
            if (ep)
                return (0, i.jsx)(u.FormTitle, {
                    className: W.selectGiftTitle,
                    children: G.intl.string(G.t['3E5hXl'])
                });
            if (!eL)
                return (0, i.jsx)('div', {
                    className: W.selectPlanChooseTitle,
                    children: G.intl.string(G.t.a19jpa)
                });
            if (n) {
                let n = (null == e ? void 0 : e.trial_id) === D.a7;
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: W.trialPlanSelectHeader,
                            children: n
                                ? G.intl.format(G.t.nG95hI, { endDate: X })
                                : G.intl.format(G.t.s4E7kZ, {
                                      trialEnd: X,
                                      trialPeriod: eM
                                  })
                        }),
                        (0, i.jsx)('hr', { className: W.planSelectSeparator })
                    ]
                });
            }
            if (t && null != ek && null != eb && M === D.Xh.PREMIUM_MONTH_TIER_2)
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: W.trialPlanSelectHeader,
                            children: G.intl.format(G.t['nG7g/P'], {
                                numMonths: null == eg ? void 0 : eg.discount.user_usage_limit,
                                discountedPrice: (0, y.T4)(eb.amount - ek, eb.currency),
                                regularPrice: (0, y.T4)(eb.amount, eb.currency)
                            })
                        }),
                        (0, i.jsx)('hr', { className: W.planSelectSeparator })
                    ]
                });
        },
        { enabled: eD } = P.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        eU = eo === D.Wt.DM_CHANNEL && eD,
        eB = eU ? W.bodyColumnLeft : W.bodyColumnMiddle,
        eG = () => {
            if (ep && null != es)
                return eU
                    ? (0, i.jsx)(w.q, {
                          className: H.adjustedGiftMainAnimation,
                          optionsContainerClassName: H.adjustedGiftBoxOptionContainer
                      })
                    : (0, i.jsx)(w.q, {});
            return null;
        },
        eH = () =>
            (0, i.jsx)('div', {
                ...eO,
                children: K.map((e) =>
                    (0, i.jsx)(
                        k.Z,
                        {
                            planId: e,
                            premiumSubscription: el ? null : null != f ? f : null,
                            selectPlan: eI,
                            selected: (null == ey ? void 0 : ey.id) === e,
                            priceOptions: eP,
                            shouldShowUpdatedPaymentModal: eL,
                            isEligibleForDiscount: eN,
                            discountAmountOff: ek,
                            isEligibleForTrial: eT
                        },
                        e
                    )
                )
            }),
        eW = () => eF(eE, eT, eN),
        eV = () => (eR ? (0, i.jsx)(d.Z, { message: G.intl.formatToPlainString(G.t['9hnZoK'], { kunaPriceWithCurrency: (0, y.T4)(7.5345 * eA.amount, B.pK.HRK) }) }) : null);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(ep ? W.stepBodyCustomGift : W.stepBody, { [W.paddingForHalloweenBanner]: eh }),
            children: [
                (0, i.jsxs)('div', {
                    className: ep ? eB : void 0,
                    children: [
                        (0, i.jsx)(O.Z, {
                            fromBoostCancelModal: !1,
                            className: W.legacyPricingNotice
                        }),
                        eU && eW(),
                        eU ? eH() : eG(),
                        eU && eV()
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: ep ? W.bodyColumnRight : void 0,
                    children: [
                        (0, i.jsx)(F.s, { giftRecipient: er }),
                        eU && eG(),
                        (() => {
                            if (em === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != ec)
                                return (0, i.jsx)(R.Z, {
                                    sectionTitle: G.intl.string(G.t.B3miEx),
                                    className: W.customGiftMessageWrapper,
                                    innerClassName: W.customGiftMessage,
                                    onTextChange: (e) => ec(e),
                                    pendingText: ea,
                                    currentText: ea
                                });
                        })(),
                        null != ef &&
                            !el &&
                            (0, i.jsx)('div', {
                                className: W.bodyText,
                                children: (function (e, n) {
                                    let t = G.intl.string(G.t.BYa62t),
                                        i = G.intl.string(G.t.CDa6Dg),
                                        l = (() => {
                                            switch (e.interval) {
                                                case D.rV.YEAR:
                                                    return t;
                                                case D.rV.MONTH:
                                                default:
                                                    return i;
                                            }
                                        })(),
                                        r = e.skuId;
                                    switch (n) {
                                        case D.Si.TIER_0:
                                            switch (r) {
                                                case D.Si.TIER_1:
                                                    return G.intl.string(G.t.q6mxDQ);
                                                case D.Si.TIER_2:
                                                    return G.intl.string(G.t.seZVS0);
                                                default:
                                                    return l;
                                            }
                                        case D.Si.TIER_1:
                                            switch (r) {
                                                case D.Si.TIER_0:
                                                    return G.intl.string(G.t['7+u2zs']);
                                                case D.Si.TIER_2:
                                                    return G.intl.string(G.t.NG2qcX);
                                                default:
                                                    return l;
                                            }
                                        case D.Si.TIER_2:
                                            switch (r) {
                                                case D.Si.TIER_0:
                                                case D.Si.TIER_1:
                                                    return G.intl.string(G.t['eB0/w8']);
                                                case D.Si.TIER_2:
                                                    return e.interval === D.rV.MONTH ? G.intl.formatToPlainString(G.t['RqUv8/'], { numFreeGuildSubscriptions: D.cb }) : l;
                                                default:
                                                    return l;
                                            }
                                        default:
                                            return l;
                                    }
                                })(ef, E)
                            }),
                        !eU && eW(),
                        !eU && eH(),
                        (0, i.jsx)('div', {
                            children:
                                e_ && null != ey && null != eA
                                    ? (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)('div', { className: W.selectPlanDivider }),
                                              (0, i.jsx)(A.Ji, {
                                                  label: G.intl.string(G.t.txajQE),
                                                  value: (0, i.jsx)(Z.Z, {
                                                      price: eA.amount,
                                                      currency: eA.currency,
                                                      intervalType: el ? null : ey.interval,
                                                      intervalCount: ey.intervalCount,
                                                      isPrepaidPaymentSource: ew
                                                  }),
                                                  className: W.selectPlanTotalRow
                                              })
                                          ]
                                      })
                                    : null
                        }),
                        !eU && eV(),
                        !el && !eL && q && (0, i.jsx)(d.Z, { message: G.intl.format(G.t.Om31w8, { documentationLink: g.Z.getArticleURL(U.BhN.LOCALIZED_PRICING) }) }),
                        el && !eU && (0, i.jsx)(p.Z, { onClose: Q })
                    ]
                })
            ]
        })
    });
}
function K(e) {
    let { onStepChange: n, selectedPlanId: t, paymentSources: l, onBackClick: r, showBackButton: s, planOptions: a, shouldRenderUpdatedPaymentModal: c = !1, isTrial: o } = e,
        { paymentSources: d, selectedPlan: m } = (0, h.usePaymentContext)(),
        { isGift: p, claimableRewards: f, giftRecipient: v } = (0, x.wD)(),
        E = (0, S.pO)(v);
    return (
        (l = null != l ? l : d),
        (t = null != t ? t : null == m ? void 0 : m.id),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != t && a.includes(t)
                    ? (0, i.jsx)(z, {
                          paymentSources: l,
                          onStepChange: n,
                          selectedPlanId: t,
                          isGift: p,
                          claimableRewards: f,
                          shouldRenderUpdatedPaymentModal: c,
                          isTrial: o
                      })
                    : (0, i.jsx)(u.Button, {
                          disabled: !0,
                          children: G.intl.string(G.t.XqMe3N)
                      }),
                s
                    ? (0, i.jsx)(M.Z, {
                          className: p && E ? W.equalDistantBackButton : void 0,
                          onClick: r
                      })
                    : null
            ]
        })
    );
}
function z(e) {
    let { onStepChange: n, selectedPlanId: t, isGift: l, claimableRewards: r, paymentSources: s, shouldRenderUpdatedPaymentModal: a, isTrial: c } = e,
        d = (0, o.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        { step: m, selectedPlan: p } = (0, h.usePaymentContext)(),
        { hasEntitlements: x } = (0, L.H)(t, l),
        v = (null != d && null != d.paymentSourceId) || Object.keys(s).length > 0 || (x && !c);
    var S = a ? G.intl.string(G.t.PDTjLC) : G.intl.string(G.t.XqMe3N),
        g = f.h8.ADD_PAYMENT_STEPS;
    return (
        v && (g = f.h8.REVIEW),
        (0, T.id)(p, l, r) && m !== f.h8.SELECT_FREE_SKU && (g = f.h8.SELECT_FREE_SKU),
        (0, i.jsx)(u.Button, {
            onClick: () => n(g),
            children: S
        })
    );
}
