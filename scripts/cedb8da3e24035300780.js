(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["60932"], {
        584503: function(e, t, n) {
            "use strict";
            e.exports = n.p + "55fda0412a4ff4072236.svg"
        },
        45656: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f4d8991602d4587f573e.svg"
        },
        856413: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("70102");
            var l = n("884691"),
                a = n("286235"),
                u = (e, t, n, u, i) => {
                    let s = (0, l.useRef)(!1);
                    (0, l.useEffect)(() => {
                        if (t && !s.current) {
                            s.current = !0;
                            let t = setTimeout(() => {
                                let t = Error("".concat(e, " is taking too long to load."));
                                a.default.setExtra({
                                    loadingState: u,
                                    loadingTimeSeconds: n
                                }), a.default.captureException(t, {
                                    ...i,
                                    tags: {
                                        ...null == i ? void 0 : i.tags
                                    }
                                })
                            }, 1e3 * n);
                            return () => {
                                clearTimeout(t)
                            }
                        }
                    }, [t, n])
                }
        },
        245187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedPaymentsContentSettings: function() {
                    return M
                },
                BlockedPaymentsContentModal: function() {
                    return A
                },
                BlockedPaymentsWarning: function() {
                    return I
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                u = n.n(a),
                i = n("669491"),
                s = n("819855"),
                r = n("77078"),
                o = n("841098"),
                c = n("145131"),
                d = n("423487"),
                f = n("701909"),
                _ = n("619935"),
                E = n("49111"),
                p = n("782340"),
                m = n("653842"),
                S = n("584503"),
                P = n("45656");

            function T(e) {
                let {
                    className: t
                } = e, n = (0, o.default)(), a = (0, s.isThemeDark)(n) ? S : P;
                return (0, l.jsxs)("div", {
                    className: u(m.container, t),
                    children: [(0, l.jsx)(r.Heading, {
                        className: m.header,
                        variant: "heading-xl/semibold",
                        children: p.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, l.jsxs)(r.Text, {
                        className: m.description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, l.jsx)("p", {
                            children: p.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, l.jsx)("p", {
                            children: p.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: f.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, l.jsx)("img", {
                        src: a,
                        className: m.splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function M() {
                return (0, l.jsx)(T, {
                    className: m.settings
                })
            }

            function A(e) {
                let {
                    onClose: t
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(r.ModalHeader, {
                        className: m.blockedPaymentsModalHeader,
                        justify: c.default.Justify.END,
                        children: (0, l.jsx)(r.ModalCloseButton, {
                            onClick: t
                        })
                    }), (0, l.jsx)(r.ModalContent, {
                        className: m.blockedPaymentsModalContent,
                        children: (0, l.jsx)(T, {
                            className: m.modal
                        })
                    })]
                })
            }

            function I(e) {
                let {
                    className: t
                } = e, n = (0, _.useBlockedPaymentsConfig)();
                return n ? (0, l.jsxs)(r.Card, {
                    className: u(m.blockedPaymentsWarning, t),
                    type: r.Card.Types.CUSTOM,
                    children: [(0, l.jsx)(d.default, {
                        className: m.blockedPaymentsWarningIcon,
                        color: i.default.unsafe_rawColors.YELLOW_300.css
                    }), (0, l.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: p.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: f.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        996808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691"),
                a = n("913144");

            function u(e) {
                let t = (0, l.useRef)(e);
                (0, l.useEffect)(() => {
                    t.current = e
                }, [e]), (0, l.useEffect)(() => {
                    if (__OVERLAY__) {
                        function e(e) {
                            e.locked && t.current()
                        }
                        return a.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e), () => {
                            a.default.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
                        }
                    }
                }, [])
            }
        },
        385179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModal: function() {
                    return D
                },
                PaymentPredicateStep: function() {
                    return Y
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                u = n("414456"),
                i = n.n(u),
                s = n("775560"),
                r = n("65597"),
                o = n("77078"),
                c = n("251472"),
                d = n("856413"),
                f = n("245187"),
                _ = n("996808"),
                E = n("669073"),
                p = n("154889"),
                m = n("877261"),
                S = n("429070"),
                P = n("661128"),
                T = n("10514"),
                M = n("437712"),
                A = n("599110"),
                I = n("719923"),
                y = n("635357"),
                N = n("642906"),
                h = n("85336"),
                R = n("286350"),
                C = n("359371"),
                g = n("176108"),
                O = n("254350"),
                v = n("622271"),
                k = n("628738"),
                L = n("650484"),
                x = n("49111"),
                U = n("646718"),
                b = n("760604");

            function D(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: n,
                    analyticsObject: u,
                    analyticsSourceLocation: r,
                    analyticsSubscriptionType: c = x.SubscriptionTypes.PREMIUM,
                    onComplete: d,
                    transitionState: f,
                    initialPlanId: E,
                    subscriptionTier: M,
                    onClose: g,
                    trialId: O,
                    trialFooterMessageOverride: k,
                    reviewWarningMessage: D,
                    planGroup: Y = U.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: G,
                    onSubscriptionConfirmation: H,
                    renderPurchaseConfirmation: j,
                    postSuccessGuild: B,
                    followupSKUInfo: w,
                    renderHeader: K,
                    applicationId: F,
                    guildId: W,
                    referralTrialOfferId: V,
                    skuId: z,
                    shakeWhilePurchasing: X = !1,
                    isLargeModal: J = !1,
                    hideShadow: q = !1,
                    returnRef: Q
                } = e, {
                    activitySessionId: Z,
                    purchaseState: $,
                    setPurchaseState: ee,
                    selectedSkuId: et,
                    setSelectedSkuId: en,
                    selectedPlan: el,
                    setSelectedPlanId: ea,
                    setStep: eu,
                    setPurchaseError: ei,
                    paymentAuthenticationState: es,
                    step: er,
                    contextMetadata: eo,
                    purchaseTokenAuthState: ec,
                    activeSubscription: ed,
                    priceOptions: ef,
                    hasPaymentSources: e_,
                    paymentSourceId: eE,
                    paymentSources: ep,
                    purchaseType: em
                } = (0, N.usePaymentContext)(), eS = (0, C.default)(), eP = J || (null == eS ? void 0 : eS.isLargeModal) ? o.ModalSize.LARGE : o.ModalSize.SMALL, {
                    isGift: eT
                } = (0, y.useGiftContext)(), eM = (0, p.usePremiumDiscountOffer)(), eA = null != M && !eT && (0, p.discountOfferHasTier)(eM, M), [eI, ey] = a.useState({
                    load_id: eo.loadId,
                    payment_type: x.PurchaseTypeToAnalyticsPaymentType[em],
                    location: null != n ? n : u,
                    source: r,
                    subscription_type: c,
                    subscription_plan_id: null == el ? void 0 : el.id,
                    is_gift: eT,
                    eligible_for_trial: null != O,
                    location_stack: t,
                    sku_id: z,
                    application_id: F,
                    guild_id: W,
                    payment_modal_version: "v1",
                    activity_session_id: Z,
                    eligible_for_discount: eA
                }), eN = null != eE ? ep[eE] : null;
                a.useEffect(() => {
                    ey(e => {
                        let t = null != el ? (0, I.getPrice)(el.id, !1, eT, ef) : void 0,
                            n = {
                                ...e,
                                subscription_plan_id: null == el ? void 0 : el.id,
                                price: null == t ? void 0 : t.amount,
                                regular_price: null == el ? void 0 : el.price,
                                currency: ef.currency,
                                sku_id: et
                            };
                        return n
                    })
                }, [el, et, eT, ef]), a.useEffect(() => {
                    A.default.track(x.AnalyticEvents.PAYMENT_FLOW_STARTED, {
                        ...eI,
                        has_saved_payment_source: e_
                    })
                }, []), a.useEffect(() => {
                    if (ea(E), null != z) en(z);
                    else if (null != E) {
                        var e;
                        en(null === (e = T.default.get(E)) || void 0 === e ? void 0 : e.skuId)
                    }
                }, [ea, en, E, z]);
                let eh = (0, s.useStableMemo)(() => Date.now(), [er]),
                    eR = a.useCallback(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                trackedFromStep: n,
                                analyticsDataOverride: l,
                                fulfillment: a
                            } = t,
                            u = Date.now();
                        e === h.Step.CONFIRM && (A.default.track(x.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
                            ...eI,
                            duration_ms: u - eo.startTime,
                            payment_source_type: null == eN ? void 0 : eN.type
                        }), null == d || d(a)), eu(e), ei(null);
                        let i = null != n ? n : er;
                        if (null === i) {
                            A.default.track(x.AnalyticEvents.PAYMENT_FLOW_LOADED, {
                                ...eI,
                                initial_step: e,
                                has_saved_payment_source: e_
                            });
                            return
                        }
                        A.default.track(x.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...eI,
                            ...l,
                            from_step: i,
                            to_step: e === h.Step.ADD_PAYMENT_STEPS ? h.Step.PAYMENT_TYPE : e,
                            step_duration_ms: u - eh,
                            flow_duration_ms: u - eo.startTime
                        })
                    }, [eI, eo.startTime, d, ei, eu, er, eh, e_, eN]),
                    eC = a.useMemo(() => () => null == g ? void 0 : g($ === R.PurchaseState.COMPLETED), [g, $]);
                (0, m.usePaymentStepForAuthentication)(er, es, eR), (0, h.usePurchaseStateForStep)(er, $, ee), (0, S.usePurchaseTokenAuthStep)(er, ec, eR), (0, _.default)(eC), (0, P.useUnsupportedExternalSubscriptionModalHandler)(ed, () => g(!1), eT), (0, m.usePaymentAuthenticationPoller)(es);
                let eg = (0, v.PaymentModalHeader)({
                    renderHeader: K,
                    referralTrialOfferId: V,
                    handleClose: eC
                });
                return (0, l.jsx)(o.Shaker, {
                    className: b.shaker,
                    isShaking: X && $ === R.PurchaseState.PURCHASING,
                    intensity: 2,
                    children: (0, l.jsx)(o.ModalRoot, {
                        className: i(b.root, {
                            [b.withHeader]: null != eg
                        }),
                        transitionState: f,
                        hideShadow: q,
                        returnRef: Q,
                        size: eP,
                        children: (0, l.jsx)(L.default, {
                            header: eg,
                            isLargeModal: J || (null == eS ? void 0 : eS.isLargeModal),
                            initialPlanId: E,
                            subscriptionTier: M,
                            handleStepChange: eR,
                            handleClose: eC,
                            analyticsData: eI,
                            setAnalyticsData: ey,
                            trialId: O,
                            trialFooterMessageOverride: k,
                            reviewWarningMessage: D,
                            planGroup: Y,
                            openInvoiceId: G,
                            analyticsLocation: n,
                            onSubscriptionConfirmation: H,
                            renderPurchaseConfirmation: j,
                            postSuccessGuild: B,
                            followupSKUInfo: w,
                            referralTrialOfferId: V
                        })
                    })
                })
            }

            function Y(e) {
                let {
                    subscriptionTier: t,
                    initialPlanId: n,
                    handleStepChange: u,
                    referralTrialOfferId: i,
                    handleClose: s
                } = e, {
                    activeSubscription: o,
                    blockedPayments: _,
                    hasFetchedSubscriptions: p,
                    hasFetchedSubscriptionPlans: m,
                    currencyLoading: S,
                    selectedSkuId: P,
                    setSelectedPlanId: T,
                    defaultPlanId: A,
                    startedPaymentFlowWithPaymentSourcesRef: I
                } = (0, N.usePaymentContext)(), {
                    isGift: R
                } = (0, y.useGiftContext)(), C = I.current, v = (0, O.default)({
                    isGift: R,
                    skuId: P,
                    referralTrialOfferId: i
                }), {
                    defaultToMonthlyPlan: L
                } = E.TrialRedemptionDefaultPlanExperiment.getCurrentConfig({
                    location: "055ec5_1"
                }, {
                    autoTrackExposure: !1
                }), [x, b] = a.useState(!0), D = (0, r.default)([M.default], () => M.default.applicationIdsFetched.has(U.PREMIUM_SUBSCRIPTION_APPLICATION));
                return (a.useEffect(() => {
                    b(!p || !m || S)
                }, [S, m, p]), (0, d.default)("Payment Modal", x, 5, {
                    hasFetchedSubscriptions: p,
                    hasFetchedSubscriptionPlans: m,
                    currencyLoading: S
                }, {
                    tags: {
                        app_context: "billing"
                    }
                }), a.useEffect(() => {
                    if (!D && (0, c.fetchUserEntitlementsForApplication)(U.PREMIUM_SUBSCRIPTION_APPLICATION), x || _) return;
                    let e = (0, g.inOneStepSubscriptionCheckout)({
                        isTrial: v,
                        isGift: R,
                        selectedSkuId: P,
                        startedPaymentFlowWithPaymentSources: C
                    });
                    if (null != n) u(h.Step.REVIEW);
                    else if (e) {
                        let e = (0, g.getDefaultPlanOneStepCheckout)(P, o, A);
                        T(e), u(h.Step.REVIEW)
                    } else null != t ? u(h.Step.PLAN_SELECT) : u(h.Step.SKU_SELECT)
                }, [o, _, D, n, x, u, t, P, T, L, v, A, R, C]), x) ? (0, l.jsx)(k.default, {}) : _ ? (0, l.jsx)(f.BlockedPaymentsContentModal, {
                    onClose: s
                }) : null
            }
        },
        622271: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalHeader: function() {
                    return I
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("627445"),
                i = n.n(u),
                s = n("77078"),
                r = n("333955"),
                o = n("210721"),
                c = n("53253"),
                d = n("154889"),
                f = n("917247"),
                _ = n("65324"),
                E = n("510928"),
                p = n("659632"),
                m = n("635357"),
                S = n("642906"),
                P = n("85336"),
                T = n("646718"),
                M = n("843455"),
                A = n("111735");

            function I(e) {
                var t;
                let {
                    renderHeader: n,
                    referralTrialOfferId: u,
                    handleClose: I
                } = e, {
                    selectedSkuId: y,
                    step: N,
                    selectedPlan: h,
                    purchaseState: R,
                    purchaseType: C
                } = (0, S.usePaymentContext)(), {
                    isGift: g,
                    selectedGiftStyle: O,
                    giftRecipient: v
                } = (0, m.useGiftContext)(), k = g && (0, p.shouldShowCustomGiftExperience)(v, !0, "PaymentModalHeader") && N === P.Step.CONFIRM && null != O, L = null != n && null != N, x = N !== P.Step.SKU_SELECT && null != y, U = (0, f.usePremiumTrialOffer)(u), b = !g && null != U && null != y && (0, T.SubscriptionTrials)[U.trial_id].skus.includes(y), D = (0, d.usePremiumDiscountOffer)(), Y = null == D ? void 0 : null === (t = D.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => T.SubscriptionPlanInfo[e].skuId === y), G = !g && null != D && null != y && Y, {
                    enabled: H
                } = c.default.useExperiment({
                    location: "PaymentModalHeader"
                }, {
                    autoTrackExposure: !1
                }), j = (0, c.useIsSeasonalGiftingActive)(), B = H && j, w = a.useMemo(() => {
                    if (null == N) return;
                    let e = null;
                    if (k) e = (0, l.jsxs)("div", {
                        className: A.container,
                        children: [(0, l.jsx)(_.default, {
                            defaultAnimationState: o.AnimationState.LOOP,
                            giftStyle: O,
                            className: A.seasonalGiftBoxHeaderIcon
                        }), (0, l.jsx)(s.ModalCloseButton, {
                            onClick: I,
                            className: A.closeButton
                        })]
                    });
                    else if (L) e = n(null != h ? h : null, I, N);
                    else if (C === M.PurchaseTypes.ONE_TIME) e = (0, l.jsx)(r.PurchaseHeader, {
                        step: N,
                        onClose: I
                    });
                    else if (x) i(y in T.PremiumSubscriptionSKUToPremiumType, "invalid sku id: ".concat(y)), e = (0, l.jsx)(E.default, {
                        currentStep: null != N ? N : void 0,
                        purchaseState: R,
                        premiumType: T.PremiumSubscriptionSKUToPremiumType[y],
                        onClose: I,
                        showTrialBadge: b,
                        showDiscountBadge: G,
                        isGift: g,
                        giftRecipient: v,
                        useWinterTheme: B
                    });
                    return e
                }, [O, I, R, n, h, y, N, b, G, k, x, L, C, g, v, B]);
                return w
            }
        },
        628738: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("840339");

            function i() {
                return (0, l.jsx)(a.Spinner, {
                    className: u.spinner
                })
            }
        },
        359371: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("642906");

            function a() {
                let {
                    step: e,
                    stepConfigs: t
                } = (0, l.usePaymentContext)(), n = t.find(t => t.key === e);
                return null == n ? void 0 : n.options
            }
        },
        176108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                inOneStepSubscriptionCheckout: function() {
                    return u
                },
                planSwitchLoadingShowSpinner: function() {
                    return i
                },
                getDefaultPlanOneStepCheckout: function() {
                    return s
                }
            });
            var l = n("719923"),
                a = n("646718");

            function u(e) {
                let {
                    isTrial: t,
                    isGift: n,
                    selectedSkuId: l,
                    startedPaymentFlowWithPaymentSources: u
                } = e;
                return !t && !n && null != l && a.ACTIVE_PREMIUM_SKUS.includes(l) && u
            }

            function i(e, t, n) {
                let l = !1;
                if (e && null != t) {
                    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
                    null == e && (l = !0)
                }
                return l
            }

            function s(e, t, n) {
                let u = null != t ? (0, l.getPremiumPlanItem)(t) : null,
                    i = a.PREMIUM_SKU_TO_YEARLY_PLAN[e],
                    s = null != n ? n : i;
                return null != u ? s === u.planId && s === a.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? s = a.PREMIUM_SKU_TO_YEARLY_PLAN[e] : s === u.planId && s === a.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? s = a.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (u.planId === a.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || u.planId === a.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && s === a.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (s = a.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : s === a.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (s = a.SubscriptionPlans.PREMIUM_MONTH_TIER_1), s
            }
        },
        254350: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isInTrialRedemption: function() {
                    return u
                },
                default: function() {
                    return i
                }
            });
            var l = n("917247"),
                a = n("646718");

            function u(e) {
                let {
                    userTrialOffer: t,
                    isGift: n,
                    skuId: l
                } = e;
                return !n && null != t && (0, a.SubscriptionTrials)[t.trial_id].skus.includes(l)
            }

            function i(e) {
                let {
                    isGift: t,
                    skuId: n,
                    referralTrialOfferId: u
                } = e, i = (0, l.usePremiumTrialOffer)(u);
                return !t && null != i && (0, a.SubscriptionTrials)[i.trial_id].skus.includes(n)
            }
        },
        429070: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePurchaseTokenAuthStep: function() {
                    return i
                }
            });
            var l = n("884691"),
                a = n("85336"),
                u = n("467292");

            function i(e, t, n) {
                l.useEffect(() => {
                    null != e && e !== a.Step.AWAITING_PURCHASE_TOKEN_AUTH && t === u.PurchaseTokenAuthState.PENDING ? n(a.Step.AWAITING_PURCHASE_TOKEN_AUTH) : e === a.Step.AWAITING_PURCHASE_TOKEN_AUTH && t === u.PurchaseTokenAuthState.SUCCESS && n(a.Step.REVIEW)
                }, [e, t, n])
            }
        },
        661128: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUnsupportedExternalSubscriptionModalHandler: function() {
                    return d
                },
                useSubscriptionEntitlements: function() {
                    return _
                }
            });
            var l = n("884691"),
                a = n("446674"),
                u = n("404118"),
                i = n("10514"),
                s = n("437712"),
                r = n("719923"),
                o = n("843455"),
                c = n("782340");

            function d(e, t, n) {
                l.useEffect(() => {
                    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (u.default.show({
                        title: c.default.Messages.BILLING_EXTERNAL_HEADER.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway]
                        }),
                        body: c.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway],
                            subscriptionManagementLink: (0, r.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        }),
                        confirmText: c.default.Messages.OKAY
                    }), t())
                }, [e])
            }
            let f = [];

            function _(e, t) {
                let n = (0, a.useStateFromStores)([i.default], () => null != e ? i.default.get(e) : null),
                    u = (0, a.useStateFromStores)([s.default], () => {
                        var e;
                        return null != n && null !== (e = s.default.getForSku(n.skuId)) && void 0 !== e ? e : f
                    }),
                    o = l.useMemo(() => Array.from(u).filter(e => {
                        let {
                            parentId: t,
                            consumed: n
                        } = e;
                        return null != t && !n
                    }), [u]),
                    c = !t && null != n && null != o && o.length >= r.default.getIntervalMonths(n.interval, n.intervalCount);
                return {
                    hasEntitlements: c,
                    entitlements: o
                }
            }
        }
    }
]);