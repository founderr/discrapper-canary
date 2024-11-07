t.d(n, {
    M: function () {
        return W;
    },
    O: function () {
        return H;
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
    E = t(63063),
    j = t(74538),
    I = t(937615),
    y = t(711459),
    P = t(109213),
    T = t(857039),
    N = t(847903),
    b = t(104494),
    _ = t(639119),
    C = t(55610),
    A = t(653798),
    O = t(553797),
    R = t(927699),
    Z = t(987716),
    M = t(311821),
    w = t(459965),
    D = t(811616),
    L = t(251660),
    F = t(474936),
    k = t(981631),
    B = t(231338),
    U = t(388032),
    G = t(246279);
function H(e) {
    var n, t, r, a;
    let { premiumSubscription: f, skuId: g, selectedPlanId: M, setSelectedPlanId: w, priceOptions: H, planOptions: W, eligibleForMultiMonthPlans: V, referralTrialOfferId: Y, subscriptionPeriodEnd: z, showTotal: K = !0, discountInvoiceItems: X, handleClose: q } = e,
        { activeSubscription: J, setSelectedPlanId: Q, selectedSkuId: $, selectedPlan: ee, priceOptions: en } = (0, h.usePaymentContext)(),
        { isGift: et, giftRecipient: ei, selectedGiftStyle: el, customGiftMessage: er, setCustomGiftMessage: es, giftingOrigin: ea } = (0, x.wD)(),
        ec = (0, S.MY)(ei),
        eo = et && (0, S.pO)(ei),
        eu = (0, T.Z)({ location: 'PremiumPlanSelectStep' });
    (g = null != g ? g : $), (f = null != f ? f : J), c()(void 0 !== f, 'should not be undefined');
    let [ed, em] = (0, o.Wu)([v.Z], () => [null != f ? v.Z.get(f.planId) : null, null != M ? v.Z.get(M) : null]),
        ep = (0, _.N)(Y),
        ex = null == ep ? void 0 : ep.subscription_trial,
        eh = (0, b.Ng)(),
        ef = null == eh ? void 0 : null === (n = eh.discount) || void 0 === n ? void 0 : n.plan_ids,
        ev = null != em ? em : ee,
        eg = l.useCallback(
            (e) => {
                null != w ? w(e) : Q(e);
            },
            [w, Q]
        ),
        eS = null != H ? H : en;
    c()(null != eS, 'Price option has to be set');
    let eE = null != ep && F.nG[ep.trial_id].skus.includes(g),
        ej = null != eh && W.some((e) => (null == ef ? void 0 : ef.includes(e))) && null != eh.discount,
        eI = (0, j.aS)(F.Xh.PREMIUM_MONTH_TIER_2, !1, et, eS);
    l.useEffect(() => {
        V && y.ZP.trackExposure({ location: '5f89bb_1' });
    }, [V]);
    let ey = (null == ev ? void 0 : ev.id) != null && W.includes(ev.id);
    l.useEffect(() => {
        if (!ey) {
            if (null == ed || et) eg(W[0]);
            else if (null != ed) {
                let e = W.find((e) => e !== ed.id);
                null != e && eg(e);
            }
        }
    }, [ey, et, W, ed, eg]);
    let eP = !eo && (et || (!eE && !ej)) && ey && K,
        eT = (0, u.useRadioGroup)(),
        eN = (null == ev ? void 0 : ev.id) != null ? (0, j.aS)(ev.id, !1, et, eS) : void 0,
        { ipCountryCode: eb } = (0, N.Z)(),
        e_ = 'HR' === eb && null != eN && eN.currency === B.pK.EUR,
        eC = (0, j.Ap)(eS.paymentSourceId),
        eA = l.useMemo(() => {
            if ((null == ex ? void 0 : ex.interval) === F.rV.DAY) return (null == ex ? void 0 : ex.interval_count) > 7 ? U.intl.string(U.t.Z1V2cn) : U.intl.string(U.t.MI1rHh);
            return U.intl.string(U.t['+S5lra']);
        }, [ex]),
        eO = !et && (ej || (null != ex && eE && null != z)),
        eR = null == X ? void 0 : null === (a = X.find((e) => e.subscriptionPlanId === F.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === a ? void 0 : null === (r = a.discounts) || void 0 === r ? void 0 : null === (t = r.find((e) => e.type === m.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount,
        eZ = (e, n, t) => {
            if (eo)
                return (0, i.jsx)(u.FormTitle, {
                    className: G.selectGiftTitle,
                    children: U.intl.string(U.t['3E5hXl'])
                });
            if (!eO)
                return (0, i.jsx)('div', {
                    className: G.selectPlanChooseTitle,
                    children: U.intl.string(U.t.a19jpa)
                });
            if (n) {
                let n = (null == e ? void 0 : e.trial_id) === F.a7;
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: G.trialPlanSelectHeader,
                            children: n
                                ? U.intl.format(U.t.nG95hI, { endDate: z })
                                : U.intl.format(U.t.s4E7kZ, {
                                      trialEnd: z,
                                      trialPeriod: eA
                                  })
                        }),
                        (0, i.jsx)('hr', { className: G.planSelectSeparator })
                    ]
                });
            }
            if (t && null != eR && null != eI && M === F.Xh.PREMIUM_MONTH_TIER_2)
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: G.trialPlanSelectHeader,
                            children: U.intl.format(U.t['nG7g/P'], {
                                numMonths: null == eh ? void 0 : eh.discount.user_usage_limit,
                                discountedPrice: (0, I.T4)(eI.amount - eR, eI.currency),
                                regularPrice: (0, I.T4)(eI.amount, eI.currency)
                            })
                        }),
                        (0, i.jsx)('hr', { className: G.planSelectSeparator })
                    ]
                });
        },
        { enabled: eM } = P.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        ew = ea === F.Wt.DM_CHANNEL && eM,
        eD = ew ? G.bodyColumnLeft : G.bodyColumnMiddle,
        eL = () => {
            if (eo && null != el)
                return ew
                    ? (0, i.jsx)(Z.q, {
                          className: G.selectedGiftAnimation,
                          optionsContainerClassName: G.giftAnimationOptionsContainer
                      })
                    : (0, i.jsx)(Z.q, {});
            return null;
        },
        eF = () =>
            (0, i.jsx)('div', {
                ...eT,
                children: W.map((e) =>
                    (0, i.jsx)(
                        D.Z,
                        {
                            planId: e,
                            premiumSubscription: et ? null : null != f ? f : null,
                            selectPlan: eg,
                            selected: (null == ev ? void 0 : ev.id) === e,
                            priceOptions: eS,
                            shouldShowUpdatedPaymentModal: eO,
                            isEligibleForDiscount: ej,
                            discountAmountOff: eR,
                            isEligibleForTrial: eE
                        },
                        e
                    )
                )
            }),
        ek = () => eZ(ep, eE, ej),
        eB = () => (e_ ? (0, i.jsx)(d.Z, { message: U.intl.formatToPlainString(U.t['9hnZoK'], { kunaPriceWithCurrency: (0, I.T4)(7.5345 * eN.amount, B.pK.HRK) }) }) : null);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(eo ? G.stepBodyCustomGift : G.stepBody, { [G.paddingForHalloweenBanner]: eu }),
            children: [
                (0, i.jsxs)('div', {
                    className: eo ? eD : void 0,
                    children: [
                        (0, i.jsx)(C.Z, {
                            fromBoostCancelModal: !1,
                            className: G.legacyPricingNotice
                        }),
                        ew && ek(),
                        ew ? eF() : eL(),
                        ew && eB()
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: eo ? G.bodyColumnRight : void 0,
                    children: [
                        (0, i.jsx)(L.s, { giftRecipient: ei }),
                        ew && eL(),
                        (() => {
                            if (ec === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != es)
                                return (0, i.jsx)(R.Z, {
                                    sectionTitle: U.intl.string(U.t.B3miEx),
                                    className: G.customGiftMessage,
                                    onTextChange: (e) => es(e),
                                    pendingText: er,
                                    currentText: er
                                });
                        })(),
                        null != ed &&
                            !et &&
                            (0, i.jsx)('div', {
                                className: G.bodyText,
                                children: (function (e, n) {
                                    let t = U.intl.string(U.t.BYa62t),
                                        i = U.intl.string(U.t.CDa6Dg),
                                        l = (() => {
                                            switch (e.interval) {
                                                case F.rV.YEAR:
                                                    return t;
                                                case F.rV.MONTH:
                                                default:
                                                    return i;
                                            }
                                        })(),
                                        r = e.skuId;
                                    switch (n) {
                                        case F.Si.TIER_0:
                                            switch (r) {
                                                case F.Si.TIER_1:
                                                    return U.intl.string(U.t.q6mxDQ);
                                                case F.Si.TIER_2:
                                                    return U.intl.string(U.t.seZVS0);
                                                default:
                                                    return l;
                                            }
                                        case F.Si.TIER_1:
                                            switch (r) {
                                                case F.Si.TIER_0:
                                                    return U.intl.string(U.t['7+u2zs']);
                                                case F.Si.TIER_2:
                                                    return U.intl.string(U.t.NG2qcX);
                                                default:
                                                    return l;
                                            }
                                        case F.Si.TIER_2:
                                            switch (r) {
                                                case F.Si.TIER_0:
                                                case F.Si.TIER_1:
                                                    return U.intl.string(U.t['eB0/w8']);
                                                case F.Si.TIER_2:
                                                    return e.interval === F.rV.MONTH ? U.intl.formatToPlainString(U.t['RqUv8/'], { numFreeGuildSubscriptions: F.cb }) : l;
                                                default:
                                                    return l;
                                            }
                                        default:
                                            return l;
                                    }
                                })(ed, g)
                            }),
                        !ew && ek(),
                        !ew && eF(),
                        (0, i.jsx)('div', {
                            children:
                                eP && null != ev && null != eN
                                    ? (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)('div', { className: G.selectPlanDivider }),
                                              (0, i.jsx)(A.Ji, {
                                                  label: U.intl.string(U.t.txajQE),
                                                  value: (0, i.jsx)(O.Z, {
                                                      price: eN.amount,
                                                      currency: eN.currency,
                                                      intervalType: et ? null : ev.interval,
                                                      intervalCount: ev.intervalCount,
                                                      isPrepaidPaymentSource: eC
                                                  }),
                                                  className: G.selectPlanTotalRow
                                              })
                                          ]
                                      })
                                    : null
                        }),
                        !ew && eB(),
                        !et && !eO && K && (0, i.jsx)(d.Z, { message: U.intl.format(U.t.Om31w8, { documentationLink: E.Z.getArticleURL(k.BhN.LOCALIZED_PRICING) }) }),
                        et && !ew && (0, i.jsx)(p.Z, { onClose: q })
                    ]
                })
            ]
        })
    });
}
function W(e) {
    let { onStepChange: n, selectedPlanId: t, paymentSources: l, onBackClick: r, showBackButton: s, planOptions: a, shouldRenderUpdatedPaymentModal: c = !1, isTrial: o } = e,
        { paymentSources: d, selectedPlan: m } = (0, h.usePaymentContext)(),
        { isGift: p } = (0, x.wD)();
    return (
        (l = null != l ? l : d),
        (t = null != t ? t : null == m ? void 0 : m.id),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != t && a.includes(t)
                    ? (0, i.jsx)(V, {
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
function V(e) {
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
