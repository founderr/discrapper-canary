t.d(n, {
    M: function () {
        return V;
    },
    O: function () {
        return W;
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
    g = t(78839),
    S = t(669079),
    j = t(63063),
    E = t(74538),
    y = t(937615),
    I = t(711459),
    P = t(109213),
    T = t(857039),
    N = t(847903),
    b = t(104494),
    _ = t(639119),
    C = t(55610),
    A = t(653798),
    O = t(553797),
    Z = t(927699),
    R = t(987716),
    M = t(311821),
    w = t(459965),
    D = t(811616),
    F = t(251660),
    L = t(474936),
    k = t(981631),
    G = t(231338),
    U = t(388032),
    B = t(522888),
    H = t(133130);
function W(e) {
    var n, t, r, a;
    let { premiumSubscription: f, skuId: g, selectedPlanId: M, setSelectedPlanId: w, priceOptions: W, planOptions: V, eligibleForMultiMonthPlans: Y, referralTrialOfferId: z, subscriptionPeriodEnd: K, showTotal: X = !0, discountInvoiceItems: q, handleClose: J } = e,
        { activeSubscription: Q, setSelectedPlanId: $, selectedSkuId: ee, selectedPlan: en, priceOptions: et } = (0, h.usePaymentContext)(),
        { isGift: ei, giftRecipient: el, selectedGiftStyle: er, customGiftMessage: es, setCustomGiftMessage: ea, giftingOrigin: ec } = (0, x.wD)(),
        eo = (0, S.MY)(el),
        eu = ei && (0, S.pO)(el),
        ed = (0, T.Z)({ location: 'PremiumPlanSelectStep' });
    (g = null != g ? g : ee), (f = null != f ? f : Q), c()(void 0 !== f, 'should not be undefined');
    let [em, ep] = (0, o.Wu)([v.Z], () => [null != f ? v.Z.get(f.planId) : null, null != M ? v.Z.get(M) : null]),
        ex = (0, _.N)(z),
        eh = null == ex ? void 0 : ex.subscription_trial,
        ef = (0, b.Ng)(),
        ev = null == ef ? void 0 : null === (n = ef.discount) || void 0 === n ? void 0 : n.plan_ids,
        eg = null != ep ? ep : en,
        eS = l.useCallback(
            (e) => {
                null != w ? w(e) : $(e);
            },
            [w, $]
        ),
        ej = null != W ? W : et;
    c()(null != ej, 'Price option has to be set');
    let eE = null != ex && L.nG[ex.trial_id].skus.includes(g),
        ey = null != ef && V.some((e) => (null == ev ? void 0 : ev.includes(e))) && null != ef.discount,
        eI = (0, E.aS)(L.Xh.PREMIUM_MONTH_TIER_2, !1, ei, ej);
    l.useEffect(() => {
        Y && I.ZP.trackExposure({ location: '5f89bb_1' });
    }, [Y]);
    let eP = (null == eg ? void 0 : eg.id) != null && V.includes(eg.id);
    l.useEffect(() => {
        if (!eP) {
            if (null == em || ei) eS(V[0]);
            else if (null != em) {
                let e = V.find((e) => e !== em.id);
                null != e && eS(e);
            }
        }
    }, [eP, ei, V, em, eS]);
    let eT = !eu && (ei || (!eE && !ey)) && eP && X,
        eN = (0, u.useRadioGroup)(),
        eb = (null == eg ? void 0 : eg.id) != null ? (0, E.aS)(eg.id, !1, ei, ej) : void 0,
        { ipCountryCode: e_ } = (0, N.Z)(),
        eC = 'HR' === e_ && null != eb && eb.currency === G.pK.EUR,
        eA = (0, E.Ap)(ej.paymentSourceId),
        eO = l.useMemo(() => {
            if ((null == eh ? void 0 : eh.interval) === L.rV.DAY) return (null == eh ? void 0 : eh.interval_count) > 7 ? U.intl.string(U.t.Z1V2cn) : U.intl.string(U.t.MI1rHh);
            return U.intl.string(U.t['+S5lra']);
        }, [eh]),
        eZ = !ei && (ey || (null != eh && eE && null != K)),
        eR = null == q ? void 0 : null === (a = q.find((e) => e.subscriptionPlanId === L.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === a ? void 0 : null === (r = a.discounts) || void 0 === r ? void 0 : null === (t = r.find((e) => e.type === m.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount,
        eM = (e, n, t) => {
            if (eu)
                return (0, i.jsx)(u.FormTitle, {
                    className: H.selectGiftTitle,
                    children: U.intl.string(U.t['3E5hXl'])
                });
            if (!eZ)
                return (0, i.jsx)('div', {
                    className: H.selectPlanChooseTitle,
                    children: U.intl.string(U.t.a19jpa)
                });
            if (n) {
                let n = (null == e ? void 0 : e.trial_id) === L.a7;
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: H.trialPlanSelectHeader,
                            children: n
                                ? U.intl.format(U.t.nG95hI, { endDate: K })
                                : U.intl.format(U.t.s4E7kZ, {
                                      trialEnd: K,
                                      trialPeriod: eO
                                  })
                        }),
                        (0, i.jsx)('hr', { className: H.planSelectSeparator })
                    ]
                });
            }
            if (t && null != eR && null != eI && M === L.Xh.PREMIUM_MONTH_TIER_2)
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: H.trialPlanSelectHeader,
                            children: U.intl.format(U.t['nG7g/P'], {
                                numMonths: null == ef ? void 0 : ef.discount.user_usage_limit,
                                discountedPrice: (0, y.T4)(eI.amount - eR, eI.currency),
                                regularPrice: (0, y.T4)(eI.amount, eI.currency)
                            })
                        }),
                        (0, i.jsx)('hr', { className: H.planSelectSeparator })
                    ]
                });
        },
        { enabled: ew } = P.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        eD = ec === L.Wt.DM_CHANNEL && ew,
        eF = eD ? H.bodyColumnLeft : H.bodyColumnMiddle,
        eL = () => {
            if (eu && null != er)
                return eD
                    ? (0, i.jsx)(R.q, {
                          className: B.adjustedGiftMainAnimation,
                          optionsContainerClassName: B.adjustedGiftBoxOptionContainer
                      })
                    : (0, i.jsx)(R.q, {});
            return null;
        },
        ek = () =>
            (0, i.jsx)('div', {
                ...eN,
                children: V.map((e) =>
                    (0, i.jsx)(
                        D.Z,
                        {
                            planId: e,
                            premiumSubscription: ei ? null : null != f ? f : null,
                            selectPlan: eS,
                            selected: (null == eg ? void 0 : eg.id) === e,
                            priceOptions: ej,
                            shouldShowUpdatedPaymentModal: eZ,
                            isEligibleForDiscount: ey,
                            discountAmountOff: eR,
                            isEligibleForTrial: eE
                        },
                        e
                    )
                )
            }),
        eG = () => eM(ex, eE, ey),
        eU = () => (eC ? (0, i.jsx)(d.Z, { message: U.intl.formatToPlainString(U.t['9hnZoK'], { kunaPriceWithCurrency: (0, y.T4)(7.5345 * eb.amount, G.pK.HRK) }) }) : null);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(eu ? H.stepBodyCustomGift : H.stepBody, { [H.paddingForHalloweenBanner]: ed }),
            children: [
                (0, i.jsxs)('div', {
                    className: eu ? eF : void 0,
                    children: [
                        (0, i.jsx)(C.Z, {
                            fromBoostCancelModal: !1,
                            className: H.legacyPricingNotice
                        }),
                        eD && eG(),
                        eD ? ek() : eL(),
                        eD && eU()
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: eu ? H.bodyColumnRight : void 0,
                    children: [
                        (0, i.jsx)(F.s, { giftRecipient: el }),
                        eD && eL(),
                        (() => {
                            if (eo === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != ea)
                                return (0, i.jsx)(Z.Z, {
                                    sectionTitle: U.intl.string(U.t.B3miEx),
                                    className: H.customGiftMessageWrapper,
                                    innerClassName: H.customGiftMessage,
                                    onTextChange: (e) => ea(e),
                                    pendingText: es,
                                    currentText: es
                                });
                        })(),
                        null != em &&
                            !ei &&
                            (0, i.jsx)('div', {
                                className: H.bodyText,
                                children: (function (e, n) {
                                    let t = U.intl.string(U.t.BYa62t),
                                        i = U.intl.string(U.t.CDa6Dg),
                                        l = (() => {
                                            switch (e.interval) {
                                                case L.rV.YEAR:
                                                    return t;
                                                case L.rV.MONTH:
                                                default:
                                                    return i;
                                            }
                                        })(),
                                        r = e.skuId;
                                    switch (n) {
                                        case L.Si.TIER_0:
                                            switch (r) {
                                                case L.Si.TIER_1:
                                                    return U.intl.string(U.t.q6mxDQ);
                                                case L.Si.TIER_2:
                                                    return U.intl.string(U.t.seZVS0);
                                                default:
                                                    return l;
                                            }
                                        case L.Si.TIER_1:
                                            switch (r) {
                                                case L.Si.TIER_0:
                                                    return U.intl.string(U.t['7+u2zs']);
                                                case L.Si.TIER_2:
                                                    return U.intl.string(U.t.NG2qcX);
                                                default:
                                                    return l;
                                            }
                                        case L.Si.TIER_2:
                                            switch (r) {
                                                case L.Si.TIER_0:
                                                case L.Si.TIER_1:
                                                    return U.intl.string(U.t['eB0/w8']);
                                                case L.Si.TIER_2:
                                                    return e.interval === L.rV.MONTH ? U.intl.formatToPlainString(U.t['RqUv8/'], { numFreeGuildSubscriptions: L.cb }) : l;
                                                default:
                                                    return l;
                                            }
                                        default:
                                            return l;
                                    }
                                })(em, g)
                            }),
                        !eD && eG(),
                        !eD && ek(),
                        (0, i.jsx)('div', {
                            children:
                                eT && null != eg && null != eb
                                    ? (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)('div', { className: H.selectPlanDivider }),
                                              (0, i.jsx)(A.Ji, {
                                                  label: U.intl.string(U.t.txajQE),
                                                  value: (0, i.jsx)(O.Z, {
                                                      price: eb.amount,
                                                      currency: eb.currency,
                                                      intervalType: ei ? null : eg.interval,
                                                      intervalCount: eg.intervalCount,
                                                      isPrepaidPaymentSource: eA
                                                  }),
                                                  className: H.selectPlanTotalRow
                                              })
                                          ]
                                      })
                                    : null
                        }),
                        !eD && eU(),
                        !ei && !eZ && X && (0, i.jsx)(d.Z, { message: U.intl.format(U.t.Om31w8, { documentationLink: j.Z.getArticleURL(k.BhN.LOCALIZED_PRICING) }) }),
                        ei && !eD && (0, i.jsx)(p.Z, { onClose: J })
                    ]
                })
            ]
        })
    });
}
function V(e) {
    let { onStepChange: n, selectedPlanId: t, paymentSources: l, onBackClick: r, showBackButton: s, planOptions: a, shouldRenderUpdatedPaymentModal: c = !1, isTrial: o } = e,
        { paymentSources: d, selectedPlan: m } = (0, h.usePaymentContext)(),
        { isGift: p } = (0, x.wD)();
    return (
        (l = null != l ? l : d),
        (t = null != t ? t : null == m ? void 0 : m.id),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != t && a.includes(t)
                    ? (0, i.jsx)(Y, {
                          paymentSources: l,
                          onStepChange: n,
                          selectedPlanId: t,
                          isGift: p,
                          shouldRenderUpdatedPaymentModal: c,
                          isTrial: o
                      })
                    : (0, i.jsx)(u.Button, {
                          disabled: !0,
                          children: U.intl.string(U.t.XqMe3N)
                      }),
                s ? (0, i.jsx)(M.Z, { onClick: r }) : null
            ]
        })
    );
}
function Y(e) {
    let { onStepChange: n, selectedPlanId: t, isGift: l, paymentSources: r, shouldRenderUpdatedPaymentModal: s, isTrial: a } = e,
        c = (0, o.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
        { hasEntitlements: d } = (0, w.H)(t, l),
        m = (null != c && null != c.paymentSourceId) || Object.keys(r).length > 0 || (d && !a);
    var p = s ? U.intl.string(U.t.PDTjLC) : U.intl.string(U.t.XqMe3N),
        x = f.h8.ADD_PAYMENT_STEPS;
    return (
        m && (x = f.h8.REVIEW),
        (0, i.jsx)(u.Button, {
            onClick: () => n(x),
            children: p
        })
    );
}
