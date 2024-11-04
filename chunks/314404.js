t.d(n, {
    M: function () {
        return H;
    },
    O: function () {
        return G;
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
    I = t(937615),
    y = t(711459),
    P = t(857039),
    T = t(847903),
    N = t(104494),
    b = t(639119),
    _ = t(55610),
    C = t(653798),
    A = t(553797),
    R = t(927699),
    O = t(987716),
    Z = t(311821),
    M = t(459965),
    w = t(811616),
    D = t(251660),
    L = t(474936),
    F = t(981631),
    k = t(231338),
    B = t(388032),
    U = t(133130);
function G(e) {
    var n, t, r, a;
    let { premiumSubscription: f, skuId: g, selectedPlanId: Z, setSelectedPlanId: M, priceOptions: G, planOptions: H, eligibleForMultiMonthPlans: W, referralTrialOfferId: V, subscriptionPeriodEnd: Y, showTotal: z = !0, discountInvoiceItems: K, handleClose: X } = e,
        { activeSubscription: q, setSelectedPlanId: J, selectedSkuId: Q, selectedPlan: $, priceOptions: ee } = (0, h.usePaymentContext)(),
        { isGift: en, giftRecipient: et, selectedGiftStyle: ei, customGiftMessage: el, setCustomGiftMessage: er } = (0, x.wD)(),
        es = (0, S.MY)(et),
        ea = en && (0, S.pO)(et),
        ec = (0, P.Z)({ location: 'PremiumPlanSelectStep' });
    (g = null != g ? g : Q), (f = null != f ? f : q), c()(void 0 !== f, 'should not be undefined');
    let [eo, eu] = (0, o.Wu)([v.Z], () => [null != f ? v.Z.get(f.planId) : null, null != Z ? v.Z.get(Z) : null]),
        ed = (0, b.N)(V),
        em = null == ed ? void 0 : ed.subscription_trial,
        ep = (0, N.Ng)(),
        ex = null == ep ? void 0 : null === (n = ep.discount) || void 0 === n ? void 0 : n.plan_ids,
        eh = null != eu ? eu : $,
        ef = l.useCallback(
            (e) => {
                null != M ? M(e) : J(e);
            },
            [M, J]
        ),
        ev = null != G ? G : ee;
    c()(null != ev, 'Price option has to be set');
    let eg = null != ed && L.nG[ed.trial_id].skus.includes(g),
        eS = null != ep && H.some((e) => (null == ex ? void 0 : ex.includes(e))) && null != ep.discount,
        ej = (0, E.aS)(L.Xh.PREMIUM_MONTH_TIER_2, !1, en, ev);
    l.useEffect(() => {
        W && y.ZP.trackExposure({ location: '5f89bb_1' });
    }, [W]);
    let eE = (null == eh ? void 0 : eh.id) != null && H.includes(eh.id);
    l.useEffect(() => {
        if (!eE) {
            if (null == eo || en) ef(H[0]);
            else if (null != eo) {
                let e = H.find((e) => e !== eo.id);
                null != e && ef(e);
            }
        }
    }, [eE, en, H, eo, ef]);
    let eI = !ea && (en || (!eg && !eS)) && eE && z,
        ey = (0, u.useRadioGroup)(),
        eP = (null == eh ? void 0 : eh.id) != null ? (0, E.aS)(eh.id, !1, en, ev) : void 0,
        { ipCountryCode: eT } = (0, T.Z)(),
        eN = 'HR' === eT && null != eP && eP.currency === k.pK.EUR,
        eb = (0, E.Ap)(ev.paymentSourceId),
        e_ = l.useMemo(() => {
            if ((null == em ? void 0 : em.interval) === L.rV.DAY) return (null == em ? void 0 : em.interval_count) > 7 ? B.intl.string(B.t.Z1V2cn) : B.intl.string(B.t.MI1rHh);
            return B.intl.string(B.t['+S5lra']);
        }, [em]),
        eC = !en && (eS || (null != em && eg && null != Y)),
        eA = null == K ? void 0 : null === (a = K.find((e) => e.subscriptionPlanId === L.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === a ? void 0 : null === (r = a.discounts) || void 0 === r ? void 0 : null === (t = r.find((e) => e.type === m.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(ea ? U.stepBodyCustomGift : U.stepBody, { [U.paddingForHalloweenBanner]: ec }),
            children: [
                (0, i.jsxs)('div', {
                    className: ea ? U.bodyColumnMiddle : void 0,
                    children: [
                        (0, i.jsx)(_.Z, {
                            fromBoostCancelModal: !1,
                            className: U.legacyPricingNotice
                        }),
                        ea && null != ei && (0, i.jsx)(O.q, {})
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: ea ? U.bodyColumnRight : void 0,
                    children: [
                        (0, i.jsx)(D.s, { giftRecipient: et }),
                        (() => {
                            if (es === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != er)
                                return (0, i.jsx)(R.Z, {
                                    sectionTitle: B.intl.string(B.t.B3miEx),
                                    onTextChange: (e) => er(e),
                                    pendingText: el,
                                    currentText: el
                                });
                        })(),
                        null != eo &&
                            !en &&
                            (0, i.jsx)('div', {
                                className: U.bodyText,
                                children: (function (e, n) {
                                    let t = B.intl.string(B.t.BYa62t),
                                        i = B.intl.string(B.t.CDa6Dg),
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
                                                    return B.intl.string(B.t.q6mxDQ);
                                                case L.Si.TIER_2:
                                                    return B.intl.string(B.t.seZVS0);
                                                default:
                                                    return l;
                                            }
                                        case L.Si.TIER_1:
                                            switch (r) {
                                                case L.Si.TIER_0:
                                                    return B.intl.string(B.t['7+u2zs']);
                                                case L.Si.TIER_2:
                                                    return B.intl.string(B.t.NG2qcX);
                                                default:
                                                    return l;
                                            }
                                        case L.Si.TIER_2:
                                            switch (r) {
                                                case L.Si.TIER_0:
                                                case L.Si.TIER_1:
                                                    return B.intl.string(B.t['eB0/w8']);
                                                case L.Si.TIER_2:
                                                    return e.interval === L.rV.MONTH ? B.intl.formatToPlainString(B.t['RqUv8/'], { numFreeGuildSubscriptions: L.cb }) : l;
                                                default:
                                                    return l;
                                            }
                                        default:
                                            return l;
                                    }
                                })(eo, g)
                            }),
                        ((e, n, t) => {
                            if (ea) return (0, i.jsx)(u.FormTitle, { children: B.intl.string(B.t['3E5hXl']) });
                            if (!eC)
                                return (0, i.jsx)('div', {
                                    className: U.selectPlanChooseTitle,
                                    children: B.intl.string(B.t.a19jpa)
                                });
                            if (n) {
                                let n = (null == e ? void 0 : e.trial_id) === L.a7;
                                return (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            className: U.trialPlanSelectHeader,
                                            children: n
                                                ? B.intl.format(B.t.nG95hI, { endDate: Y })
                                                : B.intl.format(B.t.s4E7kZ, {
                                                      trialEnd: Y,
                                                      trialPeriod: e_
                                                  })
                                        }),
                                        (0, i.jsx)('hr', { className: U.planSelectSeparator })
                                    ]
                                });
                            }
                            if (t && null != eA && null != ej && Z === L.Xh.PREMIUM_MONTH_TIER_2)
                                return (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            className: U.trialPlanSelectHeader,
                                            children: B.intl.format(B.t['nG7g/P'], {
                                                numMonths: null == ep ? void 0 : ep.discount.user_usage_limit,
                                                discountedPrice: (0, I.T4)(ej.amount - eA, ej.currency),
                                                regularPrice: (0, I.T4)(ej.amount, ej.currency)
                                            })
                                        }),
                                        (0, i.jsx)('hr', { className: U.planSelectSeparator })
                                    ]
                                });
                        })(ed, eg, eS),
                        (0, i.jsx)('div', {
                            ...ey,
                            children: H.map((e) =>
                                (0, i.jsx)(
                                    w.Z,
                                    {
                                        planId: e,
                                        premiumSubscription: en ? null : null != f ? f : null,
                                        selectPlan: ef,
                                        selected: (null == eh ? void 0 : eh.id) === e,
                                        priceOptions: ev,
                                        shouldShowUpdatedPaymentModal: eC,
                                        isEligibleForDiscount: eS,
                                        discountAmountOff: eA,
                                        isEligibleForTrial: eg
                                    },
                                    e
                                )
                            )
                        }),
                        (0, i.jsx)('div', {
                            children:
                                eI && null != eh && null != eP
                                    ? (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)('div', { className: U.selectPlanDivider }),
                                              (0, i.jsx)(C.Ji, {
                                                  label: B.intl.string(B.t.txajQE),
                                                  value: (0, i.jsx)(A.Z, {
                                                      price: eP.amount,
                                                      currency: eP.currency,
                                                      intervalType: en ? null : eh.interval,
                                                      intervalCount: eh.intervalCount,
                                                      isPrepaidPaymentSource: eb
                                                  }),
                                                  className: U.selectPlanTotalRow
                                              })
                                          ]
                                      })
                                    : null
                        }),
                        eN && (0, i.jsx)(d.Z, { message: B.intl.formatToPlainString(B.t['9hnZoK'], { kunaPriceWithCurrency: (0, I.T4)(7.5345 * eP.amount, k.pK.HRK) }) }),
                        !en && !eC && z && (0, i.jsx)(d.Z, { message: B.intl.format(B.t.Om31w8, { documentationLink: j.Z.getArticleURL(F.BhN.LOCALIZED_PRICING) }) }),
                        en && (0, i.jsx)(p.Z, { onClose: X })
                    ]
                })
            ]
        })
    });
}
function H(e) {
    let { onStepChange: n, selectedPlanId: t, paymentSources: l, onBackClick: r, showBackButton: s, planOptions: a, shouldRenderUpdatedPaymentModal: c = !1, isTrial: o } = e,
        { paymentSources: d, selectedPlan: m } = (0, h.usePaymentContext)(),
        { isGift: p } = (0, x.wD)();
    return (
        (l = null != l ? l : d),
        (t = null != t ? t : null == m ? void 0 : m.id),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != t && a.includes(t)
                    ? (0, i.jsx)(W, {
                          paymentSources: l,
                          onStepChange: n,
                          selectedPlanId: t,
                          isGift: p,
                          shouldRenderUpdatedPaymentModal: c,
                          isTrial: o
                      })
                    : (0, i.jsx)(u.Button, {
                          disabled: !0,
                          children: B.intl.string(B.t.XqMe3N)
                      }),
                s ? (0, i.jsx)(Z.Z, { onClick: r }) : null
            ]
        })
    );
}
function W(e) {
    let { onStepChange: n, selectedPlanId: t, isGift: l, paymentSources: r, shouldRenderUpdatedPaymentModal: s, isTrial: a } = e,
        c = (0, o.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
        { hasEntitlements: d } = (0, M.H)(t, l),
        m = (null != c && null != c.paymentSourceId) || Object.keys(r).length > 0 || (d && !a);
    var p = s ? B.intl.string(B.t.PDTjLC) : B.intl.string(B.t.XqMe3N),
        x = f.h8.ADD_PAYMENT_STEPS;
    return (
        m && (x = f.h8.REVIEW),
        (0, i.jsx)(u.Button, {
            onClick: () => n(x),
            children: p
        })
    );
}
