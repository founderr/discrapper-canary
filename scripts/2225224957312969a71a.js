(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53265"], {
        788666: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                checkoutTOSExperiment: function() {
                    return a
                }
            });
            var t = i("862205");
            let r = (0, t.createExperiment)({
                id: "2023-05_checkout_terms_of_service",
                label: "Checkout Terms of Service",
                kind: "user",
                defaultConfig: {
                    bucket: 0,
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "remove-checkbox-with-ui-changes",
                    config: {
                        bucket: 1,
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "remove-checkbox-only",
                    config: {
                        bucket: 2,
                        enabled: !0
                    }
                }]
            });

            function a(e) {
                let {
                    autoTrackExposure: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    autoTrackExposure: !0
                };
                return r.getCurrentConfig({
                    location: e
                }, {
                    autoTrackExposure: n
                })
            }
        },
        296253: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return l
                }
            });
            var t = i("446674"),
                r = i("357957"),
                a = i("521012");

            function l() {
                let e = (0, t.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()),
                    n = (0, t.useStateFromStores)([r.default], () => {
                        var n;
                        return (null == e ? void 0 : e.paymentSourceId) != null ? null === (n = r.default.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
                    });
                return n
            }
        },
        883662: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                PremiumInvoiceTable: function() {
                    return c
                },
                PremiumInvoiceTableHeader: function() {
                    return I
                },
                PremiumInvoiceTableRow: function() {
                    return d
                },
                PremiumInvoiceDiscountedTableRow: function() {
                    return m
                },
                PremiumInvoiceTableDivider: function() {
                    return T
                },
                PremiumInvoiceTableTotalRow: function() {
                    return _
                },
                PremiumInvoiceTableFinePrint: function() {
                    return P
                }
            });
            var t = i("37983");
            i("884691");
            var r = i("414456"),
                a = i.n(r),
                l = i("798609"),
                s = i("153160"),
                u = i("782340"),
                o = i("889454");

            function c(e) {
                let {
                    children: n,
                    className: i
                } = e;
                return (0, t.jsx)("div", {
                    className: a(o.table, i),
                    children: n
                })
            }

            function I(e) {
                let {
                    children: n
                } = e;
                return (0, t.jsx)("div", {
                    className: o.header,
                    children: n
                })
            }

            function d(e) {
                let {
                    label: n,
                    value: i,
                    className: r
                } = e;
                return (0, t.jsxs)("div", {
                    className: a(o.row, r),
                    children: [(0, t.jsx)("div", {
                        className: o.rowLabel,
                        children: n
                    }), (0, t.jsx)("div", {
                        className: o.rowAmount,
                        children: i
                    })]
                })
            }

            function m(e) {
                let {
                    label: n,
                    value: i,
                    discounts: r,
                    originalAmount: a,
                    interval: c,
                    currency: I,
                    className: m,
                    intervalCount: T
                } = e, _ = e => null != r ? r.find(n => n.type === e) : null, P = _(l.InvoiceDiscountTypes.SUBSCRIPTION_PLAN), v = _(l.InvoiceDiscountTypes.ENTITLEMENT), f = null != P ? Math.floor(P.amount / a * 100) : null, M = (0, s.formatPrice)(a, I);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(d, {
                        label: n,
                        value: (0, t.jsxs)(t.Fragment, {
                            children: [i, null != f ? (0, t.jsxs)("div", {
                                className: o.rowPercentDiscount,
                                children: ["-", f, "%"]
                            }) : null]
                        }),
                        className: m
                    }), null != f ? (0, t.jsxs)("div", {
                        className: o.rowDiscountOriginalPrice,
                        children: ["(", null != c && null != T ? (0, s.formatRate)(M, c, T) : M, ")"]
                    }) : null, null != v ? (0, t.jsx)("div", {
                        className: o.entitlementDiscountRow,
                        children: u.default.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
                    }) : null]
                })
            }

            function T(e) {
                let {
                    extended: n = !1,
                    negativeMarginTop: i = !1
                } = e;
                return (0, t.jsx)("div", {
                    className: a(o.divider, {
                        [o.dividerExtended]: n,
                        [o.negativeMarginTop]: i
                    })
                })
            }

            function _(e) {
                let {
                    label: n,
                    value: i,
                    className: r
                } = e;
                return (0, t.jsxs)("div", {
                    className: a(o.totalRow, r),
                    children: [(0, t.jsx)("div", {
                        className: o.totalLabel,
                        children: n
                    }), (0, t.jsx)("div", {
                        className: o.totalAmount,
                        children: i
                    })]
                })
            }

            function P(e) {
                let {
                    children: n,
                    className: i
                } = e;
                return (0, t.jsx)("div", {
                    className: a(o.finePrint, i),
                    children: n
                })
            }
        },
        991329: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return s
                }
            });
            var t = i("37983");
            i("884691");
            var r = i("153160"),
                a = i("883662"),
                l = i("782340");

            function s(e) {
                let {
                    invoice: n
                } = e;
                return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(a.PremiumInvoiceTableRow, {
                    label: l.default.Messages.TAX_LABEL,
                    value: (0, r.formatPrice)(n.tax, n.currency)
                })
            }
        },
        146163: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                PremiumInvoiceLabelWithAdjustment: function() {
                    return D
                },
                PremiumSubscriptionCurrentInvoiceRows: function() {
                    return y
                },
                PremiumSubscriptionChangePlanInvoiceRows: function() {
                    return j
                },
                SubscriptionPeriodResetNotice: function() {
                    return G
                },
                SubscriptionInvoiceFooter: function() {
                    return H
                },
                SubscriptionInvoiceGift: function() {
                    return k
                },
                PremiumTrialInvoiceTableRow: function() {
                    return Y
                }
            }), i("70102"), i("808653"), i("222007");
            var t = i("37983"),
                r = i("884691"),
                a = i("414456"),
                l = i.n(a),
                s = i("627445"),
                u = i.n(s),
                o = i("446674"),
                c = i("77078"),
                I = i("798609"),
                d = i("812204"),
                m = i("685665"),
                T = i("788666"),
                _ = i("10514"),
                P = i("461380"),
                v = i("834179"),
                f = i("701909"),
                M = i("719923"),
                R = i("153160"),
                p = i("809071"),
                N = i("643619"),
                S = i("917247"),
                b = i("883662"),
                E = i("991329"),
                U = i("646718"),
                L = i("49111"),
                O = i("782340"),
                C = i("616006");
            let x = (e, n) => {
                    var i;
                    return !!(null === (i = e.discounts) || void 0 === i ? void 0 : i.some(e => e.type === n))
                },
                A = (e, n) => {
                    var i, t, r;
                    return e.subscriptionPlanPrice - (null !== (r = null === (t = e.discounts) || void 0 === t ? void 0 : null === (i = t.find(e => e.type === n)) || void 0 === i ? void 0 : i.amount) && void 0 !== r ? r : 0)
                };

            function g(e) {
                var n;
                let {
                    invoiceItem: i,
                    overrideAmount: r,
                    showGuildSubscriptionAdjustmentTooltip: a,
                    currency: l,
                    className: s,
                    isPrepaidPaymentSource: d,
                    referralTrialOfferId: m
                } = e, T = (0, o.useStateFromStores)([_.default], () => _.default.get(i.subscriptionPlanId)), P = null === (n = (0, S.usePremiumTrialOffer)(m)) || void 0 === n ? void 0 : n.subscription_trial;
                u(null != T, "Missing subscriptionPlan");
                let f = (0, M.formatIntervalDuration)({
                        intervalType: null == P ? void 0 : P.interval,
                        intervalCount: null == P ? void 0 : P.interval_count
                    }),
                    p = function(e, n, i, t) {
                        let r = x(e, I.InvoiceDiscountTypes.PREMIUM_TRIAL);
                        switch (e.subscriptionPlanId) {
                            case U.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
                            case U.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
                            case U.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                            case U.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                            case U.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                            case U.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                            case U.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                            case U.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                            case U.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
                            case U.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                                return (0, M.getDisplayName)(e.subscriptionPlanId, r, i, t);
                            case U.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
                            case U.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
                                return O.default.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity,
                                    intervalCount: n.intervalCount
                                });
                            case U.SubscriptionPlans.PREMIUM_MONTH_GUILD:
                                return O.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                });
                            case U.SubscriptionPlans.PREMIUM_YEAR_GUILD:
                                return O.default.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                })
                        }
                        switch (n.interval) {
                            case U.SubscriptionIntervalTypes.MONTH:
                                if (1 === n.intervalCount) return O.default.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                });
                                return O.default.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                                    planName: n.name,
                                    intervalCount: n.intervalCount
                                });
                            case U.SubscriptionIntervalTypes.YEAR:
                                return O.default.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                })
                        }
                        throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
                    }(i, T, d, f);
                !0 === a && (p = (0, t.jsxs)("div", {
                    className: C.invoiceItemLabelWithIcon,
                    children: [(0, t.jsxs)("div", {
                        children: [p, " "]
                    }), (0, t.jsx)(c.Tooltip, {
                        text: O.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                        "aria-label": O.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                        tooltipClassName: C.invoiceItemTooltip,
                        children: e => (0, t.jsx)(v.default, {
                            ...e,
                            className: C.invoiceItemLabelIcon
                        })
                    })]
                }));
                let N = (0, R.formatPrice)(null != r ? r : i.amount, l),
                    E = d ? N : (0, R.formatRate)(N, T.interval, T.intervalCount);
                return (0, t.jsx)(b.PremiumInvoiceDiscountedTableRow, {
                    label: p,
                    value: E,
                    originalAmount: i.subscriptionPlanPrice * i.quantity,
                    discounts: i.discounts,
                    interval: T.interval,
                    intervalCount: T.intervalCount,
                    currency: l,
                    className: s
                })
            }

            function D(e) {
                let {
                    label: n,
                    tooltipText: i,
                    tooltipAriaLabel: r
                } = e;
                return (0, t.jsxs)("div", {
                    className: C.invoiceItemLabelWithIcon,
                    children: [n, (0, t.jsx)(c.Tooltip, {
                        clickableOnMobile: !0,
                        text: i,
                        "aria-label": r,
                        tooltipClassName: C.invoiceItemTooltip,
                        children: e => (0, t.jsx)(v.default, {
                            ...e,
                            className: C.invoiceItemLabelIcon
                        })
                    })]
                })
            }

            function y(e) {
                let {
                    invoice: n,
                    isPrepaidPaymentSource: i
                } = e, r = (0, N.coalesceInvoiceItems)(n.invoiceItems), a = r.find(e => !(0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), l = r.find(e => (0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), s = (0, o.useStateFromStores)([_.default], () => null != l ? _.default.get(l.subscriptionPlanId) : null), u = null != l ? l.amount : 0, c = (0, R.formatPrice)(u, n.currency), I = null != s ? (0, R.formatRate)(c, s.interval, s.intervalCount) : 0;
                return (0, t.jsxs)(t.Fragment, {
                    children: [null != a ? (0, t.jsx)(g, {
                        invoiceItem: a,
                        currency: n.currency,
                        isPrepaidPaymentSource: i
                    }) : null, 0 !== u && null != l && null != s ? (0, t.jsx)(b.PremiumInvoiceTableRow, {
                        label: O.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                            numGuildSubscriptions: l.quantity,
                            planName: (0, M.getDisplayName)(s.id, !1, i)
                        }),
                        value: i ? c : I
                    }) : null, (0, t.jsx)(E.default, {
                        invoice: n
                    }), (0, t.jsx)(b.PremiumInvoiceTableDivider, {}), (0, t.jsx)(b.PremiumInvoiceTableTotalRow, {
                        label: (n.taxInclusive ? i ? O.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : O.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : O.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === L.CurrencyCodes.USD ? (0, R.formatPrice)(n.total, n.currency) : "".concat((0, R.formatPrice)(n.total, n.currency), "*")
                    })]
                })
            }

            function j(e) {
                let {
                    invoice: n,
                    newPlan: i,
                    isPrepaidPaymentSource: r,
                    referralTrialOfferId: a
                } = e, l = (0, N.coalesceInvoiceItems)(n.invoiceItems), s = l.find(e => e.subscriptionPlanId === i.id);
                u(null != s, "Expected newPlanInvoiceItem");
                let o = l.find(e => !(0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount < 0),
                    c = l.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === I.InvoiceDiscountTypes.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
                    d = x(s, I.InvoiceDiscountTypes.PREMIUM_TRIAL),
                    m = A(s, I.InvoiceDiscountTypes.SUBSCRIPTION_PLAN),
                    T = s.quantity * m,
                    _ = s.amount + (null != o ? o.amount : 0) - T + (null != c ? c.amount : 0),
                    P = l.filter(e => e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_YEAR_GUILD),
                    v = P.reduce((e, n) => e + n.amount, 0);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(g, {
                        invoiceItem: s,
                        currency: n.currency,
                        overrideAmount: T,
                        isPrepaidPaymentSource: r,
                        referralTrialOfferId: a
                    }), 0 === _ || d ? null : (0, t.jsx)(b.PremiumInvoiceTableRow, {
                        label: (0, t.jsx)(D, {
                            label: O.default.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                planName: (0, M.isPremiumSubscriptionPlan)(i.id) ? (0, M.getTierDisplayName)(i.id) : i.name
                            }),
                            tooltipText: O.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                        }),
                        value: (0, R.formatPrice)(_, n.currency)
                    }), 0 !== v ? (0, t.jsx)(b.PremiumInvoiceTableRow, {
                        label: (0, t.jsx)(D, {
                            label: O.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                            tooltipText: O.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                            tooltipAriaLabel: O.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                        }),
                        value: (0, R.formatPrice)(v, n.currency)
                    }) : null, (0, t.jsx)(E.default, {
                        invoice: n
                    }), (0, t.jsx)(b.PremiumInvoiceTableDivider, {}), (0, t.jsx)(b.PremiumInvoiceTableTotalRow, {
                        label: (n.taxInclusive ? r ? O.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : O.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : O.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === L.CurrencyCodes.USD ? (0, R.formatPrice)(n.total, n.currency) : "".concat((0, R.formatPrice)(n.total, n.currency), "*")
                    })]
                })
            }

            function h(e) {
                let n = e.slice();
                return n.sort((e, n) => {
                    let i = (0, M.isPremiumBaseSubscriptionPlan)(e.subscriptionPlanId),
                        t = (0, M.isPremiumBaseSubscriptionPlan)(n.subscriptionPlanId);
                    return i && !t ? -1 : !i && t ? 1 : 0
                }), n
            }

            function B(e) {
                return e.filter(e => {
                    let {
                        subscriptionPlanId: n
                    } = e;
                    return n !== U.SubscriptionPlans.NONE_MONTH && n !== U.SubscriptionPlans.NONE_YEAR
                })
            }

            function G(e) {
                let {
                    proratedInvoice: n,
                    renewalInvoice: i
                } = e, {
                    intervalType: r,
                    intervalCount: a
                } = (0, M.getIntervalForInvoice)(n), {
                    intervalType: l,
                    intervalCount: s
                } = (0, M.getIntervalForInvoice)(i);
                return r !== l || a !== s || n.subscriptionPeriodEnd.getTime() === i.subscriptionPeriodStart.getTime() ? null : (0, t.jsx)("div", {
                    className: C.subscriptionPeriodResetNotice,
                    children: O.default.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                        renewalDate: n.subscriptionPeriodEnd
                    })
                })
            }

            function w(e) {
                let {
                    isUpdate: n,
                    currentInvoice: i,
                    newInvoice: r
                } = e, a = null != i ? (0, N.coalesceInvoiceItems)(i.invoiceItems) : null, s = null != i ? (0, M.getIntervalForInvoice)(i) : null, {
                    intervalType: u,
                    intervalCount: o
                } = (0, M.getIntervalForInvoice)(r), c = null != s && (s.intervalType !== u || s.intervalCount !== o);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(b.PremiumInvoiceTableDivider, {
                        extended: !0
                    }), null != i ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(b.PremiumInvoiceTableHeader, {
                            children: O.default.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
                        }), B(h((0, N.coalesceInvoiceItems)(i.invoiceItems))).map(e => (0, t.jsx)(g, {
                            invoiceItem: e,
                            currency: i.currency
                        }, e.id)), (0, t.jsx)(b.PremiumInvoiceTableDivider, {
                            extended: !0
                        })]
                    }) : null, (0, t.jsx)(b.PremiumInvoiceTableHeader, {
                        children: O.default.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
                    }), B(h((0, N.coalesceInvoiceItems)(r.invoiceItems))).map(e => {
                        let i = null != a && !a.some(n => n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity);
                        return (0, t.jsx)(g, {
                            invoiceItem: e,
                            currency: r.currency,
                            showGuildSubscriptionAdjustmentTooltip: c && (e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_6_MONTH_GUILD),
                            className: l({
                                [C.subscriptionAddedInvoiceItem]: !n || i
                            })
                        }, e.id)
                    }), (0, t.jsx)(E.default, {
                        invoice: r
                    }), (0, t.jsx)(b.PremiumInvoiceTableDivider, {}), (0, t.jsx)(b.PremiumInvoiceTableRow, {
                        label: O.default.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                        value: (0, R.formatRate)((0, R.formatPrice)(r.total, r.currency), u, o),
                        className: C.subscriptionCostRow
                    })]
                })
            }

            function F(e) {
                var n;
                let {
                    proratedInvoice: i,
                    renewalInvoice: r,
                    isTrial: a,
                    isUpdate: l,
                    overrideRenewalDate: s,
                    trialFooterMessageOverride: u
                } = e, o = null === (n = (0, S.usePremiumTrialOffer)()) || void 0 === n ? void 0 : n.subscription_trial, {
                    intervalType: c,
                    intervalCount: I
                } = (0, M.getIntervalForInvoice)(r), d = (0, T.checkoutTOSExperiment)("purchase_terms", {
                    autoTrackExposure: !1
                });
                if (null == i && d.enabled && 1 === d.bucket) return null;
                if (a) {
                    let e = (0, M.formatIntervalDuration)({
                            intervalType: null == o ? void 0 : o.interval,
                            intervalCount: null == o ? void 0 : o.interval_count
                        }),
                        n = (null == o ? void 0 : o.interval) === U.SubscriptionIntervalTypes.DAY && (null == o ? void 0 : o.interval_count) < 28 ? 2 : 7;
                    return (0, t.jsx)(t.Fragment, {
                        children: null != u ? u : O.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                            duration: e,
                            days: n,
                            contactLink: L.MarketingURLs.CONTACT,
                            helpdeskArticle: f.default.getArticleURL(L.HelpdeskArticles.PREMIUM_TRIAL)
                        })
                    })
                }
                let m = r.taxInclusive ? O.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : O.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
                return (0, t.jsx)(t.Fragment, {
                    children: m.format({
                        rate: (0, R.formatRate)((0, R.formatPrice)(r.subtotal, r.currency), c, I),
                        renewalDate: null != s ? s : l ? null != i ? i.subscriptionPeriodEnd : r.subscriptionPeriodStart : r.subscriptionPeriodEnd,
                        contactLink: L.MarketingURLs.CONTACT,
                        helpdeskArticle: f.default.getArticleURL(L.HelpdeskArticles.BILLING)
                    })
                })
            }

            function H(e) {
                let {
                    premiumSubscription: n,
                    proratedInvoice: i,
                    renewalInvoice: a,
                    overrideRenewalDate: l,
                    isUpdate: s = !1,
                    isTrial: u = !1,
                    priceOptions: o,
                    isPrepaidPaymentSource: I = !1,
                    trialFooterMessageOverride: T,
                    hideSubscriptionDetails: _ = !1
                } = e, {
                    analyticsLocations: v
                } = (0, m.default)(), f = {
                    subscriptionId: null == n ? void 0 : n.id,
                    renewal: !0,
                    preventFetch: !s,
                    analyticsLocatinons: v,
                    analyticsLocation: d.default.SUBSCRIPTION_INVOICE_FOOTER,
                    ...o
                }, [M] = (0, p.useSubscriptionInvoicePreview)(f), [R, N] = r.useState(!1);
                return (0, t.jsxs)(t.Fragment, {
                    children: [I ? null : (0, t.jsx)(b.PremiumInvoiceTableFinePrint, {
                        children: (0, t.jsx)(F, {
                            proratedInvoice: i,
                            renewalInvoice: a,
                            isTrial: u,
                            isUpdate: s,
                            overrideRenewalDate: l,
                            trialFooterMessageOverride: T
                        })
                    }), !_ && (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)(c.Clickable, {
                            onClick: () => N(e => !e),
                            className: C.subscriptionDetailsToggle,
                            children: [R ? O.default.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : O.default.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, t.jsx)(P.default, {
                                direction: R ? P.default.Directions.UP : P.default.Directions.DOWN,
                                className: C.subscriptionDetailsToggleCaret
                            })]
                        }), R ? (0, t.jsx)(w, {
                            isUpdate: s,
                            currentInvoice: M,
                            newInvoice: a
                        }) : null]
                    })]
                })
            }

            function k(e) {
                let n, {
                        plan: i,
                        className: r,
                        paymentSourceId: a,
                        isPrepaidPaymentSource: l = !1,
                        isCustomGift: s = !1
                    } = e,
                    u = (0, M.getPrice)(i.id, !1, !0, {
                        paymentSourceId: a
                    }),
                    o = (0, R.formatPrice)(u.amount, u.currency);
                return n = s ? (0, M.getIntervalString)(i.interval, !0, void 0, void 0, !0, (0, M.getPremiumType)(i.id)) : O.default.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                    planName: (0, M.getDisplayName)(i.id, !1, l)
                }), s ? (0, t.jsxs)("div", {
                    className: r,
                    children: [(0, t.jsx)(c.FormTitle, {
                        children: O.default.Messages.PREMIUM_GIFTING_BUTTON
                    }), (0, t.jsx)(c.Heading, {
                        variant: "text-md/normal",
                        children: "".concat(n, " - ").concat(o)
                    })]
                }) : (0, t.jsx)(b.PremiumInvoiceTable, {
                    className: r,
                    children: (0, t.jsx)(b.PremiumInvoiceTableRow, {
                        label: n,
                        value: o,
                        className: C.subscriptionCostRow
                    })
                })
            }

            function Y(e) {
                let n, {
                        invoice: i,
                        plan: r
                    } = e,
                    a = (0, N.coalesceInvoiceItems)(i.invoiceItems),
                    l = a.find(e => e.subscriptionPlanId === r.id);
                return u(null != l, "newPlanInvoiceItem can not be null"), r.interval === U.SubscriptionIntervalTypes.MONTH ? n = i.taxInclusive ? O.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL : O.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : r.interval === U.SubscriptionIntervalTypes.YEAR ? n = i.taxInclusive ? O.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : O.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : u(!1, "Invalid interval type"), (0, t.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: n.format({
                        price: (0, R.formatPrice)(l.subscriptionPlanPrice, i.currency)
                    })
                })
            }
        }
    }
]);