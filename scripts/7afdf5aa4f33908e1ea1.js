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
                u = (e, t, n, u, s) => {
                    let i = (0, l.useRef)(!1);
                    (0, l.useEffect)(() => {
                        if (t && !i.current) {
                            i.current = !0;
                            let t = setTimeout(() => {
                                let t = Error("".concat(e, " is taking too long to load."));
                                a.default.setExtra({
                                    loadingState: u,
                                    loadingTimeSeconds: n
                                }), a.default.captureException(t, {
                                    ...s,
                                    tags: {
                                        ...null == s ? void 0 : s.tags
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
                s = n("669491"),
                i = n("819855"),
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
                } = e, n = (0, o.default)(), a = (0, i.isThemeDark)(n) ? S : P;
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
                        color: s.default.unsafe_rawColors.YELLOW_300.css
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
                    return b
                },
                PaymentPredicateStep: function() {
                    return D
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                u = n("414456"),
                s = n.n(u),
                i = n("775560"),
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
                N = n("635357"),
                h = n("642906"),
                y = n("85336"),
                R = n("286350"),
                C = n("176108"),
                O = n("254350"),
                g = n("622271"),
                k = n("628738"),
                L = n("650484"),
                x = n("49111"),
                v = n("646718"),
                U = n("760604");

            function b(e) {
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
                    onClose: C,
                    trialId: O,
                    trialFooterMessageOverride: k,
                    reviewWarningMessage: b,
                    planGroup: D = v.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: Y,
                    onSubscriptionConfirmation: G,
                    renderPurchaseConfirmation: H,
                    postSuccessGuild: j,
                    followupSKUInfo: B,
                    renderHeader: w,
                    applicationId: K,
                    guildId: F,
                    referralTrialOfferId: W,
                    skuId: V,
                    shakeWhilePurchasing: z = !1,
                    isLargeModal: X = !1,
                    hideShadow: J = !1,
                    returnRef: q
                } = e, {
                    activitySessionId: Q,
                    purchaseState: Z,
                    setPurchaseState: $,
                    selectedSkuId: ee,
                    setSelectedSkuId: et,
                    selectedPlan: en,
                    setSelectedPlanId: el,
                    setStep: ea,
                    setPurchaseError: eu,
                    paymentAuthenticationState: es,
                    step: ei,
                    contextMetadata: er,
                    purchaseTokenAuthState: eo,
                    activeSubscription: ec,
                    priceOptions: ed,
                    hasPaymentSources: ef,
                    purchaseType: e_
                } = (0, h.usePaymentContext)(), {
                    isGift: eE
                } = (0, N.useGiftContext)(), ep = (0, p.usePremiumDiscountOffer)(), em = null != M && !eE && (0, p.discountOfferHasTier)(ep, M), [eS, eP] = a.useState({
                    load_id: er.loadId,
                    payment_type: x.PurchaseTypeToAnalyticsPaymentType[e_],
                    location: null != n ? n : u,
                    source: r,
                    subscription_type: c,
                    subscription_plan_id: null == en ? void 0 : en.id,
                    is_gift: eE,
                    eligible_for_trial: null != O,
                    location_stack: t,
                    sku_id: V,
                    application_id: K,
                    guild_id: F,
                    payment_modal_version: "v1",
                    activity_session_id: Q,
                    eligible_for_discount: em
                });
                a.useEffect(() => {
                    eP(e => {
                        let t = null != en ? (0, I.getPrice)(en.id, !1, eE, ed) : void 0,
                            n = {
                                ...e,
                                subscription_plan_id: null == en ? void 0 : en.id,
                                price: null == t ? void 0 : t.amount,
                                regular_price: null == en ? void 0 : en.price,
                                currency: ed.currency,
                                sku_id: ee
                            };
                        return n
                    })
                }, [en, ee, eE, ed]), a.useEffect(() => {
                    A.default.track(x.AnalyticEvents.PAYMENT_FLOW_STARTED, {
                        ...eS,
                        has_saved_payment_source: ef
                    })
                }, []), a.useEffect(() => {
                    if (el(E), null != V) et(V);
                    else if (null != E) {
                        var e;
                        et(null === (e = T.default.get(E)) || void 0 === e ? void 0 : e.skuId)
                    }
                }, [el, et, E, V]);
                let eT = (0, i.useStableMemo)(() => Date.now(), [ei]),
                    eM = a.useCallback(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                trackedFromStep: n,
                                analyticsDataOverride: l,
                                fulfillment: a
                            } = t;
                        e === y.Step.CONFIRM && (null == d || d(a)), ea(e), eu(null);
                        let u = null != n ? n : ei,
                            s = Date.now();
                        if (null === u) {
                            A.default.track(x.AnalyticEvents.PAYMENT_FLOW_LOADED, {
                                ...eS,
                                initial_step: e,
                                has_saved_payment_source: ef
                            });
                            return
                        }
                        A.default.track(x.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...eS,
                            ...l,
                            from_step: u,
                            to_step: e === y.Step.ADD_PAYMENT_STEPS ? y.Step.PAYMENT_TYPE : e,
                            step_duration_ms: s - eT,
                            flow_duration_ms: s - er.startTime
                        })
                    }, [eS, er.startTime, d, eu, ea, ei, eT, ef]),
                    eA = a.useMemo(() => () => null == C ? void 0 : C(Z === R.PurchaseState.COMPLETED), [C, Z]);
                (0, m.usePaymentStepForAuthentication)(ei, es, eM), (0, y.usePurchaseStateForStep)(ei, Z, $), (0, S.usePurchaseTokenAuthStep)(ei, eo, eM), (0, _.default)(eA), (0, P.useUnsupportedExternalSubscriptionModalHandler)(ec, () => C(!1), eE), (0, m.usePaymentAuthenticationPoller)(es);
                let eI = (0, g.PaymentModalHeader)({
                    renderHeader: w,
                    referralTrialOfferId: W,
                    handleClose: eA
                });
                return (0, l.jsx)(o.Shaker, {
                    className: U.shaker,
                    isShaking: z && Z === R.PurchaseState.PURCHASING,
                    intensity: 2,
                    children: (0, l.jsx)(o.ModalRoot, {
                        className: s(U.root, {
                            [U.withHeader]: null != eI
                        }),
                        transitionState: f,
                        hideShadow: J,
                        returnRef: q,
                        size: X ? o.ModalSize.LARGE : o.ModalSize.SMALL,
                        children: (0, l.jsx)(L.default, {
                            header: eI,
                            isLargeModal: X,
                            initialPlanId: E,
                            subscriptionTier: M,
                            handleStepChange: eM,
                            handleClose: eA,
                            analyticsData: eS,
                            setAnalyticsData: eP,
                            trialId: O,
                            trialFooterMessageOverride: k,
                            reviewWarningMessage: b,
                            planGroup: D,
                            openInvoiceId: Y,
                            analyticsLocation: n,
                            onSubscriptionConfirmation: G,
                            renderPurchaseConfirmation: H,
                            postSuccessGuild: j,
                            followupSKUInfo: B,
                            referralTrialOfferId: W
                        })
                    })
                })
            }

            function D(e) {
                let {
                    subscriptionTier: t,
                    initialPlanId: n,
                    handleStepChange: u,
                    referralTrialOfferId: s,
                    handleClose: i
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
                } = (0, h.usePaymentContext)(), {
                    isGift: R
                } = (0, N.useGiftContext)(), g = I.current, L = (0, O.default)({
                    isGift: R,
                    skuId: P,
                    referralTrialOfferId: s
                }), {
                    defaultToMonthlyPlan: x
                } = E.TrialRedemptionDefaultPlanExperiment.getCurrentConfig({
                    location: "055ec5_1"
                }, {
                    autoTrackExposure: !1
                }), [U, b] = a.useState(!0), D = (0, r.default)([M.default], () => M.default.applicationIdsFetched.has(v.PREMIUM_SUBSCRIPTION_APPLICATION));
                return (a.useEffect(() => {
                    b(!p || !m || S)
                }, [S, m, p]), (0, d.default)("Payment Modal", U, 5, {
                    hasFetchedSubscriptions: p,
                    hasFetchedSubscriptionPlans: m,
                    currencyLoading: S
                }, {
                    tags: {
                        app_context: "billing"
                    }
                }), a.useEffect(() => {
                    if (!D && (0, c.fetchUserEntitlementsForApplication)(v.PREMIUM_SUBSCRIPTION_APPLICATION), U || _) return;
                    let e = (0, C.inOneStepSubscriptionCheckout)({
                        isTrial: L,
                        isGift: R,
                        selectedSkuId: P,
                        startedPaymentFlowWithPaymentSources: g
                    });
                    if (null != n) u(y.Step.REVIEW);
                    else if (e) {
                        let e = (0, C.getDefaultPlanOneStepCheckout)(P, o, A);
                        T(e), u(y.Step.REVIEW)
                    } else null != t ? u(y.Step.PLAN_SELECT) : u(y.Step.SKU_SELECT)
                }, [o, _, D, n, U, u, t, P, T, x, L, A, R, g]), U) ? (0, l.jsx)(k.default, {}) : _ ? (0, l.jsx)(f.BlockedPaymentsContentModal, {
                    onClose: i
                }) : null
            }
        },
        622271: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalHeader: function() {
                    return A
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("627445"),
                s = n.n(u),
                i = n("77078"),
                r = n("333955"),
                o = n("210721"),
                c = n("154889"),
                d = n("917247"),
                f = n("65324"),
                _ = n("510928"),
                E = n("659632"),
                p = n("635357"),
                m = n("642906"),
                S = n("85336"),
                P = n("646718"),
                T = n("843455"),
                M = n("111735");

            function A(e) {
                var t;
                let {
                    renderHeader: n,
                    referralTrialOfferId: u,
                    handleClose: A
                } = e, {
                    selectedSkuId: I,
                    step: N,
                    selectedPlan: h,
                    purchaseState: y,
                    purchaseType: R
                } = (0, m.usePaymentContext)(), {
                    isGift: C,
                    selectedGiftStyle: O,
                    giftRecipient: g
                } = (0, p.useGiftContext)(), k = C && (0, E.shouldShowCustomGiftExperience)(g, !0, "PaymentModalHeader") && N === S.Step.CONFIRM && null != O, L = null != n && null != N, x = N !== S.Step.SKU_SELECT && null != I, v = (0, d.usePremiumTrialOffer)(u), U = !C && null != v && null != I && (0, P.SubscriptionTrials)[v.trial_id].skus.includes(I), b = (0, c.usePremiumDiscountOffer)(), D = null == b ? void 0 : null === (t = b.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => P.SubscriptionPlanInfo[e].skuId === I), Y = !C && null != b && null != I && D, G = a.useMemo(() => {
                    if (null == N) return;
                    let e = null;
                    if (k) e = (0, l.jsxs)("div", {
                        className: M.container,
                        children: [(0, l.jsx)(f.default, {
                            defaultAnimationState: o.AnimationState.LOOP,
                            giftStyle: O,
                            className: M.seasonalGiftBoxHeaderIcon
                        }), (0, l.jsx)(i.ModalCloseButton, {
                            onClick: A,
                            className: M.closeButton
                        })]
                    });
                    else if (L) e = n(null != h ? h : null, A, N);
                    else if (R === T.PurchaseTypes.ONE_TIME) e = (0, l.jsx)(r.PurchaseHeader, {
                        step: N,
                        onClose: A
                    });
                    else if (x) s(I in P.PremiumSubscriptionSKUToPremiumType, "invalid sku id: ".concat(I)), e = (0, l.jsx)(_.default, {
                        currentStep: null != N ? N : void 0,
                        purchaseState: y,
                        premiumType: P.PremiumSubscriptionSKUToPremiumType[I],
                        onClose: A,
                        showTrialBadge: U,
                        showDiscountBadge: Y,
                        isGift: C,
                        giftRecipient: g
                    });
                    return e
                }, [O, A, y, n, h, I, N, U, Y, k, x, L, R, C, g]);
                return G
            }
        },
        628738: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("840339");

            function s() {
                return (0, l.jsx)(a.Spinner, {
                    className: u.spinner
                })
            }
        },
        176108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                inOneStepSubscriptionCheckout: function() {
                    return u
                },
                planSwitchLoadingShowSpinner: function() {
                    return s
                },
                getDefaultPlanOneStepCheckout: function() {
                    return i
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

            function s(e, t, n) {
                let l = !1;
                if (e && null != t) {
                    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
                    null == e && (l = !0)
                }
                return l
            }

            function i(e, t, n) {
                let u = null != t ? (0, l.getPremiumPlanItem)(t) : null,
                    s = a.PREMIUM_SKU_TO_YEARLY_PLAN[e],
                    i = null != n ? n : s;
                return null != u ? i === u.planId && i === a.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? i = a.PREMIUM_SKU_TO_YEARLY_PLAN[e] : i === u.planId && i === a.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? i = a.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (u.planId === a.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || u.planId === a.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && i === a.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (i = a.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : i === a.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (i = a.SubscriptionPlans.PREMIUM_MONTH_TIER_1), i
            }
        },
        254350: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isInTrialRedemption: function() {
                    return u
                },
                default: function() {
                    return s
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

            function s(e) {
                let {
                    isGift: t,
                    skuId: n,
                    referralTrialOfferId: u
                } = e, s = (0, l.usePremiumTrialOffer)(u);
                return !t && null != s && (0, a.SubscriptionTrials)[s.trial_id].skus.includes(n)
            }
        },
        429070: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePurchaseTokenAuthStep: function() {
                    return s
                }
            });
            var l = n("884691"),
                a = n("85336"),
                u = n("467292");

            function s(e, t, n) {
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
                s = n("10514"),
                i = n("437712"),
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
                let n = (0, a.useStateFromStores)([s.default], () => null != e ? s.default.get(e) : null),
                    u = (0, a.useStateFromStores)([i.default], () => {
                        var e;
                        return null != n && null !== (e = i.default.getForSku(n.skuId)) && void 0 !== e ? e : f
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