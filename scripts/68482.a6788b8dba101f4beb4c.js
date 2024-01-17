(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["68482"], {
        619025: function(e, t, n) {
            "use strict";
            e.exports = n.p + "aa2afb65f20b2a22447c.svg"
        },
        258925: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c1957de296fc76c595c7.svg"
        },
        40755: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ea00a9ee82d2b42562bd.svg"
        },
        34125: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0443790614dfcd466720.png"
        },
        880865: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c3389d3a16ceea3ef63a.svg"
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        236838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("907002"),
                l = n("65597"),
                r = n("77078"),
                i = n("206230"),
                u = n("812204"),
                o = n("685665"),
                d = n("21526"),
                c = n("393414"),
                _ = n("49111"),
                f = n("782340"),
                E = n("526380"),
                I = n("34125"),
                m = e => {
                    let {
                        onClose: t
                    } = e, {
                        analyticsLocations: n
                    } = (0, o.default)(), m = (0, l.default)([i.default], () => i.default.useReducedMotion), S = (0, a.useSpring)({
                        immediate: m,
                        delay: 800,
                        from: {
                            transform: "translate(0, -100%)"
                        },
                        to: {
                            transform: "translate(0, 0)"
                        }
                    }), p = () => {
                        t(), (0, c.transitionTo)(_.Routes.COLLECTIBLES_SHOP), (0, d.openCollectiblesShop)({
                            openInLayer: !1,
                            analyticsSource: u.default.PREMIUM_PAYMENT_MODAL,
                            analyticsLocations: n
                        })
                    };
                    return (0, s.jsxs)(a.animated.div, {
                        style: S,
                        className: E.container,
                        children: [(0, s.jsx)("img", {
                            className: E.image,
                            src: I,
                            alt: ""
                        }), (0, s.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "header-primary",
                            children: f.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
                                checkItOut: e => (0, s.jsx)(r.Clickable, {
                                    className: E.link,
                                    onClick: p,
                                    children: e
                                }, "COLLECTIBLES_GIFT_CODE_MODAL_UPSELL")
                            })
                        })]
                    })
                }
        },
        307367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("748820"),
                r = n("872717"),
                i = n("850068"),
                u = n("253981"),
                o = n("635357"),
                d = n("642906"),
                c = n("85336"),
                _ = n("149833"),
                f = n("523591"),
                E = n("153727"),
                I = n("650484"),
                m = n("49111"),
                S = n("646718");

            function p(e) {
                let {
                    handleStepChange: t
                } = e, {
                    selectedPlan: n,
                    browserCheckoutState: p,
                    browserCheckoutStateLoadId: P,
                    contextMetadata: T
                } = (0, d.usePaymentContext)(), {
                    isGift: N
                } = (0, o.useGiftContext)(), [M, C] = a.useState(!1);
                return a.useEffect(() => {
                    var e;
                    !M && (C(!0), (0, i.startBrowserCheckout)(T.loadId), ! function(e, t, n, s) {
                        let a = m.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                            i = new URL(u.default.makeUrl(m.Routes.BILLING_LOGIN_HANDOFF)),
                            o = (0, l.v4)();
                        i.searchParams.append("handoff_key", o), i.searchParams.append("redirect_to", a), r.default.post({
                            url: m.Endpoints.HANDOFF,
                            body: {
                                key: o
                            },
                            oldFormErrors: !0
                        }).then(e => {
                            i.searchParams.append("handoff_token", e.body.handoff_token), window.open(i.href)
                        }, () => {
                            s()
                        })
                    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : S.SubscriptionPlans.PREMIUM_MONTH_TIER_2, N, T.loadId, () => t(c.Step.ADD_PAYMENT_STEPS)))
                }, [n, N, M, C, T, t]), a.useEffect(() => {
                    P === T.loadId && p === f.BrowserCheckoutState.DONE && t(c.Step.CONFIRM)
                }, [p, P, T, t]), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(E.default, {}), (0, s.jsx)(I.PaymentPortalBody, {
                        children: (0, s.jsx)(_.AwaitingBrowserCheckoutStepBody, {})
                    }), (0, s.jsx)(I.PaymentPortalFooter, {
                        children: (0, s.jsx)(_.AwaitingBrowserCheckoutStepFooter, {
                            onStepChange: t,
                            onBackClick: () => t(c.Step.PLAN_SELECT)
                        })
                    })]
                })
            }
        },
        263820: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("862205");
            let a = (0, s.createExperiment)({
                kind: "user",
                id: "2023-08_checkout_aa_test",
                label: "Checkout AA Test",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = a
        },
        149833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AwaitingBrowserCheckoutStepBody: function() {
                    return o
                },
                AwaitingBrowserCheckoutStepFooter: function() {
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("177998"),
                r = n("145131"),
                i = n("85336"),
                u = n("782340");
            let o = () => (0, s.jsx)("div", {
                    children: (0, s.jsx)(a.Heading, {
                        variant: "heading-xl/bold",
                        children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
                    })
                }),
                d = e => {
                    let {
                        onStepChange: t,
                        onBackClick: n
                    } = e;
                    return (0, s.jsx)("div", {
                        children: (0, s.jsxs)(a.ModalFooter, {
                            justify: r.default.Justify.BETWEEN,
                            align: r.default.Align.CENTER,
                            children: [(0, s.jsx)(a.Button, {
                                color: a.Button.Colors.BRAND,
                                onClick: () => {
                                    t(i.Step.ADD_PAYMENT_STEPS)
                                },
                                children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
                            }), (0, s.jsx)(l.default, {
                                onClick: n
                            })]
                        })
                    })
                }
        },
        992049: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentConfirmStep: function() {
                    return S
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("627445"),
                r = n.n(l),
                i = n("837148"),
                u = n("491523"),
                o = n("775155"),
                d = n("659632"),
                c = n("380186"),
                _ = n("635357"),
                f = n("642906"),
                E = n("236838"),
                I = n("650484"),
                m = n("367767");

            function S(e) {
                var t, n;
                let l, {
                        handleClose: S,
                        planGroup: p,
                        onSubscriptionConfirmation: P,
                        renderPurchaseConfirmation: T,
                        postSuccessGuild: N,
                        followupSKUInfo: M
                    } = e,
                    {
                        activeSubscription: C,
                        paymentSources: R,
                        paymentSourceId: L,
                        selectedPlan: A,
                        selectedSkuId: g,
                        step: x,
                        updatedSubscription: O,
                        startingPremiumSubscriptionPlanIdRef: h
                    } = (0, f.usePaymentContext)(),
                    {
                        isGift: y,
                        giftRecipient: b,
                        giftCode: U,
                        hasSentMessage: k,
                        isSendingMessage: v,
                        sendGiftMessage: j
                    } = (0, _.useGiftContext)();
                r(null != A, "Expected plan to selected"), r(null != g, "Expected selectedSkuId"), r(null != x, "Step should be set");
                let {
                    successUpsellEnabled: G
                } = (0, i.default)({
                    location: "PremiumPaymentConfirmStep"
                }), D = a.useCallback(() => {
                    S(), null == P || P()
                }, [S, P]);
                return a.useEffect(() => {
                    if (!y || null == b || null == U || k || v || (0, d.shouldShowCustomGiftExperience)(b, !0, "PremiumPaymentConfirmStep")) return;
                    let e = u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
                        location: "36b986_1"
                    }).enabled;
                    e && j({
                        onSubscriptionConfirmation: P
                    })
                }, [j, y, b, U, k, v, P]), l = null != T ? T(A, D, O) : y ? (0, s.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: A.id,
                    onClose: D
                }) : h.current === A.id ? (0, s.jsx)(o.default, {
                    planId: A.id,
                    postSuccessGuild: N,
                    onClose: D,
                    paymentSourceType: null === (t = R[null != L ? L : ""]) || void 0 === t ? void 0 : t.type
                }) : (0, s.jsx)(o.default, {
                    followupSKUInfo: M,
                    startingPremiumSubscriptionPlanId: h.current,
                    planId: A.id,
                    onClose: D,
                    isDowngrade: null != C && (0, c.subscriptionCanDowngrade)(C, A.id, p),
                    paymentSourceType: null === (n = R[null != L ? L : ""]) || void 0 === n ? void 0 : n.type
                }), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(I.PaymentPortalBody, {
                        children: [(0, s.jsx)(m.default, {}), l]
                    }), G && y && (0, s.jsx)(E.default, {
                        onClose: D
                    })]
                })
            }
        },
        646139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentModal: function() {
                    return k
                },
                STEPS: function() {
                    return G
                },
                default: function() {
                    return D
                }
            }), n("70102"), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("446674"),
                r = n("913144"),
                i = n("775433"),
                u = n("812204"),
                o = n("685665"),
                d = n("677156"),
                c = n("10514"),
                _ = n("521012"),
                f = n("659632"),
                E = n("635357"),
                I = n("642906"),
                m = n("85336"),
                S = n("385179"),
                p = n("262683"),
                P = n("946359"),
                T = n("307367"),
                N = n("724269"),
                M = n("99836"),
                C = n("263820"),
                R = n("992049"),
                L = n("176108"),
                A = n("97461"),
                g = n("403365"),
                x = n("498475"),
                O = n("254350"),
                h = n("49111"),
                y = n("646718"),
                b = n("782340");
            let U = [m.Step.PLAN_SELECT, m.Step.ADD_PAYMENT_STEPS, m.Step.REVIEW, m.Step.CONFIRM];

            function k(e) {
                let {
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: l,
                    onComplete: u,
                    transitionState: _,
                    initialPlanId: p,
                    subscriptionTier: P,
                    onClose: T,
                    trialId: N,
                    trialFooterMessageOverride: M,
                    reviewWarningMessage: R,
                    openInvoiceId: L,
                    onSubscriptionConfirmation: A,
                    renderPurchaseConfirmation: g,
                    postSuccessGuild: x,
                    followupSKUInfo: O,
                    renderHeader: b,
                    applicationId: U,
                    guildId: k,
                    referralTrialOfferId: v,
                    skuId: j,
                    returnRef: G
                } = e, {
                    analyticsLocations: D
                } = (0, o.default)();
                a.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && r.default.wait(() => (0, i.fetchPremiumSubscriptionPlans)())
                }, []), C.default.getCurrentConfig({
                    location: "3a6d55_1"
                }, {
                    autoTrackExposure: !0
                });
                let {
                    step: B
                } = (0, I.usePaymentContext)(), {
                    isGift: F,
                    giftMessage: H,
                    giftRecipient: W
                } = (0, E.useGiftContext)(), Y = F && (0, f.shouldShowCustomGiftExperience)(W, !0, "PremiumPaymentModal") && B === m.Step.PLAN_SELECT;
                return null != W && d.CustomGiftExperiment.getCurrentConfig({
                    location: "initialRelease_PremiumPaymentModal"
                }), (0, s.jsx)(S.PaymentModal, {
                    analyticsLocations: D,
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: l,
                    analyticsSubscriptionType: h.SubscriptionTypes.PREMIUM,
                    onComplete: u,
                    transitionState: _,
                    initialPlanId: p,
                    giftMessage: H,
                    subscriptionTier: P,
                    onClose: T,
                    trialId: N,
                    isGift: F,
                    trialFooterMessageOverride: M,
                    reviewWarningMessage: R,
                    planGroup: y.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: L,
                    onSubscriptionConfirmation: A,
                    renderPurchaseConfirmation: g,
                    postSuccessGuild: x,
                    followupSKUInfo: O,
                    renderHeader: b,
                    applicationId: U,
                    guildId: k,
                    referralTrialOfferId: v,
                    skuId: j,
                    shakeWhilePurchasing: !0,
                    isLargeModal: Y,
                    returnRef: G
                })
            }

            function v(e) {
                let {
                    startedPaymentFlowWithPaymentSourcesRef: t,
                    selectedSkuId: n
                } = (0, I.usePaymentContext)(), {
                    isGift: s
                } = (0, E.useGiftContext)();
                return (0, L.inOneStepSubscriptionCheckout)({
                    isTrial: null != e && e,
                    isGift: s,
                    selectedSkuId: n,
                    startedPaymentFlowWithPaymentSources: t.current
                })
            }

            function j(e) {
                let {
                    initialPlanId: t,
                    handleStepChange: n,
                    referralTrialOfferId: a
                } = e, {
                    paymentSources: l,
                    selectedSkuId: r
                } = (0, I.usePaymentContext)(), {
                    isGift: i
                } = (0, E.useGiftContext)(), u = (0, O.default)({
                    isGift: i,
                    skuId: r,
                    referralTrialOfferId: a
                }), o = v(u);
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(p.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: U,
                        onReturn: () => {
                            let e = Object.values(l).length < 1 && null == t ? m.Step.PLAN_SELECT : m.Step.REVIEW;
                            o && (e = m.Step.REVIEW), n(e, {
                                trackedFromStep: m.Step.PAYMENT_TYPE
                            })
                        }
                    })
                })
            }
            let G = [{
                key: null,
                renderStep: e => (0, s.jsx)(S.PaymentPredicateStep, {
                    ...e
                })
            }, {
                key: m.Step.SKU_SELECT,
                renderStep: e => (0, s.jsx)(g.PremiumPaymentSKUSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: m.Step.WHAT_YOU_LOSE,
                renderStep: e => (0, s.jsx)(x.PremiumPaymentWhatYouLoseStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: m.Step.PLAN_SELECT,
                renderStep: e => (0, s.jsx)(A.PremiumPaymentPlanSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = v(e);
                        return t ? null : b.default.Messages.BILLING_STEP_SELECT_PLAN
                    }
                }
            }, {
                key: m.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(j, {
                        ...e
                    })
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = v(e);
                        return t ? null : b.default.Messages.BILLING_STEP_PAYMENT
                    }
                }
            }, {
                key: m.Step.AWAITING_BROWSER_CHECKOUT,
                renderStep: e => (0, s.jsx)(T.default, {
                    ...e
                })
            }, {
                key: m.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, s.jsx)(N.default, {})
            }, {
                key: m.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, s.jsx)(P.default, {})
            }, {
                key: m.Step.REVIEW,
                renderStep: e => (0, s.jsx)(M.PaymentModalReviewStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = v(e);
                        return t ? b.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : b.default.Messages.BILLING_STEP_REVIEW
                    }
                }
            }, {
                key: m.Step.CONFIRM,
                renderStep: e => (0, s.jsx)(R.PremiumPaymentConfirmStep, {
                    ...e
                })
            }];

            function D(e) {
                let t = (0, l.useStateFromStores)([_.default], () => _.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, o.default)(e.analyticsLocations, u.default.PREMIUM_PAYMENT_MODAL),
                    {
                        subscriptionTier: a,
                        isGift: r,
                        giftRecipient: i,
                        giftMessage: d,
                        loadId: c,
                        defaultPlanId: f,
                        referralCode: m
                    } = e;
                if (null != a && !Object.values(y.PremiumSubscriptionSKUs).includes(a)) throw Error("subscriptionTier must be a premium subscription");
                return (0, s.jsx)(n, {
                    children: (0, s.jsx)(I.PaymentContextProvider, {
                        loadId: c,
                        activeSubscription: null != e.subscription ? e.subscription : t,
                        stepConfigs: G,
                        skuIDs: [...y.ACTIVE_PREMIUM_SKUS],
                        isGift: r,
                        defaultPlanId: f,
                        referralCode: m,
                        children: (0, s.jsx)(E.GiftContextProvider, {
                            isGift: r,
                            giftRecipient: null == i ? void 0 : i,
                            giftMessage: d,
                            children: (0, s.jsx)(k, {
                                ...e
                            })
                        })
                    })
                })
            }
        },
        97461: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentPlanSelectStep: function() {
                    return v
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("627445"),
                r = n.n(l),
                i = n("65597"),
                u = n("77078"),
                o = n("856413"),
                d = n("916187"),
                c = n("809071"),
                _ = n("669073"),
                f = n("154889"),
                E = n("917247"),
                I = n("358821"),
                m = n("570727"),
                S = n("697218"),
                p = n("10514"),
                P = n("145131"),
                T = n("659632"),
                N = n("701909"),
                M = n("719923"),
                C = n("635357"),
                R = n("642906"),
                L = n("85336"),
                A = n("153727"),
                g = n("628738"),
                x = n("650484"),
                O = n("310093"),
                h = n("367767"),
                y = n("49111"),
                b = n("646718"),
                U = n("782340"),
                k = n("424650");

            function v(e) {
                var t, n, l;
                let {
                    handleStepChange: v,
                    initialPlanId: j,
                    subscriptionTier: G,
                    trialId: D,
                    referralTrialOfferId: B,
                    handleClose: F
                } = e, {
                    activeSubscription: H,
                    hasFetchedSubscriptions: W,
                    paymentSourceId: Y,
                    paymentSources: w,
                    selectedSkuId: K,
                    selectedPlan: V,
                    step: J,
                    defaultPlanId: Z,
                    priceOptions: q,
                    isPremium: X
                } = (0, R.usePaymentContext)(), {
                    isGift: z,
                    giftRecipient: Q,
                    giftMessage: $
                } = (0, C.useGiftContext)(), ee = null != Y ? w[Y] : null, {
                    newPlans: et
                } = d.default.useExperiment({
                    location: "d17fd6_3"
                }, {
                    autoTrackExposure: !1
                }), en = (0, i.default)([S.default], () => S.default.getCurrentUser()), es = !z && null != K && K === b.PremiumSubscriptionSKUs.TIER_2 && null != en && en.hasHadPremium() && W && null == H && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ee), ea = (0, E.usePremiumTrialOffer)(B), el = !z && null != ea && null != K && (0, b.SubscriptionTrials)[ea.trial_id].skus.includes(K), er = (0, f.usePremiumDiscountOffer)(), ei = null == er ? void 0 : null === (t = er.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => b.SubscriptionPlanInfo[e].skuId === K), eu = !z && null != er && null != K && ei, eo = null !== (n = el || eu) && void 0 !== n && n, {
                    defaultToMonthlyPlan: ed
                } = _.TrialRedemptionDefaultPlanExperiment.useExperiment({
                    location: "d17fd6_4"
                }, {
                    autoTrackExposure: !1
                }), ec = a.useMemo(() => (0, M.getPremiumPlanOptions)({
                    skuId: K,
                    isPremium: X,
                    multiMonthPlans: es ? et : [],
                    currentSubscription: H,
                    isGift: z,
                    isEligibleForTrial: el,
                    defaultPlanId: Z,
                    defaultToMonthlyPlan: ed
                }), [K, X, et, H, es, z, el, Z, ed]), e_ = eu && ec.includes(b.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? b.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ec[0], ef = (0, i.default)([p.default], () => p.default.get(e_)), eE = [{
                    planId: null == ef ? void 0 : ef.id,
                    quantity: 1
                }], [eI, em] = a.useState(eo), [eS, ep] = (0, c.useSubscriptionInvoicePreview)({
                    items: eE,
                    renewal: !1,
                    preventFetch: !eo,
                    applyEntitlements: !0,
                    trialId: D,
                    paymentSourceId: q.paymentSourceId,
                    currency: q.currency
                });
                a.useEffect(() => {
                    eo && em((null == eS ? void 0 : eS.subscriptionPeriodEnd) == null)
                }, [eS, eo]), (0, o.default)("Payment Modal Plan Select Step", eI, 5, {
                    proratedInvoicePreview: eS,
                    proratedInvoiceError: ep,
                    isEligibleForOffer: eo
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                let eP = null !== (l = null == ep ? void 0 : ep.message) && void 0 !== l ? l : U.default.Messages.ERROR_GENERIC_TITLE,
                    eT = eo && null == ep,
                    eN = eo && null != ep;
                return eT && (null == eS ? void 0 : eS.subscriptionPeriodEnd) == null ? (0, s.jsx)(g.default, {}) : (r(null != J, "Step should be set"), r(ec.length > 0, "Premium plan options should be set"), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(O.GiftNote, {
                        giftMessage: $
                    }), !(z && (0, T.shouldShowCustomGiftExperience)(Q, !0, "PremiumPaymentPlanSelectStep")) && (0, s.jsx)(A.default, {
                        isEligibleForTrial: el
                    }), (0, s.jsxs)(x.PaymentPortalBody, {
                        children: [eT && (0, s.jsx)("hr", {
                            className: k.planSelectSeparatorUpper
                        }), (0, s.jsx)(I.default, {
                            isGift: z,
                            plan: V
                        }), (0, s.jsx)(h.default, {}), eN ? (0, s.jsx)(u.FormErrorBlock, {
                            children: eP
                        }) : (0, s.jsx)(m.PremiumSwitchPlanSelectBody, {
                            planOptions: ec,
                            eligibleForMultiMonthPlans: es,
                            referralTrialOfferId: B,
                            selectedPlanId: null == V ? void 0 : V.id,
                            subscriptionPeriodEnd: null == eS ? void 0 : eS.subscriptionPeriodEnd,
                            discountInvoiceItems: eu ? null == eS ? void 0 : eS.invoiceItems : void 0,
                            handleClose: F
                        }), eT && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("hr", {
                                className: k.planSelectSeparatorLower
                            }), (0, s.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                children: U.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: N.default.getArticleURL(y.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, s.jsx)(x.PaymentPortalFooter, {
                        children: (0, s.jsx)(u.ModalFooter, {
                            justify: P.default.Justify.BETWEEN,
                            align: P.default.Align.CENTER,
                            children: (0, s.jsx)(m.PremiumSwitchPlanSelectFooter, {
                                onStepChange: v,
                                onBackClick: () => v(L.Step.SKU_SELECT),
                                showBackButton: null == j && null == G,
                                planOptions: ec,
                                shouldRenderUpdatedPaymentModal: eT,
                                isTrial: el
                            })
                        })
                    })]
                }))
            }
        },
        403365: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentSKUSelectStep: function() {
                    return S
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("917247"),
                r = n("279171"),
                i = n("49735"),
                u = n("719923"),
                o = n("635357"),
                d = n("642906"),
                c = n("85336"),
                _ = n("176108"),
                f = n("254350"),
                E = n("646718"),
                I = n("782340"),
                m = n("600465");

            function S(e) {
                let {
                    handleStepChange: t,
                    handleClose: n,
                    referralTrialOfferId: a
                } = e, {
                    setSelectedSkuId: r,
                    activeSubscription: i,
                    startedPaymentFlowWithPaymentSourcesRef: I,
                    setSelectedPlanId: m
                } = (0, d.usePaymentContext)(), {
                    isGift: S
                } = (0, o.useGiftContext)(), P = (0, l.usePremiumTrialOffer)(a);
                return (0, s.jsx)(p, {
                    selectSku: e => (function(e) {
                        let {
                            activeSubscription: t,
                            newSkuId: n,
                            setSelectedSkuId: s,
                            handleStepChange: a,
                            isGift: l,
                            userTrialOffer: r,
                            setSelectedPlanId: i,
                            startedPaymentFlowWithPaymentSources: o
                        } = e;
                        s(n);
                        let d = c.Step.PLAN_SELECT,
                            I = (0, u.getPremiumSkuIdForSubscription)(t);
                        (I === E.PremiumSubscriptionSKUs.TIER_1 || I === E.PremiumSubscriptionSKUs.TIER_2) && n === E.PremiumSubscriptionSKUs.TIER_0 && !l && (d = c.Step.WHAT_YOU_LOSE);
                        let m = (0, f.isInTrialRedemption)({
                                userTrialOffer: r,
                                isGift: l,
                                skuId: n
                            }),
                            S = (0, _.inOneStepSubscriptionCheckout)({
                                isTrial: m,
                                isGift: l,
                                selectedSkuId: n,
                                startedPaymentFlowWithPaymentSources: o
                            });
                        if (d !== c.Step.WHAT_YOU_LOSE && S) {
                            d = c.Step.REVIEW;
                            let e = (0, _.getDefaultPlanOneStepCheckout)(n, t);
                            i(e)
                        }
                        a(d, {
                            analyticsDataOverride: {
                                sku_id: n
                            }
                        })
                    })({
                        activeSubscription: i,
                        newSkuId: e,
                        setSelectedSkuId: r,
                        handleStepChange: t,
                        isGift: S,
                        userTrialOffer: P,
                        startedPaymentFlowWithPaymentSources: I.current,
                        setSelectedPlanId: m
                    }),
                    onClose: n,
                    isGift: S
                })
            }

            function p(e) {
                let {
                    selectSku: t,
                    onClose: n,
                    isGift: l
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(a.ModalHeader, {
                        className: m.skuSelectModalHeader,
                        separator: !1,
                        children: [(0, s.jsx)(a.FormTitle, {
                            tag: a.FormTitleTags.H4,
                            children: I.default.Messages.BILLING_STEP_SELECT_PLAN
                        }), (0, s.jsx)(a.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, s.jsxs)(a.ModalContent, {
                        className: m.skuSelectModalContent,
                        children: [(0, s.jsx)(r.default, {
                            fromBoostCancelModal: !1,
                            className: m.legacyPricingNotice
                        }), (0, s.jsx)(i.default, {
                            onSelectSku: t,
                            isGift: l
                        })]
                    })]
                })
            }
        },
        498475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentWhatYouLoseStep: function() {
                    return S
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("627445"),
                l = n.n(a),
                r = n("819855"),
                i = n("77078"),
                u = n("841098"),
                o = n("360262"),
                d = n("719923"),
                c = n("635357"),
                _ = n("642906"),
                f = n("85336"),
                E = n("176108"),
                I = n("782340"),
                m = n("943490");

            function S(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, a = (0, u.default)(), {
                    activeSubscription: S,
                    selectedSkuId: p,
                    setSelectedPlanId: P,
                    startedPaymentFlowWithPaymentSourcesRef: T
                } = (0, _.usePaymentContext)(), {
                    isGift: N
                } = (0, c.useGiftContext)(), M = null != S ? (0, d.getPremiumPlanItem)(S) : null, C = null != M ? (0, d.getDisplayPremiumType)(M.planId) : null, R = null != M ? (0, d.getPremiumType)(M.planId) : null, L = (0, E.inOneStepSubscriptionCheckout)({
                    isTrial: !1,
                    isGift: N,
                    selectedSkuId: p,
                    startedPaymentFlowWithPaymentSources: T.current
                });
                return l(null != R, "Expected premium type"), (0, s.jsx)(o.default, {
                    premiumType: R,
                    titleText: I.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: I.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: C
                    }),
                    footer: (0, s.jsxs)("div", {
                        className: m.whatYouLoseButtonContainer,
                        children: [(0, s.jsx)(i.Button, {
                            onClick: () => {
                                if (L) {
                                    let e = (0, E.getDefaultPlanOneStepCheckout)(p, S);
                                    P(e), t(f.Step.REVIEW)
                                } else t(f.Step.PLAN_SELECT)
                            },
                            children: I.default.Messages.CONTINUE
                        }), (0, s.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: (0, r.isThemeDark)(a) ? i.Button.Colors.WHITE : i.Button.Colors.PRIMARY,
                            onClick: n,
                            children: I.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                        })]
                    }),
                    onClose: n,
                    isDowngrade: !0
                })
            }
        },
        491523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomatedGiftCodeMessageExperiment: function() {
                    return a
                }
            });
            var s = n("862205");
            let a = (0, s.createExperiment)({
                kind: "user",
                id: "2023-07_automated_gift_code_message",
                label: "Automatically send gift code message in direct message to gift recipient",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show the automated gift code message",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        677156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CustomGiftExperiment: function() {
                    return a
                }
            });
            var s = n("862205");
            let a = (0, s.createExperiment)({
                kind: "user",
                id: "2023-08_custom_gift",
                label: "Custom Gift Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show gift purchaser custom gift flow",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        358821: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("641078"),
                l = n("132554"),
                r = n("646718"),
                i = n("782340"),
                u = n("880865"),
                o = e => {
                    let {
                        isGift: t,
                        plan: n
                    } = e, o = (0, a.useIsEligibleForBogoPromotion)();
                    return t || (null == n ? void 0 : n.skuId) !== r.PremiumSubscriptionSKUs.TIER_2 || !o ? null : (0, s.jsx)(l.default, {
                        copy: i.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
                        bannerImage: u
                    })
                }
        },
        49735: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("400307"),
                r = n("646718"),
                i = n("414539");

            function u(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, s.jsx)(a.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, s.jsx)(l.Tier2Card, {
                        className: i.tier2MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: n,
                        isModal: !0
                    })
                })
            }

            function o(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, s.jsx)(a.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, s.jsx)(l.Tier0Card, {
                        className: i.tier0MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: n
                    })
                })
            }
            var d = function(e) {
                let {
                    onSelectSku: t,
                    isGift: n
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(u, {
                        onClick: () => t(r.PremiumSubscriptionSKUs.TIER_2),
                        isGift: n
                    }), (0, s.jsx)(o, {
                        onClick: () => t(r.PremiumSubscriptionSKUs.TIER_0),
                        isGift: n
                    })]
                })
            }
        },
        775155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                },
                PremiumSubscriptionGiftPurchaseConfirmation: function() {
                    return C
                }
            }), n("222007"), n("70102");
            var s = n("37983"),
                a = n("884691"),
                l = n("627445"),
                r = n.n(l),
                i = n("446674"),
                u = n("77078"),
                o = n("465527"),
                d = n("635357"),
                c = n("891865"),
                _ = n("353365"),
                f = n("10514"),
                E = n("552712"),
                I = n("719923"),
                m = n("977934"),
                S = n("646718"),
                p = n("49111"),
                P = n("782340"),
                T = n("535539");

            function N(e) {
                var t, n;
                let a, {
                        planId: l,
                        startingPremiumSubscriptionPlanId: u,
                        paymentSourceType: o
                    } = e,
                    [d, c] = (0, i.useStateFromStoresArray)([f.default], () => [f.default.get(u), f.default.get(l)]);
                if (r(null != d && null != c, "Missing startingPlan or newPlan"), t = u, n = l, S.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t) < S.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(n)) switch (l) {
                        case S.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                            a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, p.DELAYED_PAYMENTS.has(null != o ? o : p.PaymentSourceTypes.UNKNOWN) && (a = P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
                            break;
                        case S.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                            a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, p.DELAYED_PAYMENTS.has(null != o ? o : p.PaymentSourceTypes.UNKNOWN) && (a = P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
                            break;
                        case S.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                            a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, p.DELAYED_PAYMENTS.has(null != o ? o : p.PaymentSourceTypes.UNKNOWN) && (a = P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
                            break;
                        case S.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                            a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: S.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                            }), p.DELAYED_PAYMENTS.has(null != o ? o : p.PaymentSourceTypes.UNKNOWN) && (a = P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: S.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                            }));
                            break;
                        case S.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
                        case S.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                            a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
                            break;
                        case S.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                        case S.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                            a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                            break;
                        default:
                            throw Error("Unexpected planId: ".concat(l))
                    } else if (d.skuId === S.PremiumSubscriptionSKUs.TIER_2 && c.skuId === S.PremiumSubscriptionSKUs.TIER_1) a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
                    else switch (c.skuId) {
                        case S.PremiumSubscriptionSKUs.TIER_0:
                            a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                            break;
                        case S.PremiumSubscriptionSKUs.TIER_1:
                            a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
                            break;
                        case S.PremiumSubscriptionSKUs.TIER_2:
                            a = 1 !== d.intervalCount ? P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
                            break;
                        default:
                            throw Error("Unexpected skuId: ".concat(c.skuId))
                    }
                return (0, s.jsx)("div", {
                    className: T.text,
                    children: a
                })
            }

            function M(e) {
                let t, n, {
                        planId: l,
                        enableNoPaymentTrial: d,
                        startingPremiumSubscriptionPlanId: c,
                        onClose: _,
                        followupSKUInfo: M,
                        isDowngrade: C,
                        hideClose: R,
                        postSuccessGuild: L,
                        paymentSourceType: A
                    } = e,
                    {
                        theme: g
                    } = (0, u.useThemeContext)(),
                    x = (0, i.useStateFromStores)([E.default], () => null != M ? E.default.get(M.id) : null);
                a.useEffect(() => {
                    if (null == M || null != x) return;
                    let {
                        applicationId: e,
                        id: t
                    } = M;
                    (0, o.fetchSKU)(e, t).catch(p.NOOP_NULL)
                }, [M, x]);
                let O = e => {
                    if (e.skuId === S.PremiumSubscriptionSKUs.TIER_0) return p.DELAYED_PAYMENTS.has(null != A ? A : p.PaymentSourceTypes.UNKNOWN) ? P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
                    if (e.skuId === S.PremiumSubscriptionSKUs.TIER_1) return p.DELAYED_PAYMENTS.has(null != A ? A : p.PaymentSourceTypes.UNKNOWN) ? P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
                    return p.DELAYED_PAYMENTS.has(null != A ? A : p.PaymentSourceTypes.UNKNOWN) ? P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : d ? P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
                };
                if (null != x) t = (0, s.jsx)("div", {
                    className: T.text,
                    children: P.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                        skuName: x.name
                    })
                });
                else if (null != c) t = (0, s.jsx)(N, {
                    planId: l,
                    startingPremiumSubscriptionPlanId: c
                });
                else if (null != L) {
                    let e = f.default.get(l);
                    r(null != e, "Missing plan"), t = (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: T.text,
                            children: O(e)
                        }), (0, s.jsx)("div", {
                            className: T.text,
                            children: P.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
                                guildName: L.name
                            })
                        })]
                    })
                } else {
                    let e = f.default.get(l);
                    r(null != e, "Missing plan"), t = (0, s.jsx)("div", {
                        className: T.text,
                        children: O(e)
                    })
                }
                let h = I.default.getPremiumType(l);
                return r(null != h, "premium type should not be null in purchase confirmation"), n = null != x ? P.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                    skuName: x.name
                }) : C ? P.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != L ? P.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : P.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, s.jsxs)("div", {
                    className: T.confirmation,
                    children: [(0, s.jsx)(m.default, {
                        className: T.banner,
                        theme: g,
                        premiumType: h,
                        type: p.DELAYED_PAYMENTS.has(null != A ? A : p.PaymentSourceTypes.UNKNOWN) ? m.default.Types.PREMIUM_PAYMENT_STARTED : null != c ? m.default.Types.PREMIUM_UPDATED : m.default.Types.PREMIUM_ACTIVATED
                    }), t, R ? null : (0, s.jsx)(u.Button, {
                        onClick: _,
                        children: n
                    })]
                })
            }

            function C(e) {
                let {
                    planId: t,
                    onClose: n
                } = e, {
                    giftRecipient: a,
                    selectedGiftStyle: l,
                    hasSentMessage: u,
                    giftMessageError: o,
                    isSendingMessage: E
                } = (0, d.useGiftContext)(), I = (0, i.useStateFromStores)([f.default], () => f.default.get(t));
                r(null != I, "Missing plan");
                let m = (0, i.useStateFromStores)([_.default], () => _.default.getGiftCode(I.skuId));
                return (0, s.jsx)(c.default, {
                    giftCode: m,
                    subscriptionPlan: I,
                    onClose: n,
                    selectedGiftStyle: l,
                    hasSentMessage: u,
                    giftRecipient: a,
                    giftMessageError: o,
                    isSendingMessage: E
                })
            }
        },
        132554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                r = n("77078"),
                i = n("978679"),
                u = n("265469");

            function o(e) {
                let {
                    className: t,
                    copy: n,
                    bannerImage: a,
                    textColor: o = "always-white"
                } = e;
                return (0, s.jsxs)("div", {
                    className: l(u.bannerContainer, t),
                    children: [null == a ? null : (0, s.jsx)("img", {
                        alt: "",
                        className: u.banner,
                        src: a
                    }), (0, s.jsxs)("div", {
                        className: u.textContainer,
                        children: [(0, s.jsx)(i.default, {
                            className: u.giftIcon
                        }), (0, s.jsx)(r.Heading, {
                            className: u.textHeader,
                            color: o,
                            variant: "eyebrow",
                            children: n
                        })]
                    })]
                })
            }
        }
    }
]);