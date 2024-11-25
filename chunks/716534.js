t.d(n, {
    Z: function () {
        return B;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(512722),
    s = t.n(r),
    a = t(742280),
    c = t(442837),
    o = t(692547),
    u = t(481060),
    d = t(190947),
    m = t(224550),
    p = t(275850),
    x = t(672971),
    h = t(987209),
    f = t(563132),
    v = t(45572),
    g = t(919778),
    S = t(614223),
    j = t(246946),
    E = t(351402),
    y = t(509545),
    I = t(669079),
    P = t(74538),
    T = t(937615),
    N = t(479446),
    b = t(374649),
    _ = t(104494),
    C = t(642530),
    A = t(653798),
    O = t(314182),
    Z = t(981632),
    R = t(314404),
    M = t(42818),
    w = t(459965),
    D = t(251660),
    F = t(474936),
    L = t(981631),
    k = t(231338),
    G = t(388032),
    U = t(809186);
function B(e) {
    var n, t, r, B, H;
    let W,
        V,
        { selectedPlanId: Y, paymentSources: z, priceOptions: K, currencies: X, onCurrencyChange: q, onPaymentSourceChange: J, handlePaymentSourceAdd: Q, setHasAcceptedTerms: $, legalTermsNodeRef: ee, hasLegalTermsFlash: en, trialId: et, trialFooterMessageOverride: ei, reviewWarningMessage: el, metadata: er, purchaseState: es, hideSubscriptionDetails: ea, referralTrialOfferId: ec, isTrial: eo = !1, isDiscount: eu = !1, handleClose: ed } = e,
        { isEmbeddedIAP: em, activeSubscription: ep, selectedSkuId: ex, defaultPlanId: eh, isPremium: ef, startedPaymentFlowWithPaymentSourcesRef: ev, setInvoicePreview: eg, contextMetadata: eS, inReverseTrial: ej, setPurchaseError: eE } = (0, f.usePaymentContext)(),
        { isGift: ey, giftRecipient: eI, selectedGiftStyle: eP } = (0, h.wD)(),
        eT = (0, _.Ng)(),
        eN = null == eT ? void 0 : null === (n = eT.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => F.GP[e].skuId === ex),
        eb = !ey && null != eT && null != ex && eN,
        e_ = (0, c.e7)([y.Z], () => y.Z.get(Y));
    s()(null != e_, 'Missing plan');
    let eC = [
            {
                planId: e_.id,
                quantity: 1
            }
        ],
        eA = es === v.A.PURCHASING || es === v.A.COMPLETED,
        [eO, eZ] = (0, b.ED)({
            items: eC,
            renewal: !1,
            preventFetch: ej || ey || eA,
            applyEntitlements: !0,
            paymentSourceId: K.paymentSourceId,
            currency: K.currency,
            trialId: et,
            metadata: er
        }),
        [eR, eM] = (0, b.ED)({
            subscriptionId: null == ep ? void 0 : ep.id,
            items: eC,
            renewal: !0,
            preventFetch: ey || eA,
            trialId: et,
            paymentSourceId: K.paymentSourceId,
            currency: K.currency,
            metadata: er
        }),
        [ew, eD] = (0, b.ED)({
            items: [
                {
                    planId: F.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !eb,
            trialId: et,
            paymentSourceId: K.paymentSourceId,
            currency: K.currency,
            metadata: er
        }),
        [eF, eL] = (0, b.o5)({
            paymentSourceId: K.paymentSourceId,
            skuId: ex,
            subscriptionPlanId: Y,
            currency: K.currency,
            preventFetch: !ey || eA,
            loadId: eS.loadId
        });
    l.useEffect(() => {
        eg(eF);
    }, [eg, eF]);
    let ek = ey && (0, I.pO)(eI),
        eG = null !== (B = null !== (r = null != eZ ? eZ : eM) && void 0 !== r ? r : eD) && void 0 !== B ? B : eL;
    l.useEffect(() => {
        eE(eG);
    }, [eG, eE]);
    let eU = (0, c.e7)([j.Z], () => j.Z.enabled),
        eB = K.paymentSourceId,
        { hasEntitlements: eH, entitlements: eW } = (0, w.H)(e_.id, ey),
        eV = (0, P.Ap)(K.paymentSourceId),
        eY = (0, g.sE)(et, eB, Y),
        ez = (0, S.Kp)({
            isTrial: eo,
            isGift: ey,
            selectedSkuId: ex,
            startedPaymentFlowWithPaymentSources: ev.current,
            inReverseTrial: ej
        }),
        [eK, eX] = l.useState(null == eO ? void 0 : eO.subscriptionPeriodEnd);
    l.useEffect(() => {
        null == eK && eX(null == eO ? void 0 : eO.subscriptionPeriodEnd);
    }, [null == eO ? void 0 : eO.subscriptionPeriodEnd, eK]);
    let eq = l.useMemo(
            () =>
                (0, P.V7)({
                    skuId: ex,
                    isPremium: ef,
                    multiMonthPlans: [],
                    currentSubscription: ep,
                    isGift: ey,
                    isEligibleForTrial: eo,
                    defaultPlanId: eh,
                    defaultToMonthlyPlan: !1
                }),
            [ex, ep, ey, eh, ef, eo]
        ),
        eJ = (0, S.$g)(ez, eO, e_),
        eQ = l.useMemo(() => (eo && null != eO ? eO : ej && null != eR ? eR : void 0), [ej, eo, eO, eR]);
    if (null != eG);
    else if (ey && null != eF)
        V = (0, i.jsx)(M.e9, {
            plan: e_,
            className: U.invoice,
            isPrepaidPaymentSource: eV,
            isCustomGift: ek,
            invoicePreview: eF
        });
    else if (null != eQ)
        V = (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(A.KU, { negativeMarginTop: !ej }),
                (0, i.jsxs)(A.PO, {
                    className: U.invoice,
                    children: [
                        (0, i.jsxs)('div', {
                            className: U.trialPriceLine,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: G.intl.string(G.t.txajQE)
                                }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: G.intl.format(G.t.hXcaLS, {
                                        price: (0, T.T4)(0, eQ.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: U.afterTrialPriceLine,
                            children: (0, i.jsx)(M.yT, {
                                invoice: eQ,
                                plan: e_
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eO || null == eR || eJ)
            return (0, i.jsx)('div', {
                className: U.spinnerWrapper,
                children: (0, i.jsx)(u.Spinner, {})
            });
        eo && eO.subscriptionPeriodEnd !== eR.subscriptionPeriodEnd && (W = eO.subscriptionPeriodEnd),
            (V = (0, i.jsxs)(A.PO, {
                className: U.invoice,
                children: [
                    (0, i.jsx)(A.q9, { children: G.intl.string(G.t['2eh+Cg']) }),
                    (0, i.jsx)(M.Lu, {
                        invoice: eO,
                        newPlan: e_,
                        isPrepaidPaymentSource: eV,
                        referralTrialOfferId: ec
                    }),
                    eV
                        ? null
                        : (0, i.jsx)(M.nd, {
                              renewalInvoice: eR,
                              isTrial: eo,
                              priceOptions: K,
                              overrideRenewalDate: W,
                              trialFooterMessageOverride: ei,
                              hideSubscriptionDetails: ea
                          })
                ]
            }));
    }
    let e$ = a.M.EEA_COUNTRIES.has(E.Z.ipCountryCodeWithFallback),
        {
            checkboxLabel: e0,
            checkboxClassname: e1,
            checkboxLabelClassname: e2
        } = (function (e, n, t) {
            let i = null,
                l = null,
                r = null;
            if (e && null != n) {
                let { intervalType: e, intervalCount: s } = P.ZP.getIntervalForInvoice(n),
                    a = (0, T.og)((0, T.T4)(n.total, n.currency), e, s),
                    c = null != t ? t : n.subscriptionPeriodEnd;
                (i = G.intl.format(G.t.ZzmrTk, {
                    termsURL: L.EYA.TERMS,
                    paidURL: L.EYA.PAID_TERMS,
                    rate: a,
                    renewalDate: c
                })),
                    (l = U.trialCheckbox),
                    (r = U.trialCheckboxLabel);
            }
            return {
                checkboxLabel: i,
                checkboxClassname: l,
                checkboxLabelClassname: r
            };
        })(null != eo && eo, eR, W),
        e9 = G.intl.formatToPlainString(G.t['sBpy9/'], { planName: e_.name });
    return (
        ey && !ek ? (e9 = G.intl.string(G.t.J5a0eX)) : ey && ek ? (e9 = '') : (0, P.PV)(e_.id) && (e9 = P.ZP.getBillingReviewSubheader(null, e_)),
        eY
            ? null
            : (0, i.jsxs)('div', {
                  className: U.stepBody,
                  children: [
                      null != el &&
                          (0, i.jsxs)('div', {
                              className: U.reviewWarningMessageContainer,
                              children: [
                                  (0, i.jsx)(u.CircleInformationIcon, {
                                      size: 'custom',
                                      color: o.Z.unsafe_rawColors.YELLOW_300.css,
                                      width: 20,
                                      height: 20
                                  }),
                                  (0, i.jsx)(u.Text, {
                                      className: U.reviewWarningMessage,
                                      variant: 'text-sm/normal',
                                      children: el
                                  })
                              ]
                          }),
                      ez &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(A.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  (0, i.jsx)(C.Z, {}),
                                  (0, i.jsx)(R.O, {
                                      planOptions: eq,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: Y,
                                      subscriptionPeriodEnd: eK,
                                      showTotal: !1,
                                      discountInvoiceItems: eb ? (null == ew ? void 0 : ew.invoiceItems) : void 0,
                                      handleClose: ed
                                  }),
                                  (0, i.jsx)(A.KU, {})
                              ]
                          }),
                      ej &&
                          (0, i.jsx)(u.Heading, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: U.trialHeader,
                              children: G.intl.format(G.t['7ZS2m5'], { trialEnd: null == ep ? void 0 : ep.currentPeriodEnd })
                          }),
                      !eo &&
                          (0, i.jsx)(u.FormTitle, {
                              tag: u.FormTitleTags.H5,
                              children: e9
                          }),
                      ek &&
                          null != eP &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(Z.Z, {
                                      defaultAnimationState: N.SR.LOOP,
                                      giftStyle: eP,
                                      shouldAnimate: !0,
                                      className: U.giftMainAnimation
                                  }),
                                  (0, i.jsx)(D.s, { giftRecipient: eI })
                              ]
                          }),
                      V,
                      (0, i.jsxs)('div', {
                          className: U.paymentSourceWrapper,
                          children: [
                              eo
                                  ? (0, i.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H5,
                                        className: U.formTitle,
                                        children: G.intl.string(G.t['YH7B+P'])
                                    })
                                  : (0, i.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H5,
                                        children: G.intl.string(G.t.mmDvV1)
                                    }),
                              (0, i.jsx)(p.Z, {
                                  paymentSources: Object.values(z),
                                  selectedPaymentSourceId: eB,
                                  prependOption:
                                      eH && !eo
                                          ? {
                                                label: G.intl.string(G.t.IGU7Eh),
                                                value: null
                                            }
                                          : null,
                                  onChange: J,
                                  onPaymentSourceAdd: Q,
                                  hidePersonalInformation: eU,
                                  isTrial: eo
                              }),
                              eH && null == eB
                                  ? (0, i.jsx)('div', {
                                        className: U.paymentSourceOptionalWarning,
                                        children: G.intl.format(G.t['2wPRSE'], { months: eW.length })
                                    })
                                  : null,
                              eu
                                  ? null
                                  : (0, i.jsxs)(d.b, {
                                        currencies: X,
                                        className: U.currencyWrapper,
                                        children: [
                                            (0, i.jsx)(u.FormTitle, {
                                                tag: u.FormTitleTags.H5,
                                                children: G.intl.string(G.t['/AAR09'])
                                            }),
                                            (0, i.jsx)(d.Z, {
                                                selectedCurrency: K.currency,
                                                currencies: X,
                                                onChange: q
                                            })
                                        ]
                                    })
                          ]
                      }),
                      (0, i.jsx)(O.Z, {
                          isActive: en,
                          ref: ee,
                          children: (0, i.jsx)(x.Z, {
                              onChange: $,
                              forceShow: !0,
                              checkboxLabel: e0,
                              checkboxClassname: e1,
                              checkboxLabelClassname: e2,
                              finePrint:
                                  null !== (H = !ej && ei) && void 0 !== H
                                      ? H
                                      : (0, i.jsx)(m.Z, {
                                            hide: eo || eu,
                                            subscriptionPlan: e_,
                                            renewalInvoice: eR,
                                            isGift: ey,
                                            paymentSourceType: null === (t = z[null != eB ? eB : '']) || void 0 === t ? void 0 : t.type,
                                            isEmbeddedIAP: em,
                                            basePrice: (0, P.aS)(e_.id, !1, ey, K)
                                        }),
                              showPricingLink: e_.currency !== k.pK.USD,
                              showWithdrawalWaiver: e$,
                              disabled: eA,
                              isTrial: eo && null == ei,
                              inReverseTrial: ej,
                              isDiscount: eu,
                              subscriptionPlan: e_,
                              isGift: ey
                          })
                      })
                  ]
              })
    );
}
