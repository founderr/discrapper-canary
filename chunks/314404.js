t.d(n, {
    M: function () {
        return U;
    },
    O: function () {
        return G;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    r = t(512722),
    s = t.n(r),
    l = t(442837),
    o = t(481060),
    c = t(490504),
    u = t(911969),
    d = t(940824),
    _ = t(987209),
    p = t(598),
    m = t(409813),
    I = t(509545),
    f = t(78839),
    E = t(669079),
    x = t(63063),
    N = t(74538),
    S = t(937615),
    T = t(711459),
    h = t(847903),
    b = t(104494),
    g = t(639119),
    P = t(55610),
    v = t(653798),
    A = t(553797),
    M = t(927699),
    C = t(987716),
    y = t(311821),
    R = t(459965),
    O = t(811616),
    L = t(251660),
    j = t(474936),
    Z = t(981631),
    D = t(231338),
    w = t(689938),
    B = t(133130);
function G(e) {
    var n, t, r, m;
    let { premiumSubscription: f, skuId: y, selectedPlanId: R, setSelectedPlanId: G, priceOptions: U, planOptions: F, eligibleForMultiMonthPlans: k, referralTrialOfferId: H, subscriptionPeriodEnd: W, showTotal: Y = !0, discountInvoiceItems: V, handleClose: K } = e,
        { activeSubscription: z, setSelectedPlanId: X, selectedSkuId: q, selectedPlan: J, priceOptions: Q } = (0, p.usePaymentContext)(),
        { isGift: $, giftRecipient: ee, selectedGiftStyle: en, customGiftMessage: et, setCustomGiftMessage: ei } = (0, _.wD)(),
        ea = (0, E.MY)(ee),
        er = $ && (0, E.pO)(ee);
    (y = null != y ? y : q), (f = null != f ? f : z), s()(void 0 !== f, 'should not be undefined');
    let [es, el] = (0, l.Wu)([I.Z], () => [null != f ? I.Z.get(f.planId) : null, null != R ? I.Z.get(R) : null]),
        eo = (0, g.N)(H),
        ec = null == eo ? void 0 : eo.subscription_trial,
        eu = (0, b.Ng)(),
        ed = null == eu ? void 0 : null === (n = eu.discount) || void 0 === n ? void 0 : n.plan_ids,
        e_ = null != el ? el : J,
        ep = a.useCallback(
            (e) => {
                null != G ? G(e) : X(e);
            },
            [G, X]
        ),
        em = null != U ? U : Q;
    s()(null != em, 'Price option has to be set');
    let eI = null != eo && j.nG[eo.trial_id].skus.includes(y),
        ef = null != eu && F.some((e) => (null == ed ? void 0 : ed.includes(e))) && null != eu.discount,
        eE = (0, N.aS)(j.Xh.PREMIUM_MONTH_TIER_2, !1, $, em);
    a.useEffect(() => {
        k && T.ZP.trackExposure({ location: '5f89bb_1' });
    }, [k]);
    let ex = (null == e_ ? void 0 : e_.id) != null && F.includes(e_.id);
    a.useEffect(() => {
        if (!ex) {
            if (null == es || $) ep(F[0]);
            else if (null != es) {
                let e = F.find((e) => e !== es.id);
                null != e && ep(e);
            }
        }
    }, [ex, $, F, es, ep]);
    let eN = !er && ($ || (!eI && !ef)) && ex && Y,
        eS = (0, o.useRadioGroup)(),
        eT = (null == e_ ? void 0 : e_.id) != null ? (0, N.aS)(e_.id, !1, $, em) : void 0,
        { ipCountryCode: eh } = (0, h.Z)(),
        eb = 'HR' === eh && null != eT && eT.currency === D.pK.EUR,
        eg = (0, N.Ap)(em.paymentSourceId),
        eP = a.useMemo(() => {
            if ((null == ec ? void 0 : ec.interval) === j.rV.DAY) return (null == ec ? void 0 : ec.interval_count) > 7 ? w.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : w.Z.Messages.BILLING_TRIAL_1_WEEK_PERIOD;
            return w.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD;
        }, [ec]),
        ev = !$ && (ef || (null != ec && eI && null != W)),
        eA = null == V ? void 0 : null === (m = V.find((e) => e.subscriptionPlanId === j.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === m ? void 0 : null === (r = m.discounts) || void 0 === r ? void 0 : null === (t = r.find((e) => e.type === u.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: er ? B.stepBodyCustomGift : B.stepBody,
            children: [
                (0, i.jsxs)('div', {
                    className: er ? B.bodyColumnMiddle : void 0,
                    children: [
                        (0, i.jsx)(P.Z, {
                            fromBoostCancelModal: !1,
                            className: B.legacyPricingNotice
                        }),
                        er && null != en && (0, i.jsx)(C.q, {})
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: er ? B.bodyColumnRight : void 0,
                    children: [
                        (0, i.jsx)(L.s, { giftRecipient: ee }),
                        (() => {
                            if (ea === E.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != ei)
                                return (0, i.jsx)(M.Z, {
                                    sectionTitle: w.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: (e) => ei(e),
                                    pendingText: et,
                                    currentText: et
                                });
                        })(),
                        null != es &&
                            !$ &&
                            (0, i.jsx)('div', {
                                className: B.bodyText,
                                children: (function (e, n) {
                                    let t = w.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        i = w.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        a = (() => {
                                            switch (e.interval) {
                                                case j.rV.YEAR:
                                                    return t;
                                                case j.rV.MONTH:
                                                default:
                                                    return i;
                                            }
                                        })(),
                                        r = e.skuId;
                                    switch (n) {
                                        case j.Si.TIER_0:
                                            switch (r) {
                                                case j.Si.TIER_1:
                                                    return w.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case j.Si.TIER_2:
                                                    return w.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return a;
                                            }
                                        case j.Si.TIER_1:
                                            switch (r) {
                                                case j.Si.TIER_0:
                                                    return w.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case j.Si.TIER_2:
                                                    return w.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return a;
                                            }
                                        case j.Si.TIER_2:
                                            switch (r) {
                                                case j.Si.TIER_0:
                                                case j.Si.TIER_1:
                                                    return w.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case j.Si.TIER_2:
                                                    return e.interval === j.rV.MONTH ? w.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({ numFreeGuildSubscriptions: j.cb }) : a;
                                                default:
                                                    return a;
                                            }
                                        default:
                                            return a;
                                    }
                                })(es, y)
                            }),
                        ((e, n, t) => {
                            if (er) return (0, i.jsx)(o.FormTitle, { children: w.Z.Messages.GIFT_SUBSCRIPTION_SELECTION });
                            if (!ev)
                                return (0, i.jsx)('div', {
                                    className: B.selectPlanChooseTitle,
                                    children: w.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                                });
                            if (n) {
                                let n = (null == e ? void 0 : e.trial_id) === j.a7;
                                return (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            className: B.trialPlanSelectHeader,
                                            children: n
                                                ? w.Z.Messages.REFERRAL_PROGRAM_PAYMENT_MODAL_COPY.format({ endDate: W })
                                                : w.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                                      trialEnd: W,
                                                      trialPeriod: eP
                                                  })
                                        }),
                                        (0, i.jsx)('hr', { className: B.planSelectSeparator })
                                    ]
                                });
                            }
                            if (t && null != eA && null != eE && R === j.Xh.PREMIUM_MONTH_TIER_2)
                                return (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            className: B.trialPlanSelectHeader,
                                            children: w.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
                                                numMonths: null == eu ? void 0 : eu.discount.user_usage_limit,
                                                discountedPrice: (0, S.T4)(eE.amount - eA, eE.currency),
                                                regularPrice: (0, S.T4)(eE.amount, eE.currency)
                                            })
                                        }),
                                        (0, i.jsx)('hr', { className: B.planSelectSeparator })
                                    ]
                                });
                        })(eo, eI, ef),
                        (0, i.jsx)('div', {
                            ...eS,
                            children: F.map((e) =>
                                (0, i.jsx)(
                                    O.Z,
                                    {
                                        planId: e,
                                        premiumSubscription: $ ? null : null != f ? f : null,
                                        selectPlan: ep,
                                        selected: (null == e_ ? void 0 : e_.id) === e,
                                        priceOptions: em,
                                        shouldShowUpdatedPaymentModal: ev,
                                        isEligibleForDiscount: ef,
                                        discountAmountOff: eA,
                                        isEligibleForTrial: eI
                                    },
                                    e
                                )
                            )
                        }),
                        (0, i.jsx)('div', {
                            children:
                                eN && null != e_ && null != eT
                                    ? (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)('div', { className: B.selectPlanDivider }),
                                              (0, i.jsx)(v.Ji, {
                                                  label: w.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                                  value: (0, i.jsx)(A.Z, {
                                                      price: eT.amount,
                                                      currency: eT.currency,
                                                      intervalType: $ ? null : e_.interval,
                                                      intervalCount: e_.intervalCount,
                                                      isPrepaidPaymentSource: eg
                                                  }),
                                                  className: B.selectPlanTotalRow
                                              })
                                          ]
                                      })
                                    : null
                        }),
                        eb && (0, i.jsx)(c.Z, { message: w.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({ kunaPriceWithCurrency: (0, S.T4)(7.5345 * eT.amount, D.pK.HRK) }) }),
                        !$ && !ev && Y && (0, i.jsx)(c.Z, { message: w.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({ documentationLink: x.Z.getArticleURL(Z.BhN.LOCALIZED_PRICING) }) }),
                        $ && (0, i.jsx)(d.Z, { onClose: K })
                    ]
                })
            ]
        })
    });
}
function U(e) {
    let { onStepChange: n, selectedPlanId: t, paymentSources: a, onBackClick: r, showBackButton: s, planOptions: l, shouldRenderUpdatedPaymentModal: c = !1, isTrial: u } = e,
        { paymentSources: d, selectedPlan: m } = (0, p.usePaymentContext)(),
        { isGift: I } = (0, _.wD)();
    return (
        (a = null != a ? a : d),
        (t = null != t ? t : null == m ? void 0 : m.id),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != t && l.includes(t)
                    ? (0, i.jsx)(F, {
                          paymentSources: a,
                          onStepChange: n,
                          selectedPlanId: t,
                          isGift: I,
                          shouldRenderUpdatedPaymentModal: c,
                          isTrial: u
                      })
                    : (0, i.jsx)(o.Button, {
                          disabled: !0,
                          children: w.Z.Messages.SELECT
                      }),
                s ? (0, i.jsx)(y.Z, { onClick: r }) : null
            ]
        })
    );
}
function F(e) {
    let { onStepChange: n, selectedPlanId: t, isGift: a, paymentSources: r, shouldRenderUpdatedPaymentModal: s, isTrial: c } = e,
        u = (0, l.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
        { hasEntitlements: d } = (0, R.H)(t, a),
        _ = (null != u && null != u.paymentSourceId) || Object.keys(r).length > 0 || (d && !c);
    var p = s ? w.Z.Messages.NEXT : w.Z.Messages.SELECT,
        I = m.h8.ADD_PAYMENT_STEPS;
    return (
        _ && (I = m.h8.REVIEW),
        (0, i.jsx)(o.Button, {
            onClick: () => n(I),
            children: p
        })
    );
}
