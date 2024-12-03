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
    S = t(78839),
    g = t(669079),
    E = t(63063),
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
    R = t(553797),
    Z = t(927699),
    M = t(987716),
    w = t(311821),
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
    let { premiumSubscription: f, skuId: S, selectedPlanId: T, setSelectedPlanId: w, priceOptions: L, planOptions: V, eligibleForMultiMonthPlans: K, referralTrialOfferId: z, subscriptionPeriodEnd: Y, showTotal: X = !0, discountInvoiceItems: q, handleClose: J } = e,
        { activeSubscription: Q, setSelectedPlanId: $, selectedSkuId: ee, selectedPlan: en, priceOptions: et } = (0, h.usePaymentContext)(),
        { isGift: ei, giftRecipient: el, selectedGiftStyle: er, customGiftMessage: es, setCustomGiftMessage: ea, giftingOrigin: ec } = (0, x.wD)(),
        eo = (0, g.MY)(el),
        eu = ei && (0, g.pO)(el),
        ed = (0, N.Z)({ location: 'PremiumPlanSelectStep' });
    (S = null != S ? S : ee), (f = null != f ? f : Q), c()(void 0 !== f, 'should not be undefined');
    let [em, ep] = (0, o.Wu)([v.Z], () => [null != f ? v.Z.get(f.planId) : null, null != T ? v.Z.get(T) : null]),
        ex = (0, _.N)(z),
        eh = null == ex ? void 0 : ex.subscription_trial,
        ef = (0, C.Ng)(),
        ev = null == ef ? void 0 : null === (n = ef.discount) || void 0 === n ? void 0 : n.plan_ids,
        eS = null != ep ? ep : en,
        eg = l.useCallback(
            (e) => {
                null != w ? w(e) : $(e);
            },
            [w, $]
        ),
        eE = null != L ? L : et;
    c()(null != eE, 'Price option has to be set');
    let ej = null != ex && D.nG[ex.trial_id].skus.includes(S),
        ey = null != ef && V.some((e) => (null == ev ? void 0 : ev.includes(e))) && null != ef.discount,
        eI = (0, j.aS)(D.Xh.PREMIUM_MONTH_TIER_2, !1, ei, eE);
    l.useEffect(() => {
        K && I.ZP.trackExposure({ location: '5f89bb_1' });
    }, [K]);
    let eP = (null == eS ? void 0 : eS.id) != null && V.includes(eS.id);
    l.useEffect(() => {
        if (!eP) {
            if (null == em || ei) eg(V[0]);
            else if (null != em) {
                let e = V.find((e) => e !== em.id);
                null != e && eg(e);
            }
        }
    }, [eP, ei, V, em, eg]);
    let eT = !eu && (ei || (!ej && !ey)) && eP && X,
        eN = (0, u.useRadioGroup)(),
        eb = (null == eS ? void 0 : eS.id) != null ? (0, j.aS)(eS.id, !1, ei, eE) : void 0,
        { ipCountryCode: eC } = (0, b.Z)(),
        e_ = 'HR' === eC && null != eb && eb.currency === B.pK.EUR,
        eO = (0, j.Ap)(eE.paymentSourceId),
        eA = l.useMemo(() => {
            if ((null == eh ? void 0 : eh.interval) === D.rV.DAY) return (null == eh ? void 0 : eh.interval_count) > 7 ? G.intl.string(G.t.Z1V2cn) : G.intl.string(G.t.MI1rHh);
            return G.intl.string(G.t['+S5lra']);
        }, [eh]),
        eR = !ei && (ey || (null != eh && ej && null != Y)),
        eZ = null == q ? void 0 : null === (a = q.find((e) => e.subscriptionPlanId === D.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === a ? void 0 : null === (r = a.discounts) || void 0 === r ? void 0 : null === (t = r.find((e) => e.type === m.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount,
        eM = (e, n, t) => {
            if (eu)
                return (0, i.jsx)(u.FormTitle, {
                    className: W.selectGiftTitle,
                    children: G.intl.string(G.t['3E5hXl'])
                });
            if (!eR)
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
                                ? G.intl.format(G.t.nG95hI, { endDate: Y })
                                : G.intl.format(G.t.s4E7kZ, {
                                      trialEnd: Y,
                                      trialPeriod: eA
                                  })
                        }),
                        (0, i.jsx)('hr', { className: W.planSelectSeparator })
                    ]
                });
            }
            if (t && null != eZ && null != eI && T === D.Xh.PREMIUM_MONTH_TIER_2)
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: W.trialPlanSelectHeader,
                            children: G.intl.format(G.t['nG7g/P'], {
                                numMonths: null == ef ? void 0 : ef.discount.user_usage_limit,
                                discountedPrice: (0, y.T4)(eI.amount - eZ, eI.currency),
                                regularPrice: (0, y.T4)(eI.amount, eI.currency)
                            })
                        }),
                        (0, i.jsx)('hr', { className: W.planSelectSeparator })
                    ]
                });
        },
        { enabled: ew } = P.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        eL = ec === D.Wt.DM_CHANNEL && ew,
        ek = eL ? W.bodyColumnLeft : W.bodyColumnMiddle,
        eF = () => {
            if (eu && null != er)
                return eL
                    ? (0, i.jsx)(M.q, {
                          className: H.adjustedGiftMainAnimation,
                          optionsContainerClassName: H.adjustedGiftBoxOptionContainer
                      })
                    : (0, i.jsx)(M.q, {});
            return null;
        },
        eD = () =>
            (0, i.jsx)('div', {
                ...eN,
                children: V.map((e) =>
                    (0, i.jsx)(
                        k.Z,
                        {
                            planId: e,
                            premiumSubscription: ei ? null : null != f ? f : null,
                            selectPlan: eg,
                            selected: (null == eS ? void 0 : eS.id) === e,
                            priceOptions: eE,
                            shouldShowUpdatedPaymentModal: eR,
                            isEligibleForDiscount: ey,
                            discountAmountOff: eZ,
                            isEligibleForTrial: ej
                        },
                        e
                    )
                )
            }),
        eU = () => eM(ex, ej, ey),
        eB = () => (e_ ? (0, i.jsx)(d.Z, { message: G.intl.formatToPlainString(G.t['9hnZoK'], { kunaPriceWithCurrency: (0, y.T4)(7.5345 * eb.amount, B.pK.HRK) }) }) : null);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(eu ? W.stepBodyCustomGift : W.stepBody, { [W.paddingForHalloweenBanner]: ed }),
            children: [
                (0, i.jsxs)('div', {
                    className: eu ? ek : void 0,
                    children: [
                        (0, i.jsx)(O.Z, {
                            fromBoostCancelModal: !1,
                            className: W.legacyPricingNotice
                        }),
                        eL && eU(),
                        eL ? eD() : eF(),
                        eL && eB()
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: eu ? W.bodyColumnRight : void 0,
                    children: [
                        (0, i.jsx)(F.s, { giftRecipient: el }),
                        eL && eF(),
                        (() => {
                            if (eo === g.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != ea)
                                return (0, i.jsx)(Z.Z, {
                                    sectionTitle: G.intl.string(G.t.B3miEx),
                                    className: W.customGiftMessageWrapper,
                                    innerClassName: W.customGiftMessage,
                                    onTextChange: (e) => ea(e),
                                    pendingText: es,
                                    currentText: es
                                });
                        })(),
                        null != em &&
                            !ei &&
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
                                })(em, S)
                            }),
                        !eL && eU(),
                        !eL && eD(),
                        (0, i.jsx)('div', {
                            children:
                                eT && null != eS && null != eb
                                    ? (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)('div', { className: W.selectPlanDivider }),
                                              (0, i.jsx)(A.Ji, {
                                                  label: G.intl.string(G.t.txajQE),
                                                  value: (0, i.jsx)(R.Z, {
                                                      price: eb.amount,
                                                      currency: eb.currency,
                                                      intervalType: ei ? null : eS.interval,
                                                      intervalCount: eS.intervalCount,
                                                      isPrepaidPaymentSource: eO
                                                  }),
                                                  className: W.selectPlanTotalRow
                                              })
                                          ]
                                      })
                                    : null
                        }),
                        !eL && eB(),
                        !ei && !eR && X && (0, i.jsx)(d.Z, { message: G.intl.format(G.t.Om31w8, { documentationLink: E.Z.getArticleURL(U.BhN.LOCALIZED_PRICING) }) }),
                        ei && !eL && (0, i.jsx)(p.Z, { onClose: J })
                    ]
                })
            ]
        })
    });
}
function K(e) {
    let { onStepChange: n, selectedPlanId: t, paymentSources: l, onBackClick: r, showBackButton: s, planOptions: a, shouldRenderUpdatedPaymentModal: c = !1, isTrial: o } = e,
        { paymentSources: d, selectedPlan: m } = (0, h.usePaymentContext)(),
        { isGift: p, claimableRewards: f } = (0, x.wD)();
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
                s ? (0, i.jsx)(w.Z, { onClick: r }) : null
            ]
        })
    );
}
function z(e) {
    let { onStepChange: n, selectedPlanId: t, isGift: l, claimableRewards: r, paymentSources: s, shouldRenderUpdatedPaymentModal: a, isTrial: c } = e,
        d = (0, o.e7)([S.ZP], () => S.ZP.getPremiumTypeSubscription()),
        { step: m, selectedPlan: p } = (0, h.usePaymentContext)(),
        { hasEntitlements: x } = (0, L.H)(t, l),
        v = (null != d && null != d.paymentSourceId) || Object.keys(s).length > 0 || (x && !c);
    var g = a ? G.intl.string(G.t.PDTjLC) : G.intl.string(G.t.XqMe3N),
        E = f.h8.ADD_PAYMENT_STEPS;
    return (
        v && (E = f.h8.REVIEW),
        (0, T.id)(p, l, r) && m !== f.h8.SELECT_FREE_SKU && (E = f.h8.SELECT_FREE_SKU),
        (0, i.jsx)(u.Button, {
            onClick: () => n(E),
            children: g
        })
    );
}
