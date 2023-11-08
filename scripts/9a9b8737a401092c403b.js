(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37961"], {
        99836: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                PaymentModalReviewStep: function() {
                    return C
                }
            }), t("222007"), t("70102");
            var i = t("37983"),
                r = t("884691"),
                a = t("627445"),
                s = t.n(a),
                l = t("612039"),
                u = t("916187"),
                o = t("154889"),
                c = t("917247"),
                d = t("527866"),
                p = t("451516"),
                m = t("826795"),
                S = t("659632"),
                P = t("642906"),
                I = t("85336"),
                f = t("310093"),
                E = t("367767"),
                h = t("176108"),
                T = t("298392"),
                y = t("153727"),
                v = t("650484"),
                _ = t("646718"),
                b = t("843455"),
                x = t("782340");

            function C(e) {
                var n, t;
                let a, {
                        handleStepChange: C,
                        trialId: L,
                        trialFooterMessageOverride: N,
                        reviewWarningMessage: g,
                        planGroup: j,
                        openInvoiceId: A,
                        analyticsData: M,
                        analyticsLocation: R,
                        giftMessage: w,
                        customGiftMessage: O,
                        emojiConfetti: F,
                        soundEffect: U,
                        referralTrialOfferId: G,
                        initialPlanId: D,
                        subscriptionTier: B
                    } = e,
                    {
                        activeSubscription: W,
                        setUpdatedSubscription: k,
                        contextMetadata: H,
                        currencies: Y,
                        isGift: V,
                        giftRecipient: z,
                        paymentSourceId: K,
                        paymentSources: Z,
                        priceOptions: Q,
                        purchaseError: J,
                        purchaseTokenAuthState: X,
                        selectedPlan: q,
                        selectedSkuId: $,
                        setCurrency: ee,
                        setPaymentSourceId: en,
                        setPurchaseState: et,
                        setPurchaseError: ei,
                        step: er,
                        purchaseState: ea,
                        isPremium: es,
                        selectedGiftStyle: el,
                        setHasAcceptedTerms: eu,
                        purchaseType: eo,
                        setEntitlementsGranted: ec,
                        startedPaymentFlowWithPaymentSourcesRef: ed
                    } = (0, P.usePaymentContext)();
                s(null != er, "Step should be set");
                let ep = r.useRef(null),
                    [em, eS] = (0, l.default)(!1, 500),
                    eP = null !== (t = null != L ? L : G) && void 0 !== t ? t : null,
                    eI = null != eP && (!es || (0, _.SubscriptionTrials)[eP].skus.includes($)) ? eP : null,
                    ef = (0, c.usePremiumTrialOffer)(G),
                    eE = (0, o.usePremiumDiscountOffer)(),
                    eh = {
                        user_trial_offer_id: null == ef ? void 0 : ef.id
                    };
                r.useEffect(() => {
                    null != J && null != ep.current && ep.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [J]);
                let eT = r.useCallback((e, n) => {
                        k(e), null != n && ec(n), C(I.Step.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: n
                            }
                        })
                    }, [C, k, ec]),
                    ey = null != K ? Z[K] : null,
                    ev = null != q && _.MULTI_MONTH_PLANS.has(q.id) && null != ey && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(ey) ? Error(x.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    e_ = r.useRef(null),
                    [eb, ex] = r.useState(null),
                    eC = !V && null != ef && null != $ && (0, _.SubscriptionTrials)[ef.trial_id].skus.includes($),
                    eL = null == eE ? void 0 : null === (n = eE.discount) || void 0 === n ? void 0 : n.plan_ids,
                    eN = !V && null != eE && null != eL && null != q && eL.includes(q.id),
                    eg = V && (0, S.shouldShowCustomGiftExperience)(z, !0, "PaymentModalReviewStep"),
                    ej = null == D && null == B && eo === b.PurchaseTypes.SUBSCRIPTION,
                    eA = (0, h.inOneStepSubscriptionCheckout)({
                        isTrial: eC,
                        isGift: V,
                        selectedSkuId: $,
                        startedPaymentFlowWithPaymentSources: ed.current
                    });
                return eo === b.PurchaseTypes.ONE_TIME ? a = (0, i.jsx)(T.default, {
                    hasLegalTermsFlash: em,
                    legalTermsNodeRef: e_,
                    onPaymentSourceChange: e => en(null != e ? e.id : null),
                    handlePaymentSourceAdd: () => C(I.Step.ADD_PAYMENT_STEPS)
                }) : null == W || V ? (s(null != q, "Expected plan to be selected"), a = (0, i.jsx)(d.default, {
                    selectedPlanId: q.id,
                    isGift: V,
                    paymentSources: Z,
                    onPaymentSourceChange: e => en(null != e ? e.id : null),
                    priceOptions: Q,
                    currencies: Y,
                    onCurrencyChange: e => ee(e),
                    handlePaymentSourceAdd: () => C(I.Step.ADD_PAYMENT_STEPS),
                    setHasAcceptedTerms: eu,
                    legalTermsNodeRef: e_,
                    hasLegalTermsFlash: em,
                    trialId: eI,
                    trialFooterMessageOverride: N,
                    reviewWarningMessage: g,
                    purchaseState: ea,
                    referralTrialOfferId: G,
                    isTrial: eC,
                    isDiscount: eN
                })) : (s(null != q, "Expected plan to be selected"), a = (0, i.jsx)(m.default, {
                    premiumSubscription: W,
                    paymentSources: Z,
                    priceOptions: Q,
                    onPaymentSourceChange: e => {
                        en(null != e ? e.id : null)
                    },
                    onPaymentSourceAdd: () => {
                        C(I.Step.ADD_PAYMENT_STEPS)
                    },
                    planId: q.id,
                    setHasAcceptedTerms: eu,
                    legalTermsNodeRef: e_,
                    hasLegalTermsFlash: em,
                    onInvoiceError: e => ex(e),
                    planGroup: j,
                    currencies: Y,
                    onCurrencyChange: e => ee(e),
                    hasOpenInvoice: null != A,
                    purchaseState: ea
                })), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(f.GiftNote, {
                        giftMessage: w
                    }), !eg && (0, i.jsx)(y.default, {
                        isEligibleForTrial: eC
                    }), (0, i.jsxs)(v.PaymentPortalBody, {
                        children: [(0, i.jsx)(E.default, {}), a]
                    }), (0, i.jsx)(v.PaymentPortalFooter, {
                        children: (0, i.jsx)(p.default, {
                            premiumSubscription: null != W ? W : null,
                            setPurchaseState: et,
                            onBack: () => eA ? C(I.Step.SKU_SELECT) : C(I.Step.PLAN_SELECT),
                            onNext: eT,
                            onPurchaseError: e => ei(e),
                            legalTermsNodeRef: e_,
                            flashLegalTerms: () => eS(!0),
                            invoiceError: eb,
                            planError: ev,
                            analyticsLocation: R,
                            baseAnalyticsData: M,
                            flowStartTime: H.startTime,
                            isGift: V,
                            giftStyle: el,
                            customGiftMessage: O,
                            emojiConfetti: F,
                            soundEffect: U,
                            trialId: eI,
                            planGroup: j,
                            purchaseTokenAuthState: X,
                            openInvoiceId: A,
                            backButtonEligible: eA ? ej && es : es,
                            metadata: eh,
                            isTrial: eC,
                            disablePurchase: null != ey && eo === b.PurchaseTypes.SUBSCRIPTION && eC && b.IRREDEEMABLE_PAYMENT_SOURCES.has(ey.type)
                        })
                    })]
                })
            }
        },
        310093: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                GiftNote: function() {
                    return c
                }
            });
            var i = t("37983");
            t("884691");
            var r = t("812952"),
                a = t("978679"),
                s = t("659632"),
                l = t("642906"),
                u = t("782340"),
                o = t("588937");

            function c(e) {
                let {
                    giftMessage: n = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT
                } = e, {
                    isGift: t,
                    giftRecipient: c
                } = (0, l.usePaymentContext)();
                return !t || (0, s.shouldShowCustomGiftExperience)(c, !0, "GiftNote") ? null : (0, i.jsx)(r.default, {
                    className: o.paymentNote,
                    iconSize: r.default.Sizes.SMALL,
                    icon: a.default,
                    color: null == n ? r.default.Colors.PRIMARY : r.default.Colors.SECONDARY,
                    children: n
                })
            }
        },
        298392: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return j
                }
            });
            var i = t("37983");
            t("884691");
            var r = t("627445"),
                a = t.n(r),
                s = t("976979"),
                l = t("65597"),
                u = t("77078"),
                o = t("703332"),
                c = t("812952"),
                d = t("740055"),
                p = t("545876"),
                m = t("84460"),
                S = t("883662"),
                P = t("623003"),
                I = t("102985"),
                f = t("160299"),
                E = t("622839"),
                h = t("167726"),
                T = t("953109"),
                y = t("315585"),
                v = t("153160"),
                _ = t("642906"),
                b = t("286350"),
                x = t("49111"),
                C = t("782340"),
                L = t("135878");

            function N(e) {
                let {
                    sku: n,
                    skuPricePreview: t
                } = e;
                a(null != t.amount, "SKU must have a price set.");
                let r = t.amount - t.tax;
                return !t.tax_inclusive && t.tax > 0 ? (0, i.jsxs)(S.PremiumInvoiceTable, {
                    className: L.invoice,
                    children: [(0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: n.name,
                        value: (0, v.formatPrice)(r, t.currency),
                        className: L.subscriptionCostRow
                    }), (0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: C.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, v.formatPrice)(t.tax, t.currency),
                        className: L.subscriptionCostRow
                    }), (0, i.jsx)(S.PremiumInvoiceTableDivider, {}), (0, i.jsx)(S.PremiumInvoiceTableTotalRow, {
                        label: C.default.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, v.formatPrice)(t.amount, t.currency),
                        className: L.subscriptionCostRow
                    })]
                }) : (0, i.jsx)(S.PremiumInvoiceTable, {
                    className: L.invoice,
                    children: (0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: n.name,
                        value: (0, v.formatPrice)(t.amount, t.currency),
                        className: L.subscriptionCostRow
                    })
                })
            }

            function g(e) {
                let {
                    application: n,
                    sku: t,
                    isEmbeddedIAP: r
                } = e;
                return !0 !== r ? null : (0, i.jsxs)("div", {
                    className: L.skuHeading,
                    children: [(0, i.jsx)(T.default, {
                        game: n
                    }), (0, i.jsx)(u.Heading, {
                        variant: "heading-lg/bold",
                        className: L.skuHeadingText,
                        children: t.name
                    })]
                })
            }

            function j(e) {
                let {
                    hasLegalTermsFlash: n,
                    legalTermsNodeRef: t,
                    onPaymentSourceChange: r,
                    handlePaymentSourceAdd: S
                } = e, {
                    application: T,
                    purchaseState: v,
                    paymentSources: j,
                    paymentSourceId: A,
                    setHasAcceptedTerms: M,
                    skusById: R,
                    skuPricePreviewsById: w,
                    selectedSkuId: O,
                    isEmbeddedIAP: F,
                    purchaseType: U
                } = (0, _.usePaymentContext)();
                a(null != O, "Expected selectedSkuId");
                let G = R[O],
                    D = w[O],
                    B = null != A ? A : E.NO_PAYMENT_SOURCE,
                    W = null != D ? D[B] : null;
                a(null != G, "SKU must exist and be fetched."), a(null != T, "Application must exist.");
                let k = (0, l.default)([m.default, h.default], () => h.default.inTestModeForApplication(T.id) || m.default.inDevModeForApplication(T.id), [T.id]),
                    H = (0, l.default)([I.default], () => I.default.enabled),
                    Y = s.CountryCodesSets.EEA_COUNTRIES.has(f.default.ipCountryCodeWithFallback),
                    V = v === b.PurchaseState.PURCHASING || v === b.PurchaseState.COMPLETED,
                    z = null != A ? j[A].type : null;
                return (0, i.jsxs)("div", {
                    className: L.stepBody,
                    children: [k && (0, i.jsx)(c.default, {
                        icon: y.default,
                        iconSize: c.default.Sizes.SMALL,
                        color: c.default.Colors.WARNING,
                        className: L.errorBlock,
                        children: C.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, i.jsx)(g, {
                        application: T,
                        sku: G,
                        isEmbeddedIAP: F
                    }), (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: C.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == W ? (0, i.jsx)(u.Spinner, {
                        type: u.Spinner.Type.WANDERING_CUBES,
                        className: L.invoiceSpinner
                    }) : (0, i.jsx)(N, {
                        sku: G,
                        skuPricePreview: W
                    }), (0, i.jsxs)("div", {
                        className: L.paymentSourceWrapper,
                        children: [(0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: C.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(d.default, {
                            paymentSources: Object.values(j),
                            selectedPaymentSourceId: A,
                            onChange: r,
                            onPaymentSourceAdd: S,
                            hidePersonalInformation: H
                        })]
                    }), (0, i.jsx)(P.default, {
                        isActive: n,
                        ref: t,
                        children: (0, i.jsx)(p.default, {
                            onChange: M,
                            forceShow: !0,
                            showWithdrawalWaiver: Y,
                            disabled: V,
                            subscriptionPlan: null,
                            finePrintClassname: L.fineprint,
                            purchaseType: U,
                            checkboxLabel: G.productLine === x.SKUProductLines.COLLECTIBLES ? C.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: x.MarketingURLs.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, i.jsx)(o.default, {
                                paymentSourceType: z,
                                isEmbeddedIAP: F,
                                purchaseType: U,
                                productLine: G.productLine
                            })
                        })
                    })]
                })
            }
        },
        826795: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return w
                }
            }), t("222007");
            var i = t("37983"),
                r = t("884691"),
                a = t("627445"),
                s = t.n(a),
                l = t("976979"),
                u = t("446674"),
                o = t("77078"),
                c = t("335430"),
                d = t("703332"),
                p = t("740055"),
                m = t("545876"),
                S = t("812204"),
                P = t("685665"),
                I = t("642906"),
                f = t("286350"),
                E = t("176108"),
                h = t("102985"),
                T = t("160299"),
                y = t("10514"),
                v = t("719923"),
                _ = t("380186"),
                b = t("809071"),
                x = t("883662"),
                C = t("991329"),
                L = t("623003"),
                N = t("570727"),
                g = t("146163"),
                j = t("49111"),
                A = t("782340"),
                M = t("709626"),
                R = t("615689");

            function w(e) {
                var n;
                let t, {
                        premiumSubscription: a,
                        paymentSources: S,
                        priceOptions: P,
                        onPaymentSourceChange: b,
                        onPaymentSourceAdd: C,
                        planId: g,
                        setHasAcceptedTerms: M,
                        legalTermsNodeRef: w,
                        hasLegalTermsFlash: D,
                        onInvoiceError: B,
                        planGroup: W,
                        currencies: k,
                        onCurrencyChange: H,
                        hasOpenInvoice: Y,
                        purchaseState: V
                    } = e,
                    {
                        selectedSkuId: z,
                        defaultPlanId: K,
                        selectedGiftStyle: Z,
                        setSelectedGiftStyle: Q,
                        isGift: J,
                        isPremium: X,
                        startedPaymentFlowWithPaymentSourcesRef: q
                    } = (0, I.usePaymentContext)(),
                    $ = P.paymentSourceId,
                    ee = (0, u.useStateFromStores)([y.default], () => y.default.get(g));
                s(null != ee, "Missing newPlan");
                let en = (0, u.useStateFromStores)([h.default], () => h.default.hidePersonalInformation);
                t = Y ? A.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, v.isPremiumSubscriptionPlan)(g) ? (0, v.getBillingReviewSubheader)(a, ee) : A.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: ee.name
                });
                let et = l.CountryCodesSets.EEA_COUNTRIES.has(T.default.ipCountryCodeWithFallback),
                    ei = V === f.PurchaseState.PURCHASING || V === f.PurchaseState.COMPLETED,
                    er = (0, E.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: J,
                        selectedSkuId: z,
                        startedPaymentFlowWithPaymentSources: q.current
                    }),
                    ea = r.useMemo(() => (0, v.getPremiumPlanOptions)({
                        skuId: z,
                        isPremium: X,
                        multiMonthPlans: [],
                        currentSubscription: a,
                        isGift: J,
                        isEligibleForTrial: !1,
                        defaultPlanId: K,
                        defaultToMonthlyPlan: !1
                    }), [z, a, K, X, J]);
                return (0, i.jsxs)("div", {
                    className: R.stepBody,
                    children: [er && (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(x.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, i.jsx)(N.PremiumSwitchPlanSelectBody, {
                            isGift: J,
                            selectedGiftStyle: Z,
                            setSelectedGiftStyle: Q,
                            planOptions: ea,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: g,
                            showTotal: !1
                        }), (0, i.jsx)(x.PremiumInvoiceTableDivider, {})]
                    }), (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: t
                    }), null != a ? Y ? (0, i.jsx)(O, {
                        premiumSubscription: a,
                        onInvoiceError: B,
                        priceOptions: P,
                        preventFetch: !1
                    }) : (0, _.subscriptionCanSwitchImmediately)(a, g, W) ? (0, i.jsx)(F, {
                        premiumSubscription: a,
                        newPlan: ee,
                        onInvoiceError: B,
                        planGroup: W,
                        priceOptions: P,
                        preventFetch: ei
                    }) : (0, i.jsx)(G, {
                        premiumSubscription: a,
                        newPlan: ee,
                        planGroup: W,
                        priceOptions: P,
                        preventFetch: ei
                    }) : null, (0, i.jsxs)("div", {
                        className: R.paymentSourceWrapper,
                        children: [(0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: A.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(p.default, {
                            paymentSources: Object.values(S),
                            selectedPaymentSourceId: $,
                            onChange: b,
                            onPaymentSourceAdd: C,
                            hidePersonalInformation: en,
                            disabled: ei
                        })]
                    }), (0, i.jsxs)(c.CurrencyWrapper, {
                        currencies: k,
                        className: R.currencyWrapper,
                        children: [(0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: A.default.Messages.PAYMENT_CURRENCY
                        }), (0, i.jsx)(c.default, {
                            selectedCurrency: P.currency,
                            currencies: k,
                            onChange: H,
                            disabled: ei
                        })]
                    }), (0, i.jsx)(L.default, {
                        isActive: D,
                        ref: w,
                        children: null != a && (0, _.subscriptionCanSwitchImmediately)(a, g, W) ? (0, i.jsx)(U, {
                            premiumSubscription: a,
                            newPlan: ee,
                            onInvoiceError: B,
                            planGroup: W,
                            priceOptions: P,
                            preventFetch: ei,
                            disabled: ei,
                            isEEA: et,
                            paymentSources: S,
                            setHasAcceptedTerms: M
                        }) : (0, i.jsx)(m.default, {
                            onChange: M,
                            finePrint: (0, i.jsx)(d.default, {
                                subscriptionPlan: ee,
                                paymentSourceType: null === (n = S[null != $ ? $ : ""]) || void 0 === n ? void 0 : n.type,
                                basePrice: (0, v.getPrice)(ee.id, !1, J, P),
                                currentSubscription: a,
                                planGroup: W
                            }),
                            forceShow: !0,
                            showPricingLink: ee.currency !== j.CurrencyCodes.USD,
                            showWithdrawalWaiver: et,
                            disabled: ei,
                            subscriptionPlan: ee,
                            currentSubscription: a,
                            planGroup: W
                        })
                    })]
                })
            }

            function O(e) {
                let {
                    premiumSubscription: n,
                    onInvoiceError: t,
                    priceOptions: a,
                    preventFetch: s
                } = e, [l, u] = (0, b.useGetSubscriptionInvoice)({
                    subscriptionId: n.id,
                    preventFetch: s
                });
                r.useEffect(() => {
                    t(u)
                }, [t, u]);
                let c = (0, v.isPrepaidPaymentSource)(a.paymentSourceId);
                return null != l ? (0, i.jsxs)(x.PremiumInvoiceTable, {
                    className: M.invoice,
                    children: [(0, i.jsx)(g.PremiumSubscriptionCurrentInvoiceRows, {
                        invoice: l,
                        isPrepaidPaymentSource: c
                    }), (0, i.jsx)(g.SubscriptionInvoiceFooter, {
                        premiumSubscription: n,
                        renewalInvoice: l,
                        isUpdate: !0,
                        isPrepaidPaymentSource: c
                    })]
                }) : (0, i.jsx)(o.Spinner, {})
            }

            function F(e) {
                let {
                    premiumSubscription: n,
                    newPlan: t,
                    onInvoiceError: a,
                    planGroup: s,
                    priceOptions: l,
                    preventFetch: u
                } = e, {
                    selectedSkuId: c,
                    isGift: d,
                    startedPaymentFlowWithPaymentSourcesRef: p
                } = (0, I.usePaymentContext)(), {
                    analyticsLocations: m
                } = (0, P.default)(), f = (0, v.getItemsWithUpsertedPlanIdForGroup)(n, t.id, 1, new Set(s)), [h, T] = (0, b.useSubscriptionInvoicePreview)({
                    subscriptionId: n.id,
                    items: f,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: u,
                    analyticsLocations: m,
                    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                }), [y, _] = (0, b.useSubscriptionInvoicePreview)({
                    subscriptionId: n.id,
                    items: f,
                    renewal: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: u,
                    analyticsLocations: m,
                    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                }), C = null != T ? T : _;
                if (r.useEffect(() => {
                        a(C)
                    }, [a, C]), null != C) return (0, i.jsx)(o.FormErrorBlock, {
                    children: C.message
                });
                let L = (0, E.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: d,
                        selectedSkuId: c,
                        startedPaymentFlowWithPaymentSources: p.current
                    }),
                    N = (0, E.planSwitchLoadingShowSpinner)(L, h, t);
                if (null == h || null == y || N) return (0, i.jsx)(o.Spinner, {
                    className: R.spinner
                });
                let j = (0, v.isPrepaidPaymentSource)(l.paymentSourceId);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(g.SubscriptionPeriodResetNotice, {
                        proratedInvoice: h,
                        renewalInvoice: y
                    }), (0, i.jsxs)(x.PremiumInvoiceTable, {
                        className: R.invoice,
                        children: [(0, i.jsx)(x.PremiumInvoiceTableHeader, {
                            children: A.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, i.jsx)(g.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: h,
                            newPlan: t,
                            isPrepaidPaymentSource: j
                        }), (0, i.jsx)(g.SubscriptionInvoiceFooter, {
                            premiumSubscription: n,
                            proratedInvoice: h,
                            renewalInvoice: y,
                            isUpdate: !0,
                            isPrepaidPaymentSource: j
                        })]
                    })]
                })
            }

            function U(e) {
                var n, t;
                let a, {
                        premiumSubscription: s,
                        newPlan: l,
                        onInvoiceError: u,
                        planGroup: c,
                        priceOptions: p,
                        preventFetch: I,
                        disabled: f,
                        isEEA: E,
                        paymentSources: h,
                        setHasAcceptedTerms: T
                    } = e,
                    {
                        analyticsLocations: y
                    } = (0, P.default)(),
                    _ = (0, v.getItemsWithUpsertedPlanIdForGroup)(s, l.id, 1, new Set(c)),
                    [x, C] = (0, b.useSubscriptionInvoicePreview)({
                        subscriptionId: s.id,
                        items: _,
                        renewal: !0,
                        paymentSourceId: p.paymentSourceId,
                        currency: p.currency,
                        preventFetch: I,
                        analyticsLocations: y,
                        analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    });
                return (r.useEffect(() => {
                    u(C)
                }, [u, C]), null != C) ? (0, i.jsx)(o.FormErrorBlock, {
                    children: C.message
                }) : (null != x && (a = {
                    amount: x.total,
                    currency: x.currency,
                    tax: x.tax,
                    taxInclusive: x.taxInclusive
                }), null == a) ? null : (0, i.jsx)(m.default, {
                    onChange: T,
                    finePrint: (0, i.jsx)(d.default, {
                        subscriptionPlan: l,
                        paymentSourceType: null === (n = h[null !== (t = p.paymentSourceId) && void 0 !== t ? t : ""]) || void 0 === n ? void 0 : n.type,
                        basePrice: a,
                        currentSubscription: s,
                        planGroup: c
                    }),
                    forceShow: !0,
                    showPricingLink: l.currency !== j.CurrencyCodes.USD,
                    showWithdrawalWaiver: E,
                    disabled: f,
                    subscriptionPlan: l,
                    currentSubscription: s,
                    planGroup: c
                })
            }

            function G(e) {
                let n, {
                        premiumSubscription: t,
                        newPlan: r,
                        planGroup: a,
                        priceOptions: s,
                        preventFetch: l
                    } = e,
                    {
                        analyticsLocations: u
                    } = (0, P.default)(),
                    [c, d] = (0, b.useSubscriptionInvoicePreview)({
                        subscriptionId: t.id,
                        items: (0, v.getItemsWithUpsertedPlanIdForGroup)(t, r.id, 1, new Set(a)),
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
                n = t.type === j.SubscriptionTypes.PREMIUM ? (0, v.getDisplayName)(r.id) : r.name;
                let p = (0, v.isPrepaidPaymentSource)(s.paymentSourceId);
                return (0, i.jsxs)("div", {
                    className: R.bodyText,
                    children: [(0, i.jsx)("div", {
                        className: M.renewalInvoiceDate,
                        children: A.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: c.subscriptionPeriodStart
                        })
                    }), (0, i.jsxs)(x.PremiumInvoiceTable, {
                        className: R.invoice,
                        children: [(0, i.jsx)(x.PremiumInvoiceTableHeader, {
                            children: A.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, i.jsx)(x.PremiumInvoiceTableRow, {
                            label: n,
                            value: (0, v.getFormattedRateForPlan)(r, s, !0)
                        }), (0, i.jsx)(C.default, {
                            invoice: c
                        }), (0, i.jsx)(x.PremiumInvoiceTableDivider, {}), (0, i.jsx)(g.SubscriptionInvoiceFooter, {
                            premiumSubscription: t,
                            renewalInvoice: c,
                            isUpdate: !0,
                            isPrepaidPaymentSource: p
                        })]
                    })]
                })
            }
        },
        315585: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return a
                }
            });
            var i = t("37983");
            t("884691");
            var r = t("75196");

            function a(e) {
                let {
                    width: n = 14,
                    height: t = 14,
                    color: a = "currentColor",
                    foreground: s,
                    ...l
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: n,
                    height: t,
                    viewBox: "0 0 14 14",
                    children: (0, i.jsx)("path", {
                        className: s,
                        fill: a,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                })
            }
        }
    }
]);