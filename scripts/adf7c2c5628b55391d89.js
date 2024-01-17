(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19193"], {
        35188: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, s("862205").createExperiment)({
                kind: "user",
                id: "2022-12_localized_pricing_poland_notice",
                label: "Localized Pricing Poland Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Poland Notice",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        391533: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, s("862205").createExperiment)({
                kind: "user",
                id: "2023-05_localized_pricing_turkey_notice",
                label: "Localized Pricing Turkey Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Turkey Notice",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        296253: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a = s("446674"),
                _ = s("357957"),
                l = s("521012");

            function n() {
                let e = (0, a.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
                    t = (0, a.useStateFromStores)([_.default], () => {
                        var t;
                        return (null == e ? void 0 : e.paymentSourceId) != null ? null === (t = _.default.getPaymentSource(e.paymentSourceId)) || void 0 === t ? void 0 : t.country : null
                    });
                return t
            }
        },
        279171: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useShouldShowLegacyPricingNotice: function() {
                    return T
                },
                default: function() {
                    return f
                }
            });
            var a = s("37983");
            s("884691");
            var _ = s("414456"),
                l = s.n(_),
                n = s("627445"),
                u = s.n(n),
                I = s("423487"),
                r = s("701909"),
                i = s("35188"),
                N = s("391533"),
                o = s("296253"),
                E = s("49111"),
                c = s("782340"),
                d = s("712109");

            function T() {
                let e = (0, o.default)(),
                    {
                        enabled: t
                    } = i.default.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: s
                    } = N.default.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    });
                return null != e && ("PL" === e ? t : "TR" === e && s)
            }
            var f = e => {
                var t, s;
                let {
                    fromBoostCancelModal: _,
                    className: n
                } = e, i = (0, o.default)(), N = T();
                if (!N) return null;
                return u(null != i, "Subscription billing country should not be null"), (0, a.jsxs)("div", {
                    className: l(d.noticeRoot, n),
                    children: [(0, a.jsx)("div", {
                        className: d.iconContainer,
                        children: (0, a.jsx)(I.default, {
                            className: d.infoIcon
                        })
                    }), (0, a.jsx)("div", {
                        className: d.text,
                        children: (t = i, s = _, "PL" === t ? s ? c.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : c.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? s ? c.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : c.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : s ? c.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : c.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: r.default.getArticleURL(E.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        67323: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            }), s("222007"), s("70102");
            var a = s("37983"),
                _ = s("884691"),
                l = s("446674"),
                n = s("819855"),
                u = s("77078"),
                I = s("596523"),
                r = s("841098"),
                i = s("812204"),
                N = s("685665"),
                o = s("649844"),
                E = s("357957"),
                c = s("10514"),
                d = s("599110"),
                T = s("719923"),
                f = s("153160"),
                R = s("713518"),
                M = s("380186"),
                L = s("809071"),
                P = s("360262"),
                S = s("510928"),
                O = s("775155"),
                A = s("646718"),
                C = s("49111"),
                m = s("782340"),
                U = s("889353"),
                p = e => {
                    let {
                        daysLeft: t,
                        premiumType: s,
                        premiumSubscription: p,
                        analyticsSource: g,
                        ...G
                    } = e, D = (0, r.default)(), [y, Y] = _.useState(!1), {
                        analyticsLocations: b
                    } = (0, N.default)(i.default.PREMIUM_UNCANCEL_MODAL), B = (0, l.useStateFromStores)([E.default], () => (null == p ? void 0 : p.paymentSourceId) != null ? E.default.getPaymentSource(p.paymentSourceId) : null, [p]), [H] = (0, L.useSubscriptionInvoicePreview)({
                        subscriptionId: p.id,
                        renewal: !0,
                        analyticsLocations: (0, N.default)(i.default.PREMIUM_UNCANCEL_MODAL),
                        analyticsLocation: i.default.PREMIUM_UNCANCEL_MODAL
                    }), W = T.default.getPlanIdFromInvoice(p, H), F = A.SubscriptionPlanInfo[W].skuId, h = (0, l.useStateFromStores)([c.default], () => (0, M.getOrFetchSubscriptionPlan)(W), [W]), x = (0, l.useStateFromStores)([c.default], () => c.default.isFetchingForSKU(F)), k = null != h ? T.default.getDefaultPrice(W) : null, {
                        intervalType: v,
                        intervalCount: j
                    } = T.default.getInterval(W), K = s === A.PremiumTypes.TIER_1, w = null != k ? (0, f.formatPrice)(k.amount, k.currency) : null;
                    return _.useEffect(() => {
                        d.default.track(C.AnalyticEvents.OPEN_MODAL, {
                            type: "Premium Uncancel Winback",
                            source: g
                        })
                    }, [g]), (0, a.jsx)(u.ModalRoot, {
                        ...G,
                        className: U.modal,
                        children: y ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(S.default, {
                                premiumType: s,
                                onClose: G.onClose
                            }), (0, a.jsx)(O.default, {
                                planId: W,
                                onClose: G.onClose,
                                paymentSourceType: null == B ? void 0 : B.type
                            })]
                        }) : (0, a.jsx)(P.default, {
                            premiumType: s,
                            titleText: K ? m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({
                                daysLeft: t
                            }) : m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({
                                daysLeft: t
                            }),
                            subtitleText: K ? m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
                            footer: (0, a.jsxs)("div", {
                                children: [null !== w ? (0, a.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    children: function(e) {
                                        switch (v) {
                                            case A.SubscriptionIntervalTypes.YEAR:
                                                return K ? m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                                                    price: e
                                                }) : m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                                                    price: e
                                                });
                                            case A.SubscriptionIntervalTypes.MONTH:
                                                if (K) return m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({
                                                    price: e
                                                });
                                                if (1 === j) return m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({
                                                    price: e
                                                });
                                                else return m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                                                    price: e,
                                                    intervalCount: j
                                                });
                                            default:
                                                throw Error("Unknown interval type ".concat(v))
                                        }
                                    }(w)
                                }) : (0, a.jsx)(u.Spinner, {
                                    type: u.SpinnerTypes.SPINNING_CIRCLE
                                }), (0, a.jsxs)("div", {
                                    className: U.footer,
                                    children: [(0, a.jsx)(u.Button, {
                                        disabled: x,
                                        onClick: () => {
                                            if (null != p) {
                                                let e = (0, R.planHasCurrency)(W, p.currency, null == B ? void 0 : B.id);
                                                null != B && B.id === p.paymentSourceId && e ? (I.resubscribe(p, b, C.AnalyticsLocations.UNCANCEL_WINBACK_MODAL), Y(!0)) : (G.onClose(), (0, o.default)({
                                                    initialPlanId: W,
                                                    analyticsLocations: b,
                                                    analyticsLocation: C.AnalyticsLocations.UNCANCEL_WINBACK_MODAL
                                                }))
                                            }
                                        },
                                        children: m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
                                    }), (0, a.jsx)(u.Button, {
                                        look: u.Button.Looks.LINK,
                                        color: (0, n.isThemeDark)(D) ? u.Button.Colors.WHITE : u.Button.Colors.PRIMARY,
                                        onClick: G.onClose,
                                        children: m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
                                    })]
                                })]
                            }),
                            stickyFooter: !0,
                            onClose: G.onClose
                        })
                    })
                }
        },
        775155: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                },
                PremiumSubscriptionGiftPurchaseConfirmation: function() {
                    return O
                }
            }), s("222007"), s("70102");
            var a = s("37983"),
                _ = s("884691"),
                l = s("627445"),
                n = s.n(l),
                u = s("446674"),
                I = s("77078"),
                r = s("465527"),
                i = s("635357"),
                N = s("891865"),
                o = s("353365"),
                E = s("10514"),
                c = s("552712"),
                d = s("719923"),
                T = s("977934"),
                f = s("646718"),
                R = s("49111"),
                M = s("782340"),
                L = s("535539");

            function P(e) {
                var t, s;
                let _, {
                        planId: l,
                        startingPremiumSubscriptionPlanId: I,
                        paymentSourceType: r
                    } = e,
                    [i, N] = (0, u.useStateFromStoresArray)([E.default], () => [E.default.get(I), E.default.get(l)]);
                if (n(null != i && null != N, "Missing startingPlan or newPlan"), t = I, s = l, f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t) < f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s)) switch (l) {
                        case f.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                            _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, R.DELAYED_PAYMENTS.has(null != r ? r : R.PaymentSourceTypes.UNKNOWN) && (_ = M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
                            break;
                        case f.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                            _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, R.DELAYED_PAYMENTS.has(null != r ? r : R.PaymentSourceTypes.UNKNOWN) && (_ = M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
                            break;
                        case f.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                            _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, R.DELAYED_PAYMENTS.has(null != r ? r : R.PaymentSourceTypes.UNKNOWN) && (_ = M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
                            break;
                        case f.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                            _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: f.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                            }), R.DELAYED_PAYMENTS.has(null != r ? r : R.PaymentSourceTypes.UNKNOWN) && (_ = M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: f.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                            }));
                            break;
                        case f.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
                        case f.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                            _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
                            break;
                        case f.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                        case f.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                            _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                            break;
                        default:
                            throw Error("Unexpected planId: ".concat(l))
                    } else if (i.skuId === f.PremiumSubscriptionSKUs.TIER_2 && N.skuId === f.PremiumSubscriptionSKUs.TIER_1) _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
                    else switch (N.skuId) {
                        case f.PremiumSubscriptionSKUs.TIER_0:
                            _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                            break;
                        case f.PremiumSubscriptionSKUs.TIER_1:
                            _ = M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
                            break;
                        case f.PremiumSubscriptionSKUs.TIER_2:
                            _ = 1 !== i.intervalCount ? M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
                            break;
                        default:
                            throw Error("Unexpected skuId: ".concat(N.skuId))
                    }
                return (0, a.jsx)("div", {
                    className: L.text,
                    children: _
                })
            }

            function S(e) {
                let t, s, {
                        planId: l,
                        enableNoPaymentTrial: i,
                        startingPremiumSubscriptionPlanId: N,
                        onClose: o,
                        followupSKUInfo: S,
                        isDowngrade: O,
                        hideClose: A,
                        postSuccessGuild: C,
                        paymentSourceType: m
                    } = e,
                    {
                        theme: U
                    } = (0, I.useThemeContext)(),
                    p = (0, u.useStateFromStores)([c.default], () => null != S ? c.default.get(S.id) : null);
                _.useEffect(() => {
                    if (null == S || null != p) return;
                    let {
                        applicationId: e,
                        id: t
                    } = S;
                    (0, r.fetchSKU)(e, t).catch(R.NOOP_NULL)
                }, [S, p]);
                let g = e => {
                    if (e.skuId === f.PremiumSubscriptionSKUs.TIER_0) return R.DELAYED_PAYMENTS.has(null != m ? m : R.PaymentSourceTypes.UNKNOWN) ? M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
                    if (e.skuId === f.PremiumSubscriptionSKUs.TIER_1) return R.DELAYED_PAYMENTS.has(null != m ? m : R.PaymentSourceTypes.UNKNOWN) ? M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
                    return R.DELAYED_PAYMENTS.has(null != m ? m : R.PaymentSourceTypes.UNKNOWN) ? M.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : i ? M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : M.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
                };
                if (null != p) t = (0, a.jsx)("div", {
                    className: L.text,
                    children: M.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                        skuName: p.name
                    })
                });
                else if (null != N) t = (0, a.jsx)(P, {
                    planId: l,
                    startingPremiumSubscriptionPlanId: N
                });
                else if (null != C) {
                    let e = E.default.get(l);
                    n(null != e, "Missing plan"), t = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: L.text,
                            children: g(e)
                        }), (0, a.jsx)("div", {
                            className: L.text,
                            children: M.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
                                guildName: C.name
                            })
                        })]
                    })
                } else {
                    let e = E.default.get(l);
                    n(null != e, "Missing plan"), t = (0, a.jsx)("div", {
                        className: L.text,
                        children: g(e)
                    })
                }
                let G = d.default.getPremiumType(l);
                return n(null != G, "premium type should not be null in purchase confirmation"), s = null != p ? M.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                    skuName: p.name
                }) : O ? M.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != C ? M.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : M.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, a.jsxs)("div", {
                    className: L.confirmation,
                    children: [(0, a.jsx)(T.default, {
                        className: L.banner,
                        theme: U,
                        premiumType: G,
                        type: R.DELAYED_PAYMENTS.has(null != m ? m : R.PaymentSourceTypes.UNKNOWN) ? T.default.Types.PREMIUM_PAYMENT_STARTED : null != N ? T.default.Types.PREMIUM_UPDATED : T.default.Types.PREMIUM_ACTIVATED
                    }), t, A ? null : (0, a.jsx)(I.Button, {
                        onClick: o,
                        children: s
                    })]
                })
            }

            function O(e) {
                let {
                    planId: t,
                    onClose: s
                } = e, {
                    giftRecipient: _,
                    selectedGiftStyle: l,
                    hasSentMessage: I,
                    giftMessageError: r,
                    isSendingMessage: c
                } = (0, i.useGiftContext)(), d = (0, u.useStateFromStores)([E.default], () => E.default.get(t));
                n(null != d, "Missing plan");
                let T = (0, u.useStateFromStores)([o.default], () => o.default.getGiftCode(d.skuId));
                return (0, a.jsx)(N.default, {
                    giftCode: T,
                    subscriptionPlan: d,
                    onClose: s,
                    selectedGiftStyle: l,
                    hasSentMessage: I,
                    giftRecipient: _,
                    giftMessageError: r,
                    isSendingMessage: c
                })
            }
        }
    }
]);