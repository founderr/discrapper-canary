s.d(n, {
    Z: function () {
        return W;
    }
}),
    s(47120);
var t = s(735250),
    l = s(470079),
    i = s(512722),
    r = s.n(i),
    a = s(742280),
    c = s(442837),
    o = s(692547),
    u = s(481060),
    d = s(190947),
    _ = s(224550),
    m = s(275850),
    I = s(672971),
    E = s(128069),
    p = s(987209),
    N = s(598),
    T = s(45572),
    S = s(919778),
    x = s(614223),
    h = s(246946),
    P = s(351402),
    f = s(509545),
    A = s(669079),
    v = s(63063),
    M = s(74538),
    g = s(937615),
    R = s(479446),
    L = s(374649),
    O = s(104494),
    C = s(642530),
    j = s(653798),
    Z = s(314182),
    y = s(981632),
    b = s(314404),
    D = s(42818),
    G = s(459965),
    U = s(251660),
    F = s(474936),
    B = s(981631),
    w = s(231338),
    H = s(689938),
    k = s(309951);
function W(e) {
    var n, s, i, W, Y;
    let V,
        K,
        z,
        { selectedPlanId: X, paymentSources: J, priceOptions: q, currencies: Q, onCurrencyChange: $, onPaymentSourceChange: ee, handlePaymentSourceAdd: en, setHasAcceptedTerms: es, legalTermsNodeRef: et, hasLegalTermsFlash: el, trialId: ei, trialFooterMessageOverride: er, reviewWarningMessage: ea, metadata: ec, purchaseState: eo, hideSubscriptionDetails: eu, referralTrialOfferId: ed, isTrial: e_ = !1, isDiscount: em = !1, handleClose: eI } = e,
        { isEmbeddedIAP: eE, activeSubscription: ep, selectedSkuId: eN, defaultPlanId: eT, isPremium: eS, startedPaymentFlowWithPaymentSourcesRef: ex, setInvoicePreview: eh, contextMetadata: eP, inReverseTrial: ef } = (0, N.usePaymentContext)(),
        { isGift: eA, giftRecipient: ev, selectedGiftStyle: eM } = (0, p.wD)(),
        eg = (0, O.Ng)(),
        eR = null == eg ? void 0 : null === (n = eg.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => F.GP[e].skuId === eN),
        eL = !eA && null != eg && null != eN && eR,
        eO = (0, c.e7)([f.Z], () => f.Z.get(X));
    r()(null != eO, 'Missing plan');
    let eC = [
            {
                planId: eO.id,
                quantity: 1
            }
        ],
        ej = eo === T.A.PURCHASING || eo === T.A.COMPLETED,
        [eZ, ey] = (0, L.ED)({
            items: eC,
            renewal: !1,
            preventFetch: ef || eA || ej,
            applyEntitlements: !0,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            trialId: ei,
            metadata: ec
        }),
        [eb, eD] = (0, L.ED)({
            subscriptionId: null == ep ? void 0 : ep.id,
            items: eC,
            renewal: !0,
            preventFetch: eA || ej,
            trialId: ei,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            metadata: ec
        }),
        [eG, eU] = (0, L.ED)({
            items: [
                {
                    planId: F.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !eL,
            trialId: ei,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            metadata: ec
        }),
        [eF, eB] = (0, L.o5)({
            paymentSourceId: q.paymentSourceId,
            skuId: eN,
            subscriptionPlanId: X,
            currency: q.currency,
            preventFetch: !eA || ej,
            loadId: eP.loadId
        });
    l.useEffect(() => {
        eh(eF);
    }, [eh, eF]);
    let ew = eA && (0, A.pO)(ev),
        eH = null !== (W = null !== (i = null != ey ? ey : eD) && void 0 !== i ? i : eU) && void 0 !== W ? W : eB,
        ek = (0, c.e7)([h.Z], () => h.Z.enabled),
        eW = q.paymentSourceId,
        { hasEntitlements: eY, entitlements: eV } = (0, G.H)(eO.id, eA),
        eK = (0, M.Ap)(q.paymentSourceId),
        ez = (0, S.sE)(ei, eW, X),
        eX = (0, x.Kp)({
            isTrial: e_,
            isGift: eA,
            selectedSkuId: eN,
            startedPaymentFlowWithPaymentSources: ex.current,
            inReverseTrial: ef
        }),
        [eJ, eq] = l.useState(null == eZ ? void 0 : eZ.subscriptionPeriodEnd);
    l.useEffect(() => {
        null == eJ && eq(null == eZ ? void 0 : eZ.subscriptionPeriodEnd);
    }, [null == eZ ? void 0 : eZ.subscriptionPeriodEnd, eJ]);
    let eQ = l.useMemo(
            () =>
                (0, M.V7)({
                    skuId: eN,
                    isPremium: eS,
                    multiMonthPlans: [],
                    currentSubscription: ep,
                    isGift: eA,
                    isEligibleForTrial: e_,
                    defaultPlanId: eT,
                    defaultToMonthlyPlan: !1
                }),
            [eN, ep, eA, eT, eS, e_]
        ),
        e$ = (0, x.$g)(eX, eZ, eO),
        e0 = l.useMemo(() => (e_ && null != eZ ? eZ : ef && null != eb ? eb : void 0), [ef, e_, eZ, eb]);
    if (null != eH) {
        let [e, n] = (function (e) {
            if (e.code === E.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE) return [H.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY, null];
            if (e.code !== E.SM.INVALID_BILLING_ADDRESS) return [e.message, null];
            {
                let e = H.Z.Messages.LEARN_MORE_LINK.format({ helpdeskArticle: v.Z.getArticleURL(B.BhN.BILLING).concat(B.Bjg.INVALID_BILLING_ADDRESS) });
                return [H.Z.Messages.BILLING_ERROR_INVALID_BILLING_ADDRESS, e];
            }
        })(eH);
        K = (0, t.jsxs)(u.FormErrorBlock, {
            children: [e, ' ', n]
        });
    } else if (eA && null != eF)
        z = (0, t.jsx)(D.e9, {
            plan: eO,
            className: k.invoice,
            isPrepaidPaymentSource: eK,
            isCustomGift: ew,
            invoicePreview: eF
        });
    else if (null != e0)
        z = (0, t.jsxs)('div', {
            children: [
                (0, t.jsx)(j.KU, { negativeMarginTop: !ef }),
                (0, t.jsxs)(j.PO, {
                    className: k.invoice,
                    children: [
                        (0, t.jsxs)('div', {
                            className: k.trialPriceLine,
                            children: [
                                (0, t.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: H.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                                }),
                                (0, t.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: H.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                        price: (0, g.T4)(0, e0.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, t.jsx)('div', {
                            className: k.afterTrialPriceLine,
                            children: (0, t.jsx)(D.yT, {
                                invoice: e0,
                                plan: eO
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eZ || null == eb || e$)
            return (0, t.jsx)('div', {
                className: k.spinnerWrapper,
                children: (0, t.jsx)(u.Spinner, {})
            });
        e_ && eZ.subscriptionPeriodEnd !== eb.subscriptionPeriodEnd && (V = eZ.subscriptionPeriodEnd),
            (z = (0, t.jsxs)(j.PO, {
                className: k.invoice,
                children: [
                    (0, t.jsx)(j.q9, { children: H.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS }),
                    (0, t.jsx)(D.Lu, {
                        invoice: eZ,
                        newPlan: eO,
                        isPrepaidPaymentSource: eK,
                        referralTrialOfferId: ed
                    }),
                    eK
                        ? null
                        : (0, t.jsx)(D.nd, {
                              renewalInvoice: eb,
                              isTrial: e_,
                              priceOptions: q,
                              overrideRenewalDate: V,
                              trialFooterMessageOverride: er,
                              hideSubscriptionDetails: eu
                          })
                ]
            }));
    }
    let e1 = a.M.EEA_COUNTRIES.has(P.Z.ipCountryCodeWithFallback),
        {
            checkboxLabel: e9,
            checkboxClassname: e4,
            checkboxLabelClassname: e7
        } = (function (e, n, s) {
            let t = null,
                l = null,
                i = null;
            if (e && null != n) {
                let { intervalType: e, intervalCount: r } = M.ZP.getIntervalForInvoice(n),
                    a = (0, g.og)((0, g.T4)(n.total, n.currency), e, r),
                    c = null != s ? s : n.subscriptionPeriodEnd;
                (t = H.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                    termsURL: B.EYA.TERMS,
                    paidURL: B.EYA.PAID_TERMS,
                    rate: a,
                    renewalDate: c
                })),
                    (l = k.trialCheckbox),
                    (i = k.trialCheckboxLabel);
            }
            return {
                checkboxLabel: t,
                checkboxClassname: l,
                checkboxLabelClassname: i
            };
        })(null != e_ && e_, eb, V),
        e5 = H.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({ planName: eO.name });
    return (
        eA && !ew ? (e5 = H.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT) : eA && ew ? (e5 = '') : (0, M.PV)(eO.id) && (e5 = M.ZP.getBillingReviewSubheader(null, eO)),
        ez
            ? null
            : (0, t.jsxs)('div', {
                  className: k.stepBody,
                  children: [
                      null != ea &&
                          (0, t.jsxs)('div', {
                              className: k.reviewWarningMessageContainer,
                              children: [
                                  (0, t.jsx)(u.CircleInformationIcon, {
                                      size: 'custom',
                                      color: o.Z.unsafe_rawColors.YELLOW_300.css,
                                      width: 20,
                                      height: 20
                                  }),
                                  (0, t.jsx)(u.Text, {
                                      className: k.reviewWarningMessage,
                                      variant: 'text-sm/normal',
                                      children: ea
                                  })
                              ]
                          }),
                      K,
                      eX &&
                          (0, t.jsxs)('div', {
                              children: [
                                  (0, t.jsx)(j.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  (0, t.jsx)(C.Z, {}),
                                  (0, t.jsx)(b.O, {
                                      planOptions: eQ,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: X,
                                      subscriptionPeriodEnd: eJ,
                                      showTotal: !1,
                                      discountInvoiceItems: eL ? (null == eG ? void 0 : eG.invoiceItems) : void 0,
                                      handleClose: eI
                                  }),
                                  (0, t.jsx)(j.KU, {})
                              ]
                          }),
                      ef &&
                          (0, t.jsx)(u.Heading, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: k.trialHeader,
                              children: H.Z.Messages.REVERSE_TRIAL_PAYMENT_MODAL_INFO.format({ trialEnd: null == ep ? void 0 : ep.currentPeriodEnd })
                          }),
                      !e_ &&
                          (0, t.jsx)(u.FormTitle, {
                              tag: u.FormTitleTags.H5,
                              children: e5
                          }),
                      ew &&
                          null != eM &&
                          (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)(y.Z, {
                                      defaultAnimationState: R.SR.LOOP,
                                      giftStyle: eM,
                                      shouldAnimate: !0,
                                      className: k.giftMainAnimation
                                  }),
                                  (0, t.jsx)(U.s, { giftRecipient: ev })
                              ]
                          }),
                      z,
                      (0, t.jsxs)('div', {
                          className: k.paymentSourceWrapper,
                          children: [
                              e_
                                  ? (0, t.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H5,
                                        className: k.formTitle,
                                        children: H.Z.Messages.BILLING_STEP_PAYMENT_METHOD
                                    })
                                  : (0, t.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H5,
                                        children: H.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                                    }),
                              (0, t.jsx)(m.Z, {
                                  paymentSources: Object.values(J),
                                  selectedPaymentSourceId: eW,
                                  prependOption:
                                      eY && !e_
                                          ? {
                                                label: H.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                                value: null
                                            }
                                          : null,
                                  onChange: ee,
                                  onPaymentSourceAdd: en,
                                  hidePersonalInformation: ek,
                                  isTrial: e_
                              }),
                              eY && null == eW
                                  ? (0, t.jsx)('div', {
                                        className: k.paymentSourceOptionalWarning,
                                        children: H.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({ months: eV.length })
                                    })
                                  : null,
                              em
                                  ? null
                                  : (0, t.jsxs)(d.b, {
                                        currencies: Q,
                                        className: k.currencyWrapper,
                                        children: [
                                            (0, t.jsx)(u.FormTitle, {
                                                tag: u.FormTitleTags.H5,
                                                children: H.Z.Messages.PAYMENT_CURRENCY
                                            }),
                                            (0, t.jsx)(d.Z, {
                                                selectedCurrency: q.currency,
                                                currencies: Q,
                                                onChange: $
                                            })
                                        ]
                                    })
                          ]
                      }),
                      (0, t.jsx)(Z.Z, {
                          isActive: el,
                          ref: et,
                          children: (0, t.jsx)(I.Z, {
                              onChange: es,
                              forceShow: !0,
                              checkboxLabel: e9,
                              checkboxClassname: e4,
                              checkboxLabelClassname: e7,
                              finePrint:
                                  null !== (Y = !ef && er) && void 0 !== Y
                                      ? Y
                                      : (0, t.jsx)(_.Z, {
                                            hide: e_ || em,
                                            subscriptionPlan: eO,
                                            renewalInvoice: eb,
                                            isGift: eA,
                                            paymentSourceType: null === (s = J[null != eW ? eW : '']) || void 0 === s ? void 0 : s.type,
                                            isEmbeddedIAP: eE,
                                            basePrice: (0, M.aS)(eO.id, !1, eA, q)
                                        }),
                              showPricingLink: eO.currency !== w.pK.USD,
                              showWithdrawalWaiver: e1,
                              disabled: ej,
                              isTrial: e_ && null == er,
                              inReverseTrial: ef,
                              isDiscount: em,
                              subscriptionPlan: eO,
                              isGift: eA
                          })
                      })
                  ]
              })
    );
}
