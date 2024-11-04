t.d(n, {
    Z: function () {
        return W;
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
    h = t(128069),
    f = t(987209),
    v = t(563132),
    g = t(45572),
    S = t(919778),
    j = t(614223),
    E = t(246946),
    I = t(351402),
    y = t(509545),
    P = t(669079),
    T = t(63063),
    N = t(74538),
    b = t(937615),
    _ = t(479446),
    C = t(374649),
    A = t(104494),
    R = t(642530),
    O = t(653798),
    Z = t(314182),
    M = t(981632),
    w = t(314404),
    D = t(42818),
    L = t(459965),
    F = t(251660),
    k = t(474936),
    B = t(981631),
    U = t(231338),
    G = t(388032),
    H = t(309951);
function W(e) {
    var n, t, r, W, V;
    let Y,
        z,
        K,
        { selectedPlanId: X, paymentSources: q, priceOptions: J, currencies: Q, onCurrencyChange: $, onPaymentSourceChange: ee, handlePaymentSourceAdd: en, setHasAcceptedTerms: et, legalTermsNodeRef: ei, hasLegalTermsFlash: el, trialId: er, trialFooterMessageOverride: es, reviewWarningMessage: ea, metadata: ec, purchaseState: eo, hideSubscriptionDetails: eu, referralTrialOfferId: ed, isTrial: em = !1, isDiscount: ep = !1, handleClose: ex } = e,
        { isEmbeddedIAP: eh, activeSubscription: ef, selectedSkuId: ev, defaultPlanId: eg, isPremium: eS, startedPaymentFlowWithPaymentSourcesRef: ej, setInvoicePreview: eE, contextMetadata: eI, inReverseTrial: ey } = (0, v.usePaymentContext)(),
        { isGift: eP, giftRecipient: eT, selectedGiftStyle: eN } = (0, f.wD)(),
        eb = (0, A.Ng)(),
        e_ = null == eb ? void 0 : null === (n = eb.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => k.GP[e].skuId === ev),
        eC = !eP && null != eb && null != ev && e_,
        eA = (0, c.e7)([y.Z], () => y.Z.get(X));
    s()(null != eA, 'Missing plan');
    let eR = [
            {
                planId: eA.id,
                quantity: 1
            }
        ],
        eO = eo === g.A.PURCHASING || eo === g.A.COMPLETED,
        [eZ, eM] = (0, C.ED)({
            items: eR,
            renewal: !1,
            preventFetch: ey || eP || eO,
            applyEntitlements: !0,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
            trialId: er,
            metadata: ec
        }),
        [ew, eD] = (0, C.ED)({
            subscriptionId: null == ef ? void 0 : ef.id,
            items: eR,
            renewal: !0,
            preventFetch: eP || eO,
            trialId: er,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
            metadata: ec
        }),
        [eL, eF] = (0, C.ED)({
            items: [
                {
                    planId: k.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !eC,
            trialId: er,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
            metadata: ec
        }),
        [ek, eB] = (0, C.o5)({
            paymentSourceId: J.paymentSourceId,
            skuId: ev,
            subscriptionPlanId: X,
            currency: J.currency,
            preventFetch: !eP || eO,
            loadId: eI.loadId
        });
    l.useEffect(() => {
        eE(ek);
    }, [eE, ek]);
    let eU = eP && (0, P.pO)(eT),
        eG = null !== (W = null !== (r = null != eM ? eM : eD) && void 0 !== r ? r : eF) && void 0 !== W ? W : eB,
        eH = (0, c.e7)([E.Z], () => E.Z.enabled),
        eW = J.paymentSourceId,
        { hasEntitlements: eV, entitlements: eY } = (0, L.H)(eA.id, eP),
        ez = (0, N.Ap)(J.paymentSourceId),
        eK = (0, S.sE)(er, eW, X),
        eX = (0, j.Kp)({
            isTrial: em,
            isGift: eP,
            selectedSkuId: ev,
            startedPaymentFlowWithPaymentSources: ej.current,
            inReverseTrial: ey
        }),
        [eq, eJ] = l.useState(null == eZ ? void 0 : eZ.subscriptionPeriodEnd);
    l.useEffect(() => {
        null == eq && eJ(null == eZ ? void 0 : eZ.subscriptionPeriodEnd);
    }, [null == eZ ? void 0 : eZ.subscriptionPeriodEnd, eq]);
    let eQ = l.useMemo(
            () =>
                (0, N.V7)({
                    skuId: ev,
                    isPremium: eS,
                    multiMonthPlans: [],
                    currentSubscription: ef,
                    isGift: eP,
                    isEligibleForTrial: em,
                    defaultPlanId: eg,
                    defaultToMonthlyPlan: !1
                }),
            [ev, ef, eP, eg, eS, em]
        ),
        e$ = (0, j.$g)(eX, eZ, eA),
        e0 = l.useMemo(() => (em && null != eZ ? eZ : ey && null != ew ? ew : void 0), [ey, em, eZ, ew]);
    if (null != eG) {
        let [e, n] = (function (e) {
            if (e.code === h.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE) return [G.intl.string(G.t.mC1Fj4), null];
            if (e.code !== h.SM.INVALID_BILLING_ADDRESS) return [e.message, null];
            {
                let e = G.intl.format(G.t.BPDKoK, { helpdeskArticle: T.Z.getArticleURL(B.BhN.BILLING).concat(B.Bjg.INVALID_BILLING_ADDRESS) });
                return [G.intl.string(G.t['yVIm/P']), e];
            }
        })(eG);
        z = (0, i.jsxs)(u.FormErrorBlock, {
            children: [e, ' ', n]
        });
    } else if (eP && null != ek)
        K = (0, i.jsx)(D.e9, {
            plan: eA,
            className: H.invoice,
            isPrepaidPaymentSource: ez,
            isCustomGift: eU,
            invoicePreview: ek
        });
    else if (null != e0)
        K = (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(O.KU, { negativeMarginTop: !ey }),
                (0, i.jsxs)(O.PO, {
                    className: H.invoice,
                    children: [
                        (0, i.jsxs)('div', {
                            className: H.trialPriceLine,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: G.intl.string(G.t.txajQE)
                                }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: G.intl.format(G.t.hXcaLS, {
                                        price: (0, b.T4)(0, e0.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: H.afterTrialPriceLine,
                            children: (0, i.jsx)(D.yT, {
                                invoice: e0,
                                plan: eA
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eZ || null == ew || e$)
            return (0, i.jsx)('div', {
                className: H.spinnerWrapper,
                children: (0, i.jsx)(u.Spinner, {})
            });
        em && eZ.subscriptionPeriodEnd !== ew.subscriptionPeriodEnd && (Y = eZ.subscriptionPeriodEnd),
            (K = (0, i.jsxs)(O.PO, {
                className: H.invoice,
                children: [
                    (0, i.jsx)(O.q9, { children: G.intl.string(G.t['2eh+Cg']) }),
                    (0, i.jsx)(D.Lu, {
                        invoice: eZ,
                        newPlan: eA,
                        isPrepaidPaymentSource: ez,
                        referralTrialOfferId: ed
                    }),
                    ez
                        ? null
                        : (0, i.jsx)(D.nd, {
                              renewalInvoice: ew,
                              isTrial: em,
                              priceOptions: J,
                              overrideRenewalDate: Y,
                              trialFooterMessageOverride: es,
                              hideSubscriptionDetails: eu
                          })
                ]
            }));
    }
    let e1 = a.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        {
            checkboxLabel: e2,
            checkboxClassname: e9,
            checkboxLabelClassname: e3
        } = (function (e, n, t) {
            let i = null,
                l = null,
                r = null;
            if (e && null != n) {
                let { intervalType: e, intervalCount: s } = N.ZP.getIntervalForInvoice(n),
                    a = (0, b.og)((0, b.T4)(n.total, n.currency), e, s),
                    c = null != t ? t : n.subscriptionPeriodEnd;
                (i = G.intl.format(G.t.ZzmrTk, {
                    termsURL: B.EYA.TERMS,
                    paidURL: B.EYA.PAID_TERMS,
                    rate: a,
                    renewalDate: c
                })),
                    (l = H.trialCheckbox),
                    (r = H.trialCheckboxLabel);
            }
            return {
                checkboxLabel: i,
                checkboxClassname: l,
                checkboxLabelClassname: r
            };
        })(null != em && em, ew, Y),
        e4 = G.intl.formatToPlainString(G.t['sBpy9/'], { planName: eA.name });
    return (
        eP && !eU ? (e4 = G.intl.string(G.t.J5a0eX)) : eP && eU ? (e4 = '') : (0, N.PV)(eA.id) && (e4 = N.ZP.getBillingReviewSubheader(null, eA)),
        eK
            ? null
            : (0, i.jsxs)('div', {
                  className: H.stepBody,
                  children: [
                      null != ea &&
                          (0, i.jsxs)('div', {
                              className: H.reviewWarningMessageContainer,
                              children: [
                                  (0, i.jsx)(u.CircleInformationIcon, {
                                      size: 'custom',
                                      color: o.Z.unsafe_rawColors.YELLOW_300.css,
                                      width: 20,
                                      height: 20
                                  }),
                                  (0, i.jsx)(u.Text, {
                                      className: H.reviewWarningMessage,
                                      variant: 'text-sm/normal',
                                      children: ea
                                  })
                              ]
                          }),
                      z,
                      eX &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(O.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  (0, i.jsx)(R.Z, {}),
                                  (0, i.jsx)(w.O, {
                                      planOptions: eQ,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: X,
                                      subscriptionPeriodEnd: eq,
                                      showTotal: !1,
                                      discountInvoiceItems: eC ? (null == eL ? void 0 : eL.invoiceItems) : void 0,
                                      handleClose: ex
                                  }),
                                  (0, i.jsx)(O.KU, {})
                              ]
                          }),
                      ey &&
                          (0, i.jsx)(u.Heading, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: H.trialHeader,
                              children: G.intl.format(G.t['7ZS2m5'], { trialEnd: null == ef ? void 0 : ef.currentPeriodEnd })
                          }),
                      !em &&
                          (0, i.jsx)(u.FormTitle, {
                              tag: u.FormTitleTags.H5,
                              children: e4
                          }),
                      eU &&
                          null != eN &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(M.Z, {
                                      defaultAnimationState: _.SR.LOOP,
                                      giftStyle: eN,
                                      shouldAnimate: !0,
                                      className: H.giftMainAnimation
                                  }),
                                  (0, i.jsx)(F.s, { giftRecipient: eT })
                              ]
                          }),
                      K,
                      (0, i.jsxs)('div', {
                          className: H.paymentSourceWrapper,
                          children: [
                              em
                                  ? (0, i.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H5,
                                        className: H.formTitle,
                                        children: G.intl.string(G.t['YH7B+P'])
                                    })
                                  : (0, i.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H5,
                                        children: G.intl.string(G.t.mmDvV1)
                                    }),
                              (0, i.jsx)(p.Z, {
                                  paymentSources: Object.values(q),
                                  selectedPaymentSourceId: eW,
                                  prependOption:
                                      eV && !em
                                          ? {
                                                label: G.intl.string(G.t.IGU7Eh),
                                                value: null
                                            }
                                          : null,
                                  onChange: ee,
                                  onPaymentSourceAdd: en,
                                  hidePersonalInformation: eH,
                                  isTrial: em
                              }),
                              eV && null == eW
                                  ? (0, i.jsx)('div', {
                                        className: H.paymentSourceOptionalWarning,
                                        children: G.intl.format(G.t['2wPRSE'], { months: eY.length })
                                    })
                                  : null,
                              ep
                                  ? null
                                  : (0, i.jsxs)(d.b, {
                                        currencies: Q,
                                        className: H.currencyWrapper,
                                        children: [
                                            (0, i.jsx)(u.FormTitle, {
                                                tag: u.FormTitleTags.H5,
                                                children: G.intl.string(G.t['/AAR09'])
                                            }),
                                            (0, i.jsx)(d.Z, {
                                                selectedCurrency: J.currency,
                                                currencies: Q,
                                                onChange: $
                                            })
                                        ]
                                    })
                          ]
                      }),
                      (0, i.jsx)(Z.Z, {
                          isActive: el,
                          ref: ei,
                          children: (0, i.jsx)(x.Z, {
                              onChange: et,
                              forceShow: !0,
                              checkboxLabel: e2,
                              checkboxClassname: e9,
                              checkboxLabelClassname: e3,
                              finePrint:
                                  null !== (V = !ey && es) && void 0 !== V
                                      ? V
                                      : (0, i.jsx)(m.Z, {
                                            hide: em || ep,
                                            subscriptionPlan: eA,
                                            renewalInvoice: ew,
                                            isGift: eP,
                                            paymentSourceType: null === (t = q[null != eW ? eW : '']) || void 0 === t ? void 0 : t.type,
                                            isEmbeddedIAP: eh,
                                            basePrice: (0, N.aS)(eA.id, !1, eP, J)
                                        }),
                              showPricingLink: eA.currency !== U.pK.USD,
                              showWithdrawalWaiver: e1,
                              disabled: eO,
                              isTrial: em && null == es,
                              inReverseTrial: ey,
                              isDiscount: ep,
                              subscriptionPlan: eA,
                              isGift: eP
                          })
                      })
                  ]
              })
    );
}
