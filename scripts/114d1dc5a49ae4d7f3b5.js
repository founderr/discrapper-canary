(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71518"], {
        315147: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3808a69f670fa9a67284.svg"
        },
        99836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalReviewStep: function() {
                    return N
                }
            }), n("222007"), n("70102");
            var i = n("37983"),
                a = n("884691"),
                s = n("627445"),
                r = n.n(s),
                l = n("612039"),
                o = n("916187"),
                u = n("154889"),
                c = n("917247"),
                d = n("527866"),
                p = n("451516"),
                m = n("826795"),
                S = n("659632"),
                h = n("635357"),
                f = n("642906"),
                P = n("85336"),
                I = n("310093"),
                y = n("367767"),
                v = n("176108"),
                E = n("298392"),
                T = n("153727"),
                x = n("650484"),
                C = n("646718"),
                _ = n("843455"),
                b = n("782340");

            function N(e) {
                var t, n;
                let s, {
                        handleStepChange: N,
                        trialId: L,
                        trialFooterMessageOverride: g,
                        reviewWarningMessage: j,
                        planGroup: A,
                        openInvoiceId: R,
                        analyticsData: M,
                        analyticsLocation: w,
                        referralTrialOfferId: F,
                        initialPlanId: O,
                        subscriptionTier: U
                    } = e,
                    {
                        activeSubscription: G,
                        setUpdatedSubscription: D,
                        contextMetadata: W,
                        currencies: B,
                        paymentSourceId: k,
                        paymentSources: H,
                        priceOptions: V,
                        purchaseError: Y,
                        purchaseTokenAuthState: z,
                        selectedPlan: K,
                        selectedSkuId: Z,
                        setCurrency: Q,
                        setPaymentSourceId: J,
                        setPurchaseState: X,
                        setPurchaseError: q,
                        step: $,
                        purchaseState: ee,
                        isPremium: et,
                        setHasAcceptedTerms: en,
                        purchaseType: ei,
                        setEntitlementsGranted: ea,
                        startedPaymentFlowWithPaymentSourcesRef: es
                    } = (0, f.usePaymentContext)(),
                    {
                        isGift: er,
                        giftMessage: el,
                        giftRecipient: eo
                    } = (0, h.useGiftContext)();
                r(null != $, "Step should be set");
                let eu = a.useRef(null),
                    [ec, ed] = (0, l.default)(!1, 500),
                    ep = null !== (n = null != L ? L : F) && void 0 !== n ? n : null,
                    em = null != ep && (!et || (0, C.SubscriptionTrials)[ep].skus.includes(Z)) ? ep : null,
                    eS = (0, c.usePremiumTrialOffer)(F),
                    eh = (0, u.usePremiumDiscountOffer)(),
                    ef = {
                        user_trial_offer_id: null == eS ? void 0 : eS.id
                    };
                a.useEffect(() => {
                    null != Y && null != eu.current && eu.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [Y]);
                let eP = a.useCallback((e, t) => {
                        D(e), null != t && ea(t), N(P.Step.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: t
                            }
                        })
                    }, [N, D, ea]),
                    eI = null != k ? H[k] : null,
                    ey = null != K && C.MULTI_MONTH_PLANS.has(K.id) && null != eI && !(0, o.isPaymentSourceEligibleForMultiMonthPlans)(eI) ? Error(b.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    ev = a.useRef(null),
                    [eE, eT] = a.useState(null),
                    ex = !er && null != eS && null != Z && (0, C.SubscriptionTrials)[eS.trial_id].skus.includes(Z),
                    eC = null == eh ? void 0 : null === (t = eh.discount) || void 0 === t ? void 0 : t.plan_ids,
                    e_ = !er && null != eh && null != eC && null != K && eC.includes(K.id),
                    eb = er && (0, S.shouldShowCustomGiftExperience)(eo, !0, "PaymentModalReviewStep"),
                    eN = null == O && null == U && ei === _.PurchaseTypes.SUBSCRIPTION,
                    eL = (0, v.inOneStepSubscriptionCheckout)({
                        isTrial: ex,
                        isGift: er,
                        selectedSkuId: Z,
                        startedPaymentFlowWithPaymentSources: es.current
                    });
                return ei === _.PurchaseTypes.ONE_TIME ? s = (0, i.jsx)(E.default, {
                    hasLegalTermsFlash: ec,
                    legalTermsNodeRef: ev,
                    onPaymentSourceChange: e => J(null != e ? e.id : null),
                    handlePaymentSourceAdd: () => N(P.Step.ADD_PAYMENT_STEPS)
                }) : null == G || er ? (r(null != K, "Expected plan to be selected"), s = (0, i.jsx)(d.default, {
                    selectedPlanId: K.id,
                    paymentSources: H,
                    onPaymentSourceChange: e => J(null != e ? e.id : null),
                    priceOptions: V,
                    currencies: B,
                    onCurrencyChange: e => Q(e),
                    handlePaymentSourceAdd: () => N(P.Step.ADD_PAYMENT_STEPS),
                    setHasAcceptedTerms: en,
                    legalTermsNodeRef: ev,
                    hasLegalTermsFlash: ec,
                    trialId: em,
                    trialFooterMessageOverride: g,
                    reviewWarningMessage: j,
                    purchaseState: ee,
                    referralTrialOfferId: F,
                    isTrial: ex,
                    isDiscount: e_
                })) : (r(null != K, "Expected plan to be selected"), s = (0, i.jsx)(m.default, {
                    premiumSubscription: G,
                    paymentSources: H,
                    priceOptions: V,
                    onPaymentSourceChange: e => {
                        J(null != e ? e.id : null)
                    },
                    onPaymentSourceAdd: () => {
                        N(P.Step.ADD_PAYMENT_STEPS)
                    },
                    planId: K.id,
                    setHasAcceptedTerms: en,
                    legalTermsNodeRef: ev,
                    hasLegalTermsFlash: ec,
                    onInvoiceError: e => eT(e),
                    planGroup: A,
                    currencies: B,
                    onCurrencyChange: e => Q(e),
                    hasOpenInvoice: null != R,
                    purchaseState: ee
                })), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(I.GiftNote, {
                        giftMessage: el
                    }), !eb && (0, i.jsx)(T.default, {
                        isEligibleForTrial: ex
                    }), (0, i.jsxs)(x.PaymentPortalBody, {
                        children: [(0, i.jsx)(y.default, {}), s]
                    }), (0, i.jsx)(x.PaymentPortalFooter, {
                        children: (0, i.jsx)(p.default, {
                            premiumSubscription: null != G ? G : null,
                            setPurchaseState: X,
                            onBack: () => eL ? N(P.Step.SKU_SELECT) : N(P.Step.PLAN_SELECT),
                            onNext: eP,
                            onPurchaseError: e => q(e),
                            legalTermsNodeRef: ev,
                            flashLegalTerms: () => ed(!0),
                            invoiceError: eE,
                            planError: ey,
                            analyticsLocation: w,
                            baseAnalyticsData: M,
                            flowStartTime: W.startTime,
                            trialId: em,
                            planGroup: A,
                            purchaseTokenAuthState: z,
                            openInvoiceId: R,
                            backButtonEligible: eL ? eN && et : et,
                            metadata: ef,
                            isTrial: ex,
                            disablePurchase: null != eI && ei === _.PurchaseTypes.SUBSCRIPTION && ex && !eI.canRedeemTrial()
                        })
                    })]
                })
            }
        },
        310093: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftNote: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("812952"),
                s = n("978679"),
                r = n("659632"),
                l = n("635357"),
                o = n("782340"),
                u = n("588937");

            function c(e) {
                let {
                    giftMessage: t = o.default.Messages.PREMIUM_PAYMENT_IS_GIFT
                } = e, {
                    isGift: n,
                    giftRecipient: c
                } = (0, l.useGiftContext)();
                return !n || (0, r.shouldShowCustomGiftExperience)(c, !0, "GiftNote") ? null : (0, i.jsx)(a.default, {
                    className: u.paymentNote,
                    iconSize: a.default.Sizes.SMALL,
                    icon: s.default,
                    color: null == t ? a.default.Colors.PRIMARY : a.default.Colors.SECONDARY,
                    children: t
                })
            }
        },
        298392: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("627445"),
                s = n.n(a),
                r = n("976979"),
                l = n("65597"),
                o = n("77078"),
                u = n("703332"),
                c = n("812952"),
                d = n("740055"),
                p = n("545876"),
                m = n("84460"),
                S = n("210721"),
                h = n("883662"),
                f = n("623003"),
                P = n("65324"),
                I = n("617223"),
                y = n("102985"),
                v = n("160299"),
                E = n("622839"),
                T = n("167726"),
                x = n("953109"),
                C = n("315585"),
                _ = n("659632"),
                b = n("153160"),
                N = n("635357"),
                L = n("642906"),
                g = n("286350"),
                j = n("49111"),
                A = n("782340"),
                R = n("135878");

            function M(e) {
                let {
                    sku: t,
                    skuPricePreview: n
                } = e;
                s(null != n.amount, "SKU must have a price set.");
                let a = n.amount - n.tax;
                return !n.tax_inclusive && n.tax > 0 ? (0, i.jsxs)(h.PremiumInvoiceTable, {
                    className: R.invoice,
                    children: [(0, i.jsx)(h.PremiumInvoiceTableRow, {
                        label: t.name,
                        value: (0, b.formatPrice)(a, n.currency),
                        className: R.subscriptionCostRow
                    }), (0, i.jsx)(h.PremiumInvoiceTableRow, {
                        label: A.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, b.formatPrice)(n.tax, n.currency),
                        className: R.subscriptionCostRow
                    }), (0, i.jsx)(h.PremiumInvoiceTableDivider, {}), (0, i.jsx)(h.PremiumInvoiceTableTotalRow, {
                        label: A.default.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, b.formatPrice)(n.amount, n.currency),
                        className: R.subscriptionCostRow
                    })]
                }) : (0, i.jsx)(h.PremiumInvoiceTable, {
                    className: R.invoice,
                    children: (0, i.jsx)(h.PremiumInvoiceTableRow, {
                        label: t.name,
                        value: (0, b.formatPrice)(n.amount, n.currency),
                        className: R.subscriptionCostRow
                    })
                })
            }

            function w(e) {
                let {
                    application: t,
                    sku: n,
                    isEmbeddedIAP: a
                } = e;
                return !0 !== a ? null : (0, i.jsxs)("div", {
                    className: R.skuHeading,
                    children: [(0, i.jsx)(x.default, {
                        game: t
                    }), (0, i.jsx)(o.Heading, {
                        variant: "heading-lg/bold",
                        className: R.skuHeadingText,
                        children: n.name
                    })]
                })
            }

            function F(e) {
                let {
                    hasLegalTermsFlash: t,
                    legalTermsNodeRef: n,
                    onPaymentSourceChange: a,
                    handlePaymentSourceAdd: h
                } = e, {
                    application: x,
                    purchaseState: b,
                    paymentSources: F,
                    paymentSourceId: O,
                    setHasAcceptedTerms: U,
                    skusById: G,
                    skuPricePreviewsById: D,
                    selectedSkuId: W,
                    isEmbeddedIAP: B,
                    purchaseType: k
                } = (0, L.usePaymentContext)(), {
                    isGift: H,
                    giftRecipient: V,
                    selectedGiftStyle: Y
                } = (0, N.useGiftContext)(), z = H && (0, _.shouldShowCustomGiftExperience)(V, !0, "OneTimePurchaseReview");
                s(null != W, "Expected selectedSkuId");
                let K = G[W],
                    Z = D[W],
                    Q = null != O ? O : E.NO_PAYMENT_SOURCE,
                    J = null != Z ? Z[Q] : null;
                s(null != K, "SKU must exist and be fetched."), s(null != x, "Application must exist.");
                let X = (0, l.default)([m.default, T.default], () => T.default.inTestModeForApplication(x.id) || m.default.inDevModeForApplication(x.id), [x.id]),
                    q = (0, l.default)([y.default], () => y.default.enabled),
                    $ = r.CountryCodesSets.EEA_COUNTRIES.has(v.default.ipCountryCodeWithFallback),
                    ee = b === g.PurchaseState.PURCHASING || b === g.PurchaseState.COMPLETED,
                    et = null != O ? F[O].type : null;
                return (0, i.jsxs)("div", {
                    className: R.stepBody,
                    children: [X && (0, i.jsx)(c.default, {
                        icon: C.default,
                        iconSize: c.default.Sizes.SMALL,
                        color: c.default.Colors.WARNING,
                        className: R.errorBlock,
                        children: A.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, i.jsx)(w, {
                        application: x,
                        sku: K,
                        isEmbeddedIAP: B
                    }), z && null != Y && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: R.giftMainAnimationWrapper,
                            children: (0, i.jsx)(P.default, {
                                defaultAnimationState: S.AnimationState.LOOP,
                                giftStyle: Y,
                                shouldAnimate: !0,
                                className: R.giftMainAnimation
                            })
                        }), (0, i.jsx)(I.SendGiftToUser, {
                            giftRecipient: V
                        })]
                    }), !H && (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: A.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == J ? (0, i.jsx)(o.Spinner, {
                        type: o.Spinner.Type.WANDERING_CUBES,
                        className: R.invoiceSpinner
                    }) : (0, i.jsx)(M, {
                        sku: K,
                        skuPricePreview: J
                    }), (0, i.jsxs)("div", {
                        className: R.paymentSourceWrapper,
                        children: [(0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: A.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(d.default, {
                            paymentSources: Object.values(F),
                            selectedPaymentSourceId: O,
                            onChange: a,
                            onPaymentSourceAdd: h,
                            hidePersonalInformation: q
                        })]
                    }), (0, i.jsx)(f.default, {
                        isActive: t,
                        ref: n,
                        children: (0, i.jsx)(p.default, {
                            onChange: U,
                            forceShow: !0,
                            showWithdrawalWaiver: $,
                            disabled: ee,
                            subscriptionPlan: null,
                            finePrintClassname: R.fineprint,
                            purchaseType: k,
                            isGift: H,
                            checkboxLabel: K.productLine === j.SKUProductLines.COLLECTIBLES ? A.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: j.MarketingURLs.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, i.jsx)(u.default, {
                                paymentSourceType: et,
                                isEmbeddedIAP: B,
                                purchaseType: k,
                                productLine: K.productLine,
                                isGift: H
                            })
                        })
                    })]
                })
            }
        },
        826795: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("627445"),
                r = n.n(s),
                l = n("976979"),
                o = n("446674"),
                u = n("77078"),
                c = n("335430"),
                d = n("703332"),
                p = n("740055"),
                m = n("545876"),
                S = n("812204"),
                h = n("685665"),
                f = n("635357"),
                P = n("642906"),
                I = n("286350"),
                y = n("176108"),
                v = n("102985"),
                E = n("160299"),
                T = n("10514"),
                x = n("719923"),
                C = n("380186"),
                _ = n("809071"),
                b = n("883662"),
                N = n("991329"),
                L = n("623003"),
                g = n("570727"),
                j = n("146163"),
                A = n("49111"),
                R = n("782340"),
                M = n("709626"),
                w = n("615689");

            function F(e) {
                var t;
                let n, {
                        premiumSubscription: s,
                        paymentSources: S,
                        priceOptions: h,
                        onPaymentSourceChange: _,
                        onPaymentSourceAdd: N,
                        planId: j,
                        setHasAcceptedTerms: M,
                        legalTermsNodeRef: F,
                        hasLegalTermsFlash: W,
                        onInvoiceError: B,
                        planGroup: k,
                        currencies: H,
                        onCurrencyChange: V,
                        hasOpenInvoice: Y,
                        purchaseState: z
                    } = e,
                    {
                        selectedSkuId: K,
                        defaultPlanId: Z,
                        isPremium: Q,
                        startedPaymentFlowWithPaymentSourcesRef: J
                    } = (0, P.usePaymentContext)(),
                    {
                        isGift: X
                    } = (0, f.useGiftContext)(),
                    q = h.paymentSourceId,
                    $ = (0, o.useStateFromStores)([T.default], () => T.default.get(j));
                r(null != $, "Missing newPlan");
                let ee = (0, o.useStateFromStores)([v.default], () => v.default.hidePersonalInformation);
                n = Y ? R.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, x.isPremiumSubscriptionPlan)(j) ? (0, x.getBillingReviewSubheader)(s, $) : R.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: $.name
                });
                let et = l.CountryCodesSets.EEA_COUNTRIES.has(E.default.ipCountryCodeWithFallback),
                    en = z === I.PurchaseState.PURCHASING || z === I.PurchaseState.COMPLETED,
                    ei = (0, y.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: X,
                        selectedSkuId: K,
                        startedPaymentFlowWithPaymentSources: J.current
                    }),
                    ea = a.useMemo(() => (0, x.getPremiumPlanOptions)({
                        skuId: K,
                        isPremium: Q,
                        multiMonthPlans: [],
                        currentSubscription: s,
                        isGift: X,
                        isEligibleForTrial: !1,
                        defaultPlanId: Z,
                        defaultToMonthlyPlan: !1
                    }), [K, s, Z, Q, X]);
                return (0, i.jsxs)("div", {
                    className: w.stepBody,
                    children: [ei && (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(b.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, i.jsx)(g.PremiumSwitchPlanSelectBody, {
                            planOptions: ea,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: j,
                            showTotal: !1
                        }), (0, i.jsx)(b.PremiumInvoiceTableDivider, {})]
                    }), (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: n
                    }), null != s ? Y ? (0, i.jsx)(O, {
                        premiumSubscription: s,
                        onInvoiceError: B,
                        priceOptions: h,
                        preventFetch: !1
                    }) : (0, C.subscriptionCanSwitchImmediately)(s, j, k) ? (0, i.jsx)(U, {
                        premiumSubscription: s,
                        newPlan: $,
                        onInvoiceError: B,
                        planGroup: k,
                        priceOptions: h,
                        preventFetch: en
                    }) : (0, i.jsx)(D, {
                        premiumSubscription: s,
                        newPlan: $,
                        planGroup: k,
                        priceOptions: h,
                        preventFetch: en
                    }) : null, (0, i.jsxs)("div", {
                        className: w.paymentSourceWrapper,
                        children: [(0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: R.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(p.default, {
                            paymentSources: Object.values(S),
                            selectedPaymentSourceId: q,
                            onChange: _,
                            onPaymentSourceAdd: N,
                            hidePersonalInformation: ee,
                            disabled: en
                        })]
                    }), (0, i.jsxs)(c.CurrencyWrapper, {
                        currencies: H,
                        className: w.currencyWrapper,
                        children: [(0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: R.default.Messages.PAYMENT_CURRENCY
                        }), (0, i.jsx)(c.default, {
                            selectedCurrency: h.currency,
                            currencies: H,
                            onChange: V,
                            disabled: en
                        })]
                    }), (0, i.jsx)(L.default, {
                        isActive: W,
                        ref: F,
                        children: null != s && (0, C.subscriptionCanSwitchImmediately)(s, j, k) ? (0, i.jsx)(G, {
                            premiumSubscription: s,
                            newPlan: $,
                            onInvoiceError: B,
                            planGroup: k,
                            priceOptions: h,
                            preventFetch: en,
                            disabled: en,
                            isEEA: et,
                            paymentSources: S,
                            setHasAcceptedTerms: M
                        }) : (0, i.jsx)(m.default, {
                            onChange: M,
                            finePrint: (0, i.jsx)(d.default, {
                                subscriptionPlan: $,
                                paymentSourceType: null === (t = S[null != q ? q : ""]) || void 0 === t ? void 0 : t.type,
                                basePrice: (0, x.getPrice)($.id, !1, X, h),
                                currentSubscription: s,
                                planGroup: k
                            }),
                            forceShow: !0,
                            showPricingLink: $.currency !== A.CurrencyCodes.USD,
                            showWithdrawalWaiver: et,
                            disabled: en,
                            subscriptionPlan: $,
                            currentSubscription: s,
                            planGroup: k
                        })
                    })]
                })
            }

            function O(e) {
                let {
                    premiumSubscription: t,
                    onInvoiceError: n,
                    priceOptions: s,
                    preventFetch: r
                } = e, [l, o] = (0, _.useGetSubscriptionInvoice)({
                    subscriptionId: t.id,
                    preventFetch: r
                });
                a.useEffect(() => {
                    n(o)
                }, [n, o]);
                let c = (0, x.isPrepaidPaymentSource)(s.paymentSourceId);
                return null != l ? (0, i.jsxs)(b.PremiumInvoiceTable, {
                    className: M.invoice,
                    children: [(0, i.jsx)(j.PremiumSubscriptionCurrentInvoiceRows, {
                        invoice: l,
                        isPrepaidPaymentSource: c
                    }), (0, i.jsx)(j.SubscriptionInvoiceFooter, {
                        premiumSubscription: t,
                        renewalInvoice: l,
                        isUpdate: !0,
                        isPrepaidPaymentSource: c
                    })]
                }) : (0, i.jsx)(u.Spinner, {})
            }

            function U(e) {
                let {
                    premiumSubscription: t,
                    newPlan: n,
                    onInvoiceError: s,
                    planGroup: r,
                    priceOptions: l,
                    preventFetch: o
                } = e, {
                    selectedSkuId: c,
                    startedPaymentFlowWithPaymentSourcesRef: d
                } = (0, P.usePaymentContext)(), {
                    isGift: p
                } = (0, f.useGiftContext)(), {
                    analyticsLocations: m
                } = (0, h.default)(), I = (0, x.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(r)), [v, E] = (0, _.useSubscriptionInvoicePreview)({
                    subscriptionId: t.id,
                    items: I,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: o,
                    analyticsLocations: m,
                    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                }), [T, C] = (0, _.useSubscriptionInvoicePreview)({
                    subscriptionId: t.id,
                    items: I,
                    renewal: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: o,
                    analyticsLocations: m,
                    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                }), N = null != E ? E : C;
                if (a.useEffect(() => {
                        s(N)
                    }, [s, N]), null != N) return (0, i.jsx)(u.FormErrorBlock, {
                    children: N.message
                });
                let L = (0, y.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: p,
                        selectedSkuId: c,
                        startedPaymentFlowWithPaymentSources: d.current
                    }),
                    g = (0, y.planSwitchLoadingShowSpinner)(L, v, n);
                if (null == v || null == T || g) return (0, i.jsx)(u.Spinner, {
                    className: w.spinner
                });
                let A = (0, x.isPrepaidPaymentSource)(l.paymentSourceId);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(j.SubscriptionPeriodResetNotice, {
                        proratedInvoice: v,
                        renewalInvoice: T
                    }), (0, i.jsxs)(b.PremiumInvoiceTable, {
                        className: w.invoice,
                        children: [(0, i.jsx)(b.PremiumInvoiceTableHeader, {
                            children: R.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, i.jsx)(j.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: v,
                            newPlan: n,
                            isPrepaidPaymentSource: A
                        }), (0, i.jsx)(j.SubscriptionInvoiceFooter, {
                            premiumSubscription: t,
                            proratedInvoice: v,
                            renewalInvoice: T,
                            isUpdate: !0,
                            isPrepaidPaymentSource: A
                        })]
                    })]
                })
            }

            function G(e) {
                var t, n;
                let s, {
                        premiumSubscription: r,
                        newPlan: l,
                        onInvoiceError: o,
                        planGroup: c,
                        priceOptions: p,
                        preventFetch: f,
                        disabled: P,
                        isEEA: I,
                        paymentSources: y,
                        setHasAcceptedTerms: v
                    } = e,
                    {
                        analyticsLocations: E
                    } = (0, h.default)(),
                    T = (0, x.getItemsWithUpsertedPlanIdForGroup)(r, l.id, 1, new Set(c)),
                    [C, b] = (0, _.useSubscriptionInvoicePreview)({
                        subscriptionId: r.id,
                        items: T,
                        renewal: !0,
                        paymentSourceId: p.paymentSourceId,
                        currency: p.currency,
                        preventFetch: f,
                        analyticsLocations: E,
                        analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    });
                return (a.useEffect(() => {
                    o(b)
                }, [o, b]), null != b) ? (0, i.jsx)(u.FormErrorBlock, {
                    children: b.message
                }) : (null != C && (s = {
                    amount: C.total,
                    currency: C.currency,
                    tax: C.tax,
                    taxInclusive: C.taxInclusive
                }), null == s) ? null : (0, i.jsx)(m.default, {
                    onChange: v,
                    finePrint: (0, i.jsx)(d.default, {
                        subscriptionPlan: l,
                        paymentSourceType: null === (t = y[null !== (n = p.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
                        basePrice: s,
                        currentSubscription: r,
                        planGroup: c
                    }),
                    forceShow: !0,
                    showPricingLink: l.currency !== A.CurrencyCodes.USD,
                    showWithdrawalWaiver: I,
                    disabled: P,
                    subscriptionPlan: l,
                    currentSubscription: r,
                    planGroup: c
                })
            }

            function D(e) {
                let t, {
                        premiumSubscription: n,
                        newPlan: a,
                        planGroup: s,
                        priceOptions: r,
                        preventFetch: l
                    } = e,
                    {
                        analyticsLocations: o
                    } = (0, h.default)(),
                    [c, d] = (0, _.useSubscriptionInvoicePreview)({
                        subscriptionId: n.id,
                        items: (0, x.getItemsWithUpsertedPlanIdForGroup)(n, a.id, 1, new Set(s)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: r.paymentSourceId,
                        currency: r.currency,
                        preventFetch: l,
                        analyticsLocations: o,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
                    });
                if (null != d) return (0, i.jsx)(u.FormErrorBlock, {
                    children: d.message
                });
                if (null == c) return (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.Spinner, {})
                });
                t = n.type === A.SubscriptionTypes.PREMIUM ? (0, x.getDisplayName)(a.id) : a.name;
                let p = (0, x.isPrepaidPaymentSource)(r.paymentSourceId);
                return (0, i.jsxs)("div", {
                    className: w.bodyText,
                    children: [(0, i.jsx)("div", {
                        className: M.renewalInvoiceDate,
                        children: R.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: c.subscriptionPeriodStart
                        })
                    }), (0, i.jsxs)(b.PremiumInvoiceTable, {
                        className: w.invoice,
                        children: [(0, i.jsx)(b.PremiumInvoiceTableHeader, {
                            children: R.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, i.jsx)(b.PremiumInvoiceTableRow, {
                            label: t,
                            value: (0, x.getFormattedRateForPlan)(a, r, !0)
                        }), (0, i.jsx)(N.default, {
                            invoice: c
                        }), (0, i.jsx)(b.PremiumInvoiceTableDivider, {}), (0, i.jsx)(j.SubscriptionInvoiceFooter, {
                            premiumSubscription: n,
                            renewalInvoice: c,
                            isUpdate: !0,
                            isPrepaidPaymentSource: p
                        })]
                    })]
                })
            }
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                l = n("446674"),
                o = n("206230"),
                u = n("471671"),
                c = n("629758");
            class d extends a.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: i,
                        pause: a,
                        isWindowFocused: s,
                        useReducedMotion: r
                    } = this.props, [l, {
                        default: o
                    }] = await Promise.all([e(), n.el("230265").then(n.t.bind(n, "230265", 23))]);
                    null != this.animationRef && (this.animation = o.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: l
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (i && !s || a || r) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, i;
                    let {
                        nextScene: a,
                        pauseWhileUnfocused: s,
                        pause: r,
                        isWindowFocused: l,
                        useReducedMotion: o
                    } = this.props;
                    a !== this.currentScene && this.shouldForcePlayAfter() && !r && this.playScene(a), null != this.animation && (s && !e.isWindowFocused && l && !o && !0 !== r ? this.animation.play() : (o || s && e.isWindowFocused && !l) && this.animation.pause()), !e.pause && r ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !r && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== a && r && (this.playScene(a), null === (i = this.animation) || void 0 === i || i.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: i
                    } = this.props, a = n[e], s = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || a.BEG !== s.BEG || a.END !== s.END) && this.animation.playSegments([a.BEG, a.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
                        var r;
                        null === (r = this.animation) || void 0 === r || r.pause()
                    }
                }
                render() {
                    return (0, i.jsx)("div", {
                        ref: this.handleSetRef,
                        className: r(this.props.className, c.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            d.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var p = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, a = (0, l.useStateFromStores)([u.default], () => u.default.isFocused()), s = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion);
                return (0, i.jsx)(d, {
                    ...n,
                    isWindowFocused: a,
                    useReducedMotion: s,
                    ref: t
                })
            }
        },
        315585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("75196");

            function s(e) {
                let {
                    width: t = 14,
                    height: n = 14,
                    color: s = "currentColor",
                    foreground: r,
                    ...l
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 14 14",
                    children: (0, i.jsx)("path", {
                        className: r,
                        fill: s,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                })
            }
        },
        181108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("516555");
            let r = [n("315147")],
                l = ["#FFFFFF"],
                o = 1e3 / 60,
                u = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 0,
                            y: 1
                        },
                        maxValue: {
                            x: 3,
                            y: 3
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        maxValue: {
                            x: 0,
                            y: 0,
                            z: 360
                        },
                        minAddValue: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        maxAddValue: {
                            x: 0,
                            y: 0,
                            z: 5
                        }
                    },
                    size: {
                        type: "static-random",
                        minValue: 2,
                        maxValue: 6
                    },
                    dragCoefficient: {
                        type: "static",
                        value: {
                            x: .05,
                            y: .05
                        }
                    },
                    opacity: {
                        type: "static",
                        value: .3
                    }
                };

            function c(e) {
                let {
                    className: t,
                    firing: n = !0,
                    wind: c = 2
                } = e, [d, p] = a.useState(null), [m, S] = a.useState(null), h = (0, s.useConfettiCannon)(m, d), f = a.useMemo(() => new s.Environment({
                    wind: c
                }), [c]), P = a.useCallback(() => {
                    let e = null == m ? void 0 : m.getCanvas();
                    if (null == e) return;
                    let t = e.getBoundingClientRect();
                    h.createConfetti({
                        ...u,
                        position: {
                            type: "static-random",
                            minValue: {
                                x: -t.width / 2,
                                y: -6
                            },
                            maxValue: {
                                x: t.width,
                                y: -6
                            }
                        }
                    })
                }, [h, m]);
                return a.useEffect(() => {
                    let e = n ? setInterval(P, o) : null;
                    return () => clearInterval(e)
                }, [n, P]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(s.ConfettiCanvas, {
                        ref: S,
                        className: t,
                        environment: f
                    }), (0, i.jsx)(s.SpriteCanvas, {
                        ref: p,
                        colors: l,
                        sprites: r,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);