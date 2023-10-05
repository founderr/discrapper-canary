"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [55052], {
        655052: (e, n, t) => {
            t.d(n, {
                R7: () => he,
                CP: () => ce,
                Gq: () => pe
            });
            var a = t(785893),
                r = t(667294),
                o = t(294184),
                i = t.n(o),
                l = t(441143),
                s = t.n(l),
                c = t(197597),
                u = t(202351),
                p = t(795308),
                h = t(304548),
                d = t(152042),
                f = t(929400),
                E = t(700812),
                m = t(536713),
                I = t(153686),
                S = t(19585),
                _ = t(100749),
                T = t(71103),
                y = t(165666),
                O = t(717035),
                A = t(902954),
                P = t(16703),
                v = t(367095),
                L = t(671687),
                R = t(900547),
                g = t(646875),
                D = t(406493),
                N = t(48400),
                C = t.n(N);

            function M(e) {
                var n = e.text,
                    t = e.color;
                return (0, a.jsxs)("div", {
                    className: C().upsellFooter,
                    children: [(0, a.jsx)(D.Z, {
                        className: C().upsellFooterIcon,
                        color: t
                    }), (0, a.jsx)("div", {
                        children: n
                    })]
                })
            }
            var b = t(384411),
                x = t(567403),
                U = t(793461),
                j = t(473903),
                Z = t(615796),
                w = t(711531),
                B = t(551778),
                H = t(366007),
                G = t(637330),
                k = t(630689),
                V = t(217674),
                Y = t(818417),
                F = t(930865),
                W = t(348592),
                X = t(694329),
                K = t(249052);
            const q = (0, t(260561).B)({
                kind: "user",
                id: "2023-06_guild_boosting_legacy_pricing_fix_experiment",
                label: "Guild Boosting Legacy Pricing Fix Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use Invoice Preview for Boost Pricing",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var z = t(2590),
                J = t(203600),
                Q = t(520453),
                $ = t(473708),
                ee = t(338250),
                ne = t.n(ee);

            function te(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
                return a
            }

            function ae(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function re(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        a = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    a.forEach((function(n) {
                        ae(e, n, t[n])
                    }))
                }
                return e
            }

            function oe(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        n && (a = a.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, a)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function ie(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var a, r, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (a = t.next()).done); i = !0) {
                                o.push(a.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            r = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw r
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return te(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return te(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function le(e) {
                var n = e.amount,
                    t = e.currency,
                    a = e.intervalType,
                    r = e.intervalCount,
                    o = void 0 === r ? 1 : r,
                    i = (0, K.T4)(n, t);
                return a === J.rV.YEAR ? $.Z.Messages.BILLING_PRICE_PER_YEAR_EACH.format({
                    price: i
                }) : a === J.rV.MONTH && 1 === o ? $.Z.Messages.BILLING_PRICE_PER_MONTH_EACH.format({
                    price: i
                }) : a === J.rV.MONTH && o > 1 ? $.Z.Messages.BILLING_PRICE_PER_MULTI_MONTH_EACH.format({
                    price: i
                }) : null
            }

            function se(e) {
                var n = e.intervalType,
                    t = e.intervalCount,
                    a = void 0 === t ? 1 : t;
                return n === J.rV.YEAR ? $.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : n === J.rV.MONTH && 1 === a ? $.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : null
            }

            function ce(e) {
                var n, t, r = e.guildId,
                    o = e.premiumSubscriptionPlan,
                    l = e.numGuildBoosts,
                    c = e.setNumGuildBoosts,
                    d = e.setForceDisableSubmitButton,
                    E = e.premiumSubscription,
                    m = e.onClickPremiumSubscriptionLink,
                    T = e.existingAvailableSlots,
                    P = void 0 === T ? [] : T,
                    L = e.priceOptions,
                    R = (0,
                        A.Z)(),
                    g = o.interval,
                    D = o.intervalCount,
                    N = (0, u.e7)([B.Z], (function() {
                        return B.Z.getForSkuAndInterval(J.Si.GUILD, g, D)
                    })),
                    C = (0, u.e7)([j.default], (function() {
                        return j.default.getCurrentUser()
                    })),
                    U = (0, u.e7)([x.Z], (function() {
                        return x.Z.getGuild(r)
                    }), [r]);
                s()(null != N, "Missing guildBoostingSubscriptionPlan");
                s()(null != U, "Unknown guild: ".concat(r));
                var Z = [{
                        planId: N.id,
                        quantity: 1
                    }],
                    w = null == E ? void 0 : E.items.find((function(e) {
                        return e.planId === J.Xh.PREMIUM_MONTH_TIER_2 || e.planId === J.Xh.PREMIUM_YEAR_TIER_2
                    }));
                null != w && Z.push(w);
                var k = null == E ? void 0 : E.items.find((function(e) {
                        return e.planId === J.Xh.PREMIUM_MONTH_GUILD || e.planId === J.Xh.PREMIUM_YEAR_GUILD
                    })),
                    ee = !q.useExperiment({
                        location: "32b64a_1"
                    }).enabled || null == R || !J.Tp.has(R) || null == k,
                    te = (0, S.Z)().analyticsLocations,
                    ce = ie((0, _.ED)({
                        subscriptionId: null == E ? void 0 : E.id,
                        items: Z,
                        renewal: !0,
                        paymentSourceId: null == E ? void 0 : E.paymentSourceId,
                        currency: L.currency,
                        preventFetch: ee,
                        analyticsLocations: te,
                        analyticsLocation: I.Z.GUILD_BOOSTING_PLAN_SELECT
                    }), 2),
                    ue = ce[0],
                    pe = ce[1],
                    he = !ee && null == ue && null == pe,
                    de = (null === (n = (0, O.N)()) || void 0 === n || null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === J.Si.TIER_2,
                    fe = X.ZP.hasBoostDiscount(C) && null != N.premiumUserPrice,
                    Ee = null == ue ? void 0 : ue.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === N.id
                    })),
                    me = null != Ee ? {
                        amount: Ee.amount,
                        tax: 0,
                        taxInclusive: !0,
                        currency: L.currency
                    } : X.ZP.getPrice(N.id, fe, !1, L),
                    Ie = l * me.amount,
                    Se = X.ZP.hasBoostDiscount(C) && null != E ? $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_DISCOUNT.format({
                        planName: X.ZP.getDisplayPremiumType(E.planId)
                    }) : (de ? $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL_TRIAL_VARIANT : $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL).format({
                        onPremiumSubscriptionClick: m,
                        discountPercentage: (0, K.T3)(b.default.locale, J.Rr / 100),
                        freeSubscriptionCount: J.cb
                    }),
                    _e = P.filter((function(e) {
                        return (0, F.tl)(e)
                    })).length,
                    Te = (0, X.Ap)(L.paymentSourceId),
                    ye = "HR" === (0, y.Z)().ipCountryCode && me.currency === Q.pK.EUR;
                d(he);
                return (0,
                    a.jsxs)("div", {
                    className: ne().planSelectStep,
                    children: [(0, a.jsx)("div", {
                        className: i()(ne().planSelectText, ne().bodyText),
                        children: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_STEP_SELECT_DESCRIPTION
                    }), P.length > 0 ? (0, a.jsxs)("div", {
                        className: ne().existingSlotNotice,
                        children: [(0, a.jsx)(V.Z, {
                            className: ne().existingSlotIcon,
                            color: p.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                        }), (0, a.jsxs)("div", {
                            children: [$.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_UNUSED_SLOT_NOTICE.format({
                                slotCount: P.length
                            }), _e > 0 && null != E ? (0, a.jsx)(h.Tooltip, {
                                text: $.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                                    canceledCount: _e,
                                    date: E.currentPeriodEnd
                                }),
                                children: function(e) {
                                    return (0, a.jsx)(Y.Z, oe(re({}, e), {
                                        className: ne().existingSlotTooltipWarningIcon,
                                        color: p.Z.unsafe_rawColors.YELLOW_300.css
                                    }))
                                }
                            }) : null]
                        })]
                    }) : null, (0, a.jsxs)("div", {
                        className: ne().planSelectRow,
                        children: [(0, a.jsxs)("div", {
                            className: ne().planSelectorWrapper,
                            children: [(0, a.jsx)(G.Z, {
                                value: l,
                                onChange: function(e) {
                                    return c(e)
                                },
                                className: ne().planSelector,
                                minValue: 1,
                                maxValue: 30
                            }), (0, a.jsx)("div", {
                                className: ne().planSelectorLabel,
                                children: Te ? se({
                                    intervalType: g,
                                    intervalCount: D
                                }) : $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_COUNTER
                            })]
                        }), (0, a.jsx)("div", {
                            className: i()(ne().planSelectorPreviewPrice, ae({}, ne().loadingSpinner, he)),
                            children: he ? (0, a.jsx)(h.Spinner, {}) : Te ? (0, K.T4)(me.amount, me.currency) : le({
                                intervalType: g,
                                intervalCount: D,
                                amount: me.amount,
                                currency: me.currency
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: ne().planSelectDivider
                    }), (0, a.jsxs)("div", {
                        className: ne().planSelectRow,
                        children: [(0, a.jsx)("div", {
                            className: ne().planSelectorSubtotal,
                            children: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBTOTAL
                        }), (0, a.jsx)("div", {
                            className: i()(ne().planSelectorSubtotalPrice, ae({}, ne().loadingSpinner, he)),
                            children: he ? (0, a.jsx)(h.Spinner, {}) : (0, a.jsx)(v.Z, {
                                price: Ie,
                                currency: me.currency,
                                intervalType: g,
                                intervalCount: D,
                                isPrepaidPaymentSource: Te
                            })
                        })]
                    }), ye && (0, a.jsx)(f.Z, {
                        message: $.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                            kunaPriceWithCurrency: (0, K.T4)(7.5345 * Ie, Q.pK.HRK)
                        })
                    }), (0, a.jsx)(f.Z, {
                        message: $.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                            documentationLink: W.Z.getArticleURL(z.BhN.LOCALIZED_PRICING)
                        })
                    }), (0, a.jsx)(M, {
                        text: Se,
                        color: H.JX.PREMIUM_TIER_2
                    })]
                })
            }

            function ue(e) {
                var n = e.premiumSubscription,
                    t = e.premiumSubscriptionPlan,
                    r = e.proratedInvoicePreview,
                    o = e.renewalInvoicePreview,
                    i = e.priceOptions,
                    l = t.interval,
                    c = t.intervalCount,
                    p = (0, u.e7)([B.Z], (function() {
                        return B.Z.getForSkuAndInterval(J.Si.GUILD, l, c)
                    }));
                s()(null != p, "Missing guildBoostingSubscriptionPlan");
                var h = function(e) {
                        return (0, T.j)(r.invoiceItems).find((function(n) {
                            return J.Z1.has(n.subscriptionPlanId) && e(n)
                        }))
                    },
                    d = h((function(e) {
                        return e.amount >= 0
                    }));
                s()(null != d, "Missing guild boosting invoice item");
                var f = h((function(e) {
                        return e.amount < 0
                    })),
                    E = null != f ? d.quantity - f.quantity : d.quantity,
                    m = r.invoiceItems.filter((function(e) {
                        return (0, X.uZ)(e.subscriptionPlanId)
                    })),
                    I = m.reduce((function(e, n) {
                        return e + n.amount
                    }), 0),
                    S = (0, _.pV)(d) * E,
                    y = (0, K.T4)(S, r.currency),
                    O = (0, K.og)(y, l, c),
                    A = (0, K.T4)(r.total, r.currency) + (r.currency !== Q.pK.USD ? "*" : ""),
                    v = r.total - S - I,
                    L = d.discounts.map((function(e) {
                        var n = e.amount / d.quantity;
                        return oe(re({}, e), {
                            amount: n * E
                        })
                    })),
                    R = (0, X.Ap)(i.paymentSourceId);
                return (0, a.jsxs)(a.Fragment, {
                    children: [R ? null : (0, a.jsx)(g.hG, {
                        proratedInvoice: r,
                        renewalInvoice: o
                    }), (0, a.jsxs)(P.PO, {
                        children: [(0, a.jsx)(P.q9, {
                            children: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_PURCHASE_DETAILS_HEADER
                        }), (0, a.jsx)(P.i$, {
                            label: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                                numGuildSubscriptions: E,
                                planName: (0, X.Gf)(p.id, !1, R)
                            }),
                            value: R ? y : O,
                            discounts: L,
                            originalAmount: d.subscriptionPlanPrice * E,
                            currency: r.currency,
                            interval: p.interval,
                            intervalCount: p.intervalCount
                        }), 0 !== I ? (0, a.jsx)(P.R$, {
                            label: (0, a.jsx)(g.As, {
                                label: $.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                    planName: (0, X.aq)(m[0].subscriptionPlanId)
                                }),
                                tooltipText: $.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                            }),
                            value: (0, K.T4)(I, r.currency)
                        }) : null, 0 !== v ? (0, a.jsx)(P.R$, {
                            label: (0, a.jsx)(g.As, {
                                label: $.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                                tooltipText: $.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                            }),
                            value: (0, K.T4)(v, r.currency)
                        }) : null, (0, a.jsx)(P.KU, {}), (0, a.jsx)(P.Ji, {
                            label: (r.taxInclusive ? R ? $.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : $.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : $.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                            value: A
                        }), null != n ? (0, a.jsx)(g.nd, {
                            premiumSubscription: n,
                            proratedInvoice: r,
                            renewalInvoice: o,
                            isUpdate: !0,
                            isPrepaidPaymentSource: R
                        }) : (0, a.jsx)(g.nd, {
                            renewalInvoice: o,
                            priceOptions: i,
                            isPrepaidPaymentSource: R
                        })]
                    })]
                })
            }

            function pe(e) {
                var n, t, r = e.paymentSources,
                    o = e.priceOptions,
                    i = e.currentPremiumSubscription,
                    l = e.premiumSubscriptionPaymentSourceId,
                    s = e.premiumSubscriptionPlan,
                    p = e.newAdditionalPlans,
                    f = e.onPaymentSourceChange,
                    T = e.onPaymentSourceAdd,
                    y = e.onPurchaseTermsChange,
                    O = e.legalTermsNodeRef,
                    A = e.hasLegalTermsFlash,
                    P = o.paymentSourceId,
                    v = (0, u.e7)([w.Z], (function() {
                        return null != l ? w.Z.getPaymentSource(l) : null
                    })),
                    L = (0, u.e7)([U.Z], (function() {
                        return U.Z.hidePersonalInformation
                    }));
                t = null != i ? (0, X.Zx)(i, p[0].quantity, p[0].planId) : p;
                var g, D = (0, S.Z)().analyticsLocations,
                    N = ie((0, _.ED)({
                        subscriptionId: null == i ? void 0 : i.id,
                        items: t,
                        renewal: !1,
                        applyEntitlements: !0,
                        paymentSourceId: P,
                        currency: o.currency,
                        analyticsLocations: D,
                        analyticsLocation: I.Z.GUILD_BOOSTING_REVIEW_PRORATED
                    }), 1)[0],
                    C = ie((0, _.ED)({
                        subscriptionId: null == i ? void 0 : i.id,
                        items: t,
                        renewal: !0,
                        paymentSourceId: P,
                        currency: o.currency,
                        analyticsLocations: D,
                        analyticsLocation: I.Z.GUILD_BOOSTING_REVIEW_RENEWAL
                    }), 1)[0];
                null != C && (g = {
                    amount: C.total,
                    currency: C.currency,
                    tax: C.tax,
                    taxInclusive: C.taxInclusive
                });
                var M, b = c.M.EEA_COUNTRIES.has(Z.Z.ipCountryCodeWithFallback);
                return (0, a.jsxs)("div", {
                    className: ne().reviewStep,
                    children: [null != N && null != C ? (0, a.jsx)(ue, {
                        premiumSubscription: i,
                        premiumSubscriptionPlan: s,
                        proratedInvoicePreview: N,
                        renewalInvoicePreview: C,
                        priceOptions: o
                    }) : null, (0, a.jsxs)("div", {
                        className: ne().paymentSourceWrapper,
                        children: [(0, a.jsx)(h.FormTitle, {
                            tag: h.FormTitleTags.H5,
                            children: $.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), null != l ? null != v ? (0, a.jsx)(h.TooltipContainer, {
                            text: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_PAYMENT_SOURCE_TOOLTIP,
                            children: (0, a.jsx)(E.Z, {
                                paymentSources: [v],
                                selectedPaymentSourceId: v.id,
                                hidePersonalInformation: L,
                                disabled: !0
                            })
                        }) : (0, a.jsx)("div", {
                            children: (0, a.jsx)(h.Spinner, {})
                        }) : (0, a.jsx)(E.Z, {
                            paymentSources: Object.values(r),
                            selectedPaymentSourceId: P,
                            onChange: f,
                            onPaymentSourceAdd: T,
                            hidePersonalInformation: L
                        })]
                    }), (0, a.jsx)(R.Z, {
                        isActive: A,
                        ref: O,
                        children: null != g && (0, a.jsx)(m.Z, {
                            onChange: y,
                            forceShow: !0,
                            finePrint: (0, a.jsx)(d.Z, {
                                subscriptionPlan: s,
                                paymentSourceType: null === (n = r[null != P ? P : ""]) || void 0 === n ? void 0 : n.type,
                                basePrice: g
                            }),
                            showPricingLink: (null !== (M = null == N ? void 0 : N.currency) && void 0 !== M ? M : Q.pK.USD) !== Q.pK.USD,
                            showWithdrawalWaiver: b,
                            subscriptionPlan: s
                        })
                    })]
                })
            }

            function he(e) {
                var n, t = e.onClose,
                    o = e.guild,
                    i = e.guildBoostQuantity,
                    l = e.isTransfer,
                    s = void 0 !== l && l,
                    c = e.withAnimation,
                    u = void 0 === c || c,
                    p = e.paymentSourceType,
                    d = (0, h.useThemeContext)().theme,
                    f = ie(r.useState(k.fe.Scenes.ENTRY), 2),
                    E = f[0],
                    m = f[1],
                    I = ie(r.useState(!1), 2),
                    S = I[0],
                    _ = I[1];
                n = s ? null == o ? $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION_GENERIC_GUILD.format() : $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION.format({
                    guildName: o.name
                }) : null == o ? $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION_GENERIC_GUILD.format({
                    guildSubscriptionQuantity: i
                }) : $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION.format({
                    guildName: o.name,
                    guildSubscriptionQuantity: i
                });
                return (0, a.jsxs)("div", {
                    className: ne().confirmationContainer,
                    children: [u ? (0, a.jsx)(k.fe, {
                        className: ne().confirmationAnimation,
                        nextScene: E,
                        onScenePlay: function(e) {
                            if (!S) switch (e) {
                                case k.fe.Scenes.ENTRY:
                                    return m(k.fe.Scenes.IDLE);
                                case k.fe.Scenes.IDLE:
                                    return m(k.fe.Scenes.SUCCESS);
                                case k.fe.Scenes.SUCCESS:
                                    _(!0);
                                    return m(k.fe.Scenes.IDLE)
                            }
                        },
                        pauseWhileUnfocused: !1
                    }) : null, (0, a.jsx)(L.C, {
                        className: ne().confirmationUpgradedBanner,
                        theme: d,
                        premiumType: J.p9.TIER_2,
                        type: Q.X7.has(null != p ? p : Q.He.UNKNOWN) ? L.C.Types.PREMIUM_PAYMENT_STARTED : L.C.Types.GUILD_BOOST_APPLIED
                    }), (0, a.jsx)("div", {
                        className: ne().confirmationText,
                        children: n
                    }), (0, a.jsx)(h.Button, {
                        onClick: t,
                        children: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_CLOSE_BUTTON
                    })]
                })
            }
        },
        671687: (e, n, t) => {
            t.d(n, {
                C: () => C
            });
            var a = t(785893),
                r = t(667294),
                o = t(294184),
                i = t.n(o),
                l = t(853158),
                s = t(795308),
                c = t(575945),
                u = t(304548),
                p = t(366007),
                h = t(709189),
                d = t(362660),
                f = t(203600),
                E = t(481141),
                m = t.n(E);

            function I(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function T(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        n && (a = a.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, a)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function y(e, n) {
                if (null == e) return {};
                var t, a, r = function(e, n) {
                    if (null == e) return {};
                    var t, a, r = {},
                        o = Object.keys(e);
                    for (a = 0; a < o.length; a++) {
                        t = o[a];
                        n.indexOf(t) >= 0 || (r[t] = e[t])
                    }
                    return r
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < o.length; a++) {
                        t = o[a];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
                    }
                }
                return r
            }

            function O(e, n) {
                return !n || "object" !== L(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function A(e, n) {
                A = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return A(e, n)
            }
            var P, v, L = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, a = _(e);
                    if (n) {
                        var r = _(this).constructor;
                        t = Reflect.construct(a, arguments, r)
                    } else t = a.apply(this, arguments);
                    return O(this, t)
                }
            }
            var g, D = Object.freeze({
                DURATION: (P = {}, S(P, f.p9.TIER_0, 1e3), S(P, f.p9.TIER_1, 1e3), S(P, f.p9.TIER_2, 1500), P),
                DELAY: (v = {}, S(v, f.p9.TIER_0, 400), S(v, f.p9.TIER_1, 400), S(v, f.p9.TIER_2, 2200), v),
                FLASH_TIME_PERCENT: .72,
                FLASH_DURATION_PERCENT: .08
            });
            ! function(e) {
                e.PREMIUM_ACTIVATED = "PREMIUM_ACTIVATED";
                e.PREMIUM_UPDATED = "PREMIUM_UPDATED";
                e.PREMIUM_UPGRADED = "PREMIUM_UPGRADED";
                e.GUILD_BOOST_APPLIED = "GUILD_BOOST_APPLIED";
                e.PREMIUM_PAYMENT_STARTED = "PREMIUM_PAYMENT_STARTED"
            }(g || (g = {}));
            var N = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && A(e, n)
                }(t, e);
                var n = R(t);

                function t() {
                    I(this, t);
                    var e;
                    (e = n.apply(this, arguments)).animation = new l.Z.Value(0);
                    return e
                }
                var r = t.prototype;
                r.componentDidMount = function() {
                    this.animate()
                };
                r.animate = function() {
                    var e = this.props.premiumType;
                    l.Z.timing(this.animation, {
                        toValue: 1,
                        delay: D.DELAY[e],
                        duration: D.DURATION[e]
                    }).start()
                };
                r.getContainerStyle = function() {
                    var e = this.props.flashColor,
                        n = D.FLASH_TIME_PERCENT,
                        t = D.FLASH_DURATION_PERCENT,
                        a = (0, d.Cj)(e, 0);
                    return {
                        backgroundColor: this.animation.interpolate({
                            inputRange: [0, n, n, n + t, 1],
                            outputRange: [a, a, e, e, a]
                        })
                    }
                };
                r.getShineStyle = function() {
                    return l.Z.accelerate({
                        transform: [{
                            translateX: this.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["20%", "160%"]
                            })
                        }]
                    })
                };
                r.getSvgBorderGradientId = function() {
                    var e = this.props,
                        n = e.premiumType;
                    switch (e.type) {
                        case g.GUILD_BOOST_APPLIED:
                            return p.Rj.PREMIUM_GUILD;
                        case g.PREMIUM_ACTIVATED:
                        case g.PREMIUM_PAYMENT_STARTED:
                        case g.PREMIUM_UPGRADED:
                        case g.PREMIUM_UPDATED:
                            return n === f.p9.TIER_0 ? p.Rj.PREMIUM_TIER_0 : n === f.p9.TIER_1 ? p.Rj.PREMIUM_TIER_1 : p.Rj.PREMIUM_TIER_2;
                        default:
                            throw new Error("Unsupported ShineAnimation type specified")
                    }
                };
                r.renderSvgBorder = function() {
                    switch (this.props.type) {
                        case g.GUILD_BOOST_APPLIED:
                            return (0, a.jsx)("svg", {
                                className: m().svgBorder,
                                width: "304",
                                height: "48",
                                viewBox: "0 0 304 48",
                                children: (0, a.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    fill: "none",
                                    width: "302",
                                    height: "46",
                                    rx: "8",
                                    stroke: "url(#".concat(this.getSvgBorderGradientId(), ")"),
                                    strokeWidth: "2"
                                })
                            });
                        case g.PREMIUM_PAYMENT_STARTED:
                            return (0, a.jsx)("svg", {
                                className: m().svgBorder,
                                width: "156",
                                height: "48",
                                viewBox: "0 0 156 48",
                                children: (0, a.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    fill: "none",
                                    width: "154",
                                    height: "46",
                                    rx: "8",
                                    stroke: "url(#".concat(this.getSvgBorderGradientId(), ")"),
                                    strokeWidth: "2"
                                })
                            });
                        case g.PREMIUM_ACTIVATED:
                        case g.PREMIUM_UPGRADED:
                            return (0, a.jsx)("svg", {
                                className: m().svgBorder,
                                width: "298",
                                height: "48",
                                viewBox: "0 0 298 48",
                                children: (0, a.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    fill: "none",
                                    width: "296",
                                    height: "46",
                                    rx: "8",
                                    stroke: "url(#".concat(this.getSvgBorderGradientId(), ")"),
                                    strokeWidth: "2"
                                })
                            });
                        case g.PREMIUM_UPDATED:
                            return (0, a.jsx)("svg", {
                                className: m().svgBorder,
                                width: "276",
                                height: "48",
                                viewBox: "0 0 276 48",
                                children: (0, a.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    fill: "none",
                                    width: "274",
                                    height: "46",
                                    rx: "8",
                                    stroke: "url(#".concat(this.getSvgBorderGradientId(), ")"),
                                    strokeWidth: "2"
                                })
                            });
                        default:
                            return null
                    }
                };
                r.renderSvgCopy = function() {
                    switch (this.props.type) {
                        case g.GUILD_BOOST_APPLIED:
                            return (0, a.jsx)("svg", {
                                className: m().svgCopy,
                                width: "304",
                                height: "48",
                                viewBox: "0 0 304 48",
                                children: (0, a.jsxs)("g", {
                                    fill: "currentColor",
                                    children: [(0, a.jsx)("path", {
                                        d: "M50.61,20.21a3.57,3.57,0,0,1-.25.77,3.72,3.72,0,0,1-.49.88,5.79,5.79,0,0,1-.75.85l0,0a.89.89,0,0,0,0,1.26,3.07,3.07,0,0,1,.49.54A4.29,4.29,0,0,1,50.25,26a3.78,3.78,0,0,1,.11,1.45,6.31,6.31,0,0,1-.22,1.27,7,7,0,0,1-2.56,3.71,8.42,8.42,0,0,1-5,1.32H35.24a.57.57,0,0,1-.56-.66l2.56-18.3a.58.58,0,0,1,.56-.5h7.31a6.93,6.93,0,0,1,2.5.42,4.83,4.83,0,0,1,1.87,1.18,4.1,4.1,0,0,1,1.05,1.84A5.45,5.45,0,0,1,50.61,20.21ZM44,21.88a1.93,1.93,0,0,0,1.43-.52,2,2,0,0,0,.63-1.21A1.53,1.53,0,0,0,45.83,19a1.45,1.45,0,0,0-1.3-.55H42.17a.57.57,0,0,0-.56.49l-.34,2.32a.57.57,0,0,0,.57.65Zm-1,7.53a2.44,2.44,0,0,0,1.74-.6,2.26,2.26,0,0,0,.74-1.38,1.77,1.77,0,0,0-.36-1.37,1.82,1.82,0,0,0-1.57-.63H41.19a.57.57,0,0,0-.57.49l-.39,2.84a.57.57,0,0,0,.56.65Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M54.18,20.68a6.89,6.89,0,0,1,1.1-2.92,7.91,7.91,0,0,1,2.12-2.08,9.44,9.44,0,0,1,2.75-1.27,11.56,11.56,0,0,1,3-.41,10.39,10.39,0,0,1,2.91.41,6.66,6.66,0,0,1,2.42,1.27A5.18,5.18,0,0,1,70,17.76a5.44,5.44,0,0,1,.28,2.92l-1,6.64a6.9,6.9,0,0,1-1.1,2.94,7.59,7.59,0,0,1-2.06,2.09,9.41,9.41,0,0,1-2.75,1.24,11.88,11.88,0,0,1-3.1.41,10.39,10.39,0,0,1-2.91-.41A7,7,0,0,1,55,32.35a5.53,5.53,0,0,1-1.54-2.09,5.63,5.63,0,0,1-.27-2.94Zm4,6.64a1.42,1.42,0,0,0,.14.94,2.2,2.2,0,0,0,.6.66,3.28,3.28,0,0,0,.91.38,4.61,4.61,0,0,0,1.1.14,5.15,5.15,0,0,0,1.18-.14,4.24,4.24,0,0,0,1.1-.41A2.63,2.63,0,0,0,64,28.2a2,2,0,0,0,.44-1l1-6.51A1.6,1.6,0,0,0,64.71,19a2.6,2.6,0,0,0-.94-.41,4,4,0,0,0-1.12-.14,4.94,4.94,0,0,0-1.21.14,3.83,3.83,0,0,0-1.07.41,3.19,3.19,0,0,0-.86.68,2.06,2.06,0,0,0-.41,1Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M73.53,20.68a6.89,6.89,0,0,1,1.1-2.92,7.91,7.91,0,0,1,2.12-2.08,9.44,9.44,0,0,1,2.75-1.27,11.56,11.56,0,0,1,3-.41,10.39,10.39,0,0,1,2.91.41,6.66,6.66,0,0,1,2.42,1.27,5.18,5.18,0,0,1,1.54,2.08,5.44,5.44,0,0,1,.28,2.92l-1,6.64a6.9,6.9,0,0,1-1.1,2.94,7.59,7.59,0,0,1-2.06,2.09,9.41,9.41,0,0,1-2.75,1.24,11.88,11.88,0,0,1-3.1.41,10.39,10.39,0,0,1-2.91-.41,7,7,0,0,1-2.4-1.24,5.41,5.41,0,0,1-1.53-2.09,5.52,5.52,0,0,1-.28-2.94Zm4,6.64a1.48,1.48,0,0,0,.14.94,2.2,2.2,0,0,0,.6.66,3.28,3.28,0,0,0,.91.38,4.61,4.61,0,0,0,1.1.14,5.15,5.15,0,0,0,1.18-.14,4.24,4.24,0,0,0,1.1-.41,2.63,2.63,0,0,0,.82-.69,2,2,0,0,0,.44-1l1-6.51a1.8,1.8,0,0,0-.11-1,1.72,1.72,0,0,0-.58-.68,2.6,2.6,0,0,0-.94-.41A4,4,0,0,0,82,18.48a4.94,4.94,0,0,0-1.21.14,3.83,3.83,0,0,0-1.07.41,3.19,3.19,0,0,0-.86.68,2.06,2.06,0,0,0-.41,1Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M93.91,28a.66.66,0,0,1,.88.09,3.75,3.75,0,0,0,1.34.91,5.57,5.57,0,0,0,2.19.47,4.1,4.1,0,0,0,1.76-.36A1.47,1.47,0,0,0,101,28a.93.93,0,0,0-.16-.77,1.88,1.88,0,0,0-.69-.58,4.29,4.29,0,0,0-1-.36A7.84,7.84,0,0,0,97.94,26a7.78,7.78,0,0,1-2.2-.72A6.33,6.33,0,0,1,94,23.89a5.29,5.29,0,0,1-1.07-2,5.48,5.48,0,0,1-.08-2.53,6.12,6.12,0,0,1,1-2.5,6.25,6.25,0,0,1,1.85-1.67A7.55,7.55,0,0,1,98,14.27a12.85,12.85,0,0,1,2.64-.27,11,11,0,0,1,1.73.14,6.34,6.34,0,0,1,3.16,1.45,7.79,7.79,0,0,1,1,1.05.55.55,0,0,1-.13.79l-2.68,1.86a.65.65,0,0,1-.78-.07,3.75,3.75,0,0,0-1.15-.69,5.23,5.23,0,0,0-1.74-.35,3.22,3.22,0,0,0-1.62.33,1.33,1.33,0,0,0-.77,1.09,1.26,1.26,0,0,0,.55,1.3,5.76,5.76,0,0,0,1.79.65,19.61,19.61,0,0,1,2.45.66,5.4,5.4,0,0,1,2,1.16,4.18,4.18,0,0,1,1.24,1.95,6.27,6.27,0,0,1,0,3,6.49,6.49,0,0,1-2.8,4.26,8,8,0,0,1-2.48,1.07,11.5,11.5,0,0,1-2.94.36,8.09,8.09,0,0,1-1.84-.22,9.22,9.22,0,0,1-1.84-.66A8.52,8.52,0,0,1,92.22,32a6.61,6.61,0,0,1-1.06-1.12.55.55,0,0,1,.1-.74Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M119.86,18.75a.57.57,0,0,0-.57.5l-1.92,14a.58.58,0,0,1-.57.5H113a.58.58,0,0,1-.57-.66L114.3,19.4a.58.58,0,0,0-.57-.65H109.8a.57.57,0,0,1-.57-.65l.49-3.36a.58.58,0,0,1,.57-.49h14.32a.57.57,0,0,1,.56.65l-.49,3.36a.57.57,0,0,1-.57.49Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M139.51,24.87l-.51-5a.13.13,0,0,0-.12-.11h0a.12.12,0,0,0-.11.08l-1.87,4.89a.54.54,0,0,0,.51.72H139A.54.54,0,0,0,139.51,24.87Zm6,8.86h-4.23a.55.55,0,0,1-.53-.44l-.58-3a.55.55,0,0,0-.53-.44h-4.46a.53.53,0,0,0-.49.32l-1.47,3.27a.55.55,0,0,1-.49.32h-4.14a.53.53,0,0,1-.48-.77l9.1-18.39a.55.55,0,0,1,.48-.3h3.77a.56.56,0,0,1,.53.42l4.05,18.39A.54.54,0,0,1,145.55,33.73Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M161.19,29.35a.52.52,0,0,1,.19.8A9,9,0,0,1,154,34c-3.86,0-7.43-2.23-6.81-6.65l.94-6.7C148.77,16.25,153,14,157,14a6.16,6.16,0,0,1,6.12,4,.53.53,0,0,1-.31.68l-3.36,1.27a.54.54,0,0,1-.64-.21,3,3,0,0,0-2.58-1.19c-1.42,0-2.84.8-3,2.12l-.94,6.7c-.2,1.27,1,2.06,2.42,2.06A3.51,3.51,0,0,0,157.47,28a.53.53,0,0,1,.67-.16Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M174.59,19.21l-2,14.06a.54.54,0,0,1-.53.46h-3.95a.54.54,0,0,1-.54-.61l1.92-13.76a.53.53,0,0,0-.53-.61h-4.08a.53.53,0,0,1-.53-.6l.51-3.45a.54.54,0,0,1,.53-.45H180a.54.54,0,0,1,.54.6L180,18.3a.54.54,0,0,1-.54.45h-4.38A.54.54,0,0,0,174.59,19.21Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M184.73,33.73h-3.89a.53.53,0,0,1-.53-.61l2.6-18.39a.54.54,0,0,1,.53-.46h3.9a.54.54,0,0,1,.53.61l-2.6,18.39A.55.55,0,0,1,184.73,33.73Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M203.71,14.25h4.13a.52.52,0,0,1,.48.76L199,33.43a.53.53,0,0,1-.48.3h-3.8a.54.54,0,0,1-.52-.42l-4.11-18.42a.54.54,0,0,1,.53-.64h4.23a.53.53,0,0,1,.52.43l1.67,9s0,0,0,.06l.27,4.62h.06l1.49-4.59,0-.06,4.32-9.2A.55.55,0,0,1,203.71,14.25Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M214,24.87l-.52-5a.12.12,0,0,0-.12-.11h0a.11.11,0,0,0-.11.08l-1.87,4.89a.53.53,0,0,0,.5.72h1.58A.54.54,0,0,0,214,24.87Zm6,8.86h-4.23a.55.55,0,0,1-.53-.44l-.58-3a.55.55,0,0,0-.53-.44h-4.47a.55.55,0,0,0-.49.32l-1.47,3.27a.54.54,0,0,1-.49.32h-4.13a.53.53,0,0,1-.48-.77l9.1-18.39a.55.55,0,0,1,.48-.3H216a.54.54,0,0,1,.52.42l4.05,18.39A.53.53,0,0,1,220,33.73Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M230.49,19.21l-2,14.06a.55.55,0,0,1-.53.46h-4a.54.54,0,0,1-.53-.61l1.92-13.76a.54.54,0,0,0-.53-.61h-4.08a.52.52,0,0,1-.53-.6l.51-3.45a.54.54,0,0,1,.53-.45h14.58a.52.52,0,0,1,.53.6l-.51,3.45a.53.53,0,0,1-.53.45H231A.53.53,0,0,0,230.49,19.21Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M243.26,21.8H250a.54.54,0,0,1,.53.61l-.47,3.3a.52.52,0,0,1-.53.46H242.5a.53.53,0,0,0-.53.46l-.27,1.85a.53.53,0,0,0,.53.6h7.45a.53.53,0,0,1,.53.6l-.49,3.59a.54.54,0,0,1-.53.46H236.56a.53.53,0,0,1-.53-.61l2.6-18.39a.54.54,0,0,1,.53-.46h12.63a.54.54,0,0,1,.54.61l-.52,3.58a.54.54,0,0,1-.53.46h-7.75a.53.53,0,0,0-.53.45l-.27,1.83A.53.53,0,0,0,243.26,21.8Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M260.57,29.11c1.36,0,2.59-.74,2.73-1.79l.94-6.53c.14-1.08-.83-1.93-2.19-1.93H260a.54.54,0,0,0-.53.46l-1.32,9.19a.53.53,0,0,0,.53.6Zm1.95-14.84c4,0,7.37,2,6.73,6.52l-.94,6.53c-.64,4.48-4.59,6.41-8.55,6.41H253a.53.53,0,0,1-.53-.61l2.6-18.39a.54.54,0,0,1,.53-.46Z"
                                    })]
                                })
                            });
                        case g.PREMIUM_PAYMENT_STARTED:
                            return (0, a.jsx)("svg", {
                                className: m().svgCopy,
                                width: "156",
                                height: "48",
                                viewBox: "0 0 156 48",
                                children: (0, a.jsxs)("g", {
                                    fill: "currentColor",
                                    children: [(0, a.jsx)("path", {
                                        d: "M115.707 20.8664L114.751 27.2572C114.533 28.7676 112.813 29.4689 111.229 29.4689C109.755 29.4689 108.308 28.7676 108.499 27.3924L109.455 20.8664C109.673 19.437 111.393 18.7089 112.977 18.7089C114.56 18.7089 115.925 19.437 115.707 20.8664ZM113.733 14.3164L113.733 14.3135H103.446C103.183 14.3135 102.96 14.5039 102.922 14.7608L102.421 18.137C102.375 18.4526 102.622 18.7358 102.945 18.7358H104.824C105.013 18.7358 105.142 18.9262 105.068 19.0979C104.834 19.6406 104.663 20.2299 104.568 20.8664L103.612 27.3924C102.984 31.761 106.67 33.9451 110.683 33.9451C114.888 33.9451 119.011 31.761 119.639 27.3924L120.594 20.8664C121.21 16.5841 117.654 14.401 113.733 14.3164Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M51.9335 23.2501L51.9862 26.4178C51.9873 26.483 51.943 26.5403 51.8791 26.5563L50.7895 22.7353C50.7878 22.7295 50.7857 22.7238 50.7833 22.7182L47.4025 14.9005C47.3192 14.708 47.1276 14.583 46.9154 14.583H43.0842C42.82 14.583 42.5964 14.7753 42.5597 15.0336L40.0052 33.0799C39.9607 33.3945 40.2079 33.6753 40.5295 33.6753H44.3462C44.6107 33.6753 44.8347 33.4826 44.8708 33.2236L45.8714 26.0543C45.8722 26.0472 45.8726 26.0401 45.8726 26.033L45.818 22.349L45.9271 22.3224L47.0715 26.1432C47.0732 26.1488 47.0751 26.154 47.0774 26.1593L50.2394 33.3603C50.3233 33.5515 50.5142 33.6753 50.7251 33.6753H54.8582C55.1222 33.6753 55.346 33.483 55.3827 33.2247L57.9376 15.1784C57.9824 14.8638 57.7349 14.583 57.4133 14.583H53.6228C53.3587 14.583 53.1349 14.7751 53.0982 15.0334L51.9348 23.2282C51.9339 23.2355 51.9333 23.2428 51.9335 23.2501Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M59.3201 33.6753H63.1376C63.4019 33.6753 63.6255 33.483 63.6622 33.2247L66.2167 15.1784C66.2614 14.8638 66.014 14.583 65.6923 14.583H61.8748C61.6105 14.583 61.3869 14.7753 61.3502 15.0336L58.7958 33.0799C58.751 33.3945 58.9985 33.6753 59.3201 33.6753Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M68.7951 15.0039L68.295 18.38C68.2482 18.6958 68.4958 18.9787 68.8189 18.9787H72.8136C73.1346 18.9787 73.382 19.2589 73.3382 19.5731L71.4563 33.0814C71.4124 33.3956 71.6596 33.6758 71.9809 33.6758H75.8536C76.1181 33.6758 76.3421 33.4829 76.3782 33.2239L78.2999 19.4306C78.336 19.1716 78.5598 18.9787 78.8245 18.9787H83.1195C83.3823 18.9787 83.6053 18.7885 83.6434 18.5316L84.144 15.1554C84.1908 14.8398 83.9429 14.5566 83.62 14.5566H69.319C69.0562 14.5566 68.8331 14.7471 68.7951 15.0039Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M95.8577 21.2436C95.721 22.3492 94.8476 23.4547 93.3456 23.4547H91.0889C90.7668 23.4547 90.5194 23.1732 90.5648 22.8582L91.0423 19.5357C91.0794 19.2778 91.303 19.0861 91.5667 19.0861H93.9735C95.4206 19.0861 95.9939 20.084 95.8577 21.2436ZM94.5196 14.583H87.2539C86.9898 14.583 86.7661 14.7753 86.7296 15.0336L84.1749 33.0799C84.1304 33.3945 84.3778 33.6753 84.6992 33.6753H88.5707C88.8352 33.6753 89.0592 33.4826 89.0953 33.2236L89.847 27.8336C89.8651 27.704 89.9771 27.6078 90.1094 27.6078H90.6072C90.6974 27.6078 90.7814 27.6532 90.8301 27.7282L94.5274 33.4343C94.6246 33.5845 94.7927 33.6753 94.9733 33.6753H99.7551C100.183 33.6753 100.434 33.199 100.189 32.8524L96.309 27.3745C96.216 27.243 96.2639 27.0603 96.4099 26.9899C98.8867 25.7943 100.325 24.5693 100.799 21.1626C101.345 16.6863 98.506 14.583 94.5196 14.583Z"
                                    })]
                                })
                            });
                        case g.PREMIUM_ACTIVATED:
                            return (0, a.jsx)("svg", {
                                className: m().svgCopy,
                                width: "298",
                                height: "48",
                                viewBox: "0 0 298 48",
                                children: (0, a.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M112.46,20.67l-1,6.52c-.22,1.54-2,2.25-3.59,2.25s-3-.71-2.78-2.11l1-6.66c.23-1.45,2-2.2,3.59-2.2s3,.75,2.79,2.2m-2-6.67H100a.55.55,0,0,0-.54.46l-.51,3.44a.54.54,0,0,0,.54.61h1.91a.26.26,0,0,1,.25.37,7.23,7.23,0,0,0-.51,1.8l-1,6.66c-.64,4.45,3.12,6.68,7.21,6.68,4.28,0,8.49-2.23,9.13-6.68l1-6.66c.63-4.36-3-6.59-7-6.67m-63,9.1.06,3.23a.14.14,0,0,1-.11.14l-1.11-3.89v0l-3.45-8a.54.54,0,0,0-.49-.32H38.42a.53.53,0,0,0-.53.46L35.28,33.12a.54.54,0,0,0,.54.61h3.89a.52.52,0,0,0,.53-.46l1-7.31v0l-.06-3.75.11,0,1.17,3.89v0l3.23,7.34a.52.52,0,0,0,.49.32h4.22a.54.54,0,0,0,.53-.46l2.6-18.39a.53.53,0,0,0-.53-.61H49.17a.54.54,0,0,0-.54.46l-1.18,8.35a0,0,0,0,0,0,0M55,33.73h3.9a.53.53,0,0,0,.53-.46L62,14.88a.53.53,0,0,0-.53-.61H57.58a.54.54,0,0,0-.54.46l-2.6,18.39a.53.53,0,0,0,.53.61m9.66-19-.51,3.44a.54.54,0,0,0,.54.61h4.07a.52.52,0,0,1,.53.6L67.35,33.13a.52.52,0,0,0,.53.6h4a.52.52,0,0,0,.53-.46l2-14.06a.55.55,0,0,1,.54-.46h4.38a.54.54,0,0,0,.53-.46l.51-3.44a.53.53,0,0,0-.53-.61H65.17a.55.55,0,0,0-.54.46m27.59,6.36a2.52,2.52,0,0,1-2.56,2.25h-2.3a.53.53,0,0,1-.53-.61l.48-3.38a.54.54,0,0,1,.54-.46H90.3a1.8,1.8,0,0,1,1.92,2.2m-1.36-6.79H83.45a.52.52,0,0,0-.53.46L80.31,33.12a.54.54,0,0,0,.54.61h3.94a.54.54,0,0,0,.54-.46l.76-5.49a.27.27,0,0,1,.27-.23h.51a.27.27,0,0,1,.23.12l3.77,5.82a.54.54,0,0,0,.45.24H96.2a.53.53,0,0,0,.44-.84l-4-5.58a.27.27,0,0,1,.11-.39c2.52-1.22,4-2.47,4.47-5.94.56-4.57-2.34-6.71-6.4-6.71M133,24.88l-.52-5a.11.11,0,0,0-.12-.1h0a.11.11,0,0,0-.11.07l-1.87,4.9a.53.53,0,0,0,.5.71h1.58a.54.54,0,0,0,.54-.58m6,8.85h-4.23a.54.54,0,0,1-.53-.43l-.59-3a.52.52,0,0,0-.52-.43h-4.47a.53.53,0,0,0-.49.32l-1.47,3.27a.52.52,0,0,1-.49.31h-4.13a.53.53,0,0,1-.48-.76l9.1-18.39a.55.55,0,0,1,.48-.3H135a.54.54,0,0,1,.52.42l4.05,18.39a.53.53,0,0,1-.52.64m15.63-4.37a.53.53,0,0,1,.19.8A9,9,0,0,1,147.47,34c-3.86,0-7.42-2.23-6.81-6.65l.94-6.7c.62-4.4,4.84-6.65,8.79-6.65a6.16,6.16,0,0,1,6.12,4,.53.53,0,0,1-.32.68l-3.35,1.27a.54.54,0,0,1-.64-.22,3,3,0,0,0-2.59-1.18c-1.41,0-2.83.8-3,2.12l-.94,6.7c-.2,1.26,1,2.06,2.42,2.06A3.54,3.54,0,0,0,150.91,28a.54.54,0,0,1,.67-.17ZM168,19.22l-2,14.05a.52.52,0,0,1-.53.46h-3.95a.52.52,0,0,1-.53-.6L163,19.36a.54.54,0,0,0-.54-.6h-4.07a.53.53,0,0,1-.53-.61l.51-3.44a.54.54,0,0,1,.53-.46h14.57a.53.53,0,0,1,.53.61l-.51,3.45a.52.52,0,0,1-.53.45h-4.38a.54.54,0,0,0-.53.46m10.14,14.51h-3.89a.54.54,0,0,1-.54-.6l2.61-18.39a.54.54,0,0,1,.53-.46h3.89a.54.54,0,0,1,.54.61l-2.61,18.39a.52.52,0,0,1-.53.45m19-19.48h4.13a.53.53,0,0,1,.48.77l-9.31,18.42a.53.53,0,0,1-.48.29h-3.79a.54.54,0,0,1-.53-.41l-4.1-18.42a.54.54,0,0,1,.52-.65h4.23a.55.55,0,0,1,.53.44l1.66,9a.13.13,0,0,1,0,.06l.28,4.61h.05l1.49-4.58,0-.06,4.32-9.2a.54.54,0,0,1,.48-.31m10.26,10.63-.51-5a.12.12,0,0,0-.12-.1h0a.14.14,0,0,0-.12.07l-1.86,4.9a.52.52,0,0,0,.5.71h1.58a.53.53,0,0,0,.53-.58m6,8.85h-4.23a.54.54,0,0,1-.53-.43l-.58-3a.54.54,0,0,0-.53-.43h-4.46a.52.52,0,0,0-.49.32l-1.47,3.27a.54.54,0,0,1-.49.31h-4.13A.53.53,0,0,1,196,33l9.1-18.39a.55.55,0,0,1,.49-.3h3.76a.56.56,0,0,1,.53.42l4,18.39a.54.54,0,0,1-.53.64M223.9,19.22l-2,14.05a.54.54,0,0,1-.53.46h-4a.53.53,0,0,1-.53-.6l1.92-13.77a.52.52,0,0,0-.53-.6h-4.08a.54.54,0,0,1-.53-.61l.51-3.44a.55.55,0,0,1,.53-.46h14.58a.53.53,0,0,1,.53.61l-.51,3.45a.54.54,0,0,1-.53.45h-4.38a.53.53,0,0,0-.53.46m12.77,2.59h6.75a.53.53,0,0,1,.53.6l-.47,3.31a.53.53,0,0,1-.53.46h-7a.54.54,0,0,0-.53.45l-.26,1.86a.53.53,0,0,0,.53.6h7.44a.52.52,0,0,1,.53.6l-.49,3.58a.53.53,0,0,1-.53.46H230a.53.53,0,0,1-.53-.6L232,14.74a.55.55,0,0,1,.54-.46h12.62a.53.53,0,0,1,.53.61l-.51,3.58a.53.53,0,0,1-.53.45h-7.75a.54.54,0,0,0-.53.46l-.26,1.82a.53.53,0,0,0,.53.61M254,29.12c1.36,0,2.58-.74,2.72-1.79l.95-6.54c.14-1.07-.84-1.92-2.2-1.92h-2.06a.54.54,0,0,0-.54.45l-1.32,9.19a.54.54,0,0,0,.53.61Zm1.94-14.84c4,0,7.37,2,6.73,6.51l-.94,6.54c-.64,4.48-4.59,6.4-8.54,6.4h-6.75a.54.54,0,0,1-.54-.6l2.61-18.39a.54.54,0,0,1,.53-.46Z"
                                })
                            });
                        case g.PREMIUM_UPGRADED:
                            return (0, a.jsx)("svg", {
                                className: m().svgCopy,
                                width: "298",
                                height: "48",
                                viewBox: "0 0 298 48",
                                children: (0, a.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M112.39,20.67l-1,6.52c-.22,1.54-2,2.26-3.59,2.26s-3-.72-2.79-2.12l1-6.66c.22-1.46,2-2.2,3.59-2.2s3,.74,2.78,2.2m-2-6.68H99.89a.52.52,0,0,0-.53.46l-.51,3.44a.53.53,0,0,0,.53.61h1.92a.26.26,0,0,1,.24.37,7.23,7.23,0,0,0-.51,1.8l-1,6.66c-.64,4.45,3.12,6.68,7.21,6.68,4.29,0,8.49-2.23,9.13-6.68l1-6.66c.63-4.36-3-6.59-7-6.68m-63,9.11,0,3.23a.15.15,0,0,1-.11.15h0l-1.11-3.9v0l-3.44-8a.55.55,0,0,0-.5-.33H38.33a.54.54,0,0,0-.53.46L35.19,33.13a.54.54,0,0,0,.54.61h3.89a.53.53,0,0,0,.53-.47l1-7.31v0l-.06-3.76.11,0,1.17,3.89v0l3.22,7.34a.55.55,0,0,0,.5.33h4.21a.55.55,0,0,0,.54-.46l2.6-18.41a.54.54,0,0,0-.53-.61H49.08a.53.53,0,0,0-.53.46l-1.19,8.36v0m7.53,10.64h3.89a.55.55,0,0,0,.54-.46l2.6-18.41a.53.53,0,0,0-.53-.61H57.5a.55.55,0,0,0-.54.46l-2.6,18.41a.53.53,0,0,0,.53.61m9.66-19.05L64,18.14a.54.54,0,0,0,.54.61h4.07a.54.54,0,0,1,.54.6L67.27,33.13a.53.53,0,0,0,.53.61h4a.55.55,0,0,0,.54-.47l2-14.06a.52.52,0,0,1,.53-.46h4.38a.55.55,0,0,0,.54-.46l.51-3.44a.54.54,0,0,0-.54-.61H65.09a.54.54,0,0,0-.54.45m27.6,6.37a2.52,2.52,0,0,1-2.56,2.25h-2.3a.54.54,0,0,1-.54-.61l.49-3.38a.54.54,0,0,1,.54-.46h2.45a1.79,1.79,0,0,1,1.92,2.2m-1.36-6.8H83.38a.55.55,0,0,0-.54.46l-2.6,18.41a.53.53,0,0,0,.53.61h4a.55.55,0,0,0,.54-.47L86,27.78a.27.27,0,0,1,.27-.23h.51a.25.25,0,0,1,.22.12l3.77,5.82a.57.57,0,0,0,.46.25h4.88a.54.54,0,0,0,.44-.84l-4-5.59a.27.27,0,0,1,.1-.39c2.53-1.22,4-2.47,4.48-6,.56-4.56-2.34-6.71-6.4-6.71m39.67.59-1.7,12.09c-.21,1.54,1.05,2.3,2.43,2.3a2.84,2.84,0,0,0,3.05-2.3L136,14.71a.51.51,0,0,1,.5-.43h3.87a.5.5,0,0,1,.5.5v.07l-1.7,12.09c-.62,4.48-4.78,6.72-8.59,6.72s-7.29-2.24-6.67-6.72l1.73-12.23a.49.49,0,0,1,.49-.43H130a.5.5,0,0,1,.5.5A.17.17,0,0,1,130.46,14.85Zm10.72,18,2.53-18.11a.51.51,0,0,1,.5-.43h7.2c4.67,0,6.43,3.43,6.05,6.88a7.29,7.29,0,0,1-7.69,6.65h-2.62a.51.51,0,0,0-.5.43L146,33a.49.49,0,0,1-.49.43h-3.82a.5.5,0,0,1-.51-.5S141.18,32.85,141.18,32.82Zm6.71-9.31h2.23A2.56,2.56,0,0,0,152.65,21a1.78,1.78,0,0,0-1.86-2.24h-2.37a.51.51,0,0,0-.5.43l-.53,3.72a.5.5,0,0,0,.43.57Zm25.79-5.42L169.37,20A2.33,2.33,0,0,0,167,18.3a2.86,2.86,0,0,0-3,2.19l-.92,6.56c-.18,1.46,1.06,2.19,2.49,2.19s2.91-.73,3.1-2.19l0-.24a.51.51,0,0,0-.44-.57h-2a.5.5,0,0,1-.51-.5s0,0,0-.07l.4-2.94a.5.5,0,0,1,.5-.43h6.68a.5.5,0,0,1,.5.5v.07l-.57,4.18c-.62,4.4-4.65,6.61-8.48,6.61s-7.21-2.21-6.59-6.61l.92-6.56c.62-4.46,4.67-6.48,8.45-6.48C170.09,14,172.79,15,173.68,18.09Zm12.26,15.07-3.59-5.61a.5.5,0,0,0-.42-.23h-.16a.49.49,0,0,0-.49.43L180.56,33a.51.51,0,0,1-.5.43h-3.87a.5.5,0,0,1-.5-.5v-.07l2.53-18.11a.51.51,0,0,1,.5-.43h7.21c3.94,0,6.74,2.11,6.2,6.59-.48,3.53-2,4.72-4.61,6l4,5.78a.5.5,0,0,1-.13.69.48.48,0,0,1-.29.09h-4.78A.48.48,0,0,1,185.94,33.16Zm-3.43-10h2.25A2.46,2.46,0,0,0,187.25,21a1.76,1.76,0,0,0-1.86-2.16H183a.5.5,0,0,0-.5.43L182,22.59a.51.51,0,0,0,.43.57Zm24.55-8.49L211,32.79a.49.49,0,0,1-.38.59h-4.25a.51.51,0,0,1-.5-.4l-.57-3a.49.49,0,0,0-.49-.41h-4.36a.51.51,0,0,0-.46.3l-1.44,3.24a.5.5,0,0,1-.46.29H194a.5.5,0,0,1-.5-.5.44.44,0,0,1,.05-.22l8.85-18.11a.5.5,0,0,1,.45-.28h3.68A.49.49,0,0,1,207.06,14.67Zm-4.51,10.6h1.58a.51.51,0,0,0,.5-.5v-.05l-.5-4.95a.12.12,0,0,0-.11-.09h0a.13.13,0,0,0-.13.09l-1.81,4.82a.5.5,0,0,0,.29.65A.57.57,0,0,0,202.55,25.27Zm13.92-11h6.72c3.83,0,7.15,1.94,6.53,6.4l-.92,6.42c-.62,4.4-4.45,6.29-8.29,6.29h-6.57a.5.5,0,0,1-.51-.5s0,0,0-.07L216,14.71A.51.51,0,0,1,216.47,14.28Zm2.95,14.58h1.88a2.48,2.48,0,0,0,2.64-1.76l.92-6.42c.14-1.05-.81-1.89-2.13-1.89h-2a.5.5,0,0,0-.5.43l-1.29,9.07a.5.5,0,0,0,.43.56Zm17.93-9.59-.26,1.84a.5.5,0,0,0,.43.56h6.66a.5.5,0,0,1,.5.5v.07l-.46,3.29a.49.49,0,0,1-.49.43h-6.88a.51.51,0,0,0-.5.43l-.26,1.86a.51.51,0,0,0,.43.57h7.34a.5.5,0,0,1,.5.5v.07L243.87,33a.49.49,0,0,1-.5.43H231.08a.5.5,0,0,1-.5-.5v-.07l2.53-18.11a.51.51,0,0,1,.5-.43h12.3a.5.5,0,0,1,.5.5.15.15,0,0,1,0,.07l-.5,3.56a.51.51,0,0,1-.5.43h-7.55A.51.51,0,0,0,237.35,19.27Zm12.14-5h6.71c3.84,0,7.16,1.94,6.54,6.4l-.92,6.42c-.62,4.4-4.46,6.29-8.29,6.29H247a.5.5,0,0,1-.5-.5.2.2,0,0,1,0-.07L249,14.71A.5.5,0,0,1,249.49,14.28Zm2.94,14.58h1.88A2.49,2.49,0,0,0,257,27.1l.92-6.42c.13-1.05-.81-1.89-2.14-1.89h-2a.49.49,0,0,0-.49.43l-1.29,9.07a.5.5,0,0,0,.42.56Z"
                                })
                            });
                        case g.PREMIUM_UPDATED:
                            return (0, a.jsx)("svg", {
                                className: m().svgCopy,
                                width: "276",
                                height: "48",
                                viewBox: "0 0 276 48",
                                children: (0, a.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M112.23,20.66l-1,6.49c-.22,1.54-2,2.25-3.58,2.25s-3-.71-2.77-2.11l1-6.63c.22-1.46,2-2.2,3.58-2.2S112.46,19.2,112.23,20.66Zm-2-6.66H99.77a.53.53,0,0,0-.53.46l-.51,3.43a.52.52,0,0,0,.45.6h2a.27.27,0,0,1,.25.37,7,7,0,0,0-.51,1.8l-1,6.63c-.64,4.44,3.11,6.66,7.19,6.66,4.27,0,8.46-2.22,9.1-6.66l1-6.63C117.83,16.3,114.21,14.08,110.23,14ZM47.39,23.08l.06,3.22a.14.14,0,0,1-.11.14l-1.11-3.88v0l-3.43-7.95a.55.55,0,0,0-.5-.32H38.4a.54.54,0,0,0-.54.45l-2.6,18.35a.53.53,0,0,0,.46.6h4a.53.53,0,0,0,.53-.46l1-7.29v0l-.06-3.75.12,0L42.45,26v0l3.22,7.32a.55.55,0,0,0,.49.32h4.21a.54.54,0,0,0,.53-.46l2.6-18.35a.54.54,0,0,0-.46-.6H49.11a.53.53,0,0,0-.53.45l-1.19,8.34v0Zm7.51,10.6h3.88a.55.55,0,0,0,.54-.46l2.6-18.35a.55.55,0,0,0-.46-.6h-4a.53.53,0,0,0-.53.45l-2.6,18.35a.52.52,0,0,0,.46.6Zm9.64-19L64,18.13a.53.53,0,0,0,.53.61h4.06a.54.54,0,0,1,.54.6L67.24,33.07a.53.53,0,0,0,.46.6h4a.55.55,0,0,0,.54-.46l2-14a.53.53,0,0,1,.53-.46H79.1a.54.54,0,0,0,.53-.46l.51-3.43a.55.55,0,0,0-.45-.61H65.07A.53.53,0,0,0,64.54,14.69ZM92.05,21a2.51,2.51,0,0,1-2.55,2.25H87.2a.53.53,0,0,1-.53-.53v-.08l.49-3.38a.52.52,0,0,1,.53-.45h2.45A1.79,1.79,0,0,1,92.05,21Zm-1.36-6.77H83.3a.54.54,0,0,0-.53.46l-2.6,18.34a.53.53,0,0,0,.46.6h4a.55.55,0,0,0,.54-.46l.76-5.48a.27.27,0,0,1,.27-.23h.5a.28.28,0,0,1,.23.12l3.76,5.8a.53.53,0,0,0,.45.25H96a.54.54,0,0,0,.44-.84l-3.95-5.57a.27.27,0,0,1,.06-.37.05.05,0,0,0,0,0c2.52-1.21,4-2.46,4.47-5.92.55-4.55-2.33-6.69-6.39-6.69Zm40.12,0a.49.49,0,0,1,.49.5v.07l-1.73,12.32c-.22,1.56,1.07,2.33,2.47,2.33a2.9,2.9,0,0,0,3.1-2.33l1.76-12.46a.49.49,0,0,1,.49-.43h4a.49.49,0,0,1,.49.5v.07l-1.73,12.32c-.64,4.56-4.87,6.84-8.74,6.84s-7.42-2.28-6.79-6.84l1.76-12.46a.49.49,0,0,1,.49-.43Zm11.88,19.45a.51.51,0,0,1-.5-.49s0-.05,0-.07l2.58-18.46a.5.5,0,0,1,.49-.43h7.35c4.75,0,6.53,3.49,6.15,7a7.41,7.41,0,0,1-7.83,6.76h-2.68a.49.49,0,0,0-.48.42l-.68,4.84a.5.5,0,0,1-.49.42Zm5.83-10.62a.5.5,0,0,0,.42.56h2.36a2.62,2.62,0,0,0,2.58-2.53,1.82,1.82,0,0,0-1.9-2.28h-2.42a.49.49,0,0,0-.49.42Zm13.27-8.4a.49.49,0,0,1,.49-.43h6.85c3.9,0,7.28,2,6.65,6.51l-.94,6.54c-.63,4.48-4.53,6.4-8.43,6.4h-6.72a.49.49,0,0,1-.49-.49.17.17,0,0,1,0-.07Zm3,13.84a.5.5,0,0,0,.42.56h2c1.35,0,2.56-.74,2.7-1.79l.93-6.54c.14-1.07-.82-1.92-2.17-1.92h-2.07a.49.49,0,0,0-.49.42l-1.32,9.26ZM188,14.28a.49.49,0,0,1,.48.39l4,18.46a.49.49,0,0,1-.38.59h-4.36a.49.49,0,0,1-.48-.4l-.59-3.1a.5.5,0,0,0-.49-.4H181.7a.5.5,0,0,0-.45.3l-1.47,3.31a.49.49,0,0,1-.45.29h-4.17a.49.49,0,0,1-.49-.49.54.54,0,0,1,.05-.22l9-18.46a.51.51,0,0,1,.45-.28Zm-4.6,10.52a.5.5,0,0,0,.29.63.51.51,0,0,0,.17,0h1.66A.49.49,0,0,0,186,25v0l-.51-5a.13.13,0,0,0-.07-.16.13.13,0,0,0-.16.07.13.13,0,0,0,0,.06Zm24.73-6.46a.5.5,0,0,1-.49.42h-4.39a.5.5,0,0,0-.49.43l-1.94,14.12a.49.49,0,0,1-.49.42h-4a.49.49,0,0,1-.49-.49.17.17,0,0,1,0-.07l1.9-13.85a.48.48,0,0,0-.42-.55h-4.18a.49.49,0,0,1-.49-.49v-.08l.52-3.51a.51.51,0,0,1,.49-.43h14.47a.5.5,0,0,1,.49.5.17.17,0,0,1,0,.07l-.51,3.52Zm7.23.59a.49.49,0,0,0-.48.42l-.28,1.9a.49.49,0,0,0,.42.55h6.82a.5.5,0,0,1,.5.49s0,.05,0,.07l-.47,3.38a.49.49,0,0,1-.49.43h-7a.49.49,0,0,0-.49.42l-.27,1.93a.5.5,0,0,0,.42.56h7.5a.49.49,0,0,1,.5.49s0,.05,0,.07l-.49,3.66a.5.5,0,0,1-.49.42H208.43a.49.49,0,0,1-.49-.49v-.07l2.58-18.46a.5.5,0,0,1,.49-.43h12.55a.49.49,0,0,1,.49.5v.07l-.52,3.65a.51.51,0,0,1-.49.43Zm11.36-4.22a.49.49,0,0,1,.49-.43H234c3.9,0,7.28,2,6.64,6.51l-.93,6.54c-.63,4.48-4.53,6.4-8.43,6.4h-6.72a.49.49,0,0,1-.49-.49.17.17,0,0,1,0-.07Zm3,13.84a.5.5,0,0,0,.42.56h2c1.35,0,2.56-.74,2.7-1.79l.93-6.54c.14-1.07-.82-1.92-2.17-1.92h-2.07a.49.49,0,0,0-.49.42l-1.32,9.26Z"
                                })
                            });
                        default:
                            return null
                    }
                };
                r.render = function() {
                    var e = this.props.className;
                    return (0, a.jsxs)("div", {
                        className: i()(m().container, e),
                        children: [this.renderSvgBorder(), (0, a.jsxs)(l.Z.div, {
                            className: m().animationContainer,
                            style: this.getContainerStyle(),
                            children: [(0, a.jsx)(h.Z, {
                                className: m().shine,
                                style: this.getShineStyle()
                            }), this.renderSvgCopy()]
                        })]
                    })
                };
                return t
            }(r.PureComponent);
            N.Types = g;

            function C(e) {
                var n = e.theme,
                    t = y(e, ["theme"]),
                    r = (0, u.useToken)(s.Z.unsafe_rawColors.WHITE_500).hex(),
                    o = (0, u.useToken)(s.Z.unsafe_rawColors.BRAND_500).hex(),
                    i = (0, c.wj)(n) ? r : o;
                return (0, a.jsx)(N, T(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            a = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        a.forEach((function(n) {
                            S(e, n, t[n])
                        }))
                    }
                    return e
                }({}, t), {
                    theme: n,
                    flashColor: i
                }))
            }
            C.Types = g
        },
        630689: (e, n, t) => {
            t.d(n, {
                NQ: () => D,
                HC: () => b,
                Db: () => H,
                fe: () => W
            });
            var a = t(785893),
                r = t(667294),
                o = t(294184),
                i = t.n(o),
                l = t(248088),
                s = t(853158),
                c = t(311865),
                u = t(369689),
                p = t.n(u);

            function h(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
                return a
            }

            function d(e, n, t, a, r, o, i) {
                try {
                    var l = e[o](i),
                        s = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(s) : Promise.resolve(s).then(a, r)
            }

            function f(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function m(e) {
                m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return m(e)
            }

            function I(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                n && _(e, n)
            }

            function S(e, n) {
                return !n || "object" !== y(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function _(e, n) {
                _ = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return _(e, n)
            }

            function T(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var a, r, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (a = t.next()).done); i = !0) {
                                o.push(a.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            r = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw r
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return h(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, a = m(e);
                    if (n) {
                        var r = m(this).constructor;
                        t = Reflect.construct(a, arguments, r)
                    } else t = a.apply(this, arguments);
                    return S(this, t)
                }
            }
            var A, P, v = function(e, n) {
                var t, a, r, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r;
                                (a = 0, r) && (o = [2 & o[0], r.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        a = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = i.trys, r = r.length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < r[1]) {
                                            i.label = r[1];
                                            r = o;
                                            break
                                        }
                                        if (r && i.label < r[2]) {
                                            i.label = r[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        r[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = n.call(e, i)
                            } catch (e) {
                                o = [6, e];
                                a = 0
                            } finally {
                                t = r = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };
            ! function(e) {
                e.NORMAL = "normal";
                e.SPEED_START = "speed_start";
                e.SPEED_LOOP = "speed_loop";
                e.FINISH = "finish";
                e.IDLE = "idle"
            }(A || (A = {}));
            var L, R, g = (E(P = {}, A.NORMAL, {
                        BEG: 0,
                        END: 600,
                        shouldForcePlayAfter: !0
                    }),
                    E(P, A.SPEED_START, {
                        BEG: 601,
                        END: 636
                    }), E(P, A.SPEED_LOOP, {
                        BEG: 637,
                        END: 668
                    }), E(P, A.FINISH, {
                        BEG: 669,
                        END: 870
                    }), E(P, A.IDLE, {
                        BEG: 871,
                        END: 878
                    }), P),
                D = function(e) {
                    I(r, e);
                    var n = O(r);

                    function r() {
                        f(this, r);
                        return n.apply(this, arguments)
                    }
                    var o = r.prototype;
                    o.importDefault = function() {
                        return t.e(27608).then(t.t.bind(t, 869059, 23)).then((function(e) {
                            return e.default
                        }))
                    };
                    o.render = function() {
                        var e = this.props,
                            n = e.className,
                            t = e.nextScene,
                            r = e.onScenePlay,
                            o = e.onSceneComplete,
                            l = e.pause,
                            s = e.pauseWhileUnfocused;
                        return (0, a.jsx)(c.Z, {
                            className: i()(p().sequencedAnimation, n),
                            importData: this.importDefault,
                            nextScene: l ? A.IDLE : t,
                            sceneSegments: g,
                            onScenePlay: r,
                            onSceneComplete: o,
                            pauseWhileUnfocused: s,
                            pause: l
                        })
                    };
                    r.getNextScene = function(e) {
                        switch (e) {
                            case r.Scenes.SPEED_START:
                                return r.Scenes.SPEED_LOOP;
                            case r.Scenes.FINISH:
                                return r.Scenes.IDLE;
                            default:
                                return e
                        }
                    };
                    return r
                }(r.PureComponent);
            D.Scenes = A;
            ! function(e) {
                e.NORMAL = "normal";
                e.SPEED_START = "speed_start";
                e.SPEED_LOOP = "speed_loop";
                e.FINISH = "finish";
                e.IDLE = "idle"
            }(L || (L = {}));
            var N, C, M = (E(R = {}, L.NORMAL, {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                }), E(R, L.SPEED_START, {
                    BEG: 601,
                    END: 636
                }), E(R, L.SPEED_LOOP, {
                    BEG: 637,
                    END: 668
                }), E(R, L.FINISH, {
                    BEG: 669,
                    END: 870
                }), E(R, L.IDLE, {
                    BEG: 871,
                    END: 878
                }), R),
                b = function(e) {
                    I(r, e);
                    var n = O(r);

                    function r() {
                        f(this, r);
                        return n.apply(this, arguments)
                    }
                    var o = r.prototype;
                    o.importDefault = function() {
                        return t.e(64849).then(t.t.bind(t, 280380, 23)).then((function(e) {
                            return e.default
                        }))
                    };
                    o.render = function() {
                        var e = this.props,
                            n = e.className,
                            t = e.nextScene,
                            r = e.onScenePlay,
                            o = e.onSceneComplete,
                            l = e.pause,
                            s = e.pauseWhileUnfocused;
                        return (0, a.jsx)(c.Z, {
                            className: i()(p().sequencedAnimation, n),
                            importData: this.importDefault,
                            nextScene: l ? L.IDLE : t,
                            sceneSegments: M,
                            onScenePlay: r,
                            onSceneComplete: o,
                            pauseWhileUnfocused: s,
                            pause: l
                        })
                    };
                    r.getNextScene = function(e) {
                        switch (e) {
                            case r.Scenes.SPEED_START:
                                return r.Scenes.SPEED_LOOP;
                            case r.Scenes.FINISH:
                                return r.Scenes.IDLE;
                            default:
                                return e
                        }
                    };
                    return r
                }(r.PureComponent);
            b.Scenes = L;
            ! function(e) {
                e.IDLE_ENTRY = "idle_entry";
                e.IDLE_LOOP = "idle_loop";
                e.BOOST_START = "boost_start";
                e.BOOST_LOOP = "boost_loop";
                e.BOOST_END = "boost_end";
                e.VICTORY = "victory";
                e.ERROR = "error"
            }(N || (N = {}));
            var x, U, j = (E(C = {}, N.IDLE_ENTRY, {
                    BEG: 0,
                    END: 50
                }), E(C, N.IDLE_LOOP, {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                }), E(C, N.BOOST_START, {
                    BEG: 230,
                    END: 275
                }), E(C, N.BOOST_LOOP, {
                    BEG: 275,
                    END: 290
                }), E(C, N.BOOST_END, {
                    BEG: 386,
                    END: 455
                }), E(C, N.VICTORY, {
                    BEG: 470,
                    END: 525
                }), E(C, N.ERROR, {
                    BEG: 290,
                    END: 375
                }), C),
                Z = function(e) {
                    I(t, e);
                    var n = O(t);

                    function t() {
                        f(this, t);
                        return n.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.getStyle = function(e) {
                        var n = this.props.animation;
                        return {
                            transform: [{
                                translateX: n.x.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
                                })
                            }, {
                                translateY: n.y.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["100%", "0%"]
                                })
                            }]
                        }
                    };
                    r.render = function() {
                        var e = this.props.className;
                        return (0, a.jsxs)("div", {
                            className: p().panningAnimation,
                            children: [(0, a.jsx)(s.Z.div, {
                                className: e,
                                style: this.getStyle(!1)
                            }), (0, a.jsx)(s.Z.div, {
                                className: e,
                                style: this.getStyle(!0)
                            })]
                        })
                    };
                    return t
                }(r.PureComponent),
                w = Object.freeze({
                    IDLE_ENTRY: {
                        toValue: 1,
                        duration: 1500
                    },
                    IDLE_LOOP: {
                        toValue: 1,
                        duration: 6e3,
                        easing: s.Z.Easing.linear
                    },
                    BOOST_START: {
                        toValue: 0,
                        duration: 2e3,
                        delay: 500
                    },
                    ERROR: {
                        toValue: 1,
                        duration: 1500,
                        delay: 1e3
                    }
                }),
                B = 1.2,
                H = function(e) {
                    I(r, e);
                    var n = O(r);

                    function r() {
                        f(this, r);
                        var e;
                        (e = n.apply(this, arguments)).backgroundAnimation = new s.Z.ValueXY({
                            x: 0,
                            y: 0
                        });
                        e.foregroundAnimation = new s.Z.ValueXY({
                            x: 0,
                            y: 0
                        });
                        e.didUnmount = !1;
                        e.animateIdleLoopBackground = function() {
                            if (!e.didUnmount) {
                                e.backgroundAnimation.x.setValue(0);
                                s.Z.timing(e.backgroundAnimation.x, {
                                    toValue: w.IDLE_LOOP.toValue,
                                    duration: w.IDLE_LOOP.duration * B,
                                    easing: s.Z.Easing.linear
                                }).start(e.animateIdleLoopBackground)
                            }
                        };
                        e.animateIdleLoopForeground = function() {
                            if (!e.didUnmount) {
                                e.foregroundAnimation.x.setValue(0);
                                s.Z.timing(e.foregroundAnimation.x, {
                                    toValue: w.IDLE_LOOP.toValue,
                                    duration: w.IDLE_LOOP.duration,
                                    easing: w.IDLE_LOOP.easing
                                }).start(e.animateIdleLoopForeground)
                            }
                        };
                        e.handleScenePlay = function(n) {
                            switch (n) {
                                case N.IDLE_ENTRY:
                                    e.animateIdleEntry();
                                    e.animateIdleLoop();
                                    break;
                                case N.ERROR:
                                    e.animateError();
                                    break;
                                case N.BOOST_START:
                                    e.animateBoostStart()
                            }
                            var t = e.props.onScenePlay;
                            null != t && t(n)
                        };
                        return e
                    }
                    var o = r.prototype;
                    o.componentWillUnmount = function() {
                        this.didUnmount = !0
                    };
                    o.importData = function() {
                        return t.e(56576).then(t.t.bind(t, 162264, 23)).then((function(e) {
                            return e.default
                        }))
                    };
                    o.animateEntry = function(e) {
                        s.Z.parallel([s.Z.timing(this.foregroundAnimation.y, {
                            toValue: e.toValue,
                            duration: e.duration,
                            delay: e.delay || 0
                        }), s.Z.timing(this.backgroundAnimation.y, {
                            toValue: e.toValue,
                            duration: e.duration * B,
                            delay: e.delay || 0
                        })]).start()
                    };
                    o.animateIdleEntry = function() {
                        this.animateEntry(w.IDLE_ENTRY)
                    };
                    o.animateError = function() {
                        this.animateEntry(w.ERROR)
                    };
                    o.animateIdleLoop = function() {
                        this.animateIdleLoopBackground();
                        this.animateIdleLoopForeground()
                    };
                    o.animateBoostStart = function() {
                        s.Z.parallel([s.Z.timing(this.foregroundAnimation.y, {
                            toValue: w.BOOST_START.toValue,
                            duration: w.BOOST_START.duration,
                            delay: w.BOOST_START.delay
                        }), s.Z.timing(this.backgroundAnimation.y, {
                            toValue: w.BOOST_START.toValue,
                            duration: w.BOOST_START.duration * B,
                            delay: w.BOOST_START.delay
                        })]).start()
                    };
                    o.render = function() {
                        var e = this.props,
                            n = e.className,
                            t = e.nextScene,
                            r = e.pause,
                            o = e.onSceneComplete;
                        return (0, a.jsxs)("div", {
                            className: i()(p().tier2Animation, n),
                            children: [r ? (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsxs)("div", {
                                    className: p().panningAnimation,
                                    children: [(0, a.jsx)("div", {
                                        className: p().tier2Background
                                    }), (0, a.jsx)("div", {
                                        className: p().tier2Foreground
                                    })]
                                })
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(Z, {
                                    className: p().tier2Background,
                                    animation: this.backgroundAnimation
                                }), (0, a.jsx)(Z, {
                                    className: p().tier2Foreground,
                                    animation: this.foregroundAnimation
                                })]
                            }), (0, a.jsx)(c.Z, {
                                className: p().sequencedAnimation,
                                importData: this.importData,
                                nextScene: r ? N.IDLE_LOOP : t,
                                sceneSegments: j,
                                onScenePlay: this.handleScenePlay,
                                onSceneComplete: o,
                                pauseWhileUnfocused: !1,
                                pause: r
                            })]
                        })
                    };
                    r.getNextScene = function(e) {
                        switch (e) {
                            case r.Scenes.IDLE_ENTRY:
                                return r.Scenes.IDLE_LOOP;
                            case r.Scenes.BOOST_START:
                                return r.Scenes.BOOST_LOOP;
                            case r.Scenes.BOOST_END:
                                return r.Scenes.VICTORY;
                            case r.Scenes.VICTORY:
                                return r.Scenes.IDLE_ENTRY;
                            case r.Scenes.ERROR:
                                return r.Scenes.IDLE_LOOP;
                            default:
                                return e
                        }
                    };
                    return r
                }(r.PureComponent);
            H.Scenes = N;
            ! function(e) {
                e.ENTRY = "entry";
                e.IDLE = "idle";
                e.STARS = "stars";
                e.ERROR = "error";
                e.SUCCESS = "success"
            }(x || (x = {}));
            var G = (E(U = {}, x.ENTRY, {
                    BEG: 0,
                    END: 180
                }), E(U, x.IDLE, {
                    BEG: 180,
                    END: 360,
                    shouldForcePlayAfter: !0
                }), E(U, x.STARS, {
                    BEG: 180,
                    END: 360,
                    shouldForcePlayAfter: !0
                }), E(U, x.ERROR, {
                    BEG: 360,
                    END: 540
                }), E(U, x.SUCCESS, {
                    BEG: 540,
                    END: 778
                }), U),
                k = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                V = [{
                    left: 29,
                    top: 100,
                    color: k.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: k.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: k.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: k.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: k.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: k.PINK
                }],
                Y = Object.freeze({
                    SCALE_INITIAL: 0,
                    SCALE_MIDDLE: 1,
                    SCALE_END: 0,
                    ROTATE_INITIAL: 0,
                    ROTATE_MIDDLE: 180,
                    ROTATE_END: 360,
                    DELAY_MIN: 200,
                    DELAY_MAX: 500,
                    DELAY_STAGGER: 200,
                    DURATION_MIDDLE: 400,
                    DURATION_END: 250,
                    SIZE_MIN: 7,
                    SIZE_MAX: 15,
                    EASING_MIDDLE: s.Z.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: s.Z.Easing.bezier(0, -.01, .99, 0)
                });

            function F(e) {
                var n = e.animate,
                    t = T(r.useState(0), 2),
                    o = t[0],
                    i = t[1],
                    s = (0, l.useSprings)(V.length, V.map((function(e, t) {
                        var a, r, l = t > 0 ? Y.DELAY_STAGGER * t + Math.random() * (Y.DELAY_MAX - Y.DELAY_MIN) + Y.DELAY_MIN : 0,
                            s = Math.random() * (Y.SIZE_MAX - Y.SIZE_MIN) + Y.SIZE_MIN;
                        return {
                            from: {
                                scale: Y.SCALE_INITIAL,
                                rotate: Y.ROTATE_INITIAL,
                                top: e.top,
                                left: e.left,
                                width: s,
                                height: s
                            },
                            to: (r = (a = function(e) {
                                return v(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return n ? [4, e({
                                                scale: Y.SCALE_MIDDLE,
                                                rotate: Y.ROTATE_MIDDLE,
                                                delay: l,
                                                config: {
                                                    duration: Y.DURATION_MIDDLE,
                                                    easing: Y.EASING_MIDDLE
                                                }
                                            })] : [3, 4];
                                        case 1:
                                            a.sent();
                                            return [4, e({
                                                scale: Y.SCALE_END,
                                                rotate: Y.ROTATE_END,
                                                config: {
                                                    duration: Y.DURATION_END,
                                                    easing: Y.EASING_END
                                                }
                                            })];
                                        case 2:
                                            a.sent();
                                            return [4, e({
                                                scale: Y.SCALE_INITIAL,
                                                rotate: Y.ROTATE_INITIAL,
                                                immediate: !0
                                            })];
                                        case 3:
                                            a.sent();
                                            t === V.length - 1 && i(o + 1);
                                            return [3, 6];
                                        case 4:
                                            return [4, e({
                                                scale: Y.SCALE_INITIAL,
                                                rotate: Y.ROTATE_INITIAL
                                            })];
                                        case 5:
                                            a.sent();
                                            a.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }, function() {
                                var e = this,
                                    n = arguments;
                                return new Promise((function(t, r) {
                                    var o = a.apply(e, n);

                                    function i(e) {
                                        d(o, t, r, i, l, "next", e)
                                    }

                                    function l(e) {
                                        d(o, t, r, i, l, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            }), function(e) {
                                return r.apply(this, arguments)
                            })
                        }
                    })));
                return (0, a.jsx)(a.Fragment, {
                    children: s.map((function(e, n) {
                        var t = V[n];
                        return (0, a.jsx)(l.animated.svg, {
                            style: e,
                            className: p().guildStar,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12.14 12.24",
                            children: (0, a.jsx)("path", {
                                d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                                fill: t.color
                            })
                        }, n)
                    }))
                })
            }
            var W = function(e) {
                I(r, e);
                var n = O(r);

                function r() {
                    f(this, r);
                    return n.apply(this, arguments)
                }
                var o = r.prototype;
                o.importData = function() {
                    return t.e(85789).then(t.t.bind(t, 748589, 23)).then((function(e) {
                        return e.default
                    }))
                };
                o.render = function() {
                    var e = this.props,
                        n = e.className,
                        t = e.nextScene,
                        r = e.pause,
                        o = e.onScenePlay,
                        l = e.onSceneComplete,
                        s = e.pauseWhileUnfocused;
                    return (0, a.jsxs)("div", {
                        className: i()(p().guildWrapper, n),
                        children: [(0, a.jsx)(c.Z, {
                            className: p().guildBackground,
                            importData: this.importData,
                            nextScene: r ? x.IDLE : t,
                            sceneSegments: G,
                            onScenePlay: o,
                            onSceneComplete: l,
                            pauseWhileUnfocused: s,
                            pause: r
                        }), (0, a.jsx)(F, {
                            animate: !r && t === x.STARS
                        })]
                    })
                };
                r.getNextScene = function(e) {
                    switch (e) {
                        case x.ENTRY:
                        case x.ERROR:
                        case x.SUCCESS:
                            return x.IDLE;
                        default:
                            return e
                    }
                };
                return r
            }(r.PureComponent);
            W.Scenes = x
        }
    }
]);