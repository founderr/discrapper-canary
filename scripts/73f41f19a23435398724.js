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
                    return L
                }
            }), n("222007"), n("70102");
            var i = n("37983"),
                a = n("884691"),
                r = n("627445"),
                s = n.n(r),
                l = n("612039"),
                u = n("916187"),
                o = n("154889"),
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

            function L(e) {
                var t, n;
                let r, {
                        handleStepChange: L,
                        trialId: N,
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
                        activeSubscription: D,
                        setUpdatedSubscription: G,
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
                        startedPaymentFlowWithPaymentSourcesRef: er
                    } = (0, f.usePaymentContext)(),
                    {
                        isGift: es,
                        giftMessage: el,
                        giftRecipient: eu
                    } = (0, h.useGiftContext)();
                s(null != $, "Step should be set");
                let eo = a.useRef(null),
                    [ec, ed] = (0, l.default)(!1, 500),
                    ep = null !== (n = null != N ? N : F) && void 0 !== n ? n : null,
                    em = null != ep && (!et || (0, C.SubscriptionTrials)[ep].skus.includes(Z)) ? ep : null,
                    eS = (0, c.usePremiumTrialOffer)(F),
                    eh = (0, o.usePremiumDiscountOffer)(),
                    ef = {
                        user_trial_offer_id: null == eS ? void 0 : eS.id
                    };
                a.useEffect(() => {
                    null != Y && null != eo.current && eo.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [Y]);
                let eP = a.useCallback((e, t) => {
                        G(e), null != t && ea(t), L(P.Step.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: t
                            }
                        })
                    }, [L, G, ea]),
                    eI = null != k ? H[k] : null,
                    ey = null != K && C.MULTI_MONTH_PLANS.has(K.id) && null != eI && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(eI) ? Error(b.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    ev = a.useRef(null),
                    [eE, eT] = a.useState(null),
                    ex = !es && null != eS && null != Z && (0, C.SubscriptionTrials)[eS.trial_id].skus.includes(Z),
                    eC = null == eh ? void 0 : null === (t = eh.discount) || void 0 === t ? void 0 : t.plan_ids,
                    e_ = !es && null != eh && null != eC && null != K && eC.includes(K.id),
                    eb = es && (0, S.shouldShowCustomGiftExperience)(eu, !0, "PaymentModalReviewStep"),
                    eL = null == O && null == U && ei === _.PurchaseTypes.SUBSCRIPTION,
                    eN = (0, v.inOneStepSubscriptionCheckout)({
                        isTrial: ex,
                        isGift: es,
                        selectedSkuId: Z,
                        startedPaymentFlowWithPaymentSources: er.current
                    });
                return ei === _.PurchaseTypes.ONE_TIME ? r = (0, i.jsx)(E.default, {
                    hasLegalTermsFlash: ec,
                    legalTermsNodeRef: ev,
                    onPaymentSourceChange: e => J(null != e ? e.id : null),
                    handlePaymentSourceAdd: () => L(P.Step.ADD_PAYMENT_STEPS)
                }) : null == D || es ? (s(null != K, "Expected plan to be selected"), r = (0, i.jsx)(d.default, {
                    selectedPlanId: K.id,
                    paymentSources: H,
                    onPaymentSourceChange: e => J(null != e ? e.id : null),
                    priceOptions: V,
                    currencies: B,
                    onCurrencyChange: e => Q(e),
                    handlePaymentSourceAdd: () => L(P.Step.ADD_PAYMENT_STEPS),
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
                })) : (s(null != K, "Expected plan to be selected"), r = (0, i.jsx)(m.default, {
                    premiumSubscription: D,
                    paymentSources: H,
                    priceOptions: V,
                    onPaymentSourceChange: e => {
                        J(null != e ? e.id : null)
                    },
                    onPaymentSourceAdd: () => {
                        L(P.Step.ADD_PAYMENT_STEPS)
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
                        children: [(0, i.jsx)(y.default, {}), r]
                    }), (0, i.jsx)(x.PaymentPortalFooter, {
                        children: (0, i.jsx)(p.default, {
                            premiumSubscription: null != D ? D : null,
                            setPurchaseState: X,
                            onBack: () => eN ? L(P.Step.SKU_SELECT) : L(P.Step.PLAN_SELECT),
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
                            backButtonEligible: eN ? eL && et : et,
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
                r = n("978679"),
                s = n("659632"),
                l = n("635357"),
                u = n("782340"),
                o = n("588937");

            function c(e) {
                let {
                    giftMessage: t = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT
                } = e, {
                    isGift: n,
                    giftRecipient: c
                } = (0, l.useGiftContext)();
                return !n || (0, s.shouldShowCustomGiftExperience)(c, !0, "GiftNote") ? null : (0, i.jsx)(a.default, {
                    className: o.paymentNote,
                    iconSize: a.default.Sizes.SMALL,
                    icon: r.default,
                    color: null == t ? a.default.Colors.PRIMARY : a.default.Colors.SECONDARY,
                    children: t
                })
            }
        },
        298392: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("627445"),
                r = n.n(a),
                s = n("976979"),
                l = n("65597"),
                u = n("77078"),
                o = n("703332"),
                c = n("812952"),
                d = n("740055"),
                p = n("545876"),
                m = n("84460"),
                S = n("883662"),
                h = n("623003"),
                f = n("102985"),
                P = n("160299"),
                I = n("622839"),
                y = n("167726"),
                v = n("953109"),
                E = n("315585"),
                T = n("153160"),
                x = n("642906"),
                C = n("286350"),
                _ = n("49111"),
                b = n("782340"),
                L = n("135878");

            function N(e) {
                let {
                    sku: t,
                    skuPricePreview: n
                } = e;
                r(null != n.amount, "SKU must have a price set.");
                let a = n.amount - n.tax;
                return !n.tax_inclusive && n.tax > 0 ? (0, i.jsxs)(S.PremiumInvoiceTable, {
                    className: L.invoice,
                    children: [(0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: t.name,
                        value: (0, T.formatPrice)(a, n.currency),
                        className: L.subscriptionCostRow
                    }), (0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: b.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, T.formatPrice)(n.tax, n.currency),
                        className: L.subscriptionCostRow
                    }), (0, i.jsx)(S.PremiumInvoiceTableDivider, {}), (0, i.jsx)(S.PremiumInvoiceTableTotalRow, {
                        label: b.default.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, T.formatPrice)(n.amount, n.currency),
                        className: L.subscriptionCostRow
                    })]
                }) : (0, i.jsx)(S.PremiumInvoiceTable, {
                    className: L.invoice,
                    children: (0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: t.name,
                        value: (0, T.formatPrice)(n.amount, n.currency),
                        className: L.subscriptionCostRow
                    })
                })
            }

            function g(e) {
                let {
                    application: t,
                    sku: n,
                    isEmbeddedIAP: a
                } = e;
                return !0 !== a ? null : (0, i.jsxs)("div", {
                    className: L.skuHeading,
                    children: [(0, i.jsx)(v.default, {
                        game: t
                    }), (0, i.jsx)(u.Heading, {
                        variant: "heading-lg/bold",
                        className: L.skuHeadingText,
                        children: n.name
                    })]
                })
            }

            function j(e) {
                let {
                    hasLegalTermsFlash: t,
                    legalTermsNodeRef: n,
                    onPaymentSourceChange: a,
                    handlePaymentSourceAdd: S
                } = e, {
                    application: v,
                    purchaseState: T,
                    paymentSources: j,
                    paymentSourceId: A,
                    setHasAcceptedTerms: R,
                    skusById: M,
                    skuPricePreviewsById: w,
                    selectedSkuId: F,
                    isEmbeddedIAP: O,
                    purchaseType: U
                } = (0, x.usePaymentContext)();
                r(null != F, "Expected selectedSkuId");
                let D = M[F],
                    G = w[F],
                    W = null != A ? A : I.NO_PAYMENT_SOURCE,
                    B = null != G ? G[W] : null;
                r(null != D, "SKU must exist and be fetched."), r(null != v, "Application must exist.");
                let k = (0, l.default)([m.default, y.default], () => y.default.inTestModeForApplication(v.id) || m.default.inDevModeForApplication(v.id), [v.id]),
                    H = (0, l.default)([f.default], () => f.default.enabled),
                    V = s.CountryCodesSets.EEA_COUNTRIES.has(P.default.ipCountryCodeWithFallback),
                    Y = T === C.PurchaseState.PURCHASING || T === C.PurchaseState.COMPLETED,
                    z = null != A ? j[A].type : null;
                return (0, i.jsxs)("div", {
                    className: L.stepBody,
                    children: [k && (0, i.jsx)(c.default, {
                        icon: E.default,
                        iconSize: c.default.Sizes.SMALL,
                        color: c.default.Colors.WARNING,
                        className: L.errorBlock,
                        children: b.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, i.jsx)(g, {
                        application: v,
                        sku: D,
                        isEmbeddedIAP: O
                    }), (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: b.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == B ? (0, i.jsx)(u.Spinner, {
                        type: u.Spinner.Type.WANDERING_CUBES,
                        className: L.invoiceSpinner
                    }) : (0, i.jsx)(N, {
                        sku: D,
                        skuPricePreview: B
                    }), (0, i.jsxs)("div", {
                        className: L.paymentSourceWrapper,
                        children: [(0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: b.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(d.default, {
                            paymentSources: Object.values(j),
                            selectedPaymentSourceId: A,
                            onChange: a,
                            onPaymentSourceAdd: S,
                            hidePersonalInformation: H
                        })]
                    }), (0, i.jsx)(h.default, {
                        isActive: t,
                        ref: n,
                        children: (0, i.jsx)(p.default, {
                            onChange: R,
                            forceShow: !0,
                            showWithdrawalWaiver: V,
                            disabled: Y,
                            subscriptionPlan: null,
                            finePrintClassname: L.fineprint,
                            purchaseType: U,
                            checkboxLabel: D.productLine === _.SKUProductLines.COLLECTIBLES ? b.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: _.MarketingURLs.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, i.jsx)(o.default, {
                                paymentSourceType: z,
                                isEmbeddedIAP: O,
                                purchaseType: U,
                                productLine: D.productLine
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
                r = n("627445"),
                s = n.n(r),
                l = n("976979"),
                u = n("446674"),
                o = n("77078"),
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
                L = n("991329"),
                N = n("623003"),
                g = n("570727"),
                j = n("146163"),
                A = n("49111"),
                R = n("782340"),
                M = n("709626"),
                w = n("615689");

            function F(e) {
                var t;
                let n, {
                        premiumSubscription: r,
                        paymentSources: S,
                        priceOptions: h,
                        onPaymentSourceChange: _,
                        onPaymentSourceAdd: L,
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
                    $ = (0, u.useStateFromStores)([T.default], () => T.default.get(j));
                s(null != $, "Missing newPlan");
                let ee = (0, u.useStateFromStores)([v.default], () => v.default.hidePersonalInformation);
                n = Y ? R.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, x.isPremiumSubscriptionPlan)(j) ? (0, x.getBillingReviewSubheader)(r, $) : R.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
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
                        currentSubscription: r,
                        isGift: X,
                        isEligibleForTrial: !1,
                        defaultPlanId: Z,
                        defaultToMonthlyPlan: !1
                    }), [K, r, Z, Q, X]);
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
                    }), (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: n
                    }), null != r ? Y ? (0, i.jsx)(O, {
                        premiumSubscription: r,
                        onInvoiceError: B,
                        priceOptions: h,
                        preventFetch: !1
                    }) : (0, C.subscriptionCanSwitchImmediately)(r, j, k) ? (0, i.jsx)(U, {
                        premiumSubscription: r,
                        newPlan: $,
                        onInvoiceError: B,
                        planGroup: k,
                        priceOptions: h,
                        preventFetch: en
                    }) : (0, i.jsx)(G, {
                        premiumSubscription: r,
                        newPlan: $,
                        planGroup: k,
                        priceOptions: h,
                        preventFetch: en
                    }) : null, (0, i.jsxs)("div", {
                        className: w.paymentSourceWrapper,
                        children: [(0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: R.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(p.default, {
                            paymentSources: Object.values(S),
                            selectedPaymentSourceId: q,
                            onChange: _,
                            onPaymentSourceAdd: L,
                            hidePersonalInformation: ee,
                            disabled: en
                        })]
                    }), (0, i.jsxs)(c.CurrencyWrapper, {
                        currencies: H,
                        className: w.currencyWrapper,
                        children: [(0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: R.default.Messages.PAYMENT_CURRENCY
                        }), (0, i.jsx)(c.default, {
                            selectedCurrency: h.currency,
                            currencies: H,
                            onChange: V,
                            disabled: en
                        })]
                    }), (0, i.jsx)(N.default, {
                        isActive: W,
                        ref: F,
                        children: null != r && (0, C.subscriptionCanSwitchImmediately)(r, j, k) ? (0, i.jsx)(D, {
                            premiumSubscription: r,
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
                                currentSubscription: r,
                                planGroup: k
                            }),
                            forceShow: !0,
                            showPricingLink: $.currency !== A.CurrencyCodes.USD,
                            showWithdrawalWaiver: et,
                            disabled: en,
                            subscriptionPlan: $,
                            currentSubscription: r,
                            planGroup: k
                        })
                    })]
                })
            }

            function O(e) {
                let {
                    premiumSubscription: t,
                    onInvoiceError: n,
                    priceOptions: r,
                    preventFetch: s
                } = e, [l, u] = (0, _.useGetSubscriptionInvoice)({
                    subscriptionId: t.id,
                    preventFetch: s
                });
                a.useEffect(() => {
                    n(u)
                }, [n, u]);
                let c = (0, x.isPrepaidPaymentSource)(r.paymentSourceId);
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
                }) : (0, i.jsx)(o.Spinner, {})
            }

            function U(e) {
                let {
                    premiumSubscription: t,
                    newPlan: n,
                    onInvoiceError: r,
                    planGroup: s,
                    priceOptions: l,
                    preventFetch: u
                } = e, {
                    selectedSkuId: c,
                    startedPaymentFlowWithPaymentSourcesRef: d
                } = (0, P.usePaymentContext)(), {
                    isGift: p
                } = (0, f.useGiftContext)(), {
                    analyticsLocations: m
                } = (0, h.default)(), I = (0, x.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(s)), [v, E] = (0, _.useSubscriptionInvoicePreview)({
                    subscriptionId: t.id,
                    items: I,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: u,
                    analyticsLocations: m,
                    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                }), [T, C] = (0, _.useSubscriptionInvoicePreview)({
                    subscriptionId: t.id,
                    items: I,
                    renewal: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: u,
                    analyticsLocations: m,
                    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                }), L = null != E ? E : C;
                if (a.useEffect(() => {
                        r(L)
                    }, [r, L]), null != L) return (0, i.jsx)(o.FormErrorBlock, {
                    children: L.message
                });
                let N = (0, y.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: p,
                        selectedSkuId: c,
                        startedPaymentFlowWithPaymentSources: d.current
                    }),
                    g = (0, y.planSwitchLoadingShowSpinner)(N, v, n);
                if (null == v || null == T || g) return (0, i.jsx)(o.Spinner, {
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

            function D(e) {
                var t, n;
                let r, {
                        premiumSubscription: s,
                        newPlan: l,
                        onInvoiceError: u,
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
                    T = (0, x.getItemsWithUpsertedPlanIdForGroup)(s, l.id, 1, new Set(c)),
                    [C, b] = (0, _.useSubscriptionInvoicePreview)({
                        subscriptionId: s.id,
                        items: T,
                        renewal: !0,
                        paymentSourceId: p.paymentSourceId,
                        currency: p.currency,
                        preventFetch: f,
                        analyticsLocations: E,
                        analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    });
                return (a.useEffect(() => {
                    u(b)
                }, [u, b]), null != b) ? (0, i.jsx)(o.FormErrorBlock, {
                    children: b.message
                }) : (null != C && (r = {
                    amount: C.total,
                    currency: C.currency,
                    tax: C.tax,
                    taxInclusive: C.taxInclusive
                }), null == r) ? null : (0, i.jsx)(m.default, {
                    onChange: v,
                    finePrint: (0, i.jsx)(d.default, {
                        subscriptionPlan: l,
                        paymentSourceType: null === (t = y[null !== (n = p.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
                        basePrice: r,
                        currentSubscription: s,
                        planGroup: c
                    }),
                    forceShow: !0,
                    showPricingLink: l.currency !== A.CurrencyCodes.USD,
                    showWithdrawalWaiver: I,
                    disabled: P,
                    subscriptionPlan: l,
                    currentSubscription: s,
                    planGroup: c
                })
            }

            function G(e) {
                let t, {
                        premiumSubscription: n,
                        newPlan: a,
                        planGroup: r,
                        priceOptions: s,
                        preventFetch: l
                    } = e,
                    {
                        analyticsLocations: u
                    } = (0, h.default)(),
                    [c, d] = (0, _.useSubscriptionInvoicePreview)({
                        subscriptionId: n.id,
                        items: (0, x.getItemsWithUpsertedPlanIdForGroup)(n, a.id, 1, new Set(r)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: s.paymentSourceId,
                        currency: s.currency,
                        preventFetch: l,
                        analyticsLocations: u,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
                    });
                if (null != d) return (0, i.jsx)(o.FormErrorBlock, {
                    children: d.message
                });
                if (null == c) return (0, i.jsx)("div", {
                    children: (0, i.jsx)(o.Spinner, {})
                });
                t = n.type === A.SubscriptionTypes.PREMIUM ? (0, x.getDisplayName)(a.id) : a.name;
                let p = (0, x.isPrepaidPaymentSource)(s.paymentSourceId);
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
                            value: (0, x.getFormattedRateForPlan)(a, s, !0)
                        }), (0, i.jsx)(L.default, {
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
                r = n("414456"),
                s = n.n(r),
                l = n("446674"),
                u = n("206230"),
                o = n("471671"),
                c = n("629758");
            class d extends a.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: i,
                        pause: a,
                        isWindowFocused: r,
                        useReducedMotion: s
                    } = this.props, [l, {
                        default: u
                    }] = await Promise.all([e(), n.el("230265").then(n.t.bind(n, "230265", 23))]);
                    null != this.animationRef && (this.animation = u.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: l
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (i && !r || a || s) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, i;
                    let {
                        nextScene: a,
                        pauseWhileUnfocused: r,
                        pause: s,
                        isWindowFocused: l,
                        useReducedMotion: u
                    } = this.props;
                    a !== this.currentScene && this.shouldForcePlayAfter() && !s && this.playScene(a), null != this.animation && (r && !e.isWindowFocused && l && !u && !0 !== s ? this.animation.play() : (u || r && e.isWindowFocused && !l) && this.animation.pause()), !e.pause && s ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !s && !u && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== a && s && (this.playScene(a), null === (i = this.animation) || void 0 === i || i.pause())
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
                    } = this.props, a = n[e], r = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || a.BEG !== r.BEG || a.END !== r.END) && this.animation.playSegments([a.BEG, a.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
                        var s;
                        null === (s = this.animation) || void 0 === s || s.pause()
                    }
                }
                render() {
                    return (0, i.jsx)("div", {
                        ref: this.handleSetRef,
                        className: s(this.props.className, c.wrapper)
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
                } = e, a = (0, l.useStateFromStores)([o.default], () => o.default.isFocused()), r = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                return (0, i.jsx)(d, {
                    ...n,
                    isWindowFocused: a,
                    useReducedMotion: r,
                    ref: t
                })
            }
        },
        315585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("75196");

            function r(e) {
                let {
                    width: t = 14,
                    height: n = 14,
                    color: r = "currentColor",
                    foreground: s,
                    ...l
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 14 14",
                    children: (0, i.jsx)("path", {
                        className: s,
                        fill: r,
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
                r = n("516555");
            let s = [n("315147")],
                l = ["#FFFFFF"],
                u = 1e3 / 60,
                o = {
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
                } = e, [d, p] = a.useState(null), [m, S] = a.useState(null), h = (0, r.useConfettiCannon)(m, d), f = a.useMemo(() => new r.Environment({
                    wind: c
                }), [c]), P = a.useCallback(() => {
                    let e = null == m ? void 0 : m.getCanvas();
                    if (null == e) return;
                    let t = e.getBoundingClientRect();
                    h.createConfetti({
                        ...o,
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
                    let e = n ? setInterval(P, u) : null;
                    return () => clearInterval(e)
                }, [n, P]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.ConfettiCanvas, {
                        ref: S,
                        className: t,
                        environment: f
                    }), (0, i.jsx)(r.SpriteCanvas, {
                        ref: p,
                        colors: l,
                        sprites: s,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);