s.d(n, {
    Z: function () {
        return H;
    }
}), s(47120);
var l = s(735250), t = s(470079), i = s(512722), r = s.n(i), a = s(742280), c = s(442837), o = s(692547), u = s(481060), d = s(190947), _ = s(224550), m = s(275850), E = s(672971), I = s(128069), p = s(987209), N = s(598), T = s(45572), S = s(919778), x = s(614223), h = s(246946), P = s(351402), f = s(509545), A = s(669079), v = s(74538), M = s(937615), g = s(479446), C = s(374649), O = s(104494), R = s(653798), L = s(314182), j = s(981632), y = s(314404), Z = s(42818), b = s(459965), D = s(251660), G = s(474936), U = s(981631), F = s(231338), B = s(689938), w = s(711978);
function H(e) {
    var n, s, i, H;
    let k, W, Y, {
            selectedPlanId: K,
            paymentSources: V,
            priceOptions: z,
            currencies: X,
            onCurrencyChange: J,
            onPaymentSourceChange: q,
            handlePaymentSourceAdd: Q,
            setHasAcceptedTerms: $,
            legalTermsNodeRef: ee,
            hasLegalTermsFlash: en,
            trialId: es,
            trialFooterMessageOverride: el,
            reviewWarningMessage: et,
            metadata: ei,
            purchaseState: er,
            hideSubscriptionDetails: ea,
            referralTrialOfferId: ec,
            isTrial: eo = !1,
            isDiscount: eu = !1,
            handleClose: ed
        } = e, {
            isEmbeddedIAP: e_,
            activeSubscription: em,
            selectedSkuId: eE,
            defaultPlanId: eI,
            isPremium: ep,
            startedPaymentFlowWithPaymentSourcesRef: eN,
            setInvoicePreview: eT,
            contextMetadata: eS
        } = (0, N.usePaymentContext)(), {
            isGift: ex,
            giftRecipient: eh,
            selectedGiftStyle: eP
        } = (0, p.wD)(), ef = (0, O.Ng)(), eA = null == ef ? void 0 : null === (n = ef.discount) || void 0 === n ? void 0 : n.plan_ids.some(e => G.GP[e].skuId === eE), ev = !ex && null != ef && null != eE && eA, eM = (0, c.e7)([f.Z], () => f.Z.get(K));
    r()(null != eM, 'Missing plan');
    let eg = [{
                planId: eM.id,
                quantity: 1
            }], eC = er === T.A.PURCHASING || er === T.A.COMPLETED, eO = ex || eC, [eR, eL] = (0, C.ED)({
            items: eg,
            renewal: !1,
            preventFetch: eO,
            applyEntitlements: !0,
            paymentSourceId: z.paymentSourceId,
            currency: z.currency,
            trialId: es,
            metadata: ei
        }), [ej, ey] = (0, C.ED)({
            items: eg,
            renewal: !0,
            preventFetch: eO,
            trialId: es,
            paymentSourceId: z.paymentSourceId,
            currency: z.currency,
            metadata: ei
        }), [eZ, eb] = (0, C.ED)({
            items: [{
                    planId: G.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }],
            renewal: !0,
            preventFetch: !ev,
            trialId: es,
            paymentSourceId: z.paymentSourceId,
            currency: z.currency,
            metadata: ei
        }), [eD, eG] = (0, C.o5)({
            paymentSourceId: z.paymentSourceId,
            skuId: eE,
            subscriptionPlanId: K,
            currency: z.currency,
            preventFetch: !ex || eC,
            loadId: eS.loadId
        });
    t.useEffect(() => {
        eT(eD);
    }, [
        eT,
        eD
    ]);
    let eU = ex && (0, A.pO)(eh), eF = null !== (H = null !== (i = null != eL ? eL : ey) && void 0 !== i ? i : eb) && void 0 !== H ? H : eG, eB = (0, c.e7)([h.Z], () => h.Z.enabled), ew = z.paymentSourceId, {
            hasEntitlements: eH,
            entitlements: ek
        } = (0, b.H)(eM.id, ex), eW = (0, v.Ap)(z.paymentSourceId), eY = (0, S.sE)(es, ew, K), eK = (0, x.Kp)({
            isTrial: eo,
            isGift: ex,
            selectedSkuId: eE,
            startedPaymentFlowWithPaymentSources: eN.current
        }), [eV, ez] = t.useState(null == eR ? void 0 : eR.subscriptionPeriodEnd);
    t.useEffect(() => {
        null == eV && ez(null == eR ? void 0 : eR.subscriptionPeriodEnd);
    }, [
        null == eR ? void 0 : eR.subscriptionPeriodEnd,
        eV
    ]);
    let eX = t.useMemo(() => (0, v.V7)({
            skuId: eE,
            isPremium: ep,
            multiMonthPlans: [],
            currentSubscription: em,
            isGift: ex,
            isEligibleForTrial: eo,
            defaultPlanId: eI,
            defaultToMonthlyPlan: !1
        }), [
            eE,
            em,
            ex,
            eI,
            ep,
            eo
        ]), eJ = (0, x.$g)(eK, eR, eM);
    if (null != eF) {
        let e = eF.message;
        eF.code === I.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = B.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), W = (0, l.jsx)(u.FormErrorBlock, { children: e });
    } else if (ex && null != eD)
        Y = (0, l.jsx)(Z.e9, {
            plan: eM,
            className: w.invoice,
            isPrepaidPaymentSource: eW,
            isCustomGift: eU,
            invoicePreview: eD
        });
    else if (eo && null != eR)
        Y = (0, l.jsxs)('div', {
            children: [
                (0, l.jsx)(R.KU, { negativeMarginTop: !0 }),
                (0, l.jsxs)(R.PO, {
                    className: w.invoice,
                    children: [
                        (0, l.jsxs)('div', {
                            className: w.trialPriceLine,
                            children: [
                                (0, l.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: B.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                                }),
                                (0, l.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: B.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({ price: (0, M.T4)(0, eR.currency, { maximumFractionDigits: 0 }) })
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: w.afterTrialPriceLine,
                            children: (0, l.jsx)(Z.yT, {
                                invoice: eR,
                                plan: eM
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eR || null == ej || eJ)
            return (0, l.jsx)('div', {
                className: w.spinnerWrapper,
                children: (0, l.jsx)(u.Spinner, {})
            });
        eo && eR.subscriptionPeriodEnd !== ej.subscriptionPeriodEnd && (k = eR.subscriptionPeriodEnd), Y = (0, l.jsxs)(R.PO, {
            className: w.invoice,
            children: [
                (0, l.jsx)(R.q9, { children: B.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS }),
                (0, l.jsx)(Z.Lu, {
                    invoice: eR,
                    newPlan: eM,
                    isPrepaidPaymentSource: eW,
                    referralTrialOfferId: ec
                }),
                eW ? null : (0, l.jsx)(Z.nd, {
                    renewalInvoice: ej,
                    isTrial: eo,
                    priceOptions: z,
                    overrideRenewalDate: k,
                    trialFooterMessageOverride: el,
                    hideSubscriptionDetails: ea
                })
            ]
        });
    }
    let eq = a.M.EEA_COUNTRIES.has(P.Z.ipCountryCodeWithFallback), {
            checkboxLabel: eQ,
            checkboxClassname: e$,
            checkboxLabelClassname: e0
        } = function (e, n, s) {
            let l = null, t = null, i = null;
            if (e && null != n) {
                let {
                        intervalType: e,
                        intervalCount: r
                    } = v.ZP.getIntervalForInvoice(n), a = (0, M.og)((0, M.T4)(n.total, n.currency), e, r), c = null != s ? s : n.subscriptionPeriodEnd;
                l = B.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                    termsURL: U.EYA.TERMS,
                    paidURL: U.EYA.PAID_TERMS,
                    rate: a,
                    renewalDate: c
                }), t = w.trialCheckbox, i = w.trialCheckboxLabel;
            }
            return {
                checkboxLabel: l,
                checkboxClassname: t,
                checkboxLabelClassname: i
            };
        }(null != eo && eo, ej, k), e1 = B.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({ planName: eM.name });
    return ex && !eU ? e1 = B.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : ex && eU ? e1 = '' : (0, v.PV)(eM.id) && (e1 = v.ZP.getBillingReviewSubheader(null, eM)), eY ? null : (0, l.jsxs)('div', {
        className: w.stepBody,
        children: [
            null != et && (0, l.jsxs)('div', {
                className: w.reviewWarningMessageContainer,
                children: [
                    (0, l.jsx)(u.CircleInformationIcon, {
                        size: 'custom',
                        color: o.Z.unsafe_rawColors.YELLOW_300.css,
                        width: 20,
                        height: 20
                    }),
                    (0, l.jsx)(u.Text, {
                        className: w.reviewWarningMessage,
                        variant: 'text-sm/normal',
                        children: et
                    })
                ]
            }),
            W,
            eK && (0, l.jsxs)('div', {
                children: [
                    (0, l.jsx)(R.KU, {
                        negativeMarginTop: !0,
                        negativeMarginBottom: !0
                    }),
                    (0, l.jsx)(y.O, {
                        planOptions: eX,
                        eligibleForMultiMonthPlans: !1,
                        referralTrialOfferId: void 0,
                        selectedPlanId: K,
                        subscriptionPeriodEnd: eV,
                        showTotal: !1,
                        discountInvoiceItems: ev ? null == eZ ? void 0 : eZ.invoiceItems : void 0,
                        handleClose: ed
                    }),
                    (0, l.jsx)(R.KU, {})
                ]
            }),
            !eo && (0, l.jsx)(u.FormTitle, {
                tag: u.FormTitleTags.H5,
                children: e1
            }),
            eU && null != eP && (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(j.Z, {
                        defaultAnimationState: g.S.LOOP,
                        giftStyle: eP,
                        shouldAnimate: !0,
                        className: w.__invalid_giftMainAnimation
                    }),
                    (0, l.jsx)(D.s, { giftRecipient: eh })
                ]
            }),
            Y,
            (0, l.jsxs)('div', {
                className: w.paymentSourceWrapper,
                children: [
                    eo ? (0, l.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        className: w.formTitle,
                        children: B.Z.Messages.BILLING_STEP_PAYMENT_METHOD
                    }) : (0, l.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: B.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                    }),
                    (0, l.jsx)(m.Z, {
                        paymentSources: Object.values(V),
                        selectedPaymentSourceId: ew,
                        prependOption: eH && !eo ? {
                            label: B.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                            value: null
                        } : null,
                        onChange: q,
                        onPaymentSourceAdd: Q,
                        hidePersonalInformation: eB,
                        isTrial: eo
                    }),
                    eH && null == ew ? (0, l.jsx)('div', {
                        className: w.paymentSourceOptionalWarning,
                        children: B.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({ months: ek.length })
                    }) : null,
                    eu ? null : (0, l.jsxs)(d.b, {
                        currencies: X,
                        className: w.currencyWrapper,
                        children: [
                            (0, l.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: B.Z.Messages.PAYMENT_CURRENCY
                            }),
                            (0, l.jsx)(d.Z, {
                                selectedCurrency: z.currency,
                                currencies: X,
                                onChange: J
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(L.Z, {
                isActive: en,
                ref: ee,
                children: (0, l.jsx)(E.Z, {
                    onChange: $,
                    forceShow: !0,
                    checkboxLabel: eQ,
                    checkboxClassname: e$,
                    checkboxLabelClassname: e0,
                    finePrint: null != el ? el : (0, l.jsx)(_.Z, {
                        hide: eo || eu,
                        subscriptionPlan: eM,
                        renewalInvoice: ej,
                        isGift: ex,
                        paymentSourceType: null === (s = V[null != ew ? ew : '']) || void 0 === s ? void 0 : s.type,
                        isEmbeddedIAP: e_,
                        basePrice: (0, v.aS)(eM.id, !1, ex, z)
                    }),
                    showPricingLink: eM.currency !== F.pK.USD,
                    showWithdrawalWaiver: eq,
                    disabled: eC,
                    isTrial: eo && null == el,
                    isDiscount: eu,
                    subscriptionPlan: eM,
                    isGift: ex
                })
            })
        ]
    });
}
