s.d(n, {
    M: function () {
        return k;
    },
    O: function () {
        return H;
    }
}),
    s(47120);
var t = s(200651),
    l = s(192379),
    i = s(120356),
    r = s.n(i),
    a = s(512722),
    c = s.n(a),
    o = s(442837),
    u = s(481060),
    d = s(490504),
    _ = s(911969),
    m = s(940824),
    I = s(987209),
    E = s(598),
    p = s(409813),
    N = s(509545),
    T = s(78839),
    S = s(669079),
    x = s(63063),
    h = s(74538),
    P = s(937615),
    f = s(711459),
    A = s(857039),
    v = s(847903),
    M = s(104494),
    g = s(639119),
    R = s(55610),
    L = s(653798),
    O = s(553797),
    C = s(927699),
    j = s(987716),
    Z = s(311821),
    y = s(459965),
    b = s(811616),
    D = s(251660),
    G = s(474936),
    U = s(981631),
    F = s(231338),
    B = s(689938),
    w = s(133130);
function H(e) {
    var n, s, i, a;
    let { premiumSubscription: p, skuId: T, selectedPlanId: Z, setSelectedPlanId: y, priceOptions: H, planOptions: k, eligibleForMultiMonthPlans: W, referralTrialOfferId: Y, subscriptionPeriodEnd: V, showTotal: K = !0, discountInvoiceItems: z, handleClose: X } = e,
        { activeSubscription: J, setSelectedPlanId: q, selectedSkuId: Q, selectedPlan: $, priceOptions: ee } = (0, E.usePaymentContext)(),
        { isGift: en, giftRecipient: es, selectedGiftStyle: et, customGiftMessage: el, setCustomGiftMessage: ei } = (0, I.wD)(),
        er = (0, S.MY)(es),
        ea = en && (0, S.pO)(es),
        ec = (0, A.Z)({ location: 'PremiumPlanSelectStep' });
    (T = null != T ? T : Q), (p = null != p ? p : J), c()(void 0 !== p, 'should not be undefined');
    let [eo, eu] = (0, o.Wu)([N.Z], () => [null != p ? N.Z.get(p.planId) : null, null != Z ? N.Z.get(Z) : null]),
        ed = (0, g.N)(Y),
        e_ = null == ed ? void 0 : ed.subscription_trial,
        em = (0, M.Ng)(),
        eI = null == em ? void 0 : null === (n = em.discount) || void 0 === n ? void 0 : n.plan_ids,
        eE = null != eu ? eu : $,
        ep = l.useCallback(
            (e) => {
                null != y ? y(e) : q(e);
            },
            [y, q]
        ),
        eN = null != H ? H : ee;
    c()(null != eN, 'Price option has to be set');
    let eT = null != ed && G.nG[ed.trial_id].skus.includes(T),
        eS = null != em && k.some((e) => (null == eI ? void 0 : eI.includes(e))) && null != em.discount,
        ex = (0, h.aS)(G.Xh.PREMIUM_MONTH_TIER_2, !1, en, eN);
    l.useEffect(() => {
        W && f.ZP.trackExposure({ location: '5f89bb_1' });
    }, [W]);
    let eh = (null == eE ? void 0 : eE.id) != null && k.includes(eE.id);
    l.useEffect(() => {
        if (!eh) {
            if (null == eo || en) ep(k[0]);
            else if (null != eo) {
                let e = k.find((e) => e !== eo.id);
                null != e && ep(e);
            }
        }
    }, [eh, en, k, eo, ep]);
    let eP = !ea && (en || (!eT && !eS)) && eh && K,
        ef = (0, u.useRadioGroup)(),
        eA = (null == eE ? void 0 : eE.id) != null ? (0, h.aS)(eE.id, !1, en, eN) : void 0,
        { ipCountryCode: ev } = (0, v.Z)(),
        eM = 'HR' === ev && null != eA && eA.currency === F.pK.EUR,
        eg = (0, h.Ap)(eN.paymentSourceId),
        eR = l.useMemo(() => {
            if ((null == e_ ? void 0 : e_.interval) === G.rV.DAY) return (null == e_ ? void 0 : e_.interval_count) > 7 ? B.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : B.Z.Messages.BILLING_TRIAL_1_WEEK_PERIOD;
            return B.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD;
        }, [e_]),
        eL = !en && (eS || (null != e_ && eT && null != V)),
        eO = null == z ? void 0 : null === (a = z.find((e) => e.subscriptionPlanId === G.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === a ? void 0 : null === (i = a.discounts) || void 0 === i ? void 0 : null === (s = i.find((e) => e.type === _.eW.SUBSCRIPTION_PLAN)) || void 0 === s ? void 0 : s.amount;
    return (0, t.jsx)(t.Fragment, {
        children: (0, t.jsxs)('div', {
            className: r()(ea ? w.stepBodyCustomGift : w.stepBody, { [w.paddingForHalloweenBanner]: ec }),
            children: [
                (0, t.jsxs)('div', {
                    className: ea ? w.bodyColumnMiddle : void 0,
                    children: [
                        (0, t.jsx)(R.Z, {
                            fromBoostCancelModal: !1,
                            className: w.legacyPricingNotice
                        }),
                        ea && null != et && (0, t.jsx)(j.q, {})
                    ]
                }),
                (0, t.jsxs)('div', {
                    className: ea ? w.bodyColumnRight : void 0,
                    children: [
                        (0, t.jsx)(D.s, { giftRecipient: es }),
                        (() => {
                            if (er === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != ei)
                                return (0, t.jsx)(C.Z, {
                                    sectionTitle: B.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: (e) => ei(e),
                                    pendingText: el,
                                    currentText: el
                                });
                        })(),
                        null != eo &&
                            !en &&
                            (0, t.jsx)('div', {
                                className: w.bodyText,
                                children: (function (e, n) {
                                    let s = B.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        t = B.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        l = (() => {
                                            switch (e.interval) {
                                                case G.rV.YEAR:
                                                    return s;
                                                case G.rV.MONTH:
                                                default:
                                                    return t;
                                            }
                                        })(),
                                        i = e.skuId;
                                    switch (n) {
                                        case G.Si.TIER_0:
                                            switch (i) {
                                                case G.Si.TIER_1:
                                                    return B.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case G.Si.TIER_2:
                                                    return B.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return l;
                                            }
                                        case G.Si.TIER_1:
                                            switch (i) {
                                                case G.Si.TIER_0:
                                                    return B.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case G.Si.TIER_2:
                                                    return B.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return l;
                                            }
                                        case G.Si.TIER_2:
                                            switch (i) {
                                                case G.Si.TIER_0:
                                                case G.Si.TIER_1:
                                                    return B.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case G.Si.TIER_2:
                                                    return e.interval === G.rV.MONTH ? B.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({ numFreeGuildSubscriptions: G.cb }) : l;
                                                default:
                                                    return l;
                                            }
                                        default:
                                            return l;
                                    }
                                })(eo, T)
                            }),
                        ((e, n, s) => {
                            if (ea) return (0, t.jsx)(u.FormTitle, { children: B.Z.Messages.GIFT_SUBSCRIPTION_SELECTION });
                            if (!eL)
                                return (0, t.jsx)('div', {
                                    className: w.selectPlanChooseTitle,
                                    children: B.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                                });
                            if (n) {
                                let n = (null == e ? void 0 : e.trial_id) === G.a7;
                                return (0, t.jsxs)('div', {
                                    children: [
                                        (0, t.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            className: w.trialPlanSelectHeader,
                                            children: n
                                                ? B.Z.Messages.REFERRAL_PROGRAM_PAYMENT_MODAL_COPY.format({ endDate: V })
                                                : B.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                                      trialEnd: V,
                                                      trialPeriod: eR
                                                  })
                                        }),
                                        (0, t.jsx)('hr', { className: w.planSelectSeparator })
                                    ]
                                });
                            }
                            if (s && null != eO && null != ex && Z === G.Xh.PREMIUM_MONTH_TIER_2)
                                return (0, t.jsxs)('div', {
                                    children: [
                                        (0, t.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            className: w.trialPlanSelectHeader,
                                            children: B.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
                                                numMonths: null == em ? void 0 : em.discount.user_usage_limit,
                                                discountedPrice: (0, P.T4)(ex.amount - eO, ex.currency),
                                                regularPrice: (0, P.T4)(ex.amount, ex.currency)
                                            })
                                        }),
                                        (0, t.jsx)('hr', { className: w.planSelectSeparator })
                                    ]
                                });
                        })(ed, eT, eS),
                        (0, t.jsx)('div', {
                            ...ef,
                            children: k.map((e) =>
                                (0, t.jsx)(
                                    b.Z,
                                    {
                                        planId: e,
                                        premiumSubscription: en ? null : null != p ? p : null,
                                        selectPlan: ep,
                                        selected: (null == eE ? void 0 : eE.id) === e,
                                        priceOptions: eN,
                                        shouldShowUpdatedPaymentModal: eL,
                                        isEligibleForDiscount: eS,
                                        discountAmountOff: eO,
                                        isEligibleForTrial: eT
                                    },
                                    e
                                )
                            )
                        }),
                        (0, t.jsx)('div', {
                            children:
                                eP && null != eE && null != eA
                                    ? (0, t.jsxs)('div', {
                                          children: [
                                              (0, t.jsx)('div', { className: w.selectPlanDivider }),
                                              (0, t.jsx)(L.Ji, {
                                                  label: B.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                                  value: (0, t.jsx)(O.Z, {
                                                      price: eA.amount,
                                                      currency: eA.currency,
                                                      intervalType: en ? null : eE.interval,
                                                      intervalCount: eE.intervalCount,
                                                      isPrepaidPaymentSource: eg
                                                  }),
                                                  className: w.selectPlanTotalRow
                                              })
                                          ]
                                      })
                                    : null
                        }),
                        eM && (0, t.jsx)(d.Z, { message: B.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({ kunaPriceWithCurrency: (0, P.T4)(7.5345 * eA.amount, F.pK.HRK) }) }),
                        !en && !eL && K && (0, t.jsx)(d.Z, { message: B.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({ documentationLink: x.Z.getArticleURL(U.BhN.LOCALIZED_PRICING) }) }),
                        en && (0, t.jsx)(m.Z, { onClose: X })
                    ]
                })
            ]
        })
    });
}
function k(e) {
    let { onStepChange: n, selectedPlanId: s, paymentSources: l, onBackClick: i, showBackButton: r, planOptions: a, shouldRenderUpdatedPaymentModal: c = !1, isTrial: o } = e,
        { paymentSources: d, selectedPlan: _ } = (0, E.usePaymentContext)(),
        { isGift: m } = (0, I.wD)();
    return (
        (l = null != l ? l : d),
        (s = null != s ? s : null == _ ? void 0 : _.id),
        (0, t.jsxs)(t.Fragment, {
            children: [
                null != s && a.includes(s)
                    ? (0, t.jsx)(W, {
                          paymentSources: l,
                          onStepChange: n,
                          selectedPlanId: s,
                          isGift: m,
                          shouldRenderUpdatedPaymentModal: c,
                          isTrial: o
                      })
                    : (0, t.jsx)(u.Button, {
                          disabled: !0,
                          children: B.Z.Messages.SELECT
                      }),
                r ? (0, t.jsx)(Z.Z, { onClick: i }) : null
            ]
        })
    );
}
function W(e) {
    let { onStepChange: n, selectedPlanId: s, isGift: l, paymentSources: i, shouldRenderUpdatedPaymentModal: r, isTrial: a } = e,
        c = (0, o.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        { hasEntitlements: d } = (0, y.H)(s, l),
        _ = (null != c && null != c.paymentSourceId) || Object.keys(i).length > 0 || (d && !a);
    var m = r ? B.Z.Messages.NEXT : B.Z.Messages.SELECT,
        I = p.h8.ADD_PAYMENT_STEPS;
    return (
        _ && (I = p.h8.REVIEW),
        (0, t.jsx)(u.Button, {
            onClick: () => n(I),
            children: m
        })
    );
}
